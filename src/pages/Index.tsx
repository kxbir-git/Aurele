import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-collection.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const reviews = [
  { name: "Sarah M.", text: "The quality is unmatched. Every piece feels like it was made just for me.", rating: 5 },
  { name: "James K.", text: "Finally, a brand that understands minimalism without sacrificing warmth.", rating: 5 },
  { name: "Elena R.", text: "The cashmere coat is the most beautiful thing I own. Worth every penny.", rating: 5 },
];

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src={heroImage} alt="Spring/Summer 2026 Collection" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg animate-fade-up">
            <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-3 font-body">Spring / Summer 2026</p>
            <h1 className="text-primary-foreground text-5xl md:text-7xl heading-display font-semibold leading-[1.1] mb-6">
              The Art of Less
            </h1>
            <p className="text-primary-foreground/80 text-base mb-8 font-body leading-relaxed">
              Discover our new collection — where every piece tells a story of refined simplicity.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Explore Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-center heading-display text-3xl md:text-4xl font-semibold mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Women", img: categoryWomen, cat: "women" },
            { name: "Men", img: categoryMen, cat: "men" },
            { name: "Accessories", img: categoryAccessories, cat: "accessories" },
          ].map((c) => (
            <Link key={c.cat} to={`/shop?category=${c.cat}`} className="group relative overflow-hidden aspect-[4/3]">
              <img src={c.img} alt={c.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-primary-foreground text-xl font-medium tracking-wider uppercase">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="heading-display text-3xl md:text-4xl font-semibold">Featured</h2>
          <Link to="/shop" className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center heading-display text-3xl md:text-4xl font-semibold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-background p-8 hover-lift" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">"{r.text}"</p>
                <p className="text-sm font-medium">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="heading-display text-3xl md:text-4xl font-semibold mb-4">Stay in the Loop</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Be the first to know about new arrivals, exclusive collections, and special offers.</p>
        <div className="flex max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors" />
          <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
};

export default Index;
