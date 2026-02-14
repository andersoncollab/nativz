// ============================================================
// Navigation Data for the expanded Mega Menu
// 4-column layout per the expansion brief
// ============================================================

import { MegamenuColumn, NavItem } from "./types";

export const megamenuColumns: MegamenuColumn[] = [
    // Column 1: Core Services
    {
        columnLabel: "Core Services",
        items: [
            {
                label: "Social Media Management",
                href: "/services/social-media-management/",
                description: "Full-service organic strategy across every platform",
            },
            {
                label: "Advertising & Paid Media",
                href: "/services/advertising/",
                description: "Algorithm-optimized ad creative production at scale",
            },
            {
                label: "Content Production",
                href: "/services/content-production/",
                description: "One film day. One month of content.",
            },
        ],
    },
    // Column 2: Digital & Technical
    {
        columnLabel: "Digital & Technical",
        items: [
            {
                label: "Website Development",
                href: "/services/website-development/",
                description: "High-performance websites that convert",
            },
            {
                label: "SEO & Search",
                href: "/services/seo/",
                description: "Technical, local, content, and franchise SEO",
            },
            {
                label: "Answer Engine Optimization",
                href: "/services/aeo/",
                description: "Get found by AI-powered search engines",
            },
        ],
    },
    // Column 3: Creative & AI
    {
        columnLabel: "Creative & AI",
        items: [
            {
                label: "Branding & Design",
                href: "/services/branding-design/",
                description: "Visual identity and brand system creation",
            },
            {
                label: "Commercial Production",
                href: "/services/commercial-production/",
                description: "Full-scale brand films and commercials",
            },
            {
                label: "AI Marketing Services",
                href: "/services/artificial-intelligence/",
                description: "AI-powered content, ads, and automation",
            },
        ],
    },
    // Column 4: Quick Links
    {
        columnLabel: "Quick Links",
        items: [
            {
                label: "Email Marketing & Automation",
                href: "/services/email-marketing/",
                description: "Campaigns, automation, drip sequences, SMS",
            },
            {
                label: "Industries We Serve",
                href: "/industries/",
                description: "Marketing solutions by industry vertical",
            },
            {
                label: "View All Services",
                href: "/services/",
                description: "Browse our complete service catalog",
            },
        ],
    },
];

// Sub-links for each parent service (shown on hover within mega menu)
export const serviceSubLinks: Record<string, { label: string; href: string }[]> = {
    "social-media-management": [
        { label: "Facebook", href: "/services/social-media-management/facebook/" },
        { label: "Instagram", href: "/services/social-media-management/instagram/" },
        { label: "LinkedIn", href: "/services/social-media-management/linkedin/" },
        { label: "TikTok", href: "/services/social-media-management/tiktok/" },
        { label: "YouTube", href: "/services/social-media-management/youtube/" },
        { label: "X (Twitter)", href: "/services/social-media-management/x-twitter/" },
        { label: "Pinterest", href: "/services/social-media-management/pinterest/" },
        { label: "Threads", href: "/services/social-media-management/threads/" },
    ],
    "advertising": [
        { label: "Meta Ads", href: "/services/advertising/meta-ads/" },
        { label: "Google Ads", href: "/services/advertising/google-ads/" },
        { label: "TikTok Ads", href: "/services/advertising/tiktok-ads/" },
        { label: "YouTube Ads", href: "/services/advertising/youtube-ads/" },
        { label: "LinkedIn Ads", href: "/services/advertising/linkedin-ads/" },
        { label: "CTV/OTT", href: "/services/advertising/ctv-ott/" },
        { label: "Programmatic", href: "/services/advertising/programmatic/" },
        { label: "Retargeting", href: "/services/advertising/retargeting/" },
    ],
    "content-production": [
        { label: "Video Production", href: "/services/content-production/video-production/" },
        { label: "Photography", href: "/services/content-production/photography/" },
        { label: "UGC Creation", href: "/services/content-production/ugc-creation/" },
        { label: "Short-Form Video", href: "/services/content-production/short-form-video/" },
        { label: "Motion Graphics", href: "/services/content-production/motion-graphics/" },
    ],
    "website-development": [
        { label: "Next.js", href: "/services/website-development/nextjs-development/" },
        { label: "E-Commerce", href: "/services/website-development/ecommerce/" },
        { label: "WordPress", href: "/services/website-development/wordpress/" },
        { label: "Shopify", href: "/services/website-development/shopify/" },
        { label: "Web Apps", href: "/services/website-development/web-apps/" },
    ],
    "seo": [
        { label: "Local SEO", href: "/services/seo/local-seo/" },
        { label: "Technical SEO", href: "/services/seo/technical-seo/" },
        { label: "E-Commerce SEO", href: "/services/seo/ecommerce-seo/" },
        { label: "Content SEO", href: "/services/seo/content-seo/" },
        { label: "Franchise SEO", href: "/services/seo/franchise-seo/" },
    ],
    "aeo": [
        { label: "ChatGPT Optimization", href: "/services/aeo/chatgpt-optimization/" },
        { label: "Google AI Overviews", href: "/services/aeo/google-ai-overviews/" },
        { label: "Perplexity AI", href: "/services/aeo/perplexity-optimization/" },
        { label: "llms.txt", href: "/services/aeo/llms-txt-implementation/" },
    ],
    "branding-design": [
        { label: "Brand Identity", href: "/services/branding-design/brand-identity/" },
        { label: "Brand Strategy", href: "/services/branding-design/brand-strategy/" },
        { label: "UI/UX Design", href: "/services/branding-design/ui-ux-design/" },
        { label: "Graphic Design", href: "/services/branding-design/graphic-design/" },
    ],
    "commercial-production": [
        { label: "Brand Films", href: "/services/commercial-production/brand-films/" },
        { label: "TV Commercials", href: "/services/commercial-production/tv-commercials/" },
        { label: "Product Videos", href: "/services/commercial-production/product-videos/" },
        { label: "Drone", href: "/services/commercial-production/drone-videography/" },
    ],
    "artificial-intelligence": [
        { label: "AI Content", href: "/services/artificial-intelligence/ai-content-production/" },
        { label: "AI Ad Creative", href: "/services/artificial-intelligence/ai-ad-creative/" },
        { label: "AI Automation", href: "/services/artificial-intelligence/ai-automation/" },
        { label: "AI Strategy", href: "/services/artificial-intelligence/ai-strategy/" },
    ],
    "email-marketing": [
        { label: "Campaign Management", href: "/services/email-marketing/email-campaign-management/" },
        { label: "Marketing Automation", href: "/services/email-marketing/marketing-automation/" },
        { label: "Drip Campaigns", href: "/services/email-marketing/drip-campaigns/" },
        { label: "SMS Marketing", href: "/services/email-marketing/sms-marketing/" },
    ],
};

export const navLinks: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];
