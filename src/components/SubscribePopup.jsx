import { useState, useEffect } from "react";
import { RiCloseLine, RiCheckboxCircleLine } from "react-icons/ri";
import deliveryImg from "../assets/delivery.jpg";

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if user has already seen it
      const hasSeenPopup = localStorage.getItem("hasSeenSubscribePopup");

      // 2. Trigger when user scrolls down more than 300 pixels
      if (!hasSeenPopup && window.scrollY > 300) {
        setIsOpen(true);
        // Remove listener immediately so it doesn't keep trying to open
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSubscribePopup", "true");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      closePopup();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={closePopup}
      />

      {/* Popup Container */}
      <div className="relative w-full max-w-[750px] bg-white flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 duration-500">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-20 p-1.5 bg-white text-black rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300"
        >
          <RiCloseLine className="text-xl" />
        </button>

        {/* Left: Image */}
        <div className="hidden sm:block w-full md:w-1/2 h-48 md:h-auto overflow-hidden bg-gray-100">
          <img
            src={deliveryImg}
            alt="New Collection"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2000ms]"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
          {!isSubscribed ? (
            <div className="animate-in fade-in duration-700">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-3 block">
                Newsletter
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter mb-4">
                Don't Miss Out
              </h2>
              <p className="text-gray-500 text-sm mb-8 px-4">
                Join our community and get{" "}
                <span className="font-bold text-black underline">20% off</span>{" "}
                your first order.
              </p>

              <form
                className="w-full flex flex-col gap-3"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-4 border-b border-gray-200 focus:border-black outline-none text-sm text-center bg-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 mt-2 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-zinc-800 transition-all active:scale-[0.98]"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center animate-in zoom-in duration-500">
              <RiCheckboxCircleLine className="text-6xl text-black mb-4" />
              <h2 className="font-display text-2xl font-bold text-black uppercase mb-2">
                Thank You!
              </h2>
              <p className="text-gray-500 text-sm">
                Check your inbox for your code.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
