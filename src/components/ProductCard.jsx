import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { RiShoppingBagLine } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col gap-4 group">
      {/* 1. Wrap the image in a Link to the dynamic ID */}
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-[3/4] bg-gray-50 overflow-hidden cursor-pointer"
      >
        {/* Badges */}
        {product.onSale && (
          <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 z-10">
            SALE
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-4 right-4 bg-[#FBC9B4] text-black text-[10px] font-bold px-3 py-1 z-10">
            NEW
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* 2. Optional: Add a quick-add overlay button */}
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating to detail page when clicking button
            addItem(product);
          }}
          className="absolute bottom-0 w-full bg-black text-white py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[10px] font-bold tracking-widest z-20"
        >
          <RiShoppingBagLine size={14} />
          ADD TO BAG
        </button>
      </Link>

      {/* 3. Wrap the text info in a Link as well */}
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center text-center cursor-pointer"
      >
        <h3 className="text-[13px] font-medium text-gray-900 leading-tight mb-2 hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex gap-2 items-center text-[13px] font-bold">
          {product.oldPrice && (
            <span className="text-gray-400 line-through font-normal">
              ${product.oldPrice}
            </span>
          )}
          <span className={product.oldPrice ? "text-blue-600" : "text-black"}>
            ${product.price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
