import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/products"; // Ensure this contains your new posts

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <div className="pt-40 text-center">Post not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Header Section - Matches Screenshot 05 */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">
            {post.date}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            {post.content}
          </p>

          {/* Featured Image inside content */}
          <div className="my-12">
            <img
              src={post.image}
              className="w-full h-auto"
              alt="featured content"
            />
          </div>

          <h2 className="text-2xl font-bold text-black mt-12 mb-6">
            Sometimes including the exterior
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Interior design is the art and science of enhancing the interiors,
            sometimes including the exterior, of a space or building, to achieve
            a healthier and more aesthetically pleasing environment for the end
            user.
          </p>

          {/* Blockquote Section - Styled from Design 05 */}
          <div className="my-16 border-y border-gray-100 py-12 px-8 italic">
            <h3 className="text-2xl md:text-3xl font-medium text-black leading-snug">
              "Interior design is the art and science of enhancing the
              interiors, sometimes including the exterior, of a space or
              building."
            </h3>
            <cite className="block mt-6 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400 not-italic">
              — {post.author}
            </cite>
          </div>

          {/* Post Meta: Tags and Share */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                Tags:
              </span>
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black">
                Share:
              </span>
              {/* Replace with your social icons */}
              <div className="flex gap-4 text-gray-400">
                <span className="cursor-pointer hover:text-black">FB</span>
                <span className="cursor-pointer hover:text-black">TW</span>
                <span className="cursor-pointer hover:text-black">PIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section - Matches Design 05 */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <h3 className="text-xl font-bold text-black mb-12 uppercase tracking-widest">
            2 Comments
          </h3>

          <div className="space-y-10">
            {/* Comment 1 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img src="https://i.pravatar.cc/150?u=josh" alt="avatar" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Great services!</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  by Josh on 13 May, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <form className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-200 py-3 outline-none focus:border-black transition-colors md:col-span-2 h-32 resize-none"
            />
            <button className="bg-black text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors self-start">
              Post Comment
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
