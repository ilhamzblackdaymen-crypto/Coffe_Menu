/* ============================================================
   BrewHouse — Premium Coffee E-Commerce
   style.css — Complete Stylesheet
   ============================================================ */

/* ── 1. CSS VARIABLES ─────────────────────────────────────── */
:root {
  --red: #e53935;
  --red-dark: #b71c1c;
  --red-light: #ff6b6b;
  --gold: #ffd700;
  --gold-dim: #c9a84c;

  /* Dark theme (default) */
  --bg: #0d0d0d;
  --bg2: #161616;
  --bg3: #1f1f1f;
  --bg4: #2a2a2a;
  --glass: rgba(255,255,255,0.04);
  --glass-border: rgba(255,255,255,0.08);
  --text: #f0ece4;
  --text2: #a09890;
  --text3: #6b6560;
  --shadow: rgba(0,0,0,0.6);
  --nav-h: 64px;
}

[data-theme="light"] {
  --bg: #f7f4ef;
  --bg2: #ffffff;
  --bg3: #ede9e3;
  --bg4: #d9d4cb;
  --glass: rgba(0,0,0,0.03);
  --glass-border: rgba(0,0,0,0.08);
  --text: #1a1210;
  --text2: #5a4e46;
  --text3: #9a8e86;
  --shadow: rgba(0,0,0,0.15);
}

/* ── 2. RESET & BASE ──────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.4s, color 0.4s;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
input, textarea { font-family: inherit; }
img { max-width: 100%; }

.container { max-width: 1240px; margin: 0 auto; padding: 0 20px; }
.hidden { display: none !important; }
.full-width { width: 100%; }

/* ── 3. LOADER ────────────────────────────────────────────── */
#loader {
  position: fixed; inset: 0;
  background: #0d0d0d;
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s, visibility 0.5s;
}
#loader.done { opacity: 0; visibility: hidden; }

.loader-inner { text-align: center; }
.loader-logo { font-size: 3.5rem; animation: pulse 1s ease-in-out infinite; }
.loader-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem; font-weight: 900;
  color: var(--red); letter-spacing: 0.1em;
  margin: 12px 0 24px;
}
.loader-bar {
  width: 180px; height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px; overflow: hidden;
}
.loader-fill {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--red), var(--gold));
  border-radius: 2px;
  animation: loadBar 1.8s ease-out forwards;
}
@keyframes loadBar { to { width: 100%; } }
@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }

/* ── 4. NAVBAR ────────────────────────────────────────────── */
#navbar {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(13,13,13,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  transition: background 0.3s;
}
[data-theme="light"] #navbar {
  background: rgba(247,244,239,0.92);
}

.nav-inner {
  display: flex; align-items: center; gap: 16px;
  height: var(--nav-h); padding: 0 20px;
  max-width: 1240px; margin: 0 auto;
}

.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem; font-weight: 900;
  color: var(--red); white-space: nowrap;
  display: flex; align-items: center; gap: 6px;
}
.nav-logo span { color: var(--text); }

.nav-search {
  flex: 1; position: relative;
  max-width: 480px;
}
.nav-search i {
  position: absolute; left: 14px; top: 50%;
  transform: translateY(-50%);
  color: var(--text3); font-size: 0.85rem;
}
.nav-search input {
  width: 100%; padding: 10px 16px 10px 38px;
  background: var(--bg3);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  color: var(--text); font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.nav-search input:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(229,57,53,0.15);
}
.nav-search input::placeholder { color: var(--text3); }

.search-dropdown {
  position: absolute; top: calc(100% + 8px); left: 0; right: 0;
  background: var(--bg2);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px var(--shadow);
  z-index: 200;
}
.search-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.15s;
}
.search-item:hover { background: var(--bg3); }
.search-item-emoji { font-size: 1.6rem; }
.search-item-info small { color: var(--text3); font-size: 0.8rem; }

.nav-actions { display: flex; align-items: center; gap: 6px; }

.btn-icon {
  position: relative;
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text);
  background: var(--glass);
  border: 1px solid var(--glass-border);
  font-size: 1rem;
  transition: background 0.2s, color 0.2s, transform 0.15s;
}
.btn-icon:hover { background: var(--red); color: #fff; transform: scale(1.05); }

.badge {
  position: absolute; top: -4px; right: -4px;
  min-width: 18px; height: 18px;
  background: var(--red);
  color: #fff; font-size: 0.65rem; font-weight: 700;
  border-radius: 9px; padding: 0 4px;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--bg);
  transition: transform 0.2s;
}
.badge.pop { animation: badgePop 0.3s ease; }
@keyframes badgePop { 0%{transform:scale(1)} 50%{transform:scale(1.5)} 100%{transform:scale(1)} }

