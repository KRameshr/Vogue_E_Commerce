import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/products";

const Journal = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-black">
          From the Journal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          /* CHANGE: Link now goes to the list page (/journal) instead of /journal/:id */
          <Link to="/journal" key={post.id} className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="text-center flex flex-col items-center">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                {post.date}
              </span>
              <h3 className="text-lg font-bold leading-snug text-black max-w-[300px]">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Journal;
