import React from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import { instaImages, paymentMethods } from "../data/products";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Instagram Section */}
      <div className="text-center py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-6 tracking-tight text-black">
          Follow Our Instagram
        </h2>

        <button className="border border-black px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300">
          Follow us @store
        </button>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 w-full mb-20">
        {instaImages.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={src}
              alt={`Instagram ${i}`}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
            />
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
        {/* Help */}
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[12px]">
            Help
          </h4>

          <ul className="space-y-4 text-[14px] text-gray-600">
            <li>
              <Link to="/cart" className="hover:text-black transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                to="/order-tracking"
                className="hover:text-black transition-colors"
              >
                Track Your Order
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-black transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[12px]">
            About
          </h4>

          <ul className="space-y-4 text-[14px] text-gray-600">
            <li>
              <Link
                to="/about"
                className="hover:text-gray-600 transition-colors uppercase tracking-widest text-xs font-bold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black transition-colors"
              >
                Contact Us
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-black transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[12px]">
            Categories
          </h4>

          <ul className="space-y-4 text-[14px] text-gray-600">
            <li>
              <a href="#">Shirts</a>
            </li>
            <li>
              <a href="#">Jeans</a>
            </li>
            <li>
              <a href="#">Footwear</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-[14px]">
            Join the list and receive 15% off your first order
          </h4>

          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-gray-300 py-3 pr-16 text-sm outline-none"
            />

            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[11px] font-bold uppercase">
              Send
            </button>
          </div>

          <div className="flex gap-6">
            <RiFacebookFill size={20} />
            <RiInstagramLine size={20} />
            <RiPinterestLine size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 py-10 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap gap-6 text-[11px] text-gray-500 uppercase">
            <span>© Vogue 2025. All Rights Reserved</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className="flex gap-4 items-center opacity-80">
            {paymentMethods.map((payment) => (
              <img
                key={payment.name}
                src={payment.src}
                className={payment.height}
                alt={payment.name}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