.mobile-menu-btn { display: none; }

.mobile-nav {
  display: none;
  flex-direction: column;
  border-top: 1px solid var(--glass-border);
  padding: 8px 20px 16px;
  gap: 4px;
}
.mobile-nav a {
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 500;
  color: var(--text2);
  transition: background 0.15s, color 0.15s;
}
.mobile-nav a:hover { background: var(--bg3); color: var(--text); }
.mobile-nav.open { display: flex; }

/* ── 5. BUTTONS ───────────────────────────────────────────── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: #fff;
  border-radius: 30px;
  font-weight: 600; font-size: 0.9rem;
  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
  box-shadow: 0 4px 16px rgba(229,57,53,0.4);
  border: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(229,57,53,0.5);
  filter: brightness(1.1);
}
.btn-primary:active { transform: translateY(0); }

.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 1.5px solid var(--glass-border);
  color: var(--text);
  border-radius: 30px;
  font-weight: 600; font-size: 0.9rem;
  transition: border-color 0.2s, background 0.2s;
}
.btn-outline:hover { border-color: var(--red); background: rgba(229,57,53,0.05); }

/* ── 6. HERO BANNER ───────────────────────────────────────── */
#hero {
  position: relative;
  overflow: hidden;
  height: 480px;
}

.hero-slides { height: 100%; position: relative; }

.slide {
  position: absolute; inset: 0;
  background: var(--slide-bg);
  display: flex; align-items: center; justify-content: space-between;
  padding: 60px clamp(20px, 6vw, 100px);
  opacity: 0; transform: translateX(40px);
  transition: opacity 0.6s, transform 0.6s;
  pointer-events: none;
}
.slide.active {
  opacity: 1; transform: translateX(0);
  pointer-events: all;
}

.slide::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 80% 50%, rgba(229,57,53,0.1) 0%, transparent 60%);
}

.slide-content { max-width: 520px; position: relative; z-index: 1; }

.slide-badge {
  display: inline-flex;
  background: var(--red);
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.slide-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 14px;
}
.slide-content h1 span { color: var(--red); }
.slide-content p { color: var(--text2); margin-bottom: 24px; font-size: 1rem; line-height: 1.6; }

.slide-visual {
  font-size: clamp(5rem, 12vw, 9rem);
  position: relative; z-index: 1;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
}
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }

.slide-dots {
  position: absolute; bottom: 20px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 8px; z-index: 10;
}
.dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.dot.active { background: var(--red); transform: scale(1.3); }

.slide-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  color: #fff; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  z-index: 10;
  transition: background 0.2s, transform 0.2s;
}
.slide-nav:hover { background: var(--red); transform: translateY(-50%) scale(1.05); }
.slide-nav.prev { left: 16px; }
.slide-nav.next { right: 16px; }

/* ── 7. SECTIONS ──────────────────────────────────────────── */
section { padding: 60px 0; }

.section-header {
  text-align: center;
  margin-bottom: 40px;
}
.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 6px;
}
.section-header p { color: var(--text2); }

/* ── 8. CATEGORIES ────────────────────────────────────────── */
#categories { padding: 40px 0; }

.category-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.cat-card {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 20px;
  background: var(--bg3);
  border: 1.5px solid var(--glass-border);
  border-radius: 40px;
  color: var(--text2);
  font-size: 0.9rem; font-weight: 500;
  transition: all 0.2s;
}
.cat-card:hover, .cat-card.active {
  background: var(--red);
  border-color: var(--red);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(229,57,53,0.35);
}
.cat-icon { font-size: 1.2rem; }

/* ── 9. PRODUCT GRID ──────────────────────────────────────── */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background: var(--bg2);
  border: 1px solid var(--glass-border);
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
  animation: fadeUp 0.4s ease both;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px var(--shadow);
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.product-img-wrap {
  position: relative;
  aspect-ratio: 1;
  background: var(--bg3);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
/* Real photo images */
.product-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}
.product-card:hover .product-img-wrap img { transform: scale(1.08); }

