
export type Product = {
  id: string;
  name: string;
  description: string;
  priceNGN: number | null;
  image: string;
  status: "published" | "draft";
};

export const products: Product[] = [
  {
    id: "maganin-sanyi",
    name: "Maganin Sanyi",
    description:
      "Product information and description will be updated after confirmation by Khazimiyya.",
    priceNGN: 7500,
    image: "/images/products/maganin-sanyi.jpg",
    status: "published",
  },
  {
    id: "product-02",
    name: "Product details pending",
    description: "Product information awaiting confirmation.",
    priceNGN: null,
    image: "/images/products/product-02.jpg",
    status: "draft",
  },
];
