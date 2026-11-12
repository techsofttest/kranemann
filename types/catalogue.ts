import { LucideIcon } from "lucide-react";
import {
  Zap,
  Cog,
  Cable,
  Wrench,
  Link,
  Cpu,
  Sliders,
  Radio,
  Power,
  Warehouse,
  Anchor,
  Tag,
} from "lucide-react";

export type ProductCategory =
  | "All products"
  | "Electric chain hoists"
  | "Manual chain hoists"
  | "Wire rope hoists"
  | "Cranes";

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  code: string;
  image: string;
  description: string;
  capacity: string;
  lift: string;
  application: string;
  availability: "In stock" | "Made to order";
  featured?: boolean;
};

export type CategoryItem = {
  name: ProductCategory;
  count: number;
};

export type EquipmentCategory = {
  title: string;
  icon: LucideIcon;
  matchingCategory: ProductCategory;
};

export const allEquipmentCategories: EquipmentCategory[] = [
  {
    title: "Electric Chain Hoists",
    icon: Zap,
    matchingCategory: "Electric chain hoists",
  },
  {
    title: "Manual Chain Hoists",
    icon: Cog,
    matchingCategory: "Manual chain hoists",
  },
  {
    title: "Wire Rope Hoists",
    icon: Cable,
    matchingCategory: "Wire rope hoists",
  },
  {
    title: "Hoist/Trolley Parts",
    icon: Wrench,
    matchingCategory: "All products",
  },
  {
    title: "Trolleys/Beam Clamps",
    icon: Link,
    matchingCategory: "All products",
  },
  {
    title: "VFD-Motor Controls",
    icon: Cpu,
    matchingCategory: "All products",
  },
  {
    title: "Pendant/PB Stations",
    icon: Sliders,
    matchingCategory: "All products",
  },
  {
    title: "Radio Controls",
    icon: Radio,
    matchingCategory: "All products",
  },
  {
    title: "Electrification",
    icon: Power,
    matchingCategory: "All products",
  },
  {
    title: "Cranes",
    icon: Warehouse,
    matchingCategory: "Cranes",
  },
  {
    title: "Below The Hook",
    icon: Anchor,
    matchingCategory: "All products",
  },
  {
    title: "Clearance Items",
    icon: Tag,
    matchingCategory: "All products",
  },
];

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryItem = {
  title: string;
  description: string;
  image: string;
};
