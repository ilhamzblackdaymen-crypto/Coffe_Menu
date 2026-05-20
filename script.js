/* ============================================================
   BrewHouse — Premium Coffee E-Commerce
   script.js — Full Application Logic
   ============================================================ */

'use strict';

/* ── 1. DATA ──────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1, name: 'Espresso Classico', category: 'hot',
    emoji: '☕',
    img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80',
    price: 28000, origPrice: 35000,
    rating: 4.9, reviews: 312,
    promo: 'BEST SELLER',
    desc: 'A bold double-shot espresso with crema perfection. Sourced from premium Arabica beans roasted in-house.',
    canIce: false
  },
  {
    id: 2, name: 'Signature Caramel Latte', category: 'hot',
    emoji: '🍮',
    img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&q=80',
    price: 38000, origPrice: 45000,
    rating: 4.8, reviews: 284,
    promo: '15% OFF',
    desc: 'Our legendary caramel latte — velvety steamed milk, double espresso, and housemade caramel drizzle.',
    canIce: true
  },
  {
    id: 3, name: 'Dark Roast Americano', category: 'hot',
    emoji: '🖤',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
    price: 25000, origPrice: null,
    rating: 4.7, reviews: 198,
    promo: null,
    desc: 'Deep, smooth Americano from our exclusive dark-roast blend. Bold, brooding, and beautifully bitter.',
    canIce: true
  },
  {
    id: 4, name: 'Iced Cold Brew', category: 'iced',
    emoji: '🧊',
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80',
    price: 35000, origPrice: 42000,
    rating: 4.9, reviews: 421,
    promo: 'HOT DEAL',
    desc: 'Steeped 18 hours in cold water for a smooth, low-acid coffee with intense depth. Pure refreshment.',
    canIce: true
  },
  {
    id: 5, name: 'Iced Brown Sugar Shaken', category: 'iced',
    emoji: '🤎',
    img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80',
    price: 40000, origPrice: 48000,
    rating: 4.8, reviews: 367,
    promo: 'NEW',
    desc: 'Shaken espresso with housemade brown sugar syrup and oat milk over ice. Viral for good reason.',
    canIce: true
  },
  {
    id: 6, name: 'Salted Caramel Frappé', category: 'iced',
    emoji: '🥤',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
    price: 42000, origPrice: null,
    rating: 4.7, reviews: 245,
    promo: null,
    desc: 'Blended iced coffee with salted caramel sauce, topped with whipped cream and a sprinkle of sea salt.',
    canIce: true
  },
  {
    id: 7, name: 'Matcha Oat Latte', category: 'noncoffee',
    emoji: '🍵',
    img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&q=80',
    price: 36000, origPrice: 44000,
    rating: 4.8, reviews: 189,
    promo: '20% OFF',
    desc: 'Ceremonial-grade Japanese matcha whisked with creamy oat milk. Earthy, smooth, and energising.',
    canIce: true
  },
  {
    id: 8, name: 'Strawberry Milk', category: 'noncoffee',
    emoji: '🍓',
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80',
    price: 30000, origPrice: null,
    rating: 4.6, reviews: 134,
    promo: null,
    desc: 'Fresh strawberry purée blended with premium whole milk and a touch of honey. Naturally delicious.',
    canIce: true
  },
  {
    id: 9, name: 'Butterfly Pea Lemonade', category: 'noncoffee',
    emoji: '💜',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    price: 34000, origPrice: 40000,
    rating: 4.7, reviews: 211,
    promo: 'TRENDING',
    desc: 'Color-changing butterfly pea flower tea over lemonade — a visual treat with a floral, citrusy flavour.',
    canIce: true
  },
  {
    id: 10, name: 'Classic Chocolate', category: 'noncoffee',
    emoji: '🍫',
    img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&q=80',
    price: 32000, origPrice: null,
    rating: 4.5, reviews: 156,
    promo: null,
    desc: 'Rich Belgian drinking chocolate with steamed milk. Hot comfort in every sip.',
    canIce: true
  },
  {
    id: 11, name: 'Cold Brew Bottle 500ml', category: 'bottled',
    emoji: '🍶',
    img: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=500&q=80',
    price: 45000, origPrice: 55000,
    rating: 4.9, reviews: 302,
    promo: 'TAKE HOME',
    desc: 'Our signature cold brew in a glass bottle, ready for on-the-go. Shelf stable for 5 days chilled.',
    canIce: false
  },
  {
    id: 12, name: 'Oat Milk Latte Bottle', category: 'bottled',
    emoji: '🥛',
    img: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&q=80',
    price: 48000, origPrice: null,
    rating: 4.7, reviews: 178,
    promo: 'NEW',
    desc: 'Barista-grade oat milk latte bottled fresh daily. Perfect for breakfast on the move.',
    canIce: false
  }
];

/* ── 2. STATE ─────────────────────────────────────────────── */

