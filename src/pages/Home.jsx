import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
// Assuming you have a products array in your data folder
import { products } from "../data/products";

import PromoBanner from "../components/PromoBanner";
import SplitPromo from "../components/SplitPromo";
import ShopBy from "../components/ShopBy";
import Journal from "../components/Journal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      {/* Featured Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-gray-100">
        {/* JEANS - Text at the bottom */}
        <div className="flex flex-col bg-white border-r border-gray-100">
          <div className="flex-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format"
              className="w-full h-full object-cover"
              alt="Jeans"
            />
          </div>
          <div className="py-10 text-center">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-black">
              Jeans
            </h3>
            <p className="text-[11px] tracking-widest uppercase mt-2 text-gray-500">
              Must have item
            </p>
          </div>
        </div>

        {/* SHIRTS - Peach background block at the top */}
        <div className="flex flex-col bg-[#FDF5F0]">
          <div className="py-10 text-center">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-black">
              Shirts
            </h3>
            <p className="text-[11px] tracking-widest uppercase mt-2 text-gray-500">
              Summer Vibe
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format"
              className="w-full h-full object-cover"
              alt="Shirts"
            />
          </div>
        </div>

        {/* FOOTWEAR - Text at the bottom */}
        <div className="flex flex-col bg-white border-l border-gray-100">
          <div className="flex-1 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1712&auto=format"
              className="w-full h-full object-cover"
              alt="Footwear"
            />
          </div>
          <div className="py-10 text-center">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-black">
              Footwear
            </h3>
            <p className="text-[11px] tracking-widest uppercase mt-2 text-gray-500">
              Take you anywhere
            </p>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Best Seller
          </h2>
          <button className="border border-gray-200 px-8 py-2 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all">
            View All
          </button>
        </div>

        {/* Slider */}
        <div className="relative px-10 group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-black">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-black">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-10"></div>
        </div>
      </section>
      <PromoBanner />
      <SplitPromo />
      <ShopBy />
      <Journal />
    </div>
  );
};

export default Home;
