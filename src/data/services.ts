// ============================================================
// Nativz Services Data
// Complete service hierarchy: 10 parents + ~65 sub-services
// Content sections will be populated in Phase B
// ============================================================

import { ServicePage, ServiceCategory } from "./types";

// --- Helper: Creates a minimal service placeholder ---
function defineService(
    overrides: Partial<ServicePage> & Pick<ServicePage, "title" | "slug" | "category" | "shortDescription" | "metaTitle" | "metaDescription" | "primaryKeywords" | "minWordCount"> & { parentSlug?: string }
): ServicePage {
    return {
        icon: "default",
        heroImage: undefined,
        content: [],
        deliverables: [],
        faqItems: [],
        relatedServiceSlugs: [],
        relatedIndustrySlugs: [],
        ...overrides,
    };
}

// ============================================================
// PARENT SERVICE PAGES
// ============================================================

export const parentServices: ServicePage[] = [
    // 1. Social Media Management
    defineService({
        title: "Social Media Management",
        slug: "social-media-management",
        category: "social-media",
        icon: "chat-bubble",
        shortDescription: "Full-service organic content strategy, community management, and algorithm-optimized posting across every major platform.",
        metaTitle: "Social Media Management Agency | Nativz",
        metaDescription: "Nativz delivers full-service social media management built for the post-Andromeda era. Creative volume, algorithm intelligence, and platform-native content across Facebook, Instagram, TikTok, LinkedIn, and more.",
        primaryKeywords: ["social media management agency", "social media marketing Dallas", "social media agency DFW"],
        minWordCount: 2000,
        relatedServiceSlugs: ["content-production", "advertising", "artificial-intelligence"],
        relatedIndustrySlugs: ["restaurant-marketing", "franchise-marketing", "ecommerce-marketing"],
        content: [
            {
                heading: "Social Media After Andromeda: Why Everything Changed",
                body: `<p>Meta's Andromeda algorithm didn't just tweak the feed — it rebuilt the foundation of social media distribution. Before Andromeda, organic reach was dying a slow death. Brands that posted three times a week could still maintain visibility. That era is over.</p>
<p>Andromeda evaluates content across a pool of over 1,000 ranking signals, prioritizing <strong>creative diversity</strong>, <strong>engagement velocity</strong>, and <strong>content freshness</strong> over follower count. The algorithm rewards brands that produce at volume — 10 to 25 meaningfully different pieces of content per week — and punishes those that repeat the same formats.</p>
<p>This is not a minor shift. It is a complete inversion of how social media marketing works. Agencies still building three polished posts per week are handing their clients' reach to competitors who understood the change. Nativz understood it before it happened, because we studied the patents, tracked the beta rollouts, and rebuilt our production pipeline around creative volume from day one.</p>
<p>Our social media management service is engineered for this reality. We don't just "manage your accounts." We build content engines that feed the algorithm exactly what it wants — diverse, platform-native, engagement-optimized content produced at a pace that most agencies can't match.</p>`
            },
            {
                heading: "Our Approach: Platform-Native Content at Scale",
                body: `<p>Every platform has its own language. A Reel that stops thumbs on Instagram will fall flat on LinkedIn. A carousel that drives saves on Instagram needs a completely different structure than a thread on X. Most agencies recycle the same asset across every channel and call it a "multi-platform strategy." We don't.</p>
<p>Nativz builds <strong>platform-native content strategies</strong> for every channel we manage. That means:</p>
<ul>
<li><strong>Instagram</strong>: Reels-first distribution with strategic carousel and static support. Optimized for saves, shares, and Explore page discovery.</li>
<li><strong>Facebook</strong>: Community-driven content that leverages Groups, Events, and Andromeda's preference for conversational engagement.</li>
<li><strong>TikTok</strong>: Trend-responsive, creator-style content shot in vertical format with native editing. Not repurposed Reels — original TikToks.</li>
<li><strong>LinkedIn</strong>: Thought leadership content, employee advocacy programs, and B2B lead generation through document posts and newsletters.</li>
<li><strong>YouTube</strong>: Long-form video strategy paired with Shorts optimization for subscriber growth and search discoverability.</li>
<li><strong>X (Twitter)</strong>: Real-time engagement, brand voice development, and conversational content strategy.</li>
<li><strong>Pinterest</strong>: Visual search optimization and traffic-driving pin strategy for evergreen discovery.</li>
<li><strong>Threads</strong>: Conversational content integrated with your Meta ecosystem strategy.</li>
</ul>
<p>We staff dedicated strategists for each platform — not generalists who treat every channel the same. This is why our clients see 3-5x the organic reach of brands using traditional posting schedules.</p>`
            },
            {
                heading: "Creative Volume: The New Competitive Advantage",
                body: `<p>The single biggest competitive advantage in social media today is <strong>creative volume</strong>. Not budget. Not follower count. Volume.</p>
<p>Here's why: Andromeda and its equivalents across TikTok, YouTube, and LinkedIn use machine learning to test content against micro-audiences before deciding whether to distribute it broadly. The more unique pieces of content you publish, the more "at-bats" you get with the algorithm. Brands producing 15-20 pieces per week simply get more distribution opportunities than brands producing 3-5.</p>
<p>But volume without quality is noise. Nativz solves this with our <strong>Film Day Model</strong>: a single production day generates enough raw footage, photography, and creative assets to fuel an entire month of content across every platform. Our editing team then produces dozens of unique variations — different hooks, different formats, different aspect ratios — from that single day's shoot.</p>
<p>The result: your brand publishes at the volume algorithms demand, with the quality your audience expects, at a cost that makes sense. One film day. One month of content. That's the Nativz model.</p>`
            },
            {
                heading: "Community Management That Builds Revenue",
                body: `<p>Content gets the reach. Community management converts it into revenue. Every comment, DM, Story reply, and mention is an opportunity to move a prospect closer to purchase — or lose them forever.</p>
<p>Nativz provides <strong>active community management</strong> across every platform we manage. This includes:</p>
<ul>
<li><strong>Response time SLAs</strong>: We respond to comments and DMs within defined windows, ensuring no engagement opportunity is missed.</li>
<li><strong>Proactive engagement</strong>: We don't just respond — we initiate conversations with potential customers, industry accounts, and complementary brands.</li>
<li><strong>UGC amplification</strong>: When customers create content about your brand, we identify it, engage with it, and incorporate it into your content calendar.</li>
<li><strong>Reputation monitoring</strong>: We track brand mentions, sentiment, and competitive conversations across all platforms.</li>
<li><strong>Lead routing</strong>: High-intent DMs and comments are flagged and routed to your sales team in real time.</li>
</ul>
<p>Social media is a two-way channel. Most agencies treat it like a billboard. We treat it like your most productive salesperson — because when managed correctly, it is.</p>`
            },
        ],
        deliverables: [
            { title: "Monthly Content Calendar", description: "A detailed, platform-specific content calendar with post copy, visual direction, hashtag strategy, and optimal posting times — delivered for approval before each month begins." },
            { title: "Platform-Native Content Production", description: "15-25 unique pieces of content per week across your active platforms. Reels, carousels, Stories, static posts, and video content — each built for the platform it lives on." },
            { title: "Community Management", description: "Active comment response, DM management, proactive engagement, and lead routing across all managed platforms with defined response time SLAs." },
            { title: "Monthly Analytics Report", description: "Comprehensive performance reporting covering reach, engagement, follower growth, top-performing content, audience insights, and strategic recommendations for the month ahead." },
            { title: "Hashtag & SEO Strategy", description: "Research-driven hashtag sets, keyword-optimized captions, and alt text strategy to maximize discoverability on every platform." },
            { title: "Competitor & Trend Analysis", description: "Monthly competitive benchmarking and trend reports that inform content strategy and identify opportunities to capture emerging conversations." },
            { title: "Brand Voice Guidelines", description: "A documented brand voice and tone guide for social media, ensuring consistent personality across every post, comment, and DM regardless of which team member is engaging." },
        ],
        faqItems: [
            { question: "How many posts per week does Nativz publish?", answer: "We typically publish 15-25 unique pieces of content per week across your active platforms. The exact volume depends on your plan and the number of platforms we manage. Every piece is platform-native — not recycled across channels." },
            { question: "Which social media platforms does Nativz manage?", answer: "We manage Facebook, Instagram, TikTok, LinkedIn, YouTube, X (Twitter), Pinterest, and Threads. Most clients start with 2-4 platforms and expand as their content engine matures. We'll recommend the right platform mix based on your audience and goals." },
            { question: "Do you create all the content, or do we need to provide assets?", answer: "We create everything. Our Film Day model produces all the video, photography, and raw assets needed for a full month of content. You don't need to provide anything beyond brand guidelines and access to your locations or products for shoot days." },
            { question: "How does Nativz handle content approvals?", answer: "We deliver a complete monthly content calendar for your review and approval before anything is published. You'll see every post, caption, and visual in advance. Revisions are built into our workflow, and we use shared collaboration tools to make approvals fast and painless." },
            { question: "What results can we expect from social media management?", answer: "Results vary by industry and starting point, but our clients typically see 3-5x increases in organic reach within the first 90 days, significant growth in engagement rates, and measurable increases in website traffic from social channels. We set specific KPIs during onboarding and report against them monthly." },
            { question: "How is Nativz different from other social media agencies?", answer: "Three things: creative volume, platform-native strategy, and the Andromeda-first approach. Most agencies still operate on a 3-posts-per-week model built for 2019 algorithms. We produce at the volume modern algorithms reward, with content built specifically for each platform — not recycled Canva templates posted everywhere." },
            { question: "What is the typical contract length?", answer: "We recommend a minimum 90-day engagement to allow the algorithm to learn and optimize around your content. Most clients work with us on 6-12 month agreements. We don't lock you in — our retention rate speaks for itself." },
        ],
    }),

    // 2. Advertising & Paid Media
    defineService({
        title: "Advertising & Paid Media",
        slug: "advertising",
        category: "advertising",
        icon: "bolt",
        shortDescription: "Algorithm-optimized paid media across Meta, Google, TikTok, CTV, and programmatic channels. Creative-as-targeting for the Andromeda era.",
        metaTitle: "Advertising & Paid Media Agency | Nativz",
        metaDescription: "Post-Andromeda paid media demands creative volume at scale. Nativz manages Meta Ads, Google Ads, TikTok Ads, CTV/OTT, and programmatic campaigns built for algorithmic success.",
        primaryKeywords: ["paid media agency", "advertising agency Dallas", "digital advertising DFW"],
        minWordCount: 2000,
        relatedServiceSlugs: ["content-production", "social-media-management", "artificial-intelligence"],
        relatedIndustrySlugs: ["franchise-marketing", "ecommerce-marketing", "restaurant-marketing"],
        content: [
            {
                heading: "The Death of Audience Targeting — and What Replaced It",
                body: `<p>The paid media playbook from 2019 is dead. iOS 14 privacy changes, cookie deprecation, and Meta's Andromeda algorithm fundamentally changed how digital advertising works. The old model — build hyper-specific audiences, show them one ad, and watch the conversions roll in — simply doesn't function anymore.</p>
<p>What replaced it is <strong>creative-as-targeting</strong>. In the post-Andromeda era, the algorithm itself has become the targeting mechanism. Instead of telling Meta or TikTok who to show your ads to, you give the algorithm <strong>diverse creative</strong> and let it find the right audience through machine learning. The brands winning in paid media today are the ones producing 10-25 unique ad creatives per campaign — each with different hooks, angles, formats, and messaging.</p>
<p>Nativz was built for this reality. While other agencies are still debating lookalike audience percentages, we're producing creative at the volume algorithms demand and letting the machines do what they do best: find buyers.</p>`
            },
            {
                heading: "Our Paid Media Methodology",
                body: `<p>Every Nativz paid media engagement follows our <strong>Launch → Learn → Scale</strong> framework:</p>
<ul>
<li><strong>Launch</strong>: We start with a broad campaign structure and 10-20 unique ad creatives across multiple formats (video, static, carousel, UGC-style). We test hooks, angles, and messaging frameworks simultaneously.</li>
<li><strong>Learn</strong>: Using daily performance data, we identify winning creative concepts within the first 7-14 days. We analyze which hooks stop scrolling, which messaging drives clicks, and which formats convert.</li>
<li><strong>Scale</strong>: Winning creatives get scaled with increased budget. We produce 5-10 variations of each winner — same concept, different execution — to extend creative lifespan and prevent ad fatigue.</li>
</ul>
<p>This cycle repeats monthly. The result is a paid media program that gets smarter, more efficient, and more profitable over time — because we never stop feeding the algorithm fresh creative.</p>`
            },
            {
                heading: "Full-Funnel, Multi-Channel Advertising",
                body: `<p>No single platform wins the advertising game alone. Nativz builds <strong>full-funnel, multi-channel campaigns</strong> that meet your audience at every stage of the buyer journey:</p>
<ul>
<li><strong>Awareness</strong>: Meta Reels ads, TikTok In-Feed, YouTube pre-roll, and CTV/OTT campaigns that introduce your brand to new audiences at scale.</li>
<li><strong>Consideration</strong>: Google Search, YouTube discovery, and LinkedIn Sponsored Content that capture intent and educate prospects.</li>
<li><strong>Conversion</strong>: Google Shopping, Meta dynamic product ads, and retargeting campaigns that drive purchases and lead submissions.</li>
<li><strong>Retention</strong>: Email-triggered campaigns, customer audience retargeting, and upsell/cross-sell advertising that maximizes lifetime value.</li>
</ul>
<p>Every channel feeds data to every other channel. Meta creative testing informs Google ad copy. Google search data informs TikTok content strategy. This integrated approach produces results that siloed channel management never can.</p>`
            },
            {
                heading: "Measurement and Attribution That Actually Works",
                body: `<p>In a post-cookie world, attribution is complicated — but it's not impossible. Nativz builds <strong>measurement infrastructure</strong> that goes beyond last-click attribution to give you a real picture of advertising performance:</p>
<ul>
<li><strong>Server-side tracking</strong>: We implement Conversions API (CAPI) for Meta, enhanced conversions for Google, and server-side tracking for accurate data even as browser-based tracking degrades.</li>
<li><strong>Multi-touch attribution</strong>: We use data-driven attribution models that credit every touchpoint in the customer journey, not just the last click.</li>
<li><strong>Incrementality testing</strong>: We run holdout tests and geo-lift studies to measure the true incremental impact of your advertising spend.</li>
<li><strong>Blended ROAS</strong>: We track marketing efficiency ratio (MER) alongside platform-reported ROAS to ensure your total marketing investment is profitable.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Campaign Strategy & Setup", description: "Comprehensive campaign architecture design, audience framework, creative brief, tracking implementation, and platform-specific campaign builds across all active channels." },
            { title: "Creative Production at Volume", description: "10-25 unique ad creatives per campaign per month — video, static, carousel, and UGC-style — with ongoing testing and iteration based on performance data." },
            { title: "Daily Optimization", description: "Active daily management of all campaigns including bid adjustments, budget allocation, audience refinement, and creative rotation based on real-time performance." },
            { title: "Conversion Tracking Infrastructure", description: "Server-side tracking implementation (Meta CAPI, Google enhanced conversions), Google Tag Manager setup, and cross-platform attribution configuration." },
            { title: "Weekly Performance Reports", description: "Weekly KPI dashboards covering spend, ROAS, CPA, CPM, click-through rate, and creative performance rankings with strategic commentary." },
            { title: "Monthly Strategy Reviews", description: "In-depth monthly performance analysis with creative insights, competitive intelligence, budget recommendations, and strategic planning for the month ahead." },
            { title: "Creative Testing Framework", description: "Structured A/B and multivariate testing program for headlines, hooks, formats, and messaging frameworks with documented learnings and iteration protocols." },
        ],
        faqItems: [
            { question: "How much should we spend on paid media?", answer: "The right budget depends on your industry, goals, and current position. Most Nativz clients start with $5,000-$25,000 per month across all platforms, though franchise and e-commerce clients often invest significantly more. We'll recommend a starting budget during our strategy call and scale based on performance." },
            { question: "How quickly do paid media campaigns produce results?", answer: "You'll see initial data within the first 48-72 hours. Meaningful optimization typically takes 2-4 weeks as the algorithms learn from your creative and audience signals. Most clients see consistent, scalable results within 60-90 days of launch." },
            { question: "What makes Nativz different from other paid media agencies?", answer: "Creative volume. Most agencies build a few ad creatives and optimize bids and audiences endlessly. We know that in the Andromeda era, creative is the variable that matters most. We produce 10-25 unique creatives per campaign per month and let the algorithms find the winners." },
            { question: "Do you handle the creative production or do we provide it?", answer: "We handle everything. Our in-house content production team creates all ad creatives — video, static, UGC-style, motion graphics — and delivers them directly into your campaigns. Creative production is baked into our paid media service, not an add-on." },
            { question: "Which advertising platforms do you manage?", answer: "We manage Meta (Facebook & Instagram), Google (Search, Display, Shopping, YouTube, Performance Max), TikTok, LinkedIn, Pinterest, Snapchat, Amazon, CTV/OTT, and programmatic display. Most clients start with 2-3 platforms and expand based on results." },
            { question: "How do you handle iOS privacy changes and cookie deprecation?", answer: "We implement server-side tracking (Meta CAPI, Google enhanced conversions) that captures conversion data directly, bypassing browser limitations. We also use broad targeting strategies and creative-as-targeting to minimize the impact of reduced signal and still drive efficient results." },
            { question: "What reporting do we receive?", answer: "Weekly KPI dashboards, monthly deep-dive strategy reports, and real-time dashboard access. We believe in full transparency — you'll see every dollar spent, every metric tracked, and our strategic rationale for every optimization decision." },
        ],
    }),

    // 3. Content Production
    defineService({
        title: "Content Production",
        slug: "content-production",
        category: "content-production",
        icon: "video-camera",
        shortDescription: "One film day. One month of content. Video, photography, UGC, short-form, and motion graphics produced at creative volume.",
        metaTitle: "Content Production Agency | Nativz",
        metaDescription: "Nativz produces video, photography, UGC, short-form content, and motion graphics at scale. One film day creates a full month of content for organic and paid channels.",
        primaryKeywords: ["content production agency", "video production Dallas", "content creation DFW"],
        minWordCount: 1500,
        relatedServiceSlugs: ["social-media-management", "advertising", "commercial-production"],
        relatedIndustrySlugs: ["restaurant-marketing", "fitness-wellness-marketing", "ecommerce-marketing"],
        content: [
            {
                heading: "One Film Day. One Month of Content.",
                body: `<p>Content production hasn't kept pace with algorithmic demand — until now. Modern social media algorithms reward creative volume: 15-25 unique pieces of content per week across platforms. Producing that manually, one post at a time, is impossible at any reasonable cost.</p>
<p>Nativz solved this with the <strong>Film Day Model</strong>. A single, highly structured production day generates enough raw footage, photography, and creative assets to fuel an entire month of content across every platform you're active on. Our production team shoots with volume in mind — capturing multiple angles, formats, and concepts in a single session.</p>
<p>From that single day, our post-production team produces dozens of unique pieces: Reels, TikToks, YouTube Shorts, carousels, static posts, Story content, and ad creative — each formatted natively for its platform. No recycling. No repurposing the same horizontal video with different crops. Genuinely platform-native content at a pace that feeds the algorithm and outperforms your competition.</p>`
            },
            {
                heading: "Full-Spectrum Production Capabilities",
                body: `<p>Nativz is a full-service content production agency. We don't outsource. We don't subcontract. Every piece of content is produced by our in-house team:</p>
<ul>
<li><strong>Video production</strong>: Brand videos, social content, ad creative, and corporate filmmaking with cinema-grade equipment and professional direction.</li>
<li><strong>Photography</strong>: Product photography, lifestyle shoots, food photography, real estate, and event coverage with post-production editing.</li>
<li><strong>UGC-style content</strong>: Creator-style videos that feel native and authentic — produced by our team, not random influencers. The look and energy of UGC, with the control and consistency of professional production.</li>
<li><strong>Short-form video</strong>: Reels, TikToks, YouTube Shorts — 10+ unique variations from every production day with hook-first editing and trend-responsive creative.</li>
<li><strong>Motion graphics</strong>: Animated explainers, kinetic typography, logo reveals, and dynamic visual assets for social, web, and advertising.</li>
<li><strong>Podcast production</strong>: Recording, editing, show notes, distribution, and repurposing podcast episodes into dozens of social media clips.</li>
<li><strong>Copywriting</strong>: Ad copy, social captions, website content, email campaigns, and brand voice development — all aligned with your content strategy.</li>
</ul>`
            },
            {
                heading: "Content Built for Algorithms, Not Just Audiences",
                body: `<p>Beautiful content that nobody sees is worthless. Every piece of content we produce is built with algorithmic distribution in mind. We study what the algorithms reward — and we produce specifically for those signals:</p>
<ul>
<li><strong>Hook-first editing</strong>: The first 0.5 seconds of every video is engineered to stop the scroll.</li>
<li><strong>Format diversity</strong>: Algorithms reward brands that use multiple formats. We produce video, carousel, static, and interactive content in the right mix.</li>
<li><strong>Platform-native sizing</strong>: 9:16 for Reels, TikTok, and Stories. 1:1 for feeds. 16:9 for YouTube. We don't crop — we shoot and edit for each format.</li>
<li><strong>Engagement triggers</strong>: Captions that prompt saves and shares. Content structures that drive comments. Visual sequences that maximize watch time.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Monthly Film Day", description: "A structured production day capturing all raw footage, photography, and assets needed for a full month of content across your active platforms." },
            { title: "Platform-Native Content Package", description: "15-25+ unique content pieces per week — Reels, TikToks, carousels, static posts, Stories, and YouTube Shorts — each formatted for its platform." },
            { title: "Ad Creative Production", description: "Dedicated ad creative including video ads, static ads, UGC-style ads, and carousel ads for your paid media campaigns." },
            { title: "Post-Production & Editing", description: "Professional editing, color grading, captioning, motion graphics overlays, and sound design for all produced content." },
            { title: "Creative Brief & Shot List", description: "Pre-production planning including creative briefs, shot lists, location scouting, and talent coordination for each film day." },
            { title: "Content Calendar Integration", description: "All produced content organized and tagged for your content calendar with platform-specific captions and posting recommendations." },
        ],
        faqItems: [
            { question: "What is the Film Day Model?", answer: "Our Film Day Model is a highly structured production day designed to capture all the raw footage, photography, and creative assets needed for a full month of content. One day, one team, one location or product — dozens of unique content pieces. It's how we deliver creative volume without creative burnout." },
            { question: "How many content pieces do you produce per month?", answer: "Depending on your plan, we produce 60-100+ unique content pieces per month across your active platforms. Each piece is genuinely unique — not the same content cropped for different platforms." },
            { question: "Do we need to be at the film day?", answer: "We welcome your involvement but don't require it. We handle all pre-production planning, talent direction, and creative decision-making. Many clients simply provide product or location access and let our team handle the rest." },
            { question: "What equipment do you use?", answer: "We shoot with cinema-grade cameras (Sony FX3, Sony A7SIII), professional lighting, gimbal stabilizers, and wireless audio. For UGC-style content, we use iPhone Pro setups with professional audio for an authentic feel with broadcast-quality audio." },
            { question: "Can you produce content for paid ads as well as organic?", answer: "Yes. Our production days capture assets for both organic content and ad creative simultaneously. We produce dedicated ad variations — different hooks, CTAs, and aspect ratios — alongside your organic content calendar." },
        ],
    }),

    // 4. Website Development
    defineService({
        title: "Website Development",
        slug: "website-development",
        category: "website-development",
        icon: "code-bracket",
        shortDescription: "High-performance websites built on modern architecture. Next.js, Shopify, WordPress, headless CMS, and custom web applications.",
        metaTitle: "Website Development Agency | Nativz",
        metaDescription: "Nativz builds high-performance websites on Next.js, Shopify, WordPress, and headless CMS platforms. SEO-first architecture, blazing speed, and conversion-optimized design.",
        primaryKeywords: ["website development agency", "web development Dallas", "Next.js agency"],
        minWordCount: 1500,
        relatedServiceSlugs: ["seo", "branding-design", "artificial-intelligence"],
        relatedIndustrySlugs: ["ecommerce-marketing", "saas-marketing", "professional-services-marketing"],
        content: [
            {
                heading: "Your Website Is Your Most Important Employee",
                body: `<p>Your website works 24/7. It never takes a day off, never calls in sick, and interacts with more people in a single day than your entire sales team does in a month. Yet most businesses treat their website as an afterthought — something they update every three years and forget about in between.</p>
<p>Nativz builds websites that perform like your best employee: <strong>fast, reliable, and constantly generating revenue</strong>. We don't build brochure websites that look pretty and do nothing. We build high-performance digital platforms on modern architecture — Next.js, Shopify, WordPress, headless CMS — engineered for speed, search visibility, and conversion.</p>`
            },
            {
                heading: "Performance-First Architecture",
                body: `<p>Speed isn't a feature — it's the foundation. Google's Core Web Vitals directly impact search rankings and ad quality scores. A <strong>one-second delay</strong> in page load time reduces conversions by 7%. A three-second load time causes 53% of mobile visitors to abandon the page entirely.</p>
<p>Every Nativz website is built performance-first:</p>
<ul>
<li><strong>Static generation</strong>: Pages pre-rendered at build time for instant loading. No server wait time, no database queries on every visit.</li>
<li><strong>Image optimization</strong>: Automatic format conversion (WebP/AVIF), responsive sizing, and lazy loading that eliminates unnecessary bandwidth.</li>
<li><strong>Code splitting</strong>: Only the JavaScript needed for the current page is loaded — not your entire application.</li>
<li><strong>CDN distribution</strong>: Pages served from edge locations closest to your visitors, anywhere in the world.</li>
<li><strong>Core Web Vitals</strong>: Every build is validated against Google's performance metrics — LCP, FID, CLS — before deployment.</li>
</ul>`
            },
            {
                heading: "SEO Built Into the Architecture",
                body: `<p>Most agencies build a website and then try to bolt on SEO after the fact. That's backwards. Nativz integrates SEO into every architectural decision from the start:</p>
<ul>
<li><strong>Semantic HTML</strong>: Proper heading hierarchy, schema markup, and structured data built into every template.</li>
<li><strong>Programmatic sitemaps</strong>: Automatically generated sitemaps that update as content changes — no manual maintenance.</li>
<li><strong>Metadata management</strong>: Dynamic meta titles, descriptions, and Open Graph tags that scale across hundreds of pages.</li>
<li><strong>Internal linking architecture</strong>: Strategic link structures that distribute page authority and guide both users and crawlers.</li>
<li><strong>Crawl budget optimization</strong>: Clean URL structures, proper canonical tags, and efficient robots.txt configurations.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Discovery & Strategy", description: "Comprehensive discovery process including stakeholder interviews, competitive analysis, sitemap architecture, and technical requirements documentation." },
            { title: "UI/UX Design", description: "Custom design system, wireframes, and high-fidelity mockups for all templates and components with mobile-first responsive design." },
            { title: "Development & Build", description: "Full-stack development on your chosen platform — Next.js, Shopify, WordPress, or headless CMS — with SEO-first architecture and performance optimization." },
            { title: "SEO Infrastructure", description: "Technical SEO setup including schema markup, sitemap generation, metadata management, and Core Web Vitals optimization." },
            { title: "QA & Launch", description: "Cross-browser testing, accessibility audit, performance validation, and zero-downtime deployment with post-launch monitoring." },
            { title: "Training & Documentation", description: "CMS training for your team, documentation for content management workflows, and ongoing support options." },
        ],
        faqItems: [
            { question: "Which platform should we build on?", answer: "It depends on your needs. Next.js for maximum performance and SEO (what this site is built on). Shopify for e-commerce. WordPress for content-heavy sites with non-technical editors. Headless CMS for enterprise-scale content operations. We'll recommend the right platform during discovery." },
            { question: "How long does a website project take?", answer: "Most projects take 8-12 weeks from kickoff to launch. Simple landing pages can be delivered in 2-4 weeks. Complex e-commerce builds and custom web applications may take 12-16+ weeks. We'll provide a detailed timeline during the proposal phase." },
            { question: "Do you provide hosting?", answer: "We recommend and configure hosting but don't provide it directly. For Next.js projects, we typically deploy on Vercel. For WordPress, we recommend WP Engine or Kinsta. For Shopify, hosting is included with the platform." },
            { question: "Will our website be mobile-responsive?", answer: "Every website we build is designed mobile-first. That means we design for mobile screens first and scale up to desktop — ensuring an exceptional experience on every device and screen size." },
            { question: "Can you redesign our existing website?", answer: "Yes. We offer full website redesign services including performance audits, UX overhauls, content migration, and platform migration. Whether you're updating your design or moving to a new platform entirely, we handle the complete transition." },
        ],
    }),

    // 5. SEO & Search (NEW parent)
    defineService({
        title: "SEO & Search",
        slug: "seo",
        category: "seo",
        icon: "magnifying-glass",
        shortDescription: "Technical SEO, local SEO, content strategy, link building, and franchise SEO. Search visibility engineered at every level.",
        metaTitle: "SEO Services | Dallas SEO Agency | Nativz",
        metaDescription: "Nativz delivers technical SEO, local SEO, content SEO, link building, and franchise SEO services. Data-driven search engine optimization built for sustainable organic growth.",
        primaryKeywords: ["SEO agency Dallas", "search engine optimization", "SEO services DFW"],
        minWordCount: 2000,
        relatedServiceSlugs: ["aeo", "website-development", "content-production"],
        relatedIndustrySlugs: ["franchise-marketing", "ecommerce-marketing", "restaurant-marketing"],
        content: [
            {
                heading: "SEO in 2025: A Fundamentally Different Game",
                body: `<p>Search engine optimization in 2025 looks nothing like it did five years ago. Google's Search Generative Experience, AI Overviews, and entity-based indexing have transformed how search engines evaluate and rank content. The agencies still chasing keyword density and building PBN links are sending their clients backward.</p>
<p>Nativz approaches SEO as <strong>technical infrastructure + content authority + entity recognition</strong>. We build search visibility that compounds over time — not quick wins that evaporate with the next algorithm update. Our clients see sustainable organic growth because we optimize for how search engines actually work, not how they worked three years ago.</p>`
            },
            {
                heading: "Full-Stack SEO Services",
                body: `<p>Most agencies specialize in one aspect of SEO. Nativz delivers the full stack:</p>
<ul>
<li><strong>Technical SEO</strong>: Site architecture, crawlability, Core Web Vitals, schema markup, and indexation management.</li>
<li><strong>Local SEO</strong>: Google Business Profile optimization, local citations, review management, and map pack strategy.</li>
<li><strong>Content SEO</strong>: Keyword research, topic clustering, editorial strategy, and content optimization for topical authority.</li>
<li><strong>Link Building</strong>: Digital PR, strategic outreach, guest posting, and authority link acquisition.</li>
<li><strong>E-Commerce SEO</strong>: Product page optimization, category architecture, faceted navigation, and conversion-focused content.</li>
<li><strong>Franchise SEO</strong>: Multi-location optimization, tiered BDF programs, and scalable local search strategy for franchise systems.</li>
</ul>`
            },
            {
                heading: "Data-Driven, Not Guesswork",
                body: `<p>Every SEO recommendation we make is backed by data — not opinions, not industry assumptions, not blog posts from 2021. We use enterprise-grade tools (Ahrefs, Screaming Frog, Google Search Console, custom dashboards) to identify exactly where your opportunities are and exactly what it will take to capture them.</p>
<p>Monthly reporting includes <strong>traffic trends, keyword rankings, backlink growth, technical health scores, and revenue attribution</strong>. You'll always know what we're doing, why we're doing it, and what impact it's having on your business.</p>`
            },
        ],
        deliverables: [
            { title: "Technical SEO Audit", description: "Comprehensive site audit covering crawlability, indexation, Core Web Vitals, schema markup, and technical infrastructure with prioritized recommendations." },
            { title: "Keyword & Content Strategy", description: "Data-driven keyword research, topic clustering, and editorial calendar that builds topical authority in your target categories." },
            { title: "On-Page Optimization", description: "Title tags, meta descriptions, heading structure, internal linking, and content optimization for all target pages." },
            { title: "Link Building Campaigns", description: "Monthly link acquisition through digital PR, outreach, and strategic placements that build domain authority." },
            { title: "Local SEO Management", description: "Google Business Profile optimization, local citations, review management, and map pack strategy for each business location." },
            { title: "Monthly SEO Reporting", description: "Transparent reporting on rankings, traffic, backlinks, technical health, and revenue attribution with executive-level summaries." },
        ],
        faqItems: [
            { question: "How long does SEO take to show results?", answer: "Most clients see measurable improvements in 3-6 months, with significant traffic growth by 6-12 months. SEO is a compounding strategy — early gains build foundations for accelerating returns. Quick wins (technical fixes, GBP optimization) often show results in weeks." },
            { question: "Do you guarantee first page rankings?", answer: "No reputable agency guarantees specific rankings. Google's algorithm considers hundreds of factors, many outside any agency's control. What we guarantee is a transparent, data-driven process, measurable progress, and a clear ROI framework." },
            { question: "How is your SEO different from other agencies?", answer: "We integrate SEO into every marketing channel — not as a siloed service. Our content production, advertising, and website development teams work with SEO data to ensure every piece of content and every page is optimized for search from inception." },
            { question: "Do you work with businesses outside of Dallas?", answer: "Yes. While we're based in DFW, we work with clients nationwide. Our local SEO services work for any market, and our technical, content, and link building services are entirely location-independent." },
            { question: "What tools do you use for SEO?", answer: "Ahrefs for keyword research and backlink analysis, Screaming Frog for technical audits, Google Search Console for performance data, custom dashboards for reporting, and various proprietary tools for competitive analysis." },
        ],
    }),

    // 6. Answer Engine Optimization
    defineService({
        title: "Answer Engine Optimization",
        slug: "aeo",
        category: "aeo",
        icon: "cpu-chip",
        shortDescription: "Get discovered by ChatGPT, Google AI Overviews, Perplexity, and every AI-powered search engine. The new frontier of discoverability.",
        metaTitle: "Answer Engine Optimization (AEO) Agency | Nativz",
        metaDescription: "Nativz optimizes your brand for AI-powered search: ChatGPT, Google AI Overviews, Perplexity, and beyond. AEO is the next evolution of SEO, and we are building it.",
        primaryKeywords: ["AEO agency", "answer engine optimization", "AI search optimization"],
        minWordCount: 2000,
        relatedServiceSlugs: ["seo", "artificial-intelligence", "content-production"],
        relatedIndustrySlugs: ["saas-marketing", "professional-services-marketing", "ecommerce-marketing"],
        content: [
            {
                heading: "Search Is Splitting in Two — Traditional and AI-Powered",
                body: `<p>In 2025, millions of potential customers are bypassing Google entirely. They ask ChatGPT for recommendations. They use Perplexity for research. They rely on Google AI Overviews for instant answers. <strong>Answer Engine Optimization (AEO)</strong> is the discipline of ensuring your brand appears in these AI-generated responses.</p>
<p>This isn't a hypothetical future — it's happening now. Over 100 million people use ChatGPT weekly. Google AI Overviews appear on 80%+ of informational queries. Perplexity is the fastest-growing search engine in history. If your brand isn't optimized for these AI answer engines, you're invisible to a rapidly growing segment of searchers.</p>`
            },
            {
                heading: "How AEO Works",
                body: `<p>AI answer engines don't index pages like Google. They synthesize information from across the web and cite sources that demonstrate <strong>authority, clarity, and structured expertise</strong>. AEO ensures your brand is the one being cited:</p>
<ul>
<li><strong>Entity establishment</strong>: Building your brand's entity graph so AI models recognize you as an authority in your category.</li>
<li><strong>Structured content</strong>: Creating content formats that AI models can easily parse, summarize, and cite — JSON-LD, FAQ schemas, clear heading hierarchies.</li>
<li><strong>llms.txt implementation</strong>: Deploying machine-readable files that give AI crawlers direct access to your brand's key information.</li>
<li><strong>Citation optimization</strong>: Identifying how AI models currently reference (or don't reference) your brand and systematically improving your citation rate.</li>
<li><strong>Cross-platform monitoring</strong>: Tracking your brand's visibility across ChatGPT, Perplexity, Google AI Overviews, Claude, and emerging AI search tools.</li>
</ul>`
            },
            {
                heading: "Nativz: The First AEO Agency",
                body: `<p>Most agencies haven't even heard of Answer Engine Optimization. Nativz has been researching and implementing AEO strategies since 2024 — before most agencies knew AI search was a category. This website includes an llms.txt file, structured data optimized for AI parsing, and content architecture designed to be cited by large language models.</p>
<p>We're not retrofitting SEO tactics for AI. We're building the AEO playbook from the ground up — and our clients are first movers in a space that will define discoverability for the next decade.</p>`
            },
        ],
        deliverables: [
            { title: "AEO Audit & Baseline", description: "Comprehensive audit of your current visibility across ChatGPT, Perplexity, Google AI Overviews, and Claude — establishing a baseline for improvement." },
            { title: "Entity & Authority Strategy", description: "Building your brand's entity graph and topical authority signals to ensure AI models recognize you as a category leader." },
            { title: "llms.txt & Structured Data", description: "Implementing llms.txt files, FAQ schemas, and structured content formats that make your brand machine-readable for AI crawlers." },
            { title: "Content Optimization for AI Citation", description: "Restructuring and creating content specifically designed to be cited in AI-generated answers across all major platforms." },
            { title: "Monthly AEO Monitoring", description: "Tracking your brand's citation rate, competitor positioning, and AI search landscape changes with actionable monthly reports." },
        ],
        faqItems: [
            { question: "What is Answer Engine Optimization?", answer: "AEO is the practice of optimizing your brand's content, structure, and authority signals to appear in AI-generated search responses — ChatGPT, Google AI Overviews, Perplexity, Claude, and other AI-powered search tools. It's the next evolution of SEO." },
            { question: "Does AEO replace SEO?", answer: "No. AEO complements SEO. Traditional search is still the largest traffic source for most businesses. But AI-powered search is growing rapidly, and brands that optimize for both will have a significant competitive advantage." },
            { question: "How do you measure AEO success?", answer: "We track brand citation rates in AI responses, the frequency and accuracy of your brand's mentions, your visibility compared to competitors in AI search, and the traffic and leads generated from AI-powered discovery channels." },
            { question: "Is AEO only for tech companies?", answer: "No. Any business that wants to be discovered when people use AI tools for research benefits from AEO — restaurants, professional services, e-commerce, healthcare, franchises, and more. AI search is category-agnostic." },
        ],
    }),

    // 7. Branding & Design
    defineService({
        title: "Branding & Design",
        slug: "branding-design",
        category: "branding-design",
        icon: "paint-brush",
        shortDescription: "Brand identity, strategy, graphic design, packaging, and UI/UX. Visual systems that scale across every channel.",
        metaTitle: "Branding & Design Agency | Nativz",
        metaDescription: "Nativz creates brand identities, visual design systems, packaging, and UI/UX experiences. Strategic branding that resonates across digital and physical touchpoints.",
        primaryKeywords: ["branding agency Dallas", "brand identity design", "graphic design agency DFW"],
        minWordCount: 1500,
        relatedServiceSlugs: ["website-development", "content-production", "commercial-production"],
        relatedIndustrySlugs: ["ecommerce-marketing", "restaurant-marketing", "retail-marketing"],
        content: [
            {
                heading: "Brand Is Not a Logo — It's a System",
                body: `<p>Most businesses have a logo. Very few have a <strong>brand</strong>. A brand is a complete visual and verbal system — logo, typography, color palette, voice, messaging, photography style, and design patterns — that creates instant recognition and emotional connection across every touchpoint.</p>
<p>Nativz builds brand systems, not just logos. We create identities that work consistently across social media, websites, packaging, signage, advertising, and every channel your customers interact with. The result is a brand that feels cohesive, premium, and unmistakably yours.</p>`
            },
            {
                heading: "Strategy Before Aesthetics",
                body: `<p>Beautiful design without strategy is just decoration. Before we touch a single pixel, we build your brand's strategic foundation:</p>
<ul>
<li><strong>Brand positioning</strong>: Where you sit in the market relative to competitors and in the minds of your target audience.</li>
<li><strong>Messaging framework</strong>: Your core value proposition, messaging pillars, and the language that resonates with your audience.</li>
<li><strong>Audience research</strong>: Deep understanding of who your customers are, what they care about, and how they make decisions.</li>
<li><strong>Competitive analysis</strong>: Visual and strategic audit of your competitive landscape to identify differentiation opportunities.</li>
</ul>
<p>This strategic foundation ensures every design decision serves a business purpose — not just an aesthetic one.</p>`
            },
        ],
        deliverables: [
            { title: "Brand Strategy Document", description: "Comprehensive brand strategy including positioning, messaging framework, audience profiles, and competitive differentiation." },
            { title: "Visual Identity System", description: "Logo, typography, color palette, iconography, and visual guidelines that create consistent brand recognition." },
            { title: "Brand Guidelines", description: "Detailed brand guidelines document covering proper usage, do's and don'ts, templates, and application examples." },
            { title: "Design Collateral", description: "Business cards, presentation templates, social media templates, email signatures, and essential brand assets." },
            { title: "Implementation Support", description: "Guidance and assets for rolling out your new brand across website, social media, signage, and all customer touchpoints." },
        ],
        faqItems: [
            { question: "How long does a branding project take?", answer: "Full brand identity projects typically take 6-10 weeks from discovery to final delivery. Brand strategy alone can be completed in 3-4 weeks. Logo refreshes and smaller projects may take 2-4 weeks." },
            { question: "Do you do brand refreshes or only new brands?", answer: "Both. We create new brand identities from scratch and refresh existing brands that need modernization. A brand refresh preserves your equity while updating your visual system for current standards." },
            { question: "What's included in brand guidelines?", answer: "Our brand guidelines include logo usage rules, color specifications (Hex, RGB, CMYK, Pantone), typography selections with hierarchy, photography style direction, iconography, design patterns, and application examples across all major channels." },
            { question: "Can you design packaging too?", answer: "Yes. We offer full packaging design services — from concept to production-ready files — as part of our branding services or as standalone projects." },
        ],
    }),

    // 8. Commercial Production
    defineService({
        title: "Commercial Production",
        slug: "commercial-production",
        category: "commercial-production",
        icon: "film",
        shortDescription: "Brand films, TV commercials, product videos, testimonials, event coverage, and drone videography. Full-scale production.",
        metaTitle: "Commercial Video Production | Nativz",
        metaDescription: "Nativz produces brand films, TV commercials, product videos, testimonials, and aerial drone content. Full-scale commercial production for brands that demand excellence.",
        primaryKeywords: ["commercial production Dallas", "video production agency", "TV commercial production DFW"],
        minWordCount: 1500,
        relatedServiceSlugs: ["content-production", "branding-design", "advertising"],
        relatedIndustrySlugs: ["restaurant-marketing", "hospitality-marketing", "automotive-marketing"],
        content: [
            {
                heading: "Commercial Production for Brands That Demand Excellence",
                body: `<p>There's a category of video that social content can't replace — the cinematic brand film, the broadcast-ready TV commercial, the product showcase that makes viewers stop and stare. <strong>Commercial production</strong> is the craft of creating these premium visual assets.</p>
<p>Nativz produces full-scale commercial content: brand films, TV commercials, product videos, testimonial interviews, event coverage, and aerial drone content. Our production team brings cinema-grade equipment, professional direction, and the creative vision to produce content that elevates your brand above the noise.</p>`
            },
            {
                heading: "Our Production Capabilities",
                body: `<ul>
<li><strong>Brand films</strong>: Narrative-driven stories that communicate your mission, culture, and why you exist.</li>
<li><strong>TV commercials</strong>: Broadcast-quality spots for television, CTV, and digital video platforms.</li>
<li><strong>Product videos</strong>: Cinematic product showcases, demos, and feature highlights that drive purchase decisions.</li>
<li><strong>Testimonials</strong>: Professional customer story videos that build trust through authentic social proof.</li>
<li><strong>Event coverage</strong>: Multi-camera event documentation, highlight reels, and recap content for conferences, launches, and brand events.</li>
<li><strong>Drone videography</strong>: FAA-licensed aerial cinematography for real estate, events, construction progress, and brand content.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Pre-Production Package", description: "Creative brief, storyboard, shot list, location scouting, talent casting, and production schedule for your project." },
            { title: "Production Day(s)", description: "Full production with cinema-grade equipment, professional crew, director, and all necessary gear and talent." },
            { title: "Post-Production", description: "Professional editing, color grading, sound design, music licensing, and motion graphics for your final deliverables." },
            { title: "Multi-Format Delivery", description: "Final content delivered in all required formats — broadcast specs, digital/social formats, and web-optimized versions." },
            { title: "Raw Footage Archive", description: "All raw footage delivered in organized project folders for your archives and future use." },
        ],
        faqItems: [
            { question: "What's the difference between content production and commercial production?", answer: "Content production focuses on volume — many pieces from a single production day for social media and advertising. Commercial production focuses on craft — fewer pieces with higher production value for brand films, TV spots, and premium showcases." },
            { question: "How much does commercial production cost?", answer: "Single-day commercial shoots typically range from $5,000-$25,000+ depending on crew size, talent, locations, and post-production complexity. We provide detailed estimates after reviewing your creative brief." },
            { question: "Do you shoot outside of Dallas?", answer: "Yes. While we're based in DFW, we produce commercial content nationwide. We handle all travel logistics, crew sourcing for remote locations, and location permits." },
            { question: "Can you create content for both TV and digital?", answer: "Yes. We produce content that meets broadcast specifications and simultaneously deliver digital formats for social media, YouTube, and CTV/OTT platforms. One shoot, multiple output formats." },
        ],
    }),

    // 9. Email Marketing & Automation (NEW parent)
    defineService({
        title: "Email Marketing & Automation",
        slug: "email-marketing",
        category: "email-marketing",
        icon: "envelope",
        shortDescription: "Email campaigns, marketing automation, drip sequences, and SMS marketing. Nurture leads and drive conversions on autopilot.",
        metaTitle: "Email Marketing & Automation Agency | Nativz",
        metaDescription: "Nativz builds email marketing campaigns, marketing automation workflows, drip sequences, and SMS programs that nurture, convert, and retain customers at scale.",
        primaryKeywords: ["email marketing agency", "marketing automation agency", "email campaign management"],
        minWordCount: 1500,
        relatedServiceSlugs: ["advertising", "artificial-intelligence", "website-development"],
        relatedIndustrySlugs: ["ecommerce-marketing", "franchise-marketing", "saas-marketing"],
        content: [
            {
                heading: "The Highest-ROI Channel in Marketing",
                body: `<p>Email marketing delivers an average ROI of <strong>$36 for every $1 spent</strong> — higher than social media, paid advertising, and content marketing combined. It's the only channel where you own the audience, control the message, and reach people directly in their inbox.</p>
<p>Yet most businesses treat email as an afterthought — blasting monthly newsletters with no strategy, no segmentation, and no automation. Nativz builds email marketing programs that work intelligently: right message, right person, right time, at scale.</p>`
            },
            {
                heading: "Beyond Newsletters: Full Marketing Automation",
                body: `<p>Modern email marketing isn't just campaigns — it's intelligent automation that works 24/7:</p>
<ul>
<li><strong>Welcome sequences</strong>: Convert new subscribers into engaged prospects with automated onboarding flows.</li>
<li><strong>Nurture drips</strong>: Move leads through your sales funnel with timed, personalized content sequences.</li>
<li><strong>Abandoned cart recovery</strong>: Recapture lost e-commerce revenue with triggered reminder emails.</li>
<li><strong>Post-purchase flows</strong>: Build loyalty, drive repeat purchases, and generate reviews automatically after every sale.</li>
<li><strong>Re-engagement campaigns</strong>: Win back inactive subscribers with targeted reactivation sequences.</li>
<li><strong>SMS integration</strong>: Layer text message marketing alongside email for time-sensitive offers and high-urgency communications.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Email Strategy & Audit", description: "Comprehensive audit of your current email program with strategic roadmap for list growth, segmentation, and automation." },
            { title: "Template Design", description: "Custom, responsive email templates designed for your brand with mobile-first layouts and tested across all major email clients." },
            { title: "Automation Workflows", description: "Complete automation setup — welcome series, nurture sequences, cart abandonment, post-purchase flows, and re-engagement campaigns." },
            { title: "Campaign Management", description: "Ongoing email campaign strategy, copywriting, design, A/B testing, and send management for your marketing calendar." },
            { title: "List Growth Strategy", description: "Opt-in forms, lead magnets, landing pages, and acquisition strategies to build a high-quality, engaged subscriber list." },
            { title: "Performance Reporting", description: "Monthly reporting on open rates, click rates, conversion rates, revenue attribution, and list health with optimization recommendations." },
        ],
        faqItems: [
            { question: "Which email platform do you recommend?", answer: "Klaviyo for e-commerce. HubSpot for B2B and service businesses. ActiveCampaign for flexibility and advanced automation. Mailchimp for simpler needs. We recommend based on your business model, integrations, and growth trajectory." },
            { question: "How often should we email our list?", answer: "Most businesses benefit from 2-4 emails per week. The right frequency depends on your audience, industry, and content quality. We test and optimize send frequency as part of our ongoing management." },
            { question: "Can you help us grow our email list?", answer: "Yes. We design opt-in forms, create lead magnets, build dedicated landing pages, and implement acquisition strategies that grow your list with qualified subscribers — not just raw numbers." },
            { question: "Do you handle SMS marketing too?", answer: "Yes. We integrate SMS into your marketing automation alongside email. Text message campaigns for time-sensitive offers, appointment reminders, flash sales, and high-urgency communications." },
        ],
    }),

    // 10. Artificial Intelligence
    defineService({
        title: "AI Marketing Services",
        slug: "artificial-intelligence",
        category: "artificial-intelligence",
        icon: "sparkles",
        shortDescription: "AI-assisted content production, ad creative generation, predictive analytics, automation workflows, chatbots, and AI strategy consulting.",
        metaTitle: "AI Marketing Services | Nativz",
        metaDescription: "Nativz integrates artificial intelligence across every marketing workflow: content production, ad creative, analytics, automation, chatbots, and strategic AI consulting.",
        primaryKeywords: ["AI marketing agency", "artificial intelligence marketing", "AI-powered marketing"],
        minWordCount: 2000,
        relatedServiceSlugs: ["content-production", "advertising", "seo"],
        relatedIndustrySlugs: ["saas-marketing", "ecommerce-marketing", "franchise-marketing"],
        content: [
            {
                heading: "AI Isn't the Future of Marketing — It's the Present",
                body: `<p>Artificial intelligence has already transformed how marketing works. The question isn't whether to adopt AI — it's <strong>how to integrate it effectively</strong> without sacrificing quality, authenticity, or strategic thinking.</p>
<p>Nativz doesn't treat AI as a gimmick. We integrate AI into every marketing workflow where it creates genuine leverage: content production, ad creative generation, predictive analytics, automation workflows, chatbot development, and strategic consulting. The result is marketing that moves faster, scales further, and performs better — while maintaining the human creativity and strategic depth that AI alone cannot provide.</p>`
            },
            {
                heading: "How We Use AI Across Marketing",
                body: `<ul>
<li><strong>Content production</strong>: AI-assisted ideation, scriptwriting, editing, and distribution optimization that amplifies human creativity.</li>
<li><strong>Ad creative</strong>: AI-generated variations — background swaps, copy testing, hook generation — that produce 10-25 unique creatives per campaign.</li>
<li><strong>Predictive analytics</strong>: Pattern recognition, performance forecasting, and data-driven optimization that identifies winning strategies before competitors.</li>
<li><strong>Marketing automation</strong>: AI-powered workflows with n8n, Make, and Zapier that automate lead scoring, CRM enrichment, and reporting.</li>
<li><strong>Chatbots</strong>: Custom AI chatbots for customer service, lead qualification, appointment booking, and conversational commerce.</li>
<li><strong>SEO & AEO</strong>: AI-driven keyword research, programmatic SEO, and Answer Engine Optimization for AI-powered search visibility.</li>
</ul>`
            },
            {
                heading: "AI + Human: The Nativz Approach",
                body: `<p>We don't replace human creativity with AI. We <strong>amplify human creativity with AI</strong>. Our creative team uses AI to move faster, test more variations, and produce at the volume that modern algorithms demand — while maintaining the strategic thinking, brand sensitivity, and creative quality that AI alone cannot deliver.</p>
<p>Every AI-generated element is reviewed, refined, and approved by our human team before it ships. The result is work that feels human, performs algorithmically, and scales economically.</p>`
            },
        ],
        deliverables: [
            { title: "AI Integration Audit", description: "Assessment of your current marketing workflows and identification of high-impact AI integration opportunities." },
            { title: "AI-Assisted Content Production", description: "AI-amplified content workflows for faster ideation, scripting, editing, and distribution across all content types." },
            { title: "AI Ad Creative Generation", description: "AI-powered creative variations — background swaps, copy testing, format variations — that multiply your creative output." },
            { title: "Automation Workflow Design", description: "Custom AI automation workflows using n8n, Make, or Zapier for lead scoring, CRM enrichment, reporting, and operational tasks." },
            { title: "AI Chatbot Development", description: "Custom AI chatbots for your website or messaging platforms — trained on your data, designed for your use case." },
            { title: "AI Strategy Consulting", description: "Strategic roadmap for AI adoption across your organization — readiness assessment, tool recommendations, and implementation planning." },
        ],
        faqItems: [
            { question: "Will AI replace our marketing team?", answer: "No. AI amplifies your team's capabilities. It handles repetitive, data-intensive tasks so your team can focus on strategy, creativity, and relationship building. Think of AI as a force multiplier, not a replacement." },
            { question: "Which AI tools do you use?", answer: "We use a range of AI tools depending on the task: GPT-4 and Claude for content, Midjourney and DALL-E for visual generation, custom fine-tuned models for brand-specific applications, and n8n/Make for automation workflows." },
            { question: "Is AI content detectable?", answer: "Poorly implemented AI content is detectable and ineffective. Our approach uses AI for acceleration and variation, not wholesale generation. Every piece is human-reviewed and refined. The result reads as human-created because it is — AI just made the process faster." },
            { question: "How do we get started with AI marketing?", answer: "We start with an AI Integration Audit — assessing your current workflows, identifying high-impact opportunities, and creating a prioritized implementation roadmap. Most clients see their first AI-powered workflows live within 2-4 weeks." },
        ],
    }),
];

// ============================================================
// SUB-SERVICE PAGES
// ============================================================

export const subServices: ServicePage[] = [
    // --- Social Media Management Sub-Services (8) ---
    defineService({
        title: "Facebook Social Media Management",
        slug: "facebook",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "Strategic Facebook management built for the Andromeda algorithm. Content, community, and conversion optimization.",
        metaTitle: "Facebook Social Media Management Agency | Nativz",
        metaDescription: "Nativz manages Facebook pages with Andromeda-optimized creative volume, community engagement, and conversion-focused content strategies.",
        primaryKeywords: ["facebook management agency", "facebook marketing Dallas"],
        minWordCount: 1500,
        content: [
            {
                heading: "Facebook After Andromeda: A New Playbook",
                body: `<p>Facebook is no longer a platform where you can post a link and expect organic reach. Andromeda changed everything by prioritizing <strong>content diversity</strong> and <strong>engagement velocity</strong> over page follower counts. The brands winning on Facebook in 2025 and beyond are producing 10+ unique content pieces per week, not 3 polished posts.</p>
<p>Nativz builds Facebook strategies around this new reality. We create content engines that produce Reels, carousels, text posts, Stories, and community-driven content at the volume Andromeda rewards — while maintaining the quality your brand demands.</p>
<p>Our Facebook management goes beyond posting. We optimize your page for conversion, manage your community, and build Facebook Group strategies that create owned audiences you can activate anytime — without paying for reach.</p>`
            },
            {
                heading: "Our Facebook Management Methodology",
                body: `<p>Every Facebook engagement begins with a comprehensive audit of your current page performance, audience demographics, and competitive landscape. From there, we build a strategy around three pillars:</p>
<ul>
<li><strong>Content Engine</strong>: We plan, produce, and publish 12-20 unique pieces of content per week, mixing Reels, static posts, carousels, Stories, and live videos to satisfy Andromeda's appetite for format diversity.</li>
<li><strong>Community Architecture</strong>: We build and moderate Facebook Groups, manage event pages, and create community touchpoints that transform followers into advocates.</li>
<li><strong>Conversion Optimization</strong>: Every piece of content maps to a business objective. We optimize for DMs, link clicks, and lead form completions — not just vanity metrics.</li>
</ul>
<p>We also integrate your Facebook organic strategy with your paid media campaigns when applicable, ensuring your content and advertising work in concert rather than in silos.</p>`
            },
        ],
        deliverables: [
            { title: "Weekly Content Production", description: "12-20 unique Facebook posts per week including Reels, carousels, static posts, and Stories optimized for Andromeda's content diversity signals." },
            { title: "Community Management", description: "Daily monitoring and response management for comments, DMs, reviews, and mentions with defined SLA response windows." },
            { title: "Facebook Group Strategy", description: "Group creation, moderation, and content strategy that builds owned community audiences around your brand." },
            { title: "Monthly Performance Report", description: "Detailed analytics covering reach, engagement, page growth, content performance rankings, and strategic recommendations." },
            { title: "Competitive Intelligence", description: "Monthly benchmarking against key competitors including content strategy analysis, engagement rate comparisons, and opportunity identification." },
        ],
        faqItems: [
            { question: "Is Facebook still worth investing in for businesses?", answer: "Absolutely. Facebook remains the largest social media platform with nearly 3 billion monthly active users. The key difference is that organic success now requires creative volume and community building rather than the old 'post and pray' approach. Brands that adapted to Andromeda are seeing better organic reach than ever." },
            { question: "How does Andromeda affect Facebook marketing?", answer: "Andromeda prioritizes content diversity, engagement velocity, and freshness. It evaluates content across 1,000+ ranking signals and distributes it to micro-audiences before deciding on broader reach. This means brands need more unique content pieces per week and must vary their formats to maximize distribution." },
            { question: "Do you manage Facebook advertising as well?", answer: "Facebook organic management and Facebook advertising (Meta Ads) are separate services. However, we strongly recommend integrating them. Your organic content feeds your paid strategy with creative testing data, and your paid campaigns amplify your best-performing organic content." },
            { question: "How do you handle negative comments or reviews?", answer: "We have documented escalation procedures for negative engagement. Minor complaints are addressed promptly with empathetic, on-brand responses. Serious issues are escalated to your team with recommended responses. We never delete negative comments unless they violate community guidelines — transparency builds trust." },
        ],
    }),
    defineService({
        title: "Instagram Social Media Management",
        slug: "instagram",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "Instagram management: Reels, Stories, Feed, and DM strategy built for discovery and engagement.",
        metaTitle: "Instagram Social Media Management Agency | Nativz",
        metaDescription: "Nativz delivers Instagram management with Reels-first strategy, feed curation, Stories planning, and community building for maximum organic reach.",
        primaryKeywords: ["instagram management agency", "instagram marketing"],
        minWordCount: 1500,
        content: [
            {
                heading: "Instagram in 2025: Reels-First, Everything Else Second",
                body: `<p>Instagram's algorithm has made one thing abundantly clear: <strong>Reels drive discovery, everything else drives retention</strong>. Brands that treat Instagram as a static photo-sharing platform are invisible. Brands that embrace Reels-first strategy are appearing in Explore feeds of users who have never heard of them.</p>
<p>Nativz builds Instagram strategies around this hierarchy. Reels are the engine that brings new eyes to your brand. Carousels are the content that earns saves and shares. Stories are the touchpoint that keeps your existing audience engaged daily. Together, they form a complete Instagram ecosystem.</p>
<p>Our approach produces 15-20 unique Instagram content pieces per week — a mix of Reels, carousels, static feed posts, and Stories. Every piece is designed for Instagram specifically, not repurposed from other platforms. That distinction is what separates brands that grow from brands that plateau.</p>`
            },
            {
                heading: "Beyond Vanity Metrics: Instagram That Drives Business",
                body: `<p>Follower counts are a distraction. The metrics that matter on Instagram are <strong>reach rate, saves, shares, profile visits, and link clicks</strong>. These are the signals that indicate your content is resonating and driving people toward your business.</p>
<p>Nativz optimizes for these signals through:</p>
<ul>
<li><strong>Hook optimization</strong>: The first 0.5 seconds of every Reel and the first slide of every carousel are designed to stop the scroll. We test multiple hooks per concept to find what resonates.</li>
<li><strong>Save-worthy content</strong>: Carousel tutorials, infographics, and reference posts that users bookmark for later — giving your content a long shelf life in the algorithm.</li>
<li><strong>DM strategy</strong>: We use call-to-actions that drive comments and DMs, turning engagement into conversations and conversations into leads.</li>
<li><strong>Hashtag architecture</strong>: Research-backed hashtag sets organized by reach tier, rotated strategically to maximize discoverability without triggering shadowban signals.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Reels Production", description: "8-12 original Reels per month with platform-native editing, trending audio integration, and hook-optimized openings for maximum reach." },
            { title: "Feed Content", description: "Curated mix of carousels, static posts, and branded graphics designed for saves, shares, and visual brand consistency." },
            { title: "Stories Strategy", description: "Daily Stories content including polls, questions, behind-the-scenes, and engagement stickers to maintain top-of-mind presence." },
            { title: "DM & Comment Management", description: "Active engagement management with response SLAs, proactive outreach, and lead qualification through Instagram Direct." },
            { title: "Monthly Growth Report", description: "Analytics covering reach rate, engagement rate, Reels performance, follower demographics, and content strategy adjustments." },
        ],
        faqItems: [
            { question: "How many Reels do you create per month?", answer: "We typically produce 8-12 original Reels per month, depending on your plan. Each Reel is shot and edited specifically for Instagram — vertical format, native editing style, trending audio, and hook-optimized openings. We don't repurpose TikToks and slap them on Instagram." },
            { question: "Do you handle Instagram DMs?", answer: "Yes. DM management is a core part of our Instagram service. We respond to incoming messages, manage comment threads, and implement DM automation for common inquiries. High-intent messages are flagged and routed to your sales team." },
            { question: "Can you help with Instagram Shopping?", answer: "Absolutely. We set up and manage Instagram Shopping catalogs, tag products in posts and Reels, and create shoppable content strategies for e-commerce brands. We integrate this with your broader paid media and organic strategy." },
            { question: "How do you avoid Instagram shadowbans?", answer: "We follow strict best practices: no banned hashtag sets, no engagement pod behavior, no third-party automation tools, and diversified content formats. Our hashtag research specifically excludes known shadowban triggers, and we rotate sets regularly to maintain algorithmic freshness." },
            { question: "What kind of growth can we expect?", answer: "Organic Instagram growth depends on your starting point, industry, and content investment level. Most clients see 20-40% increases in reach within the first 60 days and meaningful follower growth within 90 days. We set specific, measurable KPIs during onboarding — we don't make unrealistic promises." },
        ],
    }),
    defineService({
        title: "LinkedIn Social Media Management",
        slug: "linkedin",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "LinkedIn management for B2B brands: thought leadership content, employee advocacy, and lead generation.",
        metaTitle: "LinkedIn Social Media Management Agency | Nativz",
        metaDescription: "Nativz builds LinkedIn presence through thought leadership content, employee advocacy programs, and B2B lead generation strategies.",
        primaryKeywords: ["linkedin management agency", "B2B social media"],
        minWordCount: 1500,
        content: [
            {
                heading: "LinkedIn: The Most Underutilized B2B Channel",
                body: `<p>LinkedIn's organic reach is where Facebook's was in 2015 — and most B2B brands are squandering it. While competitors post stale corporate updates and press releases, the brands winning on LinkedIn are producing <strong>authentic, personality-driven thought leadership content</strong> that the algorithm distributes to thousands of decision-makers for free.</p>
<p>Nativz builds LinkedIn strategies for companies and their executives. We don't write generic corporate posts. We craft content that positions your leadership team as industry authorities, drives inbound pipeline, and builds the kind of brand awareness that makes cold outreach unnecessary.</p>
<p>The LinkedIn algorithm rewards consistency, engagement velocity in the first 60 minutes, and content formats like document carousels and newsletters. We engineer every post around these signals.</p>`
            },
            {
                heading: "Executive Thought Leadership at Scale",
                body: `<p>The most powerful asset on LinkedIn isn't your company page — it's the personal profiles of your leadership team. Executives with active LinkedIn presences generate <strong>3-5x more engagement</strong> than company pages, and their content appears directly in the feeds of decision-makers.</p>
<p>Nativz runs full-service executive LinkedIn programs:</p>
<ul>
<li><strong>Content ghostwriting</strong>: We interview your executives weekly and transform their insights into compelling LinkedIn posts, articles, and newsletters.</li>
<li><strong>Employee advocacy programs</strong>: We create shareable content for your broader team, amplifying reach through authentic employee voices.</li>
<li><strong>Engagement strategy</strong>: We manage comment responses, proactive engagement on industry conversations, and strategic connection building.</li>
<li><strong>LinkedIn Newsletter management</strong>: We build and distribute LinkedIn newsletters that create a subscriber base of qualified prospects.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Company Page Content", description: "5-8 company page posts per week including thought leadership, company culture, industry commentary, and employee spotlights." },
            { title: "Executive Ghostwriting", description: "3-5 personal profile posts per week per executive, based on weekly strategy calls capturing their unique perspectives and expertise." },
            { title: "Employee Advocacy Program", description: "Shareable content toolkit for your team with pre-written posts, talking points, and guidelines for authentic amplification." },
            { title: "LinkedIn Newsletter", description: "Monthly or bi-weekly LinkedIn Newsletter creation, distribution, and subscriber growth strategy for your company page or executive profiles." },
            { title: "Engagement & Lead Routing", description: "Active comment management, strategic engagement on prospect content, and routing of inbound leads and opportunities to your sales team." },
        ],
        faqItems: [
            { question: "Should we focus on our company page or personal profiles?", answer: "Both, but personal profiles first. Executive profiles consistently outperform company pages in reach and engagement because LinkedIn's algorithm favors people over brands. We recommend building executive thought leadership as the primary engine and using the company page for brand validation and employee content." },
            { question: "How do you create authentic content for our executives?", answer: "Weekly 20-minute strategy calls with each executive. We ask questions, capture their genuine perspectives, and craft posts in their voice. Over time, we develop a content voice guide for each executive that allows us to produce content independently while maintaining authenticity." },
            { question: "Can LinkedIn drive actual leads for B2B companies?", answer: "LinkedIn is the single most effective organic B2B lead generation platform. Consistent thought leadership content positions your team as authorities, which drives inbound connection requests, DMs, and direct inquiries. We've seen clients reduce their cost per qualified lead by 40-60% by replacing cold outreach with inbound LinkedIn strategy." },
            { question: "How often should we post on LinkedIn?", answer: "For company pages, 5-8 posts per week. For executive profiles, 3-5 posts per week. LinkedIn rewards consistency, and the algorithm gives preference to accounts that maintain regular posting cadences. We handle everything — you just show up for the weekly strategy call." },
        ],
    }),
    defineService({
        title: "TikTok Social Media Management",
        slug: "tiktok",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "TikTok management: trend-driven content, creator-style production, and algorithm-optimized posting strategy.",
        metaTitle: "TikTok Social Media Management Agency | Nativz",
        metaDescription: "Nativz manages TikTok presence with trend-driven, creator-style content at volume. Algorithm-optimized posting for maximum organic reach and virality.",
        primaryKeywords: ["tiktok management agency", "tiktok marketing Dallas"],
        minWordCount: 1500,
        content: [
            {
                heading: "TikTok Isn't Just for Gen Z Anymore",
                body: `<p>TikTok is not a trend — it is the future of content distribution. With over 1.5 billion monthly active users spanning every demographic, TikTok has become the <strong>discovery engine</strong> of the internet. Users don't search Google. They search TikTok. Users don't browse websites. They find brands through their For You Page.</p>
<p>The TikTok algorithm is the most sophisticated content distribution system ever built. It doesn't care about follower counts. It cares about <strong>watch time, completion rate, engagement, and content relevance</strong>. A brand-new account with zero followers can reach 100,000 users on its first video — if the content is right.</p>
<p>Nativz builds TikTok strategies that exploit this meritocratic distribution. We produce creator-style content at volume, test multiple hooks per concept, and iterate rapidly based on performance data. The result is consistent organic reach that most brands only dream of.</p>`
            },
            {
                heading: "Creator-Style Content Production",
                body: `<p>The number one mistake brands make on TikTok is producing content that <strong>looks like advertising</strong>. Polished, corporate-style videos get scrolled past instantly. The content that wins on TikTok looks like it was made by a creator — because that's what the audience responds to.</p>
<p>Nativz produces native TikTok content that feels authentic while delivering your brand message:</p>
<ul>
<li><strong>Trend participation</strong>: We monitor trending sounds, formats, and challenges daily, and produce brand-relevant versions within 24-48 hours of emergence.</li>
<li><strong>Hook-first editing</strong>: The first second determines whether someone watches or scrolls. We test 3-5 different hooks per concept to find what stops the thumb.</li>
<li><strong>Native production style</strong>: Shot on phones, edited with native tools, and styled to blend seamlessly with organic creator content in the feed.</li>
<li><strong>Content series</strong>: Recurring formats that build audience expectation and return viewership — the TikTok equivalent of appointment television.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "TikTok Video Production", description: "10-15 original TikTok videos per month, creator-styled with trending audio, hook-optimized editing, and platform-native formatting." },
            { title: "Trend Monitoring & Response", description: "Daily trend scanning with rapid-turnaround content production to capitalize on relevant viral moments within 24-48 hours." },
            { title: "Comment Management", description: "Active comment response strategy including reply videos, pinned comments, and community engagement to boost algorithmic signals." },
            { title: "TikTok SEO Optimization", description: "Keyword-optimized captions, strategic hashtag placement, and searchable content strategy for TikTok's growing search functionality." },
            { title: "Performance Analytics", description: "Monthly reporting covering view counts, completion rates, follower growth, trending content analysis, and strategic adjustments." },
        ],
        faqItems: [
            { question: "Does my brand really need to be on TikTok?", answer: "If your target audience includes anyone under 45, yes. TikTok's user base spans Millennials, Gen Z, and increasingly Gen X. More importantly, TikTok content drives behavior. Users discover products, research brands, and make purchasing decisions on TikTok more than any other social platform." },
            { question: "How do you handle TikTok trends that change daily?", answer: "We monitor trends daily using internal tools and industry sources. When a relevant trend emerges, our production team creates brand-appropriate content within 24-48 hours. Not every trend is right for every brand — we filter for relevance and brand safety before producing." },
            { question: "Can you guarantee viral content?", answer: "No ethical agency can guarantee virality. What we can guarantee is a volume-based approach that maximizes your chances. By producing 10-15 unique TikToks per month and testing multiple hooks, we create more opportunities for the algorithm to distribute your content. Consistent output beats one-off viral attempts every time." },
            { question: "Will TikTok content make our brand look unprofessional?", answer: "Not when done correctly. Creator-style doesn't mean low quality — it means authentic. We maintain your brand values and messaging while adapting the production style to what TikTok's audience actually watches. The most 'unprofessional' thing a brand can do on TikTok is post polished corporate content that nobody watches." },
        ],
    }),
    defineService({
        title: "X (Twitter) Social Media Management",
        slug: "x-twitter",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "X (Twitter) strategy: real-time engagement, brand voice development, and community building.",
        metaTitle: "X (Twitter) Social Media Management | Nativz",
        metaDescription: "Nativz manages X (Twitter) accounts with real-time engagement strategy, brand voice development, and community-driven growth.",
        primaryKeywords: ["twitter management", "X social media agency"],
        minWordCount: 1200,
        content: [
            {
                heading: "X Strategy: Real-Time Brand Voice at Scale",
                body: `<p>X (Twitter) is the platform where brand voice matters most. It rewards personality, speed, and conversation. The brands that thrive on X don't just post updates — they participate in culture, respond in real time, and build communities around shared interests.</p>
<p>Nativz develops <strong>distinctive brand voices</strong> on X that cut through the noise. We craft original tweets, engage in trending conversations, and build the kind of brand personality that earns followers, retweets, and organic advocacy.</p>
<p>Our X management covers daily posting, real-time engagement during relevant cultural moments, thread strategy for long-form thought leadership, and community building through strategic interactions with industry accounts and potential customers.</p>`
            },
            {
                heading: "Conversation-First Content Strategy",
                body: `<p>The X algorithm rewards <strong>replies, quote tweets, and conversations</strong> more than standalone posts. Brands that treat X like a broadcast channel miss the point entirely. Success on X comes from being part of the conversation — not talking at your audience.</p>
<p>Our approach includes:</p>
<ul>
<li><strong>Proactive engagement</strong>: We monitor industry conversations and insert your brand voice where it adds value, building visibility with new audiences.</li>
<li><strong>Thread strategy</strong>: Long-form threads that demonstrate expertise, tell stories, and drive bookmarks and shares.</li>
<li><strong>Spaces participation</strong>: We plan and host X Spaces to position your brand as a thought leader in real-time audio conversations.</li>
<li><strong>Crisis monitoring</strong>: Real-time brand mention monitoring with escalation procedures for reputation-sensitive situations.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Daily Tweet Production", description: "5-10 original tweets and thread posts per week covering brand messaging, industry commentary, and conversational engagement." },
            { title: "Real-Time Engagement", description: "Active monitoring and participation in trending conversations, reply management, and proactive brand voice interactions." },
            { title: "Thread Strategy", description: "Weekly long-form thread content for thought leadership, storytelling, and evergreen reference material." },
            { title: "Monthly Performance Report", description: "Analytics covering impressions, engagement rate, follower growth, top tweets, and strategic recommendations." },
        ],
        faqItems: [
            { question: "Is X still relevant for brand marketing?", answer: "X remains highly relevant for B2B brands, thought leadership, real-time marketing, and industries where conversation drives awareness. Its strength is direct access to journalists, industry leaders, and engaged communities. For brands that need a strong public voice, X is irreplaceable." },
            { question: "How do you handle controversial topics on X?", answer: "We develop brand guidelines for sensitive topics during onboarding. Our team monitors conversations carefully and avoids positioning your brand in politically divisive or off-brand discussions. When relevant cultural moments arise, we assess risk and consult with your team before engaging." },
            { question: "Can you manage X Spaces for our brand?", answer: "Yes. We plan, promote, host, and moderate X Spaces for brand thought leadership. This includes guest booking, topic planning, audience promotion, and post-event content repurposing." },
        ],
    }),
    defineService({
        title: "YouTube Channel Management",
        slug: "youtube",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "YouTube management: long-form video strategy, Shorts optimization, SEO, and channel growth.",
        metaTitle: "YouTube Channel Management Agency | Nativz",
        metaDescription: "Nativz manages YouTube channels with video SEO strategy, Shorts optimization, thumbnail design, and data-driven content planning for subscriber growth.",
        primaryKeywords: ["youtube management agency", "youtube marketing"],
        minWordCount: 1500,
        content: [
            {
                heading: "YouTube: The Search Engine That Pays Dividends",
                body: `<p>YouTube is the second largest search engine on the planet, and unlike social media posts that disappear from feeds in 24 hours, <strong>YouTube videos compound over time</strong>. A well-optimized video published today can drive traffic, leads, and brand awareness for years. No other platform offers this kind of compounding return.</p>
<p>Nativz builds YouTube strategies that pair long-form content with Shorts to capture both search-driven and discovery-driven audiences. We handle everything from content strategy and scripting to thumbnail design, video SEO, and community management.</p>
<p>Our approach treats your YouTube channel as a searchable content library — every video is optimized for specific keywords, structured for maximum watch time, and designed to convert viewers into subscribers and customers.</p>`
            },
            {
                heading: "Shorts + Long-Form: The Growth Formula",
                body: `<p>The YouTube algorithm now operates on two tracks: <strong>Shorts for discovery</strong> and <strong>long-form for depth</strong>. Shorts bring new viewers to your channel. Long-form content converts them into subscribers and buyers. You need both.</p>
<p>Our YouTube management includes:</p>
<ul>
<li><strong>Long-form video strategy</strong>: Topic research based on search volume, competitor gap analysis, and audience demand. Scripts optimized for watch time and retention.</li>
<li><strong>YouTube Shorts</strong>: 8-12 Shorts per month that drive channel discovery and feed the algorithm's preference for consistent publishing.</li>
<li><strong>Thumbnail design</strong>: Custom, click-optimized thumbnails tested against performance data to maximize click-through rates.</li>
<li><strong>Video SEO</strong>: Keyword-optimized titles, descriptions, tags, chapters, and end screens that maximize search visibility.</li>
<li><strong>Community management</strong>: Comment responses, pinned comments, Community tab posts, and subscriber engagement.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Long-Form Video Strategy", description: "Monthly content calendar with topics based on keyword research, competitor analysis, and audience demand. Scripts and outlines for 2-4 long-form videos per month." },
            { title: "YouTube Shorts Production", description: "8-12 YouTube Shorts per month designed for channel discovery, repurposed from long-form content and original short-form concepts." },
            { title: "Thumbnail Design & A/B Testing", description: "Custom thumbnail designs for every video with A/B testing to optimize click-through rates over time." },
            { title: "Video SEO Optimization", description: "Keyword-optimized titles, descriptions, tags, timestamps, and end screen configurations for every published video." },
            { title: "Channel Analytics Report", description: "Monthly reporting covering views, watch time, subscriber growth, traffic sources, top-performing content, and strategic recommendations." },
        ],
        faqItems: [
            { question: "How many videos per month do you produce?", answer: "We typically manage 2-4 long-form videos and 8-12 Shorts per month. The exact volume depends on your plan and content production capabilities. We handle strategy, scripting, optimization, and publishing — production can be managed by us through our content production service or by your internal team." },
            { question: "Do you handle video production or just strategy?", answer: "Both. Our YouTube management service covers strategy, scripting, optimization, and publishing. If you need full video production (filming, editing, motion graphics), we offer that through our Content Production service. Many clients bundle both for end-to-end YouTube management." },
            { question: "How long until we see results on YouTube?", answer: "YouTube is a long-game platform. Most channels see meaningful traction within 3-6 months of consistent publishing. However, unlike social media posts that disappear, every YouTube video continues to drive traffic through search and recommendations indefinitely. The ROI compounds over time." },
            { question: "Can you help optimize our existing YouTube videos?", answer: "Yes. We often start new engagements with a channel audit and optimization sprint — updating titles, descriptions, thumbnails, and tags on existing videos to capture search traffic they're currently missing. This can produce quick wins while we build the long-term content strategy." },
        ],
    }),
    defineService({
        title: "Pinterest Social Media Management",
        slug: "pinterest",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "Pinterest management: visual search optimization, pin strategy, and traffic-driving content.",
        metaTitle: "Pinterest Social Media Management Agency | Nativz",
        metaDescription: "Nativz optimizes Pinterest profiles with visual search strategy, keyword-rich pins, and traffic-driving boards for sustained organic discovery.",
        primaryKeywords: ["pinterest management", "pinterest marketing agency"],
        minWordCount: 1200,
        content: [
            {
                heading: "Pinterest: The Visual Search Engine Most Brands Ignore",
                body: `<p>Pinterest is not a social media platform — it's a <strong>visual search engine</strong> with 450+ million monthly users actively looking for ideas, products, and inspiration. Unlike Instagram or TikTok, where content disappears from feeds in hours, a Pinterest pin can drive traffic to your website for <strong>months or even years</strong> after publishing.</p>
<p>For e-commerce brands, lifestyle businesses, and anyone selling visually compelling products, Pinterest represents one of the highest-ROI organic channels available. Users come to Pinterest with purchase intent — they're planning projects, saving products, and making buying decisions.</p>
<p>Nativz builds Pinterest strategies that treat the platform as the search engine it is. Every pin is keyword-optimized, every board is strategically organized, and every piece of content is designed to drive clicks back to your website.</p>`
            },
            {
                heading: "SEO-Driven Pin Strategy",
                body: `<p>Success on Pinterest comes down to <strong>search optimization</strong>. Pinterest users type keywords into search, and the algorithm returns the most relevant, highest-quality pins. Our approach ensures your content appears for the searches that matter:</p>
<ul>
<li><strong>Keyword research</strong>: We identify the exact terms your audience searches on Pinterest and build content around those queries.</li>
<li><strong>Pin design</strong>: Vertical, text-overlay pins designed for maximum click-through rates in Pinterest's visual feed.</li>
<li><strong>Board architecture</strong>: Strategic board organization that signals topical authority to Pinterest's algorithm.</li>
<li><strong>Rich Pins</strong>: Product pins, article pins, and recipe pins with enhanced metadata for higher engagement and click-through rates.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Pin Design & Publishing", description: "15-25 keyword-optimized pins per week with custom graphics, vertical formatting, and compelling titles designed for Pinterest's visual search." },
            { title: "Board Strategy & Organization", description: "Strategic board architecture that builds topical authority, organized around your core products, services, and audience interests." },
            { title: "Pinterest SEO", description: "Keyword research, pin description optimization, alt text, and Rich Pin implementation for maximum search visibility." },
            { title: "Traffic & Conversion Report", description: "Monthly analytics covering impressions, pin clicks, outbound traffic, top-performing pins, and website conversion data from Pinterest referrals." },
        ],
        faqItems: [
            { question: "Is Pinterest right for my business?", answer: "Pinterest works best for e-commerce, home decor, food, fashion, beauty, travel, fitness, and any business with visually compelling products or content. If your audience makes decisions based on visual inspiration, Pinterest should be part of your strategy. B2B brands can also succeed with infographics, guides, and educational content." },
            { question: "How long do Pinterest pins drive traffic?", answer: "Unlike social media posts that get 24-48 hours of visibility, Pinterest pins can drive traffic for 3-6 months or longer. High-performing evergreen pins continue generating clicks indefinitely. This makes Pinterest one of the highest-ROI content investments you can make." },
            { question: "Do you create all the pin graphics?", answer: "Yes. We design all pin graphics in-house, optimized for Pinterest's vertical format with text overlays, brand-consistent styling, and click-optimized layouts. We also repurpose your existing photography, product images, and content into Pinterest-native formats." },
        ],
    }),
    defineService({
        title: "Threads Social Media Management",
        slug: "threads",
        parentSlug: "social-media-management",
        category: "social-media",
        shortDescription: "Threads management: conversational content strategy for Meta's newest text-based platform.",
        metaTitle: "Threads Social Media Management | Nativz",
        metaDescription: "Nativz builds Threads presence with conversational content, community engagement, and cross-platform Meta strategy integration.",
        primaryKeywords: ["threads app marketing", "threads management agency"],
        minWordCount: 1000,
        content: [
            {
                heading: "Threads: Early Mover Advantage on Meta's Text Platform",
                body: `<p>Threads is Meta's answer to X, and it comes with a massive advantage: <strong>built-in cross-promotion with Instagram</strong>. Every Threads post can reach your Instagram audience, and Threads content is increasingly surfaced across Meta's ecosystem including Facebook and Instagram feeds.</p>
<p>The brands establishing presence on Threads now are building organic reach that will be expensive to replicate once the platform matures. Nativz helps you claim that early mover advantage with a conversational content strategy that builds community and cross-promotes your broader Meta presence.</p>`
            },
            {
                heading: "Conversational Content That Builds Community",
                body: `<p>Threads rewards <strong>conversation over broadcasting</strong>. The most successful Threads accounts ask questions, share opinions, respond to replies, and participate in community discussions. It's less polished than Instagram and more accessible than X.</p>
<p>Our Threads strategy includes:</p>
<ul>
<li><strong>Conversation starters</strong>: Posts designed to spark discussion and drive reply engagement from your community.</li>
<li><strong>Instagram integration</strong>: Cross-posting strategy that shares Threads content with your Instagram audience to drive follows and engagement on both platforms.</li>
<li><strong>Real-time engagement</strong>: Active participation in trending conversations and community threads relevant to your industry.</li>
<li><strong>Brand voice development</strong>: A more casual, conversational tone that feels native to Threads while staying on-brand.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Daily Threads Content", description: "3-5 original Threads posts per day including conversation starters, opinion posts, industry commentary, and community engagement." },
            { title: "Cross-Platform Integration", description: "Strategic cross-posting between Threads and Instagram to maximize reach across Meta's ecosystem." },
            { title: "Community Engagement", description: "Active reply management, proactive engagement in trending conversations, and community building through authentic interactions." },
            { title: "Monthly Performance Report", description: "Analytics covering reach, engagement, follower growth, and cross-platform performance impact." },
        ],
        faqItems: [
            { question: "Should my brand be on Threads?", answer: "If you have an active Instagram presence, adding Threads is a low-effort, high-upside move. The cross-promotion between Instagram and Threads means your existing audience can follow you immediately, and Threads content gets distribution advantages within Meta's ecosystem." },
            { question: "How is Threads different from X?", answer: "Threads is more conversational and community-focused, with tighter Instagram integration and Meta's recommendation algorithm. Content tends to be more positive and less combative than X. For brands, this means a safer environment for authentic, personality-driven content." },
            { question: "What kind of content works on Threads?", answer: "Questions, hot takes, behind-the-scenes thoughts, and conversational posts perform best. Highly polished, promotional content underperforms. Think of Threads as the platform where your brand's personality shines through in casual conversation." },
        ],
    }),

    // --- Advertising Sub-Services (11) ---
    defineService({
        title: "Meta Advertising (Facebook & Instagram Ads)",
        slug: "meta-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Advantage+ campaign structures, creative-as-targeting, and post-Andromeda Meta ad strategy at scale.",
        metaTitle: "Meta Ads Agency | Facebook & Instagram Advertising | Nativz",
        metaDescription: "Nativz runs post-Andromeda Meta advertising: Advantage+ campaigns, creative-as-targeting, 10-25 unique creatives per ad set. The definitive agency for Meta Ads.",
        primaryKeywords: ["meta ads agency", "facebook ads management", "instagram ads"],
        minWordCount: 2000,
        content: [
            {
                heading: "Meta Ads After Andromeda: Creative-as-Targeting",
                body: `<p>Meta's Andromeda update didn't just change the feed — it rewrote the rules of Meta advertising. The algorithm now evaluates ad creative across 1,000+ signals to determine who sees it, making <strong>creative the most important targeting variable</strong> in your campaigns.</p>
<p>The old playbook — building dozens of custom audiences and showing them one ad — is dead. Andromeda-era Meta advertising requires <strong>Advantage+ campaign structures</strong> fed with 10-25 unique creatives per ad set. The algorithm tests each creative against micro-audiences, identifies winners within 24-48 hours, and scales the best performers automatically.</p>
<p>Nativz was the first agency in DFW to fully adopt this model. While competitors cling to manual audience targeting, we let the machine do what it does best — find buyers — and focus our energy on what machines can't do: produce exceptional creative at volume.</p>`
            },
            {
                heading: "Our Meta Ads Process",
                body: `<p>Every Meta Ads engagement follows our proven framework:</p>
<ul>
<li><strong>Tracking infrastructure</strong>: We implement the Conversions API (CAPI), server-side event deduplication, and proper pixel configuration before spending a single dollar. You can't optimize what you can't measure.</li>
<li><strong>Creative production</strong>: We produce 10-25 unique ad creatives per campaign — video, static, carousel, UGC-style, and motion graphics — with different hooks, angles, and messaging frameworks.</li>
<li><strong>Advantage+ structure</strong>: Broad targeting with creative-as-targeting. We let the algorithm work, and intervene only when data demands it.</li>
<li><strong>Weekly creative iteration</strong>: We analyze creative performance data weekly and produce new variations of winners, new concepts to test, and sunset fatigued creatives.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Campaign Architecture", description: "Advantage+ campaign structures with proper ad set organization, creative testing frameworks, and scaling protocols built for Andromeda-era distribution." },
            { title: "Creative Production", description: "10-25 unique ad creatives per campaign per month — video, static, carousel, UGC-style — produced by our in-house team specifically for Meta placements." },
            { title: "CAPI & Tracking Setup", description: "Meta Conversions API implementation, server-side event tracking, custom conversion configuration, and pixel audit for accurate attribution." },
            { title: "Daily Campaign Optimization", description: "Active daily management including budget pacing, creative performance monitoring, and real-time adjustments based on delivery and conversion data." },
            { title: "Weekly Performance Reporting", description: "Detailed weekly reports covering ROAS, CPA, CPM, creative performance rankings, and strategic recommendations for the week ahead." },
        ],
        faqItems: [
            { question: "What is Advantage+ and why does it matter?", answer: "Advantage+ is Meta's AI-powered campaign type that automates audience targeting, placements, and budget allocation. Instead of you telling Meta who to target, the algorithm finds the best audience for each creative. This consistently outperforms manual targeting because Meta's AI processes more signals than any human media buyer can." },
            { question: "How many ad creatives do you produce per month?", answer: "10-25 unique creatives per campaign per month. Not variations of the same ad — genuinely different concepts, hooks, formats, and messaging angles. This creative volume is what feeds the algorithm and drives consistent performance." },
            { question: "What's the minimum budget for Meta Ads?", answer: "We recommend a minimum of $3,000/month in ad spend (separate from management fees) to give the algorithm enough data to optimize. However, budgets of $5,000-$15,000+ per month produce significantly faster and more reliable results." },
            { question: "Do you manage both Facebook and Instagram Ads?", answer: "Yes. Meta Ads Manager runs campaigns across Facebook, Instagram, Messenger, and the Audience Network simultaneously. We optimize creative for each placement — Reels, Stories, Feed, Explore — and let Advantage+ distribute budget to the best-performing placements." },
        ],
    }),
    defineService({
        title: "Google Ads Management",
        slug: "google-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Search, Display, Shopping, Performance Max, and Local Service Ads. Data-driven Google advertising.",
        metaTitle: "Google Ads Management Agency | Nativz",
        metaDescription: "Nativz manages Google Ads across Search, Display, Shopping, Performance Max, and Local Service Ads with advanced conversion tracking and analytics infrastructure.",
        primaryKeywords: ["google ads agency Dallas", "PPC management", "search ads"],
        minWordCount: 2000,
        content: [
            {
                heading: "Google Ads: Capturing Intent at the Moment It Happens",
                body: `<p>Google Ads captures demand that already exists. When someone searches "social media agency Dallas" or "best CRM software," they have <strong>active purchase intent</strong>. No other advertising platform lets you intercept buyers at the exact moment they're looking for what you sell.</p>
<p>Nativz manages Google Ads across every campaign type — Search, Display, Shopping, Performance Max, and Local Service Ads — with a focus on conversion tracking accuracy, creative asset quality, and bid strategy optimization. We don't just manage your campaigns. We build the measurement infrastructure that makes optimization possible.</p>`
            },
            {
                heading: "Our Google Ads Methodology",
                body: `<p>We approach Google Ads as a data-driven system, not a set-and-forget platform:</p>
<ul>
<li><strong>Conversion tracking first</strong>: Before launching any campaign, we implement enhanced conversions, offline conversion imports, and proper attribution models. Without accurate data, optimization is guesswork.</li>
<li><strong>Search campaign architecture</strong>: We build tightly themed ad groups with specific keyword matching strategies, negative keyword lists, and responsive search ads tested across multiple headline and description combinations.</li>
<li><strong>Performance Max</strong>: For e-commerce and lead generation, we build asset-rich PMax campaigns that leverage Google's AI across Search, Display, YouTube, Discover, Gmail, and Maps simultaneously.</li>
<li><strong>Shopping optimization</strong>: Product feed optimization, competitive pricing analysis, and Shopping campaign structures that maximize impression share on your highest-margin products.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Campaign Architecture & Build", description: "Complete Google Ads account structure including campaign types, ad groups, keywords, negative lists, extensions, and audience signals tailored to your goals." },
            { title: "Enhanced Tracking Setup", description: "Google Ads enhanced conversions, GA4 integration, offline conversion imports, and proper attribution model configuration." },
            { title: "Ad Copywriting & Testing", description: "Responsive search ads with multiple headline and description variations, A/B tested for CTR and conversion rate optimization." },
            { title: "Bid Strategy Optimization", description: "Ongoing bid strategy management including Target CPA, Target ROAS, and Maximize Conversions with smart bidding adjustments." },
            { title: "Monthly Performance Report", description: "In-depth reporting covering CPC, CPA, ROAS, quality scores, impression share, search term analysis, and strategic roadmap." },
        ],
        faqItems: [
            { question: "How much does Google Ads cost per month?", answer: "Google Ads costs vary by industry and competition. Average CPCs range from $1-$5 for most industries, with competitive sectors like legal and insurance running $15-$50+. We recommend starting with at least $2,500/month in ad spend and scaling based on results." },
            { question: "What's the difference between Search and Performance Max?", answer: "Search campaigns target specific keywords people type into Google. Performance Max uses AI to advertise across all Google properties — Search, Display, YouTube, Discover, Gmail, and Maps — using asset groups and audience signals. We typically recommend both as part of a comprehensive strategy." },
            { question: "How do you handle keyword research?", answer: "We use Google Keyword Planner, SEMrush, and our proprietary competitive analysis to identify high-intent, commercially valuable keywords. We organize keywords by match type, search intent, and funnel stage, and maintain active negative keyword lists to prevent wasted spend." },
            { question: "How quickly can Google Ads produce leads?", answer: "Google Search campaigns can produce leads within the first 24-48 hours of launch. However, optimization for peak efficiency takes 4-8 weeks as we gather conversion data, refine keywords, and train automated bidding strategies." },
        ],
    }),
    defineService({
        title: "TikTok Advertising",
        slug: "tiktok-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "TikTok ad campaigns: Spark Ads, In-Feed, TopView, and creator-style ad creative production.",
        metaTitle: "TikTok Advertising Agency | Nativz",
        metaDescription: "Nativz produces and manages TikTok ad campaigns with creator-style creative, Spark Ads, and In-Feed placements optimized for conversion and brand awareness.",
        primaryKeywords: ["tiktok ads agency", "tiktok ad management"],
        minWordCount: 1500,
        content: [
            {
                heading: "TikTok Ads: Where Creator-Style Creative Wins",
                body: `<p>TikTok advertising flips the traditional ad model upside down. The ads that perform best on TikTok <strong>don't look like ads</strong>. They look like organic creator content that happens to deliver a brand message. This is fundamentally different from every other ad platform.</p>
<p>Nativz produces creator-style TikTok ad creative that blends seamlessly with organic content in the For You feed. We combine this with strategic campaign management — Spark Ads, In-Feed, TopView, and Branded Hashtag placements — to drive awareness, engagement, and conversions at scale.</p>`
            },
            {
                heading: "TikTok Ad Formats We Master",
                body: `<ul>
<li><strong>Spark Ads</strong>: Boost existing organic TikToks (yours or creators') as paid ads. The highest-performing format because it maintains social proof and drives both paid and organic results.</li>
<li><strong>In-Feed Ads</strong>: Native video ads that appear in the For You feed. We produce creator-style content with strong hooks, engaging narratives, and clear CTAs.</li>
<li><strong>TopView</strong>: Premium full-screen placement when users first open TikTok. Maximum visibility for brand awareness campaigns.</li>
<li><strong>TikTok Shop Ads</strong>: Product-tagged video ads that drive direct in-app purchases for e-commerce brands.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Creator-Style Ad Creative", description: "8-15 unique TikTok ad creatives per month — shot in creator style with strong hooks, native editing, and authentic presentation." },
            { title: "Campaign Management", description: "Full campaign setup and daily optimization across Spark Ads, In-Feed, and conversion campaigns with bid strategy management." },
            { title: "TikTok Pixel & Events API", description: "Tracking setup including TikTok Pixel, Events API (server-side), and custom conversion events for accurate measurement." },
            { title: "Performance Reporting", description: "Weekly reporting on CPM, CPC, CVR, ROAS, creative performance, and audience insights with strategic recommendations." },
        ],
        faqItems: [
            { question: "Do TikTok Ads actually drive conversions?", answer: "Yes. TikTok is no longer just an awareness platform. With TikTok Shop, lead generation forms, and website conversion campaigns, brands are driving measurable sales and leads. Our clients typically see lower CPMs than Meta with competitive conversion rates, especially with creator-style ad creative." },
            { question: "What is a Spark Ad?", answer: "A Spark Ad boosts an existing organic TikTok as a paid advertisement. The original post maintains its likes, comments, and shares, giving the ad built-in social proof. We use Spark Ads to amplify top-performing organic content and creator partnership posts." },
            { question: "What budget do you recommend for TikTok Ads?", answer: "We recommend starting with $2,000-$5,000/month in ad spend. TikTok's algorithm needs volume to optimize, and lower budgets limit the platform's ability to find your ideal audience. We'll recommend a specific starting budget based on your goals and industry." },
        ],
    }),
    defineService({
        title: "YouTube Advertising",
        slug: "youtube-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "YouTube ad campaigns: pre-roll, bumpers, discovery ads, and video-first creative production.",
        metaTitle: "YouTube Advertising Agency | Nativz",
        metaDescription: "Nativz runs YouTube advertising campaigns with video-first creative, pre-roll and bumper strategy, and audience-targeted placements for measurable growth.",
        primaryKeywords: ["youtube ads agency", "video advertising"],
        minWordCount: 1500,
        content: [
            {
                heading: "YouTube Advertising: The Video-First Growth Channel",
                body: `<p>YouTube reaches over 2 billion logged-in users monthly, and its advertising platform offers something unique: the ability to tell a <strong>longer, more compelling brand story</strong> than any other digital ad format. While other platforms fight for 3-second attention spans, YouTube gives you 15 seconds, 30 seconds, or even minutes to make your case.</p>
<p>Nativz manages YouTube advertising with video-first creative production. We don't take a horizontal video and hope it works as a pre-roll. We produce ads specifically designed for YouTube's viewer behavior — front-loading the hook, building curiosity, and delivering value before the skip button appears.</p>`
            },
            {
                heading: "YouTube Ad Formats & Strategy",
                body: `<ul>
<li><strong>Skippable in-stream (pre-roll)</strong>: 15-60 second ads with hook-first structure. You only pay when viewers watch 30 seconds or engage.</li>
<li><strong>Non-skippable bumpers</strong>: 6-second brand awareness ads designed for frequency and recall. Perfect for reinforcing messages from longer campaigns.</li>
<li><strong>Discovery ads</strong>: Thumbnail + headline ads that appear in YouTube search and related video panels, capturing intent-based viewers.</li>
<li><strong>YouTube Shorts Ads</strong>: Vertical video ads that reach the rapidly growing Shorts audience with creator-style content.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Video Ad Creative Production", description: "4-8 unique YouTube ad videos per month across pre-roll, bumper, and Shorts formats with hook-optimized editing." },
            { title: "Campaign Management", description: "Full YouTube campaign setup and optimization including audience targeting, placement selection, and bid strategy management through Google Ads." },
            { title: "Audience Strategy", description: "Custom audience building using in-market segments, affinity audiences, custom intent audiences, and remarketing lists." },
            { title: "Performance Reporting", description: "Monthly reports covering view rate, CPV, audience retention curves, conversion tracking, and creative performance analysis." },
        ],
        faqItems: [
            { question: "How effective are YouTube Ads compared to social media ads?", answer: "YouTube excels at mid-funnel engagement — building brand consideration and trust through longer-form storytelling. Social media ads are often better for direct response. Most successful brands use both: YouTube for awareness and consideration, social ads for conversion and retargeting." },
            { question: "What video lengths work best for YouTube Ads?", answer: "For skippable pre-roll, 15-30 seconds performs best for most brands. Bumper ads are exactly 6 seconds. For discovery campaigns targeting in-market audiences, 60-90 second explainer-style ads often outperform shorter cuts." },
            { question: "Do you produce the video ad creative?", answer: "Yes. Our content production team creates all YouTube ad creative in-house — scripting, filming, editing, and motion graphics. We produce each video specifically for YouTube ad formats, not repurposed social content." },
        ],
    }),
    defineService({
        title: "LinkedIn Advertising",
        slug: "linkedin-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "LinkedIn ad campaigns: Sponsored Content, InMail, Lead Gen Forms, and Account-Based Marketing.",
        metaTitle: "LinkedIn Advertising Agency | Nativz",
        metaDescription: "Nativz manages LinkedIn advertising for B2B brands: Sponsored Content, InMail campaigns, Lead Gen Forms, and ABM strategies that drive qualified pipeline.",
        primaryKeywords: ["linkedin ads agency", "B2B advertising", "linkedin campaigns"],
        minWordCount: 1500,
        content: [
            {
                heading: "LinkedIn Ads: Precision B2B Targeting",
                body: `<p>LinkedIn is the only advertising platform where you can target by <strong>job title, company, industry, seniority, and company size</strong> with high accuracy. For B2B brands, this means reaching the exact decision-makers who can buy your product — without wasting budget on irrelevant audiences.</p>
<p>Nativz manages LinkedIn advertising for B2B companies that need qualified pipeline, not just traffic. We build campaigns that put your brand in front of the right executives, drive content downloads and webinar registrations, and use Lead Gen Forms to capture contact information without friction.</p>`
            },
            {
                heading: "LinkedIn Ad Strategy for Pipeline Generation",
                body: `<ul>
<li><strong>Sponsored Content</strong>: In-feed ads that drive engagement, content downloads, and website visits from targeted professional audiences.</li>
<li><strong>Message Ads (InMail)</strong>: Direct-to-inbox messages that reach prospects with personalized offers and invitations.</li>
<li><strong>Lead Gen Forms</strong>: Pre-filled lead capture forms that eliminate landing page friction and dramatically increase conversion rates.</li>
<li><strong>Account-Based Marketing (ABM)</strong>: Matched audience campaigns that target specific company lists with tailored messaging for enterprise sales.</li>
<li><strong>Document Ads</strong>: Thought leadership content ads that let users browse your whitepapers and e-books directly in the feed.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Campaign Strategy & Build", description: "LinkedIn campaign architecture, audience segmentation, creative assets, and Lead Gen Form setup aligned to your B2B pipeline goals." },
            { title: "ABM Campaign Management", description: "Matched audience campaigns targeting specific company lists with personalized ad creative and messaging." },
            { title: "Lead Gen Form Optimization", description: "Pre-filled Lead Gen Forms with custom questions, CRM integration, and follow-up automation workflows." },
            { title: "Thought Leadership Promotion", description: "Sponsored Content campaigns amplifying your best organic content, whitepapers, and case studies to targeted professional audiences." },
            { title: "Pipeline Reporting", description: "Monthly ROI analysis tracking leads, MQLs, opportunities, and pipeline value generated from LinkedIn advertising." },
        ],
        faqItems: [
            { question: "Is LinkedIn advertising expensive?", answer: "LinkedIn CPCs are higher than other platforms — typically $5-$15 per click. However, the audience quality is unmatched for B2B. When you factor in lead quality and close rates, LinkedIn often delivers the lowest cost per qualified opportunity of any digital channel for B2B companies." },
            { question: "What is Account-Based Marketing on LinkedIn?", answer: "ABM on LinkedIn lets you upload a list of target companies and show ads only to employees at those companies. You can further filter by job title and seniority. This is essential for enterprise sales where you know exactly which accounts you want to win." },
            { question: "Can LinkedIn Ads generate actual sales pipeline?", answer: "Absolutely. LinkedIn is the highest-converting B2B ad platform when campaigns are structured correctly. Lead Gen Forms, combined with proper CRM integration, create a direct line from ad impression to sales pipeline. Our B2B clients consistently attribute 30-50% of their qualified pipeline to LinkedIn campaigns." },
        ],
    }),
    defineService({
        title: "Connected TV & OTT Advertising",
        slug: "ctv-ott",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "CTV and streaming ad campaigns: precision targeting on Roku, Hulu, YouTube TV, and premium networks.",
        metaTitle: "Connected TV & OTT Advertising Agency | Nativz",
        metaDescription: "Nativz manages Connected TV and OTT advertising campaigns with precision targeting across streaming platforms, bringing digital accountability to TV-scale reach.",
        primaryKeywords: ["CTV advertising agency", "OTT ads", "streaming ads"],
        minWordCount: 1500,
        content: [
            {
                heading: "CTV Advertising: TV-Scale Reach with Digital Precision",
                body: `<p>Connected TV has transformed television from a broad-reach, unmeasurable branding channel into a <strong>precision-targeted, digitally accountable advertising platform</strong>. Your ads appear on the biggest screen in the house — Roku, Hulu, YouTube TV, Peacock, and premium streaming networks — but with the targeting and measurement capabilities of digital.</p>
<p>Nativz manages CTV campaigns that reach specific demographics, geographies, and behavioral segments across streaming platforms. Unlike traditional TV buying, CTV lets you target at the household level, measure completion rates, and track downstream conversions.</p>`
            },
            {
                heading: "Why CTV Belongs in Your Media Mix",
                body: `<ul>
<li><strong>Premium environment</strong>: Your ads run alongside professional content on platforms like Hulu, Peacock, and YouTube TV — not competing with creator content in a scrollable feed.</li>
<li><strong>Completion rates</strong>: CTV ads are non-skippable with 95%+ completion rates, ensuring your entire message is seen.</li>
<li><strong>Precision targeting</strong>: Target by geography, demographics, interests, purchase behavior, and even retarget website visitors on their TVs.</li>
<li><strong>Cross-device attribution</strong>: Measure the impact of CTV exposure on website visits, store visits, and conversions across devices.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "CTV Campaign Strategy", description: "Platform selection, audience targeting, budget allocation, and flight planning across streaming platforms optimized for your reach and frequency goals." },
            { title: "Video Creative Production", description: "15 and 30-second broadcast-quality video ads produced specifically for CTV environments with proper formatting and compliance." },
            { title: "Audience Targeting", description: "Precision audience segments built from demographic, geographic, behavioral, and retargeting data across CTV inventory." },
            { title: "Cross-Device Attribution", description: "Measurement setup tracking CTV exposure through to website visits, form submissions, and conversions across mobile, desktop, and in-store." },
        ],
        faqItems: [
            { question: "What is Connected TV advertising?", answer: "CTV advertising delivers video ads through internet-connected televisions and streaming devices like Roku, Amazon Fire TV, and Apple TV. Your ads appear during streaming content on platforms like Hulu, Peacock, and YouTube TV with digital targeting and measurement capabilities." },
            { question: "How much does CTV advertising cost?", answer: "CTV CPMs typically range from $25-$45, depending on targeting specificity and inventory quality. While CPMs are higher than social media, the premium environment and non-skippable format ensure your full message is delivered, and completion rates exceed 95%." },
            { question: "Can small businesses use CTV advertising?", answer: "Yes. Unlike traditional TV which required massive budgets, CTV is accessible at any budget level. We recommend a minimum of $3,000/month for meaningful reach and frequency, but there are no minimum spends on most platforms." },
        ],
    }),
    defineService({
        title: "Programmatic Display Advertising",
        slug: "programmatic",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Programmatic display, native, and video advertising with real-time bidding and advanced audience targeting.",
        metaTitle: "Programmatic Advertising Agency | Nativz",
        metaDescription: "Nativz runs programmatic display, native, and video campaigns with real-time bidding, audience segmentation, and data-driven optimization at scale.",
        primaryKeywords: ["programmatic advertising agency", "display ads", "RTB"],
        minWordCount: 1500,
        content: [
            {
                heading: "Programmatic Advertising: Scale and Precision",
                body: `<p>Programmatic advertising uses <strong>real-time bidding (RTB)</strong> to place display, native, and video ads across millions of websites and apps — reaching your audience wherever they browse. Unlike walled-garden platforms like Meta or Google, programmatic gives you access to the entire open web.</p>
<p>Nativz manages programmatic campaigns through demand-side platforms (DSPs) with advanced audience segmentation, contextual targeting, and cross-device retargeting capabilities. We combine this with custom creative production to ensure your ads stand out in banner-blind environments.</p>`
            },
            {
                heading: "Programmatic Capabilities",
                body: `<ul>
<li><strong>Display advertising</strong>: Banner ads across premium publisher networks with contextual and audience-based targeting.</li>
<li><strong>Native advertising</strong>: In-content ad placements that match the look and feel of the surrounding editorial, driving higher engagement than standard display.</li>
<li><strong>Video advertising</strong>: Pre-roll and mid-roll video ads across publisher video content outside of YouTube.</li>
<li><strong>Geofencing</strong>: Location-based targeting that reaches users who visit specific physical locations — competitor stores, events, neighborhoods.</li>
<li><strong>Retargeting</strong>: Cross-device retargeting for website visitors, email lists, and CRM audiences across the open web.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Programmatic Campaign Management", description: "Full DSP management including campaign setup, bid optimization, audience management, and creative rotation across display, native, and video inventory." },
            { title: "Custom Display Creative", description: "Animated HTML5 banner ads, native ad creative, and video assets designed for programmatic placements across standard IAB sizes." },
            { title: "Audience Strategy", description: "Custom audience segments built from first-party data, third-party data providers, contextual targeting, and geofencing parameters." },
            { title: "Performance Reporting", description: "Monthly reporting covering impressions, clicks, viewability, CTR, conversions, and attributed revenue with transparent placement-level detail." },
        ],
        faqItems: [
            { question: "What is programmatic advertising?", answer: "Programmatic advertising automates the buying and placement of digital ads using real-time bidding. Instead of negotiating directly with publishers, programmatic platforms bid on ad inventory in milliseconds, placing your ads on the most relevant websites for your audience." },
            { question: "How is programmatic different from Google Display Ads?", answer: "Google Display Network is one inventory source. Programmatic DSPs access multiple exchanges and networks simultaneously, giving you broader reach, more granular targeting options (including geofencing), and transparent placement-level reporting." },
            { question: "Is programmatic advertising effective?", answer: "Programmatic is most effective for retargeting, geofencing, and brand awareness at scale. It works best as part of a multi-channel strategy — complementing social and search campaigns with broad-reach display that reinforces your brand across the web." },
        ],
    }),
    defineService({
        title: "Amazon Advertising",
        slug: "amazon-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Amazon Sponsored Products, Brands, and Display ads. E-commerce advertising on the world's largest marketplace.",
        metaTitle: "Amazon Advertising Agency | Nativz",
        metaDescription: "Nativz manages Amazon advertising: Sponsored Products, Sponsored Brands, and Sponsored Display campaigns optimized for ACOS, sales velocity, and market share.",
        primaryKeywords: ["amazon ads agency", "amazon PPC", "sponsored products"],
        minWordCount: 1200,
        content: [
            {
                heading: "Amazon Advertising: Winning the Buy Box",
                body: `<p>Amazon is where purchases happen. Over 60% of online product searches start on Amazon, not Google. If you sell products on Amazon, advertising isn't optional — it's the primary lever for <strong>visibility, velocity, and organic ranking</strong>.</p>
<p>Nativz manages Amazon advertising with a focus on profitable growth. We optimize Sponsored Products for keyword relevance, Sponsored Brands for category dominance, and Sponsored Display for retargeting and conquest campaigns — all while maintaining your target ACOS and maximizing total revenue.</p>`
            },
            {
                heading: "Amazon Ad Types & Strategy",
                body: `<ul>
<li><strong>Sponsored Products</strong>: Keyword-targeted product ads that appear in search results and product detail pages. The foundation of Amazon advertising.</li>
<li><strong>Sponsored Brands</strong>: Header banner ads that showcase your brand logo, custom headline, and multiple products for category awareness.</li>
<li><strong>Sponsored Display</strong>: Audience-based ads that retarget shoppers who viewed your products and conquest competitors' product page visitors.</li>
<li><strong>Amazon DSP</strong>: Programmatic display and video ads that reach Amazon shoppers across the web and on Amazon properties.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Keyword Research & Campaign Build", description: "Comprehensive keyword research, campaign architecture, and ad group organization optimized for your product catalog and competitive landscape." },
            { title: "Bid Management & Optimization", description: "Daily bid adjustments, budget pacing, and keyword optimization to maintain target ACOS while maximizing sales velocity." },
            { title: "Product Listing Optimization", description: "Title, bullet point, and A+ Content optimization to improve organic ranking and advertising conversion rates." },
            { title: "Monthly Performance Report", description: "Reporting on ACOS, TACoS, sales attribution, keyword rankings, and strategic recommendations for catalog and campaign expansion." },
        ],
        faqItems: [
            { question: "What is ACOS and what should mine be?", answer: "ACOS (Advertising Cost of Sales) is ad spend divided by attributed sales. A 'good' ACOS depends on your margins and goals. For product launches, higher ACOS (30-50%) is acceptable to build velocity. For mature products, most brands target 15-25% ACOS." },
            { question: "Does Amazon advertising help organic rankings?", answer: "Yes. Amazon's algorithm rewards sales velocity, regardless of whether sales come from organic or paid sources. Strategic advertising increases velocity, which improves organic ranking, creating a flywheel effect where ad-driven sales boost organic visibility." },
            { question: "Can you help with product listings as well as ads?", answer: "Yes. Product listing quality directly impacts ad performance. We optimize titles, bullet points, images, and A+ Content as part of our Amazon advertising service to ensure your ads convert at the highest possible rate." },
        ],
    }),
    defineService({
        title: "Snapchat Advertising",
        slug: "snapchat-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Snapchat ad campaigns: AR lenses, Story ads, and Spotlight placements for Gen Z audience reach.",
        metaTitle: "Snapchat Advertising Agency | Nativz",
        metaDescription: "Nativz creates and manages Snapchat advertising campaigns including AR lenses, Story ads, and Spotlight placements to reach Gen Z audiences at scale.",
        primaryKeywords: ["snapchat ads agency", "snapchat marketing"],
        minWordCount: 1000,
        content: [
            {
                heading: "Snapchat Ads: Reaching Gen Z Where They Live",
                body: `<p>Snapchat reaches over 75% of 13-34 year olds in the US. For brands targeting Gen Z and younger Millennials, Snapchat offers <strong>unique ad experiences</strong> — AR lenses, full-screen vertical video, and immersive Story placements — that aren't available on any other platform.</p>
<p>Nativz manages Snapchat campaigns that leverage the platform's creative formats for awareness, engagement, and conversions. From shoppable AR try-on lenses to swipe-up conversion campaigns, we build Snapchat strategies that go beyond basic awareness.</p>`
            },
        ],
        deliverables: [
            { title: "Snapchat Ad Creative", description: "Vertical video ads, Story ads, and AR lens concepts designed specifically for Snapchat's full-screen, immersive user experience." },
            { title: "Campaign Management", description: "Full campaign setup and optimization including audience targeting, bid management, and creative rotation across Snap Ad formats." },
            { title: "Performance Reporting", description: "Monthly reporting covering swipe-up rates, video views, AR engagement metrics, and conversion tracking." },
        ],
        faqItems: [
            { question: "Is Snapchat advertising still relevant?", answer: "For brands targeting Gen Z and young Millennials, absolutely. Snapchat reaches demographics that are increasingly hard to find on other platforms. The platform's AR lenses and immersive formats also offer creative opportunities that drive higher engagement than standard video ads." },
            { question: "How do AR lenses work for advertising?", answer: "AR sponsored lenses let users interact with your brand through augmented reality — try on products, apply branded filters, or play interactive experiences. They generate high engagement and sharing, creating organic amplification beyond your paid impressions." },
        ],
    }),
    defineService({
        title: "Pinterest Advertising",
        slug: "pinterest-ads",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Pinterest ad campaigns: Promoted Pins, Shopping Ads, and visual discovery advertising.",
        metaTitle: "Pinterest Advertising Agency | Nativz",
        metaDescription: "Nativz manages Pinterest advertising with Promoted Pins, Shopping Ads, and visual discovery campaigns that drive traffic and conversions for visual-first brands.",
        primaryKeywords: ["pinterest ads agency", "pinterest promoted pins"],
        minWordCount: 1000,
        content: [
            {
                heading: "Pinterest Ads: Advertising to Planners and Buyers",
                body: `<p>Pinterest users are in <strong>planning mode</strong>. They're saving ideas, comparing options, and making purchasing decisions. This makes Pinterest one of the highest-intent advertising platforms available — users are actively looking to buy, not passively scrolling.</p>
<p>Nativz manages Pinterest advertising with Promoted Pins, Shopping Ads, and Idea Ads that capture users during the planning phase and drive them to purchase. For e-commerce, home, fashion, food, and lifestyle brands, Pinterest Ads often deliver the highest return on ad spend of any platform.</p>`
            },
        ],
        deliverables: [
            { title: "Promoted Pin Campaigns", description: "Keyword-targeted Promoted Pins that appear in search results and home feeds, optimized for clicks, saves, and conversions." },
            { title: "Shopping Ad Management", description: "Product catalog integration and Shopping campaign optimization for direct product discovery and e-commerce conversions." },
            { title: "Pin Creative Design", description: "Vertical pin graphics with text overlays, lifestyle imagery, and clear CTAs designed for Pinterest's visual feed." },
            { title: "Performance Reporting", description: "Monthly analytics covering impressions, pin clicks, saves, outbound clicks, ROAS, and audience insights." },
        ],
        faqItems: [
            { question: "Which businesses benefit most from Pinterest Ads?", answer: "E-commerce, home decor, fashion, food, beauty, travel, and wedding industries see the strongest Pinterest ad performance. Any brand where visual inspiration drives purchasing decisions will benefit from Pinterest advertising." },
            { question: "How do Pinterest Shopping Ads work?", answer: "Pinterest Shopping Ads pull directly from your product catalog to create shoppable pins. Users see your product with real-time pricing and availability, and click through to purchase on your website. This format drives high-intent traffic with strong conversion rates." },
        ],
    }),
    defineService({
        title: "Retargeting & Remarketing",
        slug: "retargeting",
        parentSlug: "advertising",
        category: "advertising",
        shortDescription: "Cross-platform retargeting campaigns that recapture lost visitors and drive conversions.",
        metaTitle: "Retargeting & Remarketing Agency | Nativz",
        metaDescription: "Nativz builds cross-platform retargeting and remarketing campaigns that re-engage website visitors, cart abandoners, and warm audiences to maximize ROI.",
        primaryKeywords: ["retargeting agency", "remarketing campaigns"],
        minWordCount: 1200,
        content: [
            {
                heading: "Retargeting: Converting Interest Into Revenue",
                body: `<p>97% of first-time website visitors leave without converting. Retargeting brings them back. Every click, page view, and cart addition signals <strong>purchase intent</strong> — retargeting ensures that intent doesn't go to waste.</p>
<p>Nativz builds cross-platform retargeting campaigns that follow your warm audiences across Meta, Google, TikTok, programmatic display, and CTV. We segment audiences by behavior — product viewers, cart abandoners, past customers, content consumers — and serve personalized messaging matched to their stage in the buyer journey.</p>`
            },
            {
                heading: "Our Retargeting Framework",
                body: `<ul>
<li><strong>Website visitor retargeting</strong>: Re-engage users who visited specific product or service pages with relevant messaging and offers.</li>
<li><strong>Cart abandonment</strong>: Dynamic product ads that remind shoppers of items they left behind with urgency-driven creative.</li>
<li><strong>Email list retargeting</strong>: Upload your CRM lists to create matched audiences across Meta, Google, and programmatic platforms.</li>
<li><strong>Engagement retargeting</strong>: Target users who engaged with your social content, watched your videos, or interacted with your ads but haven't converted.</li>
<li><strong>Cross-sell and upsell</strong>: Show existing customers complementary products and upgrades to increase lifetime value.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Retargeting Strategy", description: "Comprehensive audience segmentation plan with tailored messaging frameworks for each retargeting stage — from awareness to cart abandonment to post-purchase." },
            { title: "Cross-Platform Setup", description: "Pixel implementation, audience creation, and campaign builds across Meta, Google, programmatic, and any additional active platforms." },
            { title: "Dynamic Creative Production", description: "Dynamic product ads, personalized messaging variations, and urgency-driven creative for each retargeting segment." },
            { title: "Performance Reporting", description: "Monthly reporting covering retargeting ROAS, cost per re-engagement, conversion rates by segment, and audience size trends." },
        ],
        faqItems: [
            { question: "How does retargeting work?", answer: "When someone visits your website, a tracking pixel captures their visit. We then show them targeted ads across other platforms — Facebook, Instagram, Google, YouTube — reminding them of your brand and encouraging them to return and convert." },
            { question: "Isn't retargeting creepy?", answer: "When done correctly, retargeting feels helpful, not intrusive. The key is frequency caps (limiting how many times someone sees your ad), relevant messaging (showing products they actually viewed), and proper timing (not retargeting for months after a single visit). We manage all of these parameters carefully." },
            { question: "What is dynamic retargeting?", answer: "Dynamic retargeting automatically shows users the specific products they viewed on your website. Instead of a generic brand ad, they see the exact shoes, software plan, or service they were considering — dramatically increasing conversion rates." },
        ],
    }),

    // --- Content Production Sub-Services (7) ---
    defineService({
        title: "Video Production Services",
        slug: "video-production",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Professional video production: brand videos, social content, ads, and corporate filmmaking.",
        metaTitle: "Video Production Agency Dallas | Nativz",
        metaDescription: "Nativz produces professional brand videos, social content, ad creative, and corporate films. One film day, one month of content. Dallas-based production team.",
        primaryKeywords: ["video production agency Dallas", "brand video production"],
        minWordCount: 1500,
        content: [
            {
                heading: "Video Production That Feeds the Algorithm",
                body: `<p>Video dominates every platform. Instagram prioritizes Reels. TikTok is entirely video. YouTube rewards watch time. LinkedIn's algorithm favors native video content. If your brand isn't producing <strong>high-quality video at volume</strong>, you're invisible.</p>
<p>Nativz produces professional video content designed for distribution — not for film festivals. Our production team shoots with social-first framing (9:16, 1:1, 16:9), hook-first storytelling, and the creative diversity that algorithms reward. From brand anthems to product demos to 15-second ad hooks, we produce every format your strategy demands.</p>`
            },
            {
                heading: "What We Produce",
                body: `<ul>
<li><strong>Brand videos</strong>: Story-driven brand films that communicate your mission, culture, and value proposition.</li>
<li><strong>Social content videos</strong>: Platform-native video optimized for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn.</li>
<li><strong>Ad creative</strong>: Direct response video ads with strong hooks, clear messaging, and conversion-focused CTAs for paid campaigns.</li>
<li><strong>Corporate & event</strong>: Company culture videos, event recaps, testimonials, and internal communications.</li>
<li><strong>Product demos</strong>: Showcasing features, unboxings, tutorials, and how-to videos that drive consideration and conversion.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Production Day", description: "Full-day video shoot with professional crew, cinema-grade equipment, and creative direction for all planned content." },
            { title: "Edited Video Package", description: "10-20+ unique edited videos per production day — multiple formats, aspect ratios, and durations for each platform." },
            { title: "Raw Footage Delivery", description: "All raw footage delivered in organized folders for your archive and future use." },
            { title: "Post-Production", description: "Color grading, sound design, captioning, motion graphics overlays, and music licensing for all delivered videos." },
        ],
        faqItems: [
            { question: "How many videos do you produce per film day?", answer: "Typically 10-20+ unique edited videos from a single production day. This includes different formats (Reels, TikToks, long-form, ad cuts) and different concepts — not just the same video in different crops." },
            { question: "Do you provide the equipment?", answer: "Yes. We bring all equipment: cameras, lighting, audio, stabilizers, and any specialty gear needed for your shoot. You don't need to provide anything except access to your location or products." },
            { question: "Can you film at our location?", answer: "Yes. We film on location across DFW and travel nationwide for client shoots. We can also host shoots at our studio for product-focused content and controlled environments." },
        ],
    }),
    defineService({
        title: "Photography Services",
        slug: "photography",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Brand photography, product photography, lifestyle shoots, and content-ready image production.",
        metaTitle: "Photography Agency Dallas | Nativz",
        metaDescription: "Nativz delivers brand photography, product photography, and lifestyle shoots tailored for social media, advertising, and web content.",
        primaryKeywords: ["brand photography Dallas", "product photography"],
        minWordCount: 1200,
        content: [
            {
                heading: "Photography Designed for Digital Performance",
                body: `<p>Most photography agencies deliver beautiful images with no strategy behind them. Nativz produces photography that's designed to <strong>perform across digital channels</strong> — social media feeds, ad placements, website pages, and e-commerce listings.</p>
<p>Every shoot is planned with platform requirements in mind: proper aspect ratios, negative space for text overlays, lifestyle context that drives engagement, and product angles that convert browsers into buyers. The result is a library of images that fuel your content calendar for months.</p>`
            },
        ],
        deliverables: [
            { title: "Brand Photography", description: "Team portraits, office/location imagery, and behind-the-scenes content that humanizes your brand across web and social channels." },
            { title: "Product Photography", description: "Studio and lifestyle product shots with consistent styling, proper lighting, and e-commerce-ready formatting." },
            { title: "Lifestyle Imagery", description: "In-context lifestyle photography showing your products or services in real-world use — ideal for social media and advertising." },
            { title: "Edited Image Library", description: "All images delivered retouched, color-corrected, and organized with platform-specific crops and sizing." },
        ],
        faqItems: [
            { question: "How many photos do we receive per shoot?", answer: "Typically 50-150+ edited photos per shoot day, depending on the scope. This includes multiple setups, angles, and platform-specific crops ready for immediate use across social media, web, and advertising." },
            { question: "Do you shoot food photography?", answer: "Yes. Food and beverage photography is one of our specialties. We work with restaurants, CPG brands, and food delivery services to create appetizing imagery that drives orders and engagement." },
        ],
    }),
    defineService({
        title: "UGC Content Creation",
        slug: "ugc-creation",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Produced UGC-style content at scale. Creator-style videos that feel native and feed Andromeda's appetite.",
        metaTitle: "UGC Content Creation Agency | Nativz",
        metaDescription: "Nativz produces UGC-style content at scale: creator-style videos, authentic testimonials, and native-feeling ad creative that Andromeda rewards.",
        primaryKeywords: ["UGC agency", "user generated content production"],
        minWordCount: 1500,
        content: [
            {
                heading: "UGC-Style Content Without the UGC Headaches",
                body: `<p>User-generated content outperforms polished ads on nearly every platform. The authentic, creator-style aesthetic drives higher engagement, better ad performance, and stronger trust signals. But actually sourcing UGC from real customers is unpredictable, uncontrollable, and unscalable.</p>
<p>Nativz produces <strong>UGC-style content at scale</strong> — creator-style videos with the authentic energy of real user content, but with the quality control, messaging accuracy, and production consistency of professional content. Same look. Same performance. Complete control.</p>`
            },
            {
                heading: "How We Produce UGC at Scale",
                body: `<ul>
<li><strong>Creator casting</strong>: We source and cast creators who match your brand's demographic and aesthetic — real faces, authentic deliveries, diverse representation.</li>
<li><strong>Scripted authenticity</strong>: We write scripts that sound natural and unscripted while hitting every messaging point. Hook-first structure, conversational tone, genuine energy.</li>
<li><strong>iPhone-quality filming</strong>: Shot on iPhone Pro with professional audio. The look is native and organic — not polished, not stock footage. Real creator energy.</li>
<li><strong>Volume production</strong>: A single UGC session produces 8-15 unique videos with different hooks, angles, and messaging — ready for organic posting and ad testing.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "UGC Video Package", description: "8-15 unique UGC-style videos per session — different creators, hooks, and messaging angles — ready for organic and paid use." },
            { title: "Creator Sourcing", description: "Casting and coordinating creators who match your brand's target audience, aesthetic, and values." },
            { title: "Script Development", description: "Authentic-sounding scripts with strong hooks, key messaging points, and conversational CTAs for each creator." },
            { title: "Ad-Ready Cuts", description: "Platform-specific ad versions with captioning, music, and formatting optimized for Meta, TikTok, and YouTube." },
        ],
        faqItems: [
            { question: "Is this real UGC or produced content?", answer: "It's professionally produced content that looks and feels like authentic UGC. We use real people (not actors), conversational scripts, and iPhone-quality filming to create authentic-feeling content with professional messaging control. Audiences can't tell the difference — and algorithms reward it." },
            { question: "How many UGC videos do you produce per month?", answer: "Typically 8-15 unique UGC videos per production session. Most clients schedule monthly sessions for consistent content. Each video features different hooks and angles to maximize creative testing volume." },
            { question: "Can we use UGC content for paid ads?", answer: "Absolutely — that's a primary use case. UGC-style ad creative consistently outperforms polished brand ads on Meta and TikTok. We produce UGC with ad testing in mind, delivering multiple hook and CTA variations for each concept." },
        ],
    }),
    defineService({
        title: "Short-Form Video Production",
        slug: "short-form-video",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Reels, TikToks, YouTube Shorts. 10+ unique angles from a single production day.",
        metaTitle: "Short-Form Video Production Agency | Nativz",
        metaDescription: "Nativz produces Reels, TikToks, and YouTube Shorts at creative volume. 10+ unique angles from every production day, optimized for algorithmic distribution.",
        primaryKeywords: ["short form video agency", "reels production", "TikTok content"],
        minWordCount: 1500,
        content: [
            {
                heading: "Short-Form Video: The Dominant Content Format",
                body: `<p>Short-form video is the single most important content format in 2025. Instagram Reels, TikToks, and YouTube Shorts receive <strong>more distribution, more engagement, and more algorithmic amplification</strong> than any other format. Brands that don't produce short-form video at volume are functionally invisible on social media.</p>
<p>Nativz produces short-form video at the creative volume that algorithms demand — 10+ unique videos from every production day, each with platform-native editing, hook-first structures, and trend-responsive creative. Not recycled long-form clips. Not the same Reel posted to three platforms. Genuinely unique short-form content for each channel.</p>`
            },
        ],
        deliverables: [
            { title: "Short-Form Video Package", description: "10-15+ unique Reels, TikToks, and YouTube Shorts per production session, each with platform-native editing and formatting." },
            { title: "Hook-First Editing", description: "Every video opens with a scroll-stopping hook designed for the 0.5-second attention window that determines algorithmic distribution." },
            { title: "Trend Integration", description: "Trend-responsive content that incorporates current audio trends, visual formats, and platform-specific features for maximum reach." },
            { title: "Caption & Hashtag Strategy", description: "SEO-optimized captions and researched hashtag sets for each platform to maximize discoverability." },
        ],
        faqItems: [
            { question: "Do you create the same video for Reels, TikTok, and Shorts?", answer: "No. Each platform has different audience behavior, trending formats, and algorithmic preferences. We produce unique edits for each platform — not the same video with a different watermark." },
            { question: "How do you decide what short-form content to create?", answer: "We combine your brand strategy with real-time trend analysis. Each month, we identify trending formats, audio, and content styles on each platform and create content that puts your brand in those conversations authentically." },
        ],
    }),
    defineService({
        title: "Podcast Production",
        slug: "podcast-production",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Full-service podcast production: recording, editing, distribution, and audience growth strategy.",
        metaTitle: "Podcast Production Agency | Nativz",
        metaDescription: "Nativz provides end-to-end podcast production: recording, editing, show notes, distribution, and audience growth strategy across all major platforms.",
        primaryKeywords: ["podcast production agency", "podcast marketing"],
        minWordCount: 1200,
        content: [
            {
                heading: "Podcasts: The Long-Form Content Engine",
                body: `<p>A single podcast episode produces more content than most brands create in a month. One 45-minute conversation becomes an episode, 10-15 video clips for social media, a blog post from the transcript, quote graphics, and audiograms. It's the most <strong>content-dense format</strong> available.</p>
<p>Nativz provides full-service podcast production — from concept development and guest booking to recording, editing, distribution, and repurposing. We handle the technical complexity so you can focus on conversations that build authority and audience.</p>`
            },
        ],
        deliverables: [
            { title: "Recording & Engineering", description: "Professional audio and video recording with multi-camera setups, wireless mics, and broadcast-quality engineering." },
            { title: "Post-Production Editing", description: "Full editing including noise reduction, EQ, leveling, intro/outro production, and seamless cuts for a polished final product." },
            { title: "Distribution & Hosting", description: "Publishing across Apple Podcasts, Spotify, YouTube, and all major platforms with proper metadata and show notes." },
            { title: "Social Media Repurposing", description: "10-15 short-form video clips extracted and edited from each episode for Instagram, TikTok, YouTube Shorts, and LinkedIn." },
        ],
        faqItems: [
            { question: "Do we need podcast equipment?", answer: "No. We provide all recording equipment or host sessions at our studio. For remote guests, we coordinate high-quality remote recording setups and provide technical guidelines." },
            { question: "How do you grow podcast audiences?", answer: "Through strategic social media repurposing, SEO-optimized show notes, guest cross-promotion, paid amplification of best-performing clips, and YouTube distribution. Each episode becomes a multi-platform content campaign." },
        ],
    }),
    defineService({
        title: "Motion Graphics & Animation",
        slug: "motion-graphics",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Motion graphics, animated explainers, kinetic typography, and dynamic visual content.",
        metaTitle: "Motion Graphics & Animation Agency | Nativz",
        metaDescription: "Nativz creates motion graphics, animated explainer videos, kinetic typography, and dynamic visual content for social media, advertising, and presentations.",
        primaryKeywords: ["motion graphics agency", "animated content", "explainer videos"],
        minWordCount: 1200,
        content: [
            {
                heading: "Motion Graphics: Making Complex Ideas Visual",
                body: `<p>Some messages can't be captured with a camera. Data visualizations, process explanations, product features, and abstract concepts need <strong>motion graphics and animation</strong> to become engaging, shareable content.</p>
<p>Nativz creates motion graphics for social media, advertising, websites, and presentations — from kinetic typography and logo animations to full animated explainer videos. Every piece is designed for digital distribution with the pacing, formatting, and visual energy that platforms reward.</p>`
            },
        ],
        deliverables: [
            { title: "Animated Explainer Videos", description: "60-120 second animated explainers that break down complex products, services, or concepts into engaging visual narratives." },
            { title: "Social Motion Graphics", description: "Animated content for social media — kinetic typography, data visualizations, product feature highlights, and dynamic quote cards." },
            { title: "Logo & Brand Animations", description: "Animated logo reveals, brand intros, and motion identity elements for video content and presentations." },
            { title: "Ad Creative Animation", description: "Animated display ads, motion-enhanced video ads, and dynamic creative for paid campaigns across all platforms." },
        ],
        faqItems: [
            { question: "What software do you use for animation?", answer: "We use Adobe After Effects for motion graphics, Cinema 4D for 3D renders, and Lottie for web-ready animations. The toolset depends on the project — we choose based on what delivers the best result for each use case." },
            { question: "How long does a motion graphics project take?", answer: "Simple social animations take 3-5 days. Animated explainer videos typically take 2-3 weeks from script approval to final delivery. Complex projects with custom illustration or 3D elements may take 4-6 weeks." },
        ],
    }),
    defineService({
        title: "Copywriting Services",
        slug: "copywriting",
        parentSlug: "content-production",
        category: "content-production",
        shortDescription: "Strategic copywriting for ads, social, web, email, and brand messaging.",
        metaTitle: "Copywriting Agency Dallas | Nativz",
        metaDescription: "Nativz writes conversion-focused copy for advertising, social media, websites, email campaigns, and brand messaging. Words that sell, at the volume algorithms demand.",
        primaryKeywords: ["copywriting agency Dallas", "content writing"],
        minWordCount: 1200,
        content: [
            {
                heading: "Words That Sell — at Algorithm Scale",
                body: `<p>Great creative without great copy is a missed opportunity. The headline that stops the scroll, the CTA that drives the click, the email subject line that earns the open — <strong>copy is the bridge between attention and action</strong>.</p>
<p>Nativz writes conversion-focused copy for advertising, social media, websites, email, and brand messaging. We don't write to sound clever. We write to sell — at the volume and variety that modern algorithms demand. That means producing dozens of unique headlines, hooks, and CTAs per month, each tested and iterated based on performance data.</p>`
            },
        ],
        deliverables: [
            { title: "Ad Copywriting", description: "Headlines, primary text, and CTAs for Meta, Google, TikTok, and LinkedIn ad campaigns — multiple variations for A/B testing." },
            { title: "Social Media Copy", description: "Platform-native captions, hooks, and CTAs for organic social content across all managed channels." },
            { title: "Website Copy", description: "Page titles, headlines, body copy, CTAs, and meta descriptions for landing pages, service pages, and website sections." },
            { title: "Email Copywriting", description: "Subject lines, preview text, body copy, and CTAs for email campaigns, sequences, and automated workflows." },
        ],
        faqItems: [
            { question: "Do you write in our brand voice?", answer: "Yes. We start every engagement by documenting your brand voice, tone, and messaging framework. All copy is written to sound like your brand — not like a generic marketing agency. If you don't have a documented brand voice, we'll create one." },
            { question: "How do you handle revisions?", answer: "We typically include two rounds of revisions per deliverable. Most clients approve on the first round because we invest heavily in the discovery and briefing process upfront." },
        ],
    }),

    // --- Website Development Sub-Services (8) ---
    defineService({
        title: "Next.js Website Development",
        slug: "nextjs-development",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Modern, pre-rendered Next.js websites with SSG/ISR, SEO-first architecture, and blazing performance.",
        metaTitle: "Next.js Development Agency | Nativz",
        metaDescription: "Nativz builds modern websites on Next.js with static site generation, incremental static regeneration, and SEO-first architecture that outperforms traditional platforms.",
        primaryKeywords: ["nextjs agency", "next.js development", "react website"],
        minWordCount: 1500,
        content: [
            {
                heading: "Next.js: The Performance-First Web Platform",
                body: `<p>Next.js is the framework that powers the fastest websites on the internet — and the one Nativz builds on by default. With <strong>static site generation (SSG)</strong>, pages are pre-rendered at build time and served instantly from CDN edge locations, eliminating server wait times entirely.</p>
<p>The result: perfect Lighthouse scores, sub-second load times, and SEO performance that traditional platforms can't match. This website you're reading right now is built on Next.js — and it loads faster than any WordPress or Squarespace site you've ever visited.</p>`
            },
            {
                heading: "Why Next.js Over WordPress or Squarespace?",
                body: `<ul>
<li><strong>Speed</strong>: Pre-rendered pages load 3-5x faster than server-rendered WordPress sites. Speed directly impacts conversion rates and search rankings.</li>
<li><strong>SEO</strong>: Full control over metadata, structured data, canonical URLs, sitemaps, and every technical SEO element — programmatically generated at build time.</li>
<li><strong>Security</strong>: No database to hack, no plugins to exploit, no login page to brute-force. Static sites have virtually zero attack surface.</li>
<li><strong>Scalability</strong>: Static pages served from CDN can handle unlimited traffic without server upgrades or caching configurations.</li>
<li><strong>Developer experience</strong>: Modern React components, TypeScript support, and composable architecture that makes future updates fast and reliable.</li>
</ul>`
            },
        ],
        deliverables: [
            { title: "Next.js Development", description: "Full website build on Next.js with App Router, TypeScript, static site generation, and Vercel deployment." },
            { title: "Component Library", description: "Reusable React component library with responsive design, animations, and accessibility built into every element." },
            { title: "SEO Architecture", description: "Programmatic metadata, JSON-LD schema markup, sitemap generation, and Core Web Vitals optimization." },
            { title: "CMS Integration", description: "Content management integration via headless CMS (Payload, Sanity, or Strapi) for non-technical content editing." },
        ],
        faqItems: [
            { question: "Is Next.js harder to manage than WordPress?", answer: "For content updates, we pair Next.js with a headless CMS that gives your team a familiar editing interface. You won't touch code — you'll edit content in a clean dashboard, and changes deploy automatically." },
            { question: "How much does a Next.js website cost?", answer: "Next.js projects typically start at $8,000-$15,000 for standard business websites and scale to $25,000-$50,000+ for complex e-commerce or web application builds. We provide detailed proposals after a discovery session." },
            { question: "Can Next.js handle e-commerce?", answer: "Yes. Next.js pairs with headless commerce platforms like Shopify (headless mode), Medusa, and Saleor for e-commerce builds that are significantly faster than traditional Shopify themes." },
        ],
    }),
    defineService({
        title: "E-Commerce Website Development",
        slug: "ecommerce",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "E-commerce stores on Shopify, WooCommerce, headless commerce, and custom platforms.",
        metaTitle: "E-Commerce Website Development Agency | Nativz",
        metaDescription: "Nativz develops e-commerce websites on Shopify, WooCommerce, headless commerce (Medusa, Saleor), and custom platforms optimized for conversion and growth.",
        primaryKeywords: ["ecommerce website agency", "online store development"],
        minWordCount: 1500,
        content: [
            {
                heading: "E-Commerce Built for Conversion",
                body: `<p>An e-commerce website that looks good but doesn't convert is an expensive liability. Nativz builds online stores that are engineered from the ground up for <strong>speed, search visibility, and conversion rate optimization</strong>. Every product page, checkout flow, and category layout is designed to turn browsers into buyers.</p>
<p>We build on Shopify, WooCommerce, headless commerce (Medusa, Saleor), and fully custom platforms — choosing the architecture that matches your business model, product catalog, and growth trajectory.</p>`
            },
        ],
        deliverables: [
            { title: "E-Commerce Platform Build", description: "Complete online store development on your chosen platform with custom theme, product catalog, and checkout optimization." },
            { title: "Product Page Optimization", description: "High-converting product pages with lifestyle imagery, trust signals, review integration, and urgency elements." },
            { title: "Payment & Shipping Setup", description: "Payment gateway integration, shipping calculator configuration, tax automation, and fulfillment workflow setup." },
            { title: "Analytics & Tracking", description: "Enhanced e-commerce tracking in GA4, Meta Pixel, and advertising platform pixels for complete purchase funnel visibility." },
        ],
        faqItems: [
            { question: "Shopify or WooCommerce?", answer: "Shopify for businesses that want a reliable, hosted platform with minimal technical overhead. WooCommerce for businesses that need WordPress integration and unlimited customization. Headless commerce for brands prioritizing performance and unique shopping experiences." },
            { question: "Can you migrate our existing store?", answer: "Yes. We handle full e-commerce migrations including product data, customer data, order history, SEO preservation (301 redirects), and payment gateway transitions." },
        ],
    }),
    defineService({
        title: "WordPress Development",
        slug: "wordpress",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Custom WordPress development, theme building, plugin development, and performance optimization.",
        metaTitle: "WordPress Development Agency Dallas | Nativz",
        metaDescription: "Nativz builds custom WordPress websites with bespoke themes, plugin development, and performance optimization for businesses that need a reliable CMS platform.",
        primaryKeywords: ["wordpress agency Dallas", "wordpress development"],
        minWordCount: 1200,
        content: [
            {
                heading: "WordPress Done Right",
                body: `<p>WordPress powers 40% of the internet — but most WordPress sites are slow, insecure, and bloated with unnecessary plugins. Nativz builds <strong>custom WordPress websites</strong> with bespoke themes, clean code, and performance optimization that makes WordPress competitive with modern platforms.</p>
<p>We don't use page builders or pre-built themes. Every WordPress site we build features custom theme development, strategic plugin selection, security hardening, and hosting optimization for fast, reliable performance.</p>`
            },
        ],
        deliverables: [
            { title: "Custom Theme Development", description: "Bespoke WordPress theme built from scratch — no page builders, no bloated frameworks. Clean, fast, and fully customizable." },
            { title: "Plugin Development", description: "Custom plugin development for functionality that off-the-shelf plugins can't provide cleanly or efficiently." },
            { title: "Performance Optimization", description: "Caching, image optimization, database cleanup, and hosting configuration for fast page loads and strong Core Web Vitals." },
            { title: "Security Hardening", description: "Login protection, file permissions, security headers, update management, and monitoring to prevent breaches." },
        ],
        faqItems: [
            { question: "Should we still use WordPress in 2025?", answer: "WordPress is still an excellent choice for content-heavy websites with non-technical editors. Its CMS is mature, well-documented, and understood by marketing teams. For maximum performance, we recommend Next.js — but WordPress remains a strong choice for many businesses." },
            { question: "Can you fix/improve our existing WordPress site?", answer: "Yes. We offer WordPress performance audits, security hardening, speed optimization, and feature development for existing sites. We'll assess your current setup and recommend whether to optimize or rebuild." },
        ],
    }),
    defineService({
        title: "Shopify Development",
        slug: "shopify",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Shopify store development, theme customization, app integration, and Shopify Plus builds.",
        metaTitle: "Shopify Development Agency | Nativz",
        metaDescription: "Nativz develops Shopify stores with custom themes, app integration, and Shopify Plus solutions. E-commerce experiences designed for conversion and scale.",
        primaryKeywords: ["shopify agency", "shopify development Dallas"],
        minWordCount: 1200,
        content: [
            {
                heading: "Shopify Development for Serious E-Commerce",
                body: `<p>Shopify is the most reliable e-commerce platform on the market — but a default theme with standard apps won't differentiate your brand or optimize your conversion rate. Nativz develops <strong>custom Shopify stores</strong> with bespoke themes, strategic app integration, and checkout optimization that turn your store into a conversion machine.</p>
<p>We build on both standard Shopify and Shopify Plus, with experience across Liquid theme development, headless Shopify with Hydrogen/Oxygen, and advanced Shopify Functions and checkout extensions.</p>`
            },
        ],
        deliverables: [
            { title: "Custom Theme Development", description: "Bespoke Shopify theme built in Liquid with custom sections, blocks, and metafield integration for complete merchant control." },
            { title: "App Integration", description: "Strategic selection and configuration of Shopify apps for reviews, loyalty, upsells, subscriptions, and marketing automation." },
            { title: "Checkout Optimization", description: "Checkout flow optimization including Shopify Plus checkout extensions, upsell offers, and conversion tracking." },
            { title: "Launch & Training", description: "Store launch, team training, documentation, and ongoing support for day-to-day operations." },
        ],
        faqItems: [
            { question: "Shopify or Shopify Plus?", answer: "Standard Shopify handles most businesses well. Shopify Plus is for brands doing $1M+ in annual revenue that need checkout customization, Shopify Scripts, multi-store management, or advanced B2B features. We'll recommend the right tier during our discovery process." },
            { question: "Can you make our Shopify store faster?", answer: "Yes. Most Shopify speed issues come from too many apps, unoptimized images, and bloated theme code. We audit your current store, remove bottlenecks, and optimize your theme for dramatically faster load times." },
        ],
    }),
    defineService({
        title: "Landing Page Design & Development",
        slug: "landing-pages",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Conversion-optimized landing pages for campaigns, product launches, and lead generation.",
        metaTitle: "Landing Page Design & Development | Nativz",
        metaDescription: "Nativz designs and develops conversion-optimized landing pages for ad campaigns, product launches, and lead generation funnels that maximize ROI.",
        primaryKeywords: ["landing page agency", "conversion-optimized landing pages"],
        minWordCount: 1200,
        content: [
            {
                heading: "Landing Pages That Convert",
                body: `<p>Your ads drive clicks. Your landing page drives conversions. A <strong>one-second improvement in load time</strong> can increase conversions by 7%. A clear, focused landing page can double your conversion rate compared to sending traffic to your homepage.</p>
<p>Nativz designs and develops conversion-optimized landing pages for ad campaigns, product launches, and lead generation funnels. Every page is built with a single conversion goal, tested across devices, and loaded fast enough to satisfy both visitors and Google's quality score algorithm.</p>`
            },
        ],
        deliverables: [
            { title: "Landing Page Design", description: "Custom UI design with clear messaging hierarchy, compelling visuals, and conversion-focused layout optimized for your specific campaign goal." },
            { title: "Development & Deploy", description: "Fast-loading landing page development with form integration, tracking pixels, and UTM parameter handling." },
            { title: "A/B Testing Setup", description: "Split testing infrastructure to test headlines, CTAs, layouts, and offers for continuous conversion rate improvement." },
            { title: "Tracking & Analytics", description: "Conversion tracking setup across Google Ads, Meta Pixel, GA4, and heatmap tools for complete performance visibility." },
        ],
        faqItems: [
            { question: "How fast can you build a landing page?", answer: "Simple landing pages can be designed, developed, and deployed in 5-7 business days. Complex pages with custom animations, multi-step forms, or dynamic content typically take 2-3 weeks." },
            { question: "Do landing pages help ad performance?", answer: "Significantly. Google Ads uses landing page experience as a Quality Score factor — fast, relevant landing pages directly lower your CPC. Meta uses landing page load time as a delivery optimization signal. Better landing pages = lower ad costs + higher conversion rates." },
        ],
    }),
    defineService({
        title: "Web Application Development",
        slug: "web-apps",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Custom web applications, SaaS platforms, dashboards, and interactive tools.",
        metaTitle: "Web Application Development | Nativz",
        metaDescription: "Nativz develops custom web applications, SaaS platforms, interactive dashboards, and business tools with modern frameworks and scalable architecture.",
        primaryKeywords: ["web app development", "SaaS development", "custom web apps"],
        minWordCount: 1200,
        content: [
            {
                heading: "Custom Web Applications Built to Scale",
                body: `<p>When off-the-shelf software doesn't fit, you need custom. Nativz develops <strong>custom web applications</strong> — SaaS platforms, client portals, interactive dashboards, and business tools — built on modern frameworks with scalable, maintainable architecture.</p>
<p>We build with React/Next.js on the frontend, Node.js or Python on the backend, and PostgreSQL or MongoDB for data — deployed on cloud infrastructure that scales automatically with your usage.</p>`
            },
        ],
        deliverables: [
            { title: "Technical Architecture", description: "System architecture design, technology stack selection, database schema, and API structure documentation." },
            { title: "MVP Development", description: "Minimum viable product build with core features, user authentication, and essential workflows." },
            { title: "Testing & QA", description: "Automated testing, cross-browser QA, performance benchmarking, and security audit." },
            { title: "Deployment & DevOps", description: "Cloud deployment, CI/CD pipeline setup, monitoring, and scaling configuration." },
        ],
        faqItems: [
            { question: "How long does web app development take?", answer: "MVPs typically take 8-12 weeks. Full-featured applications take 3-6+ months depending on complexity. We deliver in agile sprints so you see working software early and often." },
            { question: "What tech stack do you use?", answer: "React/Next.js frontend, Node.js or Python backend, PostgreSQL or MongoDB database, deployed on AWS, Vercel, or Railway. We select the stack based on your specific requirements and long-term scalability needs." },
        ],
    }),
    defineService({
        title: "CMS Development (Payload, Strapi, Sanity)",
        slug: "cms-development",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Headless CMS development with Payload, Strapi, and Sanity. Content infrastructure that scales.",
        metaTitle: "Headless CMS Development Agency | Nativz",
        metaDescription: "Nativz builds on headless CMS platforms including Payload, Strapi, and Sanity. Modern content infrastructure that decouples your frontend from your content.",
        primaryKeywords: ["headless CMS development", "payload CMS agency"],
        minWordCount: 1200,
        content: [
            {
                heading: "Headless CMS: Content Infrastructure for Modern Brands",
                body: `<p>Traditional CMS platforms lock your content inside your website. A <strong>headless CMS</strong> separates your content from your frontend — allowing you to manage content in one place and deliver it to websites, apps, email, digital signage, and any other channel through APIs.</p>
<p>Nativz builds on Payload CMS, Strapi, and Sanity — choosing the right platform based on your content model, team size, and technical requirements. We handle the full implementation: schema design, custom fields, role-based access, and frontend integration.</p>`
            },
        ],
        deliverables: [
            { title: "CMS Architecture", description: "Content model design, schema definition, and collection structure tailored to your content types and editorial workflow." },
            { title: "CMS Implementation", description: "Full CMS deployment with custom fields, media management, role-based permissions, and preview functionality." },
            { title: "Frontend Integration", description: "API integration connecting your CMS to your Next.js, React, or other frontend framework with proper caching and revalidation." },
            { title: "Editor Training", description: "Training sessions and documentation for your content team to manage content independently." },
        ],
        faqItems: [
            { question: "Payload, Strapi, or Sanity — which should we choose?", answer: "Payload for full TypeScript apps with maximum customization. Strapi for teams that want an open-source, self-hosted CMS with a friendly admin UI. Sanity for collaborative editing and real-time preview. We'll recommend based on your requirements." },
            { question: "Is a headless CMS harder to use than WordPress?", answer: "The editing experience is similar — you log in, edit content in fields, and publish. The main difference is that a headless CMS is more structured, which makes content more consistent and reusable across channels." },
        ],
    }),
    defineService({
        title: "Website Redesign Services",
        slug: "website-redesign",
        parentSlug: "website-development",
        category: "website-development",
        shortDescription: "Full website redesigns: performance audits, UX overhauls, and migration to modern platforms.",
        metaTitle: "Website Redesign Agency | Nativz",
        metaDescription: "Nativz redesigns websites with performance audits, UX overhauls, and platform migration. Transform your outdated site into a modern, high-converting machine.",
        primaryKeywords: ["website redesign agency", "site rebuild"],
        minWordCount: 1200,
        content: [
            {
                heading: "Website Redesign: From Liability to Asset",
                body: `<p>If your website is more than 3 years old, it's likely costing you customers. Outdated design, slow load times, poor mobile experience, and weak SEO don't just look bad — they actively <strong>repel visitors and tank your search rankings</strong>.</p>
<p>Nativz provides full website redesign services: performance audit, UX overhaul, content migration, and platform upgrade. We don't just make your site look better — we rebuild it on modern architecture that loads faster, ranks higher, and converts more visitors into customers.</p>`
            },
        ],
        deliverables: [
            { title: "Performance & UX Audit", description: "Comprehensive analysis of your current website's speed, UX, SEO, accessibility, and conversion performance with prioritized recommendations." },
            { title: "Redesign & Development", description: "Complete visual redesign and development on your chosen platform with modern UI, responsive design, and performance optimization." },
            { title: "Content Migration", description: "Full content migration with SEO preservation — 301 redirects, metadata transfer, and image optimization for every migrated page." },
            { title: "Post-Launch Monitoring", description: "30-day post-launch monitoring covering performance metrics, SEO rankings, error tracking, and user behavior analytics." },
        ],
        faqItems: [
            { question: "Will a redesign hurt our SEO rankings?", answer: "Not if done correctly. We implement comprehensive 301 redirect maps, preserve all metadata, and maintain URL structures where possible. Our redesigns typically improve SEO performance because the new site is faster, more accessible, and better structured." },
            { question: "How long does a website redesign take?", answer: "Most redesigns take 8-14 weeks depending on the size of the existing site and the scope of content migration. We provide a detailed timeline after our initial audit." },
        ],
    }),

    // --- SEO Sub-Services (6) ---
    defineService({
        title: "Local SEO Services",
        slug: "local-seo",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Google Business Profile optimization, local citations, review management, and map pack domination.",
        metaTitle: "Local SEO Agency Dallas | Nativz",
        metaDescription: "Nativz delivers local SEO services: Google Business Profile optimization, local citations, review management, and map pack strategy for DFW businesses and beyond.",
        primaryKeywords: ["local SEO agency", "Google Business Profile optimization"],
        minWordCount: 1500,
        content: [
            {
                heading: "Own Your Local Market",
                body: `<p>When someone searches "best [your service] near me," will they find you or your competitor? <strong>Local SEO</strong> determines which businesses appear in Google's map pack, local results, and "near me" searches — the queries with the highest purchase intent in all of search.</p>
<p>Nativz optimizes every element of your local presence: Google Business Profile, local citations, review management, on-page local signals, and local link building. For businesses that serve a geographic area, local SEO isn't optional — it's the foundation of your digital visibility.</p>`
            },
        ],
        deliverables: [
            { title: "Google Business Profile Optimization", description: "Complete GBP setup and optimization: categories, attributes, services, products, photos, posts, and Q&A management." },
            { title: "Local Citation Building", description: "Consistent NAP listings across 50+ authoritative directories, data aggregators, and industry-specific platforms." },
            { title: "Review Management Strategy", description: "Review generation campaigns, response templates, and reputation monitoring across Google, Yelp, and industry platforms." },
            { title: "Local Content Strategy", description: "Location-specific landing pages, local blog content, and community-focused content that builds local relevance." },
        ],
        faqItems: [
            { question: "How long does local SEO take?", answer: "Most businesses see map pack improvements within 2-4 months. Competitive markets may take 4-6 months for consistent top-3 placement." },
            { question: "Do you manage Google Business Profile posts?", answer: "Yes. We create and publish weekly GBP posts with photos, offers, and updates to keep your profile active and engaging." },
        ],
    }),
    defineService({
        title: "Technical SEO Services",
        slug: "technical-seo",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Site speed optimization, crawlability audits, schema markup, Core Web Vitals, and technical infrastructure.",
        metaTitle: "Technical SEO Agency | Nativz",
        metaDescription: "Nativz provides technical SEO services: site speed optimization, crawlability audits, schema markup implementation, and Core Web Vitals engineering.",
        primaryKeywords: ["technical SEO agency", "site speed", "crawlability"],
        minWordCount: 1500,
        content: [
            {
                heading: "The Foundation Search Engines Demand",
                body: `<p>Technical SEO is the infrastructure layer that determines whether search engines can efficiently crawl, index, and rank your content. Without it, even the best content sits invisible. Nativz engineers the technical foundations: <strong>site speed, Core Web Vitals, crawlability, schema markup, XML sitemaps, and indexation management</strong> — ensuring search engines see every page and rank it appropriately.</p>`
            },
        ],
        deliverables: [
            { title: "Technical SEO Audit", description: "Full crawl analysis with Screaming Frog covering indexation, redirect chains, broken links, duplicate content, and crawl budget optimization." },
            { title: "Core Web Vitals Engineering", description: "Performance optimization for LCP, INP, and CLS metrics ensuring your site passes all Core Web Vitals thresholds." },
            { title: "Schema Markup Implementation", description: "JSON-LD structured data for Organization, LocalBusiness, Product, FAQ, and relevant schema types." },
            { title: "Site Architecture Optimization", description: "Internal linking strategy, URL structure, breadcrumbs, and navigation optimization for crawl efficiency." },
        ],
        faqItems: [
            { question: "How do you audit technical SEO?", answer: "We use Screaming Frog for full-site crawls, Google Search Console for indexation data, PageSpeed Insights for performance metrics, and custom tools for schema validation and log file analysis." },
            { question: "What are Core Web Vitals?", answer: "Core Web Vitals are Google's metrics for page experience: LCP (loading speed), INP (interactivity), and CLS (visual stability). They directly impact rankings and are a critical part of technical SEO." },
        ],
    }),
    defineService({
        title: "E-Commerce SEO",
        slug: "ecommerce-seo",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Product page optimization, category architecture, internal linking, and conversion-focused search strategy.",
        metaTitle: "E-Commerce SEO Agency | Nativz",
        metaDescription: "Nativz optimizes e-commerce sites for search: product page SEO, category architecture, faceted navigation, and conversion-focused content strategy.",
        primaryKeywords: ["ecommerce SEO agency", "product page optimization"],
        minWordCount: 1500,
        content: [
            {
                heading: "SEO That Drives Revenue, Not Just Traffic",
                body: `<p>E-commerce SEO isn't about ranking for vanity keywords — it's about capturing purchase-intent traffic that converts into revenue. Nativz optimizes product pages, category architecture, faceted navigation, and internal linking to ensure your products appear when buyers are ready to purchase. We handle the technical complexity of large e-commerce catalogs while maintaining the content quality that Google rewards.</p>`
            },
        ],
        deliverables: [
            { title: "Product Page Optimization", description: "Title tags, descriptions, image alt text, schema markup, and unique content for high-priority product pages." },
            { title: "Category Architecture", description: "Optimized category hierarchy, faceted navigation management, and internal linking structure for crawl efficiency." },
            { title: "E-Commerce Content Strategy", description: "Buying guides, comparison content, and category descriptions that build topical authority and capture long-tail traffic." },
            { title: "Technical E-Commerce SEO", description: "Canonical management, pagination handling, faceted URL parameters, and crawl budget optimization for large catalogs." },
        ],
        faqItems: [
            { question: "Which e-commerce platforms do you work with?", answer: "We work with Shopify, WooCommerce, BigCommerce, Magento, and custom-built e-commerce platforms. Each has unique technical SEO considerations that we handle." },
            { question: "How do you handle large product catalogs?", answer: "We prioritize pages by revenue potential, implement smart crawl budget management, and use programmatic SEO techniques to scale optimization across thousands of products." },
        ],
    }),
    defineService({
        title: "Content SEO & Strategy",
        slug: "content-seo",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Keyword research, content strategy, topic clustering, and editorial planning for organic growth.",
        metaTitle: "Content SEO & Strategy Agency | Nativz",
        metaDescription: "Nativz builds content SEO strategies: keyword research, topic clustering, editorial calendars, and data-driven content planning for sustainable organic growth.",
        primaryKeywords: ["content SEO agency", "keyword research", "content strategy"],
        minWordCount: 1200,
        content: [
            {
                heading: "Content That Ranks and Converts",
                body: `<p>Content SEO bridges the gap between what your audience searches for and what your business offers. Nativz builds data-driven content strategies using <strong>keyword research, topic clustering, search intent analysis, and competitive gap identification</strong> to create editorial plans that systematically build topical authority and capture organic traffic.</p>`
            },
        ],
        deliverables: [
            { title: "Keyword Research & Mapping", description: "Comprehensive keyword research with search volume, difficulty, intent classification, and mapping to target pages." },
            { title: "Topic Cluster Strategy", description: "Pillar pages and supporting content organized into topic clusters that build topical authority in your key categories." },
            { title: "Editorial Calendar", description: "Monthly content calendar with topics, target keywords, content format, and publishing schedule." },
            { title: "Content Optimization", description: "On-page optimization of existing content — heading structure, keyword integration, internal linking, and content expansion." },
        ],
        faqItems: [
            { question: "Do you write the content too?", answer: "Yes. Our content SEO and copywriting services work together. We research and plan the strategy, then produce the content — or optimize content your team creates." },
            { question: "What is a topic cluster?", answer: "A topic cluster is a pillar page covering a broad topic linked to supporting articles on related subtopics. This structure signals topical authority to Google and improves rankings across the entire cluster." },
        ],
    }),
    defineService({
        title: "Link Building Services",
        slug: "link-building",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Strategic link building, digital PR, guest posting, and backlink acquisition campaigns.",
        metaTitle: "Link Building Agency | Nativz",
        metaDescription: "Nativz builds high-quality backlink profiles through digital PR, strategic outreach, guest posting, and authority link acquisition campaigns.",
        primaryKeywords: ["link building agency", "backlink strategy", "digital PR"],
        minWordCount: 1200,
        content: [
            {
                heading: "Quality Links, Not Quantity",
                body: `<p>Backlinks remain one of Google's strongest ranking signals — but only when they're earned from relevant, authoritative sources. Nativz builds backlink profiles through <strong>digital PR, strategic outreach, guest publishing, and content-driven link attraction</strong>. No PBNs, no spam, no shortcuts that put your site at risk.</p>`
            },
        ],
        deliverables: [
            { title: "Link Building Strategy", description: "Competitive backlink analysis, opportunity identification, and monthly link acquisition targets based on your competitive landscape." },
            { title: "Digital PR Campaigns", description: "Newsworthy content creation, journalist outreach, and press coverage that earns authoritative editorial links." },
            { title: "Guest Posting", description: "High-quality guest articles placed on relevant industry publications with contextual backlinks to your target pages." },
            { title: "Monthly Link Reports", description: "Detailed reporting on links acquired, domain authority growth, and competitive backlink gap analysis." },
        ],
        faqItems: [
            { question: "Are your links safe?", answer: "Yes. We only build links through legitimate methods — digital PR, editorial outreach, and guest publishing on real websites. We never use PBNs, link farms, or manipulative tactics that risk Google penalties." },
            { question: "How many links do you build per month?", answer: "Typically 5-20 high-quality links per month depending on your package. One authoritative, relevant link is worth more than 100 low-quality links." },
        ],
    }),
    defineService({
        title: "Franchise SEO",
        slug: "franchise-seo",
        parentSlug: "seo",
        category: "seo",
        shortDescription: "Multi-location SEO, BDF programs, Google Business Profile management at scale, and franchise system search strategy.",
        metaTitle: "Franchise SEO Agency | Nativz",
        metaDescription: "Nativz delivers franchise SEO at scale: multi-location optimization, BDF programs, Google Business Profile management, and tiered service packages for franchise systems.",
        primaryKeywords: ["franchise SEO agency", "multi-location SEO"],
        minWordCount: 1500,
        content: [
            {
                heading: "SEO at Scale for Franchise Systems",
                body: `<p>Franchise SEO is a different beast. You need consistent brand presence across dozens or hundreds of locations while optimizing each for its unique local market. Nativz builds <strong>scalable franchise SEO programs</strong> — tiered BDF (Brand Development Fund) packages, centralized GBP management, location-specific content, and multi-location reporting that gives both corporate and franchisees the visibility they need.</p>`
            },
        ],
        deliverables: [
            { title: "Multi-Location GBP Management", description: "Centralized Google Business Profile optimization and management across all franchise locations with location-specific content." },
            { title: "Tiered BDF Packages", description: "Scalable SEO service tiers that franchisees can opt into through Brand Development Fund programs." },
            { title: "Location Landing Pages", description: "SEO-optimized location pages for each franchise with unique content, local signals, and conversion optimization." },
            { title: "System-Wide Reporting", description: "Corporate-level dashboards showing performance across all locations plus individual location reports for franchisees." },
        ],
        faqItems: [
            { question: "How do you handle SEO for hundreds of locations?", answer: "We use scalable systems — templated location pages with unique content, centralized GBP management tools, and automated reporting — that maintain quality while scaling across your entire franchise system." },
            { question: "Can individual franchisees opt into SEO?", answer: "Yes. We design tiered packages that franchisees can select based on their market competitiveness and growth goals, often funded through Brand Development Funds." },
        ],
    }),

    // --- AEO Sub-Services (4) ---
    defineService({
        title: "ChatGPT & AI Chatbot Optimization",
        slug: "chatgpt-optimization",
        parentSlug: "aeo",
        category: "aeo",
        shortDescription: "Optimize your brand's visibility in ChatGPT, Claude, and AI chatbot responses.",
        metaTitle: "ChatGPT Optimization Agency | Nativz",
        metaDescription: "Nativz optimizes your brand for citation and visibility in ChatGPT, Claude, and other AI chatbot responses. The new frontier of brand discoverability.",
        primaryKeywords: ["ChatGPT optimization", "AI chatbot visibility"],
        minWordCount: 1200,
        content: [
            {
                heading: "Get Your Brand Cited by ChatGPT",
                body: `<p>Over 100 million people ask ChatGPT for recommendations every week. When someone asks "what's the best marketing agency in Dallas?" or "who makes the best [your product]?" — is your brand in the answer? <strong>ChatGPT optimization</strong> ensures your brand appears in AI chatbot responses through entity establishment, authoritative content, and structured data that large language models reference when generating answers.</p>`
            },
        ],
        deliverables: [
            { title: "ChatGPT Visibility Audit", description: "Baseline analysis of how ChatGPT, Claude, and other AI chatbots currently reference your brand versus competitors." },
            { title: "Entity Optimization", description: "Building your brand's entity presence across authoritative sources that AI models use for training and retrieval." },
            { title: "Citation-Worthy Content", description: "Creating and optimizing content formats that AI chatbots cite when answering relevant queries." },
            { title: "Ongoing Monitoring", description: "Regular testing and tracking of your brand's mention rate and accuracy in AI chatbot responses." },
        ],
        faqItems: [
            { question: "Can you control what ChatGPT says about my brand?", answer: "You can't directly control AI responses, but you can heavily influence them by building a strong entity presence, creating authoritative content, and ensuring accurate information across the sources AI models reference." },
            { question: "How often do AI models update?", answer: "GPT models update their training data periodically (typically every few months), and retrieval-augmented models like Perplexity access real-time data. Our optimization works for both paradigms." },
        ],
    }),
    defineService({
        title: "Google AI Overviews Optimization",
        slug: "google-ai-overviews",
        parentSlug: "aeo",
        category: "aeo",
        shortDescription: "Get featured in Google AI Overviews (formerly SGE). Structured content that AI summarizes and cites.",
        metaTitle: "Google AI Overviews Optimization | Nativz",
        metaDescription: "Nativz optimizes your content for Google AI Overviews. Structured, authoritative content designed to be summarized and cited by Google's AI search features.",
        primaryKeywords: ["Google AI overview optimization", "SGE optimization"],
        minWordCount: 1200,
        content: [
            {
                heading: "Win the AI Overview Box",
                body: `<p>Google AI Overviews appear above traditional search results on 80%+ of informational queries — and they're expanding to commercial queries rapidly. Getting cited in an AI Overview means your brand appears at the very top of Google's search results. Nativz optimizes your content with structured formatting, clear authority signals, and the content patterns that Google's AI models prefer to cite.</p>`
            },
        ],
        deliverables: [
            { title: "AI Overview Presence Audit", description: "Analysis of which queries trigger AI Overviews in your category and where your content currently appears or is absent." },
            { title: "Content Restructuring", description: "Reformatting existing content with clear headings, concise answers, structured lists, and citation-friendly formatting." },
            { title: "Authority Signal Building", description: "Strengthening E-E-A-T signals — author credentials, source citations, expert quotes — that Google's AI prioritizes." },
        ],
        faqItems: [
            { question: "What are Google AI Overviews?", answer: "AI Overviews are AI-generated summaries that appear at the top of Google search results, synthesizing information from multiple sources. They replaced the former SGE (Search Generative Experience) and appear on the majority of informational queries." },
            { question: "Do AI Overviews reduce organic clicks?", answer: "Some queries see reduced click-through, but being cited in an AI Overview gives your brand top-of-page visibility and credibility. The brands cited in AI Overviews gain disproportionate trust and recognition." },
        ],
    }),
    defineService({
        title: "Perplexity AI Optimization",
        slug: "perplexity-optimization",
        parentSlug: "aeo",
        category: "aeo",
        shortDescription: "Maximize your brand's visibility in Perplexity AI search results and citations.",
        metaTitle: "Perplexity AI Optimization | Nativz",
        metaDescription: "Nativz optimizes your digital presence for Perplexity AI search: authoritative content, structured data, and citation-worthy resources.",
        primaryKeywords: ["perplexity optimization", "AI search engine visibility"],
        minWordCount: 1000,
        content: [
            {
                heading: "The Fastest-Growing Search Engine You're Not Optimizing For",
                body: `<p>Perplexity is the fastest-growing search engine in history — a real-time AI search tool that provides cited, sourced answers. Unlike ChatGPT, Perplexity accesses the live web, meaning your content is either being cited right now or it's not. Nativz optimizes your digital footprint to maximize citation rate in Perplexity responses through authoritative content, structured data, and strategic source positioning.</p>`
            },
        ],
        deliverables: [
            { title: "Perplexity Citation Audit", description: "Baseline analysis of how Perplexity currently cites (or doesn't cite) your brand versus competitors for key queries." },
            { title: "Source Optimization", description: "Optimizing your content to meet Perplexity's source selection criteria — freshness, authority, structure, and relevance." },
            { title: "Content Formatting", description: "Creating content with clear, structured answers that Perplexity's AI preferentially cites." },
        ],
        faqItems: [
            { question: "How does Perplexity decide what to cite?", answer: "Perplexity uses real-time web access and prioritizes authoritative, well-structured, and recently updated content. It cites sources that provide clear, definitive answers to user queries." },
            { question: "Can I advertise on Perplexity?", answer: "Perplexity is beginning to introduce sponsored results, but organic optimization — getting cited in answers naturally — remains the primary opportunity for brand visibility." },
        ],
    }),
    defineService({
        title: "llms.txt Implementation & AI Crawler Strategy",
        slug: "llms-txt-implementation",
        parentSlug: "aeo",
        category: "aeo",
        shortDescription: "Implement llms.txt files and optimize your site architecture for AI crawler indexing.",
        metaTitle: "llms.txt Implementation Agency | Nativz",
        metaDescription: "Nativz implements llms.txt files and optimizes your site architecture for AI crawlers. Give large language models structured access to your brand's knowledge.",
        primaryKeywords: ["llms.txt setup", "AI crawler optimization"],
        minWordCount: 1000,
        content: [
            {
                heading: "Give AI Direct Access to Your Brand's Knowledge",
                body: `<p>llms.txt is the robots.txt for the AI era — a structured file that gives large language models direct, formatted access to your brand's key information. While most businesses don't even know llms.txt exists, Nativz is implementing it for forward-thinking brands that want to control how AI models access and represent their business. We implement llms.txt files, optimize site architecture for AI crawlers, and ensure your brand's most important information is machine-readable.</p>`
            },
        ],
        deliverables: [
            { title: "llms.txt File Creation", description: "Custom llms.txt file with structured brand information, service descriptions, and key data formatted for AI consumption." },
            { title: "AI Crawler Architecture", description: "Site architecture optimization ensuring AI crawlers can efficiently access and parse your most important content." },
            { title: "Structured Data Enhancement", description: "FAQ schema, JSON-LD, and semantic HTML enhancements that make your content machine-readable for AI systems." },
        ],
        faqItems: [
            { question: "What is llms.txt?", answer: "llms.txt is a proposed standard (similar to robots.txt) that provides AI models with structured access to a website's key information. It tells AI crawlers what your business is, what you do, and how to accurately represent you." },
            { question: "Does this website have an llms.txt?", answer: "Yes. Nativz practices what we preach — this website includes a comprehensive llms.txt file that helps AI models accurately understand and cite our agency." },
        ],
    }),

    // --- Branding & Design Sub-Services (5) ---
    defineService({
        title: "Brand Identity Design",
        slug: "brand-identity",
        parentSlug: "branding-design",
        category: "branding-design",
        shortDescription: "Complete brand identity systems: logo design, color palettes, typography, and brand guidelines.",
        metaTitle: "Brand Identity Design Agency | Nativz",
        metaDescription: "Nativz creates complete brand identity systems: logo design, color palettes, typography selection, and comprehensive brand guidelines that scale across every touchpoint.",
        primaryKeywords: ["brand identity agency", "logo design", "visual identity"],
        minWordCount: 1500,
        content: [
            {
                heading: "Your Brand's Visual DNA",
                body: `<p>Brand identity is the visual DNA of your business — the logo, colors, typography, imagery, and design patterns that make your brand instantly recognizable. Nativz creates complete brand identity systems that work consistently across digital, print, packaging, signage, and every customer touchpoint. From new brands to established companies ready for a refresh, we build visual identities that communicate who you are before a single word is read.</p>`
            },
        ],
        deliverables: [
            { title: "Logo & Mark Design", description: "Primary logo, secondary marks, icon variations, and responsive logo versions for every application and size." },
            { title: "Color System", description: "Primary and secondary color palettes with Hex, RGB, CMYK, and Pantone specifications for digital and print consistency." },
            { title: "Typography Selection", description: "Primary and secondary typefaces with hierarchy, sizing, and usage guidelines for headlines, body text, and UI." },
            { title: "Brand Guidelines Document", description: "Comprehensive guidelines covering logo usage, color specs, typography, photography direction, and application examples." },
        ],
        faqItems: [
            { question: "How many logo concepts do you present?", answer: "We typically present 3-4 distinct logo concepts based on strategic direction, then refine the selected concept through 2-3 rounds of revisions to reach the final mark." },
            { question: "Do we own the final logo files?", answer: "Yes. Upon project completion, you receive full ownership and all production-ready files in every format needed — vector (AI, EPS, SVG), raster (PNG, JPG), and PDF." },
        ],
    }),
    defineService({
        title: "Brand Strategy",
        slug: "brand-strategy",
        parentSlug: "branding-design",
        category: "branding-design",
        shortDescription: "Brand positioning, messaging frameworks, audience research, and competitive differentiation.",
        metaTitle: "Brand Strategy Agency | Nativz",
        metaDescription: "Nativz develops brand strategy: positioning, messaging frameworks, audience research, and competitive differentiation that gives your brand an unfair advantage.",
        primaryKeywords: ["brand strategy agency", "brand positioning"],
        minWordCount: 1200,
        content: [
            {
                heading: "Strategy Is the Foundation of Every Great Brand",
                body: `<p>Before any visual design begins, you need a strategic foundation — <strong>who you are, what you stand for, who you serve, and why it matters</strong>. Nativz develops brand strategies that give you an unfair advantage: crystal-clear positioning, messaging that resonates, and competitive differentiation that makes your brand the obvious choice in your category.</p>`
            },
        ],
        deliverables: [
            { title: "Brand Positioning", description: "Clear market positioning that defines where your brand sits relative to competitors and in the minds of your target audience." },
            { title: "Messaging Framework", description: "Core value proposition, messaging pillars, key proof points, and brand voice guidelines for consistent communication." },
            { title: "Audience Profiles", description: "Data-driven audience profiles covering demographics, psychographics, pain points, and decision-making behaviors." },
        ],
        faqItems: [
            { question: "Do we need brand strategy if we already have a logo?", answer: "A logo is one element of a brand. Strategy defines the meaning behind that logo — your positioning, messaging, and competitive advantage. Many successful businesses have logos but lack the strategic foundation to communicate effectively." },
            { question: "How long does brand strategy take?", answer: "A comprehensive brand strategy project typically takes 3-4 weeks, including stakeholder interviews, market research, competitive analysis, and strategic development." },
        ],
    }),
    defineService({
        title: "Graphic Design Services",
        slug: "graphic-design",
        parentSlug: "branding-design",
        category: "branding-design",
        shortDescription: "Marketing design, social media graphics, presentation design, and print collateral.",
        metaTitle: "Graphic Design Agency Dallas | Nativz",
        metaDescription: "Nativz provides graphic design for marketing campaigns, social media, presentations, print materials, and digital collateral. Design that communicates and converts.",
        primaryKeywords: ["graphic design agency Dallas", "marketing design"],
        minWordCount: 1200,
        content: [
            {
                heading: "Design That Communicates and Converts",
                body: `<p>Great graphic design isn't decoration — it's communication. Nativz provides marketing design, social media graphics, presentation design, pitch decks, print collateral, and digital assets that visually communicate your message and drive action. Every design is on-brand, on-strategy, and built to perform in its intended context.</p>`
            },
        ],
        deliverables: [
            { title: "Social Media Graphics", description: "Platform-optimized templates and custom graphics for Instagram, LinkedIn, Facebook, and X (Twitter)." },
            { title: "Presentation Design", description: "Custom PowerPoint, Keynote, and Google Slides templates with your brand system for investor decks and sales presentations." },
            { title: "Print Collateral", description: "Business cards, brochures, flyers, banners, and trade show materials designed and delivered print-ready." },
        ],
        faqItems: [
            { question: "Do you offer ongoing design retainers?", answer: "Yes. Monthly design retainers give you consistent access to our design team for ongoing marketing needs — social graphics, email designs, sales collateral, and ad creative on a predictable schedule." },
        ],
    }),
    defineService({
        title: "Packaging Design",
        slug: "packaging-design",
        parentSlug: "branding-design",
        category: "branding-design",
        shortDescription: "Product packaging design that stands out on shelves and creates unboxing moments worth sharing.",
        metaTitle: "Packaging Design Agency | Nativz",
        metaDescription: "Nativz designs product packaging that commands shelf attention and creates shareable unboxing experiences. From concept to production-ready files.",
        primaryKeywords: ["packaging design agency", "product packaging"],
        minWordCount: 1000,
        content: [
            {
                heading: "Packaging That Commands Attention",
                body: `<p>Your packaging is the final persuasion point — the moment a customer decides to pick up your product or keep walking. Nativz designs product packaging that commands shelf attention, communicates brand value, and creates unboxing experiences worth sharing on social media. From concept sketches to production-ready dielines, we handle the entire packaging design process.</p>`
            },
        ],
        deliverables: [
            { title: "Packaging Concept Design", description: "Multiple packaging concepts with visual mockups showing your product in realistic shelf and unboxing scenarios." },
            { title: "Production-Ready Files", description: "Final artwork with dielines, bleeds, and print specifications ready for your manufacturer." },
            { title: "3D Mockups", description: "Photorealistic 3D renderings of your packaging for marketing materials and e-commerce listings." },
        ],
        faqItems: [
            { question: "Can you work with our manufacturer?", answer: "Yes. We coordinate with your manufacturer on specifications, dielines, print methods, and material selections to ensure the design translates perfectly to production." },
        ],
    }),
    defineService({
        title: "UI/UX Design",
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        category: "branding-design",
        shortDescription: "User interface and experience design for websites, apps, and digital products.",
        metaTitle: "UI/UX Design Agency | Nativz",
        metaDescription: "Nativz designs intuitive user interfaces and experiences for websites, mobile apps, and digital products. Research-driven UX that reduces friction and drives action.",
        primaryKeywords: ["UI UX design agency", "user experience design"],
        minWordCount: 1200,
        content: [
            {
                heading: "Interfaces That Users Actually Enjoy",
                body: `<p>UI/UX design is where aesthetics meets functionality. Nativz designs intuitive user interfaces and seamless experiences for websites, mobile apps, SaaS platforms, and digital products. Our research-driven approach starts with understanding your users — their goals, behaviors, and pain points — then designs experiences that reduce friction, increase engagement, and drive the actions that matter to your business.</p>`
            },
        ],
        deliverables: [
            { title: "UX Research & Wireframes", description: "User research, journey mapping, information architecture, and wireframes that define the experience before visual design begins." },
            { title: "UI Design & Prototypes", description: "High-fidelity interface designs with interactive prototypes for user testing and developer handoff." },
            { title: "Design System", description: "Reusable component library with design tokens, patterns, and guidelines that scale across your product." },
        ],
        faqItems: [
            { question: "Do you handle development too?", answer: "Yes. Our UI/UX design and website development services work together. We design the experience and build it — ensuring pixel-perfect implementation." },
            { question: "What tools do you use for UI/UX?", answer: "Figma for design and prototyping, FigJam for collaboration and workshops, and analytics tools for data-driven UX decisions. All designs are delivered in Figma with organized components and developer annotations." },
        ],
    }),

    // --- Commercial Production Sub-Services (6) ---
    defineService({
        title: "Brand Film Production",
        slug: "brand-films",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "Cinematic brand films that tell your story, build emotion, and elevate your brand above the noise.",
        metaTitle: "Brand Film Production Agency | Nativz",
        metaDescription: "Nativz produces cinematic brand films: narrative storytelling, corporate documentaries, and brand anthem videos that build emotional connection and brand equity.",
        primaryKeywords: ["brand film production", "corporate video Dallas"],
        minWordCount: 1200,
        content: [
            {
                heading: "Stories That Build Empires",
                body: `<p>A brand film isn't a commercial — it's a narrative. It tells the story of who you are, why you exist, and what you believe. Nativz produces cinematic brand films that build emotional connection, communicate your mission, and create content that lives on your website, social channels, and at every brand touchpoint for years.</p>`
            },
        ],
        deliverables: [
            { title: "Creative Development", description: "Concept development, narrative structure, scriptwriting, and storyboarding for your brand film." },
            { title: "Full Production", description: "Cinema-grade production with professional crew, lighting, sound, and direction." },
            { title: "Post-Production Suite", description: "Editing, color grading, sound design, music licensing, and final mastering in multiple formats." },
        ],
        faqItems: [
            { question: "How long should a brand film be?", answer: "Most brand films run 2-5 minutes for the hero version, with shorter 30-60 second cuts for social media and advertising. We deliver multiple lengths from a single production." },
        ],
    }),
    defineService({
        title: "TV Commercial Production",
        slug: "tv-commercials",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "Broadcast-quality TV commercials: concept development, production, and post-production.",
        metaTitle: "TV Commercial Production | Nativz",
        metaDescription: "Nativz produces broadcast-quality TV commercials from concept through post-production. Traditional and CTV-ready commercial content for maximum reach.",
        primaryKeywords: ["TV commercial production", "broadcast advertising"],
        minWordCount: 1200,
        content: [
            {
                heading: "Broadcast-Quality Commercials for TV and CTV",
                body: `<p>TV commercials still command attention unlike any other advertising format. Nativz produces broadcast-quality spots from concept through post-production — for traditional television, CTV/OTT platforms, and pre-roll placements. We handle creative development, scriptwriting, casting, production, and post-production to deliver commercials that meet broadcast specifications and drive brand recall.</p>`
            },
        ],
        deliverables: [
            { title: "Commercial Concepting", description: "Creative concepts, scripts, and storyboards aligned with your campaign objectives and target audience." },
            { title: "Broadcast Production", description: "Full production meeting ATSC broadcast specifications with professional talent, crew, and equipment." },
            { title: "Multi-Format Delivery", description: "Final commercials in broadcast specs (:15, :30, :60), plus digital formats for CTV, pre-roll, and social platforms." },
        ],
        faqItems: [
            { question: "Can you handle media buying for TV spots?", answer: "We focus on production. For media buying, we partner with our advertising team or your existing media agency to ensure your commercial reaches the right audiences." },
        ],
    }),
    defineService({
        title: "Product Video Production",
        slug: "product-videos",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "Product demo videos, unboxing content, feature highlights, and e-commerce video assets.",
        metaTitle: "Product Video Production Agency | Nativz",
        metaDescription: "Nativz produces product demo videos, feature highlights, unboxing content, and e-commerce video assets that showcase your products and drive purchase decisions.",
        primaryKeywords: ["product video agency", "product demo videos"],
        minWordCount: 1000,
        content: [
            {
                heading: "Show Your Product in Its Best Light",
                body: `<p>Product videos are the single most effective e-commerce conversion tool. Nativz produces cinematic product showcases, demo walkthroughs, feature highlights, and unboxing content that show your product in motion and in context — giving buyers the confidence to click "add to cart."</p>`
            },
        ],
        deliverables: [
            { title: "Product Showcase Videos", description: "Cinematic product videos with professional lighting, styling, and motion that highlight your product's design and quality." },
            { title: "Demo Walkthroughs", description: "Feature demonstrations and how-to videos that show your product in use and highlight key functionality." },
            { title: "E-Commerce Assets", description: "Formatted for Amazon, Shopify, and product page hero videos with platform-specific specifications." },
        ],
        faqItems: [
            { question: "Can you shoot at our facility?", answer: "Yes. We shoot on location at your facility, in our studio, or at any location that showcases your product best. We handle all logistics and equipment." },
        ],
    }),
    defineService({
        title: "Testimonial Video Production",
        slug: "testimonial-videos",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "Customer testimonial and case study videos that build trust and social proof.",
        metaTitle: "Testimonial Video Production | Nativz",
        metaDescription: "Nativz produces professional testimonial and customer story videos that build trust, demonstrate results, and provide powerful social proof for your brand.",
        primaryKeywords: ["testimonial video production", "customer story videos"],
        minWordCount: 1000,
        content: [
            {
                heading: "Your Customers' Stories, Professionally Told",
                body: `<p>Nothing sells like a real customer telling their real story. Nativz produces professional testimonial videos that capture authentic customer experiences, demonstrate measurable results, and provide the social proof that turns prospects into buyers. We handle interview preparation, on-set direction, and post-production to make your customers look and sound incredible.</p>`
            },
        ],
        deliverables: [
            { title: "Testimonial Package", description: "Full-length testimonial (2-3 min) plus short cuts (:30, :60) for social media and advertising use." },
            { title: "Interview Direction", description: "Question preparation, coaching, and professional direction that draws out authentic, compelling stories." },
        ],
        faqItems: [
            { question: "How do you make testimonials feel authentic?", answer: "We use conversational interview techniques rather than scripted responses. Our directors make subjects comfortable and draw out genuine stories — the result feels natural and trustworthy." },
        ],
    }),
    defineService({
        title: "Event Videography & Coverage",
        slug: "event-coverage",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "Professional event videography, conference coverage, and highlight reel production.",
        metaTitle: "Event Videography Dallas | Nativz",
        metaDescription: "Nativz provides professional event videography, conference coverage, trade show documentation, and highlight reel production for brands and organizations.",
        primaryKeywords: ["event videography Dallas", "conference coverage"],
        minWordCount: 1000,
        content: [
            {
                heading: "Capture Every Moment That Matters",
                body: `<p>Events happen once. Professional event videography ensures the investment, energy, and impact of your conferences, launches, galas, and brand events live on as marketing assets. Nativz provides multi-camera coverage, same-day highlight reels, speaker recordings, and polished recap content that extends your event's ROI long after attendees go home.</p>`
            },
        ],
        deliverables: [
            { title: "Multi-Camera Coverage", description: "Professional multi-camera event documentation with wireless audio and coordinated crew." },
            { title: "Highlight Reels", description: "Polished event highlight reels for social media, email marketing, and next year's event promotion." },
            { title: "Speaker Recordings", description: "Individual speaker and session recordings for content repurposing and on-demand viewing." },
        ],
        faqItems: [
            { question: "Can you deliver same-day highlight reels?", answer: "Yes. Our team can produce same-day social media recaps and next-day highlight reels for events that need rapid content turnaround." },
        ],
    }),
    defineService({
        title: "Drone Videography & Aerial Content",
        slug: "drone-videography",
        parentSlug: "commercial-production",
        category: "commercial-production",
        shortDescription: "FAA-licensed drone videography and aerial photography for real estate, events, and brand content.",
        metaTitle: "Drone Videography Agency | Nativz",
        metaDescription: "Nativz provides FAA-licensed drone videography and aerial photography for real estate, events, construction, and brand content production.",
        primaryKeywords: ["drone videography agency", "aerial video production"],
        minWordCount: 1000,
        content: [
            {
                heading: "Aerial Perspectives That Demand Attention",
                body: `<p>Drone videography adds a cinematic dimension that ground-level cameras simply cannot capture. Nativz provides FAA Part 107 licensed drone operators for aerial video and photography — real estate flyovers, construction progress documentation, event aerials, property showcases, and brand content that literally rises above the competition.</p>`
            },
        ],
        deliverables: [
            { title: "Aerial Video Footage", description: "4K drone cinematography with smooth, cinematic flight paths and professional color grading." },
            { title: "Aerial Photography", description: "High-resolution aerial photographs for marketing, documentation, and listing purposes." },
            { title: "FAA Compliance", description: "Full FAA Part 107 compliance, flight planning, airspace authorization, and liability insurance for every shoot." },
        ],
        faqItems: [
            { question: "Are your pilots FAA-licensed?", answer: "Yes. All Nativz drone operators hold FAA Part 107 Remote Pilot Certificates. We carry commercial liability insurance and handle all airspace authorizations and flight planning." },
        ],
    }),

    // --- Email Marketing Sub-Services (4) ---
    defineService({
        title: "Email Campaign Management",
        slug: "email-campaign-management",
        parentSlug: "email-marketing",
        category: "email-marketing",
        shortDescription: "Full-service email campaign management: strategy, design, copywriting, testing, and analytics.",
        metaTitle: "Email Campaign Management Agency | Nativz",
        metaDescription: "Nativz manages email campaigns end-to-end: strategy, design, copywriting, A/B testing, and performance analytics that drive opens, clicks, and conversions.",
        primaryKeywords: ["email campaign management", "newsletter agency"],
        minWordCount: 1200,
        content: [
            {
                heading: "Emails That Get Opened, Read, and Clicked",
                body: `<p>Email remains the highest-ROI marketing channel — but only when campaigns are strategic, well-designed, and properly segmented. Nativz manages email campaigns end-to-end: <strong>strategy, design, copywriting, A/B testing, segmentation, and performance analytics</strong>. Every campaign is built to hit inboxes (not spam folders), get opened, and drive the clicks that matter to your business.</p>`
            },
        ],
        deliverables: [
            { title: "Campaign Strategy", description: "Monthly email strategy with campaign calendar, audience segments, content themes, and conversion goals." },
            { title: "Email Design & Development", description: "Custom-designed, mobile-responsive email templates coded and tested across 50+ email clients." },
            { title: "Copywriting & Content", description: "Subject lines, preview text, body copy, and CTAs crafted to maximize open rates and click-through." },
            { title: "A/B Testing Programs", description: "Systematic A/B testing of subject lines, send times, content layout, and CTAs with statistical analysis." },
            { title: "Performance Reporting", description: "Campaign analytics covering open rates, CTR, conversions, revenue attribution, and deliverability metrics." },
        ],
        faqItems: [
            { question: "Which email platforms do you work with?", answer: "We work with HubSpot, Klaviyo, ActiveCampaign, Mailchimp, Constant Contact, and custom SMTP setups. We recommend the best platform based on your needs and current tech stack." },
            { question: "How do you improve deliverability?", answer: "We implement proper authentication (SPF, DKIM, DMARC), maintain clean lists, monitor sender reputation, and follow inbox placement best practices to keep your emails out of spam." },
        ],
    }),
    defineService({
        title: "Marketing Automation",
        slug: "marketing-automation",
        parentSlug: "email-marketing",
        category: "email-marketing",
        shortDescription: "Marketing automation with HubSpot, Klaviyo, ActiveCampaign, and custom workflow design.",
        metaTitle: "Marketing Automation Agency | Nativz",
        metaDescription: "Nativz builds marketing automation systems on HubSpot, Klaviyo, and ActiveCampaign. Workflows that nurture leads, segment audiences, and drive revenue on autopilot.",
        primaryKeywords: ["marketing automation agency", "HubSpot", "Klaviyo"],
        minWordCount: 1200,
        content: [
            {
                heading: "Revenue on Autopilot",
                body: `<p>Marketing automation transforms manual, repetitive marketing tasks into intelligent, triggered workflows that run 24/7. Nativz builds automation systems on HubSpot, Klaviyo, ActiveCampaign, and custom platforms — <strong>lead scoring, behavioral triggers, segmentation rules, and multi-channel workflows</strong> that nurture prospects, recover abandoned carts, and drive revenue while you focus on strategy.</p>`
            },
        ],
        deliverables: [
            { title: "Automation Strategy & Architecture", description: "Workflow mapping, trigger definitions, segmentation rules, and automation architecture design." },
            { title: "Platform Setup & Configuration", description: "Full platform setup, integration with CRM/ecommerce, tracking implementation, and custom field configuration." },
            { title: "Workflow Building", description: "Automated sequences for lead nurturing, onboarding, abandoned cart, win-back, and post-purchase flows." },
            { title: "Lead Scoring Models", description: "Custom lead scoring based on behavior, engagement, demographics, and purchase signals for prioritized follow-up." },
        ],
        faqItems: [
            { question: "What's the difference between email marketing and marketing automation?", answer: "Email marketing is sending campaigns to lists. Marketing automation is building intelligent systems that respond to user behavior — sending the right message to the right person at the right time, automatically." },
            { question: "Can you migrate from our current platform?", answer: "Yes. We handle full migrations including list transfer, template recreation, workflow rebuilding, and integration setup with zero downtime." },
        ],
    }),
    defineService({
        title: "Drip Campaign Strategy",
        slug: "drip-campaigns",
        parentSlug: "email-marketing",
        category: "email-marketing",
        shortDescription: "Automated drip sequences for onboarding, nurturing, re-engagement, and post-purchase flows.",
        metaTitle: "Drip Campaign Agency | Nativz",
        metaDescription: "Nativz designs automated drip campaigns for lead nurturing, customer onboarding, re-engagement, and post-purchase retention. Sequences that convert and retain.",
        primaryKeywords: ["drip campaign agency", "automated email sequences"],
        minWordCount: 1000,
        content: [
            {
                heading: "Sequences That Nurture, Convert, and Retain",
                body: `<p>Drip campaigns are the backbone of effective email automation — timed sequences that deliver the right content at the right stage of the customer journey. Nativz designs strategic drip sequences for <strong>lead nurturing, customer onboarding, cart abandonment recovery, re-engagement, and post-purchase retention</strong> that systematically move people from awareness to action.</p>`
            },
        ],
        deliverables: [
            { title: "Drip Sequence Design", description: "Multi-email sequences with timing, triggers, content strategy, and branch logic for each customer journey stage." },
            { title: "Email Content & Copy", description: "Copywriting for each email in the sequence with compelling subject lines, engaging body content, and strategic CTAs." },
            { title: "Performance Optimization", description: "Ongoing A/B testing and optimization of drip sequences based on open rates, click rates, and conversion data." },
        ],
        faqItems: [
            { question: "How many emails should be in a drip sequence?", answer: "It depends on the goal. Welcome sequences typically run 3-5 emails over 2 weeks. Lead nurture sequences can be 7-12 emails over 4-8 weeks. We design length based on your sales cycle and audience behavior." },
        ],
    }),
    defineService({
        title: "SMS Marketing",
        slug: "sms-marketing",
        parentSlug: "email-marketing",
        category: "email-marketing",
        shortDescription: "SMS marketing campaigns, text message automation, and mobile engagement strategy.",
        metaTitle: "SMS Marketing Agency | Nativz",
        metaDescription: "Nativz runs SMS marketing campaigns and text message automation that delivers time-sensitive offers, appointment reminders, and promotional content directly to mobile.",
        primaryKeywords: ["SMS marketing agency", "text message marketing"],
        minWordCount: 1000,
        content: [
            {
                heading: "98% Open Rates. No Algorithm. Direct to Mobile.",
                body: `<p>SMS marketing delivers what email and social media can't: a 98% open rate within 3 minutes of delivery. Nativz builds SMS marketing programs that leverage this unmatched attention — <strong>flash sales, appointment reminders, order updates, loyalty rewards, and time-sensitive promotions</strong> delivered directly to your audience's pocket. We handle TCPA compliance, opt-in management, and segmentation strategy.</p>`
            },
        ],
        deliverables: [
            { title: "SMS Campaign Management", description: "Promotional SMS campaigns with segmentation, timing optimization, and conversion tracking." },
            { title: "Automated SMS Flows", description: "Triggered text messages for abandoned carts, appointment reminders, shipping updates, and re-engagement." },
            { title: "Compliance & Opt-In", description: "TCPA-compliant opt-in flows, keyword management, and unsubscribe handling to keep your SMS program legal and clean." },
        ],
        faqItems: [
            { question: "Is SMS marketing legal?", answer: "Yes, when done properly. We ensure full TCPA compliance with proper opt-in consent, clear opt-out mechanisms, and message frequency limits. Every campaign meets federal and state requirements." },
            { question: "Can SMS integrate with our email marketing?", answer: "Absolutely. SMS and email work best together. We build coordinated multi-channel sequences where SMS handles time-sensitive messages and email delivers longer-form content." },
        ],
    }),

    // --- AI Services Sub-Pages (7) ---
    defineService({
        title: "AI-Assisted Content Production",
        slug: "ai-content-production",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "AI-powered content production: ideation, scripting, editing, and distribution optimization at scale.",
        metaTitle: "AI Content Production Agency | Nativz",
        metaDescription: "Nativz uses AI to accelerate content production: trend analysis, script generation, AI-enhanced editing, and optimized distribution. Human creativity amplified by machine intelligence.",
        primaryKeywords: ["AI content creation", "AI-assisted video", "AI marketing content"],
        minWordCount: 1500,
        content: [
            {
                heading: "Human Creativity, Machine Speed",
                body: `<p>AI doesn't replace creative talent — it amplifies it. Nativz uses AI to accelerate every stage of content production: <strong>trend identification, topic ideation, script generation, AI-enhanced editing, and distribution optimization</strong>. The result is more content, faster turnaround, and higher quality — without sacrificing the human creativity and strategic thinking that makes content resonate.</p>`
            },
        ],
        deliverables: [
            { title: "AI Content Pipeline", description: "AI-powered content planning with trend analysis, topic scoring, and automated editorial calendar generation." },
            { title: "AI-Enhanced Production", description: "AI tools for script generation, B-roll sourcing, subtitle creation, background removal, and format adaptation." },
            { title: "Content Optimization", description: "AI-driven analysis of content performance with recommendations for format, length, hooks, and distribution timing." },
        ],
        faqItems: [
            { question: "Is AI content actually good?", answer: "AI content without human oversight isn't. Our approach uses AI as an accelerator — humans drive strategy, creative direction, and quality control while AI handles research, drafting, and repetitive production tasks." },
            { question: "Which AI tools do you use?", answer: "We use a mix of tools including GPT-4, Claude, Midjourney, Runway, ElevenLabs, and custom-built workflows. The specific toolset depends on the content type and your brand's needs." },
        ],
    }),
    defineService({
        title: "AI-Powered Ad Creative",
        slug: "ai-ad-creative",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "AI-generated ad creative variations: background swaps, copy testing, hook generation, and dynamic formats.",
        metaTitle: "AI Ad Creative Agency | Nativz",
        metaDescription: "Nativz uses AI to generate 10-25 meaningfully different ad creatives per campaign. Background swaps, copy variations, and hook testing at the scale Andromeda demands.",
        primaryKeywords: ["AI ad creative", "AI-generated ads", "creative automation"],
        minWordCount: 1500,
        content: [
            {
                heading: "Creative Volume at the Speed Algorithms Demand",
                body: `<p>Meta's Andromeda ranking system rewards creative volume — accounts that test 10-25 meaningfully different creatives per campaign see dramatically lower CPAs. Nativz uses AI to produce creative variations at this scale: <strong>background swaps, copy iterations, hook variations, format adaptations, and dynamic creative elements</strong> — all maintaining brand consistency while giving algorithms the diversity they need to find winning combinations.</p>`
            },
        ],
        deliverables: [
            { title: "AI Creative Generation", description: "10-25 ad creative variations per campaign using AI for background generation, text overlay variations, and format adaptation." },
            { title: "Hook Testing Library", description: "AI-generated hook variations for video and static ads, systematically testing opening lines, visuals, and value propositions." },
            { title: "Dynamic Creative Assets", description: "AI-produced creative elements — product backgrounds, lifestyle scenes, text styles — that combine into hundreds of unique ad variations." },
        ],
        faqItems: [
            { question: "Will AI ads look generic?", answer: "No. We maintain brand guidelines throughout the AI generation process. Every variation uses your approved fonts, colors, imagery style, and tone of voice. AI expands volume, not randomness." },
            { question: "How does this compare to traditional creative production?", answer: "Traditional production might deliver 3-5 creative variants per cycle. AI-augmented production delivers 15-25+ variants in the same timeframe, giving algorithms more data to optimize against." },
        ],
    }),
    defineService({
        title: "AI Analytics & Predictive Intelligence",
        slug: "ai-analytics",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "Predictive marketing analytics, pattern recognition, and data-driven creative optimization.",
        metaTitle: "AI Analytics & Predictive Intelligence | Nativz",
        metaDescription: "Nativz deploys AI analytics and predictive intelligence to identify winning creative patterns, forecast campaign performance, and optimize marketing spend before the competition.",
        primaryKeywords: ["AI analytics", "predictive marketing", "machine learning marketing"],
        minWordCount: 1200,
        content: [
            {
                heading: "See the Future Before Your Competitors Do",
                body: `<p>Traditional analytics tell you what happened. AI analytics tell you what will happen. Nativz deploys <strong>predictive intelligence, pattern recognition, and machine learning models</strong> that identify winning creative patterns before they become obvious, forecast campaign performance before budget is spent, and surface optimization opportunities that human analysis misses.</p>`
            },
        ],
        deliverables: [
            { title: "Predictive Models", description: "Machine learning models that forecast campaign performance, creative fatigue, seasonal trends, and budget allocation." },
            { title: "Creative Pattern Analysis", description: "AI-driven analysis of what elements — colors, hooks, formats, CTAs — drive performance across your creative library." },
            { title: "Automated Insights", description: "AI-generated performance insights and optimization recommendations delivered weekly." },
        ],
        faqItems: [
            { question: "How accurate are AI predictions?", answer: "No prediction is 100% accurate, but our AI models significantly outperform human intuition. Predictive models improve over time as they learn from your specific data patterns and campaign history." },
        ],
    }),
    defineService({
        title: "AI Marketing Automation & Workflows",
        slug: "ai-automation",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "Custom AI automation workflows with n8n, Make, and Zapier. Systems that scale your marketing operations.",
        metaTitle: "AI Marketing Automation Agency | Nativz",
        metaDescription: "Nativz builds AI-powered marketing automation workflows with n8n, Make, and Zapier. Lead scoring, CRM enrichment, reporting automation, and sales pipeline intelligence.",
        primaryKeywords: ["AI automation agency", "n8n workflows", "marketing automation AI"],
        minWordCount: 1500,
        content: [
            {
                heading: "Workflows That Think for Themselves",
                body: `<p>AI marketing automation goes beyond simple if/then triggers. Nativz builds intelligent workflows with <strong>n8n, Make, and Zapier</strong> that use AI to enrich CRM data, score leads, generate reports, route inquiries, and optimize pipeline management — systems that don't just execute tasks but make intelligent decisions about how to execute them.</p>`
            },
        ],
        deliverables: [
            { title: "Workflow Design & Architecture", description: "Custom automation architecture mapping your marketing and sales processes to AI-enhanced workflows." },
            { title: "AI Integration", description: "GPT-4, Claude, or custom AI models integrated into workflows for content generation, data enrichment, and decision logic." },
            { title: "CRM Integration", description: "Automated CRM enrichment, lead scoring, and pipeline management with AI-driven prioritization." },
            { title: "Reporting Automation", description: "AI-powered reporting dashboards that generate insights, summaries, and recommendations automatically." },
        ],
        faqItems: [
            { question: "Which automation platforms do you use?", answer: "We primarily use n8n for complex, self-hosted workflows, Make (Integromat) for visual automation, and Zapier for simpler integrations. Platform choice depends on your tech stack and complexity needs." },
            { question: "Can AI automations connect to our existing tools?", answer: "Yes. Modern automation platforms connect to 1,000+ apps. We integrate with your CRM, email platform, ad accounts, analytics tools, and any other marketing technology you use." },
        ],
    }),
    defineService({
        title: "AI Chatbot Development",
        slug: "ai-chatbots",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "Custom AI chatbot development for customer service, lead qualification, and conversational commerce.",
        metaTitle: "AI Chatbot Development Agency | Nativz",
        metaDescription: "Nativz develops custom AI chatbots for customer service, lead qualification, appointment booking, and conversational commerce. Intelligent bots that drive business outcomes.",
        primaryKeywords: ["AI chatbot agency", "conversational AI", "chatbot development"],
        minWordCount: 1200,
        content: [
            {
                heading: "Intelligent Bots That Drive Business Outcomes",
                body: `<p>Modern AI chatbots aren't the frustrated "press 1 for support" experience of the past. Nativz develops custom AI chatbots that understand natural language, answer complex questions, qualify leads, book appointments, and handle customer service — providing 24/7 intelligent interaction that keeps your business responsive while reducing support costs.</p>`
            },
        ],
        deliverables: [
            { title: "Custom Chatbot Development", description: "AI chatbot built on GPT-4 or Claude with custom knowledge base, personality, and business logic for your specific use case." },
            { title: "Knowledge Base Training", description: "Training your chatbot on your FAQs, product information, policies, and brand voice for accurate, on-brand responses." },
            { title: "Integration & Deployment", description: "Website widget, Facebook Messenger, WhatsApp, or Slack deployment with CRM integration for lead capture." },
        ],
        faqItems: [
            { question: "Can the chatbot handle complex questions?", answer: "Yes. Our AI chatbots are trained on your specific business knowledge and can handle nuanced questions. For queries beyond their training, they intelligently escalate to human agents." },
            { question: "How long to build a custom chatbot?", answer: "A basic customer service chatbot takes 2-3 weeks. More complex bots with integrations, lead qualification, and booking features take 4-6 weeks." },
        ],
    }),
    defineService({
        title: "AI-Powered SEO",
        slug: "ai-seo",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "AI-driven keyword research, programmatic SEO, content optimization, and automated technical audits.",
        metaTitle: "AI-Powered SEO Agency | Nativz",
        metaDescription: "Nativz leverages AI for keyword research, programmatic SEO at scale, content optimization, and automated technical auditing. Smarter search strategies, faster results.",
        primaryKeywords: ["AI SEO agency", "AI-driven keyword research", "programmatic SEO"],
        minWordCount: 1200,
        content: [
            {
                heading: "Smarter Search, Faster Results",
                body: `<p>AI transforms SEO from a manual, time-intensive process into a scalable, intelligent system. Nativz leverages AI for <strong>keyword research at scale, programmatic SEO for large sites, content optimization scoring, automated technical auditing, and competitive analysis</strong> — identifying opportunities and executing optimizations at a speed and scale that manual SEO simply cannot match.</p>`
            },
        ],
        deliverables: [
            { title: "AI Keyword Research", description: "AI-powered keyword discovery analyzing search intent, semantic relationships, and competitive gaps at massive scale." },
            { title: "Programmatic SEO", description: "Template-based page generation for large-scale sites — location pages, product variations, and category combinations." },
            { title: "AI Content Optimization", description: "Content analysis and optimization scoring using NLP to ensure topical coverage, semantic relevance, and E-E-A-T signals." },
        ],
        faqItems: [
            { question: "Is AI-generated SEO content penalized by Google?", answer: "Google doesn't penalize AI content — it penalizes low-quality content regardless of how it was produced. Our approach uses AI to enhance and accelerate content, not replace human expertise and editorial quality." },
        ],
    }),
    defineService({
        title: "AI Strategy Consulting for Businesses",
        slug: "ai-strategy",
        parentSlug: "artificial-intelligence",
        category: "artificial-intelligence",
        shortDescription: "AI readiness assessments, tool stack recommendations, workflow design, and implementation roadmaps.",
        metaTitle: "AI Strategy Consulting | Nativz",
        metaDescription: "Nativz provides AI strategy consulting for businesses: readiness assessments, tool stack recommendations, workflow design, and implementation roadmaps for AI adoption.",
        primaryKeywords: ["AI strategy consulting", "AI adoption", "AI transformation"],
        minWordCount: 1500,
        content: [
            {
                heading: "AI Adoption Without the Overwhelm",
                body: `<p>Every business knows AI is transforming marketing — but most don't know where to start. Nativz provides <strong>AI strategy consulting</strong> that cuts through the hype: readiness assessments, tool stack recommendations, workflow design, team training, and implementation roadmaps that give your business a concrete path from AI-curious to AI-powered. No buzzwords, no theory — just practical AI adoption that drives measurable results.</p>`
            },
        ],
        deliverables: [
            { title: "AI Readiness Assessment", description: "Evaluation of your current workflows, data infrastructure, team capabilities, and technology stack for AI integration." },
            { title: "Tool Stack Recommendations", description: "Curated AI tool recommendations with build vs. buy analysis, cost projections, and integration requirements." },
            { title: "Implementation Roadmap", description: "Phased AI adoption plan with timelines, milestones, training requirements, and ROI projections." },
            { title: "Team Training", description: "Hands-on AI training workshops for your marketing team covering prompt engineering, tool usage, and AI workflow best practices." },
        ],
        faqItems: [
            { question: "Is my business ready for AI?", answer: "Almost certainly yes, at some level. AI adoption isn't all-or-nothing. Our assessments identify quick wins you can implement immediately and longer-term transformations to plan for." },
            { question: "Do we need to hire AI specialists?", answer: "Not necessarily. We design AI strategies that your existing team can execute with proper training and the right tools. For complex implementations, we provide ongoing support and management." },
        ],
    }),
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/** Get all parent services */
export function getParentServices(): ServicePage[] {
    return parentServices;
}

/** Get a parent service by slug */
export function getParentService(slug: string): ServicePage | undefined {
    return parentServices.find((s) => s.slug === slug);
}

/** Get all sub-services for a given parent slug */
export function getSubServicesForParent(parentSlug: string): ServicePage[] {
    return subServices.filter((s) => s.parentSlug === parentSlug);
}

/** Get a specific sub-service by parent + child slug */
export function getSubService(parentSlug: string, childSlug: string): ServicePage | undefined {
    return subServices.find((s) => s.parentSlug === parentSlug && s.slug === childSlug);
}

/** Get all services (parent + sub) */
export function getAllServices(): ServicePage[] {
    return [...parentServices, ...subServices];
}

/** Get all unique parent slugs that have sub-services */
export function getParentSlugsWithChildren(): string[] {
    return [...new Set(subServices.map((s) => s.parentSlug!))];
}

/** Get related services for a given service */
export function getRelatedServices(service: ServicePage): ServicePage[] {
    return service.relatedServiceSlugs
        .map((slug) => parentServices.find((s) => s.slug === slug))
        .filter(Boolean) as ServicePage[];
}

/** Get sibling services (same parent, excluding self) */
export function getSiblingServices(service: ServicePage): ServicePage[] {
    if (!service.parentSlug) return [];
    return subServices.filter(
        (s) => s.parentSlug === service.parentSlug && s.slug !== service.slug
    );
}
