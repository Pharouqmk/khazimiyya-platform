
import Image from "next/image";
import Header from "./components/Header";
import ProductCatalog from "./components/ProductCatalog";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f1] text-[#243b2b]">
 {/* Header */}
<Header />

      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#203b2b] text-white">
        <Image
          src="/images/Rustic%20Herbal%20Remedies%20Still%20Life.png"
          alt="A natural arrangement of herbal ingredients and botanical remedies"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#172d20]/95 via-[#203b2b]/80 to-[#203b2b]/35" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#d7c69b]">
              Welcome to Khazimiyya
            </p>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl md:text-7xl">
              A thoughtful approach to herbal products.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#e2e7df] md:text-lg">
              Discover Khazimiyya Herbal Medicine, explore our product range
              and get helpful information directly from our team.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#offerings"
                className="rounded-full bg-[#d7c69b] px-7 py-4 text-sm font-semibold text-[#203b2b] transition hover:bg-[#e7d9b6]"
              >
                Explore our products
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover our story
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/20 bg-[#203b2b]/60 px-10 py-7 backdrop-blur-sm md:block">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d7c69b]">
            Khazimiyya
          </p>
          <p className="mt-2 text-sm text-white/80">
            Rooted in nature
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7042]">
              About Khazimiyya
            </p>

            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Bringing product information closer to our customers.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#687267]">
              Khazimiyya Herbal Medicine is committed to helping customers
              learn about its herbal products and access useful product
              information. Our website provides a convenient place to explore
              the business, discover available products and make enquiries.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#294633] transition hover:text-[#8b7042]"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
<ProductCatalog />


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#294633] px-8 py-20 text-center text-white md:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7c69b]">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
              Have a question about our products?
            </h2>

            <p className="mt-5 leading-7 text-[#d9e0d6]">
              Contact Khazimiyya for product information, availability and
              general enquiries.
            </p>

            <p className="mt-8 text-sm text-[#d7c69b]">
              Contact details will be added after confirmation with the
              business owner.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e6e4d9] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#687267] md:flex-row">
          <p>© 2026 Khazimiyya Herbal Medicine.</p>
          <p>
            Product information is not a substitute for professional medical
            advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
