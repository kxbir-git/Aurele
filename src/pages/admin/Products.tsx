import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products as initialProducts, Product } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [productList, setProductList] = useState<Product[]>(initialProducts);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
    toast({ title: "Product deleted" });
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const price = Number(form.get("price"));
    const category = form.get("category") as Product["category"];

    if (editProduct) {
      setProductList((prev) =>
        prev.map((p) => (p.id === editProduct.id ? { ...p, name, price, category } : p))
      );
      toast({ title: "Product updated" });
    } else {
      const newProduct: Product = {
        id: String(Date.now()),
        name,
        price,
        category,
        image: initialProducts[0].image,
        sizes: ["S", "M", "L"],
        colors: ["Black"],
        description: "New product",
        rating: 0,
        reviews: 0,
      };
      setProductList((prev) => [...prev, newProduct]);
      toast({ title: "Product added" });
    }
    setDialogOpen(false);
    setEditProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="heading-display text-2xl md:text-3xl font-semibold">Products</h1>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditProduct(null); }}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Product</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editProduct ? "Edit Product" : "Add Product"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4">
              <Input name="name" placeholder="Product name" defaultValue={editProduct?.name ?? ""} required />
              <Input name="price" type="number" placeholder="Price" defaultValue={editProduct?.price ?? ""} required />
              <select
                name="category"
                defaultValue={editProduct?.category ?? "men"}
                className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="accessories">Accessories</option>
              </select>
              <Button type="submit" className="w-full">{editProduct ? "Update" : "Add"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{productList.length} Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Product</th>
                  <th className="pb-3 font-medium text-muted-foreground">Category</th>
                  <th className="pb-3 font-medium text-muted-foreground">Price</th>
                  <th className="pb-3 font-medium text-muted-foreground">Rating</th>
                  <th className="pb-3 font-medium text-muted-foreground text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="h-10 w-10 rounded object-cover" />
                        <span className="font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3 capitalize text-muted-foreground">{p.category}</td>
                    <td className="py-3">${p.price}</td>
                    <td className="py-3 text-muted-foreground">{p.rating} ⭐</td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => { setEditProduct(p); setDialogOpen(true); }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;
