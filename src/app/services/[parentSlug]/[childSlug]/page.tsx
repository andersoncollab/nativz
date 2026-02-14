import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSubService, getParentService, subServices, getSiblingServices, getRelatedServices } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import ServiceCTA from "@/components/shared/ServiceCTA";
import RelatedServices from "@/components/shared/RelatedServices";

interface PageProps {
    params: Promise<{ parentSlug: string; childSlug: string }>;
}

export async function generateStaticParams() {
    return subServices
        .filter((s) => s.parentSlug)
        .map((service) => ({
            parentSlug: service.parentSlug!,
            childSlug: service.slug,
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

export default async function SubServicePage({ params }: PageProps) {
    const { parentSlug, childSlug } = await params;
    const service = getSubService(parentSlug, childSlug);
    if (!service) notFound();

    const parent = getParentService(parentSlug);
    const siblings = getSiblingServices(service);
    const relatedParents = getRelatedServices(service);

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="service"
                name={service.title}
                description={service.shortDescription}
                url={`https://nativz.io/services/${parentSlug}/${service.slug}/`}
            />

            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Services", href: "/services" },
                        { label: parent?.title || parentSlug, href: `/services/${parentSlug}/` },
                        { label: service.title, href: `/services/${parentSlug}/${service.slug}/` },
                    ]}
                />

                {/* Hero */}
                <div className="mb-16">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        {parent?.title || service.category.replace(/-/g, " ")}
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

                {/* Placeholder content when no content blocks exist yet */}
                {service.content.length === 0 && (
                    <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 max-w-4xl">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            Why Choose Nativz for {service.title}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            {service.shortDescription} At Nativz, we bring the creative volume
                            methodology and algorithm intelligence that the post-Andromeda era demands.
                            Every campaign, every piece of content, and every strategy we build is
                            designed for how platforms actually work today.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {service.primaryKeywords.map((kw) => (
                                <span key={kw} className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </div>
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

                {/* Sibling Services */}
                {siblings.length > 0 && (
                    <RelatedServices
                        services={siblings}
                        heading={`More ${parent?.title || "Services"}`}
                    />
                )}

                {/* Related Parent Services */}
                {relatedParents.length > 0 && (
                    <RelatedServices services={relatedParents} heading="Related Services" />
                )}

                {/* CTA */}
                <ServiceCTA
                    heading={`Ready to Dominate with ${service.title.split(" ")[0]}?`}
                    description="Book a strategy call with our team. We will assess your current marketing and build a plan tailored to your business goals."
                />
            </div>
        </main>
    );
}
