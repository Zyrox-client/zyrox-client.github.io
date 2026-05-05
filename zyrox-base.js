(function () {
  const OPENED_KEY = 'zyroxClientOpened';

  if (localStorage.getItem(OPENED_KEY)) return;
  localStorage.setItem(OPENED_KEY, 'true');

  const overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'background:rgba(0,0,0,0.6)',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'z-index:2147483647',
    'padding:16px'
  ].join(';');

  const card = document.createElement('div');
  card.style.cssText = [
    'background:#111218',
    'color:#f5f5f5',
    'border:1px solid #e8192c',
    'border-radius:12px',
    'padding:18px',
    'max-width:420px',
    'width:100%',
    'box-shadow:0 12px 36px rgba(0,0,0,0.5)',
    'font-family:Arial,sans-serif'
  ].join(';');

  card.innerHTML = `
    <h2 style="margin:0 0 10px;font-size:1.25rem;">Zyrox client</h2>
    <p style="margin:0 0 10px;">Welcome to zyrox client: a modern hacked client / utility mod for gimkit.</p>
    <p style="margin:0 0 6px;">Left-click to enable/disable a module.</p>
    <p style="margin:0 0 6px;">Right-click to configure a modules settings.</p>
    <p style="margin:0 0 14px;">'\\' to hide/show the client.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <a href="https://github.com/Zyrox-client/Zyrox-gimkit-client" target="_blank" rel="noopener" style="background:#e8192c;color:#fff;padding:8px 12px;border-radius:8px;font-weight:700;text-decoration:none;">github</a>
      <a href="https://coindrop.to/zyrox-client" target="_blank" rel="noopener" style="background:#2a2d3a;color:#fff;padding:8px 12px;border-radius:8px;font-weight:700;text-decoration:none;">support us</a>
      <button type="button" style="margin-left:auto;background:transparent;border:1px solid #666;color:#ddd;padding:8px 12px;border-radius:8px;cursor:pointer;">close</button>
    </div>
  `;

  const closeBtn = card.querySelector('button');
  closeBtn?.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) overlay.remove();
  });

  overlay.appendChild(card);
  document.body.appendChild(overlay);
})();
