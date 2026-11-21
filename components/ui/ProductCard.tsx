"use client";

import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/catalogue";
import { Button } from "@/components/ui/Button";

type ProductCardProps = {
  product: Product;
  selectedForCompare?: boolean;
  onToggleCompare?: (id: number) => void;
};

// Realistic brand names, full descriptive names and pricing
const productCatalogMeta: Record<
  number,
  {
    brand: string;
    fullName: string;
    price: string;
  }
> = {
  1: {
    brand: "AWC Industrial",
    fullName:
      "Heavy Duty Compact Electric Chain Hoist with Overload Protection & Motorized Trolley",
    price: "$850 – $1,800",
  },
  2: {
    brand: "Demag Engineered",
    fullName:
      "High-Cycle Industrial Variable Speed Heavy Duty Electric Hoist for Extreme Production Duty",
    price: "$2,400 – $4,200",
  },
  3: {
    brand: "Yale Lift Systems",
    fullName:
      "Precision Machined Manual Hand Chain Block Hoist with Corrosion-Resistant Load Chain",
    price: "$120 – $380",
  },
  4: {
    brand: "CM Industrial",
    fullName:
      "Ultra Low Headroom Geared Mechanical Manual Chain Hoist for Confined Workspaces",
    price: "$290 – $750",
  },
  5: {
    brand: "STAHL CraneSystems",
    fullName:
      "High Capacity Industrial Wire Rope Hoist with Rope Guide & Dual Disc Braking System",
    price: "$3,200 – $8,500",
  },
  6: {
    brand: "Street Crane",
    fullName:
      "Double Girder Top Running Motorized Wire Rope Trolley Hoist for Overhead Bridge Cranes",
    price: "$4,500 – $11,200",
  },
  7: {
    brand: "AWC Heavy Cranes",
    fullName:
      "Custom Overhead Bridge Crane Complete System with Bridge Beam, Hoist & Electrification",
    price: "$12,000 – $48,000",
  },
  8: {
    brand: "Konecranes Standard",
    fullName:
      "Freestanding Outdoor Portal Gantry Crane System with Rail Clamp Safety Kit & Pendant",
    price: "$8,500 – $32,000",
  },
  9: {
    brand: "Schneider Telemecanique",
    fullName:
      "Industrial Crane Drive VFD Motor Control Inverter Unit with Thermal Overload Protection",
    price: "$650 – $1,450",
  },
  10: {
    brand: "Pewag Rigging Systems",
    fullName:
      "Certified Heavy Duty Modular Spreader Lifting Beam with Safety Swivel Hooks & Slings",
    price: "$1,850 – $5,600",
  },
};

export default function ProductCard({ product }: ProductCardProps) {
  const meta = productCatalogMeta[product.id] || {
    brand: "AWC Industrial",
    fullName: `${product.name} ${product.description}`,
    price: "$1,200 – $3,500",
  };

  return (
    <article className="rounded-lg overflow-hidden bg-white group flex flex-col justify-between transition-all">
      <div>
        {/* Product Image with rounded corners matching the card design */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE8E2]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Details */}
        <div className="mt-3 px-4 flex flex-col">
          {/* Category */}
          <div className="flex items-center text-xs">
            <span className="text-[11px] font-medium text-[#747773]">
              {product.category}
            </span>
          </div>

          {/* Lengthy Product Name (2-lines clamped with smooth ellipsis) - links to detailed page */}
          <h3 className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug text-[#222222]/90">
            <a
              href={`/products/${product.id}`}
              className="transition-colors hover:text-[#E46A2A] hover:underline"
            >
              {meta.fullName}
            </a>
          </h3>

          {/* Price */}
          <div className="mt-2 text-lg font-bold tracking-tight text-[#111111]">
            {meta.price}
          </div>

          {/* Brand Name placed above Product Code */}
          <div className="mt-2 text-xs text-[#747773]">
            Brand: <span className="font-semibold text-[#25282A]">{meta.brand}</span>
          </div>

          {/* Product Code */}
          <div className="mt-0.5 text-xs text-[#747773]">
            Code: <span className="font-medium text-[#25282A]">{product.code}</span>
          </div>
        </div>
      </div>

      {/* Add To Cart Button */}
      <div className="my-4 mx-4">
        <Button
          variant="primary"
          color="orange"
          size="sm"
          icon={<ShoppingBag className="h-3.5 w-3.5" />}
          className="w-full"
          onClick={() => {
            alert(`Added ${product.code} to quote cart`);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
