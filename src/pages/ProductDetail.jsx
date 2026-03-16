import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

import {
  RiStarFill,
  RiStarLine,
  RiHeartLine,
  RiShareLine,
  RiPlayLine,
} from "react-icons/ri";

const TABS = [
  "Description",
  "Feature & Details",
  "Shipping & Returns",
  "Reviews",
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { cart, addItem } = useCart();

  // States
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [wished, setWished] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const colors = [
    { name: "Navy", hex: "#1a2535" },
    { name: "White", hex: "#f5f5f0" },
    { name: "Red", hex: "#c0392b" },
  ];

  // Logic to reset state when clicking a different product
  useEffect(() => {
    setSelectedSize("S");
    setSelectedColor(0);
    setQty(1);
    setActiveImg(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product)
    return <div className="pt-40 text-center">Product not found</div>;

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const thumbImgs = [
    product.image,
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&q=80",
  ];

  const isAlreadyInCart = cart.some(
    (item) =>
      item.id === product.id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === colors[selectedColor].name,
  );

  const handleAdd = () => {
    if (isAlreadyInCart) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
    addItem({
      ...product,
      selectedSize,
      selectedColor: colors[selectedColor].name,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Breadcrumb - Hidden on small mobile for space */}
      <div className="hidden sm:block max-w-7xl mx-auto px-6 py-3 border-b border-stone">
        <p className="font-body text-xs text-mist">
          <Link to="/" className="hover:text-noir">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-noir">{product.name}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Images - Vertical on Desktop, Horizontal Scroll on Mobile */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-16 flex-shrink-0">
              {thumbImgs.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 border flex-shrink-0 transition-all ${activeImg === i ? "border-noir" : "border-stone"}`}
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-[#f5f5f0] aspect-[3/4] overflow-hidden">
              <img
                src={thumbImgs[activeImg]}
                className="w-full h-full object-cover object-top"
                alt={product.name}
              />
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-noir mb-1">
              {product.name}
            </h1>
            <p className="text-sm text-mist mb-4">Under Armour Training</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#f0a500] text-sm">
                {[...Array(4)].map((_, i) => (
                  <RiStarFill key={i} />
                ))}
                <RiStarLine />
              </div>
              <span className="text-xs text-mist">— 1 Review</span>
            </div>

            <p className="text-2xl font-bold text-noir mb-6">
              ${product.price}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest uppercase mb-3">
                COLOR: {colors[selectedColor].name}
              </p>
              <div className="flex gap-3">
                {colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === i ? "border-noir scale-110" : "border-transparent"}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between mb-3">
                <p className="text-xs font-bold tracking-widest uppercase">
                  SIZE
                </p>
                <button className="text-xs text-mist underline">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["S", "M", "L", "XL", "2XL"].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-12 h-12 border text-xs font-medium transition-all ${selectedSize === sz ? "bg-noir text-white border-noir" : "border-stone hover:border-noir"}`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag */}
            <div className="space-y-3 relative">
              {showPopup && (
                <div className="absolute -top-10 left-0 w-full bg-noir text-white text-[10px] py-2 px-3 text-center rounded animate-fade-in-down">
                  THIS ITEM IS ALREADY IN YOUR BAG
                </div>
              )}
              <button
                onClick={handleAdd}
                className={`w-full py-4 text-sm font-bold tracking-widest uppercase transition-all ${added ? "bg-green-600 text-white" : isAlreadyInCart ? "bg-stone text-noir" : "bg-noir text-white hover:opacity-90"}`}
              >
                {added
                  ? "✓ ADDED"
                  : isAlreadyInCart
                    ? "ALREADY IN BAG"
                    : "ADD TO BAG"}
              </button>
              <Link to="/cart" className="w-full">
                <button className="w-full py-4 text-sm font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white transition-all">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-b border-stone flex overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all ${activeTab === tab ? "border-noir text-noir" : "border-transparent text-mist"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="py-8 max-w-2xl text-sm leading-relaxed text-noir/70">
          {activeTab === "Description" && (
            <p>
              High-performance fabric designed for your toughest workouts...
            </p>
          )}
          {activeTab === "Feature & Details" && (
            <ul className="list-disc pl-4">
              <li>Moisture-wicking</li>
              <li>4-way stretch</li>
            </ul>
          )}
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-lg font-bold tracking-widest uppercase mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
