"use client";

import { useEffect, useRef, useState } from "react";
import { Search, RotateCw, X } from "lucide-react";
import { CategoryItem, ProductCategory } from "@/types/catalogue";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: CategoryItem[];
  onSelectCategory: (category: ProductCategory) => void;
};

const defaultRecommendations = [
  "Electric chain hoist 2t",
  "Overhead bridge crane",
  "Manual chain block",
  "Wire rope hoists",
  "Radio remote transmitter",
  "Motor VFD drive",
  "End trucks & wheel sets",
];

const alternativeRecommendations = [
  "Portal gantry crane",
  "Load testing & certification",
  "Spreader lifting beam",
  "Pendant control stations",
  "Conductor bar electrification",
  "Explosion proof hoists",
  "Hook blocks & sheaves",
];

export default function SearchModal({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  categories,
  onSelectCategory,
}: SearchModalProps) {
  const [recommendations, setRecommendations] = useState(defaultRecommendations);
  const [isRotating, setIsRotating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleRefresh = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRotating(true);
    setTimeout(() => {
      setRecommendations((prev) =>
        prev === defaultRecommendations
          ? alternativeRecommendations
          : defaultRecommendations
      );
      setIsRotating(false);
    }, 250);
  };

  const handleExecuteSearch = (query: string) => {
    onSearchChange(query);
    onClose();
    const target = document.getElementById("products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleExecuteSearch(searchQuery);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/45 backdrop-blur-[2px] px-4 pt-16 sm:pt-20">
      <div
        ref={containerRef}
        className="relative w-full max-w-xl overflow-hidden rounded-lg border border-[#E5E1D8] bg-white animate-in fade-in-0 zoom-in-95 duration-200"
      >
        {/* Top Search Input Box */}
        <div className="border-b border-[#E5E1D8] bg-white p-4 sm:p-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent text-base font-normal text-[#25282A] outline-none placeholder:text-[#747773] sm:text-lg"
              />
              <button
                type="button"
                onClick={onClose}
                className="ml-2 text-[#747773] hover:text-[#25282A] p-1 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center justify-end pt-1">
              {/* Orange Action Search Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[#E46A2A] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#C95720] active:scale-95"
              >
                <Search className="h-4 w-4 stroke-[2.5]" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Recommendations Dropdown Card */}
        <div className="bg-white px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between border-b border-[#E5E1D8]/40 pb-3">
            <span className="text-sm font-semibold tracking-tight text-[#25282A]">
              Recommended for you
            </span>
          </div>

          {/* List of Recommended Items */}
          <div className="mt-2 divide-y divide-[#E5E1D8]/10">
            {recommendations.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleExecuteSearch(item)}
                className="group flex w-full items-center justify-between py-2.5 text-left text-sm text-[#25282A] transition-colors hover:text-[#E46A2A]"
              >
                <span className="transition-transform group-hover:translate-x-1">
                  {item}
                </span>
                <span className="text-xs text-[#747773] opacity-0 transition-opacity group-hover:opacity-100">
                  Search ↵
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
