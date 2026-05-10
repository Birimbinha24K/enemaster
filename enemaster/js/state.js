// ═══════════════════════════════════════════
// ENEMaster — state.js
// Progresso + Firebase sync + Auth
// ═══════════════════════════════════════════

const STATE = {
  completedModules: JSON.parse(localStorage.getItem('em_done') || '{}'),
  xp:     parseInt(localStorage.getItem('em_xp')     || '0'),
  streak: parseInt(localStorage.getItem('em_streak') || '0'),
  qa:     parseInt(localStorage.getItem('em_qa')     || '0'),
  qc:     parseInt(localStorage.getItem('em_qc')     || '0'),
  currentSubjectId: localStorage.getItem('em_curSubj') || null,
  currentModuleId:  localStorage.getItem('em_curMod')  || null,
};

function persistLocal() {
  localStorage.setItem('em_done',    JSON.stringify(STATE.completedModules));
  localStorage.setItem('em_xp',     STATE.xp);
  localStorage.setItem('em_streak', STATE.streak);
  localStorage.setItem('em_qa',     STATE.qa);
  localStorage.setItem('em_qc',     STATE.qc);
  localStorage.setItem('em_curSubj', STATE.currentSubjectId || '');
  localStorage.setItem('em_curMod',  STATE.currentModuleId  || '');
}

function addXP(n) {
  STATE.xp += n;
  persistLocal();
  updateNavXP();
  saveCloud();
}

function updateNavXP() {
  const xpEl = document.getElementById('xp-num');
  const stEl = document.getElementById('streak-num');
  if (xpEl) xpEl.textContent = STATE.xp + ' XP';
  if (stEl) stEl.textContent = STATE.streak;
}

function checkStreak() {
  const today = new Date().toDateString();
  const last  = localStorage.getItem('em_last');
  if (last !== today) {
    const yest = new Date(Date.now() - 86400000).toDateString();
    STATE.streak = last === yest ? STATE.streak + 1 : 1;
    localStorage.setItem('em_last', today);
    localStorage.setItem('em_streak', STATE.streak);
  }
  updateNavXP();
}

// ── Cloud sync ───────────────────────────────────────────────────────────────
let _syncTimer = null;

function saveCloud() {
  if (!window._currentUser || !window._fbDb) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(async function() {
    showToast('syncing');
    try {
      const ref = window._fbDoc(window._fbDb, 'users', window._currentUser.uid);
      await window._fbSetDoc(ref, {
        completedModules: STATE.completedModules,
        xp: STATE.xp, streak: STATE.streak, qa: STATE.qa, qc: STATE.qc,
        lastSeen: new Date().toISOString(),
        email: window._currentUser.email || '',
        name:  window._currentUser.displayName || '',
      }, { merge: true });
      showToast('saved');
    } catch(e) {
      console.warn('saveCloud:', e.message);
      showToast('error');
    }
  }, 2000);
}

async function loadCloud(uid) {
  if (!uid || !window._fbDb) return;
  try {
    const ref  = window._fbDoc(window._fbDb, 'users', uid);
    const snap = await window._fbGetDoc(ref);
    if (snap.exists()) {
      const d = snap.data();
      STATE.completedModules = Object.assign({}, STATE.completedModules, d.completedModules || {});
      STATE.xp     = Math.max(STATE.xp,     d.xp     || 0);
      STATE.streak = Math.max(STATE.streak, d.streak  || 0);
      STATE.qa     = Math.max(STATE.qa,     d.qa      || 0);
      STATE.qc     = Math.max(STATE.qc,     d.qc      || 0);
      persistLocal();
    }
  } catch(e) { console.warn('loadCloud:', e.message); }
}

// ── Toast ────────────────────────────────────────────────────────────────────
let _toastT = null;
function showToast(status) {
  let el = document.getElementById('sync-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sync-toast';
    el.className = 'sync-toast';
    document.body.appendChild(el);
  }
  clearTimeout(_toastT);
  if (status === 'syncing') {
    el.innerHTML = '<div class="sync-dot syncing"></div> Sincronizando...';
    el.style.display = 'flex';
  } else if (status === 'saved') {
    el.innerHTML = '<div class="sync-dot"></div> Salvo na nuvem ✓';
    el.style.display = 'flex';
    _toastT = setTimeout(function() { el.style.display = 'none'; }, 2500);
  } else {
    el.innerHTML = '<div class="sync-dot" style="background:var(--red)"></div> Erro ao sincronizar';
    el.style.display = 'flex';
    _toastT = setTimeout(function() { el.style.display = 'none'; }, 3000);
  }
}

