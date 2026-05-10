// ═══════════════════════════════════════════
// ENEMaster — gemini.js  (robust JSON parser)
// ═══════════════════════════════════════════

async function callAI(prompt, maxTokens) {
  maxTokens = maxTokens || 2048;
  const proxyUrl = (typeof AI_PROXY_URL !== 'undefined') ? AI_PROXY_URL : '/api/ai';
  const models   = (typeof OR_MODELS !== 'undefined' && OR_MODELS.length) ? OR_MODELS
    : ['meta-llama/llama-3.3-70b-instruct:free','mistralai/mistral-7b-instruct:free'];

  let lastError = null;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    try {
      const resp = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: model, max_tokens: maxTokens,
          messages: [{ role: 'user', content: prompt }]
        })
      });

      if (resp.status === 429 || resp.status === 402) {
        console.warn('[AI] ' + resp.status + ' em ' + model);
        lastError = new Error('Limite atingido em ' + model);
        continue;
      }
      if (!resp.ok) {
        const txt = await resp.text().catch(() => '');
        lastError = new Error('HTTP ' + resp.status + ': ' + txt.slice(0, 200));
        continue;
      }

      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content;
      if (!text || !text.trim()) {
        lastError = new Error('Resposta vazia de ' + model);
        continue;
      }
      console.log('[AI] OK:', model);
      return text.trim();
    } catch(e) {
      lastError = e;
      console.warn('[AI] Erro em ' + model + ':', e.message);
    }
  }
  throw lastError || new Error('Todos os modelos falharam.');
}

// ── Parser de JSON ultra-robusto ─────────────────────────────────────────────
function extractJSON(raw) {
  let clean = raw.trim();

  // 1. Remove blocos markdown
  clean = clean.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();

  // 2. Encontra o bloco JSON pelo primeiro { e último }
  const start = clean.indexOf('{');
  const end   = clean.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('JSON não encontrado. Resposta: ' + clean.slice(0, 200));
  }
  clean = clean.slice(start, end + 1);

  // 3. Tenta parse direto
  try { return JSON.parse(clean); } catch(_) {}

  // 4. Limpeza progressiva de problemas comuns em JSON gerado por IA
  try {
    let fixed = clean
      // Remove vírgulas antes de } e ]
      .replace(/,\s*([}\]])/g, '$1')
      // Corrige aspas simples usadas como aspas duplas (fora de strings)
      .replace(/:\s*'([^']*)'/g, ': "$1"')
      // Remove caracteres de controle
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ')
      // Escapa barras invertidas soltas (não seguidas de char especial)
      .replace(/\\(?!["\\/bfnrtu])/g, '\\\\')
      // Remove trailing commas em arrays
      .replace(/,(\s*\])/g, '$1');
    return JSON.parse(fixed);
  } catch(_) {}

  // 5. Extração campo a campo via regex (último recurso)
  console.warn('[AI] JSON corrompido — usando extração por regex');
  return extractJSONByRegex(clean);
}

