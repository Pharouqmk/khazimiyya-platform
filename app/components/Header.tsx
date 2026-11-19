
"use client";

import { useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Our Products", href: "#offerings" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-[#e6e4d9] bg-[#faf8f1]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          KHAZIMIYYA
          <span className="mt-1 block text-[10px] font-medium tracking-[0.3em] text-[#78856c]">
            HERBAL MEDICINE
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-sm md:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#a18a5c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop enquiry button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#294633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c6048] md:inline-flex"
        >
          Make an enquiry
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[#e6e4d9] p-2 text-[#243b2b] transition hover:bg-[#eeece3] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#e6e4d9] bg-[#faf8f1] px-6 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition hover:text-[#a18a5c]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-[#294633] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c6048]"
              onClick={() => setIsMenuOpen(false)}
            >
              Make an enquiry
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
