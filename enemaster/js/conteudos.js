// ═══════════════════════════════════════════
// ENEMaster — conteudos.js
// Static subject + module content database
// ═══════════════════════════════════════════

const SUBJECTS = [
  {
    id:'mat', name:'Matemática', icon:'📐', color:'#3b82f6',
    desc:'Funções, geometria, probabilidade, álgebra, estatística e financeira',
    modules:[
      {id:'mat01',title:'Conjuntos Numéricos e Operações',level:'Fundamental',tags:['Números','Porcentagem','Operações'],summary:'Naturais, inteiros, racionais, reais, potências e porcentagem'},
      {id:'mat02',title:'Funções: Afim e Quadrática',level:'Médio',tags:['Funções','Gráficos','Bhaskara'],summary:'Gráficos, raízes, vértice, crescimento e modelagem'},
      {id:'mat03',title:'Funções Exponencial e Logarítmica',level:'Médio',tags:['Exp','Log','Crescimento'],summary:'Modelos de crescimento, pH, escala Richter e decibéis'},
      {id:'mat05',title:'Geometria Plana',level:'Médio',tags:['Áreas','Pitágoras','Trigonometria'],summary:'Polígonos, círculos, Pitágoras e ângulos especiais'},
      {id:'mat07',title:'Probabilidade e Combinatória',level:'Avançado',tags:['Probabilidade','Combinação','Arranjo'],summary:'Contagem, arranjos, combinações e chances'},
      {id:'mat08',title:'Estatística',level:'Médio',tags:['Média','Mediana','Gráficos'],summary:'Medidas de tendência central e leitura de dados'},
      {id:'mat09',title:'Progressões e Matemática Financeira',level:'Avançado',tags:['PA','PG','Juros'],summary:'PA, PG, juros simples e compostos'},
      {id:'mat04',title:'Trigonometria',level:'Médio',tags:['Seno','Cosseno','Tangente'],summary:'Razões trigonométricas, ângulos especiais e lei dos senos/cossenos'},
      {id:'mat06',title:'Geometria Espacial',level:'Médio',tags:['Volumes','Sólidos','Planificação'],summary:'Prismas, pirâmides, cilindros, cones e esferas'},
      {id:'mat10',title:'Equações e Sistemas',level:'Médio',tags:['Equações','Sistemas','Módulo'],summary:'Equações do 1º/2º grau, sistemas lineares, inequações e módulo'},
    ]
  },
  {
    id:'lc', name:'Linguagens', icon:'📖', color:'#f59e0b',
    desc:'Interpretação, literatura, gramática, variação linguística e língua estrangeira',
    modules:[
      {id:'lc01',title:'Interpretação e Gêneros Textuais',level:'Fundamental',tags:['Leitura','Gêneros','Intertextualidade'],summary:'Estratégias de leitura, tipos e gêneros textuais'},
      {id:'lc02',title:'Figuras de Linguagem',level:'Médio',tags:['Metáfora','Ironia','Recursos'],summary:'Metáfora, metonímia, ironia, hipérbole e efeitos de sentido'},
      {id:'lc07',title:'Modernismo Brasileiro',level:'Avançado',tags:['Modernismo','1922','Literatura'],summary:'Semana de 22, três fases e principais autores'},
      {id:'lc03',title:'Gramática: Morfologia e Sintaxe',level:'Médio',tags:['Gramática','Sintaxe','Concordância'],summary:'Classes de palavras, análise sintática, concordância e regência'},
      {id:'lc04',title:'Variação Linguística',level:'Médio',tags:['Variação','Norma','Sociolinguística'],summary:'Regional, social, histórica e adequação ao contexto'},
      {id:'lc05',title:'Literatura: Trovadorismo ao Romantismo',level:'Médio',tags:['Trovadorismo','Barroco','Romantismo'],summary:'Do trovadorismo medieval ao romantismo brasileiro'},
      {id:'lc06',title:'Realismo, Naturalismo e Pré-Modernismo',level:'Médio',tags:['Realismo','Machado','Naturalismo'],summary:'Machado de Assis, Aluísio Azevedo e Euclides da Cunha'},
      {id:'lc08',title:'Língua Estrangeira: Estratégias de Leitura',level:'Fundamental',tags:['Inglês','Espanhol','Cognatos'],summary:'Como gabaritar língua estrangeira no ENEM'},
    ]
  },
  {
    id:'ch', name:'Ciências Humanas', icon:'🌍', color:'#8b5cf6',
    desc:'História, Geografia, Filosofia e Sociologia aplicadas ao presente',
    modules:[
      {id:'ch01',title:'Brasil Colonial: Conquista e Resistência',level:'Fundamental',tags:['Colonial','Escravidão','Quilombos'],summary:'Conquista, ciclos econômicos e formas de resistência'},
      {id:'ch03',title:'República: da Velha à Nova',level:'Médio',tags:['República','Vargas','Ditadura'],summary:'Da proclamação à redemocratização'},
      {id:'ch08',title:'Filosofia: Do Antigo ao Iluminismo',level:'Médio',tags:['Sócrates','Locke','Rousseau'],summary:'Grécia, contrato social e Iluminismo'},
      {id:'ch09',title:'Sociologia: Sociedade e Poder',level:'Médio',tags:['Marx','Durkheim','Weber'],summary:'Clássicos da sociologia e movimentos sociais'},
      {id:'ch02',title:'Brasil Imperial e Independência',level:'Fundamental',tags:['Império','1822','Abolição'],summary:'Independência, Primeiro e Segundo Reinado'},
      {id:'ch04',title:'História Mundial: Revoluções e Guerras',level:'Médio',tags:['Guerras Mundiais','Guerra Fria','Revolução Francesa'],summary:'Revolução Francesa, Industrial, Guerras Mundiais e Guerra Fria'},
      {id:'ch05',title:'Geopolítica e Mundo Contemporâneo',level:'Médio',tags:['Globalização','Blocos','Conflitos'],summary:'Globalização, blocos econômicos e ordem multipolar'},
      {id:'ch06',title:'Geografia Física e Biomas',level:'Médio',tags:['Biomas','Clima','Hidrografia'],summary:'Relevo, clima, hidrografia e os 6 biomas brasileiros'},
      {id:'ch07',title:'Geografia Urbana e Demográfica',level:'Médio',tags:['Urbanização','IDH','Gini'],summary:'Urbanização, êxodo rural, IDH e desigualdade'},
    ]
  },
  {
    id:'cn', name:'Ciências da Natureza', icon:'🔬', color:'#10b981',
    desc:'Física, Química e Biologia com foco em aplicações do cotidiano',
    modules:[
      {id:'cn01',title:'Mecânica: Cinemática e Dinâmica',level:'Médio',tags:['MRU','MRUV','Newton'],summary:'Movimento, forças e Leis de Newton'},
      {id:'cn04',title:'Química: Átomo e Tabela Periódica',level:'Fundamental',tags:['Átomo','Tabela','Ligações'],summary:'Modelos atômicos, tabela periódica e ligações químicas'},
      {id:'cn07',title:'Biologia Celular e Molecular',level:'Médio',tags:['Célula','DNA','Divisão'],summary:'Organelas, DNA, mitose, meiose e síntese proteica'},
      {id:'cn08',title:'Genética e Evolução',level:'Avançado',tags:['Mendel','Darwin','Hereditariedade'],summary:'Leis de Mendel, seleção natural e especiação'},
      {id:'cn09',title:'Ecologia e Meio Ambiente',level:'Médio',tags:['Ecossistema','Cadeias','Ciclos'],summary:'Cadeias alimentares, ciclos e impactos ambientais'},
      {id:'cn02',title:'Termologia e Ondas',level:'Médio',tags:['Calor','Temperatura','Óptica'],summary:'Temperatura, calor, dilatação, óptica e ondas'},
      {id:'cn03',title:'Eletricidade e Eletromagnetismo',level:'Médio',tags:['Ohm','Circuitos','Potência'],summary:'Lei de Ohm, circuitos, potência e indução eletromagnética'},
      {id:'cn05',title:'Reações Químicas e Estequiometria',level:'Médio',tags:['Reações','Estequiometria','pH'],summary:'Tipos de reação, balanceamento e cálculo estequiométrico'},
      {id:'cn06',title:'Química Orgânica',level:'Avançado',tags:['Funções Orgânicas','Polímeros','Bioquímica'],summary:'Funções orgânicas, isomeria, polímeros e bioquímica'},
    ]
  }
];

