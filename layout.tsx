import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khazimiyya Herbal Medicine | Product Information & Enquiries",
  description:
    "Explore Khazimiyya Herbal Medicine, learn about our products and contact our team for product information and enquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