// ── Navegação ────────────────────────────────────────────────────────────────
function goHome()      { window.location.href = 'index.html'; }
function goSubject(id) { STATE.currentSubjectId = id; persistLocal(); window.location.href = 'subject.html'; }
function goModule(sid, mid) {
  STATE.currentSubjectId = sid;
  STATE.currentModuleId  = mid;
  persistLocal();
  window.location.href = 'modulo.html';
}
function goSimulado() { window.location.href = 'simulado.html'; }
function goRedacao()  { window.location.href = 'redacao.html'; }

// ── Nav renderer ─────────────────────────────────────────────────────────────
function renderNav(activePage) {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const links = [
    { key:'home',     href:'index.html',    label:'🏠 Início'   },
    { key:'simulado', href:'simulado.html', label:'🏆 Simulado' },
    { key:'redacao',  href:'redacao.html',  label:'✍️ Redação'  },
  ];
  if (STATE.currentModuleId) {
    links.splice(1, 0, { key:'modulo', href:'modulo.html', label:'📖 Módulo' });
  }
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">ENEM<span>master</span></a>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="nav-btn ${l.key===activePage?'active':''}">${l.label}</a>`).join('')}
    </div>
    <div class="nav-right">
      <div class="streak-chip">🔥 <span id="streak-num">${STATE.streak}</span>d</div>
      <div class="xp-chip">⭐ <span id="xp-num">${STATE.xp} XP</span></div>
      <div class="auth-avatar" id="auth-avatar" style="display:none;"></div>
      <button class="auth-btn" id="auth-btn" onclick="handleAuthClick()">🔑 Entrar</button>
    </div>`;
}

// ── Auth click ────────────────────────────────────────────────────────────────
function handleAuthClick() {
  if (window._currentUser) {
    window._fbSignOut(window._fbAuth).catch(function(e) { console.warn('signOut:', e); });
  } else {
    doLogin();
  }
}

async function doLogin() {
  const btn = document.getElementById('auth-btn');

  // Aguarda Firebase estar pronto (máx 3s)
  let tries = 0;
  while ((!window._fbAuth || !window._fbGoogleProvider) && tries < 30) {
    await new Promise(function(r) { setTimeout(r, 100); });
    tries++;
  }

  if (!window._fbAuth || !window._fbGoogleProvider) {
    alert('Erro ao carregar autenticação. Recarregue a página.');
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = '⏳ Entrando...'; }

  try {
    const provider = new window._fbGoogleProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    await window._fbSignIn(window._fbAuth, provider);
    // onAuthStateChanged cuida do resto
  } catch(e) {
    if (btn) { btn.disabled = false; btn.textContent = '🔑 Entrar'; }
    const ignored = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];
    if (!ignored.includes(e.code)) {
      console.warn('Login error:', e.code, e.message);
      alert('Erro no login: ' + (e.message || e.code));
    }
  }
}

// ── Firebase auth listener ────────────────────────────────────────────────────
// REGRA: initFirebase() é chamado UMA VEZ pelo module script (via DOMContentLoaded)
// O banner de login SÓ aparece depois que o estado auth é confirmado como null
let _authResolved = false;

function initFirebase() {
  if (!window._fbOnAuth || !window._fbAuth) return;

  window._fbOnAuth(window._fbAuth, async function(user) {
    window._currentUser = user || null;
    const btn    = document.getElementById('auth-btn');
    const avatar = document.getElementById('auth-avatar');

    if (user) {
      // ── Logado ──
      await loadCloud(user.uid);
      updateNavXP();

      if (btn)    { btn.disabled = false; btn.textContent = 'Sair'; }
      if (avatar) {
        avatar.style.display = 'flex';
        avatar.textContent   = (user.displayName || user.email || 'U')[0].toUpperCase();
        avatar.title         = user.displayName || user.email || '';
      }
      // Esconde banner imediatamente
      hideBanner();

      if (typeof onAuthReady === 'function') onAuthReady(user);

    } else {
      // ── Não logado ──
      if (btn)    { btn.disabled = false; btn.textContent = '🔑 Entrar'; }
      if (avatar) { avatar.style.display = 'none'; }

      // Mostra o banner SOMENTE após confirmar que não há usuário
      // Isso evita o "flash" ao navegar entre páginas quando está logado
      if (_authResolved) {
        showBanner();
      }
    }

    if (!_authResolved) {
      _authResolved = true;
      // Primeira resolução — se não há usuário, mostra o banner agora
      if (!user) showBanner();
    }
  });
}

// Banner — sem delay para evitar piscar quando logado
// O banner só aparece quando _authResolved = true e user = null
function showBanner() {
  const b = document.getElementById('login-banner');
  if (b) b.style.display = 'flex';
}
function hideBanner() {
  const b = document.getElementById('login-banner');
  if (b) b.style.display = 'none';
}
