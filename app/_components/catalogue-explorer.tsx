"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/app/_components/product-card";
import { products } from "@/app/_data/products";

const pillOptions = Array.from(new Set(products.map((p) => p.category)));

export function CatalogueExplorer() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      const matchesFilter =
        !activeFilter ||
        product.name === activeFilter ||
        product.category === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  function selectFilter(name: string) {
    setActiveFilter((current) => (current === name ? null : name));
  }

  return (
    <>
      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 pt-20 pb-20 scroll-mt-20"
      >
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Products
        </h2>
        <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-amber-500" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex max-w-2xl items-center gap-2 rounded-full border border-border bg-white p-2.5 shadow-lg"
        >
          <Search className="size-5 shrink-0 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Product Name, Category or Keyword..."
            className="h-11 flex-1 border-none text-base shadow-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            size="lg"
            className="h-11 rounded-full bg-blue-700 px-7 text-base font-semibold text-white hover:bg-blue-800"
          >
            Search
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-start gap-3">
          {pillOptions.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => selectFilter(pill)}
              className="rounded-full border border-border px-5 py-2.5 text-base font-medium text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700 data-[active=true]:border-blue-700 data-[active=true]:bg-blue-700 data-[active=true]:text-white"
              data-active={activeFilter === pill}
            >
              {pill}
            </button>
          ))}
        </div>

        {activeFilter && (
          <div className="mt-6 flex items-center justify-center gap-2 text-base text-slate-600">
            Filtering by <strong>{activeFilter}</strong>
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className="text-blue-700 underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-base text-slate-500">
              No products match your search. Try another keyword.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
