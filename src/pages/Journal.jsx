import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/products"; // Using your central data

const JournalPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-4">Journal</h1>
        <div className="flex justify-center text-[10px] tracking-widest uppercase text-gray-400">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">Journal</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link to={`/journal/${post.id}`} key={post.id} className="group">
            <div className="aspect-[4/3] overflow-hidden mb-6">
              <img
                src={post.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">
                {post.date}
              </p>
              <h2 className="text-lg font-bold text-black leading-tight">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-10 py-3 border border-gray-200 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Button
        </button>
      </div>
    </div>
  );
};

export default JournalPage;
