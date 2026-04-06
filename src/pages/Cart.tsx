import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h1 className="heading-display text-3xl font-semibold mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Discover something you'll love.</p>
        <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="heading-display text-3xl font-semibold mb-8">Shopping Cart ({totalItems})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 border-b border-border pb-6">
              <Link to={`/product/${item.product.id}`} className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden">
                <img src={item.product.image} alt={item.product.name} loading="lazy" className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium">{item.product.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Size: {item.size} · Color: {item.color}</p>
                  </div>
                  <button onClick={() => removeItem(item.product.id, item.size, item.color)} aria-label="Remove" className="text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-border">
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-1.5 hover:bg-secondary transition-colors" aria-label="Decrease">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-1.5 hover:bg-secondary transition-colors" aria-label="Increase">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="text-sm font-medium">${item.product.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-secondary p-6 sticky top-24">
            <h2 className="text-sm font-medium tracking-wide uppercase mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-medium mb-6">
              <span>Total</span><span>${totalPrice}</span>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
