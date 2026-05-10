// ═══════════════════════════════════════════
// ENEMaster — gemini.js  (proxy edition)
// Chama /api/ai (Vercel Function) — chave segura no servidor
// ═══════════════════════════════════════════

// ── Chamada principal com fallback automático ────────────────────────────────
async function callAI(prompt, maxTokens) {
  maxTokens = maxTokens || 2048;

  const proxyUrl = (typeof AI_PROXY_URL !== 'undefined') ? AI_PROXY_URL : '/api/ai';
  const models   = (typeof OR_MODELS !== 'undefined' && OR_MODELS.length)
    ? OR_MODELS
    : [
        "deepseek/deepseek-r1-0528:free",
        "deepseek/deepseek-chat-v3-0324:free",
        "meta-llama/llama-3.3-70b-instruct:free",
        "mistralai/mistral-7b-instruct:free"
      ];

  let lastError = null;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    try {
      const resp = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model:      model,
          max_tokens: maxTokens,
          messages:   [{ role: 'user', content: prompt }]
        })
      });

      // 429 = rate limit → tenta próximo modelo
      if (resp.status === 429) {
        console.warn('[AI] Rate limit em ' + model + ', tentando próximo...');
        lastError = new Error('Rate limit em ' + model);
        continue;
      }

      // 500 com erro de API key não configurada
      if (resp.status === 500) {
        const errData = await resp.json().catch(() => ({}));
        if (errData.error && String(errData.error).includes('API key')) {
          throw new Error('Variável OPENROUTER_KEY não configurada no Vercel. Vá em Settings → Environment Variables.');
        }
        lastError = new Error('Erro interno do servidor: ' + JSON.stringify(errData).slice(0, 200));
        continue;
      }

      if (!resp.ok) {
        const txt = await resp.text().catch(() => '');
        lastError = new Error('HTTP ' + resp.status + ': ' + txt.slice(0, 200));
        console.warn('[AI] Erro em ' + model + ':', lastError.message);
        continue;
      }

      const data = await resp.json();

      // Extrai texto (formato OpenAI-compatible)
      const text = data &&
                   data.choices &&
                   data.choices[0] &&
                   data.choices[0].message &&
                   data.choices[0].message.content;

      if (!text || !text.trim()) {
        lastError = new Error('Resposta vazia do modelo ' + model);
        console.warn('[AI]', lastError.message);
        continue;
      }

      console.log('[AI] Sucesso com:', model);
      return text.trim();

    } catch (e) {
      // Se for erro crítico (não relacionado ao modelo), lança imediatamente
      if (e.message.includes('OPENROUTER_KEY') || e.message.includes('Variável')) {
        throw e;
      }
      lastError = e;
      console.warn('[AI] Erro em ' + model + ':', e.message);
    }
  }

  throw lastError || new Error('Todos os modelos falharam. Tente novamente.');
}

// ── Extrai JSON robustamente ──────────────────────────────────────────────────
function extractJSON(raw) {
  let clean = raw.trim();
  clean = clean.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();

  const start = clean.indexOf('{');
  const end   = clean.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('JSON não encontrado. Resposta: ' + clean.slice(0, 300));
  }
  clean = clean.slice(start, end + 1);

  try {
    return JSON.parse(clean);
  } catch (_) {
    clean = clean
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ')
      .replace(/\\'/g, "'");
    return JSON.parse(clean);
  }
}

// ── Gerar Quiz ────────────────────────────────────────────────────────────────
async function generateQuiz(moduleTitle, subjectName) {
  const prompt =
    'Você é um elaborador especialista em questões do ENEM brasileiro.\n' +
    'Crie exatamente 7 questões originais para o módulo "' + moduleTitle + '" (' + subjectName + ').\n\n' +
    'Requisitos:\n' +
    '- Estilo ENEM: contextualizadas, interpretativas, aplicadas ao cotidiano\n' +
    '- Dificuldade variada: 2 fáceis, 3 médias, 2 difíceis\n' +
    '- Cada questão deve ter: contexto motivador (string, pode ser ""), enunciado claro,\n' +
    '  exatamente 5 alternativas (A a E), índice da correta (0=A,1=B,...4=E),\n' +
    '  explicação detalhada da alternativa correta,\n' +
    '  explicação de por que cada alternativa errada está errada (array de 5 strings)\n\n' +
    'RESPONDA SOMENTE com JSON válido, sem texto antes ou depois, sem markdown:\n' +
    '{"questions":[{"context":"","stem":"enunciado","options":["A","B","C","D","E"],' +
    '"correct":0,"explanation":"por que A é correta","wrong_exp":["","por que B errada","por que C errada","por que D errada","por que E errada"]}]}';

  const raw  = await callAI(prompt, 3500);
  const data = extractJSON(raw);

  if (!data.questions || !Array.isArray(data.questions) || !data.questions.length) {
    throw new Error('Estrutura de questões inválida na resposta da IA');
  }

  return data.questions.map(function(q, i) {
    if (!q.stem) throw new Error('Questão ' + (i + 1) + ' sem enunciado');
    const opts = (Array.isArray(q.options) ? q.options : []).slice(0, 5);
    while (opts.length < 5) opts.push('Alternativa ' + String.fromCharCode(65 + opts.length));
    const correct  = typeof q.correct === 'number' ? Math.max(0, Math.min(4, Math.round(q.correct))) : 0;
    const wrongExp = Array.isArray(q.wrong_exp) ? q.wrong_exp.slice(0, 5) : [];
    while (wrongExp.length < 5) wrongExp.push('');
    return {
      context:     String(q.context || ''),
      stem:        String(q.stem),
      options:     opts.map(String),
      correct:     correct,
      explanation: String(q.explanation || 'Consulte o conteúdo do módulo.'),
      wrong_exp:   wrongExp.map(String),
    };
  });
}

