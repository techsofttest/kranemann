"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { categories as initialCategories } from "@/data/catalogue";
import { CategoryItem, ProductCategory } from "@/types/catalogue";

type SearchContextType = {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: ProductCategory;
  setActiveCategory: (cat: ProductCategory) => void;
  categories: CategoryItem[];
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("All products");

  const value = useMemo(
    () => ({
      searchOpen,
      setSearchOpen,
      searchQuery,
      setSearchQuery,
      activeCategory,
      setActiveCategory,
      categories: initialCategories,
    }),
    [searchOpen, searchQuery, activeCategory]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}

