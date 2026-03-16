import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; // 1. Added useNavigate

const Checkout = () => {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate(); // 2. Initialize navigate

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "India",
    "Indonesia",
    "Ireland",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Pakistan",
    "Portugal",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "United Kingdom",
    "United States (US)",
  ];

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the order logic
    navigate("/wishlist"); // Move to Wishlist after "Place Order"
  };

  return (
    <div className="bg-white pt-20 md:pt-32 pb-24 max-w-[1400px] mx-auto px-4 md:px-6 font-sans">
      {/* Optional Breadcrumb with Wishlist Link */}
      <div className="mb-8">
        <nav className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <Link to="/">Home</Link> <span className="mx-2">/</span>{" "}
          <Link to="/cart">Cart</Link> <span className="mx-2">/</span>{" "}
          <span className="text-black font-bold">Checkout</span>
          <span className="mx-2">|</span>
          <Link to="/wishlist" className="hover:text-black transition-colors">
            View Wishlist
          </Link>
        </nav>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-2">
          Checkout
        </h1>
        <p className="text-xs text-gray-500">
          Have a coupon?{" "}
          <button className="font-bold text-black underline">Click here</button>{" "}
          to enter
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* Left: Billing Form */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b pb-4">
            Billing Details
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase">
                  First name*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase">
                  Last name*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Company name (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Country / Region*
              </label>
              <select
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none bg-white cursor-pointer"
                defaultValue="United States (US)"
                required
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Street address*
              </label>
              <input
                type="text"
                placeholder="House number and street name"
                className="w-full border border-gray-200 p-3 text-xs mb-2 focus:border-black outline-none"
                required
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Town / City*
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Postcode*
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">Phone*</label>
              <input
                type="tel"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Email address*
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none"
                required
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="ship-different"
                className="accent-black"
              />
              <label
                htmlFor="ship-different"
                className="text-[10px] font-bold uppercase cursor-pointer"
              >
                Ship to a different address?
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase">
                Order notes (optional)
              </label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full border border-gray-200 p-3 text-xs focus:border-black outline-none h-32 resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right: Order Summary Sidebar */}
        <div className="lg:col-span-5 bg-white p-8 border border-gray-100 shadow-sm sticky top-32">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6">
            Your Order
          </h2>
          <div className="divide-y divide-gray-100">
            <div className="flex justify-between text-[10px] font-bold uppercase text-gray-400 pb-4">
              <span>Product</span>
              <span>Sub-total</span>
            </div>

            <div className="py-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-xs font-medium"
                >
                  <span className="text-gray-600 uppercase">
                    {item.name} × {item.qty}
                  </span>
                  <span className="font-bold">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="py-4 space-y-3 text-[11px] font-bold uppercase">
              <div className="flex justify-between">
                <span className="text-gray-500">Sub-total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500">Shipping</span>
                <div className="text-right text-[10px] font-normal lowercase space-y-1 text-gray-400">
                  <label className="flex items-center justify-end gap-2 cursor-pointer">
                    Flat rate: $10.00{" "}
                    <input
                      type="radio"
                      name="ship-method"
                      className="accent-black"
                    />
                  </label>
                  <label className="flex items-center justify-end gap-2 cursor-pointer">
                    Free shipping{" "}
                    <input
                      type="radio"
                      name="ship-method"
                      defaultChecked
                      className="accent-black"
                    />
                  </label>
                  <label className="flex items-center justify-end gap-2 cursor-pointer">
                    Local pickup{" "}
                    <input
                      type="radio"
                      name="ship-method"
                      className="accent-black"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-between text-lg pt-4 border-t border-gray-100">
                <span className="tracking-tighter">Total</span>
                <span>${(cartTotal + 10).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="space-y-4 p-4 bg-gray-50">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  id="bank"
                  defaultChecked
                  className="accent-black"
                />
                <label
                  htmlFor="bank"
                  className="text-[10px] font-bold uppercase"
                >
                  Direct bank transfer
                </label>
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed pl-5">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  className="accent-black"
                />
                <label
                  htmlFor="cod"
                  className="text-[10px] font-bold uppercase"
                >
                  Cash on delivery
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  className="accent-black"
                />
                <label
                  htmlFor="paypal"
                  className="text-[10px] font-bold uppercase"
                >
                  Paypal
                </label>
              </div>
            </div>

            <div className="flex items-start gap-2 py-2">
              <input type="checkbox" required className="accent-black mt-1" />
              <label className="text-[10px] text-gray-500 uppercase">
                I agree to the website{" "}
                <Link to="/terms" className="underline font-bold text-black">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
