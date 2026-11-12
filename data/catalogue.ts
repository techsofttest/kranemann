import {
  Factory,
  Settings2,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import {
  CategoryItem,
  IndustryItem,
  Product,
  ServiceItem,
} from "@/types/catalogue";

export const products: Product[] = [
  {
    id: 1,
    name: "Electric chain hoist",
    category: "Electric chain hoists",
    code: "KCE-250",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85",
    description:
      "Compact electric lifting system for dependable everyday material handling.",
    capacity: "250–5,000 kg",
    lift: "3–12 m",
    application: "Production & assembly",
    availability: "In stock",
    featured: true,
  },
  {
    id: 2,
    name: "Heavy-duty electric hoist",
    category: "Electric chain hoists",
    code: "KCE-500",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    description:
      "High-cycle electric hoist designed for demanding industrial lifting applications.",
    capacity: "5,000–10,000 kg",
    lift: "6–18 m",
    application: "Heavy industry",
    availability: "Made to order",
  },
  {
    id: 3,
    name: "Manual chain hoist",
    category: "Manual chain hoists",
    code: "KMC-150",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Simple mechanical lifting solution for maintenance and controlled positioning.",
    capacity: "500–5,000 kg",
    lift: "3–6 m",
    application: "Maintenance",
    availability: "In stock",
  },
  {
    id: 4,
    name: "Low-headroom chain hoist",
    category: "Manual chain hoists",
    code: "KML-300",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
    description:
      "Low-headroom configuration for restricted lifting environments.",
    capacity: "1,000–3,000 kg",
    lift: "3–9 m",
    application: "Workshops",
    availability: "In stock",
  },
  {
    id: 5,
    name: "Wire rope hoist",
    category: "Wire rope hoists",
    code: "KWR-1000",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    description:
      "High-capacity lifting system engineered for demanding industrial duty cycles.",
    capacity: "5,000–50,000 kg",
    lift: "6–30 m",
    application: "Heavy manufacturing",
    availability: "Made to order",
    featured: true,
  },
  {
    id: 6,
    name: "Wire rope trolley hoist",
    category: "Wire rope hoists",
    code: "KWT-2000",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85",
    description:
      "Integrated trolley and hoist arrangement for overhead crane systems.",
    capacity: "10,000–50,000 kg",
    lift: "6–24 m",
    application: "Fabrication",
    availability: "Made to order",
  },
  {
    id: 7,
    name: "Overhead bridge crane",
    category: "Cranes",
    code: "KBC-500",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85",
    description:
      "Engineered overhead crane system for controlled movement across production areas.",
    capacity: "5–150 tonnes",
    lift: "Up to 30 m",
    application: "Industrial facilities",
    availability: "Made to order",
    featured: true,
  },
  {
    id: 8,
    name: "Gantry crane system",
    category: "Cranes",
    code: "KGC-300",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85",
    description:
      "Freestanding crane configuration for yards, workshops and large handling areas.",
    capacity: "5–100 tonnes",
    lift: "Up to 20 m",
    application: "Yards & fabrication",
    availability: "Made to order",
  },
  {
    id: 9,
    name: "Industrial variable frequency drive",
    category: "Electric chain hoists",
    code: "KVFD-400",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    description:
      "Precision speed micro-control drive unit with electronic thermal monitoring.",
    capacity: "Up to 75 kW",
    lift: "Dual Speed",
    application: "Crane & Hoist Control",
    availability: "In stock",
  },
  {
    id: 10,
    name: "Below the hook spreader lifting beam",
    category: "Cranes",
    code: "KSB-800",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    description:
      "Certified heavy engineered modular lifting beam with multi-point swivel hooks.",
    capacity: "10–80 tonnes",
    lift: "Custom Span",
    application: "Container & Cargo Handling",
    availability: "In stock",
    featured: true,
  },
];

export const categories: CategoryItem[] = [
  { name: "All products", count: products.length },
  {
    name: "Electric chain hoists",
    count: products.filter((p) => p.category === "Electric chain hoists").length,
  },
  {
    name: "Manual chain hoists",
    count: products.filter((p) => p.category === "Manual chain hoists").length,
  },
  {
    name: "Wire rope hoists",
    count: products.filter((p) => p.category === "Wire rope hoists").length,
  },
  {
    name: "Cranes",
    count: products.filter((p) => p.category === "Cranes").length,
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Field service",
    description:
      "On-site technical support, troubleshooting and equipment servicing to keep lifting systems working.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Inspection & testing",
    description:
      "Inspection programs and testing support designed around your equipment and operating environment.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Repair & modernization",
    description:
      "Upgrade aging equipment, replace critical components and extend the working life of your systems.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Parts & components",
    description:
      "Replacement components and accessories for cranes, hoists and material handling equipment.",
    icon: Zap,
  },
];

export const industries: IndustryItem[] = [
  {
    title: "Manufacturing",
    description:
      "Reliable lifting systems for production, fabrication, assembly and plant operations.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Energy",
    description:
      "Material handling equipment for demanding energy and infrastructure environments.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Heavy industry",
    description:
      "Engineered lifting solutions where capacity, reliability and uptime matter.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Specialized applications",
    description:
      "Custom equipment and engineering support for complex lifting requirements.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  },
];

