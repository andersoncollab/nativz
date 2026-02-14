import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getParentService, getSubServicesForParent, parentServices, getRelatedServices } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";
import RelatedServices from "@/components/shared/RelatedServices";

interface PageProps {
    params: Promise<{ parentSlug: string }>;
}

export async function generateStaticParams() {
    return parentServices.map((service) => ({
        parentSlug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { parentSlug } = await params;
    const service = getParentService(parentSlug);
    if (!service) return { title: "Service Not Found | Nativz" };

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.primaryKeywords,
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `https://nativz.io/services/${service.slug}/`,
            type: "website",
        },
    };
}

export default async function ParentServicePage({ params }: PageProps) {
    const { parentSlug } = await params;
    const service = getParentService(parentSlug);
    if (!service) notFound();

    const subServices = getSubServicesForParent(service.slug);
    const relatedServices = getRelatedServices(service);

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="service"
                name={service.title}
                description={service.shortDescription}
                url={`https://nativz.io/services/${service.slug}/`}
            />

            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Services", href: "/services" },
                        { label: service.title, href: `/services/${service.slug}/` },
                    ]}
                />

                {/* Hero */}
                <div className="mb-16">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        {service.category.replace(/-/g, " ")}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                        {service.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        {service.shortDescription}
                    </p>
                </div>

                {/* Content Sections */}
                {service.content.length > 0 && (
                    <div className="prose prose-invert prose-cyan max-w-4xl mb-16">
                        {service.content.map((section, index) => (
                            <div key={index} className="mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
                                    {section.heading}
                                </h2>
                                <div
                                    className="text-slate-300 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: section.body }}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Sub-Services Grid */}
                {subServices.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading">
                            Specialized Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subServices.map((sub) => (
                                <Link
                                    key={sub.slug}
                                    href={`/services/${service.slug}/${sub.slug}/`}
                                    className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                                        {sub.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                                        {sub.shortDescription}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                        Learn more
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Deliverables */}
                {service.deliverables.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading">What You Get</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.deliverables.map((d, i) => (
                                <div key={i} className="glass-card p-6 rounded-xl">
                                    <h3 className="text-white font-semibold mb-2">{d.title}</h3>
                                    <p className="text-sm text-slate-400">{d.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* FAQ */}
                <FAQAccordion items={service.faqItems} />

                {/* Related Services */}
                <RelatedServices services={relatedServices} />

                {/* CTA */}
                <ServiceCTA
                    heading={`Ready to Transform Your ${service.title.split(" ")[0]} Strategy?`}
                    description="Book a strategy call with our team. We will assess your current marketing and build a plan tailored to your business goals."
                />
            </div>
        </main>
    );
}
