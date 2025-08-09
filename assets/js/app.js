// Toggle hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Loading fade-out
window.addEventListener('load', () => document.getElementById('loader').remove());

// Produk dummy
const products = [
  { id: 1, name: "WLP Toko Online", price: 20000, img: "assets/img/toko-online.png" },
  { id: 2, name: "WLP Portofolio", price: 15000, img: "assets/img/portofolio.jpg" },
  { id: 3, name: "WLP + Hosting", price: 30000, img: "assets/img/hosting.jpeg" },
  { id: 4, name: "WLP Custom", price: 25000, img: "assets/img/custom.jpg" }
];

// Render produk
  // Render produk
  const grid = document.getElementById('productGrid');
  function renderProducts(items = products) {
    grid.innerHTML = items.map(p => `
      <article class="product-card">
        <img src="${p.img}" alt="${p.name}" class="product-img">
        <h3 class="product-title">${p.name}</h3>
        <p class="product-price">Rp ${p.price.toLocaleString('id-ID')}</p>
        <button class="btn-buy" onclick="addToCart(${p.id})">Beli</button>
      </article>
    `).join('');
  }
  renderProducts();
  
  // Load More (dummy)
  document.getElementById('loadMore')?.addEventListener('click', () => {
    alert('Fitur "Muat Lagi" akan ditambahkan di update berikutnya.');
  });
