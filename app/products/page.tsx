import { Metadata } from "next";
import { ProductsPageContent } from "@/components/products/products-page-content";

export const metadata: Metadata = {
  title: "Products | P & L Above Heights Ltd",
  description:
    "Explore our premium construction materials, steel products, quarry items, safety equipment, engineering tools, and welding solutions.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
