import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/data/industries";
import { getParentService } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
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

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustry(slug);
    if (!industry) notFound();

    const relatedServices = industry.relatedServiceSlugs
        .map((s) => getParentService(s))
        .filter(Boolean) as ServicePage[];

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name={industry.title}
                description={industry.shortDescription}
                url={`https://nativz.io/industries/${industry.slug}/`}
            />

            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Industries", href: "/industries" },
                        { label: industry.title, href: `/industries/${industry.slug}/` },
                    ]}
                />

                {/* Hero */}
                <div className="mb-16">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        Industry Expertise
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                        {industry.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                        {industry.shortDescription}
                    </p>
                </div>

                {/* Content Sections */}
                {industry.content.length > 0 && (
                    <div className="prose prose-invert prose-cyan max-w-4xl mb-16">
                        {industry.content.map((section, index) => (
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

                {/* Placeholder content */}
                {industry.content.length === 0 && (
                    <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 max-w-4xl">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            Marketing Solutions for {industry.title.replace(" Marketing", "").replace(" Agency", "")}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            {industry.shortDescription} Nativz brings the creative volume methodology
                            and algorithm intelligence that modern {industry.title.toLowerCase().replace(" marketing", "").replace(" agency", "")} brands
                            need to compete in the post-Andromeda era.
                        </p>
                    </div>
                )}

                {/* Challenges */}
                {industry.challenges.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading">Industry Challenges</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {industry.challenges.map((c, i) => (
                                <div key={i} className="glass-card p-6 rounded-xl">
                                    <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                                    <p className="text-sm text-slate-400">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Solutions */}
                {industry.solutions.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading">Our Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {industry.solutions.map((s, i) => (
                                <div key={i} className="glass-card p-6 rounded-xl">
                                    <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                    <p className="text-sm text-slate-400">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* FAQ */}
                <FAQAccordion items={industry.faqItems} />

                {/* Related Services */}
                <RelatedServices services={relatedServices} heading="Services for This Industry" />

                {/* CTA */}
                <ServiceCTA
                    heading={industry.ctaHeading}
                    description={industry.ctaDescription}
                />
            </div>
        </main>
    );
}
