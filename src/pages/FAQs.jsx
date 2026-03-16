import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react"; // Or use your own icons

const FAQs = () => {
  const [openItem, setOpenItem] = useState("methods");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="bg-white pt-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <nav className="flex justify-center text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">FAQs</span>
        </nav>
      </div>

      <h1 className="text-center text-5xl font-bold mb-20 tracking-tight">
        FAQs
      </h1>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24">
        {/* Left Column: FAQ Content */}
        <div className="space-y-16">
          {/* Shipping Policy Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              Shipping Policy
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Free shipping worldwide on all orders over $100. All unworn items
              may be returned risk-free within 60 days of delivery.
            </p>

            <div className="space-y-4 border-t border-gray-100">
              <AccordionItem
                title="Where do you ship to?"
                isOpen={openItem === "where"}
                onClick={() => toggleItem("where")}
              >
                We ship to over 50 countries worldwide including North America,
                Europe, and Asia.
              </AccordionItem>

              <AccordionItem
                title="Which shipping methods do you have?"
                isOpen={openItem === "methods"}
                onClick={() => toggleItem("methods")}
              >
                Use this text to answer questions in as much detail as possible
                for your customers. We offer Standard, Express, and Next-Day
                delivery options.
              </AccordionItem>

              <AccordionItem
                title="How long will my order take?"
                isOpen={openItem === "time"}
                onClick={() => toggleItem("time")}
              >
                Standard shipping takes 5-7 business days, while Express takes
                2-3 business days.
              </AccordionItem>
            </div>
          </div>

          {/* Returns Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              Returns and Exchanges
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              All unworn items may be returned risk-free within 60 days of
              delivery. Free shipping worldwide on all orders over $100.
            </p>

            <div className="space-y-4 border-t border-gray-100">
              <AccordionItem
                title="How do I ship my order back?"
                isOpen={openItem === "return"}
                onClick={() => toggleItem("return")}
              >
                Simply visit our returns portal, print your label, and drop it
                off at any authorized shipping location.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800"
            alt="Support Representative"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, isOpen, onClick, children }) => (
  <div className="border-b border-gray-100 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left group"
    >
      <span className="text-sm font-bold tracking-tight group-hover:text-gray-600 transition-colors">
        {title}
      </span>
      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}
    >
      <p className="text-gray-500 text-xs leading-relaxed">{children}</p>
    </div>
  </div>
);

export default FAQs;
