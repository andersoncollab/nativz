// ============================================================
// Section Image Mappings
// Maps service categories, industries, and areas to images
// ============================================================

import { getAssetPath } from "@/lib/assets";

/* ── Service Category → Section Images ── */
const serviceCategoryImages: Record<string, string[]> = {
    "social-media": [
        "/images/sections/social-media/strategy.png",
        "/images/sections/social-media/engagement.png",
        "/images/sections/social-media/content-creation.png",
    ],
    "advertising": [
        "/images/sections/advertising/dashboard.png",
        "/images/sections/advertising/creative-testing.png",
        "/images/sections/advertising/multi-platform.png",
    ],
    "content-production": [
        "/images/sections/content-production/studio.png",
        "/images/sections/content-production/editing.png",
        "/images/sections/content-production/product-shoot.png",
    ],
    "web-development": [
        "/images/sections/web-development/coding.png",
        "/images/sections/web-development/ux-design.png",
        "/images/sections/web-development/responsive.png",
    ],
    "branding": [
        "/images/sections/branding/strategy.png",
        "/images/sections/branding/identity-design.png",
        "/images/sections/branding/collateral.png",
    ],
    "seo": [
        "/images/sections/seo/analytics.png",
        "/images/sections/seo/keyword-research.png",
        "/images/sections/seo/technical-audit.png",
    ],
    "commercial-production": [
        "/images/sections/commercial-production/set.png",
        "/images/sections/commercial-production/color-grading.png",
        "/images/sections/commercial-production/aerial.png",
    ],
    "ai-marketing": [
        "/images/sections/ai-marketing/predictive.png",
        "/images/sections/ai-marketing/team.png",
        "/images/sections/ai-marketing/ai-copywriting.png",
    ],
    "email-marketing": [
        "/images/sections/email-marketing/builder.png",
        "/images/sections/email-marketing/analytics.png",
        "/images/sections/email-marketing/mobile.png",
    ],
    "aeo": [
        "/images/sections/aeo/voice-search.png",
        "/images/sections/aeo/ai-overview.png",
        "/images/sections/aeo/ai-answers.png",
    ],
};

/* ── Social Media Post Examples (top performers) ── */
export const socialPostExamples: string[] = [
    "/images/social-posts/dunstons-steakhouse-1.png",
    "/images/social-posts/dunstons-steakhouse-2.png",
    "/images/social-posts/dunstons-steakhouse-3.png",
    "/images/social-posts/dunstons-steakhouse-4.png",
    "/images/social-posts/axolotl-planet-1.png",
    "/images/social-posts/axolotl-planet-2.png",
    "/images/social-posts/axolotl-planet-3.png",
    "/images/social-posts/axolotl-planet-4.png",
    "/images/social-posts/coast-to-coast-motors-1.png",
    "/images/social-posts/coast-to-coast-motors-2.png",
    "/images/social-posts/crystal-creek-cattle-co-1.png",
    "/images/social-posts/crystal-creek-cattle-co-2.png",
    "/images/social-posts/custom-shade-and-shutter-1.png",
    "/images/social-posts/the-standard-ranch-water-1.png",
    "/images/social-posts/the-standard-ranch-water-2.png",
    "/images/social-posts/the-standard-ranch-water-3.png",
    "/images/social-posts/total-plumbing-1.png",
    "/images/social-posts/total-plumbing-2.png",
    "/images/social-posts/total-plumbing-3.png",
    "/images/social-posts/total-plumbing-4.png",
    "/images/social-posts/rmr-solutions-1.png",
    "/images/social-posts/rmr-solutions-2.png",
    "/images/social-posts/rmr-solutions-3.png",
    "/images/social-posts/skibell-fine-jewelry.png",
    "/images/social-posts/jojo-the-fox.png",
    "/images/social-posts/jojo-the-fox-2.png",
    "/images/social-posts/all-shutters-and-blinds-1.png",
];

/* ── DFW Area Photos (reuse existing backgrounds) ── */
const areaImages: Record<string, string> = {
    "dallas-marketing-agency": "/images/backgrounds/Dallas-Skyline.jpg",
    "fort-worth-marketing-agency": "/images/backgrounds/bridgenativz.jpg",
    "dfw-marketing-agency": "/images/backgrounds/downtownnativz.jpg",
    "highland-park-marketing-agency": "/images/backgrounds/downtownnativz2.jpg",
    "university-park-marketing-agency": "/images/backgrounds/attnativz.jpg",
    "texas-marketing-agency": "/images/backgrounds/reuniontowernativz.jpg",
    "north-texas-marketing-agency": "/images/backgrounds/smunativz.jpg",
    "plano-marketing-agency": "/images/backgrounds/oldredmuseumnativz.jpg",
    "frisco-marketing-agency": "/images/backgrounds/westelmnativz.jpg",
};

const defaultAreaImage = "/images/backgrounds/Dallas-Skyline.jpg";

/* ── Industry Section Images (shared across all industry pages) ── */
const industrySectionImages: string[] = [
    "/images/sections/industry/strategy-meeting.png",
    "/images/sections/industry/data-insights.png",
    "/images/sections/industry/growth-strategy.png",
];

/* ── Public API ── */

/** Get an array of section images for a service category (cycles if index > length) */
export function getServiceSectionImage(category: string, sectionIndex: number): string {
    const images = serviceCategoryImages[category] || serviceCategoryImages["social-media"];
    return getAssetPath(images[sectionIndex % images.length]);
}

/** Get all section images for a service category */
export function getServiceImages(category: string): string[] {
    const images = serviceCategoryImages[category] || serviceCategoryImages["social-media"];
    return images.map(getAssetPath);
}

/** Get a DFW area photo for a location page */
export function getAreaImage(slug: string): string {
    return getAssetPath(areaImages[slug] || defaultAreaImage);
}

/** Get a section image for industry pages (cycles through available) */
export function getIndustrySectionImage(sectionIndex: number): string {
    return getAssetPath(industrySectionImages[sectionIndex % industrySectionImages.length]);
}

/** Get a subset of social post examples for display */
export function getSocialPostExamples(count: number = 6, offset: number = 0): string[] {
    const posts = socialPostExamples.slice(offset, offset + count);
    return posts.map(getAssetPath);
}

