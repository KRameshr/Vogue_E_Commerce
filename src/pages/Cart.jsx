import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import {
  RiDeleteBin6Line,
  RiAddLine,
  RiSubtractLine,
  RiRefreshLine,
} from "react-icons/ri";

const Cart = () => {
  const { cart, removeItem, updateQty, cartTotal } = useCart();

  const cartIds = cart.map((item) => item.id);
  const related = products.filter((p) => !cartIds.includes(p.id)).slice(0, 4);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center pt-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter">
          Your bag is empty
        </h2>
        <p className="text-gray-500 mb-8 text-sm">
          Looks like you haven't added anything to your bag yet.
        </p>
        <Link
          to="/shop"
          className="bg-black text-white px-10 py-4 font-bold text-[10px] tracking-widest uppercase hover:bg-gray-800 transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-20 md:pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <nav className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <Link to="/">Home</Link> <span className="mx-2">/</span>{" "}
          <span className="text-black font-bold">Cart</span>
        </nav>
      </div>

      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-tighter">
          My Cart
        </h1>
        <p className="text-gray-400 text-[10px] md:text-[11px] italic">
          Items are reserved for 60 minutes
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Product List */}
        <div className="lg:col-span-2">
          {/* Desktop Table Header (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 border-b border-gray-100 pb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          <div className="divide-y divide-gray-100">
            {cart.map(
              (
                item,
                index, // 1. Added 'index' here
              ) => (
                <div
                  key={`${item.id}-${index}`} // 2. Improved key to handle duplicate IDs with different sizes
                  className="py-6 md:py-8 flex flex-col md:grid md:grid-cols-12 md:items-center gap-4 md:gap-0"
                >
                  {/* Product Info Group */}
                  <div className="col-span-6 flex items-center gap-4 md:gap-6">
                    <button
                      onClick={() => removeItem(index)} // 3. Changed item.id to index
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <RiDeleteBin6Line size={18} />
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 md:w-24 md:h-32 object-cover bg-gray-50 flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[11px] md:text-[12px] font-bold leading-relaxed uppercase pr-4">
                        {item.name}
                      </h3>
                      <p className="text-[9px] md:text-[10px] text-gray-400 uppercase font-medium">
                        {item.category || "Bathing Suits"}
                      </p>
                      {/* Price - Mobile Only */}
                      <span className="md:hidden text-xs font-bold mt-1">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Price - Desktop Only */}
                  <div className="hidden md:block col-span-2 text-center text-xs font-bold text-gray-500">
                    ${item.price}
                  </div>

                  {/* Quantity Controls */}
                  <div className="col-span-2 flex justify-between md:justify-center items-center px-2 md:px-0">
                    <span className="md:hidden text-[10px] font-bold uppercase text-gray-400">
                      Quantity
                    </span>
                    <div className="inline-flex items-center border border-gray-200 p-2 gap-4 bg-white">
                      <RiSubtractLine
                        className="cursor-pointer"
                        onClick={
                          () => updateQty(index, Math.max(1, item.qty - 1)) // 4. Changed item.id to index
                        }
                      />
                      <span className="text-xs font-bold w-4 text-center">
                        {item.qty}
                      </span>
                      <RiAddLine
                        className="cursor-pointer"
                        onClick={() => updateQty(index, item.qty + 1)} // 5. Changed item.id to index
                      />
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-2 flex justify-between md:justify-end items-center px-2 md:px-0">
                    <span className="md:hidden text-[10px] font-bold uppercase text-gray-400">
                      Total
                    </span>
                    <span className="text-xs md:text-sm font-black md:font-bold">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Table Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-100 gap-4">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors w-full md:w-auto justify-center">
              <RiRefreshLine size={14} /> Update Cart
            </button>
            <div className="md:text-right w-full md:w-auto flex justify-between md:block items-center border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
              <span className="text-[10px] font-bold uppercase text-gray-400 mr-4">
                Sub-total
              </span>
              <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Discount Section */}
          <div className="mt-8 md:mt-12 bg-gray-50 p-6 md:p-0 md:bg-transparent">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              Got a Discount Code?
            </h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter Your Code"
                className="border border-gray-200 p-4 text-xs outline-none flex-1 md:max-w-xs focus:border-black transition-all bg-white"
              />
              <button className="bg-black text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Right: Cart Total Sidebar */}
        <div className="lg:sticky lg:top-32 h-fit space-y-8">
          <div className="bg-gray-50/50 p-6 md:p-8 space-y-8 border border-gray-100">
            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
              <span className="text-gray-500">Sub-total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                Shipping
              </span>
              <div className="space-y-3 text-[11px] font-bold uppercase">
                <div className="flex justify-between items-center text-gray-500">
                  <label className="flex items-center gap-2 cursor-pointer">
                    Flat rate: $10{" "}
                    <span className="cursor-help text-gray-300">ⓘ</span>
                  </label>
                  <input
                    type="radio"
                    name="shipping"
                    className="accent-black w-4 h-4"
                  />
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <label className="cursor-pointer">Free shipping</label>
                  <input
                    type="radio"
                    name="shipping"
                    defaultChecked
                    className="accent-black w-4 h-4"
                  />
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <label className="cursor-pointer">Local pickup</label>
                  <input
                    type="radio"
                    name="shipping"
                    className="accent-black w-4 h-4"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-6">
              <span className="tracking-tighter uppercase">Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="block w-full">
              <button className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl shadow-black/5">
                Proceed to Checkout
              </button>
            </Link>
          </div>

          <p className="text-[9px] text-gray-400 uppercase tracking-widest text-center px-4">
            Secure checkout powered by Stripe. All major credit cards accepted.
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-20 md:mt-32">
        <h2 className="text-sm md:text-lg font-bold tracking-widest uppercase mb-8 border-b border-gray-100 pb-4">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
