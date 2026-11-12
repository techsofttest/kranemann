"use client";

import { X, Search } from "lucide-react";
import { CategoryItem, ProductCategory } from "@/types/catalogue";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: CategoryItem[];
  onSelectCategory: (category: ProductCategory) => void;
};

export default function SearchModal({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  categories,
  onSelectCategory,
}: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#F4F2ED]">
      <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10">
        <div className="flex items-center justify-between">
          <img
            src="/logo/logo.png"
            alt="Kranemann"
            className="h-9 w-auto object-contain"
          />

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center text-[#25282A] transition-colors hover:text-[#E46A2A]"
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mx-auto mt-24 max-w-4xl">
          <p className="mb-5 text-sm text-[#747773]">Product search</p>

          <div className="flex items-center border-b-2 border-[#25282A] pb-5">
            <Search className="mr-5 h-7 w-7 text-[#747773]" />

            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search cranes, hoists, parts..."
              className="w-full bg-transparent text-3xl text-[#25282A] outline-none placeholder:text-[#747773]/60 lg:text-5xl"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.slice(1).map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  onSelectCategory(category.name);
                  onClose();
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#25282A]/20 bg-white px-4 py-3 text-sm text-[#25282A] transition-colors hover:border-[#E46A2A] hover:text-[#E46A2A]"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

