import React from "react";
// Change the filename here to match your actual data file name
import { shopitems } from "../data/products";

const ShopBy = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 border-b border-gray-100">
      <h2 className="text-center text-3xl font-bold mb-12 tracking-tight">
        Shop by
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
        {/* Use categoriesss as defined in your data file */}
        {shopitems.map((cat) => (
          <div
            key={cat.name}
            className="relative aspect-square group cursor-pointer overflow-hidden bg-[#E8E8E8]"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm font-bold tracking-[0.2em] drop-shadow-md">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-2">
        <p className="text-[13px] font-medium leading-relaxed text-gray-800">
          The best sets you’ll ever wear — made in Ontario from locally-sourced
          merino wool
        </p>
        <p className="text-[12px] italic text-gray-500">
          Products provided by Uniso
        </p>
      </div>
    </section>
  );
};

export default ShopBy;
