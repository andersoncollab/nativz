import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Nativz | Dallas-Fort Worth's Premier Creative Agency",
    description:
        "Founded in 2016 in DFW, Nativz builds AI-infused marketing systems for brands nationwide. $500M+ in ad spend managed. Thousands of content assets shipped monthly.",
    keywords: [
        "about Nativz",
        "Dallas marketing agency",
        "DFW creative agency",
        "marketing agency team",
        "AI marketing agency",
    ],
    openGraph: {
        title: "About Nativz | The Team Behind the Machine",
        description:
            "We're an army of nerds, creatives, and strategists headquartered in DFW — building marketing systems for brands nationwide.",
        url: "https://nativz.io/about",
        type: "website",
    },
};

const stats = [
    { number: "2016", label: "Founded" },
    { number: "500+", label: "Brands Served" },
    { number: "$500M+", label: "Ad Spend Managed" },
    { number: "1,000s", label: "Assets Shipped / Month" },
];

const values = [
    {
        title: "Systems Over Campaigns",
        description:
            "We don't run one-off campaigns. We engineer repeatable marketing systems that compound over time — content machines that feed themselves.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: "Creative at Volume",
        description:
            "Algorithms are hungry. We ship thousands of content assets every month — video, photography, motion graphics, UGC — so your brand never runs dry.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m1.5 3.75c0-.621-.504-1.125-1.125-1.125" />
            </svg>
        ),
    },
    {
        title: "Data-Driven, Always",
        description:
            "Every decision is backed by data. We've managed over $500M in ad spend — we know exactly what moves the needle and what's just noise.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        title: "AI-Infused Everything",
        description:
            "We don't just talk about AI — we build with it. From content generation to audience modeling, AI is woven into every system we ship.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
    },
    {
        title: "Nationwide, DFW Roots",
        description:
            "We're headquartered in Dallas-Fort Worth, but our clients span the entire country — and increasingly, the globe. Same systems, any market.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
    },
    {
        title: "Real Humans, Real Strategy",
        description:
            "No chatbots, no auto-responders, no outsourced account managers. You work directly with senior strategists who understand your business.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen relative overflow-hidden">
            <SchemaMarkup type="organization" />

            {/* Animated gradient orbs */}
            <div className="absolute top-20 -right-40 w-[700px] h-[700px] bg-electric-blue/[0.03] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-40 -left-32 w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Hero */}
                <ScrollReveal>
                    <div className="mb-20 max-w-4xl">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            About Nativz
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-display leading-tight">
                            An army of nerds{" "}
                            <span className="bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
                                building your marketing machine.
                            </span>
                        </h1>
                        <div className="space-y-5 text-lg text-slate-300 leading-relaxed max-w-3xl">
                            <p>
                                Nativz started in 2016 with a simple thesis: most brands are starving
                                their algorithms. They post once a day, run the same three ads, and
                                wonder why growth stalls. We built the opposite — a content machine
                                that feeds platforms exactly what they want, at the volume they need.
                            </p>
                            <p>
                                Today we&apos;re headquartered in Dallas-Fort Worth and serve brands
                                nationwide and worldwide. We&apos;ve managed over <strong className="text-white">$500 million
                                    in ad spend</strong>, ship <strong className="text-white">thousands of content assets
                                        every month</strong>, and engineer marketing systems that compound —
                                not just convert.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Stats bar */}
                <ScrollReveal delay={100}>
                    <div className="glass-card rounded-2xl p-8 md:p-12 mb-24 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric-blue via-cyan to-electric-blue" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent font-display mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* What We Believe */}
                <ScrollReveal delay={100}>
                    <div className="mb-12">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Our Philosophy
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                            What we believe
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {values.map((value, i) => (
                        <ScrollReveal key={value.title} delay={i * 80}>
                            <div className="glass-card p-8 rounded-2xl h-full group hover:bg-white/[0.06] hover:border-electric-blue/20 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue/20 group-hover:scale-110 transition-all duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-cyan transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* The Nativz Difference */}
                <ScrollReveal delay={100}>
                    <div className="glass-card rounded-2xl p-8 md:p-12 mb-24 max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan via-electric-blue to-cyan" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
                            Why we&apos;re different
                        </h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                Most agencies sell retainers. We build systems. The difference? A
                                retainer ends when the contract does. A system keeps compounding.
                            </p>
                            <p>
                                We combine <strong className="text-white">AI-infused strategy</strong> with
                                production-grade creative volume — so your brand always has fresh content
                                feeding the algorithm. No recycled templates. No stock photos. No
                                &ldquo;we&apos;ll get it to you next week.&rdquo;
                            </p>
                            <p>
                                Our clients don&apos;t just see growth — they see the kind of compounding
                                momentum that makes competitors wonder what changed.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {["AI-Powered", "Content at Volume", "$500M+ Managed", "Nationwide", "Founded 2016", "DFW HQ"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-medium border border-electric-blue/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* CTA */}
                <ServiceCTA
                    heading="Ready to see what a real marketing system looks like?"
                    description="Book a strategy call and we'll show you exactly how we'd engineer growth for your brand. No pitch decks — just real strategy."
                />
            </div>
        </main>
    );
}
