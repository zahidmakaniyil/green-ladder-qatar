// ============================================
// GREEN LADDER QATAR - Data & Content
// ============================================

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  featured: boolean;
  priority: number;
  benefits: string[];
  applications?: {
    offshore?: string[];
    onshore?: string[];
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  keywords: string[];
}

export const siteConfig = {
  name: "Green Ladder Qatar",
  legalName: "Green Ladder WLL",
  description: "Qatar's leading specialized contracting company for waterproofing, duct sealing, structural strengthening, and repair services. Trusted solutions for offshore and onshore facilities.",
  url: "https://greenladderqatar.com",
  phone: "+974 30307327",
  email: "info@greenladderqatar.com",
  address: {
    street: "PO Box: 96917",
    city: "Doha",
    country: "Qatar",
  },
  social: {
    facebook: "https://facebook.com/greenladderqatar",
    instagram: "https://instagram.com/greenladderqatar",
    linkedin: "https://linkedin.com/company/greenladderqatar",
  },
};

export const services: Service[] = [
  {
    id: 1,
    slug: "duct-sealing-system",
    title: "Duct Sealing System – Offshore & Onshore",
    shortTitle: "Duct Sealing",
    name: "Duct Sealing System",
    description: "Water leakage through cable penetrations? Cable penetrations are often the weakest in the chain of fire safety and water tightness in any given structure, be it onshore buildings or offshore facilities. Green Ladder provides proven, high-quality sealing solutions with optimum water tightness and fire safety guaranteed.",
    shortDescription: "Proven sealing solutions for cable penetrations with optimum water tightness and fire safety for both offshore and onshore facilities.",
    icon: "duct-sealing",
    featured: true,
    priority: 1,
    benefits: [
      "100% Water tightness guaranteed",
      "Fire safety certified solutions",
      "Suitable for offshore and onshore facilities",
      "Quick and efficient installation",
      "Long-lasting durability",
      "Compliant with international standards"
    ],
    applications: {
      offshore: ["Oil & Gas platforms", "Marine vessels", "Subsea installations", "Offshore rigs", "FPSO vessels"],
      onshore: ["Commercial buildings", "Industrial facilities", "Data centers", "Power plants", "Manufacturing units"]
    },
    faqs: [
      {
        question: "What causes water leakage in cable penetrations?",
        answer: "Cable penetrations create openings in walls, floors, and ceilings that, if not properly sealed, allow water to seep through. This is especially critical in offshore environments where water pressure is high."
      },
      {
        question: "How does duct sealing prevent fire spread?",
        answer: "Our sealing systems are fire-rated and create a barrier that prevents fire, smoke, and gases from spreading through cable penetrations, maintaining compartmentalization for safety."
      },
      {
        question: "What certifications do your sealing products have?",
        answer: "Our products meet international standards including IMO (International Maritime Organization) requirements and various fire safety certifications."
      },
      {
        question: "How long does the installation take?",
        answer: "Installation time varies based on the project scope, but our experienced team ensures minimal disruption with efficient installation processes."
      }
    ],
    keywords: ["duct sealing Qatar", "cable penetration sealing", "offshore sealing solutions", "water tightness", "fire safety sealing", "cable transit sealing Qatar"]
  },
  {
    id: 2,
    slug: "water-tightness-lining",
    title: "Water Tightness and Lining",
    shortTitle: "Waterproofing",
    name: "Water Tightness & Lining",
    description: "Comprehensive waterproofing and lining solutions for all types of structures. Our advanced water tightness systems protect your facilities from water ingress and moisture damage.",
    shortDescription: "Advanced waterproofing and lining solutions to protect structures from water ingress and moisture damage.",
    icon: "waterproofing",
    featured: false,
    priority: 2,
    benefits: [
      "Complete protection against water ingress",
      "Suitable for basements, tanks, and tunnels",
      "Chemical-resistant options available",
      "Long-term durability",
      "Expert installation"
    ],
    keywords: ["waterproofing Qatar", "water tightness solutions", "basement waterproofing", "tank lining Qatar"]
  },
  {
    id: 3,
    slug: "guniting-shotcreting",
    title: "Guniting and Shotcreting",
    shortTitle: "Guniting",
    name: "Guniting & Shotcreting",
    description: "Professional guniting and shotcreting services for structural repairs, swimming pools, tunnels, and slope stabilization. Our pneumatically applied concrete solutions ensure superior bonding and durability.",
    shortDescription: "Professional pneumatically applied concrete solutions for structural repairs, pools, and slope stabilization.",
    icon: "concrete",
    featured: false,
    priority: 3,
    benefits: [
      "Superior bonding strength",
      "Rapid application process",
      "Suitable for complex geometries",
      "Cost-effective solution",
      "Minimal formwork required"
    ],
    keywords: ["guniting Qatar", "shotcreting services", "concrete spraying", "structural repair Qatar"]
  },
  {
    id: 4,
    slug: "crack-injection",
    title: "Crack Injection",
    shortTitle: "Crack Injection",
    name: "Crack Injection",
    description: "Specialized crack injection services to repair and seal cracks in concrete structures. Our injection solutions restore structural integrity and prevent water infiltration.",
    shortDescription: "Specialized injection solutions to repair and seal cracks in concrete structures effectively.",
    icon: "crack-repair",
    featured: false,
    priority: 4,
    benefits: [
      "Restores structural integrity",
      "Prevents water infiltration",
      "Suitable for active and dormant cracks",
      "Epoxy and polyurethane options",
      "Non-invasive repair method"
    ],
    keywords: ["crack injection Qatar", "concrete crack repair", "epoxy injection", "structural crack sealing"]
  },
  {
    id: 5,
    slug: "structural-strengthening",
    title: "Structural Strengthening",
    shortTitle: "Strengthening",
    name: "Structural Strengthening",
    description: "Advanced structural strengthening solutions using carbon fiber, steel plates, and other reinforcement methods. We enhance the load-bearing capacity and extend the life of your structures.",
    shortDescription: "Advanced reinforcement solutions using carbon fiber and steel plates to enhance structural capacity.",
    icon: "structural",
    featured: true,
    priority: 2,
    benefits: [
      "Increased load-bearing capacity",
      "Carbon fiber reinforcement",
      "Steel plate bonding",
      "Minimal structural intervention",
      "Extended structure lifespan"
    ],
    keywords: ["structural strengthening Qatar", "carbon fiber reinforcement", "concrete strengthening", "building reinforcement"]
  },
  {
    id: 6,
    slug: "epoxy-industrial-flooring",
    title: "Epoxy & Industrial Flooring",
    shortTitle: "Epoxy Flooring",
    name: "Epoxy & Industrial Flooring",
    description: "High-performance epoxy and industrial flooring systems for warehouses, factories, and commercial spaces. Our flooring solutions offer durability, chemical resistance, and aesthetic appeal.",
    shortDescription: "High-performance flooring systems for warehouses, factories, and commercial spaces.",
    icon: "flooring",
    featured: false,
    priority: 5,
    benefits: [
      "High durability and wear resistance",
      "Chemical and stain resistant",
      "Easy to clean and maintain",
      "Anti-slip options available",
      "Various colors and finishes"
    ],
    keywords: ["epoxy flooring Qatar", "industrial flooring", "warehouse flooring", "factory floor coating"]
  },
  {
    id: 7,
    slug: "foam-concrete",
    title: "Foam Concrete / Lightweight Concrete",
    shortTitle: "Foam Concrete",
    name: "Foam Concrete",
    description: "Lightweight foam concrete solutions for insulation, void filling, and slope creation. Our foam concrete offers excellent thermal properties with reduced structural load.",
    shortDescription: "Lightweight concrete solutions for insulation, void filling, and slope creation.",
    icon: "concrete",
    featured: false,
    priority: 6,
    benefits: [
      "Lightweight with low density",
      "Excellent thermal insulation",
      "Self-leveling properties",
      "Reduces structural load",
      "Fire resistant"
    ],
    keywords: ["foam concrete Qatar", "lightweight concrete", "cellular concrete", "insulation concrete"]
  },
  {
    id: 8,
    slug: "polyurea-coating",
    title: "Polyurea Coating & Polyurethane Foam",
    shortTitle: "Polyurea Coating",
    name: "Polyurea Coating",
    description: "Fast-curing polyurea coating and polyurethane foam solutions for waterproofing, protective coating, and insulation applications.",
    shortDescription: "Fast-curing coating solutions for waterproofing, protection, and insulation applications.",
    icon: "coating",
    featured: false,
    priority: 7,
    benefits: [
      "Extremely fast curing time",
      "Seamless application",
      "High chemical resistance",
      "Flexible and durable",
      "UV stable options"
    ],
    keywords: ["polyurea coating Qatar", "polyurethane foam", "spray coating", "protective coating Qatar"]
  },
  {
    id: 9,
    slug: "anti-corrosion-coating",
    title: "Anti-Corrosion & Protective Coating",
    shortTitle: "Anti-Corrosion",
    name: "Anti-Corrosion Coating",
    description: "Comprehensive anti-corrosion and protective coating solutions for steel structures, pipelines, and industrial equipment in harsh environments.",
    shortDescription: "Protective coating solutions for steel structures and equipment in harsh environments.",
    icon: "shield",
    featured: false,
    priority: 8,
    benefits: [
      "Protection against corrosion",
      "Extends equipment lifespan",
      "Suitable for marine environments",
      "Various coating systems",
      "Surface preparation included"
    ],
    keywords: ["anti-corrosion Qatar", "protective coating", "steel protection", "marine coating Qatar"]
  },
  {
    id: 10,
    slug: "concrete-repair-grouting",
    title: "Concrete Repair and Grouting",
    shortTitle: "Concrete Repair",
    name: "Concrete Repair & Grouting",
    description: "Professional concrete repair and grouting services to restore damaged structures. Our repair solutions address spalling, delamination, and structural deterioration.",
    shortDescription: "Professional repair and grouting services to restore damaged concrete structures.",
    icon: "grouting",
    featured: false,
    priority: 9,
    benefits: [
      "Restores structural integrity",
      "Addresses spalling and delamination",
      "Various repair mortars available",
      "Precision grouting services",
      "Quality materials used"
    ],
    keywords: ["concrete repair Qatar", "grouting services", "structural repair", "concrete restoration"]
  },
  {
    id: 11,
    slug: "fire-proofing-insulation",
    title: "Fire Proofing and Insulation",
    shortTitle: "Fire Proofing",
    name: "Fire Proofing & Insulation",
    description: "Fire protection and insulation solutions for steel structures, cables, and building elements. Our fireproofing systems ensure compliance with safety regulations.",
    shortDescription: "Fire protection solutions for structures and cables ensuring safety compliance.",
    icon: "fire-stopping",
    featured: true,
    priority: 3,
    benefits: [
      "Meets fire safety standards",
      "Various fire rating options",
      "Intumescent and cementitious",
      "Cable fire protection",
      "Certified installers"
    ],
    keywords: ["fireproofing Qatar", "fire protection", "intumescent coating", "fire insulation Qatar"]
  },
  {
    id: 12,
    slug: "interior-fitout",
    title: "Interior Fit-out Works",
    shortTitle: "Interior Fit-out",
    name: "Interior Fit-out Works",
    description: "Complete interior fit-out solutions for commercial and residential spaces. From design to execution, we transform spaces with quality craftsmanship.",
    shortDescription: "Complete interior fit-out solutions for commercial and residential spaces.",
    icon: "insulation",
    featured: false,
    priority: 10,
    benefits: [
      "Complete design to execution",
      "Quality materials",
      "Experienced craftsmen",
      "Timely completion",
      "Custom solutions"
    ],
    keywords: ["interior fitout Qatar", "office fitout", "commercial interiors", "renovation Qatar"]
  },
  {
    id: 13,
    slug: "auto-spare-parts",
    title: "Auto Spare Parts Trading",
    shortTitle: "Auto Parts",
    name: "Auto Spare Parts",
    description: "Quality automobile spare parts trading services. We supply genuine and aftermarket parts for various vehicle makes and models.",
    shortDescription: "Quality automobile spare parts for various vehicle makes and models.",
    icon: "maintenance",
    featured: false,
    priority: 11,
    benefits: [
      "Genuine and aftermarket parts",
      "Wide range of vehicles",
      "Competitive pricing",
      "Quick delivery",
      "Quality assured"
    ],
    keywords: ["auto spare parts Qatar", "car parts Doha", "automobile parts", "vehicle spare parts"]
  },
  {
    id: 14,
    slug: "natural-stone",
    title: "Natural Stone",
    shortTitle: "Natural Stone",
    name: "Natural Stone Supply",
    description: "Premium natural stone supply and installation services. We offer marble, granite, and various natural stones for flooring, cladding, and decorative applications.",
    shortDescription: "Premium natural stone supply for flooring, cladding, and decorative applications.",
    icon: "anchor",
    featured: false,
    priority: 12,
    benefits: [
      "Premium quality stones",
      "Marble and granite options",
      "Professional installation",
      "Custom cutting available",
      "Variety of finishes"
    ],
    keywords: ["natural stone Qatar", "marble Doha", "granite Qatar", "stone flooring"]
  }
];

