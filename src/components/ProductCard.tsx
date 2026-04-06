import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Heart } from "lucide-react";

const badgeStyles = {
  new: "bg-primary text-primary-foreground",
  sale: "bg-destructive text-destructive-foreground",
  bestseller: "bg-accent text-accent-foreground",
};

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="group block">
    <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-3">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={400}
        height={533}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {product.badge && (
        <span className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-medium tracking-wider uppercase ${badgeStyles[product.badge]}`}>
          {product.badge}
        </span>
      )}
      <button
        className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => { e.preventDefault(); }}
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4" />
      </button>
    </div>
    <div className="space-y-1">
      <h3 className="text-sm font-medium">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
