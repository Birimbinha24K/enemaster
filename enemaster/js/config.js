// ENEMaster — config.js
// SEM chaves expostas — tudo via proxy /api/ai

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDp2CSNyf7FAwDOLx_WhEj_cUm_szzlfj4",
  authDomain:        "enemaster-caeae.firebaseapp.com",
  projectId:         "enemaster-caeae",
  storageBucket:     "enemaster-caeae.firebasestorage.app",
  messagingSenderId: "986725408393",
  appId:             "1:986725408393:web:57555992d35a306d503058"
};

// Proxy seguro — chave OpenRouter fica só no servidor Vercel
const AI_PROXY_URL = "/api/ai";

// Modelos gratuitos confirmados no OpenRouter (lista atualizada maio/2026)
const OR_MODELS = [
  "meta-llama/llama-3.3-70b-instruct:free",
  "openai/gpt-oss-20b:free",
  "nvidia/nemotron-3-nano-30b-a3b:free",
  "nousresearch/hermes-3-llama-3.1-405b:free",
  "mistralai/mistral-7b-instruct:free",
  "meta-llama/llama-3.2-3b-instruct:free"
];
