import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getServiceArea, serviceAreas } from "@/data/areas";
import { parentServices } from "@/data/services";
import { getAreaImage, getSocialPostExamples } from "@/data/sectionImages";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return serviceAreas.map((area) => ({
        slug: area.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const area = getServiceArea(slug);
    if (!area) return { title: "Service Area Not Found | Nativz" };

    return {
        title: area.metaTitle,
        description: area.metaDescription,
        keywords: [
            `${area.title.replace(" Marketing Agency", "")} marketing agency`,
            "nationwide marketing agency",
            "DFW marketing agency",
            "Dallas marketing agency",
            "Texas marketing agency",
            "global marketing agency",
        ],
        openGraph: {
            title: area.metaTitle,
            description: area.metaDescription,
            url: `https://nativz.io/areas/${area.slug}`,
            type: "website",
        },
    };
}

/* ── Blue-only accent palette ── */
const accent = {
    gradient: "from-electric-blue to-cyan",
    glow: "bg-electric-blue/[0.04]",
    badge: "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
};

export default async function AreaPage({ params }: PageProps) {
    const { slug } = await params;
    const area = getServiceArea(slug);
    if (!area) notFound();

    const areaImage = getAreaImage(slug);
    const socialPosts = getSocialPostExamples(4, 8); // offset to get different posts than industry
    const areaName = area.title.replace(" Marketing Agency", "");

    return (
        <main className="min-h-screen">
            <SchemaMarkup
                type="localbusiness"
                name={`Nativz — ${area.title}`}
                description={area.metaDescription}
                url={`https://nativz.io/areas/${area.slug}`}
                areaName={areaName}
            />

            {/* ═══════════════════════════════════════════════
                HERO — Full-width with DFW photo background
            ═══════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 md:pb-36 overflow-hidden">
                {/* DFW photo background with overlay */}
                <div className="absolute inset-0">
                    <Image
                        src={areaImage}
                        alt={areaName}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy-dark/75" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark" />
                </div>

                {/* Animated gradient orbs */}
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${accent.glow} rounded-full blur-[200px] animate-pulse`} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/[0.03] rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Service Areas", href: "/areas" },
                            { label: area.title, href: `/areas/${area.slug}` },
                        ]}
                    />

                    <ScrollReveal>
                        <div className="mt-8 max-w-4xl">
                            <span className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border mb-6 ${accent.badge}`}>
                                Service Area
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 font-display leading-[1.1]">
                                {area.headline}
                            </h1>

                            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                                <Link
                                    href="/contact"
                                    className="btn-gradient px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 hover:shadow-[0_0_40px_rgba(0,173,239,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get a Free Strategy Call
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
            </section>

            {/* ═══════════════════════════════════════════════
                INTRO — About this market
            ═══════════════════════════════════════════════ */}
            <AnimatedDivider variant="glow" />

            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 section-break-mesh" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <ScrollReveal delay={80} className="flex-1 min-w-0">
                            <div>
                                <div className="flex items-start gap-5 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-electric-blue/10`}>
                                        01
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display leading-tight pt-2">
                                        Your {areaName} Marketing Partner
                                    </h2>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    {area.intro}
                                </p>
                                <p className="text-slate-400 text-base leading-relaxed italic">
                                    Nativz is headquartered in Dallas-Fort Worth and serves clients nationwide
                                    and around the world. Wherever your business is based, we build the same
                                    high-performance marketing systems — engineered for your specific market.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200} className="flex-1 min-w-0 w-full lg:w-auto">
                            <div className="relative group">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${accent.gradient} rounded-3xl opacity-[0.08] blur-2xl group-hover:opacity-[0.15] transition-opacity duration-500`} />
                                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/30">
                                    <Image
                                        src={areaImage}
                                        alt={`${areaName} cityscape`}
                                        width={640}
                                        height={480}
                                        className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                WHY NATIVZ — DFW roots, national reach
            ═══════════════════════════════════════════════ */}
            <AnimatedDivider variant="dots" />

            <section className="relative py-24 md:py-32 overflow-hidden section-alt-bg">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                        <ScrollReveal delay={80} className="flex-1 min-w-0">
                            <div>
                                <div className="flex items-start gap-5 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-electric-blue/10`}>
                                        02
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display leading-tight pt-2">
                                        Why Nativz — DFW-Based, Nationwide Reach
                                    </h2>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {area.whyNativz}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Social post showcase instead of second DFW image */}
                        <ScrollReveal delay={200} className="flex-1 min-w-0 w-full lg:w-auto">
                            <div className="grid grid-cols-2 gap-3">
                                {socialPosts.map((post, i) => (
                                    <div key={i} className="relative group overflow-hidden rounded-xl border border-white/[0.08]">
                                        <Image
                                            src={post}
                                            alt={`Campaign example ${i + 1}`}
                                            width={300}
                                            height={300}
                                            className="w-full h-auto object-cover aspect-square group-hover:scale-[1.05] transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                PARALLAX BREAK — Quote
            ═══════════════════════════════════════════════ */}
            <ParallaxSection speed={0.3} className="py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-display font-bold leading-relaxed max-w-3xl mx-auto">
                            &ldquo;We don&apos;t run campaigns. We build{" "}
                            <span className="text-gradient">marketing systems</span>{" "}
                            that compound over time.&rdquo;
                        </p>
                        <p className="text-sm text-slate-400 mt-6 font-mono uppercase tracking-widest">
                            The Nativz Philosophy
                        </p>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* ═══════════════════════════════════════════════
                SERVICES GRID
            ═══════════════════════════════════════════════ */}
            <AnimatedDivider variant="glow" />

            <section className="relative py-28 md:py-36 overflow-hidden">
                <div className="absolute inset-0 section-break-mesh" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                Full-Service
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                Services Available in {areaName}
                            </h2>
                            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                                Every service built as a system — not a one-off project. Click through to see how we approach each discipline.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {parentServices.slice(0, 6).map((service, i) => (
                            <ScrollReveal key={service.slug} delay={i * 60}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="glass-card p-8 rounded-2xl hover:bg-white/[0.06] hover:border-electric-blue/30 hover:-translate-y-2 transition-all duration-300 group block h-full relative overflow-hidden"
                                >
                                    <span className="absolute top-4 right-4 text-[4rem] font-black text-white/[0.03] font-display leading-none group-hover:text-electric-blue/[0.08] transition-colors duration-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <div className="relative z-10">
                                        <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${accent.gradient} mb-5 group-hover:w-16 transition-all duration-300`} />
                                        <h3 className="text-lg text-white font-bold mb-3 group-hover:text-cyan transition-colors font-display">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                                            {service.shortDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-sm text-electric-blue font-medium group-hover:text-cyan group-hover:gap-3 transition-all duration-300">
                                            Learn more
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                STATS BAND
            ═══════════════════════════════════════════════ */}
            <ParallaxSection speed={0.2} className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-6">
                        {["500+", "$500M+", "1,000s"].map((stat, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="text-center px-6 md:px-10">
                                    <div className="text-2xl md:text-3xl font-bold text-gradient font-display">{stat}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-mono">
                                        {["Brands Served", "Ad Spend Managed", "Assets / Month"][i]}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* ═══════════════════════════════════════════════
                CTA
            ═══════════════════════════════════════════════ */}
            <ServiceCTA
                heading={`Ready to Grow Your ${areaName} Business?`}
                description={`Let's talk about how Nativz can build a marketing system for your ${areaName} brand. Book a free strategy call today.`}
            />
        </main>
    );
}
