import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const ComingSoon = () => {
  const targetDate = new Date("2026-04-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-white">
      {/* Left Content Side: Order 2 on mobile to put text below image if desired, or Order 1 for traditional */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-20 py-12 md:py-16 order-2 md:order-1">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-black mb-8 md:mb-16"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12H5C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H22C22 6.48 17.52 2 12 2Z"
              fill="black"
            />
            <path
              d="M12 8C9.79 8 8 9.79 8 12H10C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12H16C16 9.79 14.21 8 12 8Z"
              fill="black"
            />
          </svg>
          Vogue
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-2">
          Coming Soon
        </h1>
        <p className="text-gray-500 text-[10px] md:text-xs italic mb-8 md:mb-12">
          We're on our way
        </p>

        {/* Countdown Timer: Adjusted gaps for small screens */}
        <div className="flex gap-4 md:gap-8 mb-10 md:mb-16">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold mb-1">
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Notify Form: Stacked on very small screens */}
        <div className="max-w-md mb-10">
          <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">
            Notify me when it's ready
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your Email..."
              className="flex-1 border border-gray-200 px-4 py-3 text-xs focus:outline-none focus:border-black"
            />
            <button className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              Notify Me
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-start">
          <FaFacebookF className="text-xs cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-xs cursor-pointer hover:text-gray-400" />
          <FaPinterestP className="text-xs cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Right Image Side: Hero feel on mobile */}
      <div className="w-full md:w-[55%] bg-[#F2D764] flex items-end justify-center min-h-[300px] md:min-h-screen order-1 md:order-2">
        <img
          src="https://t3.ftcdn.net/jpg/05/46/73/86/360_F_546738616_WxPTEz059htrIaZE0clK9hxu66LYHxIW.jpg"
          alt="Shopping"
          className="h-[80%] md:h-[90%] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
