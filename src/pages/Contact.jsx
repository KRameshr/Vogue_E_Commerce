import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-20 md:pt-32">
      {/* Breadcrumb - Center on mobile */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 md:mb-12">
        <nav className="flex justify-center md:justify-start text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">Contact Us</span>
        </nav>
      </div>

      {/* Header Section - Scale text for mobile */}
      <section className="text-center px-6 mb-12 md:mb-20">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 md:mb-8 tracking-tight">
          Contact
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed font-medium">
          Questions? Comments? Let your customers get in touch with you by
          filling out the email form below.
        </p>
      </section>

      {/* Map and Address Card Section */}
      <section className="relative w-full h-[500px] md:h-[600px] mb-12 md:mb-24 flex flex-col md:block">
        {/* Map Container */}
        <div className="absolute inset-0 w-full h-full grayscale contrast-75 opacity-80 z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153167!3d-37.81627977975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWVsYm91cm5lIFZJQywgQXVzdHJhbGlh!5e0!3m2!1sen!2sin!4v1631531531531!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>

        {/* Address Card - Stacks below map on very small screens, floats on larger screens */}
        <div className="relative md:absolute top-auto md:top-1/2 left-0 md:left-24 translate-y-0 md:-translate-y-1/2 bg-white p-8 md:p-10 shadow-2xl m-6 md:m-0 max-w-sm z-20">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
            Our Office
          </h3>
          <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
            249 Cherry St. Arlington Heights, IL 60004, United States of America
          </p>
          <p className="text-black font-bold text-sm mb-1">+(456) 897-123456</p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-6 font-bold">
            Mon - Fri, 8:30am - 10:30pm
          </p>
          <button className="w-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 text-center hover:bg-gray-800 transition-all">
            Get Direction
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20 md:pb-24 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-10 md:mb-16 tracking-tight uppercase">
          Send Us an Email
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10">
          <div className="text-left">
            <label className="block text-[9px] font-bold uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 bg-gray-50/30 p-4 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="block text-[9px] font-bold uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 bg-gray-50/30 p-4 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="md:col-span-2 text-left">
            <label className="block text-[9px] font-bold uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full border border-gray-200 bg-gray-50/30 p-4 text-sm outline-none focus:border-black transition-colors resize-none"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <button className="w-full md:w-auto bg-black text-white px-16 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
