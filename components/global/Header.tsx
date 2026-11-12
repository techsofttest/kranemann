"use client";

import { useState, useRef } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { allEquipmentCategories, ProductCategory } from "@/types/catalogue";
import { useSearchContext } from "@/context/SearchContext";

type HeaderProps = {
  onOpenSearch: () => void;
};

export default function Header({ onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeCategory, setActiveCategory } = useSearchContext();

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    if (hasMoved.current) {
      return;
    }
    setActiveCategory(cat);
    setMobileMenuOpen(false);
    const target = document.getElementById("products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#25282A] text-white shadow-md">
      {/* Top Main Navigation Bar */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="shrink-0">
          <img
            src="/logo/logo.png"
            alt="Kranemann"
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          <a
            href="#products"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Services
          </a>
          <a
            href="#industries"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Industries
          </a>
          <a
            href="#resources"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Resources
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onOpenSearch}
            className="flex w-52 items-center justify-between rounded-sm border border-white bg-white/5 px-4 py-2.5 text-xs font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label="Search"
          >
            <span className="flex items-center gap-2.5">
              <Search className="h-4 w-4 text-white" />
              <span>Search equipment...</span>
            </span>
          </button>

          <a
            href="#contact"
            className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 bg-white/5 text-white transition-colors hover:border-white/40 hover:bg-white/10"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#E46A2A] text-[10px] font-semibold text-white">
              0
            </span>
          </a>

          <a
            href="#contact"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 bg-white/5 text-white transition-colors hover:border-white/40 hover:bg-white/10"
            aria-label="User Account"
          >
            <User className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label="Open navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Categories Horizontal Draggable Scroll Strip without Icons */}
      <div className="bg-[#1e2022]">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            className="flex cursor-grab select-none items-center gap-2 overflow-x-auto py-2.5 active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {allEquipmentCategories.map((item) => {
              const isSelected =
                activeCategory === item.matchingCategory &&
                item.matchingCategory !== "All products";

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleCategoryClick(item.matchingCategory)}
                  className={`inline-flex shrink-0 items-center px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${isSelected
                    ? "bg-[#E46A2A] text-white"
                    : "text-white/80 hover:bg-white/10 rounded-md hover:text-white"
                    }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#25282A] px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-[#E46A2A] px-5 py-3 text-center text-white transition-colors hover:bg-[#C95720]"
            >
              Talk to an expert
            </a>
          </nav>

          {/* Mobile Category Quick Links */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#E46A2A]">
              Product Categories
            </p>
            <div className="grid grid-cols-2 gap-2">
              {allEquipmentCategories.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleCategoryClick(item.matchingCategory)}
                  className="p-2 text-left text-xs text-white/80 hover:text-white"
                >
                  <span className="line-clamp-1">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
