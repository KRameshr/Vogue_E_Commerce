import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiShoppingBagLine,
  RiMenuLine,
  RiCloseLine,
  RiSearchLine,
  RiUserLine,
  RiArrowDropDownLine,
  RiAddLine,
  RiSubtractLine,
} from "react-icons/ri";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "New Arrivals", to: "/ComingSoon" },
  {
    label: "Best Sellers",
    to: "/best-sellers",
    dropdown: [
      { label: "Top Rated", to: "/best-sellers/top" },
      { label: "Trending Now", to: "/best-sellers/trending" },
      { label: "Most Popular", to: "/best-sellers/popular" },
    ],
  },
  {
    label: "Pages",
    to: "#",
    dropdown: [
      { label: "About Us", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "FAQs", to: "/faqs" },
      { label: "Our Journal", to: "/journal" },
    ],
  },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop
  const [mobileExpand, setMobileExpand] = useState(null); // Mobile Accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const toggleMobileExpand = (label) => {
    setMobileExpand(mobileExpand === label ? null : label);
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between border-b border-gray-100">
          {/* 1. Desktop Navigation (Left) */}
          <nav className="hidden md:flex flex-1 items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center group"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.to}
                  className="font-body text-[13px] font-semibold text-black hover:text-gray-500 transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && (
                    <RiArrowDropDownLine className="text-lg opacity-50" />
                  )}
                </Link>

                {/* Desktop Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-[80%] left-0 w-48 bg-white shadow-xl border-t-2 border-black py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="px-6 py-2 text-[12px] text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 2. Logo (Center) */}
          <div className="flex-1 flex md:justify-center justify-start items-center">
            <Link
              to="/"
              className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-black"
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
          </div>

          {/* 3. Actions (Right) */}
          <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
            {/* Search - Hidden on mobile, shows on desktop */}
            <div className="hidden lg:flex items-center text-gray-500 group">
              <RiSearchLine className="text-lg text-black" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-20 focus:w-32 transition-all outline-none bg-transparent text-sm text-black"
              />
            </div>

            {/* Login Icon - Desktop */}
            <Link
              to="/login"
              className="hidden md:block hover:opacity-70 transition-opacity"
            >
              <RiUserLine className="text-xl text-black" />
            </Link>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative hover:opacity-70 transition-opacity"
            >
              <RiShoppingBagLine className="text-xl text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-black p-1"
              onClick={() => setMenuOpen(true)}
            >
              <RiMenuLine className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* 4. Announcement Bar */}
      <div className="bg-black text-white text-center py-2 w-full z-40 relative">
        <p className="text-[10px] tracking-[0.2em] font-bold uppercase">
          Worldwide Free Shipping On Orders Over $150
        </p>
      </div>

      {/* --- 5. MOBILE DRAWER --- */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative w-full max-w-[320px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-display font-bold uppercase tracking-widest text-sm text-black">
                Menu
              </span>
              <button onClick={() => setMenuOpen(false)}>
                <RiCloseLine className="text-3xl text-black" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex flex-col border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center justify-between px-6 py-4">
                    <Link
                      to={link.dropdown ? "#" : link.to}
                      onClick={() => !link.dropdown && setMenuOpen(false)}
                      className="font-display text-xl font-medium text-black uppercase tracking-tight"
                    >
                      {link.label}
                    </Link>

                    {link.dropdown && (
                      <button
                        onClick={() => toggleMobileExpand(link.label)}
                        className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-black"
                      >
                        {mobileExpand === link.label ? (
                          <RiSubtractLine />
                        ) : (
                          <RiAddLine />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Mobile Accordion Dropdown Content */}
                  {link.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-gray-50/50 ${
                        mobileExpand === link.label
                          ? "max-h-64 border-b border-gray-100"
                          : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col py-2 pl-8 pr-6 gap-4">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-500 text-sm font-medium hover:text-black transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Footer / Login Button */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-black font-bold uppercase tracking-widest text-xs hover:opacity-70 transition-opacity"
              >
                <RiUserLine className="text-xl" />
                Account Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
