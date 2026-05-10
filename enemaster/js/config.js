// ENEMaster — config.js
// SEM chaves expostas — tudo vai pelo proxy seguro /api/ai

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDp2CSNyf7FAwDOLx_WhEj_cUm_szzlfj4",
  authDomain:        "enemaster-caeae.firebaseapp.com",
  projectId:         "enemaster-caeae",
  storageBucket:     "enemaster-caeae.firebasestorage.app",
  messagingSenderId: "986725408393",
  appId:             "1:986725408393:web:57555992d35a306d503058"
};

// URL do proxy Vercel — a chave OpenRouter fica só no servidor
const AI_PROXY_URL = "/api/ai";

// Modelos gratuitos em ordem de preferência
const OR_MODELS = [
  "deepseek/deepseek-r1-0528:free",
  "deepseek/deepseek-chat-v3-0324:free",
  "meta-llama/llama-3.3-70b-instruct:free",
  "mistralai/mistral-7b-instruct:free",
  "google/gemma-3-27b-it:free"
];
