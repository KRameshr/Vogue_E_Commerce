import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <div className="pt-40 pb-40 text-center max-w-2xl mx-auto px-6">
      <p className="font-body text-xs tracking-ultra uppercase text-mist mb-4">
        NovaShop
      </p>
      <h1 className="font-display text-5xl font-light mb-6">
        Our <em>Collections</em>
      </h1>
      <p className="font-body text-sm text-mist mb-10">
        Curated collections coming soon. In the meantime, explore our full shop.
      </p>
      <Link
        to="/shop"
        className="inline-block bg-noir text-chalk font-body text-xs tracking-widest uppercase px-8 py-4 hover:bg-noir/80 transition-colors"
      >
        Shop All Pieces
      </Link>
    </div>
  );
}
