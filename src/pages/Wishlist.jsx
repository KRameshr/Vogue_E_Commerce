import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Wishlist = () => {
  const { cart } = useCart();

  // For the "You May Also Like" section
  const relatedProducts = products.slice(0, 4);

  return (
    <div className="bg-white pt-20 md:pt-32 pb-24 max-w-[1400px] mx-auto px-4 md:px-6 font-sans">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2">
          Wishlist
        </h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          Save items for later
        </p>
      </div>

      {/* Responsive Wishlist Layout */}
      <div className="mb-20">
        {/* Table Header - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-12 border-b border-gray-100 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <div className="col-span-6">Product</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {/* Wishlist Items */}
        <div className="divide-y divide-gray-100">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center"
            >
              {/* Product Info (Left) */}
              <div className="col-span-1 md:col-span-6 flex items-center gap-4 md:gap-6">
                <button className="text-gray-300 hover:text-black text-xl md:text-base order-last md:order-first">
                  ×
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 md:w-24 md:h-28 object-cover bg-gray-50 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-[11px] font-bold uppercase leading-tight md:max-w-[200px]">
                    {item.name}
                  </h3>
                  <p className="text-[9px] text-gray-400 uppercase mt-1">
                    Bathing Suits
                  </p>
                  {/* Mobile-only Price & Status */}
                  <div className="flex items-center gap-3 mt-2 md:hidden">
                    <span className="text-xs font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase ${index === 1 ? "text-red-500" : "text-green-600"}`}
                    >
                      {index === 1 ? "Out of Stock" : "In Stock"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price (Desktop Only) */}
              <div className="hidden md:block col-span-2 text-xs font-bold">
                ${item.price.toFixed(2)}
              </div>

              {/* Status (Desktop Only) */}
              <div className="hidden md:block col-span-2">
                <span
                  className={`text-[10px] font-bold uppercase ${index === 1 ? "text-red-500" : "text-green-600"}`}
                >
                  {index === 1 ? "Out of Stock" : "In Stock"}
                </span>
              </div>

              {/* Action (Button) */}
              <div className="col-span-1 md:col-span-2 text-right">
                <button className="w-full md:w-auto bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                  Added in Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation to Order Tracking */}
      <div className="flex flex-col items-center gap-4 mb-20">
        <Link
          to="/order-tracking"
          className="w-full md:w-auto text-center bg-white border border-black text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
        >
          Track an existing order
        </Link>
      </div>

      {/* Related Products */}
      <div className="mt-32">
        <h2 className="text-center text-xl font-bold uppercase tracking-tighter mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