export const stats = [
  { value: 50, suffix: "+", label: "Skilled Workers" },
  { value: 1980, suffix: "+", label: "Projects" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
];

export const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Our skilled professionals bring years of experience in specialized contracting services.",
    icon: "users"
  },
  {
    title: "Quality Products",
    description: "We use only premium, certified materials that meet international standards.",
    icon: "award"
  },
  {
    title: "Timely Delivery",
    description: "We are committed to completing projects on schedule without compromising quality.",
    icon: "clock"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to address your concerns.",
    icon: "headphones"
  }
];

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ],
  services: services.slice(0, 6).map(s => ({ name: s.shortTitle, href: `/services/${s.slug}` })),
};

export const aboutContent = {
  intro: "Green Ladder WLL is a specialized contracting & trading company dealing in the field of waterproofing, structural strengthening and repair, duct sealing and injections/grouting services.",
  full: "Green Ladder is a multi-disciplined organization with services that range from specialized services in construction solutions, Automobile spare parts trading, interior fit-out services, etc. We are a result-oriented company with exceptional up-to-date technical expertise in our area of interest, offering the right solutions and executing the job with absolute commitment. A company that will deliver solutions with quality products and workmanship, delivering projects on time.",
  mission: "To provide innovative and reliable construction solutions that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility.",
  vision: "To be the leading specialized contracting company in Qatar and the GCC region, recognized for our expertise, integrity, and commitment to excellence.",
  values: [
    { title: "Quality", description: "We never compromise on the quality of our work and materials." },
    { title: "Integrity", description: "We conduct business with honesty and transparency." },
    { title: "Innovation", description: "We continuously seek better solutions and technologies." },
    { title: "Safety", description: "We prioritize the safety of our team and clients." },
  ]
};

