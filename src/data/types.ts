// ============================================================
// Nativz Content Architecture Type Definitions
// Structured to mirror eventual Payload CMS collections
// ============================================================

// --- Service Types ---

export type ServiceCategory =
    | "social-media"
    | "advertising"
    | "content-production"
    | "website-development"
    | "seo"
    | "aeo"
    | "branding-design"
    | "commercial-production"
    | "email-marketing"
    | "artificial-intelligence";

export interface ContentSection {
    heading: string;
    body: string;       // HTML string content
    icon?: string;      // Optional SVG icon identifier
}

export interface Deliverable {
    title: string;
    description: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ServicePage {
    title: string;
    slug: string;
    parentSlug?: string;          // Undefined for parent services
    category: ServiceCategory;
    icon: string;                 // SVG icon identifier
    heroImage?: string;
    shortDescription: string;    // 160 chars max, for meta + cards
    content: ContentSection[];   // Rich content blocks
    deliverables: Deliverable[];
    faqItems: FAQItem[];
    primaryKeywords: string[];
    relatedServiceSlugs: string[];
    relatedIndustrySlugs: string[];
    metaTitle: string;
    metaDescription: string;
    minWordCount: number;
}

// --- Industry Types ---

export interface IndustryChallenge {
    title: string;
    description: string;
}

export interface IndustrySolution {
    title: string;
    description: string;
    relatedServiceSlug: string;
}

export interface IndustryPage {
    title: string;
    slug: string;
    heroImage?: string;
    shortDescription: string;
    content: ContentSection[];
    challenges: IndustryChallenge[];
    solutions: IndustrySolution[];
    faqItems: FAQItem[];
    relatedServiceSlugs: string[];
    relatedBlogSlugs: string[];
    metaTitle: string;
    metaDescription: string;
    ctaHeading: string;         // e.g., "Schedule Your Franchise Marketing Audit"
    ctaDescription: string;
    minWordCount: number;
}

// --- Blog Types ---

export interface BlogPost {
    title: string;
    slug: string;
    oldSlug?: string;           // WordPress slug for 301 redirect
    publishDate: string;
    author: string;
    categories: string[];
    tags: string[];
    featuredImage?: string;
    excerpt: string;
    content: string;            // Full HTML content
    metaTitle: string;
    metaDescription: string;
    relatedServiceSlugs: string[];
    relatedIndustrySlugs: string[];
}

// --- Redirect Types ---

export interface RedirectEntry {
    source: string;
    destination: string;
    permanent: boolean;
}

// --- Navigation Types ---

export interface MegamenuSubItem {
    label: string;
    href: string;
    description?: string;
}

export interface MegamenuColumn {
    columnLabel: string;
    items: MegamenuSubItem[];
}

export interface NavItem {
    label: string;
    href: string;
    megamenuEnabled?: boolean;
    megamenuColumns?: MegamenuColumn[];
}
