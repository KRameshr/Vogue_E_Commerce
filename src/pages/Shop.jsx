import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { RiCloseLine, RiEqualizerLine, RiArrowDownSLine } from "react-icons/ri";

const CATEGORIES = ["Jeans", "Shirts", "Footwear", "Tops"];
const BRANDS = ["Nike", "Adidas", "Gucci", "Levi's"];
const COLORS = [
  { name: "Beige", hex: "#d4b896" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Blue", hex: "#4a7ab5" },
  { name: "Brown", hex: "#7a4f2e" },
];
const SIZES = ["S", "M", "L", "XL", "2XL", "UK6", "UK7"];
const PRICE_RANGES = [
  "$10 - $100",
  "$100 - $200",
  "$200 - $300",
  "$300 - $400",
];
const SORT_OPTIONS = [
  "Trending",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
];

function FilterSection({ title, open, onToggle, children }) {
  return (
    <div className="mb-5">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full mb-3"
      >
        <span className="font-body text-[11px] font-bold tracking-widest uppercase text-noir">
          {title}
        </span>
        <span className="text-mist text-sm">{open ? "−" : "+"}</span>
      </button>
      {open && children}
      <div className="h-px bg-stone mt-5" />
    </div>
  );
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState("M");
  const [sortBy, setSortBy] = useState("Trending");
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sections, setSections] = useState({
    categories: true,
    brand: true,
    color: true,
    size: true,
    price: true,
  });
  const toggle = (k) => setSections((p) => ({ ...p, [k]: !p[k] }));

  const filtered = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => p.category === activeCategory)
      : products;
    if (sortBy === "Price: Low to High")
      return [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low")
      return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sortBy]);

  const Sidebar = () => (
    <div>
      <h3 className="font-body text-base font-bold text-noir mb-6">Filter</h3>
      <FilterSection
        title="Categories"
        open={sections.categories}
        onToggle={() => toggle("categories")}
      >
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => (
            <li key={cat} className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeCategory === cat ? "bg-noir" : "bg-transparent"}`}
              />
              <button
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
                className={`font-body text-xs transition-colors ${activeCategory === cat ? "text-noir font-semibold" : "text-mist hover:text-noir"}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection
        title="Brand"
        open={sections.brand}
        onToggle={() => toggle("brand")}
      >
        <ul className="space-y-2">
          {BRANDS.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-noir w-3 h-3"
                id={`brand-${b}`}
              />
              <label
                htmlFor={`brand-${b}`}
                className="font-body text-xs text-mist cursor-pointer hover:text-noir transition-colors"
              >
                {b}
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection
        title="Color"
        open={sections.color}
        onToggle={() => toggle("color")}
      >
        <ul className="space-y-2">
          {COLORS.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveColor(activeColor === c.name ? null : c.name)
                }
                className="flex items-center gap-2 group"
              >
                <span
                  className={`w-3 h-3 rounded-full flex-shrink-0 border ${activeColor === c.name ? "border-noir" : "border-stone"}`}
                  style={{ backgroundColor: c.hex }}
                />
                <span
                  className={`font-body text-xs transition-colors ${activeColor === c.name ? "text-noir font-semibold" : "text-mist group-hover:text-noir"}`}
                >
                  {c.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection
        title="Size"
        open={sections.size}
        onToggle={() => toggle("size")}
      >
        <div className="flex flex-wrap gap-1.5">
          {SIZES.map((sz) => (
            <button
              key={sz}
              onClick={() => setActiveSize(activeSize === sz ? null : sz)}
              className={`min-w-[32px] h-8 px-2 border font-body text-[11px] transition-all ${activeSize === sz ? "border-noir bg-noir text-chalk" : "border-stone text-noir hover:border-noir"}`}
            >
              {sz}
            </button>
          ))}
        </div>
      </FilterSection>
      <FilterSection
        title="Price"
        open={sections.price}
        onToggle={() => toggle("price")}
      >
        <ul className="space-y-2">
          {PRICE_RANGES.map((r) => (
            <li key={r} className="flex items-center gap-2">
              <input type="checkbox" className="accent-noir w-3 h-3" />
              <span className="font-body text-xs text-mist">{r}</span>
            </li>
          ))}
        </ul>
      </FilterSection>
      <button
        onClick={() => {
          setActiveCategory(null);
          setActiveColor(null);
          setActiveSize(null);
        }}
        className="font-body text-[11px] tracking-widest uppercase text-mist border border-stone px-4 py-2 hover:border-noir hover:text-noir transition-colors mt-2"
      >
        CLEAR FILTER (3)
      </button>
    </div>
  );

  /* Build grid items — insert promo card at position 2 */
  const gridItems = [];
  filtered.forEach((p, i) => {
    if (i === 2) {
      gridItems.push(
        <div
          key="promo"
          className="aspect-[3/4] flex flex-col items-start justify-end p-6"
          style={{
            background: "linear-gradient(160deg, #1a2535 0%, #253a52 100%)",
          }}
        >
          <p className="font-body text-[10px] tracking-ultra uppercase text-white/40 mb-2">
            2025
          </p>
          <h3 className="font-body text-2xl font-black leading-tight mb-4 text-white">
            Summer
            <br />
            Collection
            <br />
            2025
          </h3>
          <Link
            to="/shop"
            className="font-body text-[10px] tracking-widest uppercase text-white/70 border-b border-white/30 pb-px hover:text-white transition-colors"
          >
            EXPLORE NOW →
          </Link>
        </div>,
      );
    }
    gridItems.push(<ProductCard key={p.id} product={p} />);
  });

  return (
    <div className=" min-h-screen">
      {/* Promo Banner */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "180px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1400&q=85"
          alt="Autumn Jacket"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-noir/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-14 px-6">
          <h2
            className="font-body font-black text-3xl md:text-4xl leading-tight mb-1"
            style={{
              color: "#4fc3f7",
              textShadow: "0 0 30px rgba(79,195,247,0.5)",
            }}
          >
            BUY 1 GET 1
          </h2>
          <p
            className="font-body font-black text-2xl md:text-3xl tracking-widest uppercase mb-5"
            style={{ color: "#ffa726" }}
          >
            AUTUMN JACKET
          </p>
          <Link
            to="/shop"
            className="bg-white text-noir font-body text-xs tracking-widest uppercase font-bold px-7 py-2.5 hover:bg-stone transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 border-b border-stone">
        <p className="font-body text-xs text-mist">
          <Link to="/" className="hover:text-noir transition-colors">
            Home
          </Link>
          <span className="mx-1.5 text-stone">/</span>
          <span className="text-noir">Collection</span>
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex gap-10">
        <aside className="hidden md:block w-44 flex-shrink-0">
          <Sidebar />
        </aside>

        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-2">
              <h1 className="font-body text-xl font-bold text-noir">
                {activeCategory || "Jeans"}
              </h1>
              <span className="font-body text-xs text-mist">
                {filtered.length} Styles Found
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center gap-2">
                <span className="font-body text-[11px] font-semibold tracking-widest uppercase text-mist hidden md:block">
                  SORT BY
                </span>
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-1 font-body text-xs font-semibold text-noir"
                >
                  {sortBy}
                  <RiArrowDownSLine
                    className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-stone z-30 min-w-[180px] shadow-md">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortBy(opt);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 font-body text-xs hover:bg-stone transition-colors ${sortBy === opt ? "font-bold text-noir" : "text-mist"}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-1.5 font-body text-xs tracking-widest uppercase text-noir border border-stone px-3 py-1.5"
              >
                <RiEqualizerLine /> Filter
              </button>
            </div>
          </div>

          {/* ✅ Grid — each item is a direct child, no wrapper div */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {gridItems}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-14 mb-4">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 font-body text-sm transition-all rounded-sm ${n === 1 ? "bg-noir text-chalk" : "text-mist border border-stone hover:border-noir hover:text-noir"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="border-t border-stone pt-14 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="font-body text-2xl font-bold text-noir text-center mb-1">
            Follow Our Instagram
          </h2>
          <p className="font-body text-xs tracking-widest uppercase text-center text-mist mb-8">
            @FOLLOW OUR News
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80",
              "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&q=80",
            ].map((src, i) => (
              <a
                key={i}
                href="#"
                className="group aspect-square overflow-hidden bg-stone block"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-noir/40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="relative w-72 h-full bg-white p-6 overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-base font-bold text-noir">
                Filter
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <RiCloseLine className="text-xl" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
