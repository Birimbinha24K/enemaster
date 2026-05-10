// ═══════════════════════════════════════════
// ENEMaster — api/ai.js
// Vercel Serverless Function — proxy seguro para OpenRouter
// A chave NUNCA fica exposta no frontend
// ═══════════════════════════════════════════

export default async function handler(req, res) {
  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lê a chave da variável de ambiente do Vercel (nunca exposta ao cliente)
  const apiKey = process.env.OPENROUTER_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key não configurada no servidor' });
  }

  const { model, messages, max_tokens } = req.body;

  if (!model || !messages) {
    return res.status(400).json({ error: 'model e messages são obrigatórios' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer':  'https://enemaster.vercel.app',
        'X-Title':       'ENEMaster'
      },
      body: JSON.stringify({
        model:       model,
        max_tokens:  max_tokens || 2048,
        temperature: 0.7,
        messages:    messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
