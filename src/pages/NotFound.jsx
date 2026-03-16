import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 font-sans">
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Glitch Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square overflow-hidden bg-gray-900 shadow-2xl">
            {/* Replace with your actual glitch head image path */}
            <img
              src="/assets/glitch-head.jpg"
              alt="404 Error"
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.src =
                  "https://www.shutterstock.com/image-vector/internet-error-message-404-page-260nw-1321646582.jpg";
              }}
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-gray-400 text-sm md:text-base font-medium tracking-widest uppercase">
            Error 404...
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight uppercase">
            Page not found
          </h1>

          <p className="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed">
            We looked everywhere for this page. Are you sure the website URL is
            correct?
          </p>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-block bg-white text-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
