import { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/data/areas";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
    title: "Service Areas | Nationwide Marketing Agency Based in Dallas-Fort Worth | Nativz",
    description:
        "Nativz is headquartered in Dallas-Fort Worth and serves brands nationwide and worldwide. From DFW to every market — we build marketing systems that scale anywhere.",
    keywords: [
        "nationwide marketing agency",
        "Dallas marketing agency",
        "Fort Worth marketing agency",
        "DFW marketing agency",
        "Texas marketing agency",
        "global marketing agency",
        "marketing agency near me",
    ],
    openGraph: {
        title: "Service Areas | Nativz — Nationwide, Based in DFW",
        description:
            "Headquartered in Dallas-Fort Worth, serving brands nationwide and worldwide.",
        url: "https://nativz.io/areas",
        type: "website",
    },
};

export default function AreasIndexPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Service Areas", href: "/areas" },
                    ]}
                />

                <SchemaMarkup type="organization" />

                <ScrollReveal>
                    <div className="mb-16">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Nationwide &bull; Based in DFW
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display">
                            Headquartered in Dallas-Fort Worth.
                            <br />
                            <span className="bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
                                Serving brands everywhere.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                            Nativz is proudly rooted in the DFW metroplex, but our marketing systems
                            power brands nationwide and around the world. Whether you&apos;re down the
                            street or across the globe, we build the same high-performance content
                            machines — tailored to your market.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceAreas.map((area, i) => (
                        <ScrollReveal key={area.slug} delay={i * 60}>
                            <Link
                                href={`/areas/${area.slug}`}
                                className="group glass-card p-8 rounded-2xl flex flex-col h-full hover:bg-white/[0.06] hover:border-electric-blue/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-5 group-hover:bg-electric-blue/20 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors font-display">
                                    {area.title}
                                </h2>
                                <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-3 mb-4">
                                    {area.metaDescription}
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-blue group-hover:text-cyan group-hover:gap-2.5 transition-all">
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
        </main>
    );
}
