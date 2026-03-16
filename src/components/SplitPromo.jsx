import React from "react";

const SplitPromo = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Card: Classic Tee */}
      <div className="bg-[#EBEBEB] flex h-[320px] items-center overflow-hidden">
        <div className="w-[45%] h-full">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80"
            alt="Classic Tee"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="w-[55%] flex flex-col items-center justify-center p-6 space-y-3">
          <h3 className="text-4xl font-bold tracking-tight text-black">
            Classic Tee
          </h3>
          <p className="text-sm font-medium text-gray-800">Enjoy the Summer</p>
          <button className="mt-4 border-2 border-black px-8 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all bg-transparent">
            Shop T-Shirts
          </button>
        </div>
      </div>

      {/* Right Card: Afterpay Section */}
      <div className="bg-[#F5F5F5] flex h-[320px] items-center overflow-hidden">
        <div className="w-[45%] h-full">
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80"
            alt="Summer Style"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-[55%] flex flex-col items-center justify-center p-6">
          {/* Simulated Afterpay Logo to match screenshot */}
          <div className="flex items-center gap-1 mb-4">
            <span className="text-2xl font-bold tracking-tighter text-[#000000]">
              afterpay
            </span>
            <div className="bg-[#B2FCE4] p-1 rounded-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M7 17l9.2-9.2M17 17L7.8 7.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="text-[11px] font-bold tracking-tight text-center mb-6">
            <span className="text-[#00D3BA]">Shop Now.</span> Enjoy Now. Pay
            Later.
          </p>

          <button className="border-2 border-black px-8 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all bg-transparent">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default SplitPromo;
