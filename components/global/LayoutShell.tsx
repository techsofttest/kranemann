"use client";

import { ReactNode } from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import SearchModal from "@/components/global/SearchModal";
import { SearchProvider, useSearchContext } from "@/context/SearchContext";

function ShellContent({ children }: { children: ReactNode }) {
  const {
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    categories,
    setActiveCategory,
  } = useSearchContext();

  return (
    <>
      <Header onOpenSearch={() => setSearchOpen(true)} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {children}

      <Footer />
    </>
  );
}

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <ShellContent>{children}</ShellContent>
    </SearchProvider>
  );
}

