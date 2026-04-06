import heroImage from "@/assets/hero-collection.jpg";

const About = () => (
  <main>
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img src={heroImage} alt="About AURÈLE" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
        <h1 className="text-primary-foreground heading-display text-4xl md:text-6xl font-semibold">Our Story</h1>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="space-y-8 text-center">
        <div>
          <h2 className="heading-display text-2xl font-semibold mb-4">The Beginning</h2>
          <p className="text-muted-foreground leading-relaxed">
            AURÈLE was born from a simple belief: that clothing should be timeless, not trendy. Founded in 2020, we set out to create pieces that transcend seasons — garments you reach for again and again, each time discovering something new to love.
          </p>
        </div>
        <div>
          <h2 className="heading-display text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe in the power of less. Every piece in our collection is designed with intention, crafted from the finest materials, and made to last. We work with artisans who share our commitment to quality and sustainability.
          </p>
        </div>
        <div>
          <h2 className="heading-display text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To redefine modern luxury through mindful design. We envision a world where quality trumps quantity, where every wardrobe tells a story of conscious choices and enduring style.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
