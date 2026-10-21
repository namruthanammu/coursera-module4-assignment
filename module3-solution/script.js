// Edit this list to change the menu.
const menu = [
  { cat: "Coffee", name: "Filter coffee", price: 60, desc: "South Indian decoction, hot milk, brass tumbler.", tag: "Bestseller" },
  { cat: "Coffee", name: "Cappuccino", price: 140, desc: "Double shot with steamed milk and thick foam." },
  { cat: "Coffee", name: "Cold brew", price: 160, desc: "Steeped for 18 hours, served over ice." },
  { cat: "Coffee", name: "Mocha", price: 170, desc: "Espresso, dark chocolate and milk." },
  { cat: "Tea & more", name: "Masala chai", price: 50, desc: "Ginger, cardamom and strong Assam leaf." },
  { cat: "Tea & more", name: "Iced lemon tea", price: 110, desc: "Black tea, lemon and mint." },
  { cat: "Tea & more", name: "Hot chocolate", price: 150, desc: "Melted dark chocolate and steamed milk." },
  { cat: "Breakfast", name: "Masala dosa", price: 120, desc: "Crisp dosa, potato palya, coconut chutney.", tag: "Veg" },
  { cat: "Breakfast", name: "Idli vada", price: 90, desc: "Two idlis, one vada, sambar and chutney.", tag: "Veg" },
  { cat: "Breakfast", name: "Egg toast", price: 130, desc: "Scrambled eggs on buttered sourdough." },
  { cat: "Bakes", name: "Butter croissant", price: 95, desc: "Baked every morning." },
  { cat: "Bakes", name: "Banana walnut cake", price: 120, desc: "A thick slice with a coffee glaze.", tag: "Veg" },
  { cat: "Bakes", name: "Chocolate brownie", price: 110, desc: "Fudgy centre, crisp top." }
];

const cats = ["All", ...new Set(menu.map(i => i.cat))];
const tabsEl = document.getElementById("tabs");
const menuEl = document.getElementById("menu");
let active = "All";

function render() {
  tabsEl.innerHTML = cats.map(c =>
    `<button class="tab" aria-pressed="${c === active}" data-cat="${c}">${c}</button>`
  ).join("");

  const items = menu.filter(i => active === "All" || i.cat === active);
  menuEl.innerHTML = items.map(i => `
    <article class="item">
      <div class="row">
        <span class="name">${i.name}${i.tag ? `<span class="tag">${i.tag}</span>` : ""}</span>
        <span class="dots"></span>
        <span class="price">₹${i.price}</span>
      </div>
      <p class="desc">${i.desc}</p>
    </article>`).join("");
}

tabsEl.addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  active = btn.dataset.cat;
  render();
  tabsEl.querySelector(`[data-cat="${active}"]`).focus();
});

render();
