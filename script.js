'use strict';

const VARIANT = 1;                    
const MODAL_DELAY_MS = 3000;     // 1 хвилина

/*localStorage*/
function collectSystemInfo() {
  const n = navigator;
  const info = {
    userAgent: n.userAgent,
    platform: n.platform,
    vendor: n.vendor,
    language: n.language,
    languages: Array.from(n.languages || []).join(', '),
    cookieEnabled: n.cookieEnabled,
    onLine: n.onLine,
    hardwareConcurrency: n.hardwareConcurrency,
    deviceMemory: n.deviceMemory,
    maxTouchPoints: n.maxTouchPoints,
    screenSize: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    pixelRatio: window.devicePixelRatio,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (n.userAgentData) {
    info.uaBrands = n.userAgentData.brands.map(b => `${b.brand} ${b.version}`).join(', ');
    info.uaMobile = n.userAgentData.mobile;
    info.uaPlatform = n.userAgentData.platform;
  }
  return info;
}

function saveSystemInfo() {
  Object.entries(collectSystemInfo()).forEach(([key, value]) => {
    if (value !== undefined) localStorage.setItem(`sys_${key}`, String(value));
  });
}

function renderStorage() {
  const box = document.getElementById('storage-info');
  if (!box) return;
  box.textContent = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const row = document.createElement('div');
    row.className = 'storage-row';
    const k = document.createElement('strong');
    k.textContent = `${key}: `;
    const v = document.createElement('span');
    v.textContent = localStorage.getItem(key);
    row.append(k, v);
    box.append(row);
  }
}

/*Коментарі з сервера*/
async function loadComments() {
  const list = document.getElementById('reviews-list');
  if (!list) return;
  list.textContent = 'Завантаження відгуків…';
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();

    list.textContent = '';
    comments.forEach(c => {            // порядок отримання зберігається
      const card = document.createElement('article');
      card.className = 'review';
      const title = document.createElement('h4');
      title.textContent = c.name;
      const author = document.createElement('p');
      author.className = 'review-author';
      author.textContent = c.email;
      const body = document.createElement('p');
      body.textContent = c.body;
      card.append(title, author, body);
      list.append(card);
    });
  } catch (error) {
    list.textContent = 'Не вдалося завантажити відгуки.';
    console.error('Помилка отримання коментарів:', error);
  }
}

/*Модальне вікно*/
function setupModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal || !closeBtn) return;

  const open = () => { modal.hidden = false; };
  const close = () => {
    modal.hidden = true;
    sessionStorage.setItem('feedbackModalClosed', '1'); // не відкривати повторно в сесії
  };

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });

  if (!sessionStorage.getItem('feedbackModalClosed')) {
    setTimeout(open, MODAL_DELAY_MS);
  }
}

/*Тема*/
const isDayTime = (date = new Date()) => {
  const h = date.getHours();
  return h >= 7 && h < 21;            // день: 07:00–21:00
};

let manualTheme = false;             

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? 'Денна тема' : 'Нічна тема';
}

function setupTheme() {
  const autoTheme = () => (isDayTime() ? 'light' : 'dark');
  applyTheme(autoTheme());

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      manualTheme = true;
      const isDark = document.body.classList.contains('dark-mode');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }
  // автоматичне перемикання, коли настає 07:00 або 21:00
  setInterval(() => { if (!manualTheme) applyTheme(autoTheme()); }, 60 * 1000);
}

/*Запуск*/
document.addEventListener('DOMContentLoaded', () => {
  saveSystemInfo();
  renderStorage();
  loadComments();
  setupModal();
  setupTheme();
});