// ── Corrigir Redação ──────────────────────────────────────────────────────────
async function corrigirRedacao(texto, tema) {
  const prompt =
    'Você é um corretor especialista em redações do ENEM brasileiro.\n\n' +
    'TEMA: "' + tema + '"\n\n' +
    'REDAÇÃO:\n' + texto + '\n\n' +
    'Avalie esta redação nos 5 critérios oficiais do ENEM (0 a 200 pts cada, múltiplos de 40).\n' +
    'Seja específico: cite trechos do texto, aponte erros reais, dê sugestões concretas.\n\n' +
    'RESPONDA SOMENTE com JSON válido, sem markdown:\n' +
    '{"c1":{"nota":160,"titulo":"Domínio da norma culta","positivos":"...","melhorias":"...","erros":[]},' +
    '"c2":{"nota":160,"titulo":"Compreensão da proposta","positivos":"...","melhorias":"..."},' +
    '"c3":{"nota":120,"titulo":"Argumentação e repertório","positivos":"...","melhorias":"...","sugestoes_repertorio":[]},' +
    '"c4":{"nota":120,"titulo":"Coesão textual","positivos":"...","melhorias":"...","conectivos_sugeridos":[]},' +
    '"c5":{"nota":80,"titulo":"Proposta de intervenção","positivos":"...","melhorias":"...","proposta_modelo":"..."},' +
    '"total":640,"nivel":"Bom","feedback_geral":"...","proximo_passo":"..."}';

  const raw  = await callAI(prompt, 2000);
  const data = extractJSON(raw);

  const keys = ['c1','c2','c3','c4','c5'];
  keys.forEach(function(k) {
    if (!data[k]) data[k] = { nota: 0, titulo: k.toUpperCase(), positivos: '', melhorias: '' };
    data[k].nota = Math.min(200, Math.max(0, Math.round((Number(data[k].nota) || 0) / 40) * 40));
  });
  data.total = keys.reduce(function(s, k) { return s + data[k].nota; }, 0);
  if (!data.nivel) {
    data.nivel = data.total >= 800 ? 'Excelente'
               : data.total >= 600 ? 'Muito Bom'
               : data.total >= 400 ? 'Bom'
               : data.total >= 200 ? 'Regular' : 'Insuficiente';
  }
  return data;
}

// ── Gerar Simulado ────────────────────────────────────────────────────────────
async function generateSimulado(subjectName, modulesList, count) {
  count = count || 20;
  const topicsStr = modulesList.map(function(m) { return m.title; }).join(', ');

  const prompt =
    'Crie um simulado ENEM com ' + count + ' questões para ' + subjectName + '.\n' +
    'Distribua pelos tópicos: ' + topicsStr + '.\n\n' +
    'Requisitos: estilo ENEM real, dificuldade variada, 5 alternativas cada.\n\n' +
    'RESPONDA SOMENTE com JSON válido, sem markdown:\n' +
    '{"questions":[{"topic":"tópico","difficulty":"médio","context":"","stem":"enunciado",' +
    '"options":["A","B","C","D","E"],"correct":0,"explanation":"explicação"}]}';

  const raw  = await callAI(prompt, 4500);
  const data = extractJSON(raw);

  if (!data.questions || !data.questions.length) {
    throw new Error('Nenhuma questão foi gerada');
  }

  return data.questions.map(function(q, i) {
    const opts = (Array.isArray(q.options) ? q.options : []).slice(0, 5);
    while (opts.length < 5) opts.push('Alternativa ' + String.fromCharCode(65 + opts.length));
    return {
      topic:       String(q.topic      || ('Questão ' + (i + 1))),
      difficulty:  String(q.difficulty || 'médio'),
      context:     String(q.context    || ''),
      stem:        String(q.stem       || ('Questão ' + (i + 1))),
      options:     opts.map(String),
      correct:     Math.max(0, Math.min(4, Math.round(Number(q.correct) || 0))),
      explanation: String(q.explanation || ''),
    };
  });
}

// Alias para compatibilidade
const callGemini = callAI;
