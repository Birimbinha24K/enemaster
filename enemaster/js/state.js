// ═══════════════════════════════════════════
// ENEMaster — state.js  (login fix v2)
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

// ── Persist locally ──────────────────────────────────────────────────────────
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

// ── Nav XP display ───────────────────────────────────────────────────────────
function updateNavXP() {
  const xpEl = document.getElementById('xp-num');
  const stEl = document.getElementById('streak-num');
  if (xpEl) xpEl.textContent = STATE.xp + ' XP';
  if (stEl) stEl.textContent = STATE.streak;
}

// ── Streak ───────────────────────────────────────────────────────────────────
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
  _syncTimer = setTimeout(async () => {
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
    _toastT = setTimeout(() => el.style.display = 'none', 2500);
  } else {
    el.innerHTML = '<div class="sync-dot" style="background:var(--red)"></div> Erro ao sincronizar';
    el.style.display = 'flex';
    _toastT = setTimeout(() => el.style.display = 'none', 3000);
  }
}

// ── Navigation ───────────────────────────────────────────────────────────────
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
  if (STATE.currentModuleId)
    links.splice(1, 0, { key:'modulo', href:'modulo.html', label:'📖 Módulo' });

  nav.innerHTML = `
    <a href="index.html" class="nav-logo">ENEM<span>master</span></a>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="nav-btn ${l.key===activePage?'active':''}">${l.label}</a>`).join('')}
    </div>
    <div class="nav-right">
      <div class="streak-chip">🔥 <span id="streak-num">${STATE.streak}</span>d</div>
      <div class="xp-chip">⭐ <span id="xp-num">${STATE.xp} XP</span></div>
      <div class="auth-avatar" id="auth-avatar" style="display:none;" title=""></div>
      <button class="auth-btn" id="auth-btn" onclick="handleAuthClick()">🔑 Entrar</button>
    </div>`;
}

// ── Auth click — completely decoupled from onAuthStateChanged ─────────────────
// Root cause of the bug: calling signInWithPopup() inside onAuthStateChanged
// callback causes Firebase to cancel the popup immediately. Solution: keep the
// sign-in trigger completely separate from the auth listener.
function handleAuthClick() {
  if (window._currentUser) {
    window._fbSignOut(window._fbAuth).catch(e => console.warn('signOut:', e));
  } else {
    doLogin();
  }
}

async function doLogin() {
  if (!window._fbAuth || !window._fbGoogleProvider) {
    alert('Firebase ainda inicializando. Aguarde 1 segundo e tente novamente.');
    return;
  }

  const btn = document.getElementById('auth-btn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Entrando...'; }

  try {
    const provider = new window._fbGoogleProvider();
    // prompt:'select_account' forces the Google account picker to always appear
    // and prevents the popup from auto-closing on some browsers/configurations
    provider.setCustomParameters({ prompt: 'select_account' });
    await window._fbSignIn(window._fbAuth, provider);
    // Success: onAuthStateChanged will fire automatically with the user object
  } catch(e) {
    if (btn) { btn.disabled = false; btn.textContent = '🔑 Entrar'; }
    // Silently ignore user closing the popup — that is expected behavior
    const ignored = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];
    if (!ignored.includes(e.code)) {
      console.warn('Login error:', e.code, e.message);
      alert('Erro no login: ' + (e.message || e.code));
    }
  }
}

// ── Firebase auth listener — only handles state UI, never triggers popups ────
let _authInitialized = false;

function initFirebase() {
  if (!window._fbAuth || _authInitialized) return;
  _authInitialized = true;

  let _resolved = false; // Track if auth state has resolved at least once

  window._fbOnAuth(window._fbAuth, async (user) => {
    window._currentUser = user || null;
    const btn    = document.getElementById('auth-btn');
    const avatar = document.getElementById('auth-avatar');

    if (user) {
      // ── User is signed in ──
      await loadCloud(user.uid);
      updateNavXP();

      if (btn)    { btn.disabled = false; btn.textContent = 'Sair'; }
      if (avatar) {
        avatar.style.display = 'flex';
        avatar.textContent   = (user.displayName || user.email || 'U')[0].toUpperCase();
        avatar.title         = user.displayName || user.email || '';
      }
      hideBanner();

      // Notify page that auth is ready (used for re-rendering data)
      if (typeof onAuthReady === 'function') onAuthReady(user);

    } else {
      // ── User is signed out ──
      if (btn)    { btn.disabled = false; btn.textContent = '🔑 Entrar'; }
      if (avatar) { avatar.style.display = 'none'; }

      // Only show the login banner after auth state has been confirmed as null
      // (prevents flash of banner on pages where user IS logged in)
      if (_resolved) showBanner();
    }

    // After first resolution, we know the true auth state
    if (!_resolved) {
      _resolved = true;
      if (!user) showBanner(); // Show banner now that we know user is null
    }
  });
}

let _bannerTimer = null;
function showBanner() {
  // Small delay prevents flash during page navigation when user IS logged in
  // (Firebase takes ~200-400ms to confirm auth state on page load)
  clearTimeout(_bannerTimer);
  _bannerTimer = setTimeout(() => {
    if (!window._currentUser) {
      const b = document.getElementById('login-banner');
      if (b) b.style.display = 'flex';
    }
  }, 500);
}
function hideBanner() {
  clearTimeout(_bannerTimer);
  const b = document.getElementById('login-banner');
  if (b) b.style.display = 'none';
}
