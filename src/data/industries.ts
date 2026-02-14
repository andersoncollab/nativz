// ============================================================
// Nativz Industries Data
// 20 industry pages + index per the expansion brief
// ============================================================

import { IndustryPage } from "./types";

function defineIndustry(
    overrides: Partial<IndustryPage> & Pick<IndustryPage, "title" | "slug" | "shortDescription" | "metaTitle" | "metaDescription" | "ctaHeading" | "ctaDescription" | "minWordCount" | "relatedServiceSlugs">
): IndustryPage {
    return {
        heroImage: undefined,
        content: [],
        challenges: [],
        solutions: [],
        faqItems: [],
        relatedBlogSlugs: [],
        ...overrides,
    };
}

export const industries: IndustryPage[] = [
    defineIndustry({
        title: "Franchise Marketing Agency",
        slug: "franchise-marketing",
        shortDescription: "Multi-location marketing systems for franchise brands. BDF programs, co-op advertising, creative volume at scale.",
        metaTitle: "Franchise Marketing Agency | Nativz",
        metaDescription: "Nativz builds franchise marketing systems: BDF programs, co-op advertising, multi-location SEO, and Andromeda-optimized creative volume for franchise brands at scale.",
        ctaHeading: "Schedule Your Franchise Marketing Audit",
        ctaDescription: "Let us build a marketing system that serves both your franchisor brand and individual franchisee locations.",
        minWordCount: 2000,
        relatedServiceSlugs: ["social-media-management", "advertising", "seo", "content-production", "artificial-intelligence"],
    }),

    defineIndustry({
        title: "Restaurant & Food Service Marketing",
        slug: "restaurant-marketing",
        shortDescription: "Social media, paid advertising, and content production for restaurants, fast casual, QSR, and food brands.",
        metaTitle: "Restaurant Marketing Agency Dallas | Nativz",
        metaDescription: "Nativz delivers restaurant marketing: social media management, paid advertising, content production, and local SEO for restaurants and food service brands in DFW and beyond.",
        ctaHeading: "Let's Fill Your Tables",
        ctaDescription: "From Instagram-worthy content to Google Ads that drive foot traffic, we know restaurant marketing inside and out.",
        minWordCount: 1500,
        relatedServiceSlugs: ["social-media-management", "advertising", "content-production", "seo"],
    }),

    defineIndustry({
        title: "E-Commerce & DTC Brand Marketing",
        slug: "ecommerce-marketing",
        shortDescription: "Performance marketing, creative production, and growth strategy for e-commerce and direct-to-consumer brands.",
        metaTitle: "E-Commerce Marketing Agency | Nativz",
        metaDescription: "Nativz drives e-commerce growth with performance marketing, creative production at scale, and full-funnel strategy for DTC brands. Meta Ads, Google Shopping, and beyond.",
        ctaHeading: "Scale Your Online Revenue",
        ctaDescription: "We build the creative engine and ad infrastructure that e-commerce brands need to scale profitably.",
        minWordCount: 1500,
        relatedServiceSlugs: ["advertising", "content-production", "website-development", "seo", "email-marketing"],
    }),

    defineIndustry({
        title: "Healthcare & Medical Practice Marketing",
        slug: "healthcare-marketing",
        shortDescription: "HIPAA-aware digital marketing for healthcare providers, medical practices, and health technology brands.",
        metaTitle: "Healthcare Marketing Agency | Nativz",
        metaDescription: "Nativz provides healthcare marketing: HIPAA-aware digital advertising, patient acquisition, SEO, social media, and content production for medical practices and health brands.",
        ctaHeading: "Grow Your Practice Responsibly",
        ctaDescription: "We understand the compliance requirements and patient acquisition challenges unique to healthcare marketing.",
        minWordCount: 1500,
        relatedServiceSlugs: ["advertising", "seo", "website-development", "content-production"],
    }),

    defineIndustry({
        title: "Real Estate Marketing",
        slug: "real-estate-marketing",
        shortDescription: "Digital marketing for real estate agents, brokerages, developers, and property management companies.",
        metaTitle: "Real Estate Marketing Agency | Nativz",
        metaDescription: "Nativz delivers real estate marketing: social media, paid advertising, video tours, drone photography, and local SEO for agents, brokerages, and developers.",
        ctaHeading: "Market Your Properties at Scale",
        ctaDescription: "From drone videography to targeted social ads, we help real estate professionals dominate their market.",
        minWordCount: 1500,
        relatedServiceSlugs: ["social-media-management", "advertising", "content-production", "commercial-production", "seo"],
    }),

    defineIndustry({
        title: "Home Services Marketing",
        slug: "home-services-marketing",
        shortDescription: "Digital marketing for HVAC, plumbing, roofing, landscaping, and home service businesses.",
        metaTitle: "Home Services Marketing Agency | Nativz",
        metaDescription: "Nativz provides home services marketing: Google Ads, local SEO, social media, and content production for HVAC, plumbing, roofing, and home service companies.",
        ctaHeading: "Fill Your Service Calendar",
        ctaDescription: "We help home service businesses generate consistent leads through digital marketing that actually works.",
        minWordCount: 1500,
        relatedServiceSlugs: ["advertising", "seo", "social-media-management", "website-development"],
    }),

    defineIndustry({
        title: "Fitness & Wellness Marketing",
        slug: "fitness-wellness-marketing",
        shortDescription: "Marketing for gyms, fitness studios, wellness brands, spas, and health-focused businesses.",
        metaTitle: "Fitness & Wellness Marketing Agency | Nativz",
        metaDescription: "Nativz delivers fitness and wellness marketing: social media content, paid advertising, brand building, and community growth for gyms, studios, and wellness brands.",
        ctaHeading: "Build Your Fitness Community",
        ctaDescription: "We create the content and campaigns that inspire people to walk through your doors and become members for life.",
        minWordCount: 1500,
        relatedServiceSlugs: ["social-media-management", "content-production", "advertising", "branding-design"],
    }),

    defineIndustry({
        title: "Law Firm Marketing",
        slug: "legal-marketing",
        shortDescription: "Ethical digital marketing for law firms: SEO, paid search, content marketing, and reputation management.",
        metaTitle: "Law Firm Marketing Agency | Nativz",
        metaDescription: "Nativz provides law firm marketing: ethical SEO, Google Ads, content marketing, and reputation management for attorneys and legal practices.",
        ctaHeading: "Grow Your Legal Practice",
        ctaDescription: "We understand bar advertising rules and the competitive landscape of legal marketing. Let us drive qualified leads to your firm.",
        minWordCount: 1500,
        relatedServiceSlugs: ["seo", "advertising", "website-development", "content-production"],
    }),

    defineIndustry({
        title: "Automotive Marketing",
        slug: "automotive-marketing",
        shortDescription: "Digital marketing for car dealerships, auto groups, and automotive brands.",
        metaTitle: "Automotive Marketing Agency | Nativz",
        metaDescription: "Nativz delivers automotive marketing: social media, video content, paid advertising, and local SEO for car dealerships, auto groups, and automotive brands.",
        ctaHeading: "Drive More Showroom Traffic",
        ctaDescription: "We create the social content and ad campaigns that put buyers in seats, both virtual and physical.",
        minWordCount: 1200,
        relatedServiceSlugs: ["advertising", "content-production", "social-media-management", "commercial-production"],
    }),

    defineIndustry({
        title: "SaaS & Technology Marketing",
        slug: "saas-marketing",
        shortDescription: "Growth marketing, product-led content, and demand generation for SaaS and technology companies.",
        metaTitle: "SaaS Marketing Agency | Nativz",
        metaDescription: "Nativz provides SaaS marketing: product-led content, demand generation, paid acquisition, SEO, and growth strategy for technology companies and software brands.",
        ctaHeading: "Accelerate Your Growth Engine",
        ctaDescription: "We build the content, ads, and SEO infrastructure that SaaS companies need to scale ARR predictably.",
        minWordCount: 1500,
        relatedServiceSlugs: ["advertising", "seo", "content-production", "website-development", "artificial-intelligence"],
    }),

    defineIndustry({
        title: "Influencer Marketing & Creator Partnerships",
        slug: "influencer-marketing",
        shortDescription: "Influencer partnership strategy for brands and growth services for creators and content entrepreneurs.",
        metaTitle: "Influencer Marketing Agency | Nativz",
        metaDescription: "Nativz connects brands with creators and helps influencers scale their presence. Influencer campaign management, UGC pipelines, and creator growth services.",
        ctaHeading: "Build Your Creator Network",
        ctaDescription: "Whether you are a brand seeking influencers or a creator seeking growth, Nativz is your partner.",
        minWordCount: 1500,
        relatedServiceSlugs: ["social-media-management", "content-production", "advertising", "branding-design"],
    }),

    defineIndustry({
        title: "Nonprofit & Cause-Based Marketing",
        slug: "nonprofit-marketing",
        shortDescription: "Mission-driven marketing for nonprofits, foundations, and cause-based organizations.",
        metaTitle: "Nonprofit Marketing Agency | Nativz",
        metaDescription: "Nativz provides nonprofit marketing: donor acquisition campaigns, social media storytelling, fundraising support, and awareness campaigns for cause-based organizations.",
        ctaHeading: "Amplify Your Mission",
        ctaDescription: "We help nonprofits tell their story, engage donors, and build movements that create real impact.",
        minWordCount: 1200,
        relatedServiceSlugs: ["social-media-management", "content-production", "advertising", "branding-design"],
    }),

    defineIndustry({
        title: "Education & EdTech Marketing",
        slug: "education-marketing",
        shortDescription: "Marketing for schools, universities, online course creators, and education technology companies.",
        metaTitle: "Education Marketing Agency | Nativz",
        metaDescription: "Nativz delivers education marketing: student enrollment campaigns, content strategy, paid advertising, and brand building for schools, universities, and EdTech companies.",
        ctaHeading: "Increase Enrollment and Engagement",
        ctaDescription: "We understand the enrollment funnel and how to reach students, parents, and lifelong learners.",
        minWordCount: 1200,
        relatedServiceSlugs: ["advertising", "social-media-management", "content-production", "website-development"],
    }),

    defineIndustry({
        title: "Hospitality & Tourism Marketing",
        slug: "hospitality-marketing",
        shortDescription: "Digital marketing for hotels, resorts, tourism boards, and hospitality brands.",
        metaTitle: "Hospitality Marketing Agency | Nativz",
        metaDescription: "Nativz provides hospitality marketing: social media, paid advertising, video content, and SEO for hotels, resorts, tourism boards, and hospitality brands.",
        ctaHeading: "Fill Your Rooms and Tables",
        ctaDescription: "We create the visual content and digital campaigns that inspire travelers to book.",
        minWordCount: 1200,
        relatedServiceSlugs: ["social-media-management", "content-production", "advertising", "commercial-production"],
    }),

    defineIndustry({
        title: "Financial Services Marketing",
        slug: "financial-services-marketing",
        shortDescription: "Compliant digital marketing for financial advisors, banks, insurance, and fintech companies.",
        metaTitle: "Financial Services Marketing Agency | Nativz",
        metaDescription: "Nativz provides financial services marketing: compliant digital advertising, content strategy, SEO, and brand building for advisors, banks, insurance, and fintech.",
        ctaHeading: "Build Trust at Scale",
        ctaDescription: "We understand financial compliance requirements and how to market financial services effectively in digital channels.",
        minWordCount: 1200,
        relatedServiceSlugs: ["advertising", "content-production", "seo", "website-development"],
    }),

    defineIndustry({
        title: "Construction & Contracting Marketing",
        slug: "construction-marketing",
        shortDescription: "Digital marketing for construction companies, general contractors, and specialty trades.",
        metaTitle: "Construction Marketing Agency | Nativz",
        metaDescription: "Nativz delivers construction marketing: project showcase content, local SEO, Google Ads, and brand building for construction companies and contractors.",
        ctaHeading: "Build Your Pipeline",
        ctaDescription: "We help construction and contracting firms showcase their work and generate qualified project inquiries.",
        minWordCount: 1200,
        relatedServiceSlugs: ["seo", "advertising", "content-production", "commercial-production"],
    }),

    defineIndustry({
        title: "Entertainment & Events Marketing",
        slug: "entertainment-marketing",
        shortDescription: "Marketing for entertainment venues, events, festivals, and live experience brands.",
        metaTitle: "Entertainment Marketing Agency | Nativz",
        metaDescription: "Nativz provides entertainment marketing: event promotion, social media campaigns, video content, and ticket sales strategy for venues, festivals, and live events.",
        ctaHeading: "Sell Out Your Next Event",
        ctaDescription: "We create the buzz and drive the ticket sales that entertainment brands need to succeed.",
        minWordCount: 1200,
        relatedServiceSlugs: ["social-media-management", "advertising", "content-production", "commercial-production"],
    }),

    defineIndustry({
        title: "Retail Marketing",
        slug: "retail-marketing",
        shortDescription: "Digital marketing for brick-and-mortar retailers, shopping centers, and consumer retail brands.",
        metaTitle: "Retail Marketing Agency | Nativz",
        metaDescription: "Nativz delivers retail marketing: social media, paid advertising, local SEO, and content production for brick-and-mortar retailers and consumer brands.",
        ctaHeading: "Drive Foot Traffic and Online Sales",
        ctaDescription: "We bridge the gap between digital marketing and in-store experience for retail brands.",
        minWordCount: 1200,
        relatedServiceSlugs: ["social-media-management", "advertising", "seo", "content-production"],
    }),

    defineIndustry({
        title: "Professional Services Marketing",
        slug: "professional-services-marketing",
        shortDescription: "B2B marketing for consulting firms, accounting practices, and professional service organizations.",
        metaTitle: "Professional Services Marketing Agency | Nativz",
        metaDescription: "Nativz provides professional services marketing: thought leadership, LinkedIn strategy, content production, and demand generation for B2B service firms.",
        ctaHeading: "Elevate Your Professional Brand",
        ctaDescription: "We help professional service firms build thought leadership and generate qualified B2B leads through strategic digital marketing.",
        minWordCount: 1200,
        relatedServiceSlugs: ["social-media-management", "content-production", "seo", "website-development"],
    }),
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/** Get all industries */
export function getAllIndustries(): IndustryPage[] {
    return industries;
}

/** Get an industry by slug */
export function getIndustry(slug: string): IndustryPage | undefined {
    return industries.find((i) => i.slug === slug);
}

/** Get industries related to a service slug */
export function getIndustriesForService(serviceSlug: string): IndustryPage[] {
    return industries.filter((i) => i.relatedServiceSlugs.includes(serviceSlug));
}