const CONTEUDOS = {

// ============================================================
// MATEMÁTICA
// ============================================================
mat01: {
  title: "Conjuntos Numéricos e Operações",
  subtitle: "Da base à aplicação: entenda os números que o ENEM mais cobra",
  sections: [
    {
      id: "s1", title: "Os Conjuntos Numéricos",
      content: `
        <div class="cs">
          <h2>Por que estudar Conjuntos Numéricos?</h2>
          <p>Antes de qualquer cálculo, o ENEM exige que você saiba <strong>com qual tipo de número está trabalhando</strong>. Saber classificar números evita erros clássicos como "dividir por zero" ou "afirmar que √2 é racional".</p>

          <h3>Naturais (ℕ)</h3>
          <p>São os números usados para contar: <strong>0, 1, 2, 3, 4, …</strong></p>
          <p>Usamos naturais quando contamos itens, posições ou quantidades inteiras e não negativas. Exemplo: número de alunos em uma sala.</p>

          <h3>Inteiros (ℤ)</h3>
          <p>Incluem os naturais <strong>e seus opostos negativos</strong>: … −3, −2, −1, 0, 1, 2, 3 …</p>
          <p>Surgem quando precisamos representar dívidas, temperaturas abaixo de zero ou altitudes negativas (abaixo do nível do mar).</p>

          <h3>Racionais (ℚ)</h3>
          <p>Todo número que pode ser escrito como <strong>fração p/q</strong> (com p e q inteiros e q ≠ 0). Incluem inteiros, frações e decimais finitos ou periódicos.</p>
          <p>Exemplos: 1/2 = 0,5 · 1/3 = 0,333… (dízima periódica) · −7/4 = −1,75</p>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Dica: Decimais Periódicos</div><div class="c-text">Todo decimal com período repetitivo (0,333… ou 0,142857142857…) é racional, pois pode ser convertido em fração. Isso é cobrado no ENEM!</div></div></div>

          <h3>Irracionais (𝕀)</h3>
          <p>Números que <strong>não podem ser escritos como fração</strong> e têm casas decimais infinitas e não periódicas. Exemplos clássicos: √2 ≈ 1,41421356…  · π ≈ 3,14159265…  · número de ouro φ ≈ 1,61803…</p>

          <h3>Reais (ℝ)</h3>
          <p>A reunião de todos: racionais + irracionais. É o conjunto que "preenche" a reta numérica completamente: <strong>ℝ = ℚ ∪ 𝕀</strong></p>

          <div class="concept"><div class="concept-t">📌 Hierarquia dos Conjuntos</div><p>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — cada conjunto está contido no próximo. Ou seja, todo natural é inteiro, todo inteiro é racional, e todo racional é real.</p></div>
        </div>`
    },
    {
      id: "s2", title: "Operações e Propriedades",
      content: `
        <div class="cs">
          <h2>Operações Fundamentais</h2>
          <h3>Potenciação</h3>
          <p><strong>aⁿ</strong> significa multiplicar a por si mesmo n vezes. Propriedades obrigatórias:</p>
          <ul>
            <li><strong>Produto de mesma base:</strong> aᵐ · aⁿ = aᵐ⁺ⁿ</li>
            <li><strong>Divisão de mesma base:</strong> aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
            <li><strong>Potência de potência:</strong> (aᵐ)ⁿ = aᵐⁿ</li>
            <li><strong>Expoente zero:</strong> a⁰ = 1 (para a ≠ 0)</li>
            <li><strong>Expoente negativo:</strong> a⁻ⁿ = 1/aⁿ</li>
            <li><strong>Expoente fracionário:</strong> a^(1/n) = ⁿ√a</li>
          </ul>

          <h3>Radiciação</h3>
          <p>A raiz é a operação inversa da potenciação. <strong>ⁿ√a = b ↔ bⁿ = a</strong></p>
          <ul>
            <li>√(a·b) = √a · √b</li>
            <li>√(a/b) = √a / √b</li>
            <li>Racionalização: multiplicar por conjugado para eliminar raiz no denominador</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo Resolvido — Racionalização</div>
            <p><strong>Simplificar:</strong> 6 / √3</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Multiplique numerador e denominador por √3: (6·√3) / (√3·√3)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Denominador: √3·√3 = 3</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Resultado: 6√3/3 = <strong>2√3</strong></div></div>
          </div>

          <h3>Regra de Três Simples e Composta</h3>
          <p>A regra de três é uma das ferramentas mais cobradas no ENEM em contextos do cotidiano (receitas, combustível, escala de mapas).</p>
          <ul>
            <li><strong>Simples:</strong> duas grandezas com relação direta ou inversa</li>
            <li><strong>Composta:</strong> três ou mais grandezas envolvidas</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo ENEM — Regra de Três</div>
            <p>Um carro percorre 480 km com 40 litros. Quantos litros são necessários para 300 km?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Relação direta: mais km → mais litros</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">480 km → 40 L ; 300 km → x</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">x = (300 × 40)/480 = 12000/480 = <strong>25 litros</strong></div></div>
          </div>

          <div class="errbox"><div class="err-t">❌ Erro Comum</div><p>Confundir grandezas diretamente e inversamente proporcionais. Lembre: se uma aumenta e a outra também aumenta → direta. Se uma aumenta e a outra diminui → inversa. Identifique isso antes de montar a proporção.</p></div>
        </div>`
    },
    {
      id: "s3", title: "Porcentagem e Proporção",
      content: `
        <div class="cs">
          <h2>Porcentagem — O Tema mais Cobrado</h2>
          <p>Porcentagem aparece em praticamente toda edição do ENEM: descontos, juros, inflação, eleições, dados do IBGE. Dominar isso é ganhar pontos certos.</p>

          <div class="fbox">p% de N = (p/100) × N</div>

          <h3>Aumento e Desconto Percentual</h3>
          <ul>
            <li><strong>Aumento de p%:</strong> Multiplicar por (1 + p/100) → Ex: aumento de 20% → × 1,20</li>
            <li><strong>Desconto de p%:</strong> Multiplicar por (1 − p/100) → Ex: desconto de 15% → × 0,85</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo ENEM — Aumento e Desconto Sucessivos</div>
            <p>Um produto custava R$ 200. Sofreu aumento de 30% e depois desconto de 30%. Qual o preço final?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Aumento 30%: 200 × 1,30 = R$ 260</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Desconto 30%: 260 × 0,70 = R$ 182</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t"><strong>O preço final (R$ 182) é menor que o inicial (R$ 200)!</strong> Variação total: −9%</div></div>
            <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--orange);">⚠️ Aumentar e depois descontar o mesmo percentual NÃO retorna ao valor original.</p>
          </div>

          <div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Estratégia ENEM</div><div class="c-text">O ENEM adora contextualizar porcentagem em gráficos e tabelas. Sempre identifique qual é o "todo" (100%) antes de calcular. O erro mais frequente é calcular percentual sobre valor errado.</div></div></div>
        </div>`
    }
  ]
},

mat02: {
  title: "Funções: Afim e Quadrática",
  subtitle: "Gráficos, raízes e aplicações — base de toda matemática do ENEM",
  sections: [
    {
      id: "s1", title: "Função Afim (1º Grau)",
      content: `
        <div class="cs">
          <h2>O que é uma Função?</h2>
          <p>Uma <strong>função f: A → B</strong> é uma relação que associa cada elemento de A a exatamente um elemento de B. Pense assim: você coloca um valor (x) numa "máquina" e ela produz um único resultado (y).</p>
          <div class="concept"><div class="concept-t">📌 Definição Formal</div><p>f(x) = y significa: para cada x do domínio, existe um único y no contradomínio. Se um x gera dois y diferentes, não é função.</p></div>

          <h2>Função Afim</h2>
          <div class="fbox">f(x) = ax + b &nbsp;&nbsp;&nbsp; (a ≠ 0)</div>
          <ul>
            <li><strong>a</strong> = coeficiente angular (inclinação da reta)</li>
            <li><strong>b</strong> = coeficiente linear (onde a reta cruza o eixo y)</li>
            <li>Se a &gt; 0 → função crescente (reta sobe da esquerda para direita)</li>
            <li>Se a &lt; 0 → função decrescente (reta desce)</li>
          </ul>

          <h3>Zero da Função (Raiz)</h3>
          <p>É o valor de x onde f(x) = 0, ou seja, onde a reta cruza o eixo x:</p>
          <div class="fbox">ax + b = 0 → x = −b/a</div>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo Resolvido — Contexto ENEM</div>
            <p>Um táxi cobra R$ 5,00 de bandeirada + R$ 2,50 por km. Modelar o custo e calcular para 12 km.</p>
            <div class="step"><div class="step-n">1</div><div class="step-t"><strong>Modelo:</strong> f(x) = 2,50x + 5,00 (função afim com a=2,50 e b=5,00)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Para x = 12 km: f(12) = 2,50(12) + 5,00 = 30 + 5 = <strong>R$ 35,00</strong></div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Raiz (quando o custo seria zero): x = −5/2,50 = −2 km (sem sentido físico, mas matematicamente válido)</div></div>
          </div>
        </div>`
    },
    {
      id: "s2", title: "Função Quadrática (2º Grau)",
      content: `
        <div class="cs">
          <h2>Função Quadrática</h2>
          <div class="fbox">f(x) = ax² + bx + c &nbsp;&nbsp; (a ≠ 0)</div>
          <p>O gráfico é uma <strong>parábola</strong>. Se a &gt; 0, abre para cima (concavidade para cima, tem ponto de mínimo). Se a &lt; 0, abre para baixo (tem ponto de máximo).</p>

          <h3>Vértice da Parábola</h3>
          <p>O vértice é o ponto mais alto (máximo) ou mais baixo (mínimo) da parábola:</p>
          <div class="fbox">xᵥ = −b / (2a) &nbsp;&nbsp;&nbsp;&nbsp; yᵥ = −Δ / (4a)</div>

          <h3>Fórmula de Bhaskara</h3>
          <div class="fbox">Δ = b² − 4ac &nbsp;&nbsp;&nbsp;&nbsp; x = (−b ± √Δ) / (2a)</div>
          <ul>
            <li>Δ &gt; 0 → duas raízes reais distintas</li>
            <li>Δ = 0 → uma raiz real (raiz dupla)</li>
            <li>Δ &lt; 0 → nenhuma raiz real</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo Clássico ENEM — Altura Máxima</div>
            <p>Uma bola é lançada verticalmente. Sua altura (em metros) após t segundos é h(t) = −5t² + 20t. Qual a altura máxima?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Identificar: a = −5, b = 20, c = 0 (a &lt; 0 → parábola com máximo)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Tempo do máximo: tᵥ = −20 / (2·(−5)) = −20/(−10) = <strong>2 segundos</strong></div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Altura máxima: h(2) = −5(4) + 20(2) = −20 + 40 = <strong>20 metros</strong></div></div>
          </div>

          <div class="errbox"><div class="err-t">❌ Erro Comum — Sinal do Coeficiente</div><p>Muitos alunos esquecem que a = −5 (negativo) e calculam o vértice como se a fosse positivo. Sempre observe o sinal de 'a' antes de tudo!</p></div>

          <div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">O ENEM e as Funções Quadráticas</div><div class="c-text">O ENEM frequentemente apresenta problemas de lucro máximo (preço × quantidade), distância máxima de projéteis, e dimensões de terrenos com área máxima. Sempre que aparecer "máximo" ou "mínimo" com relação não linear, pense em função quadrática.</div></div></div>
        </div>`
    }
  ]
},

mat03: {
  title: "Funções Exponencial e Logarítmica",
  subtitle: "Crescimento, decaimento e escalas logarítmicas no cotidiano",
  sections: [
    {
      id: "s1", title: "Função Exponencial",
      content: `
        <div class="cs">
          <h2>Função Exponencial</h2>
          <div class="fbox">f(x) = aˣ &nbsp;&nbsp; (a &gt; 0, a ≠ 1)</div>
          <p>A característica principal: a variável está no <strong>expoente</strong>. Isso gera crescimento (ou decaimento) muito rápido.</p>
          <ul>
            <li>Se a &gt; 1 → função <strong>crescente</strong> (crescimento exponencial)</li>
            <li>Se 0 &lt; a &lt; 1 → função <strong>decrescente</strong> (decaimento exponencial)</li>
          </ul>
          <div class="concept"><div class="concept-t">📌 Aplicações Reais Cobradas no ENEM</div><p>Crescimento populacional · Juros compostos · Decaimento radioativo · Crescimento de vírus e bactérias · Desvalorização de bens</p></div>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Crescimento de Bactérias</div>
            <p>Uma colônia começa com 100 bactérias e dobra a cada hora. Quantas haverá após 5 horas?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t"><strong>Modelo:</strong> Q(t) = 100 · 2ᵗ (a = 2, pois dobra)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Após 5 horas: Q(5) = 100 · 2⁵ = 100 · 32 = <strong>3.200 bactérias</strong></div></div>
          </div>
        </div>`
    },
    {
      id: "s2", title: "Função Logarítmica e Propriedades",
      content: `
        <div class="cs">
          <h2>Logaritmo — A Inversa da Exponencial</h2>
          <div class="fbox">log_a(x) = y &nbsp;↔&nbsp; aʸ = x</div>
          <p>Leia: "o logaritmo de x na base a é y" significa "a elevado a y dá x".</p>
          <p>Exemplos: log₂(8) = 3 porque 2³ = 8 · log₁₀(1000) = 3 porque 10³ = 1000</p>

          <h3>Propriedades dos Logaritmos</h3>
          <ul>
            <li>log(a · b) = log a + log b</li>
            <li>log(a / b) = log a − log b</li>
            <li>log(aⁿ) = n · log a</li>
            <li>log_a(a) = 1 &nbsp;&nbsp;&nbsp; log_a(1) = 0</li>
            <li>Mudança de base: log_a(b) = log(b) / log(a)</li>
          </ul>

          <h3>Aplicações Obrigatórias no ENEM</h3>
          <ul>
            <li><strong>Escala Richter:</strong> cada grau aumenta 10× a intensidade → usa log₁₀</li>
            <li><strong>pH:</strong> pH = −log₁₀[H⁺] → escala logarítmica de acidez</li>
            <li><strong>Decibéis (dB):</strong> medida de intensidade sonora → log₁₀</li>
            <li><strong>Ordem de grandeza:</strong> comparar números muito diferentes</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Escala Richter</div>
            <p>Um sismo de magnitude 6 tem intensidade I₁ e outro de magnitude 8 tem intensidade I₂. Quanto maior é I₂ em relação a I₁?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Diferença de magnitude: 8 − 6 = 2</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Cada unidade = 10× → I₂/I₁ = 10² = <strong>100 vezes maior</strong></div></div>
          </div>

          <div class="errbox"><div class="err-t">❌ Erro Comum — Logaritmo de Negativo</div><p>Logaritmo de número negativo ou zero NÃO EXISTE no conjunto dos reais. log(−5) é indefinido. Cuidado em questões de domínio de função logarítmica: o argumento deve ser sempre positivo.</p></div>
        </div>`
    }
  ]
},

mat05: {
  title: "Geometria Plana",
  subtitle: "Áreas, perímetros, Pitágoras e trigonometria aplicada",
  sections: [
    {
      id: "s1", title: "Áreas e Perímetros",
      content: `
        <div class="cs">
          <h2>Fórmulas Essenciais de Área</h2>
          <p>Geometria plana é uma das áreas mais cobradas no ENEM. As questões geralmente apresentam figuras compostas ou situações do dia a dia (pintura de paredes, revestimento de piso, fencing).</p>
          <ul>
            <li><strong>Quadrado:</strong> A = l² &nbsp;&nbsp; P = 4l</li>
            <li><strong>Retângulo:</strong> A = b · h &nbsp;&nbsp; P = 2(b + h)</li>
            <li><strong>Triângulo:</strong> A = (b · h) / 2 &nbsp;&nbsp; P = soma dos lados</li>
            <li><strong>Círculo:</strong> A = π · r² &nbsp;&nbsp; C = 2πr</li>
            <li><strong>Trapézio:</strong> A = [(B + b) · h] / 2</li>
            <li><strong>Losango:</strong> A = (d₁ · d₂) / 2</li>
            <li><strong>Paralelogramo:</strong> A = b · h</li>
          </ul>

          <div class="callout warn"><div class="c-icon">⚠️</div><div class="c-body"><div class="c-title">π no ENEM</div><div class="c-text">O ENEM sempre informa o valor de π a ser usado (geralmente π ≈ 3,14 ou π ≈ 3). Leia o enunciado com atenção e use EXATAMENTE o valor fornecido.</div></div></div>

          <h3>Teorema de Pitágoras</h3>
          <div class="fbox">a² = b² + c²</div>
          <p>Em todo triângulo retângulo: o quadrado da hipotenusa (a) é igual à soma dos quadrados dos catetos (b e c).</p>
          <p><strong>Ternas pitagóricas clássicas:</strong> (3,4,5) · (5,12,13) · (8,15,17) · (7,24,25)</p>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Área de Figura Composta</div>
            <p>Um terreno tem forma de retângulo (10m × 6m) com um semicírculo em uma das extremidades (raio = 3m). Calcule a área total (π = 3).</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Área do retângulo: 10 × 6 = 60 m²</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Área do semicírculo: (π · r²)/2 = (3 · 9)/2 = 13,5 m²</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Área total: 60 + 13,5 = <strong>73,5 m²</strong></div></div>
          </div>

          <h3>Relações Métricas no Triângulo Retângulo</h3>
          <div class="fbox">sen θ = CO/H &nbsp;&nbsp; cos θ = CA/H &nbsp;&nbsp; tg θ = CO/CA</div>
          <p>Ângulos especiais que o ENEM sempre cobra:</p>
          <ul>
            <li>sen 30° = 0,5 &nbsp; cos 30° = √3/2 ≈ 0,87 &nbsp; tg 30° = √3/3</li>
            <li>sen 45° = cos 45° = √2/2 ≈ 0,71 &nbsp; tg 45° = 1</li>
            <li>sen 60° = √3/2 ≈ 0,87 &nbsp; cos 60° = 0,5 &nbsp; tg 60° = √3</li>
          </ul>
        </div>`
    }
  ]
},

mat07: {
  title: "Probabilidade e Análise Combinatória",
  subtitle: "Contagem, arranjos, combinações e cálculo de chances",
  sections: [
    {
      id: "s1", title: "Princípio Fundamental da Contagem",
      content: `
        <div class="cs">
          <h2>Princípio Fundamental da Contagem (PFC)</h2>
          <p>Se uma decisão pode ser feita em <strong>m</strong> maneiras e outra em <strong>n</strong> maneiras, então as duas juntas podem ser feitas em <strong>m × n</strong> maneiras.</p>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Combinações de Roupas</div>
            <p>Uma pessoa tem 4 camisas, 3 calças e 2 sapatos. Quantos looks diferentes pode montar?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Multiplicar as opções: 4 × 3 × 2 = <strong>24 looks</strong></div></div>
          </div>

          <h3>Permutação Simples</h3>
          <div class="fbox">Pₙ = n! = n × (n−1) × (n−2) × … × 1</div>
          <p>Usada quando arranjar TODOS os elementos de um conjunto, sem repetição. Exemplo: anagramas de palavras.</p>

          <h3>Arranjo</h3>
          <div class="fbox">A(n,p) = n! / (n−p)!</div>
          <p>Quando escolhemos p elementos de n possíveis e <strong>a ordem importa</strong>.</p>

          <h3>Combinação</h3>
          <div class="fbox">C(n,p) = n! / [p! × (n−p)!]</div>
          <p>Quando escolhemos p elementos de n possíveis e <strong>a ordem NÃO importa</strong>. Exemplo: escolher 3 pessoas de um grupo de 10 para uma comissão.</p>

          <div class="errbox"><div class="err-t">❌ Como Decidir: Arranjo ou Combinação?</div><p>Pergunte: "Se eu trocar a ordem dos elementos escolhidos, tenho um resultado diferente?" Se SIM → Arranjo. Se NÃO → Combinação. Exemplo: senha bancária (troca de ordem = senha diferente) → Arranjo. Comissão (trocar quem vem primeiro não muda o grupo) → Combinação.</p></div>
        </div>`
    },
    {
      id: "s2", title: "Probabilidade",
      content: `
        <div class="cs">
          <h2>Probabilidade Clássica</h2>
          <div class="fbox">P(E) = número de casos favoráveis / número de casos totais</div>
          <p>Sempre um valor entre 0 (impossível) e 1 (certo). Pode ser expresso como fração, decimal ou porcentagem.</p>

          <h3>Regras Fundamentais</h3>
          <ul>
            <li><strong>Complemento:</strong> P(Ā) = 1 − P(A) &nbsp;→ usar quando é mais fácil calcular o "não acontecer"</li>
            <li><strong>União (ou):</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
            <li><strong>Eventos mutuamente exclusivos:</strong> P(A ∪ B) = P(A) + P(B)</li>
            <li><strong>Eventos independentes (e):</strong> P(A ∩ B) = P(A) × P(B)</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Probabilidade com Complemento</div>
            <p>Qual a probabilidade de obter pelo menos um "6" ao lançar um dado duas vezes?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Use o complemento: P(pelo menos um 6) = 1 − P(nenhum 6)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">P(não sair 6 em um lançamento) = 5/6</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">P(nenhum 6 em dois lançamentos) = (5/6)² = 25/36</div></div>
            <div class="step"><div class="step-n">4</div><div class="step-t">P(pelo menos um 6) = 1 − 25/36 = <strong>11/36 ≈ 30,6%</strong></div></div>
          </div>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Estratégia do Complemento</div><div class="c-text">Sempre que o enunciado usar "pelo menos um" ou "ao menos um", use o complemento. É muito mais rápido que enumerar todos os casos favoráveis.</div></div></div>
        </div>`
    }
  ]
},

mat08: {
  title: "Estatística",
  subtitle: "Leitura de gráficos, medidas e interpretação de dados",
  sections: [
    {
      id: "s1", title: "Medidas de Tendência Central",
      content: `
        <div class="cs">
          <h2>Média, Mediana e Moda</h2>
          <p>Estatística é a área em que o ENEM mais cobra <strong>leitura e interpretação de gráficos e tabelas</strong>. Entender cada medida é fundamental.</p>

          <h3>Média Aritmética Simples</h3>
          <div class="fbox">x̄ = (x₁ + x₂ + … + xₙ) / n</div>

          <h3>Média Ponderada</h3>
          <div class="fbox">M_p = Σ(xᵢ · pᵢ) / Σpᵢ</div>
          <p>Usada quando os valores têm pesos diferentes (ex: notas com pesos distintos).</p>

          <h3>Mediana</h3>
          <p>O valor central do conjunto ordenado. Se n é par, é a média dos dois valores centrais.</p>

          <h3>Moda</h3>
          <p>O valor mais frequente. Um conjunto pode ser: amodal (sem moda), unimodal, bimodal ou multimodal.</p>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Qual Medida Usar?</div>
            <p>Salários de 5 funcionários: R$1.200 · R$1.400 · R$1.300 · R$1.500 · R$8.000</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Média: (1200+1400+1300+1500+8000)/5 = 13400/5 = R$ 2.680 (distorcida pelo salário alto)</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Mediana (ordenado): 1200, 1300, <strong>1400</strong>, 1500, 8000 → Mediana = R$ 1.400</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t"><strong>A mediana representa melhor a realidade</strong>, pois não é afetada por valores extremos (outliers)</div></div>
          </div>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">ENEM e Estatística</div><div class="c-text">O ENEM frequentemente apresenta gráficos de barras, setores (pizza), histogramas e tabelas pedindo interpretação. Sempre leia o título, os eixos e a fonte antes de responder.</div></div></div>
        </div>`
    }
  ]
},

mat09: {
  title: "Progressões e Matemática Financeira",
  subtitle: "PA, PG, juros simples, compostos e planejamento financeiro",
  sections: [
    {
      id: "s1", title: "Progressões Aritméticas",
      content: `
        <div class="cs">
          <h2>Progressão Aritmética (PA)</h2>
          <p>Uma PA é uma sequência onde a <strong>diferença entre termos consecutivos é sempre a mesma</strong> — chamada de razão (r).</p>
          <div class="fbox">aₙ = a₁ + (n−1) · r</div>
          <div class="fbox">Sₙ = n · (a₁ + aₙ) / 2</div>

          <h2>Progressão Geométrica (PG)</h2>
          <p>Na PG, o <strong>quociente entre termos consecutivos é constante</strong> — chamado de razão (q).</p>
          <div class="fbox">aₙ = a₁ · q^(n−1)</div>
          <div class="fbox">Sₙ = a₁ · (qⁿ − 1) / (q − 1) &nbsp;&nbsp; para q ≠ 1</div>
        </div>`
    },
    {
      id: "s2", title: "Juros e Matemática Financeira",
      content: `
        <div class="cs">
          <h2>Juros Simples</h2>
          <div class="fbox">J = C · i · t &nbsp;&nbsp;&nbsp; M = C · (1 + i · t)</div>
          <p>Os juros incidem <strong>sempre sobre o capital inicial</strong>. O montante cresce linearmente.</p>

          <h2>Juros Compostos</h2>
          <div class="fbox">M = C · (1 + i)ᵗ</div>
          <p>Os juros incidem sobre o <strong>montante acumulado</strong> ("juros sobre juros"). O montante cresce exponencialmente.</p>

          <div class="callout warn"><div class="c-icon">⚠️</div><div class="c-body"><div class="c-title">Cuidado com as Unidades</div><div class="c-text">A taxa i e o tempo t devem estar na MESMA unidade. Se a taxa é mensal, o tempo deve estar em meses. Converter antes de calcular!</div></div></div>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Comparando Juros</div>
            <p>R$ 1.000 aplicados a 10% ao ano. Após 3 anos: quanto pelo regime simples e pelo composto?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Simples: M = 1000 · (1 + 0,10 · 3) = 1000 · 1,30 = <strong>R$ 1.300</strong></div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Composto: M = 1000 · (1,10)³ = 1000 · 1,331 = <strong>R$ 1.331</strong></div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Diferença: R$ 31 a favor do composto. Para prazos longos, a diferença é muito maior.</div></div>
          </div>
        </div>`
    }
  ]
},

// ============================================================
// LINGUAGENS
// ============================================================
lc01: {
  title: "Interpretação e Gêneros Textuais",
  subtitle: "Estratégias de leitura, tipos e gêneros — base de toda a prova",
  sections: [
    {
      id: "s1", title: "Estratégias de Leitura",
      content: `
        <div class="cs">
          <h2>Como o ENEM Testa Leitura</h2>
          <p>O ENEM não cobra memorização de regras gramaticais isoladas — ele testa sua capacidade de <strong>compreender, interpretar e relacionar textos</strong>. Toda questão de Linguagens começa com um texto.</p>

          <h3>Os 5 Passos da Leitura Eficiente</h3>
          <div class="step"><div class="step-n">1</div><div class="step-t"><strong>Leia o enunciado da questão PRIMEIRO</strong> — saber o que é perguntado orienta toda a leitura e economiza tempo</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-t"><strong>Identifique o gênero textual</strong> — crônica, artigo, poema, charge, tirinha? Cada gênero tem convenções próprias</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-t"><strong>Localize a ideia central</strong> — geralmente no primeiro e último parágrafos; em poemas, no verso final</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-t"><strong>Relacione o texto com o contexto</strong> — data de publicação, quem escreveu, qual veículo</div></div>
          <div class="step"><div class="step-n">5</div><div class="step-t"><strong>Elimine alternativas</strong> — descarte as absurdas ou contraditórias ao texto antes de escolher</div></div>

          <div class="callout danger"><div class="c-icon">🚫</div><div class="c-body"><div class="c-title">Armadilhas do ENEM</div><div class="c-text">Cuidado com alternativas que usam palavras do texto mas mudam o sentido · Alternativas com "sempre", "nunca", "todo" geralmente estão erradas · Não use conhecimento externo que contraria o texto — responda COM BASE NO TEXTO</div></div></div>

          <h3>Intertextualidade</h3>
          <p>O ENEM frequentemente apresenta dois textos juntos e pede a relação entre eles. Tipos de intertextualidade:</p>
          <ul>
            <li><strong>Citação:</strong> referência direta a outro texto ou autor</li>
            <li><strong>Alusão:</strong> referência indireta, sem citar explicitamente</li>
            <li><strong>Paródia:</strong> imitação cômica ou crítica de outro texto</li>
            <li><strong>Paráfrase:</strong> reescrita com o mesmo sentido do original</li>
            <li><strong>Pastiche:</strong> imitação do estilo de outro autor</li>
          </ul>
        </div>`
    },
    {
      id: "s2", title: "Tipos e Gêneros Textuais",
      content: `
        <div class="cs">
          <h2>Tipos vs. Gêneros Textuais</h2>
          <p>Esta distinção é fundamental e sempre cobrada:</p>
          <ul>
            <li><strong>Tipos textuais:</strong> categorias estruturais — Narração, Descrição, Dissertação, Injunção, Exposição</li>
            <li><strong>Gêneros textuais:</strong> textos concretos que circulam socialmente — romance, notícia, receita, bula, sermão</li>
          </ul>

          <div class="concept"><div class="concept-t">📌 Distinção-chave</div><p>Um romance (gênero) pode ter trechos narrativos, descritivos E dissertativos. O gênero é o "nome" do texto; o tipo é a "estrutura". Um texto pode misturar tipos, mas pertence a um gênero específico.</p></div>

          <h3>Gêneros mais Cobrados no ENEM</h3>
          <ul>
            <li><strong>Crônica:</strong> texto curto, cotidiano, mistura narrativo e dissertativo, tom lírico ou crítico</li>
            <li><strong>Artigo de opinião:</strong> defende ponto de vista com argumentos — tipo dissertativo-argumentativo</li>
            <li><strong>Charge e Tirinha:</strong> crítica social por meio de humor e linguagem visual; cobram ironia e contexto político</li>
            <li><strong>Poema:</strong> linguagem conotativa, recursos sonoros, figuras de linguagem</li>
            <li><strong>Anúncio publicitário:</strong> persuasão, público-alvo, linguagem simbólica</li>
            <li><strong>Letra de música:</strong> contexto cultural, época, movimento artístico</li>
            <li><strong>Texto de divulgação científica:</strong> linguagem acessível para leigo, simplificação de conceitos</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Charges e Tirinhas</div><div class="c-text">Para interpretar charges: identifique os personagens, o contexto histórico/político, os símbolos visuais e a crítica implícita. O humor geralmente está na ironia ou no exagero (hipérbole).</div></div></div>
        </div>`
    }
  ]
},

lc02: {
  title: "Figuras de Linguagem e Recursos Expressivos",
  subtitle: "Metáfora, ironia, hipérbole — os recursos que o ENEM mais cobra",
  sections: [
    {
      id: "s1", title: "Figuras de Palavras",
      content: `
        <div class="cs">
          <h2>Por que Figuras de Linguagem?</h2>
          <p>As figuras de linguagem são recursos que tornam a comunicação mais expressiva, criativa e impactante. O ENEM as cobra em poemas, letras de música, textos publicitários e crônicas — sempre pedindo que você identifique o <strong>efeito de sentido</strong> que produzem.</p>

          <h3>Metáfora</h3>
          <p>Comparação <strong>implícita</strong> entre dois elementos com alguma característica em comum, sem usar "como" ou "parece".</p>
          <p>Exemplo: "Meu coração é uma pedra" (coração = pedra → frio, duro, insensível)</p>

          <h3>Comparação (Símile)</h3>
          <p>Como a metáfora, mas com o conectivo de comparação explícito ("como", "parece", "tal qual").</p>
          <p>Exemplo: "Meu amor é <em>como</em> um pássaro livre"</p>

          <h3>Metonímia</h3>
          <p>Substituição de um termo por outro que tem relação de contiguidade (proximidade). Tipos:</p>
          <ul>
            <li>Parte pelo todo: "Preciso de um pão" (= pão inteiro, não uma fatia)</li>
            <li>Autor pela obra: "Li muito Machado" (= obras de Machado)</li>
            <li>Continente pelo conteúdo: "Bebeu dois copos" (= o líquido nos copos)</li>
            <li>Símbolo pelo simbolizado: "A Cruz nos guia" (Cruz = religião cristã)</li>
          </ul>

          <h3>Hipérbole</h3>
          <p>Exagero para enfatizar uma ideia. "Já falei isso um milhão de vezes!" · "Estou morrendo de fome!"</p>

          <h3>Eufemismo</h3>
          <p>Suavizar uma ideia desagradável. "Ele passou dessa para melhor" (= morreu) · "Funcionário afastado" (= demitido)</p>

          <h3>Ironia</h3>
          <p>Dizer o <strong>contrário do que se pensa</strong>, com intenção crítica ou humorística. Contexto é essencial para identificar.</p>
          <p>Exemplo: "Que pontualidade incrível!" (dito a alguém que chegou 2 horas atrasado)</p>

          <h3>Antítese e Paradoxo</h3>
          <ul>
            <li><strong>Antítese:</strong> aproximação de ideias opostas — "Amor e ódio" · "Guerra e paz"</li>
            <li><strong>Paradoxo (oxímoro):</strong> oposição em uma só expressão — "Silêncio ensurdecedor" · "Solidão acompanhada"</li>
          </ul>

          <h3>Personificação (Prosopopeia)</h3>
          <p>Atribuir características ou ações humanas a seres inanimados ou animais.</p>
          <p>Exemplo: "O vento sussurrava segredos entre as árvores" · "A lua sorriu para os amantes"</p>

          <div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Como o ENEM Cobra</div><div class="c-text">O ENEM raramente pede "identifique a figura". Ele pede: "O efeito de sentido produzido pela expressão X é..." ou "O recurso expressivo em Y contribui para...". Foque no EFEITO que a figura produz no texto.</div></div></div>
        </div>`
    }
  ]
},

lc07: {
  title: "Modernismo Brasileiro",
  subtitle: "Semana de 22, três fases e os principais autores e obras",
  sections: [
    {
      id: "s1", title: "A Semana de Arte Moderna e a 1ª Fase",
      content: `
        <div class="cs">
          <h2>A Semana de Arte Moderna de 1922</h2>
          <p>Realizada de 13 a 17 de fevereiro de 1922 no <strong>Teatro Municipal de São Paulo</strong>, a Semana marcou a ruptura definitiva com os modelos estéticos europeus tradicionais (Parnasianismo, Simbolismo) e lançou as bases do Modernismo brasileiro.</p>

          <div class="concept"><div class="concept-t">📌 O que motivou a Semana?</div><p>O Brasil dos anos 20 passava por transformações profundas: industrialização, urbanização, imigrações europeias. Os artistas queriam uma arte que refletisse a <strong>realidade brasileira</strong>, com suas contradições, seu povo e sua linguagem — e não imitar modelos europeus ultrapassados.</p></div>

          <h3>Características da 1ª Fase (1922–1930) — "Fase Heroica"</h3>
          <ul>
            <li>Ruptura com as formas fixas (sem rima obrigatória, sem métrica rígida)</li>
            <li>Linguagem coloquial e cotidiana no lugar da linguagem "elevada" parnasiana</li>
            <li>Humor, ironia e paródia como recursos críticos</li>
            <li>Valorização da cultura popular brasileira (caipira, nordestina, afro-brasileira)</li>
            <li>Experimentalismo formal — liberdade total de criação</li>
          </ul>

          <h3>Principais Autores da 1ª Fase</h3>
          <ul>
            <li><strong>Oswald de Andrade:</strong> humor ácido, síntese radical, "Manifesto Antropófago" (1928) — proposta de "devorar" a cultura europeia e transformá-la em algo brasileiro</li>
            <li><strong>Mário de Andrade:</strong> "Macunaíma" (1928) — herói sem nenhum caráter, síntese da identidade nacional contraditória e plural</li>
            <li><strong>Manuel Bandeira:</strong> poesia do cotidiano, simplicidade profunda, "Libertinagem" — "Pneumotórax" é exemplo de ironia e desilusão</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Obra Obrigatória — "Noturno do Mangue" de Manuel Bandeira</div>
            <p>Bandeira usa linguagem simples e situações comuns (doença, morte, cotidiano) para criar poesia profunda. O ENEM frequentemente apresenta poemas seus pedindo identificação de recursos e sentidos.</p>
          </div>
        </div>`
    },
    {
      id: "s2", title: "2ª e 3ª Fases do Modernismo",
      content: `
        <div class="cs">
          <h2>2ª Fase (1930–1945) — Geração de 30</h2>
          <p>Enquanto a 1ª fase era de ruptura e experimentação, a 2ª fase aprofundou questões <strong>sociais, regionais e psicológicas</strong>. O Brasil passava pela Era Vargas, crise econômica, e os autores voltaram-se para a realidade crua do país.</p>

          <h3>Prosa Regionalista</h3>
          <ul>
            <li><strong>Graciliano Ramos — "Vidas Secas" (1938):</strong> família de retirantes, seca nordestina, linguagem seca e direta que espelha a aridez do ambiente. Foco no interior das personagens (Fabiano, Sinhá Vitória, Baleia).</li>
            <li><strong>Jorge Amado — "Capitães da Areia" (1937):</strong> meninos de rua em Salvador, crítica social ao abandono estatal.</li>
            <li><strong>José Lins do Rego:</strong> ciclo da cana-de-açúcar, nostalgia da infância no engenho, decadência da aristocracia rural nordestina.</li>
          </ul>

          <h3>Poesia da 2ª Fase</h3>
          <ul>
            <li><strong>Carlos Drummond de Andrade:</strong> poesia existencial e social, ironia, o "eu" em conflito com o mundo. "No Meio do Caminho" (a pedra repetida = obstáculos da vida) · "A Rosa do Povo" (engajamento social)</li>
            <li><strong>Cecília Meireles:</strong> lirismo, saudade, temas universais como tempo, morte e amor. Influência simbolista, musicalidade intensa.</li>
            <li><strong>Vinícius de Moraes:</strong> transição entre poesia e música popular — "Soneto da Fidelidade"</li>
          </ul>

          <h2>3ª Fase (1945–1980) — Pós-Modernismo</h2>
          <ul>
            <li><strong>João Guimarães Rosa — "Grande Sertão: Veredas" (1956):</strong> obra máxima da literatura brasileira. Narrador Riobaldo faz pacto com o diabo? O sertão como metáfora existencial. Linguagem inventada, fusão de regionalismo e universalismo.</li>
            <li><strong>Clarice Lispector:</strong> prosa introspectiva, fluxo de consciência, personagens femininas em crise existencial. "A Hora da Estrela" (Macabéa = invisibilidade social).</li>
            <li><strong>Concretos (Poesia Concreta):</strong> Haroldo e Augusto de Campos — poesia visual, palavras dispostas espacialmente na página.</li>
          </ul>

          <div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Como o ENEM Aborda a Literatura</div><div class="c-text">O ENEM NUNCA cobra datas decoradas ou bibliografias completas. Ele apresenta um trecho e pede: identificar características do movimento, analisar recursos expressivos, relacionar ao contexto histórico, ou comparar com outro texto. Conheça as CARACTERÍSTICAS de cada fase e cada autor.</div></div></div>
        </div>`
    }
  ]
},

// ============================================================
// CIÊNCIAS HUMANAS
// ============================================================
ch01: {
  title: "Brasil Colonial: Conquista e Resistência",
  subtitle: "Da chegada portuguesa à formação da sociedade colonial",
  sections: [
    {
      id: "s1", title: "A Chegada e a Colonização",
      content: `
        <div class="cs">
          <h2>A Chegada dos Portugueses (1500)</h2>
          <p>Em 22 de abril de 1500, a frota de <strong>Pedro Álvares Cabral</strong> chegou ao litoral do atual Brasil. O "descobrimento" foi, na verdade, parte de uma expansão comercial calculada — Portugal buscava rotas para as Índias e suas especiarias.</p>

          <div class="concept"><div class="concept-t">📌 Perspectiva crítica — ENEM</div><p>O ENEM frequentemente apresenta questões que pedem a perspectiva dos povos indígenas sobre a chegada europeia — o que para os portugueses foi "descoberta", para os povos nativos foi o início de um processo de genocídio, escravização e destruição cultural. Tenha sempre esta visão plural.</p></div>

          <h3>Ciclos Econômicos</h3>
          <ul>
            <li><strong>Pau-Brasil (1500–1530):</strong> escambo com indígenas, extração da madeira valorizada na Europa como corante. Sistema de feitorias no litoral.</li>
            <li><strong>Cana-de-Açúcar (1530–1700):</strong> verdadeiro motor da colonização. Plantation (grande propriedade monocultora) + escravidão africana + mercado europeu. Nordeste como centro econômico.</li>
            <li><strong>Mineração (1700–1800):</strong> descoberta de ouro em Minas Gerais desloca o centro para o Sudeste. Rio de Janeiro torna-se capital em 1763. Gerou a maior cidade colonial americana: Vila Rica (Ouro Preto).</li>
          </ul>

          <h3>A Escravidão Africana</h3>
          <p>Mais de <strong>4 milhões de africanos</strong> foram traficados para o Brasil entre os séculos XVI e XIX — o maior número de qualquer país do mundo. Foram trazidos principalmente da África Ocidental e Central.</p>
          <ul>
            <li>A escravidão era justificada pela ideologia racial e religiosa da época</li>
            <li>Africanos resistiram de múltiplas formas: quilombos, capoeira, religiões (candomblé), insurreições</li>
            <li><strong>Quilombo dos Palmares:</strong> maior quilombo, existiu por quase 100 anos (c.1605–1694), liderado por Zumbi — símbolo máximo da resistência negra</li>
          </ul>
        </div>`
    },
    {
      id: "s2", title: "Resistências e Movimentos Coloniais",
      content: `
        <div class="cs">
          <h2>Resistências ao Domínio Colonial</h2>

          <h3>Resistência Indígena</h3>
          <p>Os povos indígenas resistiram de diversas formas: guerras, fugas para o interior, alianças estratégicas com europeus rivais (franceses vs. portugueses), e preservação de culturas. A <strong>Guerra dos Bárbaros</strong> (séc. XVII) foi longa resistência de povos do Nordeste à ocupação pecuarista.</p>

          <h3>Inconfidência Mineira (1789)</h3>
          <p>Primeiro grande movimento de independência. Contexto: crise econômica pela queda da produção de ouro + pressão fiscal portuguesa (Derrama) + ideais iluministas vindos da Revolução Americana (1776) e Francesa (1789).</p>
          <ul>
            <li>Liderado por elite intelectual e militar mineira</li>
            <li><strong>Tiradentes</strong> (Joaquim José da Silva Xavier) — único condenado à morte, tornou-se mártir da independência</li>
            <li>Fracassou por delação (Silvério dos Reis)</li>
          </ul>

          <h3>Conjuração Baiana / Revolta dos Búzios (1798)</h3>
          <p>Diferente da Inconfidência, foi popular e tinha participação negra e mestiça. Influenciada pela Revolução Haitiana. Pregava fim da escravidão e igualdade racial — por isso foi brutalmente reprimida.</p>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">ENEM e História Colonial</div><div class="c-text">O ENEM cobra análise crítica de documentos históricos (cartas, relatos, imagens) sobre o período colonial. Exercite interpretar fontes primárias considerando o ponto de vista de quem escreveu, quando e para quem.</div></div></div>
        </div>`
    }
  ]
},

ch03: {
  title: "República: da Velha à Nova",
  subtitle: "Proclamação, Era Vargas, Ditadura Militar e Redemocratização",
  sections: [
    {
      id: "s1", title: "República Velha e Era Vargas",
      content: `
        <div class="cs">
          <h2>República Velha (1889–1930)</h2>
          <p>A proclamação da República (15 de novembro de 1889) foi feita por militares, sem participação popular — o povo, segundo o jornalista Aristides Lobo, "assistiu bestializado".</p>

          <h3>Características</h3>
          <ul>
            <li><strong>Política do Café com Leite:</strong> alternância de poder entre São Paulo (café) e Minas Gerais (pecuária leiteira) — oligarquias estaduais dominavam</li>
            <li><strong>Coronelismo:</strong> controle político local por coronéis, com "voto de cabresto" (coerção de eleitores)</li>
            <li><strong>Revolta de Canudos (1896–97):</strong> comunidade de sertanejos liderada por Antônio Conselheiro no sertão baiano. Massacrada após 4 expedições militares. Relatada em "Os Sertões" (Euclides da Cunha)</li>
            <li><strong>Revolta da Vacina (1904):</strong> Rio de Janeiro. Oswaldo Cruz impõe vacinação obrigatória contra varíola; população pobre, sem informação, se rebela</li>
          </ul>

          <h2>Era Vargas (1930–1945 e 1950–1954)</h2>
          <p>Getúlio Vargas chegou ao poder via Revolução de 1930, após a "Política do Café com Leite" ser quebrada. Governou de formas muito diferentes ao longo dos anos.</p>

          <h3>Estado Novo (1937–1945)</h3>
          <ul>
            <li>Ditadura instaurada por Vargas com apoio militar</li>
            <li>Inspirada nos fascismos europeus, mas com características próprias</li>
            <li><strong>Trabalhismo:</strong> Vargas criou direitos trabalhistas (CLT, 1943) — salário mínimo, férias, jornada de 8h — conquistando apoio dos trabalhadores urbanos → "pai dos pobres"</li>
            <li>Censura, perseguição a opositores, propaganda do Estado</li>
          </ul>

          <div class="concept"><div class="concept-t">📌 A Contradição Vargas</div><p>Vargas é uma figura controversa: ao mesmo tempo que instalou uma ditadura repressiva, criou direitos trabalhistas que beneficiaram milhões. O ENEM cobra essa ambiguidade — não há "vilão" ou "herói" absoluto na história.</p></div>
        </div>`
    },
    {
      id: "s2", title: "Ditadura Militar e Redemocratização",
      content: `
        <div class="cs">
          <h2>Ditadura Militar (1964–1985)</h2>
          <p>Em 31 de março de 1964, um golpe militar derrubou o presidente João Goulart (Jango), que propunha as "Reformas de Base" (agrária, urbana, educacional). O golpe teve apoio de empresários, setores da classe média, Igreja (inicialmente) e EUA (no contexto da Guerra Fria).</p>

          <h3>Fases</h3>
          <ul>
            <li><strong>AI-5 (1968):</strong> Ato Institucional mais severo — fechou o Congresso, suspendeu habeas corpus, institucionalizou tortura. Marca o período mais violento da ditadura</li>
            <li><strong>"Milagre Econômico" (1968–73):</strong> crescimento do PIB acima de 10% ao ano, mas com concentração de renda e endividamento externo</li>
            <li><strong>Anistia (1979):</strong> lei que permitiu retorno de exilados políticos e preparou a abertura</li>
            <li><strong>Diretas Já (1983–84):</strong> maior movimento de massa da história do Brasil, pedindo eleições diretas. A emenda foi rejeitada no Congresso, mas criou pressão pela democratização</li>
          </ul>

          <h3>Redemocratização</h3>
          <ul>
            <li><strong>1985:</strong> Tancredo Neves eleito indiretamente, morre antes de tomar posse. José Sarney assume.</li>
            <li><strong>Constituição de 1988:</strong> "Constituição Cidadã" — ampliou direitos individuais, sociais e coletivos; criou SUS, SUAS; garantiu voto para analfabetos e jovens de 16 anos</li>
            <li><strong>1989:</strong> primeiras eleições diretas desde 1960. Eleição de Collor e início da era neoliberal</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">ENEM e Direitos Humanos</div><div class="c-text">O ENEM frequentemente conecta a Ditadura Militar com a discussão sobre direitos humanos, democracia e memória. Questões sobre tortura, anistia e a Comissão da Verdade (2012) são recorrentes.</div></div></div>
        </div>`
    }
  ]
},

ch08: {
  title: "Filosofia: Do Pensamento Antigo ao Moderno",
  subtitle: "Sócrates, Platão, Iluminismo, Kant e os fundamentos do pensamento filosófico",
  sections: [
    {
      id: "s1", title: "Filosofia Grega e Medieval",
      content: `
        <div class="cs">
          <h2>O Nascimento da Filosofia</h2>
          <p>A filosofia ocidental nasceu na Grécia Antiga (séc. VI a.C.) com a proposta de explicar o mundo pela <strong>razão (logos)</strong>, em vez de mitos. Os pré-socráticos buscavam o "arché" — o princípio fundamental de tudo.</p>

          <h3>Sócrates (470–399 a.C.)</h3>
          <p>Não deixou escritos — conhecemos seu pensamento pelos diálogos de Platão. Método: <strong>maiêutica</strong> (arte de "parir" ideias — fazer perguntas para o interlocutor encontrar a verdade por si mesmo).</p>
          <p>Frase emblemática: <em>"Só sei que nada sei"</em> — postura de humildade intelectual que reconhece os limites do conhecimento humano.</p>
          <p>Condenado à morte por "corromper a juventude" e desrespeitar os deuses de Atenas — sua morte é símbolo do conflito entre o pensador crítico e o poder estabelecido.</p>

          <h3>Platão (428–348 a.C.)</h3>
          <p><strong>Teoria das Ideias/Formas:</strong> o mundo sensível (que percebemos pelos sentidos) é apenas uma cópia imperfeita do mundo das Ideias — perfeito, imutável e eterno, acessível apenas pela razão.</p>
          <p><strong>Mito da Caverna:</strong> metáfora do processo de conhecimento — prisioneiros veem apenas sombras (aparências); a filosofia é o caminho para sair da caverna e ver a realidade (a verdade).</p>

          <h3>Aristóteles (384–322 a.C.)</h3>
          <p>Discípulo de Platão, mas discorda: as formas não existem separadas da matéria. Fundou a lógica formal. Sua filosofia influenciou profundamente a Igreja Católica medieval (via Tomás de Aquino — escolasticismo).</p>
          <p><strong>Ética a Nicômaco:</strong> a virtude está no meio-termo (coragem = entre covardia e temeridade). A felicidade (eudaimonia) é o fim último da vida humana.</p>
        </div>`
    },
    {
      id: "s2", title: "Iluminismo e Filosofia Política",
      content: `
        <div class="cs">
          <h2>Iluminismo (Séc. XVII–XVIII)</h2>
          <p>O Iluminismo ("Século das Luzes") foi um movimento intelectual europeu que propunha a <strong>razão como guia supremo</strong>, em oposição à tradição e à autoridade religiosa. Seus princípios inspiraram as Revoluções Americana (1776) e Francesa (1789).</p>

          <h3>Principais Filósofos do Contrato Social</h3>
          <ul>
            <li><strong>Thomas Hobbes (1588–1679):</strong> "O Leviatã" — o ser humano é naturalmente egoísta e violento; sem Estado, haveria "guerra de todos contra todos". O contrato social cede poder total ao soberano em troca de segurança.</li>
            <li><strong>John Locke (1632–1704):</strong> o homem tem direitos naturais inalienáveis (vida, liberdade, propriedade). O governo existe para proteger esses direitos — se não o faz, pode ser destituído. Influenciou a Declaração de Independência dos EUA.</li>
            <li><strong>Jean-Jacques Rousseau (1712–1778):</strong> "O homem nasce bom; a sociedade o corrompe". A propriedade privada é a raiz das desigualdades. A vontade geral (bem comum) deve guiar o Estado. Influenciou a Revolução Francesa.</li>
            <li><strong>Montesquieu (1689–1755):</strong> "O Espírito das Leis" — propõe a <strong>separação dos três poderes</strong> (Executivo, Legislativo, Judiciário) para evitar o despotismo. Base de todas as democracias modernas.</li>
          </ul>

          <div class="exbox">
            <div class="exbox-lbl">🔸 ENEM — Relação com o Brasil</div>
            <p>A Constituição Brasileira de 1988 incorpora os princípios iluministas: separação dos poderes (Montesquieu), direitos individuais (Locke), soberania popular (Rousseau). O ENEM frequentemente pede conexão entre pensadores e instituições políticas atuais.</p>
          </div>
        </div>`
    }
  ]
},

ch09: {
  title: "Sociologia: Sociedade e Poder",
  subtitle: "Marx, Durkheim, Weber, cidadania e movimentos sociais",
  sections: [
    {
      id: "s1", title: "Os Clássicos da Sociologia",
      content: `
        <div class="cs">
          <h2>Por que Estudar os Clássicos?</h2>
          <p>Marx, Durkheim e Weber são os "três pilares" da Sociologia — e aparecem em praticamente toda edição do ENEM. Não basta memorizar nomes: é preciso entender o que cada um propõe e como se relaciona com o mundo atual.</p>

          <h3>Karl Marx (1818–1883) — Materialismo Histórico e Dialético</h3>
          <p><strong>Ideia central:</strong> a história é movida pela <strong>luta de classes</strong> — o conflito entre quem detém os meios de produção (burguesia) e quem vende sua força de trabalho (proletariado).</p>
          <ul>
            <li><strong>Mais-valia:</strong> diferença entre o valor produzido pelo trabalhador e o salário recebido — a base da exploração capitalista</li>
            <li><strong>Infraestrutura e superestrutura:</strong> a base econômica (infraestrutura) determina as instituições políticas, jurídicas e culturais (superestrutura)</li>
            <li><strong>Alienação:</strong> o trabalhador perde o vínculo com o produto de seu trabalho, consigo mesmo e com os outros</li>
          </ul>

          <h3>Émile Durkheim (1858–1917) — Funcionalismo</h3>
          <p><strong>Ideia central:</strong> a sociedade é um organismo — cada parte tem uma função para manter a coesão social.</p>
          <ul>
            <li><strong>Fato social:</strong> comportamentos externos ao indivíduo, coercitivos (nos forçam) e gerais (compartilhados). Ex: linguagem, moral, direito</li>
            <li><strong>Anomia:</strong> falta de normas sociais claras — leva ao desordem e ao suicídio (estudado em sua obra "O Suicídio")</li>
            <li><strong>Solidariedade mecânica vs. orgânica:</strong> sociedades tradicionais (semelhança) vs. modernas (divisão do trabalho)</li>
          </ul>

          <h3>Max Weber (1864–1920) — Compreensão da Ação Social</h3>
          <p><strong>Ideia central:</strong> a sociologia deve <strong>compreender</strong> (verstehen) o sentido que os atores dão às suas ações, não apenas explicar causas materiais.</p>
          <ul>
            <li><strong>Ação social:</strong> toda ação orientada pelo comportamento alheio (4 tipos: racional com fins, racional com valores, afetiva, tradicional)</li>
            <li><strong>Dominação legítima:</strong> tradicional, carismática e racional-legal (burocracia)</li>
            <li><strong>Ética protestante e capitalismo:</strong> o calvinismo (trabalho como vocação divina, poupança, ascese) favoreceu o surgimento do capitalismo no Ocidente</li>
          </ul>

          <div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Estratégia ENEM</div><div class="c-text">O ENEM apresenta trechos dos clássicos ou situações do cotidiano e pede: "Qual pensador analisaria essa situação desta forma?" Pratique identificar: conflito de classes = Marx · normas e coesão = Durkheim · sentido das ações = Weber.</div></div></div>
        </div>`
    }
  ]
},

// ============================================================
// CIÊNCIAS DA NATUREZA
// ============================================================
cn01: {
  title: "Mecânica: Cinemática e Dinâmica",
  subtitle: "Movimento, forças e energia — o que cai todo ano no ENEM",
  sections: [
    {
      id: "s1", title: "Cinemática — O Estudo do Movimento",
      content: `
        <div class="cs">
          <h2>Grandezas do Movimento</h2>
          <ul>
            <li><strong>Posição (x):</strong> onde o objeto está em relação a um referencial</li>
            <li><strong>Deslocamento (Δx):</strong> variação de posição = x_final − x_inicial (pode ser negativo)</li>
            <li><strong>Distância percorrida:</strong> sempre positiva, é o comprimento do caminho</li>
            <li><strong>Velocidade média:</strong> v = Δx/Δt (m/s)</li>
            <li><strong>Aceleração média:</strong> a = Δv/Δt (m/s²)</li>
          </ul>

          <h3>MRU — Movimento Retilíneo Uniforme</h3>
          <p>Velocidade constante, aceleração nula. Gráfico v×t é uma reta horizontal.</p>
          <div class="fbox">x = x₀ + v · t</div>

          <h3>MRUV — Movimento Retilíneo Uniformemente Variado</h3>
          <p>Aceleração constante (≠ 0). É o movimento mais cobrado no ENEM (queda livre, frenagem, lançamento).</p>
          <div class="fbox">v = v₀ + a·t</div>
          <div class="fbox">x = x₀ + v₀·t + ½·a·t²</div>
          <div class="fbox">v² = v₀² + 2·a·Δx &nbsp;&nbsp; (Equação de Torricelli — sem t)</div>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Queda Livre (g = 10 m/s²)</div>
            <p>Um objeto cai do repouso de uma altura de 80 m. Em quanto tempo chega ao chão? Qual sua velocidade no impacto?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Queda livre: v₀=0, a=g=10 m/s², Δx=80 m</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Usando x = ½·a·t²: 80 = ½·10·t² → t² = 16 → <strong>t = 4 s</strong></div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Velocidade no impacto: v = v₀ + a·t = 0 + 10·4 = <strong>40 m/s</strong></div></div>
          </div>
        </div>`
    },
    {
      id: "s2", title: "Dinâmica — Leis de Newton",
      content: `
        <div class="cs">
          <h2>As Três Leis de Newton</h2>

          <h3>1ª Lei — Princípio da Inércia</h3>
          <p>Um corpo em repouso tende a ficar em repouso; um corpo em movimento tende a permanecer em movimento retilíneo uniforme — <strong>a menos que uma força resultante atue sobre ele</strong>.</p>
          <p>Aplicação cotidiana: cinto de segurança (protege do efeito da inércia em freadas); passageiro que "avança" no banco quando o ônibus freia.</p>

          <h3>2ª Lei — Princípio Fundamental da Dinâmica</h3>
          <div class="fbox">F = m · a &nbsp;&nbsp;&nbsp; (em Newtons = kg·m/s²)</div>
          <p>A força resultante é proporcional à massa e à aceleração. Se F=0, a=0 (1ª lei é caso especial da 2ª).</p>

          <h3>3ª Lei — Ação e Reação</h3>
          <p>Para toda força de ação, há uma força de reação de mesma intensidade, mesma direção e sentido contrário — <strong>aplicadas em corpos diferentes</strong>.</p>
          <p>Importante: ação e reação NÃO se anulam porque estão em corpos diferentes!</p>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Exemplo — Força e Aceleração</div>
            <p>Um carro de 1000 kg parte do repouso e acelera uniformemente atingindo 20 m/s em 10 s. Qual a força resultante?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">a = Δv/Δt = (20−0)/10 = 2 m/s²</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">F = m·a = 1000 · 2 = <strong>2000 N</strong></div></div>
          </div>

          <h3>Peso, Normal e Atrito</h3>
          <ul>
            <li><strong>Peso:</strong> P = m·g (força gravitacional, sempre para baixo)</li>
            <li><strong>Normal:</strong> força perpendicular à superfície de contato (reação ao peso)</li>
            <li><strong>Atrito:</strong> Fa = μ·N (μ = coeficiente de atrito, N = força normal)</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Trabalho e Energia</div><div class="c-text">Trabalho: W = F·d·cos θ (em Joules). Energia cinética: Ec = mv²/2. Energia potencial gravitacional: Ep = mgh. Conservação de energia mecânica: Ec + Ep = constante (sem atrito).</div></div></div>
        </div>`
    }
  ]
},

cn04: {
  title: "Química Geral: Átomo e Tabela Periódica",
  subtitle: "Estrutura atômica, modelos, tabela periódica e ligações químicas",
  sections: [
    {
      id: "s1", title: "Modelos Atômicos e Estrutura",
      content: `
        <div class="cs">
          <h2>A Evolução dos Modelos Atômicos</h2>
          <p>A ciência não "descobre" o átomo de uma vez — cada modelo foi construído com base em experimentos, sendo substituído quando novos experimentos o contradiziam.</p>

          <ul>
            <li><strong>Dalton (1803):</strong> átomo como esfera maciça e indivisível — "bola de bilhar"</li>
            <li><strong>Thomson (1897):</strong> descobriu o elétron. Modelo "pudim de passas" — elétrons negativos espalhados numa massa positiva</li>
            <li><strong>Rutherford (1911):</strong> experiência da folha de ouro — descobriu o núcleo. Átomo é quase vazio: núcleo denso e positivo + elétrons ao redor</li>
            <li><strong>Bohr (1913):</strong> elétrons em órbitas circulares fixas (níveis de energia). Explica o espectro do hidrogênio</li>
            <li><strong>Modelo quântico atual:</strong> elétrons em "nuvens de probabilidade" (orbitais)</li>
          </ul>

          <h3>Partículas Subatômicas</h3>
          <ul>
            <li><strong>Prótons (p⁺):</strong> no núcleo, carga +1, massa ≈ 1 u. O número de prótons = número atômico (Z) — define o elemento</li>
            <li><strong>Nêutrons (n⁰):</strong> no núcleo, sem carga, massa ≈ 1 u. Estabiliza o núcleo</li>
            <li><strong>Elétrons (e⁻):</strong> ao redor do núcleo, carga −1, massa desprezível</li>
          </ul>
          <div class="fbox">Número de massa: A = Z + N &nbsp;&nbsp;&nbsp; ₉₂²³⁸U → Z=92, N=146</div>

          <h3>Isótopos, Isóbaros e Isótonos</h3>
          <ul>
            <li><strong>Isótopos:</strong> mesmo Z, diferentes A (mesmo elemento, núcleos diferentes) → Ex: ¹H, ²H (deutério), ³H (trítio)</li>
            <li><strong>Isóbaros:</strong> mesmo A, diferentes Z → Ex: ¹⁴C e ¹⁴N</li>
            <li><strong>Isótonos:</strong> mesmo N, diferentes Z → Ex: ¹³C e ¹⁴N (N=7)</li>
          </ul>
        </div>`
    },
    {
      id: "s2", title: "Tabela Periódica e Ligações",
      content: `
        <div class="cs">
          <h2>Tabela Periódica — Organizando os Elementos</h2>
          <p>Organizada por <strong>número atômico crescente</strong> (Moseley, 1913). Períodos (linhas horizontais) = número de camadas eletrônicas. Grupos/famílias (colunas) = mesma configuração eletrônica na última camada → propriedades semelhantes.</p>

          <h3>Famílias Importantes</h3>
          <ul>
            <li><strong>Família 1 — Metais Alcalinos:</strong> 1 elétron na última camada, muito reativos, reagem violentamente com água. Ex: Li, Na, K</li>
            <li><strong>Família 2 — Metais Alcalino-Terrosos:</strong> 2 elétrons, reativos. Ex: Mg, Ca</li>
            <li><strong>Família 17 — Halogênios:</strong> 7 elétrons, muito eletronegativos, formam sais com metais. Ex: F, Cl, Br, I</li>
            <li><strong>Família 18 — Gases Nobres:</strong> 8 elétrons (exceto He, que tem 2), camada completa, praticamente inertes. Ex: He, Ne, Ar</li>
          </ul>

          <h3>Ligações Químicas</h3>
          <p>Os átomos fazem ligações para atingir estabilidade (configuração de gás nobre — Regra do Octeto).</p>
          <ul>
            <li><strong>Ligação Iônica:</strong> transferência de elétrons entre metal e não-metal. Forma íons (+) e (−) que se atraem. Ex: NaCl (sal de cozinha). Sólido a temperatura ambiente, alto ponto de fusão, condutor quando dissolvido.</li>
            <li><strong>Ligação Covalente:</strong> compartilhamento de elétrons entre não-metais. Pode ser simples (1 par), dupla (2 pares) ou tripla. Ex: H₂O, CO₂, N₂</li>
            <li><strong>Ligação Metálica:</strong> "mar de elétrons" livres entre cátions metálicos. Explica condutividade elétrica, maleabilidade e brilho dos metais.</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Propriedades Periódicas</div><div class="c-text">Eletronegatividade e afinidade eletrônica aumentam → (da esquerda para direita e de baixo para cima). Raio atômico e energia de ionização seguem padrões opostos. O ENEM cobra interpretar essas tendências em gráficos.</div></div></div>
        </div>`
    }
  ]
},

cn07: {
  title: "Biologia Celular e Molecular",
  subtitle: "Célula, DNA, RNA, divisão celular e síntese proteica",
  sections: [
    {
      id: "s1", title: "A Célula — Unidade da Vida",
      content: `
        <div class="cs">
          <h2>Tipos Celulares</h2>
          <ul>
            <li><strong>Célula Procariótica:</strong> sem membrana nuclear (núcleo "livre" no citoplasma). Sem organelas membranosas. São as bactérias e arqueas. DNA circular.</li>
            <li><strong>Célula Eucariótica:</strong> núcleo definido por membrana nuclear. Organelas membranosas. Animais, plantas, fungos e protistas.</li>
          </ul>

          <h3>Organelas e suas Funções</h3>
          <ul>
            <li><strong>Membrana plasmática:</strong> seleção do que entra e sai — permeabilidade seletiva</li>
            <li><strong>Núcleo:</strong> contém o DNA — centro de controle celular</li>
            <li><strong>Mitocôndria:</strong> respiração celular aeróbica → produção de ATP (energia). "Usina da célula"</li>
            <li><strong>Cloroplasto:</strong> fotossíntese (apenas células vegetais e algas). Contém clorofila.</li>
            <li><strong>Ribossomo:</strong> síntese de proteínas — está em TODAS as células (pro e eucariotas)</li>
            <li><strong>Retículo Endoplasmático:</strong> rugoso (com ribossomos → proteínas) e liso (lipídios e detoxificação)</li>
            <li><strong>Complexo de Golgi:</strong> empacotamento e secreção de substâncias</li>
            <li><strong>Lisossomo:</strong> digestão intracelular (enzimas hidrolíticas)</li>
            <li><strong>Vacúolo:</strong> armazenamento (grande nas células vegetais — turgidez)</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Teoria Endossimbiótica</div><div class="c-text">Mitocôndrias e cloroplastos foram, provavelmente, bactérias que passaram a viver dentro de células eucarióticas ancestrais em relação simbiótica. Evidências: têm DNA próprio circular, ribossomos semelhantes aos de bactérias e se reproduzem independentemente. O ENEM já cobrou isso!</div></div></div>
        </div>`
    },
    {
      id: "s2", title: "DNA, Divisão Celular e Síntese Proteica",
      content: `
        <div class="cs">
          <h2>DNA — A Molécula da Herança</h2>
          <p>O DNA (ácido desoxirribonucleico) é uma dupla hélice formada por <strong>nucleotídeos</strong> (base nitrogenada + açúcar desoxirribose + fosfato). As bases se pareiam: A=T (2 ligações) e G≡C (3 ligações).</p>
          <div class="fbox">A—T &nbsp;&nbsp;&nbsp; G≡C &nbsp;&nbsp;&nbsp; (pareamento complementar)</div>

          <h3>Mitose — Divisão para Crescimento</h3>
          <p>Produz 2 células-filha idênticas à célula-mãe (2n → 2n). Usada para crescimento, regeneração e reprodução assexuada. Fases: <strong>Prófase, Metáfase, Anáfase, Telófase</strong> (P-M-A-T).</p>

          <h3>Meiose — Divisão para Reprodução</h3>
          <p>Produz 4 células-filha com metade dos cromossomos (2n → n). Forma gametas (espermatozoides e óvulos). Duas divisões: Meiose I (separa homólogos) e Meiose II (separa cromátides). Gera <strong>variabilidade genética</strong> por recombinação (crossing-over).</p>

          <div class="errbox"><div class="err-t">❌ Confusão Clássica: Mitose vs. Meiose</div><p>Mitose: 2n→2n, 2 células, ocorre em células somáticas (corpo). Meiose: 2n→n, 4 células, ocorre nas gônadas (ovários e testículos). A mitose mantém o número de cromossomos; a meiose reduz pela metade.</p></div>

          <h3>Síntese Proteica — Do DNA à Proteína</h3>
          <ul>
            <li><strong>Transcrição:</strong> no núcleo, o DNA serve de molde para produzir o RNA mensageiro (mRNA)</li>
            <li><strong>Tradução:</strong> no citoplasma (ribossomo), o mRNA é lido em códons (trincas de bases) e o RNA transportador (tRNA) traz os aminoácidos correspondentes, formando a proteína</li>
          </ul>
          <div class="concept"><div class="concept-t">📌 Dogma Central da Biologia Molecular</div><p>DNA → (transcrição) → RNA → (tradução) → Proteína. A informação flui nessa direção (com exceção de vírus de RNA como HIV, que usam transcriptase reversa: RNA → DNA).</p></div>
        </div>`
    }
  ]
},

cn08: {
  title: "Genética e Evolução",
  subtitle: "Leis de Mendel, hereditariedade, Darwin e especiação",
  sections: [
    {
      id: "s1", title: "Leis de Mendel",
      content: `
        <div class="cs">
          <h2>Gregor Mendel e a Genética</h2>
          <p>Mendel (1866) descobriu os padrões da herança através de experimentos com ervilhas. Sua obra foi ignorada por décadas e redescoberta em 1900.</p>

          <h3>Terminologia Essencial</h3>
          <ul>
            <li><strong>Gene:</strong> unidade de herança — segmento de DNA que codifica uma característica</li>
            <li><strong>Alelo:</strong> versão alternativa de um gene (ex: B para cor da semente)</li>
            <li><strong>Dominante:</strong> alelo que se expressa mesmo em heterozigose (B)</li>
            <li><strong>Recessivo:</strong> alelo expresso apenas em homozigose (bb)</li>
            <li><strong>Genótipo:</strong> composição genética (BB, Bb ou bb)</li>
            <li><strong>Fenótipo:</strong> característica observável (amarelo ou verde)</li>
            <li><strong>Homozigoto:</strong> dois alelos iguais (BB ou bb)</li>
            <li><strong>Heterozigoto:</strong> dois alelos diferentes (Bb)</li>
          </ul>

          <h3>1ª Lei de Mendel — Segregação</h3>
          <p>Cada indivíduo possui dois fatores (alelos) para cada característica; eles se separam na formação dos gametas, e cada gameta recebe apenas um fator.</p>
          <div class="fbox">Bb × Bb → 1 BB : 2 Bb : 1 bb (genótipo) &nbsp;&nbsp; 3 dominantes : 1 recessivo (fenótipo)</div>

          <h3>2ª Lei de Mendel — Segregação Independente</h3>
          <p>Genes em cromossomos diferentes segregam independentemente. Dihíbrido: AaBb × AaBb → proporção fenotípica 9:3:3:1.</p>

          <div class="exbox">
            <div class="exbox-lbl">🔸 Quadro de Punnett — Cruzamento Monohíbrido</div>
            <p>Ambos os pais são Bb. Qual a probabilidade de ter filho bb (recessivo)?</p>
            <div class="step"><div class="step-n">1</div><div class="step-t">Gametas do pai: B ou b. Gametas da mãe: B ou b.</div></div>
            <div class="step"><div class="step-n">2</div><div class="step-t">Combinações: BB (25%) · Bb (25%) · bB (25%) · bb (25%)</div></div>
            <div class="step"><div class="step-n">3</div><div class="step-t">Probabilidade de bb = <strong>25%</strong></div></div>
          </div>
        </div>`
    },
    {
      id: "s2", title: "Evolução e Darwin",
      content: `
        <div class="cs">
          <h2>Teoria da Evolução</h2>

          <h3>Lamarck (1744–1829) — Teoria Incorreta</h3>
          <ul>
            <li><strong>Uso e Desuso:</strong> órgãos muito usados se desenvolvem; pouco usados atrofiam</li>
            <li><strong>Herança de caracteres adquiridos:</strong> essas modificações seriam passadas aos descendentes</li>
          </ul>
          <p>Exemplo lamarckista (ERRADO): girafas esticaram o pescoço para alcançar folhas altas e passaram esse pescoço longo aos filhos.</p>

          <h3>Darwin (1809–1882) — Seleção Natural</h3>
          <p>Publicou "A Origem das Espécies" em 1859. Proposta:</p>
          <ul>
            <li>Existe <strong>variabilidade natural</strong> entre indivíduos de uma população</li>
            <li>Há <strong>superprodução</strong> de descendentes (mais filhos do que o ambiente suporta)</li>
            <li>Há <strong>competição pelos recursos</strong> limitados do ambiente</li>
            <li><strong>Seleção natural:</strong> indivíduos com características mais adaptadas ao ambiente sobrevivem e se reproduzem mais, transmitindo essas características</li>
            <li>Com o tempo, as populações <strong>mudam</strong> — isso é evolução</li>
          </ul>

          <div class="concept"><div class="concept-t">📌 A Diferença-Chave</div><p>Lamarck: o ambiente MODIFICA o organismo → herança direta. Darwin: o ambiente SELECIONA organismos com variações já existentes. A evolução darwiniana atua sobre POPULAÇÕES, não sobre indivíduos.</p></div>

          <h3>Especiação</h3>
          <p>Formação de novas espécies. Mecanismo mais comum: <strong>isolamento geográfico</strong> → duas populações da mesma espécie ficam separadas → evoluem independentemente → tornam-se incapazes de se reproduzir entre si → duas espécies distintas.</p>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Neo-Darwinismo (Teoria Sintética)</div><div class="c-text">Combina Darwin com genética mendeliana: a variabilidade vem de MUTAÇÕES genéticas e recombinação na meiose. A seleção natural atua sobre essa variabilidade genética. Deriva genética, fluxo gênico e isolamento reprodutivo também explicam a evolução.</div></div></div>
        </div>`
    }
  ]
},

cn09: {
  title: "Ecologia e Meio Ambiente",
  subtitle: "Cadeias alimentares, ciclos biogeoquímicos e impactos ambientais",
  sections: [
    {
      id: "s1", title: "Ecossistemas e Relações Ecológicas",
      content: `
        <div class="cs">
          <h2>Conceitos Fundamentais</h2>
          <ul>
            <li><strong>Ecossistema:</strong> conjunto de seres vivos (biótico) + ambiente físico (abiótico) em interação</li>
            <li><strong>Bioma:</strong> região geográfica com clima e vegetação característicos. Principais biomas brasileiros: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal</li>
            <li><strong>Cadeia alimentar:</strong> sequência linear de quem come quem</li>
            <li><strong>Teia alimentar:</strong> conjunto de cadeias interligadas — mais realista</li>
          </ul>

          <h3>Níveis Tróficos</h3>
          <ul>
            <li><strong>Produtores:</strong> autótrofos (plantas, algas, bactérias fotossintetizantes) — base da cadeia</li>
            <li><strong>Consumidores primários:</strong> herbívoros — comem produtores</li>
            <li><strong>Consumidores secundários:</strong> carnívoros — comem herbívoros</li>
            <li><strong>Decompositores:</strong> fungos e bactérias — decompõem matéria orgânica e devolvem nutrientes ao solo</li>
          </ul>

          <h3>Relações Ecológicas entre Espécies</h3>
          <ul>
            <li><strong>Mutualismo (+/+):</strong> ambos se beneficiam. Ex: abelha + flor (polinização)</li>
            <li><strong>Comensalismo (+/0):</strong> um beneficia, outro é indiferente. Ex: rêmora + tubarão</li>
            <li><strong>Parasitismo (+/−):</strong> um beneficia à custa do outro. Ex: carrapato + cão</li>
            <li><strong>Predatismo (+/−):</strong> predador mata e consome a presa. Ex: leão + zebra</li>
            <li><strong>Competição (−/−):</strong> ambos prejudicados pela disputa por recursos</li>
          </ul>

          <h3>Ciclos Biogeoquímicos</h3>
          <p>A matéria circula entre seres vivos e ambiente — os elementos não se perdem, se transformam.</p>
          <ul>
            <li><strong>Ciclo do Carbono:</strong> fotossíntese (incorpora CO₂) ↔ respiração e decomposição (libera CO₂). Queima de combustíveis fósseis desequilibra o ciclo → efeito estufa</li>
            <li><strong>Ciclo do Nitrogênio:</strong> bactérias fixadoras (N₂ → NH₃) → nitrificação → absorção por plantas → decomposição → desnitrificação. Fundamental para proteínas</li>
            <li><strong>Ciclo da Água:</strong> evaporação → condensação → precipitação → infiltração/escoamento → evapotranspiração</li>
          </ul>

          <div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">ENEM e Meio Ambiente</div><div class="c-text">O ENEM sempre conecta ecologia com impactos humanos: desmatamento, poluição, espécies invasoras, mudanças climáticas, bioacumulação de agrotóxicos. Pratique relacionar conceitos ecológicos com problemas ambientais reais do Brasil.</div></div></div>
        </div>`
    }
  ]
}

,


// ─── MATEMÁTICA ───────────────────────────────────────────────────────────────

mat04: {
  title: "Trigonometria",
  subtitle: "Seno, cosseno, tangente, círculo trigonométrico e lei dos senos e cossenos",
  sections: [
    { id:"s1", title:"Razões Trigonométricas no Triângulo Retângulo", content:`<div class="cs">
<h2>O que é Trigonometria?</h2>
<p>Trigonometria vem do grego: <strong>trigono</strong> (triângulo) + <strong>metron</strong> (medida). É o estudo das relações entre lados e ângulos de triângulos. No ENEM, aparece em problemas de altura de prédios, largura de rios, inclinação de rampas e ondas.</p>
<h3>As Três Razões Fundamentais</h3>
<p>Em todo triângulo retângulo, para um ângulo agudo θ:</p>
<div class="fbox">sen θ = cateto oposto / hipotenusa<br>cos θ = cateto adjacente / hipotenusa<br>tg θ = cateto oposto / cateto adjacente</div>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Macete SOH-CAH-TOA</div><div class="c-text"><strong>S</strong>en = <strong>O</strong>posto/<strong>H</strong>ipotenusa · <strong>C</strong>os = <strong>A</strong>djacente/<strong>H</strong>ipotenusa · <strong>T</strong>g = <strong>O</strong>posto/<strong>A</strong>djacente</div></div></div>
<h3>Ângulos Especiais — Memorize!</h3>
<div class="fbox">sen 30°=0,5 · cos 30°=√3/2≈0,87 · tg 30°=√3/3≈0,58<br>sen 45°=cos 45°=√2/2≈0,71 · tg 45°=1<br>sen 60°=√3/2≈0,87 · cos 60°=0,5 · tg 60°=√3≈1,73</div>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo ENEM — Altura de um Prédio</div>
<p>Um observador a 50 m de um prédio vê seu topo com ângulo de 60°. Qual a altura do prédio? (√3≈1,73)</p>
<div class="step"><div class="step-n">1</div><div class="step-t">tg 60° = altura / 50</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">√3 = altura / 50</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">altura = 50√3 = 50 × 1,73 = <strong>86,5 m</strong></div></div></div>
<div class="errbox"><div class="err-t">❌ Erro Comum</div><p>Confundir cateto oposto com adjacente. Sempre identifique o ângulo θ primeiro, depois classifique os lados em relação a ELE: oposto é o lado que não toca θ; adjacente é o lado que toca θ (mas não é a hipotenusa).</p></div>
</div>` },
    { id:"s2", title:"Círculo Trigonométrico e Lei dos Senos/Cossenos", content:`<div class="cs">
<h2>Círculo Trigonométrico</h2>
<p>Circunferência de raio 1 centrada na origem. Permite estender seno e cosseno para qualquer ângulo (inclusive maiores que 90°).</p>
<ul>
<li>1º quadrante (0°–90°): sen>0, cos>0, tg>0</li>
<li>2º quadrante (90°–180°): sen>0, cos&lt;0, tg&lt;0</li>
<li>3º quadrante (180°–270°): sen&lt;0, cos&lt;0, tg>0</li>
<li>4º quadrante (270°–360°): sen&lt;0, cos>0, tg&lt;0</li>
</ul>
<div class="concept"><div class="concept-t">📌 Relação Fundamental</div><p>sen²θ + cos²θ = 1 — vale para QUALQUER ângulo. Use para encontrar seno dado cosseno e vice-versa.</p></div>
<h3>Lei dos Senos</h3>
<p>Para qualquer triângulo (não precisa ser retângulo):</p>
<div class="fbox">a/sen A = b/sen B = c/sen C</div>
<h3>Lei dos Cossenos</h3>
<p>Generalização de Pitágoras para triângulos quaisquer:</p>
<div class="fbox">a² = b² + c² − 2bc · cos A</div>
<div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Quando usar cada lei?</div><div class="c-text">Lei dos Senos: quando conhece um par lado/ângulo oposto. Lei dos Cossenos: quando conhece dois lados e o ângulo entre eles, ou os três lados. Pitágoras: apenas triângulo retângulo.</div></div></div>
</div>` }
  ]
},

mat06: {
  title: "Geometria Espacial",
  subtitle: "Sólidos geométricos, volumes, áreas e aplicações práticas",
  sections: [
    { id:"s1", title:"Prismas, Pirâmides e Poliedros", content:`<div class="cs">
<h2>Geometria Espacial — Por que importa?</h2>
<p>O ENEM adora contextualizar geometria espacial: caixas de embalagem, piscinas, silos de grãos, latas e edificações. O segredo é identificar o sólido e aplicar a fórmula correta.</p>
<h3>Prismas</h3>
<p>Sólido com duas bases poligonais paralelas e congruentes ligadas por faces laterais retangulares.</p>
<div class="fbox">V = A_base × h</div>
<ul>
<li><strong>Cubo:</strong> V = a³ · A_total = 6a²</li>
<li><strong>Paralelepípedo:</strong> V = a·b·c · A_total = 2(ab+bc+ac)</li>
</ul>
<h3>Pirâmides</h3>
<p>Base poligonal + vértice (ápice) + faces triangulares laterais.</p>
<div class="fbox">V = (A_base × h) / 3</div>
<div class="callout warn"><div class="c-icon">⚠️</div><div class="c-body"><div class="c-title">O fator 1/3</div><div class="c-text">Pirâmide e cone têm volume igual a 1/3 do prisma/cilindro correspondente de mesma base e altura. Nunca esqueça o divisor 3!</div></div></div>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo — Capacidade de um Silo</div>
<p>Um silo tem forma de cilindro (r=3m, h=8m) com uma tampa cônica (h=2m). Qual o volume total? (π≈3)</p>
<div class="step"><div class="step-n">1</div><div class="step-t">V_cilindro = π·r²·h = 3·9·8 = 216 m³</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">V_cone = (π·r²·h)/3 = (3·9·2)/3 = 18 m³</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">V_total = 216 + 18 = <strong>234 m³</strong></div></div></div>
</div>` },
    { id:"s2", title:"Cilindro, Cone e Esfera", content:`<div class="cs">
<h2>Sólidos de Revolução</h2>
<h3>Cilindro</h3>
<div class="fbox">V = π·r²·h &nbsp;&nbsp; A_lat = 2πrh &nbsp;&nbsp; A_total = 2πr(r+h)</div>
<h3>Cone</h3>
<div class="fbox">V = (π·r²·h)/3 &nbsp;&nbsp; A_lat = π·r·g &nbsp;&nbsp; (g = geratriz = √(r²+h²))</div>
<h3>Esfera</h3>
<div class="fbox">V = (4/3)·π·r³ &nbsp;&nbsp; A = 4·π·r²</div>
<div class="concept"><div class="concept-t">📌 Relação Cilindro–Cone–Esfera</div><p>Arquimedes descobriu: inscreva uma esfera num cilindro cuja base tem o mesmo raio. Os volumes estão na razão: Cone : Esfera : Cilindro = 1 : 2 : 3. O ENEM já cobrou essa relação!</p></div>
<h3>Planificação</h3>
<p>Planificação é "abrir" o sólido numa figura plana. O ENEM cobra muito: planificação de cone (setor circular) e cilindro (retângulo + 2 círculos).</p>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Escala e Semelhança</div><div class="c-text">Se dois sólidos semelhantes têm razão de semelhança k, suas áreas estão na razão k² e seus volumes na razão k³. Ex: dobrar o raio de uma esfera aumenta o volume 8 vezes (2³=8).</div></div></div>
</div>` }
  ]
},

mat10: {
  title: "Equações e Sistemas",
  subtitle: "Equações do 1º e 2º grau, sistemas lineares, inequações e módulo",
  sections: [
    { id:"s1", title:"Equações e Inequações", content:`<div class="cs">
<h2>Equação do 1º Grau</h2>
<p>Forma geral: <strong>ax + b = 0</strong>. Resolver significa isolar x.</p>
<div class="fbox">x = −b/a</div>
<h3>Equação do 2º Grau</h3>
<div class="fbox">ax² + bx + c = 0 &nbsp;&nbsp; Δ = b²−4ac &nbsp;&nbsp; x = (−b ± √Δ)/2a</div>
<h3>Inequações</h3>
<p>Como equações, mas com &lt;, &gt;, ≤, ≥. Regra crucial: <strong>ao multiplicar ou dividir por número negativo, inverte o sinal da desigualdade.</strong></p>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo — Inequação</div>
<p>Resolva: −2x + 4 > 10</p>
<div class="step"><div class="step-n">1</div><div class="step-t">−2x > 10 − 4 → −2x > 6</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">Divide por −2 e INVERTE: x &lt; −3</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">Solução: x ∈ (−∞, −3)</div></div></div>
<h3>Equações com Módulo</h3>
<p>|x| = a significa x = a ou x = −a (para a ≥ 0).<br>|x| &lt; a significa −a &lt; x &lt; a.<br>|x| > a significa x &lt; −a ou x > a.</p>
<div class="errbox"><div class="err-t">❌ Erro Comum — Módulo</div><p>|x − 3| = 5 NÃO significa apenas x − 3 = 5. Gera DOIS casos: x − 3 = 5 (x=8) E x − 3 = −5 (x=−2). Sempre considere os dois casos!</p></div>
</div>` },
    { id:"s2", title:"Sistemas de Equações", content:`<div class="cs">
<h2>Sistemas Lineares</h2>
<p>Conjunto de equações com as mesmas incógnitas. Métodos de resolução:</p>
<h3>Método da Substituição</h3>
<div class="step"><div class="step-n">1</div><div class="step-t">Isola uma variável em uma equação</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">Substitui na outra equação</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">Resolve e retrosubstitui</div></div>
<h3>Método da Adição (Eliminação)</h3>
<div class="step"><div class="step-n">1</div><div class="step-t">Multiplica equações para que uma variável tenha coeficientes opostos</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">Soma as equações — elimina uma variável</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">Resolve e retrosubstitui</div></div>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo ENEM — Problema com Sistema</div>
<p>Dois produtos juntos custam R$50. O produto A custa R$8 a mais que B. Qual o preço de cada um?</p>
<div class="step"><div class="step-n">1</div><div class="step-t">A + B = 50 e A = B + 8</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">Substituindo: (B+8) + B = 50 → 2B = 42 → B = R$21</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">A = 21 + 8 = <strong>R$29</strong></div></div></div>
<div class="concept"><div class="concept-t">📌 Classificação de Sistemas</div><p>SPD (possível e determinado): uma solução. SPI (possível e indeterminado): infinitas soluções. SI (impossível): nenhuma solução. O ENEM pode pedir para classificar geometricamente: retas secantes, coincidentes ou paralelas.</p></div>
</div>` }
  ]
},

// ─── LINGUAGENS ───────────────────────────────────────────────────────────────

lc03: {
  title: "Gramática: Morfologia e Sintaxe",
  subtitle: "Classes de palavras, análise sintática, concordância e regência",
  sections: [
    { id:"s1", title:"Classes de Palavras e Morfologia", content:`<div class="cs">
<h2>Por que Gramática no ENEM?</h2>
<p>O ENEM não cobra regras gramaticais isoladas — cobra o <strong>efeito de sentido</strong> produzido pelo uso de determinadas classes e estruturas. Entender morfologia ajuda a interpretar textos com precisão.</p>
<h3>Classes de Palavras</h3>
<ul>
<li><strong>Substantivo:</strong> nomeia seres, lugares, sentimentos. Pode ser próprio/comum, concreto/abstrato, simples/composto, primitivo/derivado.</li>
<li><strong>Artigo:</strong> determina o substantivo (definido: o/a; indefinido: um/uma).</li>
<li><strong>Adjetivo:</strong> caracteriza o substantivo. Pode ser posposto ou anteposto — posição altera sentido: "homem grande" ≠ "grande homem".</li>
<li><strong>Numeral:</strong> indica quantidade, ordem, fração ou multiplicação.</li>
<li><strong>Pronome:</strong> substitui ou acompanha o substantivo. Tipos: pessoal (reto/oblíquo), possessivo, demonstrativo, relativo, indefinido, interrogativo.</li>
<li><strong>Verbo:</strong> ação, estado, fenômeno. Flexiona em pessoa, número, tempo, modo e voz.</li>
<li><strong>Advérbio:</strong> modifica verbo, adjetivo ou outro advérbio. Indica modo, tempo, lugar, intensidade, negação, afirmação.</li>
<li><strong>Preposição:</strong> conecta termos estabelecendo relação. Essenciais: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.</li>
<li><strong>Conjunção:</strong> liga orações. Coordenativas (aditivas, adversativas, alternativas, conclusivas, explicativas) e subordinativas.</li>
<li><strong>Interjeição:</strong> exprime emoção. "Ai!", "Ufa!", "Oxente!"</li>
</ul>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Efeito de Sentido dos Pronomes Relativos</div><div class="c-text">O ENEM adora pedir o valor do "que", "quem", "onde", "cujo". "Cujo" indica posse e concorda com o substantivo que o segue, não com o antecedente.</div></div></div>
</div>` },
    { id:"s2", title:"Sintaxe, Concordância e Regência", content:`<div class="cs">
<h2>Sintaxe — Estrutura da Oração</h2>
<h3>Termos Essenciais</h3>
<ul>
<li><strong>Sujeito:</strong> de quem se fala. Pode ser simples, composto, oculto (elíptico), indeterminado ou inexistente (oração sem sujeito).</li>
<li><strong>Predicado:</strong> o que se diz do sujeito. Verbal (verbo de ação), nominal (verbo de ligação + predicativo) ou verbo-nominal.</li>
</ul>
<h3>Termos Integrantes</h3>
<ul>
<li><strong>Objeto direto:</strong> complemento sem preposição — "Comprei <u>um livro</u>"</li>
<li><strong>Objeto indireto:</strong> complemento com preposição — "Gosto <u>de música</u>"</li>
<li><strong>Complemento nominal:</strong> complementa substantivo, adjetivo ou advérbio abstrato</li>
</ul>
<h3>Concordância Verbal — Casos Especiais</h3>
<ul>
<li>"A maioria dos alunos <strong>estudou</strong>" (sujeito coletivo = singular)</li>
<li>"Mais de um aluno <strong>faltou</strong>" (singular)</li>
<li>"Faz dois anos" / "Há dois anos" — verbos impessoais ficam no singular</li>
<li>Sujeito composto antes do verbo → plural; depois do verbo → pode concordar com o mais próximo</li>
</ul>
<h3>Regência Verbal — Verbos que o ENEM Mais Cobra</h3>
<ul>
<li><strong>Assistir</strong> (ver): rege "a" → assistiu <u>ao</u> filme</li>
<li><strong>Visar</strong> (almejar): rege "a" → visa <u>ao</u> lucro</li>
<li><strong>Preferir</strong>: rege "a" — nunca use "do que" — prefiro chá <u>a</u> café</li>
<li><strong>Obedecer / desobedecer:</strong> rege "a" → obedece <u>aos</u> pais</li>
</ul>
<h3>Crase</h3>
<div class="fbox">Crase = preposição "a" + artigo "a(s)" → à/às</div>
<p>Ocorre antes de palavras femininas que admitem artigo. Não ocorre antes de verbos, palavras masculinas sem artigo, pronomes pessoais ou pronomes de tratamento (exceto senhora/senhorita).</p>
<div class="errbox"><div class="err-t">❌ Erro Clássico de Crase</div><p>"Vou <u>à</u> escola" (fem. com artigo = crase ✓). "Vou <u>a</u> pé" (sem artigo = sem crase ✗). "Refiro-me <u>a</u> você" (pronome pessoal = nunca crase ✓).</p></div>
</div>` }
  ]
},

lc04: {
  title: "Variação Linguística e Sociolinguística",
  subtitle: "Variações regional, social, histórica e adequação ao contexto",
  sections: [
    { id:"s1", title:"Tipos de Variação Linguística", content:`<div class="cs">
<h2>A Língua Não é Monolítica</h2>
<p>Nenhuma língua é um bloco uniforme e imutável. O português brasileiro varia conforme a região, a classe social, a faixa etária e a situação comunicativa. O ENEM <strong>valoriza e respeita essas variações</strong> — questões frequentemente pedem que o aluno identifique e analise variantes sem julgamento de valor.</p>
<h3>Variação Diatópica (Regional)</h3>
<p>Diferenças geográficas. Ex: <em>mandioca</em> (SP) / <em>macaxeira</em> (NE) / <em>aipim</em> (RJ/Sul). O mesmo objeto recebe nomes diferentes em regiões distintas.</p>
<h3>Variação Diastrática (Social)</h3>
<p>Ligada à classe social, escolaridade, profissão. Cada grupo social desenvolve seu próprio repertório linguístico (gírias, jargões técnicos, registro formal).</p>
<h3>Variação Diafásica (Situacional)</h3>
<p>Variação conforme a situação comunicativa: falamos diferente com amigos, com chefes, num tribunal ou numa festa. Não é hipocrisia — é adequação.</p>
<h3>Variação Diacrônica (Histórica)</h3>
<p>Mudanças ao longo do tempo: "vossa mercê" → "você". Palavras surgem, mudam de sentido e desaparecem.</p>
<div class="concept"><div class="concept-t">📌 Preconceito Linguístico</div><p>O ENEM frequentemente aborda o preconceito linguístico: a ideia equivocada de que certas variantes são "erradas" ou "feias". Toda variante tem estrutura e lógica próprias. O que varia é o <strong>prestígio social</strong>, não a correção gramatical intrínseca.</p></div>
</div>` },
    { id:"s2", title:"Norma Culta e Adequação", content:`<div class="cs">
<h2>Norma Culta vs. Norma Padrão</h2>
<p><strong>Norma padrão:</strong> conjunto de regras prescritivas das gramáticas tradicionais — ideal abstrato.<br>
<strong>Norma culta:</strong> variedade efetivamente usada por falantes escolarizados em situações formais — é real e dinâmica.</p>
<h3>Adequação ao Contexto</h3>
<p>A chave não é falar "certo" em absoluto, mas falar <strong>adequadamente ao contexto</strong>. Um cientista que publica em linguagem de redes sociais e um adolescente que usa linguagem científica com amigos estão ambos fazendo escolhas inadequadas.</p>
<ul>
<li><strong>Registro formal:</strong> correspondências profissionais, textos acadêmicos, redação ENEM, discursos públicos</li>
<li><strong>Registro informal:</strong> conversas com amigos, mensagens de texto, redes sociais</li>
<li><strong>Linguagem técnica:</strong> jargão de área específica (medicina, direito, TI)</li>
<li><strong>Linguagem literária:</strong> uso criativo e conotativo da língua</li>
</ul>
<div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">ENEM e Variação</div><div class="c-text">O ENEM frequentemente apresenta textos em diferentes variedades (crônicas com linguagem coloquial, poemas com arcaísmos, textos científicos com jargão) e pede análise do efeito de sentido produzido pela escolha linguística do autor.</div></div></div>
</div>` }
  ]
},

lc05: {
  title: "Literatura: Do Trovadorismo ao Romantismo",
  subtitle: "Trovadorismo, Humanismo, Barroco, Arcadismo e Romantismo brasileiro",
  sections: [
    { id:"s1", title:"Do Trovadorismo ao Barroco", content:`<div class="cs">
<h2>Trovadorismo (Séc. XII–XIV)</h2>
<p>Primeira manifestação literária em língua portuguesa. Poesia cantada, acompanhada de instrumentos.</p>
<ul>
<li><strong>Cantigas de amor:</strong> eu lírico masculino lamenta amor não correspondido pela "senhor" idealizada</li>
<li><strong>Cantigas de amigo:</strong> eu lírico feminino lamenta ausência do amado — mais populares e espontâneas</li>
<li><strong>Cantigas de escárnio e maldizer:</strong> sátira e crítica social — mais próximas da realidade</li>
</ul>
<h2>Humanismo (Séc. XV–XVI)</h2>
<p>Transição Medieval→Renascimento. Valorização do ser humano (antropocentrismo). Gil Vicente: teatro que critica clero, nobreza e burguesia.</p>
<h2>Quinhentismo (1500–1601) — Brasil</h2>
<p>Literatura de informação: relatos dos colonizadores. <strong>Pero Vaz de Caminha</strong>: "Carta ao Rei D. Manuel" — primeiro documento escrito em português sobre o Brasil.</p>
<h2>Barroco (1601–1768)</h2>
<p>Conflito entre razão e fé, carne e espírito, vida e morte. Arte do <strong>excesso</strong> e da <strong>contradição</strong>.</p>
<ul>
<li><strong>Gregório de Matos ("Boca do Inferno"):</strong> poesia lírica, satírica e religiosa. Criticou duramente a sociedade colonial baiana</li>
<li><strong>Padre Antônio Vieira:</strong> sermões brilhantes — "Sermão de Santo Antônio aos Peixes" (metáfora política da colonização)</li>
</ul>
<h2>Arcadismo/Neoclassicismo (1768–1836)</h2>
<p>Reação ao excesso barroco. Simplicidade, razão, natureza idealizada. Lema: <em>"Inutilia truncat"</em> (cortar o inútil).</p>
<ul>
<li><strong>Cláudio Manuel da Costa:</strong> sonetos, saudade da Europa</li>
<li><strong>Tomás Antônio Gonzaga:</strong> "Marília de Dirceu" — amor pastoril, preso por participar da Inconfidência</li>
</ul>
</div>` },
    { id:"s2", title:"Romantismo Brasileiro", content:`<div class="cs">
<h2>Romantismo (1836–1881)</h2>
<p>Contexto: Independência do Brasil (1822), formação da identidade nacional, industrialização europeia. O Romantismo é o movimento da <strong>emoção, subjetividade e idealização</strong>.</p>
<h3>1ª Geração — Indianismo e Nacionalismo</h3>
<ul>
<li><strong>Gonçalves Dias:</strong> "I-Juca Pirama", "Canção do Exílio" — valorização do índio e da natureza brasileira como símbolos nacionais</li>
<li><strong>José de Alencar:</strong> romances indianistas ("O Guarani", "Iracema") e urbanos ("Senhora", "Lucíola")</li>
</ul>
<h3>2ª Geração — Ultrarromantismo (Mal do Século)</h3>
<ul>
<li>Egotismo, morte, noite, solidão, amor impossível, escapismo pelo álcool e drogas</li>
<li><strong>Álvares de Azevedo:</strong> "Noite na Taverna", "Lira dos Vinte Anos" — símbolo do "byronismo" no Brasil</li>
<li><strong>Casimiro de Abreu, Fagundes Varela</strong></li>
</ul>
<h3>3ª Geração — Condoreirismo (Poesia Social)</h3>
<ul>
<li>Crítica social, abolicionismo, republicanismo</li>
<li><strong>Castro Alves:</strong> "Navio Negreiro" — denúncia apaixonada da escravidão; "Vozes d'África"</li>
</ul>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Como o ENEM cobra o Romantismo</div><div class="c-text">O ENEM apresenta trechos e pede identificação da geração (indianista, ultrarromântica, condoreirista), das características do movimento ou análise comparativa com outros períodos. Conheça os traços de cada geração.</div></div></div>
</div>` }
  ]
},

lc06: {
  title: "Realismo, Naturalismo e Pré-Modernismo",
  subtitle: "Machado de Assis, Aluísio Azevedo, Euclides da Cunha e a crítica social",
  sections: [
    { id:"s1", title:"Realismo e Naturalismo", content:`<div class="cs">
<h2>Realismo (1881–1902)</h2>
<p>Marco: publicação de "Memórias Póstumas de Brás Cubas" (1881) de Machado de Assis — considerado o primeiro romance realista brasileiro.</p>
<p>Contexto: fim do Romantismo idealizado, positivismo, darwinismo social, industrialização. A literatura passa a retratar a realidade <strong>objetivamente e criticamente</strong>.</p>
<h3>Machado de Assis — O Maior Escritor Brasileiro</h3>
<p>Obras da 2ª fase (realista): "Memórias Póstumas de Brás Cubas", "Quincas Borba", "Dom Casmurro"</p>
<ul>
<li><strong>Narrador não confiável:</strong> o narrador é tendencioso, irônico, manipula o leitor</li>
<li><strong>Ironia e humor negro:</strong> critica sutilmente a burguesia carioca</li>
<li><strong>Capítulos curtos:</strong> narrativa fragmentada, metalinguagem</li>
<li><strong>"Dom Casmurro":</strong> Bentinho/Capitu — traiu ou não traiu? Ambiguidade intencional</li>
</ul>
<h2>Naturalismo</h2>
<p>Radicalização do Realismo: aplica o determinismo científico à literatura. O ser humano é produto do <strong>meio + hereditariedade</strong>. Descrições cruas e científicas do comportamento humano.</p>
<ul>
<li><strong>Aluísio Azevedo — "O Cortiço" (1890):</strong> cortiço carioca como microcosmo social. Personagens determinadas pelo ambiente degradado. João Romão, Jerônimo, Bertoleza — ascensão e degradação social.</li>
<li><strong>"O Mulato" (1881):</strong> crítica ao racismo e ao preconceito no Maranhão</li>
</ul>
<div class="errbox"><div class="err-t">❌ Confusão Comum: Realismo vs. Naturalismo</div><p>Realismo: foco psicológico e social, personagens complexas, crítica sutil. Naturalismo: foco biológico e ambiental, determinismo, descrições físicas detalhadas, personagens "animalizadas". Machado = Realismo. Aluísio = Naturalismo.</p></div>
</div>` },
    { id:"s2", title:"Parnasianismo, Simbolismo e Pré-Modernismo", content:`<div class="cs">
<h2>Parnasianismo (1880–1902)</h2>
<p>Na poesia: reação ao excesso emocional romântico. <strong>"Arte pela arte"</strong> — perfeição formal, objetividade, temas greco-latinos. O poema como escultura perfeita.</p>
<ul>
<li><strong>Olavo Bilac:</strong> "Língua Portuguesa" — soneto sobre a beleza da língua; máximo representante</li>
<li><strong>Alberto de Oliveira, Raimundo Correia</strong></li>
</ul>
<h2>Simbolismo (1893–1902)</h2>
<p>Reação ao Parnasianismo. Busca do <strong>inconsciente, do espiritual, do subjetivo</strong>. Musicalidade intensa, sinestesia, linguagem hermética.</p>
<ul>
<li><strong>Cruz e Sousa (o "Dante Negro"):</strong> sofreu racismo intenso; poesia de dor, espiritualidade e misticismo — "Antífona", "Broquéis"</li>
<li><strong>Alphonsus de Guimaraens:</strong> poesia religiosa e elegíaca</li>
</ul>
<h2>Pré-Modernismo (1902–1922)</h2>
<p>Período de transição sem escola definida. Autores captam contradições do Brasil real — sertão, pobreza, exclusão — antes das vanguardas modernistas.</p>
<ul>
<li><strong>Euclides da Cunha — "Os Sertões" (1902):</strong> reportagem literária sobre a Guerra de Canudos. Visão científica e poética do sertanejo e do sertão</li>
<li><strong>Lima Barreto:</strong> crítica ao preconceito racial e à burocracia — "Triste Fim de Policarpo Quaresma"</li>
<li><strong>Monteiro Lobato:</strong> Jeca Tatu — o caipira como símbolo do abandono estatal do interior</li>
</ul>
</div>` }
  ]
},

lc08: {
  title: "Língua Estrangeira: Estratégias de Leitura",
  subtitle: "Inglês e Espanhol no ENEM: como gabaritar sem dominar o idioma",
  sections: [
    { id:"s1", title:"Estratégias para Inglês no ENEM", content:`<div class="cs">
<h2>A Lógica do ENEM em Língua Estrangeira</h2>
<p>O ENEM cobra <strong>compreensão leitora</strong>, não gramática isolada. Você não precisa traduzir palavra por palavra — precisa extrair informações essenciais do texto. Com as estratégias certas, é possível acertar a maioria das questões mesmo com inglês básico.</p>
<h3>Estratégia 1 — Cognatos</h3>
<p>Cognatos são palavras parecidas entre inglês e português com o mesmo significado. Reconhecê-los amplia o vocabulário instantaneamente:</p>
<ul>
<li>information → informação · important → importante · technology → tecnologia</li>
<li>communication → comunicação · economy → economia · president → presidente</li>
<li>university → universidade · hospital → hospital · crisis → crise</li>
</ul>
<div class="errbox"><div class="err-t">❌ Falsos Cognatos (Cuidado!)</div><p>"actually" ≠ atualmente (significa "na verdade") · "pretend" ≠ pretender (significa "fingir") · "library" ≠ livraria (significa "biblioteca") · "college" ≠ colégio (significa "faculdade/universidade")</p></div>
<h3>Estratégia 2 — Palavras-Chave e Contexto</h3>
<p>Identifique as palavras que você reconhece e use o contexto para inferir o restante. O ENEM nunca exige vocabulário obscuro ou técnico extremo.</p>
<h3>Estratégia 3 — Questão antes do Texto</h3>
<p>Leia o enunciado primeiro. Identifique o que é perguntado e busque apenas essa informação no texto — não tente entender tudo.</p>
<h3>Estratégia 4 — Gênero Textual</h3>
<p>Identifique o gênero: anúncio, notícia, poema, letra de música, cardápio, formulário. Cada gênero tem estrutura previsível que ajuda na compreensão.</p>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Marcadores Textuais em Inglês</div><div class="c-text">however = porém/entretanto · therefore = portanto · although = embora · moreover = além disso · on the other hand = por outro lado · in conclusion = em conclusão · because = porque · despite = apesar de</div></div></div>
</div>` },
    { id:"s2", title:"Espanhol no ENEM", content:`<div class="cs">
<h2>Espanhol — Vantagem dos Falantes de Português</h2>
<p>O espanhol é muito próximo do português, tornando a compreensão mais acessível. As mesmas estratégias de cognatos e contexto se aplicam, com ainda mais eficiência.</p>
<h3>Vocabulário Essencial</h3>
<ul>
<li>también = também · pero = mas · porque = porque · sin embargo = porém</li>
<li>además = além disso · aunque = embora · por eso = por isso</li>
<li>hay = há/tem · desde = desde · hasta = até</li>
</ul>
<h3>Falsos Amigos (Espanhol)</h3>
<ul>
<li>"borracha" em espanhol = bêbada (não o material borracha)</li>
<li>"embarazada" = grávida (não embaraçada)</li>
<li>"exquisito" = delicioso (não esquisito)</li>
<li>"polvo" = pó (não polvo/animal)</li>
</ul>
<div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Estratégia Final</div><div class="c-text">No ENEM, as questões de língua estrangeira geralmente cobram: tema central do texto, opinião do autor, informação específica no texto, e efeito de sentido de expressões. Essas informações geralmente estão explícitas — busque-as diretamente.</div></div></div>
</div>` }
  ]
},

// ─── CIÊNCIAS HUMANAS ─────────────────────────────────────────────────────────

ch02: {
  title: "Brasil Imperial e Independência",
  subtitle: "Processo de independência, Primeiro e Segundo Reinado",
  sections: [
    { id:"s1", title:"A Independência e o Primeiro Reinado", content:`<div class="cs">
<h2>A Vinda da Família Real (1808)</h2>
<p>A invasão napoleônica de Portugal (1807) forçou D. João VI a transferir a corte para o Brasil — evento sem precedentes na história colonial. Chegaram cerca de 15.000 pessoas. Implicações imediatas:</p>
<ul>
<li>Abertura dos portos às nações amigas (1808) — fim do exclusivo colonial</li>
<li>Criação de instituições: Banco do Brasil, Imprensa Régia, Academia Militar, Jardim Botânico</li>
<li>Elevação do Brasil a Reino Unido (1815) — deixa de ser colônia formalmente</li>
</ul>
<h2>Independência (7 de setembro de 1822)</h2>
<p>D. João VI retorna a Portugal em 1821 pressionado pelas Cortes (parlamento português que queria recolonizar o Brasil). D. Pedro I fica como regente.</p>
<div class="concept"><div class="concept-t">📌 A Independência Foi "Controlada"</div><p>O ENEM frequentemente pede análise crítica: a independência brasileira foi um processo negociado pelas elites, sem ruptura social profunda. Não houve revolução popular como na América hispânica — a escravidão continuou, a estrutura fundiária permaneceu e a monarquia foi mantida.</p></div>
<h3>Primeiro Reinado (1822–1831)</h3>
<ul>
<li>Constituição de 1824 — outorgada (imposta), não constituinte. Criou o Poder Moderador (acima dos três poderes)</li>
<li>Confederação do Equador (1824): revolta federalista no NE, liderada por Frei Caneca — duramente reprimida</li>
<li>Guerra Cisplatina (1825–28): perda do atual Uruguai</li>
<li>Abdicação de D. Pedro I (1831): pressionado por crise econômica, derrota na guerra e impopularidade</li>
</ul>
</div>` },
    { id:"s2", title:"Período Regencial e Segundo Reinado", content:`<div class="cs">
<h2>Período Regencial (1831–1840)</h2>
<p>D. Pedro II tinha apenas 5 anos. Brasil governado por regentes. Período de enorme instabilidade — maior crise política do Império.</p>
<h3>Revoltas Regenciais</h3>
<ul>
<li><strong>Cabanagem (PA, 1835–40):</strong> indígenas, mestiços e pobres — a mais sangrenta, matou ~30% da população do Pará</li>
<li><strong>Balaiada (MA, 1838–41):</strong> negros, índios e pobres contra oligarquia</li>
<li><strong>Sabinada (BA, 1837–38):</strong> separatismo baiano</li>
<li><strong>Farroupilha (RS, 1835–45):</strong> mais longa — separatismo gaúcho, proclamou República Rio-Grandense</li>
</ul>
<h2>Segundo Reinado (1840–1889)</h2>
<p>D. Pedro II governa com estabilidade relativa e prestígio internacional. Período de desenvolvimento econômico mas manutenção da escravidão e exclusão social.</p>
<ul>
<li><strong>Lei Eusébio de Queirós (1850):</strong> proibição do tráfico negreiro</li>
<li><strong>Guerra do Paraguai (1864–70):</strong> maior conflito armado da história da América do Sul. Brasil, Argentina e Uruguai vs. Paraguai. Devastou o Paraguai (perdeu ~90% dos homens adultos)</li>
<li><strong>Lei do Ventre Livre (1871):</strong> filhos de escravizadas nascem livres</li>
<li><strong>Lei dos Sexagenários (1885):</strong> liberta maiores de 65 anos</li>
<li><strong>Lei Áurea (1888):</strong> abolição total — sem indenização para escravizados</li>
<li><strong>Proclamação da República (1889):</strong> golpe militar com apoio de fazendeiros insatisfeitos com a abolição sem indenização</li>
</ul>
</div>` }
  ]
},

ch04: {
  title: "História Mundial: Revoluções e Guerras",
  subtitle: "Revolução Francesa, Industrial, Guerras Mundiais e Guerra Fria",
  sections: [
    { id:"s1", title:"Revoluções e o Século XIX", content:`<div class="cs">
<h2>Revolução Francesa (1789)</h2>
<p>O evento mais importante da história moderna. Destruiu o Antigo Regime (monarquia absoluta + sociedade estamental) e estabeleceu os princípios da democracia liberal.</p>
<ul>
<li><strong>Causas:</strong> crise financeira, má colheita, desigualdade (90% da população pagava todos os impostos), ideias iluministas</li>
<li><strong>Fases:</strong> Assembleia Nacional → Monarquia Constitucional → Convenção (Terror de Robespierre) → Diretório → Napoleão</li>
<li><strong>Legado:</strong> Liberdade, Igualdade, Fraternidade · Declaração dos Direitos do Homem e do Cidadão · fim dos privilégios feudais</li>
</ul>
<h2>Revolução Industrial (1760–1850)</h2>
<p>Transformação do modo de produção: artesanato/manufatura → produção fabril mecanizada. Iniciada na Inglaterra.</p>
<ul>
<li>Máquina a vapor (James Watt) → motor das fábricas e ferrovias</li>
<li>Surgimento do proletariado urbano — condições miseráveis de trabalho (12–16h/dia, trabalho infantil)</li>
<li>Crescimento das cidades, poluição, miséria urbana</li>
<li>2ª Revolução Industrial (1850+): eletricidade, petróleo, aço, produção em série (fordismo/taylorismo)</li>
</ul>
<h2>Imperialismo e Partilha da África</h2>
<p>Nações europeias industrializadas dominaram a Ásia e África em busca de matérias-primas e mercados consumidores. Conferência de Berlim (1884): potências dividem a África entre si sem consultar africanos.</p>
</div>` },
    { id:"s2", title:"Guerras Mundiais e Guerra Fria", content:`<div class="cs">
<h2>Primeira Guerra Mundial (1914–1918)</h2>
<p><strong>Estopim:</strong> assassinato do Arquiduque Francisco Fernando (Sarajevo). <strong>Causas profundas:</strong> nacionalismo, imperialismo, corrida armamentista, sistema de alianças.</p>
<ul>
<li>Tríplice Aliança (Alemanha, Áustria-Hungria, Itália) vs. Tríplice Entente (França, Inglaterra, Rússia)</li>
<li>10 milhões de mortos · guerra de trincheiras · novos armamentos (gás, tanques, aviões)</li>
<li>Tratado de Versalhes (1919): punição humilhante à Alemanha → semente da 2ª Guerra</li>
</ul>
<h2>Segunda Guerra Mundial (1939–1945)</h2>
<ul>
<li><strong>Causas:</strong> crise de 1929, ascensão do nazifascismo, revanchismo alemão</li>
<li>Holocausto: genocídio de 6 milhões de judeus + grupos étnicos e políticos</li>
<li>ONU criada em 1945 para evitar novos conflitos</li>
</ul>
<h2>Guerra Fria (1947–1991)</h2>
<p>Disputa ideológica, econômica e geopolítica entre <strong>EUA (capitalismo)</strong> e <strong>URSS (socialismo)</strong>. Nunca houve confronto direto entre as superpotências — daí "fria".</p>
<ul>
<li>Corrida armamentista nuclear · corrida espacial</li>
<li>Guerras por procuração: Coreia, Vietnã, Angola, Afeganistão</li>
<li>Queda do Muro de Berlim (1989) → dissolução da URSS (1991) → fim da Guerra Fria</li>
<li>Nova ordem: EUA como única superpotência → multipolaridade com ascensão da China</li>
</ul>
<div class="concept"><div class="concept-t">📌 ENEM e História Mundial</div><p>O ENEM contextualiza fatos históricos com fontes primárias (cartazes de propaganda, fotografias, discursos). Pratique analisar fontes identificando: quem produziu, para quem, com qual objetivo e qual visão de mundo transmite.</p></div>
</div>` }
  ]
},

ch05: {
  title: "Geopolítica e Mundo Contemporâneo",
  subtitle: "Globalização, blocos econômicos, conflitos e ordem multipolar",
  sections: [
    { id:"s1", title:"Globalização e Blocos Econômicos", content:`<div class="cs">
<h2>Globalização</h2>
<p>Processo de integração econômica, cultural e política em escala mundial, intensificado após a Guerra Fria com o avanço das telecomunicações e do transporte.</p>
<ul>
<li><strong>Dimensão econômica:</strong> livre circulação de capitais, multinacionais, financeirização</li>
<li><strong>Dimensão cultural:</strong> homogeneização cultural ("mcdonaldização") vs. reação identitária local</li>
<li><strong>Dimensão política:</strong> organismos supranacionais (ONU, FMI, Banco Mundial, OMC)</li>
</ul>
<div class="errbox"><div class="err-t">❌ Globalização ≠ Benefício Universal</div><p>O ENEM frequentemente cobra o lado crítico da globalização: aprofundamento das desigualdades entre países centrais e periféricos, exploração do trabalho em países pobres, danos ambientais pela produção globalizada.</p></div>
<h3>Principais Blocos Econômicos</h3>
<ul>
<li><strong>União Europeia:</strong> integração mais avançada — moeda única (euro), livre circulação, parlamento supranacional. 27 países após Brexit.</li>
<li><strong>MERCOSUL:</strong> Brasil, Argentina, Uruguai, Paraguai + associados. Zona de livre comércio — integração limitada comparada à UE.</li>
<li><strong>NAFTA/USMCA:</strong> EUA, Canadá, México. Enorme fluxo comercial, mas assimetria de poder.</li>
<li><strong>ASEAN:</strong> 10 países do Sudeste Asiático. Crescimento econômico acelerado.</li>
<li><strong>BRICS:</strong> Brasil, Rússia, Índia, China, África do Sul + novos membros. Países emergentes que desafiam hegemonia ocidental.</li>
</ul>
<h3>Nova Ordem Mundial</h3>
<p>Fim da bipolaridade (EUA × URSS) → unipolaridade momentânea dos EUA → tendência à <strong>multipolaridade</strong> com ascensão da China, Índia e outros emergentes.</p>
</div>` },
    { id:"s2", title:"Conflitos e Geopolítica do Oriente Médio", content:`<div class="cs">
<h2>Oriente Médio — A Região Mais Complexa do Mundo</h2>
<p>Convergência de fatores históricos, religiosos, étnicos e econômicos (petróleo) torna o Oriente Médio epicentro de conflitos geopolíticos.</p>
<ul>
<li><strong>Questão palestina:</strong> criação do Estado de Israel (1948) deslocou população palestina. Conflito árabe-israelense em curso. Territórios ocupados, assentamentos israelenses, questão de Jerusalém.</li>
<li><strong>Petróleo como arma geopolítica:</strong> crise do petróleo (1973) — países árabes embarargam exportação para países que apoiaram Israel. Mostrou dependência ocidental do petróleo.</li>
<li><strong>Primavera Árabe (2010–12):</strong> onda de protestos populares contra regimes autoritários no mundo árabe — derrubou governos no Egito, Tunísia, Líbia; levou à guerra civil na Síria.</li>
</ul>
<h3>Terrorismo Internacional</h3>
<p>O 11 de setembro de 2001 (ataque às Torres Gêmeas) redefiniu a política internacional. "Guerra ao Terror" dos EUA → invasão do Afeganistão e Iraque → desestabilização regional → surgimento do Estado Islâmico.</p>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Questões Ambientais Globais</div><div class="c-text">O ENEM conecta geopolítica com meio ambiente: Acordo de Paris (2015) sobre emissões de CO₂, disputas por água doce, recursos naturais como fonte de conflitos futuros. O Brasil tem papel central por abrigar a Amazônia.</div></div></div>
</div>` }
  ]
},

ch06: {
  title: "Geografia Física e Biomas Brasileiros",
  subtitle: "Relevo, clima, hidrografia, solos e os 6 biomas do Brasil",
  sections: [
    { id:"s1", title:"Relevo, Clima e Hidrografia", content:`<div class="cs">
<h2>Relevo Brasileiro</h2>
<p>O Brasil tem relevo predominantemente de <strong>planaltos e planícies</strong>, sem grandes cadeias montanhosas como os Andes. Classificação de Jurandyr Ross:</p>
<ul>
<li><strong>Planaltos:</strong> Planalto Central (Cerrado), Planalto Meridional, Planalto da Borborema (NE)</li>
<li><strong>Planícies:</strong> Planície Amazônica, Planície do Pantanal, Planície Costeira</li>
<li><strong>Depressões:</strong> Depressão do São Francisco, Depressão Sertaneja</li>
</ul>
<h3>Climas do Brasil</h3>
<ul>
<li><strong>Equatorial:</strong> Amazônia — quente e úmido, sem estação seca definida</li>
<li><strong>Tropical:</strong> maior parte do Brasil — duas estações (seca e chuvosa)</li>
<li><strong>Semiárido:</strong> Nordeste — baixa precipitação (&lt;800mm/ano), irregulares, secas frequentes</li>
<li><strong>Subtropical:</strong> Sul — quatro estações definidas, geadas possíveis</li>
<li><strong>Tropical de Altitude:</strong> Sudeste (planalto) — temperaturas amenas pela altitude</li>
</ul>
<h3>Hidrografia</h3>
<ul>
<li><strong>Bacia Amazônica:</strong> maior do mundo em volume — Rio Amazonas, Negro, Tapajós, Madeira</li>
<li><strong>Bacia do Paraná/São Francisco:</strong> fundamental para geração de energia (Itaipu) e abastecimento do NE</li>
<li><strong>Aquífero Guarani:</strong> um dos maiores reservatórios de água doce subterrânea do mundo</li>
</ul>
</div>` },
    { id:"s2", title:"Biomas Brasileiros", content:`<div class="cs">
<h2>Os 6 Biomas do Brasil</h2>
<h3>1. Amazônia (49% do território)</h3>
<p>Maior floresta tropical do mundo. Biodiversidade incomparável: ~10% de todas as espécies conhecidas. Ameaças: desmatamento (soja, pecuária, madeira), garimpo ilegal, mudanças climáticas. "Pulmão do mundo" e "berço das águas".</p>
<h3>2. Cerrado (24% do território)</h3>
<p>Savana brasileira — segunda maior formação vegetal. "Berço das águas": nasce aqui rios que abastecem 8 das 12 grandes bacias hidrográficas brasileiras. Mais de 50% já foi devastado pelo agronegócio.</p>
<h3>3. Caatinga (11% do território)</h3>
<p><strong>Único bioma exclusivamente brasileiro.</strong> Semiárido nordestino. Vegetação adaptada à seca: cactáceas, bromélias, árvores caducifólias. Biodiversidade única e ameaçada pela desertificação.</p>
<h3>4. Mata Atlântica (originalmente 15%)</h3>
<p>Hoje restam menos de <strong>12%</strong> da cobertura original — um dos biomas mais ameaçados do planeta. Abriga 70% da população brasileira em seu entorno. Hotspot de biodiversidade.</p>
<h3>5. Pantanal (2%)</h3>
<p>Maior planície alagável do mundo. Pico de biodiversidade durante as cheias. Patrimônio da Humanidade (UNESCO). Sofreu grande incêndio em 2020.</p>
<h3>6. Pampa (2%)</h3>
<p>Sul do Brasil (RS). Campos naturais, pecuária extensiva. Ameaçado pela silvicultura (eucalipto/pinus) e monocultura de soja.</p>
<div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">ENEM e Biomas</div><div class="c-text">O ENEM conecta biomas com questões ambientais, sociais e econômicas. Pratique relacionar: Cerrado + agronegócio + escassez hídrica · Amazônia + desmatamento + indígenas · Caatinga + semiárido + transposição do São Francisco.</div></div></div>
</div>` }
  ]
},

ch07: {
  title: "Geografia Urbana, Rural e Demográfica",
  subtitle: "Urbanização, êxodo rural, desigualdade, IDH e dinâmica populacional",
  sections: [
    { id:"s1", title:"Urbanização e Espaço Urbano", content:`<div class="cs">
<h2>Urbanização Brasileira</h2>
<p>Em 1940, apenas 31% da população brasileira vivia em cidades. Hoje são mais de <strong>87%</strong> — uma das urbanizações mais rápidas e desordenadas do mundo.</p>
<h3>Fatores do Êxodo Rural (1950–1980)</h3>
<ul>
<li>Mecanização da agricultura → expulsão do trabalhador rural</li>
<li>Industrialização das cidades → atração de empregos</li>
<li>Concentração fundiária (latifúndio) → sem terra para pequenos agricultores</li>
</ul>
<h3>Problemas da Urbanização Acelerada</h3>
<ul>
<li><strong>Favelização:</strong> habitações precárias em encostas e áreas de risco</li>
<li><strong>Periferização:</strong> pobres empurrados para periferias distantes dos empregos</li>
<li><strong>Mobilidade urbana:</strong> transporte público deficiente + caos de trânsito</li>
<li><strong>Segregação socioespacial:</strong> ricos e pobres em zonas urbanas distintas</li>
<li><strong>Ilha de calor urbana:</strong> cidades mais quentes que o entorno rural</li>
</ul>
<h3>Megalópoles e Metrópoles</h3>
<p>São Paulo: maior cidade do hemisfério sul (~22 mi região metropolitana). Conjunto Sudeste forma megalópole: São Paulo–Rio de Janeiro–Belo Horizonte.</p>
<h3>Espaço Rural Hoje</h3>
<p>O campo brasileiro é dual: <strong>agronegócio</strong> (grandes propriedades mecanizadas, exportação) convive com <strong>agricultura familiar</strong> (70% dos alimentos consumidos pelos brasileiros vêm dela, com apenas 25% da área agricultável).</p>
</div>` },
    { id:"s2", title:"Demografia e Indicadores Sociais", content:`<div class="cs">
<h2>Dinâmica Populacional</h2>
<h3>Transição Demográfica</h3>
<p>Brasil passou da alta natalidade+alta mortalidade → baixa natalidade+baixa mortalidade. Consequência: envelhecimento populacional — pressão sobre previdência e saúde.</p>
<h3>Estrutura Etária</h3>
<p>Pirâmide etária brasileira: base estreitando (menos nascimentos) + topo alargando (mais idosos). "Bônus demográfico" — janela em que a população em idade ativa é maior — está se fechando.</p>
<h3>Migrações</h3>
<ul>
<li>Internas históricas: NE→SE (busca de trabalho) · interior→litoral</li>
<li>Migrações de retorno: crise econômica SP → retorno ao NE</li>
<li>Internacionais: haitianos, venezuelanos, sírios → Brasil como destino</li>
</ul>
<h3>IDH — Índice de Desenvolvimento Humano</h3>
<div class="fbox">IDH = média de Longevidade + Educação + Renda</div>
<p>Varia de 0 a 1. Brasil tem IDH médio-alto (~0,76) mas com enorme desigualdade interna: IDH do DF ≈ países desenvolvidos; IDH de municípios do semiárido ≈ países mais pobres do mundo.</p>
<h3>Coeficiente de Gini</h3>
<p>Mede desigualdade de renda (0=igualdade perfeita, 1=desigualdade máxima). Brasil historicamente tem Gini alto (~0,53) — um dos países mais desiguais do mundo.</p>
<div class="concept"><div class="concept-t">📌 Desigualdade Regional</div><p>Sul e Sudeste: maior PIB, IDH mais alto, urbanização mais planejada. Norte e Nordeste: maiores índices de pobreza, menor acesso a serviços. O ENEM cobra análise crítica dessas disparidades e suas causas históricas (escravidão, concentração de terra, abandono estatal).</p></div>
</div>` }
  ]
},

// ─── CIÊNCIAS DA NATUREZA ─────────────────────────────────────────────────────

cn02: {
  title: "Termologia e Ondas",
  subtitle: "Temperatura, calor, dilatação, óptica geométrica, som e ondas eletromagnéticas",
  sections: [
    { id:"s1", title:"Termologia — Calor e Temperatura", content:`<div class="cs">
<h2>Temperatura vs. Calor</h2>
<p>Confusão clássica: <strong>temperatura</strong> é uma grandeza intensiva (propriedade do corpo); <strong>calor</strong> é energia em trânsito — só existe quando há diferença de temperatura.</p>
<h3>Escalas de Temperatura</h3>
<div class="fbox">(C/5) = (F−32)/9 = (K−273)/5</div>
<ul>
<li>Celsius (°C): 0° = fusão do gelo, 100° = ebulição da água (1 atm)</li>
<li>Fahrenheit (°F): usada nos EUA</li>
<li>Kelvin (K): escala absoluta, 0 K = zero absoluto (−273°C)</li>
</ul>
<h3>Dilatação Térmica</h3>
<p>Corpos se dilatam quando aquecidos (exceção: água entre 0 e 4°C se contrai ao aquecer).</p>
<div class="fbox">ΔL = L₀ · α · ΔT &nbsp;&nbsp; (linear)<br>ΔA = A₀ · 2α · ΔT &nbsp;&nbsp; (superficial)<br>ΔV = V₀ · 3α · ΔT &nbsp;&nbsp; (volumétrica)</div>
<h3>Calor Sensível e Latente</h3>
<ul>
<li><strong>Calor sensível:</strong> Q = m · c · ΔT (causa variação de temperatura). c = calor específico</li>
<li><strong>Calor latente:</strong> Q = m · L (mudança de fase, sem variação de temperatura)</li>
</ul>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Propagação do Calor</div><div class="c-text">Condução: sólidos, contato direto (panela no fogão). Convecção: fluidos, por correntes (ar condicionado, ventos). Irradiação/Radiação: sem meio material (calor do Sol).</div></div></div>
</div>` },
    { id:"s2", title:"Óptica e Ondas", content:`<div class="cs">
<h2>Óptica Geométrica</h2>
<h3>Reflexão</h3>
<div class="fbox">θ_incidência = θ_reflexão</div>
<p>Espelhos planos: imagem virtual, direita, mesmo tamanho. Espelhos côncavos: convergentes (concentram luz → farol, telescópio). Espelhos convexos: divergentes (ampliam campo visual → retrovisores).</p>
<h3>Refração</h3>
<div class="fbox">n = c/v &nbsp;&nbsp; n₁·sen θ₁ = n₂·sen θ₂ &nbsp;&nbsp; (Lei de Snell-Descartes)</div>
<p>Luz muda de velocidade ao mudar de meio → muda de direção. Responsável pelo arco-íris, miragem, ilusão de objeto torcido na água.</p>
<h3>Lentes</h3>
<ul>
<li><strong>Convergentes (+):</strong> corrigem hipermetropia e presbiopia</li>
<li><strong>Divergentes (−):</strong> corrigem miopia</li>
</ul>
<h2>Ondas</h2>
<div class="fbox">v = λ · f &nbsp;&nbsp; (v=velocidade, λ=comprimento de onda, f=frequência)</div>
<h3>Espectro Eletromagnético</h3>
<p>Da menor para maior frequência (maior para menor comprimento de onda):</p>
<p>Ondas de rádio → micro-ondas → infravermelho → luz visível → ultravioleta → raios X → raios gama</p>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Aplicações no ENEM</div><div class="c-text">Micro-ondas aquecem alimentos (vibram moléculas de água). UV causa câncer de pele (filtro solar absorve). Raios X atravessam tecidos moles mas são absorvidos por ossos. Infravermelho = calor. Rádio/TV = telecomunicações.</div></div></div>
</div>` }
  ]
},

cn03: {
  title: "Eletricidade e Eletromagnetismo",
  subtitle: "Carga elétrica, lei de Ohm, circuitos, potência e indução eletromagnética",
  sections: [
    { id:"s1", title:"Eletrostática e Lei de Ohm", content:`<div class="cs">
<h2>Carga Elétrica</h2>
<p>A matéria é formada por prótons (+) e elétrons (−). Corpos com cargas opostas se atraem; cargas iguais se repelem (Lei de Coulomb).</p>
<div class="fbox">F = k · |q₁ · q₂| / d² &nbsp;&nbsp; (k ≈ 9×10⁹ N·m²/C²)</div>
<h3>Corrente Elétrica</h3>
<div class="fbox">i = ΔQ/Δt &nbsp;&nbsp; (Ampere = Coulomb/segundo)</div>
<p>Corrente Contínua (CC): flui em um sentido (pilhas, baterias). Corrente Alternada (CA): inverte sentido periodicamente (rede elétrica, 60 Hz no Brasil).</p>
<h3>Lei de Ohm</h3>
<div class="fbox">V = R · i &nbsp;&nbsp; (Tensão = Resistência × Corrente)</div>
<p>Resistência (Ω) depende do material, comprimento, área da seção transversal e temperatura.</p>
<h3>Circuitos Elétricos</h3>
<ul>
<li><strong>Série:</strong> R_total = R₁ + R₂ + ... · mesma corrente em todos · tensão se divide</li>
<li><strong>Paralelo:</strong> 1/R_total = 1/R₁ + 1/R₂ + ... · mesma tensão em todos · corrente se divide</li>
</ul>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo — Conta de Luz</div>
<p>Um chuveiro de 5000 W ligado por 30 min por dia. Quanto gasta por mês? (tarifa R$0,80/kWh)</p>
<div class="step"><div class="step-n">1</div><div class="step-t">Energia diária: 5 kW × 0,5 h = 2,5 kWh</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">Energia mensal: 2,5 × 30 = 75 kWh</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">Custo: 75 × 0,80 = <strong>R$ 60,00/mês</strong></div></div></div>
</div>` },
    { id:"s2", title:"Potência e Eletromagnetismo", content:`<div class="cs">
<h2>Potência Elétrica</h2>
<div class="fbox">P = V · i = R · i² = V²/R &nbsp;&nbsp; (Watts)</div>
<p>A potência indica a taxa de consumo de energia elétrica. 1 kWh = energia consumida por aparelho de 1000 W durante 1 hora.</p>
<h3>Transformadores</h3>
<p>Aumentam ou diminuem a tensão da CA usando indução eletromagnética:</p>
<div class="fbox">V₁/V₂ = N₁/N₂ &nbsp;&nbsp; (N = número de espiras)</div>
<p>Usinas geram em alta tensão para transmitir com menos perda. Transformadores reduzem para 127V ou 220V nas residências.</p>
<h3>Eletromagnetismo</h3>
<ul>
<li><strong>Corrente gera campo magnético</strong> (Oersted, 1820) — base do eletroímã</li>
<li><strong>Campo magnético variável gera corrente</strong> (Faraday, 1831) — indução eletromagnética → geradores e transformadores</li>
<li><strong>Motor elétrico:</strong> converte energia elétrica em mecânica (força sobre fio com corrente em campo magnético)</li>
<li><strong>Gerador:</strong> converte energia mecânica em elétrica (rotação de bobina em campo magnético)</li>
</ul>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Fontes de Energia no Brasil</div><div class="c-text">O ENEM adora contextualizar: matriz elétrica brasileira é ~85% renovável (hidráulica, eólica, solar, biomassa). Hidrelétricas geram via turbinas (mecânico → elétrico). Eólicas idem. Termelétricas: calor → vapor → turbina → elétrico.</div></div></div>
</div>` }
  ]
},

cn05: {
  title: "Reações Químicas e Estequiometria",
  subtitle: "Tipos de reação, balanceamento, cálculo estequiométrico e soluções",
  sections: [
    { id:"s1", title:"Reações e Balanceamento", content:`<div class="cs">
<h2>Reações Químicas</h2>
<p>Uma reação química transforma substâncias (reagentes) em novas substâncias (produtos) com rearranjo de átomos. A <strong>Lei de Lavoisier</strong> garante que a massa se conserva.</p>
<h3>Tipos de Reação</h3>
<ul>
<li><strong>Síntese (adição):</strong> A + B → AB &nbsp; Ex: 2H₂ + O₂ → 2H₂O</li>
<li><strong>Análise (decomposição):</strong> AB → A + B &nbsp; Ex: 2H₂O → 2H₂ + O₂</li>
<li><strong>Simples troca (deslocamento):</strong> A + BC → AC + B</li>
<li><strong>Dupla troca (metátese):</strong> AB + CD → AD + CB &nbsp; (neutralização ácido-base é dupla troca)</li>
<li><strong>Combustão:</strong> combustível + O₂ → CO₂ + H₂O (completa) ou CO + H₂O (incompleta)</li>
<li><strong>Oxirredução (redox):</strong> transferência de elétrons entre espécies</li>
</ul>
<h3>Balanceamento</h3>
<p>Ajustar coeficientes para que o número de átomos de cada elemento seja igual em reagentes e produtos. Nunca altere fórmulas, apenas coeficientes.</p>
<div class="exbox"><div class="exbox-lbl">🔸 Balanceamento por Tentativa</div>
<p>CH₄ + O₂ → CO₂ + H₂O</p>
<div class="step"><div class="step-n">1</div><div class="step-t">C já está balanceado (1 de cada lado)</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">H: 4 no reagente → 2H₂O (coloca coef. 2)</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">O: CO₂ tem 2 + H₂O×2 tem 2 = 4 O → 2O₂</div></div>
<div class="step"><div class="step-n">4</div><div class="step-t">Resultado: CH₄ + <strong>2</strong>O₂ → CO₂ + <strong>2</strong>H₂O ✓</div></div></div>
</div>` },
    { id:"s2", title:"Estequiometria e Soluções", content:`<div class="cs">
<h2>Cálculo Estequiométrico</h2>
<div class="fbox">n = m/M &nbsp;&nbsp; (n=moles, m=massa em g, M=massa molar em g/mol)</div>
<p>A massa molar de um elemento é seu número de massa em g/mol (H=1, C=12, N=14, O=16, Na=23, Cl=35,5, Fe=56, Ca=40...).</p>
<div class="exbox"><div class="exbox-lbl">🔸 Exemplo Estequiométrico</div>
<p>Quantos gramas de Fe₂O₃ se formam ao oxidar completamente 56g de Fe? (Fe=56, O=16)</p>
<div class="step"><div class="step-n">1</div><div class="step-t">Reação: 4Fe + 3O₂ → 2Fe₂O₃</div></div>
<div class="step"><div class="step-n">2</div><div class="step-t">M(Fe₂O₃) = 2×56 + 3×16 = 160 g/mol</div></div>
<div class="step"><div class="step-n">3</div><div class="step-t">Proporção: 4 mol Fe (224g) → 2 mol Fe₂O₃ (320g)</div></div>
<div class="step"><div class="step-n">4</div><div class="step-t">56g Fe → x g Fe₂O₃ · x = (56×320)/224 = <strong>80g</strong></div></div></div>
<h2>Soluções Químicas</h2>
<div class="fbox">C = n/V &nbsp;&nbsp; (Concentração molar, mol/L)<br>C = m/V × 1000 &nbsp;&nbsp; (Concentração em g/L)</div>
<h3>pH e Acidez</h3>
<div class="fbox">pH = −log[H⁺]</div>
<ul>
<li>pH &lt; 7 → ácido (limão ≈ 2, café ≈ 5)</li>
<li>pH = 7 → neutro (água pura)</li>
<li>pH > 7 → básico/alcalino (sabão ≈ 9, NaOH ≈ 13)</li>
</ul>
<div class="callout tip"><div class="c-icon">💡</div><div class="c-body"><div class="c-title">Chuva Ácida e Neutralização</div><div class="c-text">Ácido + Base → Sal + Água (neutralização). A chuva ácida (pH &lt; 5,6) resulta de SO₂ e NOₓ emitidos por indústrias e veículos que reagem com água atmosférica. O ENEM conecta isso com impactos ambientais.</div></div></div>
</div>` }
  ]
},

cn06: {
  title: "Química Orgânica",
  subtitle: "Funções orgânicas, isomeria, polímeros, bioquímica e agroquímicos",
  sections: [
    { id:"s1", title:"Funções Orgânicas", content:`<div class="cs">
<h2>Por que Orgânica?</h2>
<p>Química Orgânica estuda compostos de carbono. O carbono é especial: faz 4 ligações, forma cadeias longas e estáveis — base da vida e de materiais modernos (plásticos, medicamentos, combustíveis).</p>
<h3>Hidrocarbonetos</h3>
<ul>
<li><strong>Alcanos (CₙH₂ₙ₊₂):</strong> apenas ligações simples C−C. Saturados. Ex: metano (CH₄), etano, propano, butano. Combustíveis do GLP e gás natural.</li>
<li><strong>Alcenos (CₙH₂ₙ):</strong> uma dupla ligação C=C. Ex: eteno (etileno) — base do polietileno (plástico).</li>
<li><strong>Alcinos (CₙH₂ₙ₋₂):</strong> uma ligação tripla C≡C. Ex: acetileno (C₂H₂) — soldagem oxiacetilênica.</li>
<li><strong>Benzeno e aromáticos:</strong> anel hexagonal com ligações alternadas. Benzeno (C₆H₆) — solvente, base de corantes e medicamentos.</li>
</ul>
<h3>Funções Oxigenadas</h3>
<ul>
<li><strong>Álcoois (−OH):</strong> etanol (álcool da bebida e combustível), glicerina. Ex: C₂H₅OH</li>
<li><strong>Ácidos carboxílicos (−COOH):</strong> ácido acético (vinagre), ácido cítrico (frutas cítricas)</li>
<li><strong>Ésteres (−COO−):</strong> óleos, gorduras, aromas artificiais de frutas</li>
<li><strong>Cetonas (C=O interno):</strong> acetona — solvente de esmalte</li>
<li><strong>Aldeídos (−CHO):</strong> formol (formaldeído) — conservante</li>
<li><strong>Éteres (C−O−C):</strong> éter etílico — anestésico</li>
</ul>
<h3>Funções Nitrogenadas</h3>
<ul>
<li><strong>Aminas (−NH₂):</strong> base das proteínas, anilina (corantes)</li>
<li><strong>Amidas (−CO−NH):</strong> ureia, nylon</li>
</ul>
</div>` },
    { id:"s2", title:"Isomeria, Polímeros e Bioquímica", content:`<div class="cs">
<h2>Isomeria</h2>
<p>Isômeros: mesma fórmula molecular, estruturas diferentes → propriedades diferentes.</p>
<ul>
<li><strong>Isomeria plana (constitucional):</strong> diferente arranjo de átomos na cadeia</li>
<li><strong>Isomeria espacial (estereoisomeria):</strong> mesma cadeia, diferente arranjo espacial</li>
<li><strong>Isomeria geométrica (cis-trans):</strong> em torno de dupla ligação — cis (mesmo lado), trans (lados opostos)</li>
<li><strong>Isomeria óptica:</strong> moléculas assimétricas — imagens especulares não sobreponíveis (quiralidade). Importantíssima em farmácos!</li>
</ul>
<h2>Polímeros</h2>
<p>Macromoléculas formadas pela repetição de monômeros. Divisão:</p>
<ul>
<li><strong>Naturais:</strong> celulose (parede celular vegetal), amido, proteínas, DNA, borracha natural</li>
<li><strong>Sintéticos:</strong> polietileno (sacolas), PET (garrafas), nylon (roupas), teflon (frigideiras), PVC (canos)</li>
</ul>
<h2>Bioquímica — Moléculas da Vida</h2>
<ul>
<li><strong>Carboidratos:</strong> fórmula geral Cₙ(H₂O)ₙ. Glicose → energia celular. Amido e glicogênio → reserva. Celulose → estrutura vegetal.</li>
<li><strong>Lipídios:</strong> gorduras (triglicerídeos = glicerol + 3 ácidos graxos), fosfolipídios (membrana celular), vitaminas lipossolúveis</li>
<li><strong>Proteínas:</strong> polímeros de aminoácidos. Enzimas (catalisadores biológicos), anticorpos, hemoglobina, estruturais (colágeno, queratina)</li>
<li><strong>Ácidos nucleicos:</strong> DNA e RNA — armazenam e transmitem informação genética</li>
</ul>
<div class="callout tip"><div class="c-icon">🎯</div><div class="c-body"><div class="c-title">Orgânica no Cotidiano — ENEM</div><div class="c-text">Etanol: renovável, menos poluente que gasolina · Biodiesel: ésteres de ácidos graxos (transesterificação de óleos vegetais) · Agrotóxicos: organofosforados (inibem enzimas) · Plásticos: reciclagem por código de resinas (PET=1, PEAD=2...).</div></div></div>
</div>` }
  ]
}



}; // fim de CONTEUDOS
