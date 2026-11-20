import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductCatalog() {
  const publishedProducts = products.filter(
    (product) => product.status === "published"
  );

  return (
    <section id="offerings" className="bg-[#f0eee4] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#687267]">
            Our Products
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#243b2b] md:text-4xl">
            Explore our products
          </h2>

          <p className="mt-5 text-base leading-8 text-[#687267]">
            Discover the products available from Khazimiyya Herbal Medicine.
            Product information will be updated as details are confirmed.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}