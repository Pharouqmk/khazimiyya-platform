
import Image from "next/image";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e1dfd2] bg-[#faf8f1] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-[#f0eee4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#243b2b]">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#687267]">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-[#294633]">
            {product.priceNGN === null
              ? "Price to be confirmed"
              : new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  maximumFractionDigits: 0,
                }).format(product.priceNGN)}
          </p>
        </div>
      </div>
    </article>
  );
}
