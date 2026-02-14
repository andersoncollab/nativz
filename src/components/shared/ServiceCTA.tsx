// ============================================================
// Service CTA Component
// Configurable call-to-action section for service/industry pages
// ============================================================

import Link from "next/link";

interface ServiceCTAProps {
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export default function ServiceCTA({
    heading = "Ready to Get Started?",
    description = "Book a strategy call with our team. We will walk through your goals, assess your current marketing, and build a plan tailored to your business.",
    primaryButtonText = "Book a Strategy Call",
    primaryButtonHref = "/contact",
    secondaryButtonText = "View Our Work",
    secondaryButtonHref = "/case-studies",
}: ServiceCTAProps) {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                    {heading}
                </h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={primaryButtonHref}
                        className="btn-gradient px-8 py-4 text-lg rounded-xl inline-flex items-center gap-2"
                    >
                        {primaryButtonText}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                    <Link
                        href={secondaryButtonHref}
                        className="btn-gradient-outline px-8 py-4 text-lg rounded-xl"
                    >
                        {secondaryButtonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
