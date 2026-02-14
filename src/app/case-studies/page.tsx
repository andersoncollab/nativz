import { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/data/case-studies";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
    title: "Case Studies | Client Results & Success Stories | Nativz",
    description:
        "See how Nativz drives real results for real brands. Case studies showcasing our growth marketing, paid advertising, content production, and brand development work.",
};

export default function CaseStudiesIndexPage() {
    const studies = getAllCaseStudies();

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name="Case Studies | Nativz"
                description="Client results and success stories from the Nativz team."
                url="https://nativz.io/case-studies/"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        Case Studies
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                        Results That{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Speak
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Real strategies. Real clients. Real outcomes. See how we&apos;ve helped
                        brands grow from startup launches to multi-million dollar revenue engines.
                    </p>
                </div>

                {/* Case Study Cards */}
                {studies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {studies.map((study) => (
                            <Link
                                key={study.slug}
                                href={`/case-studies/${study.slug}/`}
                                className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                            >
                                {/* Featured Image */}
                                {study.featuredImage && (
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={study.featuredImage}
                                            alt={study.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-8">
                                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded mb-3 inline-block">
                                        {study.industry}
                                    </span>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-heading">
                                        {study.title}
                                    </h2>

                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {study.shortDescription}
                                    </p>

                                    {/* Key Metrics */}
                                    {study.metrics.length > 0 && (
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {study.metrics.slice(0, 4).map((metric, i) => (
                                                <div key={i} className="text-center">
                                                    <div className="text-2xl font-bold text-cyan-400 font-heading">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-xs text-slate-500 uppercase tracking-wider">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                        Read case study
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-slate-400 text-lg">Case studies coming soon.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
