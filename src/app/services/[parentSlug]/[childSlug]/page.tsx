import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    getSubService,
    getParentService,
    getSiblingServices,
    subServices,
} from "@/data/services";
import { getServiceSectionImage } from "@/data/sectionImages";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import ServiceIllustration from "@/components/ui/ServiceIllustration";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";

interface PageProps {
    params: Promise<{ parentSlug: string; childSlug: string }>;
}

export async function generateStaticParams() {
    return subServices.map((s) => ({
        parentSlug: s.parentSlug!,
        childSlug: s.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { parentSlug, childSlug } = await params;
    const service = getSubService(parentSlug, childSlug);
    if (!service) return { title: "Service Not Found | Nativz" };

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.primaryKeywords,
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `https://nativz.io/services/${parentSlug}/${service.slug}/`,
            type: "website",
        },
    };
}

/* ── Blue-only accent palette ── */
const categoryAccents: Record<string, { gradient: string; glow: string; badge: string }> = {
    "social-media": { gradient: "from-sky-400 to-cyan-400", glow: "bg-sky-500/[0.04]", badge: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    "advertising": { gradient: "from-blue-500 to-electric-blue", glow: "bg-blue-500/[0.04]", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    "content-production": { gradient: "from-cyan-400 to-sky-500", glow: "bg-cyan-400/[0.04]", badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
    "web-development": { gradient: "from-blue-400 to-cyan-500", glow: "bg-blue-400/[0.04]", badge: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
    "branding": { gradient: "from-sky-500 to-blue-500", glow: "bg-sky-500/[0.04]", badge: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    "seo": { gradient: "from-electric-blue to-cyan", glow: "bg-electric-blue/[0.04]", badge: "bg-electric-blue/10 text-electric-blue border-electric-blue/20" },
    "commercial-production": { gradient: "from-cyan-500 to-blue-400", glow: "bg-cyan-500/[0.04]", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    "ai-marketing": { gradient: "from-electric-blue to-sky-400", glow: "bg-electric-blue/[0.04]", badge: "bg-electric-blue/10 text-electric-blue border-electric-blue/20" },
    "email-marketing": { gradient: "from-sky-400 to-blue-500", glow: "bg-sky-400/[0.04]", badge: "bg-sky-400/10 text-sky-400 border-sky-400/20" },
    "aeo": { gradient: "from-cyan-400 to-electric-blue", glow: "bg-cyan-400/[0.04]", badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
};

const defaultAccent = { gradient: "from-electric-blue to-cyan", glow: "bg-electric-blue/[0.04]", badge: "bg-electric-blue/10 text-electric-blue border-electric-blue/20" };

/* Map categories to illustration variants */
const illustrationVariants: Record<string, "network" | "wave" | "data" | "pulse" | "orbit"> = {
    "social-media": "network",
    "advertising": "data",
    "content-production": "wave",
    "web-development": "orbit",
    "branding": "pulse",
    "seo": "data",
    "commercial-production": "wave",
    "ai-marketing": "orbit",
    "email-marketing": "pulse",
    "aeo": "network",
};

export default async function ChildServicePage({ params }: PageProps) {
    const { parentSlug, childSlug } = await params;
    const service = getSubService(parentSlug, childSlug);
    const parent = getParentService(parentSlug);
    if (!service || !parent) notFound();

    const siblings = getSiblingServices(service);
    const accent = categoryAccents[service.category] || defaultAccent;
    const illustration = illustrationVariants[service.category] || "network";
    const sectionImages = service.content.map((_, i) => getServiceSectionImage(service.category, i));

    return (
        <main className="min-h-screen">
            <SchemaMarkup
                type="service"
                name={service.title}
                description={service.shortDescription}
                url={`https://nativz.io/services/${parentSlug}/${service.slug}/`}
                provider="Nativz"
                areaServed="US"
            />

            {/* ═══════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 md:pb-36 overflow-hidden">
                <div className={`absolute top-0 right-0 w-[700px] h-[700px] ${accent.glow} rounded-full blur-[200px] animate-pulse`} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/[0.03] rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />

                {/* Dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Breadcrumbs
                        items={[
                            { label: "Services", href: "/services" },
                            { label: parent.title, href: `/services/${parent.slug}/` },
                            { label: service.title, href: `/services/${parentSlug}/${service.slug}/` },
                        ]}
                    />

                    <ScrollReveal>
                        <div className="mt-8 max-w-4xl">
                            <Link
                                href={`/services/${parent.slug}/`}
                                className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border mb-6 hover:bg-white/[0.05] transition-colors ${accent.badge}`}
                            >
                                ← {parent.title}
                            </Link>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                                {service.shortDescription}
                            </p>

                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="btn-gradient px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 hover:shadow-[0_0_40px_rgba(0,173,239,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Started
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
            </section>

            {/* ═══════════════════════════════════════════════
                CONTENT SECTIONS — Alternating text + image layout
            ═══════════════════════════════════════════════ */}
            {service.content.length > 0 && service.content.map((section, index) => {
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

                                {/* Illustration after every 2nd content section */}
                                {index % 2 === 1 && index < service.content.length - 1 && (
                                    <ScrollReveal delay={200}>
                                        <ServiceIllustration
                                            variant={illustration}
                                            className="mt-12 md:mt-16"
                                        />
                                    </ScrollReveal>
                                )}
                            </div>
                        </section>
                    </div>
                );
            })}

            {/* ═══════════════════════════════════════════════
                PARALLAX BREAK — Quote band
            ═══════════════════════════════════════════════ */}
            <ParallaxSection speed={0.25} className="py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <ServiceIllustration variant={illustration} className="mb-8 opacity-40" />
                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-display font-bold leading-relaxed max-w-3xl mx-auto">
                            &ldquo;Every channel, every platform, every touchpoint —{" "}
                            <span className="text-gradient">engineered to perform</span>.&rdquo;
                        </p>
                        <p className="text-sm text-slate-400 mt-6 font-mono uppercase tracking-widest">
                            Built by Nativz
                        </p>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* ═══════════════════════════════════════════════
                DELIVERABLES
            ═══════════════════════════════════════════════ */}
            {service.deliverables.length > 0 && (
                <>
                    <AnimatedDivider variant="glow" />

                    <section className="relative py-28 md:py-36 overflow-hidden">
                        <div className="absolute inset-0 section-break-mesh" />
                        <div className={`absolute bottom-20 right-0 w-[500px] h-[500px] ${accent.glow} rounded-full blur-[160px]`} />

                        <div className="relative max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                        Deliverables
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                        What You Get
                                    </h2>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                {service.deliverables.map((d, i) => (
                                    <ScrollReveal key={i} delay={i * 60}>
                                        <div className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group h-full">
                                            <div className="flex items-start gap-5">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-electric-blue/10`}>
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold mb-2 font-display text-lg">{d.title}</h3>
                                                    <p className="text-sm text-slate-400 leading-relaxed">{d.description}</p>
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
                FAQ
            ═══════════════════════════════════════════════ */}
            {service.faqItems.length > 0 && (
                <>
                    <AnimatedDivider variant="dots" />

                    <section className="relative py-28 md:py-36 overflow-hidden">
                        <div className="max-w-7xl mx-auto px-6">
                            <FAQAccordion items={service.faqItems} />
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                SIBLING SERVICES
            ═══════════════════════════════════════════════ */}
            {siblings.length > 0 && (
                <>
                    <AnimatedDivider variant="glow" />

                    <section className="relative py-28 md:py-36 overflow-hidden">
                        <div className="absolute inset-0 section-break-mesh" />

                        <div className="relative max-w-7xl mx-auto px-6">
                            <ScrollReveal>
                                <div className="text-center mb-14">
                                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                        More Services
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
                                        More in {parent.title}
                                    </h2>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {siblings.slice(0, 6).map((sib, i) => (
                                    <ScrollReveal key={sib.slug} delay={i * 60}>
                                        <Link
                                            href={`/services/${parentSlug}/${sib.slug}/`}
                                            className="glass-card p-7 rounded-xl hover:bg-white/[0.06] hover:border-electric-blue/30 hover:-translate-y-1 transition-all duration-300 group block"
                                        >
                                            {/* Accent bar */}
                                            <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${accent.gradient} mb-4 group-hover:w-14 transition-all duration-300`} />
                                            <h3 className="text-white font-semibold mb-2 group-hover:text-cyan transition-colors font-display">
                                                {sib.title}
                                            </h3>
                                            <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                                {sib.shortDescription}
                                            </p>
                                            <span className="inline-flex items-center gap-1.5 text-sm text-electric-blue group-hover:text-cyan group-hover:gap-3 transition-all">
                                                Learn more
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════════════════════════════════
                CTA
            ═══════════════════════════════════════════════ */}
            <ServiceCTA
                heading={`Ready to Dominate with ${service.title.split(" ")[0]}?`}
                description="Book a strategy call with our team. We'll assess your current approach and build a plan tailored to your goals."
            />
        </main>
    );
}
