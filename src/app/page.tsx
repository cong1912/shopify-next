import { getProducts } from "@/lib/shopify";
import type { Product } from "@/lib/shopify/types";
import Image from "next/image";

export default async function Page() {
  const products = await getProducts({});
  console.log('products:', products);

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col items-center bg-white shadow hover:shadow-lg transition"
            >
             
              <h2 className="text-lg font-semibold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-gold-700 font-bold mb-2">
                {product.priceRange?.minVariantPrice?.amount}
                {product.priceRange?.minVariantPrice?.currencyCode
                  ? ` ${product.priceRange.minVariantPrice.currencyCode}`
                  : ""}
              </p>
              <a
                href={`/products/${product.handle}`}
                className="mt-auto inline-block bg-navy-950 text-gold-500 px-4 py-2 rounded hover:bg-navy-900 transition"
              >
                View Details
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </main>
  );
}
