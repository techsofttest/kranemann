"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const brandLogos = [
  { id: 1, name: "Brand 1", src: "/products/brands/brand1.png" },
  { id: 2, name: "Brand 2", src: "/products/brands/brand2.png" },
  { id: 3, name: "Brand 3", src: "/products/brands/brand3.png" },
  { id: 4, name: "Brand 4", src: "/products/brands/brand4.png" },
  { id: 5, name: "Brand 5", src: "/products/brands/brand5.png" },
  { id: 6, name: "Brand 6", src: "/products/brands/brand6.png" },
  { id: 7, name: "Brand 7", src: "/products/brands/brand7.png" },
  { id: 8, name: "Brand 8", src: "/products/brands/brand8.png" },
  { id: 9, name: "Brand 9", src: "/products/brands/brand9.png" },
  { id: 10, name: "Brand 10", src: "/products/brands/brand10.png" },
  { id: 11, name: "Brand 11", src: "/products/brands/brand11.png" },
  { id: 12, name: "Brand 12", src: "/products/brands/brand12.png" },
  { id: 13, name: "Brand 13", src: "/products/brands/brand13.png" },
  { id: 14, name: "Brand 14", src: "/products/brands/brand14.png" },
  { id: 15, name: "Brand 15", src: "/products/brands/brand15.png" },
  { id: 16, name: "Brand 16", src: "/products/brands/brand16.png" },
  { id: 17, name: "Brand 17", src: "/products/brands/brand17.png" },
];

type BrandsSectionProps = {
  selectedBrand?: string | null;
  onSelectBrand?: (brandName: string) => void;
};

export default function BrandsSection({
  selectedBrand,
  onSelectBrand,
}: BrandsSectionProps) {
  const handleBrandClick = (brandName: string) => {
    if (onSelectBrand) {
      onSelectBrand(brandName);
    }
    const target = document.getElementById("products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Select brand to view products & parts.
            </h2>
          </div>

          <Button
            href="#products"
            variant="tertiary"
            color="dark"
            size="md"
            icon={<ArrowRight className="h-4 w-4 text-[#E46A2A]" />}
            iconPosition="right"
          >
            View all products
          </Button>
        </div>

        {/* Brands Interactive Grid */}
        <div className="mt-10 grid grid-cols-2 gap-px bg-[#E5E1D8] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {brandLogos.map((brand) => {
            const isSelected = selectedBrand === brand.name;

            return (
              <button
                key={brand.id}
                type="button"
                onClick={() => handleBrandClick(brand.name)}
                className={`group relative flex h-28 items-center justify-center p-6 text-center transition-all duration-200 ${isSelected
                  ? "bg-[#25282A] ring-2 ring-inset ring-[#E46A2A]"
                  : "bg-white hover:bg-[#F4F2ED]"
                  }`}
                title={`Browse ${brand.name} products`}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`max-h-18 w-auto max-w-full object-contain transition-all duration-200 ${isSelected
                    ? "brightness-0 invert scale-105"
                    : "opacity-100 group-hover:scale-105"
                    }`}
                  loading="lazy"
                />

                <span className="sr-only">Browse products by {brand.name}</span>
              </button>
            );
          })}

          {/* View all brand products button slot */}
          <button
            type="button"
            onClick={() => handleBrandClick("All")}
            className="group flex h-28 flex-col items-center justify-center bg-white p-6 transition-all duration-200 hover:bg-[#25282A] hover:text-white"
          >
            <span className="text-xs font-medium text-[#747773] group-hover:text-white">
              + View All
            </span>
            <span className="mt-1 text-[11px] text-[#747773] group-hover:text-white/80">
              All Brands
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
