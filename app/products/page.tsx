import { Metadata } from "next";
import { ProductsPageContent } from "@/components/products/products-page-content";

export const metadata: Metadata = {
  title: "Products | P & L Above Heights Ltd",
  description:
    "Explore our premium cement & building materials, steel products, quarry items, safety equipment, engineering tools, and welding consumables & equipment.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
