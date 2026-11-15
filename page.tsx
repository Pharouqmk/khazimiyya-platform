const products = [
  {
    number: "01",
    name: "Product information",
    description:
      "Clear, responsible information about available products, ingredients and how to make an enquiry.",
    tag: "Learn",
  },
  {
    number: "02",
    name: "Availability enquiries",
    description:
      "Contact the Khazimiyya team to ask which products are currently available and confirm details.",
    tag: "Ask",
  },
  {
    number: "03",
    name: "Customer support",
    description:
      "A direct point of contact for general questions, feedback and customer assistance.",
    tag: "Connect",
  },
];

function WhatsAppLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const href = number
    ? `https://wa.me/${number}?text=${encodeURIComponent(
        "Hello Khazimiyya, I would like to make an enquiry."
      )}`
    : "#contact";

  return (
    <a
      className={className}
      href={href}
      target={number ? "_blank" : undefined}
      rel={number ? "noreferrer" : undefined}
      aria-label="Contact Khazimiyya on WhatsApp"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Khazimiyya home">
          <span className="brand-mark">K</span>
          <span className="brand-name">
            KHAZIMIYYA
            <small>HERBAL MEDICINE</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Our approach</a>
          <a href="#offerings">What we offer</a>
          <a href="#contact">Contact</a>
        </nav>
        <WhatsAppLink className="header-cta">Make an enquiry <span>↗</span></WhatsAppLink>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="eyebrow"><span /> NATURE · CARE · INFORMATION</p>
          <h1>A more thoughtful way to explore <em>herbal products.</em></h1>
          <p className="hero-copy">
            Discover Khazimiyya Herbal Medicine. Explore product information
            and speak with our team when you need assistance.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#offerings">Explore our approach <span>↓</span></a>
            <a className="text-link light-link" href="#contact">Talk to our team <span>↗</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            Thoughtful information. Personal customer support.
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract botanical illustration" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="leaf leaf-one" />
          <div className="leaf leaf-two" />
          <div className="leaf leaf-three" />
          <div className="art-caption"><span>01 / 03</span><span>ROOTED IN NATURE</span></div>
        </div>
        <div className="hero-index">K — 2026</div>
      </section>

      <section className="intro section-wrap" id="story">
        <div className="section-kicker">01 — OUR APPROACH</div>
        <div className="intro-content">
          <h2>Rooted in nature.<br /><em>Guided by care.</em></h2>
          <div className="intro-description">
            <p>
              At Khazimiyya, we believe customers deserve clear information
              and a helpful experience when exploring herbal products.
            </p>
            <p>
              Our focus is to make it easier to learn about our offerings,
              ask questions and connect with our team.
            </p>
            <a className="text-link" href="#contact">Get in touch <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="offerings" id="offerings">
        <div className="section-wrap">
          <div className="offerings-heading">
            <div>
              <div className="section-kicker">02 — HOW WE CAN HELP</div>
              <h2>Information that<br /><em>puts you first.</em></h2>
            </div>
            <p>Simple ways to learn more and reach the people behind Khazimiyya.</p>
          </div>
          <div className="offering-grid">
            {products.map((item) => (
              <article className="offering-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><span>{item.tag}</span></div>
                <div className="card-symbol" aria-hidden="true">{item.number === "01" ? "✳" : item.number === "02" ? "↗" : "＋"}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href="#contact" aria-label={`Enquire about ${item.name}`}>Make an enquiry <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel">
          <div className="section-kicker">03 — START A CONVERSATION</div>
          <div className="contact-content">
            <div>
              <h2>Have a question?<br /><em>We're here to help.</em></h2>
              <p>Contact our team for product information, availability enquiries or general assistance.</p>
            </div>
            <div className="contact-action">
              <WhatsAppLink className="button button-light">Contact Khazimiyya <span>↗</span></WhatsAppLink>
              {!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <small>WhatsApp contact will be activated once the business number is configured.</small>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">K</span>
          <span className="brand-name">KHAZIMIYYA<small>HERBAL MEDICINE</small></span>
        </a>
        <p>Clear information. Considerate service.</p>
        <span className="copyright">© 2026 KHAZIMIYYA</span>
        <p className="disclaimer">
          Information on this website is for general product information only.
          It is not medical advice, diagnosis or a substitute for care from a
          qualified healthcare professional. Product claims and details should
          be reviewed and approved before publication.
        </p>
      </footer>
    </main>
  );
}
