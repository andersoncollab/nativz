import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudies } from "@/data/case-studies";
import { getParentService } from "@/data/services";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";
import ServiceCTA from "@/components/shared/ServiceCTA";
import { ServicePage } from "@/data/types";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllCaseStudies().map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) return { title: "Case Study Not Found | Nativz" };

    return {
        title: study.metaTitle,
        description: study.metaDescription,
        openGraph: {
            title: study.metaTitle,
            description: study.metaDescription,
            url: `https://nativz.io/case-studies/${study.slug}/`,
            type: "article",
            images: study.featuredImage ? [study.featuredImage] : undefined,
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);
    if (!study) notFound();

    const relatedServices = study.relatedServiceSlugs
        .map((s) => getParentService(s))
        .filter(Boolean) as ServicePage[];

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name={study.title}
                description={study.shortDescription}
                url={`https://nativz.io/case-studies/${study.slug}/`}
            />

            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Case Studies", href: "/case-studies" },
                        { label: study.title, href: `/case-studies/${study.slug}/` },
                    ]}
                />

                {/* Header */}
                <header className="max-w-4xl mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                            {study.industry}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                            {study.client}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                        {study.title}
                    </h1>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        {study.shortDescription}
                    </p>
                </header>

                {/* Featured Image */}
                {study.featuredImage && (
                    <div className="max-w-4xl mb-12 rounded-2xl overflow-hidden">
                        <img
                            src={study.featuredImage}
                            alt={study.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* Key Metrics */}
                {study.metrics.length > 0 && (
                    <div className="max-w-4xl mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {study.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="glass-card p-6 rounded-xl text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 font-heading mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Services Provided */}
                {study.servicesProvided.length > 0 && (
                    <div className="max-w-4xl mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            Services Provided
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {study.servicesProvided.map((service, i) => (
                                <span
                                    key={i}
                                    className="text-sm text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Challenge */}
                {study.challenge && (
                    <section className="max-w-4xl mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            The Challenge
                        </h2>
                        <div
                            className="prose prose-invert prose-cyan max-w-none prose-p:text-slate-300"
                            dangerouslySetInnerHTML={{ __html: study.challenge }}
                        />
                    </section>
                )}

                {/* Process */}
                {study.process && (
                    <section className="max-w-4xl mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            Our Approach
                        </h2>
                        <div
                            className="prose prose-invert prose-cyan max-w-none prose-p:text-slate-300"
                            dangerouslySetInnerHTML={{ __html: study.process }}
                        />
                    </section>
                )}

                {/* Results */}
                {study.results && (
                    <section className="max-w-4xl mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                            Results
                        </h2>
                        <div
                            className="prose prose-invert prose-cyan max-w-none prose-p:text-slate-300"
                            dangerouslySetInnerHTML={{ __html: study.results }}
                        />
                    </section>
                )}

                {/* Testimonial */}
                {study.testimonial && (
                    <section className="max-w-4xl mb-16">
                        <div className="glass-card p-8 md:p-12 rounded-2xl border-l-4 border-cyan-400">
                            <svg className="w-10 h-10 text-cyan-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6 italic">
                                &ldquo;{study.testimonial.quote}&rdquo;
                            </blockquote>
                            <div className="text-sm">
                                <span className="text-white font-semibold">
                                    {study.testimonial.author}
                                </span>
                                {study.testimonial.title && (
                                    <span className="text-slate-400 ml-2">
                                        — {study.testimonial.title}
                                    </span>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Services */}
                <RelatedServices services={relatedServices} heading="Services Used in This Project" />

                {/* CTA */}
                <ServiceCTA
                    heading="Ready to Be Our Next Success Story?"
                    description="Let's build a marketing strategy that delivers measurable results for your brand."
                />
            </div>
        </main>
    );
}
