import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-display text-4xl font-semibold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-muted-foreground mb-12">We'd love to hear from you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
              maxLength={255}
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
              maxLength={1000}
            />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Afroz Appartment LKO.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">Kxbir_o@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 (+91) 7376134786</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
