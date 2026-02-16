import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";

export const metadata: Metadata = {
    title: "Pricing | Marketing Investment Tiers | Nativz",
    description:
        "Explore Nativz pricing tiers for digital marketing, content production, and advertising management. Transparent pricing for growing brands. Starting at $5,000/month.",
    keywords: [
        "marketing agency pricing",
        "Dallas marketing agency cost",
        "digital marketing pricing",
        "content production pricing",
        "advertising management cost",
    ],
    openGraph: {
        title: "Pricing | Nativz",
        description:
            "Transparent marketing investment tiers for brands at every stage. See what working with Nativz looks like.",
        url: "https://nativz.io/pricing",
        type: "website",
    },
};

const tiers = [
    {
        name: "Growth",
        price: "$5,000",
        period: "/month",
        description:
            "For brands ready to build a serious marketing foundation. Ideal for startups and small businesses entering growth mode.",
        features: [
            "Social media management (2 platforms)",
            "15 content assets per month",
            "Monthly content calendar",
            "Community management",
            "Monthly performance reporting",
            "Dedicated account manager",
            "Brand voice development",
        ],
        cta: "Start Growing",
        highlighted: false,
    },
    {
        name: "Scale",
        price: "$10,000",
        period: "/month",
        description:
            "For brands ready to dominate their category. Our most popular tier combines creative volume with paid media management.",
        features: [
            "Everything in Growth, plus:",
            "Social media management (4 platforms)",
            "30+ content assets per month",
            "Paid media management (up to $25K/mo spend)",
            "Creative volume ad production (15-25 variations)",
            "A/B testing and optimization",
            "Bi-weekly strategy calls",
            "SEO foundations and content strategy",
            "Email marketing setup and automation",
        ],
        cta: "Start Scaling",
        highlighted: true,
    },
    {
        name: "Dominate",
        price: "$25,000+",
        period: "/month",
        description:
            "For category leaders and enterprise brands that need a full-service marketing engine. Unlimited creative, advanced analytics, and custom solutions.",
        features: [
            "Everything in Scale, plus:",
            "All social platforms managed",
            "Unlimited content production",
            "Paid media management (unlimited spend)",
            "Commercial video production",
            "Advanced SEO and AEO strategy",
            "Custom website development",
            "Weekly strategy sessions",
            "Dedicated creative team",
            "Custom reporting dashboards",
            "Priority support",
        ],
        cta: "Let's Talk",
        highlighted: false,
    },
];

const faqs = [
    {
        q: "Are there any setup fees?",
        a: "For Growth and Scale tiers, there is a one-time onboarding fee equal to one month's retainer. This covers brand immersion, strategy development, content system setup, and platform configuration. For Dominate tier, onboarding scope is custom-quoted.",
    },
    {
        q: "What's included in ad spend management?",
        a: "Our management fee covers strategy, creative production, audience building, campaign setup, daily optimization, A/B testing, and reporting. Ad spend (the money paid to platforms like Meta and Google) is separate and billed directly to your accounts.",
    },
    {
        q: "Can I customize a package?",
        a: "Absolutely. These tiers represent our most common configurations, but every brand is different. Book a strategy call and we'll build a custom proposal tailored to your specific goals, industry, and budget.",
    },
    {
        q: "What's the minimum contract length?",
        a: "We recommend a minimum 3-month commitment. Marketing systems take time to build momentum, and we want to set realistic expectations for results. That said, we don't lock you into long-term contracts. Our retention rate speaks for itself.",
    },
    {
        q: "Do you offer project-based pricing?",
        a: "Yes, for specific deliverables like website development, brand identity projects, commercial video production, or one-time campaign launches. Contact us for a custom quote.",
    },
    {
        q: "What kind of results can I expect?",
        a: "Results vary by industry and starting point, but our clients typically see 30-50% improvements in key metrics within the first 90 days. We'll set specific KPIs during onboarding and track them obsessively.",
    },
];

export default function PricingPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen relative overflow-hidden">
            <SchemaMarkup
                type="webpage"
                name="Pricing | Nativz"
                description="Transparent marketing investment tiers for brands at every stage."
                url="https://nativz.io/pricing"
            />

            {/* Background elements */}
            <div className="absolute top-20 -right-40 w-[700px] h-[700px] bg-electric-blue/[0.03] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-40 -left-32 w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Hero */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                            Investment Tiers Built for{" "}
                            <span className="bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
                                Real Growth
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            No hidden fees. No surprise invoices. Just transparent pricing for
                            marketing systems that actually move the needle. Every tier includes
                            strategy, creative production, and data-driven optimization.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {tiers.map((tier, i) => (
                        <ScrollReveal key={tier.name} delay={i * 100}>
                            <div
                                className={`glass-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${tier.highlighted
                                        ? "border-electric-blue/30 bg-white/[0.06]"
                                        : "hover:bg-white/[0.04]"
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric-blue via-cyan to-electric-blue" />
                                )}
                                {tier.highlighted && (
                                    <span className="absolute top-4 right-4 text-xs font-mono uppercase tracking-wider text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                                        Most Popular
                                    </span>
                                )}

                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-white font-display mb-2">
                                        {tier.name}
                                    </h2>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent font-display">
                                            {tier.price}
                                        </span>
                                        <span className="text-slate-400 text-sm">
                                            {tier.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-slate-300"
                                        >
                                            <svg
                                                className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${tier.highlighted
                                            ? "btn-gradient hover:shadow-[0_0_40px_rgba(0,173,239,0.3)]"
                                            : "btn-gradient-outline"
                                        }`}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* FAQ Section */}
                <ScrollReveal delay={100}>
                    <section className="max-w-4xl mx-auto mb-24">
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                Common Questions
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                                Pricing FAQ
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, i) => (
                                <ScrollReveal key={i} delay={i * 60}>
                                    <div className="glass-card p-6 rounded-xl h-full hover:bg-white/[0.04] transition-colors duration-300">
                                        <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0 mt-0.5 text-xs font-bold">
                                                ?
                                            </span>
                                            {faq.q}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed pl-9">
                                            {faq.a}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* CTA */}
                <ServiceCTA
                    heading="Not sure which tier is right for you?"
                    description="Book a free strategy call and we'll recommend the perfect investment level based on your goals, industry, and growth stage. No pressure, just real strategy."
                />
            </div>
        </main>
    );
}
