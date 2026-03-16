import React from "react";

const PromoBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden group">
      <div className="w-full h-[800px] md:h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2070&auto=format&fit=crop&q=80"
          alt="Summer Collection"
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      {/* Overlay Content aligned to the left */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-24">
        <div className="text-left text-white max-w-xl">
          <h2 className="text-5xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
            Summer <br /> Collection <br /> 2025
          </h2>

          <div className="flex flex-col items-start gap-3">
            <button className="bg-white text-black px-12 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all">
              Shop the Collection
            </button>

            <span className="text-[10px] uppercase tracking-widest opacity-70">
              Selected Styles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
