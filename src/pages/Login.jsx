import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto border border-gray-100 p-10 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">
          Login
        </h1>

        {/* Social Logins */}
        <div className="space-y-3 mb-6">
          <button className="w-full bg-[#3b5998] text-white py-3 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center">
            Continue with Facebook
          </button>
          <button className="w-full border border-gray-200 text-gray-600 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center">
            Continue with Google
          </button>
        </div>

        <div className="text-center text-[10px] font-bold mb-6 text-gray-400">
          OR
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="text-left">
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>
          <div className="text-left">
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-100 bg-gray-50/50 p-4 outline-none focus:border-black text-sm"
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
            Login
          </button>
        </form>

        <p className="text-center text-[10px] font-bold uppercase tracking-widest mt-8 text-gray-400">
          New here?{" "}
          <Link
            to="/register"
            className="text-black border-b border-black pb-1 ml-1"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