let state = {
  cart: JSON.parse(localStorage.getItem('bh_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('bh_wishlist') || '[]'),
  activeCategory: 'all',
  modalProduct: null,
  modalQty: 1,
  modalTemp: 'Hot',
  lastOrderText: ''
};

/* ── 3. UTILITY FUNCTIONS ─────────────────────────────────── */

/** Format Rupiah */
const fmt = n => 'Rp ' + n.toLocaleString('id-ID');

/** Render star rating */
const stars = (r) => {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return s;
};

/** Save to LocalStorage */
const persist = () => {
  localStorage.setItem('bh_cart', JSON.stringify(state.cart));
  localStorage.setItem('bh_wishlist', JSON.stringify(state.wishlist));
};

/** Show toast notification */
const toast = (msg, type = 'default', icon = '☕') => {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 320);
  }, 2800);
};

/* ── 4. LOADER ────────────────────────────────────────────── */

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 2000);
});

/* ── 5. THEME TOGGLE ──────────────────────────────────────── */

const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('bh_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('bh_theme', next);
  updateThemeIcon(next);
  toast(next === 'dark' ? 'Dark mode on' : 'Light mode on', 'info', next === 'dark' ? '🌙' : '☀️');
});

function updateThemeIcon(theme) {
  themeToggle.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ── 6. MOBILE MENU ───────────────────────────────────────── */

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('open');
});

/* ── 7. HERO SLIDER ───────────────────────────────────────── */

(function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('slide-dots');
  let cur = 0, timer;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function goTo(idx) {
    slides[cur].classList.remove('active');
    dotsWrap.children[cur].classList.remove('active');
    cur = (idx + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dotsWrap.children[cur].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), 4500);
  }

  document.getElementById('slide-prev').addEventListener('click', () => goTo(cur - 1));
  document.getElementById('slide-next').addEventListener('click', () => goTo(cur + 1));

  resetTimer();
})();

/* ── 8. CATEGORY FILTER ───────────────────────────────────── */

document.querySelectorAll('.cat-card').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeCategory = btn.dataset.cat;
    const title = btn.dataset.cat === 'all' ? 'Our Menu' : btn.querySelector('span:last-child').textContent;
    document.getElementById('products-title').textContent = title;
    renderProducts(PRODUCTS.filter(filterFn));
  });
});

function filterFn(p) {
  return state.activeCategory === 'all' || p.category === state.activeCategory;
}

