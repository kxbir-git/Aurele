import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, Grid3X3, List, X } from "lucide-react";

type SortOption = "newest" | "price-asc" | "price-desc" | "popular";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [sort, setSort] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [gridView, setGridView] = useState(true);
  const [search, setSearch] = useState("");

  const allColors = useMemo(() => [...new Set(products.flatMap((p) => p.colors))], []);

  const filtered = useMemo(() => {
    let result = products;
    if (categoryParam !== "all") result = result.filter((p) => p.category === categoryParam);
    if (selectedColors.length > 0) result = result.filter((p) => p.colors.some((c) => selectedColors.includes(c)));
    if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

    switch (sort) {
      case "price-asc": return [...result].sort((a, b) => a.price - b.price);
      case "price-desc": return [...result].sort((a, b) => b.price - a.price);
      case "popular": return [...result].sort((a, b) => b.reviews - a.reviews);
      default: return result;
    }
  }, [categoryParam, sort, selectedColors, search]);

  const setCategory = (cat: string) => {
    if (cat === "all") searchParams.delete("category");
    else searchParams.set("category", cat);
    setSearchParams(searchParams);
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]);
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="heading-display text-4xl font-semibold mb-2">Shop</h1>
      <p className="text-muted-foreground text-sm mb-8">{filtered.length} products</p>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border px-3 py-2 text-sm bg-background focus:outline-none focus:border-foreground transition-colors w-full sm:w-64"
        />
        <div className="flex items-center gap-2 flex-wrap">
          {["all", "women", "men", "accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors ${
                categoryParam === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={() => setShowFilters(!showFilters)} className="p-2 border border-border hover:bg-secondary transition-colors" aria-label="Filters">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
          <button onClick={() => setGridView(true)} className={`p-2 border border-border transition-colors ${gridView ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`} aria-label="Grid view">
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button onClick={() => setGridView(false)} className={`p-2 border border-border transition-colors ${!gridView ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`} aria-label="List view">
            <List className="h-4 w-4" />
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="border border-border px-3 py-2 text-xs bg-background focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="border border-border p-4 mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">Filter by Color</h3>
            {selectedColors.length > 0 && (
              <button onClick={() => setSelectedColors([])} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allColors.map((color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className={`px-3 py-1 text-xs border transition-colors ${
                  selectedColors.includes(color) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg mb-2">No products found</p>
          <p className="text-sm">Try adjusting your filters or search term.</p>
        </div>
      ) : (
        <div className={gridView ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" : "flex flex-col gap-4"}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Shop;
