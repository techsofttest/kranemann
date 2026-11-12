"use client";

import { useMemo, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ProductFinderSection from "@/components/home/ProductFinderSection";
import CategorySection from "@/components/home/CategorySection";
import BrandsSection from "@/components/home/BrandsSection";
import ProductCatalogueSection from "@/components/home/ProductCatalogueSection";
import ProductStorySection from "@/components/home/ProductStorySection";
import LifecycleServicesSection from "@/components/home/LifecycleServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TrustCapabilitySection from "@/components/home/TrustCapabilitySection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ContactSection from "@/components/home/ContactSection";
import { categories, industries, products, services } from "@/data/catalogue";
import { useSearchContext } from "@/context/SearchContext";

export default function HomePage() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  } = useSearchContext();

  const [sortBy, setSortBy] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [compareProducts, setCompareProducts] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "All products") {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.code.toLowerCase().includes(query) ||
          product.application.toLowerCase().includes(query)
      );
    }

    if (sortBy === "Name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "Capacity") {
      result = [...result].sort((a, b) =>
        a.capacity.localeCompare(b.capacity)
      );
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const toggleCompare = (id: number) => {
    setCompareProducts((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : current.length < 3
          ? [...current, id]
          : current
    );
  };

  return (
    <main className="min-h-screen bg-[#F4F2ED] text-[#25282A]">
      <HeroSection />

      <ProductFinderSection />

      <CategorySection
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <BrandsSection />

      <ProductCatalogueSection
        filteredProducts={filteredProducts}
        compareProducts={compareProducts}
        onToggleCompare={toggleCompare}
        onClearCompare={() => setCompareProducts([])}
        onClearSearch={() => {
          setSearchQuery("");
          setActiveCategory("All products");
        }}
      />

      <ProductStorySection />

      <LifecycleServicesSection services={services} />

      <IndustriesSection industries={industries} />

      <TrustCapabilitySection />

      <ResourcesSection />

      <ContactSection />
    </main>
  );
}
