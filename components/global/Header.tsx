"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { allEquipmentCategories, ProductCategory } from "@/types/catalogue";
import { useSearchContext } from "@/context/SearchContext";

type HeaderProps = {
  onOpenSearch: () => void;
};

export default function Header({ onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { activeCategory, setActiveCategory } = useSearchContext();

  const productMenuLinks = [
    { label: "Hoist", href: "#categories", category: "Electric chain hoists" as ProductCategory },
    { label: "End trucks", href: "#categories", category: "All products" as ProductCategory },
    { label: "Overhead Cranes & Gantry Cranes", href: "#categories", category: "Cranes" as ProductCategory },
    { label: "Custom Engineered Products", href: "#contact", category: "All products" as ProductCategory },
    { label: "Automated Cranes", href: "#categories", category: "Cranes" as ProductCategory },
    { label: "Automation & Controls", href: "#categories", category: "All products" as ProductCategory },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Products Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsDropdownOpen((prev) => !prev)}
              aria-expanded={productsDropdownOpen}
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70 focus:outline-none cursor-pointer"
            >
              <span>Products</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  productsDropdownOpen ? "rotate-180 text-[#E46A2A]" : "text-white/70"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {productsDropdownOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[280px] pt-3">
                <div className="overflow-hidden rounded-md border border-white/10 bg-[#1e2022] p-2 shadow-2xl backdrop-blur-md">
                  {productMenuLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        handleCategoryClick(item.category);
                        setProductsDropdownOpen(false);
                      }}
                      className="group flex items-center justify-between rounded-md px-3.5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#E46A2A] opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

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
          <a
            href="#news"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            News and updates
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
      </div >

    {/* Categories Horizontal Draggable Scroll Strip without Icons */ }
    < div className = "bg-[#1e2022]" >
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
      </div >

    {/* Mobile Drawer Menu */ }
  {
    mobileMenuOpen && (
      <div className="bg-[#25282A] px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-between text-base font-medium text-white"
              >
                <span>Products</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-[#E46A2A]" : "text-white/70"
                    }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="mt-3 flex flex-col gap-2 border-l border-white/15 pl-4">
                  {productMenuLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        handleCategoryClick(item.category);
                        setMobileMenuOpen(false);
                      }}
                      className="py-1 text-sm text-white/80 transition-colors hover:text-[#E46A2A]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)}>
              News and updates
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
    )
  }
    </header >
  );
}
