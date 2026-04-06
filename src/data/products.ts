export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "men" | "women" | "accessories";
  image: string;
  images?: string[];
  sizes: string[];
  colors: string[];
  description: string;
  rating: number;
  reviews: number;
  badge?: "new" | "sale" | "bestseller";
}

import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import featured4 from "@/assets/featured-4.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Ribbed Wool Sweater",
    price: 129,
    category: "men",
    image: featured1,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Grey"],
    description: "A timeless ribbed wool sweater crafted from premium merino wool. Soft, warm, and effortlessly elegant for any occasion.",
    rating: 4.8,
    reviews: 124,
    badge: "bestseller",
  },
  {
    id: "2",
    name: "V-Neck Midi Dress",
    price: 189,
    originalPrice: 249,
    category: "women",
    image: featured2,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy"],
    description: "An elegant V-neck midi dress with a flattering silhouette. Perfect for evening events or refined daytime looks.",
    rating: 4.9,
    reviews: 89,
    badge: "sale",
  },
  {
    id: "3",
    name: "Linen Button-Down Shirt",
    price: 98,
    category: "men",
    image: featured3,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Cream", "Sky Blue"],
    description: "A relaxed-fit linen shirt designed for warm days. Breathable fabric with a refined casual aesthetic.",
    rating: 4.7,
    reviews: 203,
    badge: "new",
  },
  {
    id: "4",
    name: "Leather Accessories Set",
    price: 245,
    category: "accessories",
    image: featured4,
    sizes: ["One Size"],
    colors: ["Brown", "Black"],
    description: "A curated set of premium leather accessories including a belt, wallet, and watch strap. Handcrafted with Italian leather.",
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "5",
    name: "Cashmere Blend Coat",
    price: 395,
    originalPrice: 495,
    category: "women",
    image: featured1,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Black", "Grey"],
    description: "A luxurious cashmere blend coat with a relaxed oversized fit. The epitome of understated elegance.",
    rating: 4.9,
    reviews: 156,
    badge: "bestseller",
  },
  {
    id: "6",
    name: "Tailored Wool Trousers",
    price: 165,
    category: "men",
    image: featured3,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Charcoal", "Navy", "Khaki"],
    description: "Impeccably tailored wool trousers with a modern slim fit. A wardrobe essential for the discerning gentleman.",
    rating: 4.5,
    reviews: 92,
  },
  {
    id: "7",
    name: "Silk Camisole Top",
    price: 110,
    category: "women",
    image: featured2,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Black", "Blush"],
    description: "A delicate silk camisole with adjustable straps and a smooth drape. Layer it or wear it alone for effortless sophistication.",
    rating: 4.7,
    reviews: 145,
    badge: "new",
  },
  {
    id: "8",
    name: "Leather Crossbody Bag",
    price: 320,
    category: "accessories",
    image: featured4,
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Burgundy"],
    description: "A structured crossbody bag in full-grain leather with gold-tone hardware. Spacious yet compact for everyday elegance.",
    rating: 4.8,
    reviews: 78,
    badge: "bestseller",
  },
];