// Blog posts placeholder
export const blogPosts = [
  {
    id: 1,
    slug: "importance-of-duct-sealing-offshore-facilities",
    title: "The Importance of Duct Sealing in Offshore Facilities",
    excerpt: "Discover why proper duct sealing is critical for safety and efficiency in offshore oil and gas platforms.",
    content: "Cable penetrations are often overlooked but they are critical weak points in any offshore structure...",
    image: "/images/blog/duct_sealing.webp",
    date: "2024-12-15",
    author: "Green Ladder Team",
    category: "Duct Sealing"
  },
  {
    id: 2,
    slug: "waterproofing-solutions-qatar-climate",
    title: "Waterproofing Solutions for Qatar's Climate",
    excerpt: "Learn about the best waterproofing practices suited for Qatar's unique weather conditions.",
    content: "Qatar's climate presents unique challenges for building maintenance...",
    image: "/images/blog/water-proofing.webp",
    date: "2024-12-10",
    author: "Green Ladder Team",
    category: "Waterproofing"
  },
  {
    id: 3,
    slug: "fire-safety-cable-penetrations",
    title: "Fire Safety: Protecting Cable Penetrations",
    excerpt: "Understanding fire-rated sealing systems and their importance in building safety.",
    content: "Fire can spread rapidly through unsealed cable penetrations...",
    image: "/images/blog/cable-penetrations.webp",
    date: "2024-12-05",
    author: "Green Ladder Team",
    category: "Fire Safety"
  }
];

// Projects placeholder
export const projects = [
  {
    id: 1,
    title: "Offshore Platform Duct Sealing",
    category: "Duct Sealing",
    description: "Complete cable penetration sealing for a major offshore oil platform.",
    image: "/images/projects/project-1.jpg"
  },
  {
    id: 2,
    title: "Commercial Building Waterproofing",
    category: "Waterproofing",
    description: "Basement and roof waterproofing for a commercial complex in Doha.",
    image: "/images/projects/project-2.jpg"
  },
  {
    id: 3,
    title: "Industrial Epoxy Flooring",
    category: "Flooring",
    description: "High-performance epoxy flooring installation for a manufacturing facility.",
    image: "/images/projects/project-3.jpg"
  },
  {
    id: 4,
    title: "Structural Strengthening Project",
    category: "Strengthening",
    description: "Carbon fiber reinforcement for a heritage building restoration.",
    image: "/images/projects/project-4.jpg"
  }
];