/* ── 9. PRODUCT RENDERING ─────────────────────────────────── */

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  const noRes = document.getElementById('no-results');
  grid.innerHTML = '';

  if (!list.length) {
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  list.forEach((p, i) => {
    const inWishlist = state.wishlist.includes(p.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <div class="img-placeholder" id="ph-${p.id}"></div>
        <img
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onload="document.getElementById('ph-${p.id}')?.remove()"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
        />
        <span class="emoji" style="display:none">${p.emoji}</span>
        ${p.promo ? `<div class="promo-badge">${p.promo}</div>` : ''}
        <button class="wishlist-toggle ${inWishlist ? 'active' : ''}" data-id="${p.id}" title="Wishlist" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.category)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          ${fmt(p.price)}
          ${p.origPrice ? `<span class="product-orig">${fmt(p.origPrice)}</span>` : ''}
        </div>
        <div class="stars">${stars(p.rating)} <span>(${p.reviews})</span></div>
        <button class="add-cart-btn" onclick="event.stopPropagation(); quickAddToCart(${p.id})">
          <i class="fas fa-plus"></i> Add to Cart
        </button>
      </div>
    `;
    card.addEventListener('click', () => openProductModal(p.id));
    grid.appendChild(card);
  });
}

function catLabel(cat) {
  return { hot: 'Hot Coffee', iced: 'Iced Coffee', noncoffee: 'Non Coffee', bottled: 'Bottled' }[cat] || cat;
}

// Initial render
renderProducts(PRODUCTS);

/* ── 10. WISHLIST ─────────────────────────────────────────── */

function toggleWishlist(id, btn) {
  const idx = state.wishlist.indexOf(id);
  const p = PRODUCTS.find(x => x.id === id);
  if (idx === -1) {
    state.wishlist.push(id);
    btn.classList.add('active');
    btn.querySelector('i').className = 'fas fa-heart';
    toast(`${p.name} added to wishlist`, 'default', '❤️');
  } else {
    state.wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.querySelector('i').className = 'far fa-heart';
    toast(`${p.name} removed from wishlist`, 'info', '💔');
  }
  persist();
  updateWishlistCount();
}

function updateWishlistCount() {
  const el = document.getElementById('wishlist-count');
  el.textContent = state.wishlist.length;
  el.style.display = state.wishlist.length ? '' : 'none';
}
updateWishlistCount();

// Wishlist modal
document.getElementById('wishlist-nav-btn').addEventListener('click', () => {
  const grid = document.getElementById('wishlist-grid');
  grid.innerHTML = '';
  if (!state.wishlist.length) {
    grid.innerHTML = '<p class="wishlist-empty">💔 No favorites yet. Start exploring!</p>';
  } else {
    state.wishlist.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const el = document.createElement('div');
      el.className = 'wishlist-item';
      el.innerHTML = `<div class="wi-emoji">${p.emoji}</div><div class="wi-name">${p.name}</div><div class="wi-price">${fmt(p.price)}</div>`;
      el.addEventListener('click', () => {
        closeAllModals();
        openProductModal(p.id);
      });
      grid.appendChild(el);
    });
  }
  openModal('wishlist-modal-overlay');
});
document.getElementById('wishlist-modal-close').addEventListener('click', () => closeModal('wishlist-modal-overlay'));

/* ── 11. PRODUCT MODAL ────────────────────────────────────── */

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.modalProduct = p;
  state.modalQty = 1;
  state.modalTemp = 'Hot';

  const content = document.getElementById('product-modal-content');
  content.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.img}" alt="${p.name}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
      />
      <span class="fallback-emoji" style="display:none">${p.emoji}</span>
    </div>
    <div class="modal-cat">${catLabel(p.category)}</div>
    <h2 class="modal-title">${p.name}</h2>
    <div class="stars" style="margin-bottom:10px">${stars(p.rating)} <span style="color:var(--text3);font-size:0.82rem">(${p.reviews} reviews)</span></div>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-price" id="modal-display-price">${fmt(p.price)}</div>

    <div class="modal-options">
      ${p.canIce ? `
      <div>
        <div class="modal-label">Temperature</div>
        <div class="toggle-row">
          <button class="toggle-btn active" onclick="setTemp('Hot', this)">🔥 Hot</button>
          <button class="toggle-btn" onclick="setTemp('Iced', this)">🧊 Iced</button>
        </div>
      </div>` : ''}

      <div>
        <div class="modal-label">Quantity</div>
        <div class="modal-qty">
          <button class="modal-qty-btn" onclick="changeModalQty(-1)">−</button>
          <span class="modal-qty-val" id="modal-qty-val">1</span>
          <button class="modal-qty-btn" onclick="changeModalQty(1)">+</button>
        </div>
      </div>

      <div>
        <div class="modal-label">Add Notes (optional)</div>
        <textarea class="modal-note-input" id="modal-note" rows="2" placeholder="e.g. Less sugar, extra shot…"></textarea>
      </div>
    </div>

    <button class="btn-primary full-width" onclick="addToCartFromModal()">
      <i class="fas fa-shopping-bag"></i> Add to Cart — <span id="modal-total-price">${fmt(p.price)}</span>
    </button>
  `;
  openModal('product-modal-overlay');
}

function setTemp(val, btn) {
  state.modalTemp = val;
  document.querySelectorAll('.toggle-row .toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeModalQty(delta) {
  state.modalQty = Math.max(1, Math.min(20, state.modalQty + delta));
  document.getElementById('modal-qty-val').textContent = state.modalQty;
  if (state.modalProduct) {
    document.getElementById('modal-total-price').textContent = fmt(state.modalProduct.price * state.modalQty);
  }
}

function addToCartFromModal() {
  if (!state.modalProduct) return;
  const note = document.getElementById('modal-note')?.value.trim() || '';
  addToCart(state.modalProduct.id, state.modalQty, state.modalTemp, note);
  closeModal('product-modal-overlay');
  openCart();
}

document.getElementById('product-modal-close').addEventListener('click', () => closeModal('product-modal-overlay'));
document.getElementById('product-modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal('product-modal-overlay');
});

/* ── 12. QUICK ADD TO CART ────────────────────────────────── */

function quickAddToCart(id) {
  addToCart(id, 1, 'Hot', '');
}

/* ── 13. CART LOGIC ───────────────────────────────────────── */

function addToCart(id, qty = 1, temp = 'Hot', note = '') {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // Check for same item + temp combo
  const existing = state.cart.find(i => i.id === id && i.temp === temp);
  if (existing) {
    existing.qty += qty;
    existing.note = note || existing.note;
  } else {
    state.cart.push({ id, qty, temp, note, name: p.name, price: p.price, emoji: p.emoji });
  }
  persist();
  updateCartUI();
  toast(`${p.name} added to cart!`, 'success', '🛒');
}

function removeFromCart(id, temp) {
  state.cart = state.cart.filter(i => !(i.id === id && i.temp === temp));
  persist();
  updateCartUI();
}

function changeQty(id, temp, delta) {
  const item = state.cart.find(i => i.id === id && i.temp === temp);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  persist();
  updateCartUI();
}

function getTotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartUI() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  const countEl = document.getElementById('cart-count');
  countEl.textContent = count;
  countEl.style.display = count ? '' : 'none';
  countEl.classList.add('pop');
  setTimeout(() => countEl.classList.remove('pop'), 300);

  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');

  if (!state.cart.length) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.classList.remove('hidden');
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.classList.add('hidden');
  footerEl.style.display = '';
  itemsEl.innerHTML = '';

  state.cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
        ${item.temp !== 'Hot' ? `<div class="cart-item-note">🧊 ${item.temp}</div>` : ''}
        ${item.note ? `<div class="cart-item-note">📝 ${item.note}</div>` : ''}
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${item.id},'${item.temp}',-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},'${item.temp}',1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id},'${item.temp}')" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    `;
    itemsEl.appendChild(el);
  });

  document.getElementById('cart-total-price').textContent = fmt(getTotal());
}

