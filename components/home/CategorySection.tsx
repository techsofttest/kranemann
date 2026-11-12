"use client";

import { ProductCategory } from "@/types/catalogue";

type CategorySectionProps = {
  activeCategory?: ProductCategory;
  onSelectCategory?: (category: ProductCategory) => void;
};

export const categoryCards = [
  {
    title: "Electric Chain Hoists",
    image: "/products/categories/Industrial Orange Electric Chain Hoist.png",
    matchingCategory: "Electric chain hoists" as ProductCategory,
  },
  {
    title: "Manual Chain Hoists",
    image: "/products/categories/Industrial Chain Hoist Product Photo.png",
    matchingCategory: "Manual chain hoists" as ProductCategory,
  },
  {
    title: "Wire Rope Hoists",
    image: "/products/categories/Industrial Orange Wire Rope Hoist.png",
    matchingCategory: "Wire rope hoists" as ProductCategory,
  },
  {
    title: "Hoist/Trolley Parts",
    image: "/products/categories/Industrial Trolley Hoist Wheel Assembly.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Trolleys/Beam Clamps",
    image: "/products/categories/Industrial Orange Beam Trolley Assembly.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "VFD-Motor Controls",
    image: "/products/categories/Industrial Drive Controller with Orange Accents.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Pendant/PB Stations",
    image: "/products/categories/Industrial Orange Pendant Control Station.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Radio Controls",
    image: "/products/categories/Industrial Orange Joystick Transmitter.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Electrification",
    image: "/products/categories/Industrial Overhead Conductor Rail Assembly.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Cranes",
    image: "/products/categories/Orange and Black Industrial Overhead Crane.png",
    matchingCategory: "Cranes" as ProductCategory,
  },
  {
    title: "Below The Hook",
    image: "/products/categories/Industrial Lifting Spreader Beam.png",
    matchingCategory: "All products" as ProductCategory,
  },
  {
    title: "Clearance Items",
    image: "/products/categories/Clearance Items.png",
    matchingCategory: "All products" as ProductCategory,
  },
];

export default function CategorySection({
  activeCategory,
  onSelectCategory,
}: CategorySectionProps) {
  const handleClick = (cat: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    const target = document.getElementById("products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F4F2ED] py-12 lg:py-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-[#25282A] sm:text-4xl lg:text-5xl">
              Explore equipment by family.
            </h2>
          </div>
          <span className="text-xs text-[#747773]">{categoryCards.length} equipment categories</span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categoryCards.map((item) => {
            const isSelected =
              activeCategory &&
              activeCategory === item.matchingCategory &&
              item.matchingCategory !== "All products";

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => handleClick(item.matchingCategory)}
                className={`group flex flex-col items-center justify-between p-4 text-center transition-all duration-300 ${isSelected
                  ? "bg-white text-white shadow-md ring-2 ring-[#E46A2A]"
                  : "bg-white text-[#25282A] hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  }`}
              >
                <div className="flex h-28 w-full items-center justify-center overflow-hidden bg-white p-2 transition-colors group-hover:bg-white/60">
                  <img
                    src={encodeURI(item.image)}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <span
                  className={`mt-3.5 line-clamp-2 text-xs font-medium uppercase tracking-tight sm:text-sm ${isSelected ? "text-white" : "text-[#25282A] group-hover:text-[#E46A2A]"
                    }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
