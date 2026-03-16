import React from "react";
import { Link } from "react-router-dom";
import mainpng from "../assets/jeans.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9ded4] min-h-[100vh] md:min-h-[700px] flex items-center pt-20 md:pt-0">
      {/* 1. Optimized Decorative Circle for Mobile */}
      <div
        className="absolute rounded-full bg-[#c9c0e8] opacity-60 transition-all duration-700 
             /* Mobile: Centered */
             left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2
             /* Desktop: Moved to the right */
             md:left-auto md:right-[5%] md:translate-x-0 md:top-1/2"
        style={{
          width: "clamp(280px, 80vw, 650px)",
          height: "clamp(280px, 80vw, 650px)",
          zIndex: 1,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 w-full flex flex-col md:flex-row items-center justify-between">
        {/* 2. Text Content: Centered on mobile, Left on Desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left z-30 order-1 md:order-1">
          <h1
            className="text-black leading-[1.1] mb-4 md:mb-6"
            style={{
              /* Smaller font for mobile to prevent huge gaps */
              fontSize: "clamp(40px, 12vw, 84px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Summer's <br className="md:hidden" /> Coming...
          </h1>
          <p className="text-[14px] md:text-base lg:text-lg text-black/80 mb-8 md:mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
            We started with humble beginnings — selling out of our basement and
            frantically shipping orders as soon as we woke up.
          </p>
          <Link
            to="/shop"
            className="inline-block border-2 border-black bg-white px-10 py-4 font-bold text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
          >
            SHOP NOW
          </Link>
        </div>

        {/* 3. Image Container: Sits below text on mobile, Right on Desktop */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-end mt-10 md:mt-0 order-2 md:order-2">
          <img
            src={mainpng}
            alt="Summer Fashion"
            className="
              /* Mobile: Fixed height to prevent pushing footer away */
              h-[350px] sm:h-[450px] 
              /* Desktop: Large scale */
              md:h-[950px] lg:h-[950px] 
              w-auto object-contain z-10 
              transition-transform duration-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
