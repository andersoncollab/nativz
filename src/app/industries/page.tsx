import { Metadata } from "next";
import Link from "next/link";
import { getAllIndustries } from "@/data/industries";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
    title: "Industries We Serve | Nativz",
    description:
        "Nativz serves businesses across every major industry vertical: franchise, restaurant, e-commerce, healthcare, real estate, SaaS, fitness, legal, automotive, and more.",
};

export default function IndustriesIndexPage() {
    const industries = getAllIndustries();

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name="Industries We Serve | Nativz"
                description="Marketing solutions tailored to your industry."
                url="https://nativz.io/industries/"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        Industry Expertise
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                        Industries We{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Dominate
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Every industry has unique buyers, unique funnels, and unique challenges.
                        Our team brings deep vertical expertise to deliver marketing strategies
                        that actually move the needle for your specific business category.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry) => (
                        <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}/`}
                            className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative">
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-display">
                                    {industry.title}
                                </h2>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {industry.shortDescription}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                    View industry
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
