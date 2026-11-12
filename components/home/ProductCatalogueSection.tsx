"use client";

import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types/catalogue";

type ProductCatalogueSectionProps = {
  filteredProducts: Product[];
  compareProducts: number[];
  onToggleCompare: (id: number) => void;
  onClearCompare: () => void;
  onClearSearch: () => void;
};

export default function ProductCatalogueSection({
  filteredProducts,
  compareProducts,
  onToggleCompare,
  onClearCompare,
  onClearSearch,
}: ProductCatalogueSectionProps) {
  return (
    <section id="products" className="scroll-mt-10 bg-[#F4F2ED]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Most selling products.
            </h2>
          </div>

          <Button
            href="#contact"
            variant="tertiary"
            color="dark"
            size="md"
            icon={<ArrowRight className="h-4 w-4 text-[#E46A2A]" />}
            iconPosition="right"
          >
            Request technical quote
          </Button>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedForCompare={compareProducts.includes(product.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-[#25282A]">
              No products match your search.
            </p>
            <button
              onClick={onClearSearch}
              className="mt-4 text-sm font-medium text-[#E46A2A] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Floating compare bar */}
        {compareProducts.length > 0 && (
          <div className="fixed bottom-6 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 items-center justify-between bg-[#25282A] px-5 py-4 text-white shadow-xl">
            <div>
              <p className="text-sm font-medium">
                <span className="text-[#E46A2A]">{compareProducts.length}</span>{" "}
                product{compareProducts.length > 1 ? "s" : ""} selected for
                comparison
              </p>
              <p className="mt-1 text-xs text-[#747773]">
                Comparing technical specifications.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                color="orange"
                size="sm"
              >
                Compare now
              </Button>
              <Button
                variant="tertiary"
                color="white"
                size="sm"
                onClick={onClearCompare}
              >
                Clear
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