/* Fallback emoji (hidden when img loads) */
.product-img-wrap .emoji {
  font-size: 5rem;
  transition: transform 0.3s;
  position: absolute;
}
.product-card:hover .emoji { transform: scale(1.1) rotate(-5deg); }

/* Shimmer loading placeholder */
.img-placeholder {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--bg3) 25%, var(--bg4) 50%, var(--bg3) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}
@keyframes shimmer { to { background-position: -200% 0; } }

.promo-badge {
  position: absolute; top: 10px; left: 10px;
  background: var(--red);
  color: #fff; font-size: 0.7rem; font-weight: 700;
  padding: 3px 8px; border-radius: 8px;
  letter-spacing: 0.03em;
}

.wishlist-toggle {
  position: absolute; top: 10px; right: 10px;
  width: 32px; height: 32px;
  background: var(--bg2);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; color: var(--text3);
  border: 1px solid var(--glass-border);
  transition: color 0.2s, background 0.2s, transform 0.2s;
  z-index: 5;
}
.wishlist-toggle:hover, .wishlist-toggle.active {
  color: var(--red); background: rgba(229,57,53,0.1);
  transform: scale(1.15);
}
.wishlist-toggle.active i::before { content: '\f004'; }

.product-info {
  padding: 14px;
}
.product-name {
  font-weight: 600; font-size: 0.95rem;
  margin-bottom: 4px;
  display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-cat {
  font-size: 0.75rem; color: var(--text3);
  text-transform: uppercase; letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.product-price {
  font-family: 'Space Mono', monospace;
  font-size: 1rem; font-weight: 700;
  color: var(--red);
  margin-bottom: 8px;
}
.product-orig {
  font-size: 0.78rem;
  color: var(--text3);
  text-decoration: line-through;
  margin-left: 6px;
}
.stars { color: var(--gold); font-size: 0.8rem; margin-bottom: 12px; }
.stars span { color: var(--text3); font-size: 0.78rem; margin-left: 4px; }

.add-cart-btn {
  width: 100%;
  padding: 9px;
  background: linear-gradient(135deg, var(--red), var(--red-dark));
  color: #fff;
  border-radius: 10px;
  font-weight: 600; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  transition: filter 0.2s, transform 0.15s;
}
.add-cart-btn:hover { filter: brightness(1.1); transform: scale(1.02); }

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: var(--text3);
  grid-column: 1 / -1;
}

/* ── 10. CART SIDEBAR ─────────────────────────────────────── */
.overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1100;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.overlay.active { opacity: 1; pointer-events: all; }

.cart-sidebar {
  position: fixed; top: 0; right: 0;
  width: min(400px, 100vw);
  height: 100vh;
  background: var(--bg2);
  border-left: 1px solid var(--glass-border);
  z-index: 1200;
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -8px 0 32px var(--shadow);
}
.cart-sidebar.open { transform: translateX(0); }

.cart-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--glass-border);
}
.cart-header h3 { font-family: 'Playfair Display', serif; font-size: 1.2rem; }

.cart-items {
  flex: 1; overflow-y: auto; padding: 16px;
  scrollbar-width: thin; scrollbar-color: var(--bg4) transparent;
}

.cart-empty {
  text-align: center; padding: 60px 20px; color: var(--text3);
}

.cart-item {
  display: flex; gap: 12px; align-items: center;
  padding: 12px;
  background: var(--bg3);
  border-radius: 12px;
  margin-bottom: 10px;
  animation: slideIn 0.25s ease;
}
@keyframes slideIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }

.cart-item-emoji { font-size: 2.2rem; min-width: 44px; text-align: center; }
.cart-item-info { flex: 1; min-width: 0; }
.cart-item-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 2px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cart-item-price { color: var(--red); font-weight: 700; font-size: 0.85rem;
  font-family: 'Space Mono', monospace; }
.cart-item-note { color: var(--text3); font-size: 0.75rem; margin-top: 2px; }

.qty-ctrl {
  display: flex; align-items: center; gap: 8px;
}
.qty-btn {
  width: 26px; height: 26px;
  background: var(--bg4);
  border-radius: 6px;
  font-size: 1rem; color: var(--text);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.qty-btn:hover { background: var(--red); color: #fff; }
.qty-val { font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center; }

.remove-btn { color: var(--text3); font-size: 0.85rem; padding: 4px; transition: color 0.15s; }
.remove-btn:hover { color: var(--red); }

.cart-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--glass-border);
  background: var(--bg2);
}
.cart-total {
  display: flex; justify-content: space-between;
  margin-bottom: 14px;
  font-weight: 600;
}
#cart-total-price { font-family: 'Space Mono', monospace; color: var(--red); font-size: 1.1rem; }