// Initialize cart UI on load
updateCartUI();

/* ── 14. CART SIDEBAR TOGGLE ──────────────────────────────── */

function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

document.getElementById('cart-toggle').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('overlay').addEventListener('click', closeCart);

/* ── 15. CHECKOUT ─────────────────────────────────────────── */

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (!state.cart.length) return toast('Your cart is empty!', 'info', '🛒');
  closeCart();
  openCheckoutModal();
});

function openCheckoutModal() {
  // Build summary
  const summaryEl = document.getElementById('checkout-summary');
  summaryEl.innerHTML = '';
  state.cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `<span>${item.emoji} ${item.name} × ${item.qty}${item.temp !== 'Hot' ? ' (Iced)' : ''}</span><span>${fmt(item.price * item.qty)}</span>`;
    summaryEl.appendChild(row);
  });
  const totalRow = document.createElement('div');
  totalRow.className = 'summary-total';
  totalRow.innerHTML = `<span>Total</span><span>${fmt(getTotal())}</span>`;
  summaryEl.appendChild(totalRow);

  openModal('checkout-modal-overlay');
}

document.getElementById('checkout-modal-close').addEventListener('click', () => closeModal('checkout-modal-overlay'));
document.getElementById('checkout-modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal('checkout-modal-overlay');
});

/* ── 16. PAYMENT ──────────────────────────────────────────── */

