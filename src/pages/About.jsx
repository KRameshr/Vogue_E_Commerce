import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  // Ensure the page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Header & Mission Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <nav className="flex justify-center text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-12">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">About Us</span>
        </nav>

        <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
          Founded With a Mission
        </h1>
        <p className="text-gray-400 text-sm italic mb-12">
          Simple, stylish and locally-crafted apparel since 1994
        </p>

        <div className="max-w-6xl mx-auto mb-16">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400"
            alt="Team Mission"
            className="w-full h-auto"
          />
        </div>

        <p className="max-w-3xl mx-auto text-black font-medium leading-relaxed text-lg">
          Founded in 1984 by designer Chantelle West, we’ve always believed in
          the power of locally made goods. The quality of the craftsmanship and
          the local artisans we employ are what make Luxette our mission in
          life.
        </p>
      </section>

      {/* 2. Meet Our Team Section */}
      <section className="py-20 border-t border-gray-50">
        <h2 className="text-2xl font-bold text-center mb-16 tracking-tight">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square overflow-hidden mb-6 bg-gray-100">
                <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600&img=${i}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Team Member"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                Chantelle West
              </h3>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 font-bold">
                CEO & Founder
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Decorative Leaf Divider Pattern */}
      <div
        className="w-full h-48 md:h-64 my-12 bg-fixed bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600')`,
          backgroundSize: "cover",
          mixBlendMode: "multiply",
          opacity: "0.8",
        }}
      >
        {/* This mimics the lush botanical divider in Design 06 */}
      </div>

      {/* 4. Visit Our Store Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Visit Our Store
        </h2>

        <div className="max-w-[1400px] mx-auto px-6">
          {/* Horizontal Scroll Wrapper */}
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x">
            {[
              {
                id: 1,
                name: "Under Armour Training stretch woven half zip jacket",
                price: "$200",
                img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600",
              },
              {
                id: 2,
                name: "Classic Cotton Tee in White",
                price: "$200",
                img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
              },
              {
                id: 3,
                name: "Swim Jammers Endurance Long Racing Training Swimsuit",
                price: "$200",
                img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600",
              },
              {
                id: 4,
                name: "Funny Shorts with Mesh Lining Swimwear Bathing Suits",
                price: "$200",
                img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center px-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] leading-relaxed mb-2 h-8">
                    {product.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