// Extração por regex quando o JSON está muito corrompido
function extractJSONByRegex(raw) {
  // Tenta extrair o array "questions" diretamente
  const questionsMatch = raw.match(/"questions"\s*:\s*\[([\s\S]*)\]/);
  if (questionsMatch) {
    // Extrai questões individuais
    const questions = [];
    const qPattern = /\{[^{}]*"stem"\s*:[^{}]*\}/g;
    let m;
    while ((m = qPattern.exec(questionsMatch[1])) !== null) {
      try {
        // Limpa e parseia cada questão individualmente
        const qClean = m[0]
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ')
          .replace(/\\(?!["\\/bfnrtu])/g, '\\\\')
          .replace(/,\s*}/g, '}');
        questions.push(JSON.parse(qClean));
      } catch(_) {}
    }
    if (questions.length > 0) return { questions };
  }
  throw new Error('Não foi possível extrair JSON da resposta da IA.');
}

// Sanitiza texto para uso seguro em JSON
function sanitizeText(text) {
  if (typeof text !== 'string') return String(text || '');
  return text
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, '')
    .replace(/\t/g, ' ')
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ');
}

// ── Gerar Quiz ────────────────────────────────────────────────────────────────
async function generateQuiz(moduleTitle, subjectName) {
  const prompt =
    'Você é elaborador de questões ENEM. Crie 7 questões para "' + moduleTitle + '" (' + subjectName + ').\n\n' +
    'REGRAS OBRIGATÓRIAS:\n' +
    '1. Responda APENAS com JSON puro — sem texto antes, sem texto depois, sem markdown\n' +
    '2. Use apenas aspas duplas no JSON\n' +
    '3. Não use caracteres especiais ou acentos dentro de chaves JSON\n' +
    '4. Strings devem ser simples, sem quebras de linha internas\n' +
    '5. Dificuldade: 2 fáceis, 3 médias, 2 difíceis\n\n' +
    'FORMATO EXATO:\n' +
    '{"questions":[{"context":"texto contexto ou vazio","stem":"enunciado da questao","options":["opcao A","opcao B","opcao C","opcao D","opcao E"],"correct":0,"explanation":"explicacao da resposta correta","wrong_exp":["","motivo B errado","motivo C errado","motivo D errado","motivo E errado"]}]}';

  const raw  = await callAI(prompt, 3500);
  const data = extractJSON(raw);

  if (!data.questions || !Array.isArray(data.questions) || !data.questions.length) {
    throw new Error('Nenhuma questão gerada');
  }

  return data.questions.map(function(q, i) {
    const opts = (Array.isArray(q.options) ? q.options : []).slice(0, 5);
    while (opts.length < 5) opts.push('Alternativa ' + String.fromCharCode(65 + opts.length));
    const correct  = Math.max(0, Math.min(4, parseInt(q.correct) || 0));
    const wrongExp = Array.isArray(q.wrong_exp) ? q.wrong_exp.slice(0, 5) : [];
    while (wrongExp.length < 5) wrongExp.push('');
    return {
      context:     sanitizeText(q.context || ''),
      stem:        sanitizeText(q.stem || ('Questão ' + (i+1))),
      options:     opts.map(sanitizeText),
      correct:     correct,
      explanation: sanitizeText(q.explanation || 'Consulte o conteúdo do módulo.'),
      wrong_exp:   wrongExp.map(sanitizeText),
    };
  });
}

// ── Corrigir Redação ──────────────────────────────────────────────────────────
async function corrigirRedacao(texto, tema) {
  const prompt =
    'Corrija esta redação ENEM. Responda APENAS com JSON puro, sem markdown, sem texto antes ou depois.\n' +
    'TEMA: ' + tema + '\n' +
    'REDACAO: ' + texto.slice(0, 2000) + '\n\n' +
    'JSON EXATO (preencha os valores, mantenha a estrutura):\n' +
    '{"c1":{"nota":160,"titulo":"Dominio da norma culta","positivos":"pontos positivos","melhorias":"sugestoes","erros":[]},' +
    '"c2":{"nota":160,"titulo":"Compreensao da proposta","positivos":"...","melhorias":"..."},' +
    '"c3":{"nota":120,"titulo":"Argumentacao e repertorio","positivos":"...","melhorias":"...","sugestoes_repertorio":[]},' +
    '"c4":{"nota":120,"titulo":"Coesao textual","positivos":"...","melhorias":"...","conectivos_sugeridos":[]},' +
    '"c5":{"nota":80,"titulo":"Proposta de intervencao","positivos":"...","melhorias":"...","proposta_modelo":"..."},' +
    '"total":640,"nivel":"Bom","feedback_geral":"feedback aqui","proximo_passo":"passo aqui"}';

  const raw  = await callAI(prompt, 2000);
  const data = extractJSON(raw);

  ['c1','c2','c3','c4','c5'].forEach(function(k) {
    if (!data[k]) data[k] = { nota: 0, titulo: k.toUpperCase(), positivos: '', melhorias: '' };
    data[k].nota = Math.min(200, Math.max(0, Math.round((Number(data[k].nota) || 0) / 40) * 40));
  });
  data.total = ['c1','c2','c3','c4','c5'].reduce(function(s,k){ return s + data[k].nota; }, 0);
  if (!data.nivel) {
    data.nivel = data.total >= 800 ? 'Excelente' : data.total >= 600 ? 'Muito Bom'
               : data.total >= 400 ? 'Bom' : data.total >= 200 ? 'Regular' : 'Insuficiente';
  }
  return data;
}

// ── Gerar Simulado ────────────────────────────────────────────────────────────
async function generateSimulado(subjectName, modulesList, count) {
  count = count || 20;
  const topics = modulesList.slice(0, 8).map(function(m){ return m.title; }).join(', ');

  const prompt =
    'Crie ' + count + ' questoes ENEM para ' + subjectName + '. Topicos: ' + topics + '.\n\n' +
    'REGRAS: Responda APENAS com JSON puro, sem markdown, sem texto antes ou depois.\n' +
    'Use apenas aspas duplas. Sem quebras de linha dentro de strings.\n\n' +
    'FORMATO:\n' +
    '{"questions":[{"topic":"topico","difficulty":"medio","context":"","stem":"enunciado",' +
    '"options":["A","B","C","D","E"],"correct":0,"explanation":"explicacao"}]}';

  const raw  = await callAI(prompt, 4500);
  const data = extractJSON(raw);

  if (!data.questions || !data.questions.length) throw new Error('Nenhuma questão gerada');

  return data.questions.map(function(q, i) {
    const opts = (Array.isArray(q.options) ? q.options : []).slice(0, 5);
    while (opts.length < 5) opts.push('Alternativa ' + String.fromCharCode(65 + opts.length));
    return {
      topic:       sanitizeText(q.topic      || ('Questão ' + (i+1))),
      difficulty:  sanitizeText(q.difficulty || 'médio'),
      context:     sanitizeText(q.context    || ''),
      stem:        sanitizeText(q.stem       || ('Questão ' + (i+1))),
      options:     opts.map(sanitizeText),
      correct:     Math.max(0, Math.min(4, parseInt(q.correct) || 0)),
      explanation: sanitizeText(q.explanation || ''),
    };
  });
}

const callGemini = callAI;
