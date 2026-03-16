import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-white pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto border border-gray-100 p-10 shadow-sm text-center">
        <h1 className="text-2xl font-bold mb-8 uppercase tracking-widest">
          Register
        </h1>

        {/* Social Options */}
        <div className="space-y-3 mb-6">
          <button className="w-full bg-[#3b5998] text-white py-3 text-[10px] font-bold uppercase tracking-widest">
            Continue with Facebook
          </button>
          <button className="w-full border border-gray-200 text-gray-600 py-3 text-[10px] font-bold uppercase tracking-widest">
            Continue with Google
          </button>
        </div>

        <div className="text-[10px] font-bold mb-6 text-gray-400">OR</div>

        {/* Registration Form */}
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>

          <label className="flex items-start text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-tight">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              I have read and accept to{" "}
              <Link
                to="/terms"
                className="text-black border-b border-black ml-1"
              >
                Our Term and Privacy Policy
              </Link>
            </span>
          </label>

          <button className="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors mt-4">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
