const offerings = [
  {
    number: "01",
    title: "Herbal Products",
    description:
      "Explore the range of herbal products available from Khazimiyya.",
  },
  {
    number: "02",
    title: "Product Information",
    description:
      "Get clear information about our products, ingredients and availability.",
  },
  {
    number: "03",
    title: "Customer Enquiries",
    description:
      "Speak with our team about products, orders and general enquiries.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f1] text-[#243b2b]">
      <header className="border-b border-[#e6e4d9] bg-[#faf8f1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-xl font-bold tracking-tight">
            KHAZIMIYYA
            <span className="block text-[10px] font-medium tracking-[0.3em] text-[#78856c]">
              HERBAL MEDICINE
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-[#8b7042]">About</a>
            <a href="#offerings" className="transition hover:text-[#8b7042]">Our Products</a>
            <a href="#contact" className="transition hover:text-[#8b7042]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#294633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c6048]"
          >
            Make an enquiry
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#203b2b] text-[#faf8f1]">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32 lg:px-10">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#c8b98d]">
              Welcome to Khazimiyya
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
              A thoughtful approach to herbal products.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#d9e0d6]">
              Discover Khazimiyya Herbal Medicine, learn about our products
              and contact our team for product information and enquiries.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#offerings"
                className="rounded-full bg-[#d7c69b] px-7 py-4 text-sm font-semibold text-[#203b2b] transition hover:bg-[#e7d9b6]"
              >
                Explore our products
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discover our story
              </a>
            </div>
          </div>

          <div className="flex min-h-[300px] items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.05] p-10">
            <div className="max-w-sm text-center">
              <span className="text-7xl" aria-hidden="true">🌿</span>
              <p className="mt-6 text-2xl font-medium">Rooted in nature</p>
              <p className="mt-3 text-sm leading-7 text-[#d9e0d6]">
                A welcoming place to discover our herbal product range and
                learn more about Khazimiyya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7042]">
              About Khazimiyya
            </p>
            <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
              Bringing product information closer to our customers.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#687267]">
              Khazimiyya Herbal Medicine is committed to helping customers
              learn about its herbal products and access useful product
              information. This website is being developed as a convenient
              place to explore the business and make enquiries.
            </p>
          </div>
        </div>
      </section>

      <section id="offerings" className="bg-[#f0eee4] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7042]">
              Explore Khazimiyya
            </p>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              How we can help
            </h2>
            <p className="mt-4 leading-7 text-[#687267]">
              Find out more about our products and how to get in touch with us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offerings.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#e1dfd2] bg-[#faf8f1] p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold tracking-widest text-[#a18a5c]">
                  {item.number}
                </p>
                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#687267]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] bg-[#294633] px-8 py-16 text-center text-white md:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7c69b]">
            Get in touch
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold md:text-4xl">
            Have a question about our products?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d9e0d6]">
            Contact Khazimiyya for product information, availability and
            general enquiries.
          </p>
          <p className="mt-8 text-sm text-[#d7c69b]">
            Contact details will be added after confirmation with the business owner.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e6e4d9] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#687267] md:flex-row">
          <p>© 2026 Khazimiyya Herbal Medicine.</p>
          <p>Product information is not a substitute for professional medical advice.</p>
        </div>
      </footer>
    </main>
  );
}
