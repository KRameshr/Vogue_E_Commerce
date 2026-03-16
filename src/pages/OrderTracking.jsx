import React from "react";
import deliveryImg from "../assets/delivery.jpg";
import { Link } from "react-router-dom";
const OrderTracking = () => {
  return (
    <div className="bg-white pt-20 md:pt-32 pb-24 font-sans">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Order Tracking
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          {/* Tracking Form */}
          <div className="w-full md:w-1/2 max-w-md">
            <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed mb-8">
              To track your order please enter your Order ID in the box below
              and press the "Track" button. This was given to you on your
              receipt and in the confirmation email you should have received.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
                  Order ID
                </label>
                <input
                  type="text"
                  placeholder="Found in your order confirmation email"
                  className="w-full border border-gray-200 px-4 py-3 text-xs focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
                  Billing Email
                </label>
                <input
                  type="email"
                  placeholder="Email you used during checkout"
                  className="w-full border border-gray-200 px-4 py-3 text-xs focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all w-full md:w-auto"
              >
                Track My Order
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src={deliveryImg}
                alt="Delivery Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Easy 3 Steps Section */}
      <div className="bg-gray-50/50 py-24 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold uppercase tracking-tighter mb-16">
            Easy 3 Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-2xl">🖱️</div>
              <span className="text-[10px] font-bold text-red-500 uppercase mb-2">
                Step 1
              </span>
              <h3 className="text-xs font-bold uppercase mb-4">Get Your ID</h3>
              <p className="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">
                We will answer any questions you may have about our online
                sales.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-2xl">👤</div>
              <span className="text-[10px] font-bold text-red-500 uppercase mb-2">
                Step 2
              </span>
              <h3 className="text-xs font-bold uppercase mb-4">
                Enter Your ID
              </h3>
              <p className="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">
                We will answer any questions you may have about our online
                sales.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-2xl">✉️</div>
              <span className="text-[10px] font-bold text-red-500 uppercase mb-2">
                Step 3
              </span>
              <h3 className="text-xs font-bold uppercase mb-4">
                Check Billing Email
              </h3>
              <p className="text-[10px] text-gray-500 max-w-[200px] leading-relaxed">
                We will answer any questions you may have about our online
                sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">
          Need Help?
        </h2>
        <p className="text-xs text-gray-500 mb-8">
          Get answers to all your questions you might have
        </p>
        <button className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all">
          <Link
            to="/contact"
            className="text-white border-b border-black pb-1 ml-1"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;