/* ── 11. MODALS ───────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1500;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.modal-overlay.active { opacity: 1; pointer-events: all; }

.modal {
  background: var(--bg2);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  width: 100%; max-height: 90vh; overflow-y: auto;
  position: relative;
  transform: translateY(30px) scale(0.96);
  transition: transform 0.3s;
  scrollbar-width: thin;
}
.modal-overlay.active .modal { transform: none; }

.modal-close {
  position: absolute; top: 16px; right: 16px;
  width: 32px; height: 32px;
  background: var(--bg3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text2); font-size: 0.85rem;
  z-index: 10;
  transition: background 0.15s, color 0.15s;
}
.modal-close:hover { background: var(--red); color: #fff; }

/* ── 12. PRODUCT DETAIL MODAL ─────────────────────────────── */
.product-modal { max-width: 560px; }

.modal-content { padding: 28px; }

.modal-img-wrap {
  aspect-ratio: 16/9;
  background: var(--bg3);
  border-radius: 14px;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 7rem;
  margin-bottom: 20px;
  position: relative;
}
.modal-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.modal-img-wrap .fallback-emoji {
  position: absolute; font-size: 7rem;
}

.modal-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; }
.modal-cat { color: var(--text3); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 10px; }
.modal-desc { color: var(--text2); line-height: 1.7; margin-bottom: 16px; }
.modal-price { font-family: 'Space Mono', monospace; font-size: 1.4rem; font-weight: 700; color: var(--red); margin-bottom: 20px; }

.modal-options { display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px; }
.modal-label { font-size: 0.85rem; font-weight: 600; color: var(--text2); margin-bottom: 6px; }

.toggle-row {
  display: flex; gap: 8px; flex-wrap: wrap;
}
.toggle-btn {
  padding: 7px 16px;
  background: var(--bg3);
  border: 1.5px solid var(--glass-border);
  border-radius: 20px;
  font-size: 0.85rem; color: var(--text2);
  transition: all 0.15s;
}
.toggle-btn:hover, .toggle-btn.active {
  background: var(--red); border-color: var(--red);
  color: #fff;
}

.modal-qty {
  display: flex; align-items: center; gap: 12px;
}
.modal-qty-btn {
  width: 32px; height: 32px;
  background: var(--bg3);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700; color: var(--text);
  transition: background 0.15s;
}
.modal-qty-btn:hover { background: var(--red); color: #fff; }
.modal-qty-val { font-weight: 700; font-size: 1rem; min-width: 30px; text-align: center; }

.modal-note-input {
  width: 100%; padding: 10px 14px;
  background: var(--bg3);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  color: var(--text); font-size: 0.9rem;
  resize: none; outline: none;
  transition: border-color 0.2s;
}
.modal-note-input:focus { border-color: var(--red); }

/* ── 13. CHECKOUT MODAL ───────────────────────────────────── */
.checkout-modal { max-width: 500px; }
.checkout-modal .modal-body { padding: 28px; }
.checkout-modal h2 { font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 20px; }

.checkout-summary {
  background: var(--bg3);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  max-height: 160px;
  overflow-y: auto;
  scrollbar-width: thin;
}
.summary-item {
  display: flex; justify-content: space-between;
  font-size: 0.88rem; padding: 4px 0;
  border-bottom: 1px solid var(--glass-border);
}
.summary-item:last-child { border: none; }
.summary-total {
  display: flex; justify-content: space-between;
  font-weight: 700; margin-top: 10px;
  font-family: 'Space Mono', monospace;
  color: var(--red);
}

.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text2); margin-bottom: 6px; }
.form-group input,
.form-group textarea {
  width: 100%; padding: 10px 14px;
  background: var(--bg3);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  color: var(--text); font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus { border-color: var(--red); }
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text3); }

