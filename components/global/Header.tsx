"use client";

import { useState, useRef } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { ProductCategory } from "@/types/catalogue";
import { useSearchContext } from "@/context/SearchContext";

type HeaderProps = {
  onOpenSearch: () => void;
};

export const productMenuItems = [
  { label: "Hoist", href: "#categories", category: "Electric chain hoists" as ProductCategory },
  { label: "End trucks", href: "#categories", category: "All products" as ProductCategory },
  { label: "Overhead Cranes & Gantry Cranes", href: "#categories", category: "Cranes" as ProductCategory },
  { label: "Custom Engineered Products", href: "#contact", category: "All products" as ProductCategory },
  { label: "Automated Cranes", href: "#categories", category: "Cranes" as ProductCategory },
  { label: "Automation & Controls", href: "#categories", category: "All products" as ProductCategory },
];

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

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof productMenuItems)[0]
  ) => {
    if (hasMoved.current) {
      e.preventDefault();
      return;
    }
    if (item.category) {
      setActiveCategory(item.category);
    }
    setMobileMenuOpen(false);
    if (item.href.startsWith("#")) {
      const id = item.href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f9fa] text-[#25282A] border-b border-gray-200/80 shadow-xs">
      {/* Top Main Navigation Bar */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="shrink-0 flex items-center gap-2">
          <img
            src="/logo/AWC-logo.png"
            alt="AWC"
            className="h-16 py-3 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          <a
            href="#categories"
            className="text-sm font-medium text-[#25282A] transition-colors hover:text-[#E46A2A]"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-[#25282A] transition-colors hover:text-[#E46A2A]"
          >
            Services
          </a>
          <a
            href="#industries"
            className="text-sm font-medium text-[#25282A] transition-colors hover:text-[#E46A2A]"
          >
            Industries
          </a>
          <a
            href="#resources"
            className="text-sm font-medium text-[#25282A] transition-colors hover:text-[#E46A2A]"
          >
            Resources
          </a>
          <a
            href="#news"
            className="text-sm font-medium text-[#25282A] transition-colors hover:text-[#E46A2A]"
          >
            News and updates
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onOpenSearch}
            className="flex w-52 items-center justify-between rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-600 transition-colors hover:border-[#E46A2A] hover:text-[#25282A]"
            aria-label="Search"
          >
            <span className="flex items-center gap-2.5">
              <Search className="h-4 w-4 text-gray-500" />
              <span>Search equipment...</span>
            </span>
          </button>

          <a
            href="#contact"
            className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-gray-300 bg-white text-[#25282A] transition-colors hover:border-[#E46A2A] hover:text-[#E46A2A]"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#E46A2A] text-[10px] font-semibold text-white">
              0
            </span>
          </a>

          <a
            href="#contact"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-300 bg-white text-[#25282A] transition-colors hover:border-[#E46A2A] hover:text-[#E46A2A]"
            aria-label="User Account"
          >
            <User className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center text-[#25282A] lg:hidden"
          aria-label="Open navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Product Items Bar right under the nav bar */}
      <div className="bg-[#ebedef] border-b border-gray-200">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            className="flex cursor-grab select-none items-center gap-2 overflow-x-auto py-2.5 active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-4 lg:gap-8"
          >
            {productMenuItems.map((item) => {
              const isSelected =
                item.category &&
                activeCategory === item.category &&
                item.category !== "All products";

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`inline-flex shrink-0 items-center rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "bg-[#E46A2A] text-white shadow-xs"
                      : "text-gray-700 hover:bg-white/80 hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#f8f9fa] border-b border-gray-200 px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="text-[#25282A] font-medium hover:text-[#E46A2A]">
              Products
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#25282A] font-medium hover:text-[#E46A2A]">
              Services
            </a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-[#25282A] font-medium hover:text-[#E46A2A]">
              Industries
            </a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="text-[#25282A] font-medium hover:text-[#E46A2A]">
              Resources
            </a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="text-[#25282A] font-medium hover:text-[#E46A2A]">
              News and updates
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-[#E46A2A] px-5 py-3 text-center text-white transition-colors hover:bg-[#C95720] rounded-sm font-medium"
            >
              Talk to an expert
            </a>
          </nav>

          {/* Mobile Product Items Quick Links */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#E46A2A]">
              Products
            </p>
            <div className="flex flex-col gap-2">
              {productMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className="rounded px-2 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