document.getElementById('pay-btn').addEventListener('click', () => {
  const name = document.getElementById('co-name').value.trim();
  const phone = document.getElementById('co-phone').value.trim();
  const address = document.getElementById('co-address').value.trim();
  const notes = document.getElementById('co-notes').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!name) return toast('Please enter your name!', 'info', '👤');
  if (!phone) return toast('Please enter your phone number!', 'info', '📞');
  if (!address) return toast('Please enter your delivery address!', 'info', '📍');
  if (!payment) return toast('Please select a payment method!', 'info', '💳');

  // Build WhatsApp message
  let msg = `🛒 *New Order — BrewHouse*\n\n`;
  msg += `👤 *Name:* ${name}\n`;
  msg += `📞 *Phone:* ${phone}\n`;
  msg += `📍 *Address:* ${address}\n`;
  if (notes) msg += `📝 *Notes:* ${notes}\n`;
  msg += `\n*Order Details:*\n`;
  state.cart.forEach(i => {
    msg += `${i.emoji} ${i.name}${i.temp !== 'Hot' ? ' (Iced)' : ''} × ${i.qty} = ${fmt(i.price * i.qty)}\n`;
    if (i.note) msg += `   📝 ${i.note}\n`;
  });
  msg += `\n💰 *Total: ${fmt(getTotal())}*\n`;
  msg += `💳 *Payment: ${payment.value}*\n`;
  msg += `\nThank you for ordering! ☕`;

  state.lastOrderText = msg;

  // Set success message
  document.getElementById('success-msg').textContent =
    `Hi ${name}! Your order of ${fmt(getTotal())} has been received. Payment: ${payment.value}.`;

  closeModal('checkout-modal-overlay');
  openModal('success-modal-overlay');
  toast('Payment Successful! 🎉', 'success', '✅');

  // Clear cart
  state.cart = [];
  persist();
  updateCartUI();
});

/* ── 17. SUCCESS MODAL ────────────────────────────────────── */

document.getElementById('wa-btn').addEventListener('click', () => {
  const encoded = encodeURIComponent(state.lastOrderText);
  window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
});

document.getElementById('success-close').addEventListener('click', () => {
  closeModal('success-modal-overlay');
  // Reset checkout form
  ['co-name', 'co-phone', 'co-address', 'co-notes'].forEach(id => {
    document.getElementById(id).value = '';
  });
  const checked = document.querySelector('input[name="payment"]:checked');
  if (checked) checked.checked = false;
});

/* ── 18. SEARCH ───────────────────────────────────────────── */

const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');

searchInput.addEventListener('input', debounce(handleSearch, 200));
searchInput.addEventListener('focus', () => {
  if (searchInput.value.trim().length > 0) handleSearch();
});
document.addEventListener('click', e => {
  if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
    searchDropdown.classList.add('hidden');
  }
});

function handleSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchDropdown.classList.add('hidden');
    renderProducts(PRODUCTS.filter(filterFn));
    return;
  }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || catLabel(p.category).toLowerCase().includes(q)
  );

  // Show dropdown
  searchDropdown.innerHTML = '';
  if (matches.length) {
    matches.slice(0, 6).forEach(p => {
      const el = document.createElement('div');
      el.className = 'search-item';
      el.innerHTML = `
        <span class="search-item-emoji">${p.emoji}</span>
        <div class="search-item-info">
          <div>${p.name}</div>
          <small>${catLabel(p.category)} · ${fmt(p.price)}</small>
        </div>
      `;
      el.addEventListener('click', () => {
        searchDropdown.classList.add('hidden');
        searchInput.value = '';
        openProductModal(p.id);
      });
      searchDropdown.appendChild(el);
    });
    searchDropdown.classList.remove('hidden');
  } else {
    searchDropdown.classList.add('hidden');
  }

  // Also filter product grid
  renderProducts(matches);
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/* ── 19. MODAL HELPERS ────────────────────────────────────── */

function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

function closeAllModals() {
  ['product-modal-overlay', 'checkout-modal-overlay', 'success-modal-overlay', 'wishlist-modal-overlay']
    .forEach(closeModal);
}

// Close on overlay click for all modals
['wishlist-modal-overlay'].forEach(id => {
  document.getElementById(id).addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal(id);
  });
});

/* ── 20. KEYBOARD ESCAPE ──────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAllModals();
    closeCart();
    searchDropdown.classList.add('hidden');
  }
});

/* ── 21. SMOOTH SCROLL FOR NAV LINKS ─────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('mobile-nav').classList.remove('open');
    }
  });
});

/* ── 22. NAVBAR SCROLL SHADOW ─────────────────────────────── */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.4)' : '';
});

/* ── Done ─────────────────────────────────────────────────── */
console.log('%c☕ BrewHouse loaded! Enjoy your coffee.', 'color:#e53935;font-size:1.1rem;font-weight:bold;');