.payment-methods {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.payment-card {
  display: flex; align-items: center; gap: 8px;
  padding: 12px;
  background: var(--bg3);
  border: 1.5px solid var(--glass-border);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  font-size: 0.9rem; font-weight: 500;
}
.payment-card:has(input:checked) {
  border-color: var(--red);
  background: rgba(229,57,53,0.08);
}
.payment-card input { accent-color: var(--red); }

/* ── 14. SUCCESS MODAL ────────────────────────────────────── */
.success-modal {
  max-width: 380px;
  text-align: center;
  padding: 40px 32px;
}
.success-anim { margin-bottom: 24px; }
.success-circle {
  width: 80px; height: 80px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem; color: #fff;
  margin: 0 auto;
  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes popIn { from{transform:scale(0)} to{transform:scale(1)} }

.success-modal h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; margin-bottom: 10px; }
.success-modal p { color: var(--text2); margin-bottom: 24px; }
.success-modal .btn-primary { margin-bottom: 10px; }
.success-modal .btn-primary,
.success-modal .btn-outline { width: 100%; justify-content: center; }

/* ── 15. WISHLIST MODAL ───────────────────────────────────── */
.wishlist-modal { max-width: 640px; padding: 28px; }
.wishlist-modal h2 { font-family: 'Playfair Display', serif; margin-bottom: 20px; }

.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
}
.wishlist-item {
  background: var(--bg3);
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}
.wishlist-item:hover { transform: translateY(-3px); }
.wishlist-item .wi-emoji { font-size: 3rem; margin-bottom: 6px; }
.wishlist-item .wi-name { font-size: 0.85rem; font-weight: 600; }
.wishlist-item .wi-price { font-size: 0.8rem; color: var(--red); font-family: 'Space Mono', monospace; }

.wishlist-empty { color: var(--text3); text-align: center; padding: 40px; grid-column: 1/-1; }

/* ── 16. TOAST ────────────────────────────────────────────── */
#toast-container {
  position: fixed; bottom: 24px; right: 24px;
  z-index: 9000;
  display: flex; flex-direction: column; gap: 8px;
  pointer-events: none;
}
.toast {
  display: flex; align-items: center; gap: 10px;
  background: var(--bg2);
  border: 1px solid var(--glass-border);
  border-left: 4px solid var(--red);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 0.88rem; font-weight: 500;
  box-shadow: 0 6px 20px var(--shadow);
  animation: toastIn 0.3s ease;
  min-width: 240px; max-width: 300px;
}
.toast.success { border-left-color: #4caf50; }
.toast.info { border-left-color: #2196f3; }
@keyframes toastIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
@keyframes toastOut { to{opacity:0;transform:translateX(20px)} }
.toast.out { animation: toastOut 0.3s ease forwards; }

/* ── 17. FOOTER ───────────────────────────────────────────── */
#footer {
  background: var(--bg2);
  border-top: 1px solid var(--glass-border);
  padding: 60px 0 0;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
}
.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem; font-weight: 900;
  color: var(--red); margin-bottom: 12px;
}
.footer-brand p { color: var(--text2); font-size: 0.9rem; line-height: 1.7; margin-bottom: 20px; }
.social-links { display: flex; gap: 10px; }
.social-links a {
  width: 36px; height: 36px;
  background: var(--bg3);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text2); font-size: 0.9rem;
  transition: background 0.15s, color 0.15s, transform 0.15s;
}
.social-links a:hover { background: var(--red); color: #fff; transform: translateY(-2px); }

.footer-col h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; }
.footer-col p { color: var(--text2); font-size: 0.88rem; line-height: 1.8; }
.footer-col a { color: var(--text3); transition: color 0.15s; }
.footer-col a:hover { color: var(--red); }

.footer-bottom {
  border-top: 1px solid var(--glass-border);
  padding: 20px 0;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 10px;
  color: var(--text3); font-size: 0.82rem;
}

/* ── 18. RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 960px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  :root { --nav-h: 56px; }

  .nav-search { display: none; }
  .mobile-menu-btn { display: flex; }

  #hero { height: 360px; }
  .slide { padding: 40px 20px; }
  .slide-visual { font-size: 5rem; opacity: 0.6; }

  .product-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 14px; }

  .footer-grid { grid-template-columns: 1fr; gap: 28px; }
  .footer-bottom { flex-direction: column; text-align: center; }

  .payment-methods { grid-template-columns: 1fr 1fr; }

  .wishlist-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  #hero { height: 300px; }
  .slide h1 { font-size: 1.6rem; }
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .product-info { padding: 10px; }
}

/* ── 19. SCROLLBAR ────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--red); }

/* ── 20. SELECTION ────────────────────────────────────────── */
::selection { background: rgba(229,57,53,0.3); color: var(--text); }
