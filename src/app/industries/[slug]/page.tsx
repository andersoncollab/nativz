import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getIndustry, industries } from "@/data/industries";
import { getParentService } from "@/data/services";
import { getIndustrySectionImage, getSocialPostExamples } from "@/data/sectionImages";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";
import RelatedServices from "@/components/shared/RelatedServices";
import { ServicePage } from "@/data/types";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) return { title: "Industry Not Found | Nativz" };

    return {
        title: industry.metaTitle,
        description: industry.metaDescription,
        openGraph: {
            title: industry.metaTitle,
            description: industry.metaDescription,
            url: `https://nativz.io/industries/${industry.slug}/`,
            type: "website",
        },
    };
}

/* ── Blue-only accent palette for industry pages ── */
const accent = {
    gradient: "from-electric-blue to-cyan",
    glow: "bg-electric-blue/[0.04]",
    badge: "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
};

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) notFound();

    const relatedServices = industry.relatedServiceSlugs
        .map((s) => getParentService(s))
        .filter(Boolean) as ServicePage[];

    const sectionImages = industry.content.map((_, i) => getIndustrySectionImage(i));
    const socialPosts = getSocialPostExamples(4);

    return (
        <main className="min-h-screen">
            <SchemaMarkup
                type="webpage"
                name={industry.title}
                description={industry.shortDescription}
                url={`https://nativz.io/industries/${industry.slug}/`}
            />

            {/* ═══════════════════════════════════════════════
                HERO — Full-width with animated background
            ═══════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 md:pb-36 overflow-hidden">
                {/* Animated gradient orbs */}
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${accent.glow} rounded-full blur-[200px] animate-pulse`} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/[0.03] rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-electric-blue/[0.02] rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />

                {/* Dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Industries", href: "/industries" },
                            { label: industry.title, href: `/industries/${industry.slug}/` },
                        ]}
                    />

                    <ScrollReveal>
                        <div className="mt-8 max-w-4xl">
                            <span className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border mb-6 ${accent.badge}`}>
                                Industry Expertise
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 font-display leading-[1.1]">
                                {industry.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                                {industry.shortDescription}
                            </p>

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
                CONTENT SECTIONS — Alternating text + image layout
            ═══════════════════════════════════════════════ */}
            {industry.content.length > 0 && industry.content.map((section, index) => {
                const imageOnRight = index % 2 === 0;
                return (
                    <div key={index}>
                        <AnimatedDivider variant={index === 0 ? "glow" : index % 2 === 0 ? "mesh" : "dots"} />

                        <section className={`relative py-24 md:py-32 overflow-hidden ${index % 2 === 1 ? "section-alt-bg" : ""}`}>
                            {index % 2 === 0 && (
                                <div className="absolute inset-0 section-break-mesh" />
                            )}

                            <div className="relative max-w-7xl mx-auto px-6">
                                <div className={`flex flex-col ${imageOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                                    {/* Text column */}
                                    <ScrollReveal delay={80} className="flex-1 min-w-0">
                                        <div>
                                            <div className="flex items-start gap-5 mb-8">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-electric-blue/10`}>
                                                    {String(index + 1).padStart(2, "0")}
                                                </div>
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display leading-tight pt-2">
                                                    {section.heading}
                                                </h2>
                                            </div>
                                            <div
                                                className="text-slate-300 text-lg leading-relaxed prose prose-invert prose-lg prose-cyan max-w-none [&>p]:mb-6 [&>ul]:my-6 [&>ul>li]:mb-3 [&_strong]:text-white"
                                                dangerouslySetInnerHTML={{ __html: section.body }}
                                            />
                                        </div>
                                    </ScrollReveal>

                                    {/* Image column */}
                                    <ScrollReveal delay={200} className="flex-1 min-w-0 w-full lg:w-auto">
                                        <div className="relative group">
                                            <div className={`absolute -inset-4 bg-gradient-to-br ${accent.gradient} rounded-3xl opacity-[0.08] blur-2xl group-hover:opacity-[0.15] transition-opacity duration-500`} />
                                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/30">
                                                <Image
                                                    src={sectionImages[index]}
                                                    alt={section.heading}
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
                    </div>
                );
            })}

            {/* Placeholder content when no content sections exist */}
            {industry.content.length === 0 && (
                <>
                    <AnimatedDivider variant="glow" />
                    <section className="relative py-24 md:py-32 overflow-hidden">
                        <div className="absolute inset-0 section-break-mesh" />
                        <div className="relative max-w-7xl mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                <ScrollReveal delay={80} className="flex-1 min-w-0">
                                    <div className="max-w-3xl">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
                                            Marketing Solutions for {industry.title.replace(" Marketing", "").replace(" Agency", "")}
                                        </h2>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                            {industry.shortDescription} Nativz brings the creative volume methodology
                                            and algorithm intelligence that modern {industry.title.toLowerCase().replace(" marketing", "").replace(" agency", "")} brands
                                            need to compete in the post-Andromeda era.
                                        </p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={200} className="flex-1 min-w-0 w-full lg:w-auto">
                                    <div className="relative group">
                                        <div className={`absolute -inset-4 bg-gradient-to-br ${accent.gradient} rounded-3xl opacity-[0.08] blur-2xl`} />
                                        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/30">
                                            <Image
                                                src={getIndustrySectionImage(0)}
                                                alt={industry.title}
                                                width={640}
                                                height={480}
                                                className="w-full h-auto object-cover aspect-[4/3]"
                                            />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                PARALLAX BREAK — Quote / social proof
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
                CHALLENGES — Grid cards
            ═══════════════════════════════════════════════ */}
            {industry.challenges.length > 0 && (
                <>
                    <AnimatedDivider variant="mesh" />

                    <section className="relative py-28 md:py-36 overflow-hidden">
                        <div className={`absolute bottom-20 right-0 w-[500px] h-[500px] ${accent.glow} rounded-full blur-[160px]`} />

                        <div className="relative max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                        What We Solve
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                        Industry Challenges
                                    </h2>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                {industry.challenges.map((c, i) => (
                                    <ScrollReveal key={i} delay={i * 60}>
                                        <div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group h-full">
                                            <div className="flex items-start gap-5">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/10`}>
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold mb-2 font-display text-lg">{c.title}</h3>
                                                    <p className="text-sm text-slate-400 leading-relaxed">{c.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                SOLUTIONS — Grid cards
            ═══════════════════════════════════════════════ */}
            {industry.solutions.length > 0 && (
                <>
                    <AnimatedDivider variant="dots" />

                    <section className="relative py-28 md:py-36 overflow-hidden section-alt-bg">
                        <div className="absolute inset-0 section-break-mesh" />

                        <div className="relative max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                        How We Help
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                        Our Solutions
                                    </h2>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                {industry.solutions.map((s, i) => (
                                    <ScrollReveal key={i} delay={i * 60}>
                                        <div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group h-full">
                                            <div className="flex items-start gap-5">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/10`}>
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold mb-2 font-display text-lg">{s.title}</h3>
                                                    <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                SOCIAL PROOF — Real post examples
            ═══════════════════════════════════════════════ */}
            {socialPosts.length > 0 && (
                <>
                    <AnimatedDivider variant="glow" />

                    <section className="relative py-28 md:py-36 overflow-hidden">
                        <div className="relative max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                        Creative Volume
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                        Real Work, Real Results
                                    </h2>
                                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                                        See examples from our top-performing social campaigns across client brands.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {socialPosts.map((post, i) => (
                                    <ScrollReveal key={i} delay={i * 80}>
                                        <div className="relative group overflow-hidden rounded-2xl border border-white/[0.08] hover:border-electric-blue/20 transition-all duration-300">
                                            <Image
                                                src={post}
                                                alt={`Social media campaign example ${i + 1}`}
                                                width={400}
                                                height={400}
                                                className="w-full h-auto object-cover aspect-square group-hover:scale-[1.05] transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                PARALLAX BREAK — Stats band
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
                FAQ
            ═══════════════════════════════════════════════ */}
            <AnimatedDivider variant="dots" />

            <section className="relative py-28 md:py-36 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <FAQAccordion items={industry.faqItems} />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                RELATED SERVICES
            ═══════════════════════════════════════════════ */}
            <AnimatedDivider variant="glow" />

            <section className="relative py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <RelatedServices services={relatedServices} heading="Services for This Industry" />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                CTA
            ═══════════════════════════════════════════════ */}
            <ServiceCTA
                heading={industry.ctaHeading}
                description={industry.ctaDescription}
            />
        </main>
    );
}
