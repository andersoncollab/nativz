// ============================================================
// Related Services Component
// Shows related parent services with links
// ============================================================

import Link from "next/link";
import { ServicePage } from "@/data/types";

interface RelatedServicesProps {
    services: ServicePage[];
    heading?: string;
}

export default function RelatedServices({
    services,
    heading = "Related Services",
}: RelatedServicesProps) {
    if (services.length === 0) return null;

    return (
        <section className="py-12">
            <h3 className="text-2xl font-bold text-white mb-8 font-display">{heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={
                            service.parentSlug
                                ? `/services/${service.parentSlug}/${service.slug}/`
                                : `/services/${service.slug}/`
                        }
                        className="glass-card p-5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                        <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.title}
                        </h4>
                        <p className="text-sm text-slate-400 line-clamp-2">
                            {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm text-cyan-400 mt-3 group-hover:gap-2 transition-all">
                            Learn more
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
