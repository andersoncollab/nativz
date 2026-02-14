import { Metadata } from "next";
import Link from "next/link";
import { parentServices } from "@/data/services";
import { getSubServicesForParent } from "@/data/services";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
    title: "Our Services | Nativz",
    description:
        "Explore the full range of Nativz marketing services: social media management, advertising, content production, website development, SEO, AI marketing, branding, commercial production, and email automation.",
};

export default function ServicesIndexPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name="Services | Nativz"
                description="Full-service digital marketing, creative production, and technology solutions."
                url="https://nativz.io/services/"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        What We Do
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                        Services Built for the{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Andromeda Era
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Creative volume. Algorithm intelligence. Systems thinking. Every service
                        we offer is designed for the post-2025 reality of digital marketing, where
                        the quantity and quality of your creative output determines your success.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parentServices.map((service) => {
                        const subServices = getSubServicesForParent(service.slug);
                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}/`}
                                className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative">
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-heading">
                                        {service.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {service.shortDescription}
                                    </p>

                                    {subServices.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                                                {subServices.length} specialized services
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {subServices.slice(0, 4).map((sub) => (
                                                    <span
                                                        key={sub.slug}
                                                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                                                    >
                                                        {sub.title.replace(service.title.split(" ")[0] + " ", "").split(" ").slice(0, 2).join(" ")}
                                                    </span>
                                                ))}
                                                {subServices.length > 4 && (
                                                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-cyan-400 border border-cyan-500/20">
                                                        +{subServices.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                        Explore service
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
