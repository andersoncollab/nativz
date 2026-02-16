import { Metadata } from "next";
import Link from "next/link";
import { parentServices, getSubServicesForParent } from "@/data/services";
import { getAllIndustries } from "@/data/industries";
import { getAllBlogPosts } from "@/data/blogs";
import { getAllCaseStudies } from "@/data/case-studies";
import { serviceAreas } from "@/data/areas";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Sitemap | Nativz",
    description:
        "Browse the complete Nativz website sitemap. Find all pages including services, industries, blog posts, case studies, and more.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function SitemapPage() {
    const industries = getAllIndustries();
    const blogPosts = getAllBlogPosts();
    const caseStudies = getAllCaseStudies();
    const areas = serviceAreas;

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="mb-16">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Navigation
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                            Sitemap
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl">
                            Browse the complete structure of the Nativz website, organized by section.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Pages */}
                    <ScrollReveal delay={0}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-electric-blue" />
                                Main Pages
                            </h2>
                            <ul className="space-y-2">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About", href: "/about" },
                                    { label: "Services", href: "/services" },
                                    { label: "Industries", href: "/industries" },
                                    { label: "Case Studies", href: "/case-studies" },
                                    { label: "Blog", href: "/blog" },
                                    { label: "Contact", href: "/contact" },
                                    { label: "Andromeda", href: "/andromeda" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-300 hover:text-electric-blue transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Services */}
                    <ScrollReveal delay={80}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan" />
                                Services
                            </h2>
                            <ul className="space-y-3">
                                {parentServices.map((service) => {
                                    const subs = getSubServicesForParent(service.slug);
                                    return (
                                        <li key={service.slug}>
                                            <Link
                                                href={`/services/${service.slug}/`}
                                                className="text-sm font-medium text-white hover:text-electric-blue transition-colors"
                                            >
                                                {service.title}
                                            </Link>
                                            {subs.length > 0 && (
                                                <ul className="mt-1 ml-4 space-y-1">
                                                    {subs.map((sub) => (
                                                        <li key={sub.slug}>
                                                            <Link
                                                                href={`/services/${service.slug}/${sub.slug}/`}
                                                                className="text-xs text-slate-400 hover:text-cyan transition-colors"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Industries */}
                    <ScrollReveal delay={160}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-electric-blue" />
                                Industries
                            </h2>
                            <ul className="space-y-2">
                                {industries.map((industry) => (
                                    <li key={industry.slug}>
                                        <Link
                                            href={`/industries/${industry.slug}/`}
                                            className="text-sm text-slate-300 hover:text-electric-blue transition-colors"
                                        >
                                            {industry.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Case Studies */}
                    <ScrollReveal delay={240}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan" />
                                Case Studies
                            </h2>
                            <ul className="space-y-2">
                                {caseStudies.map((study) => (
                                    <li key={study.slug}>
                                        <Link
                                            href={`/case-studies/${study.slug}/`}
                                            className="text-sm text-slate-300 hover:text-electric-blue transition-colors"
                                        >
                                            {study.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Blog Posts */}
                    <ScrollReveal delay={320}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-electric-blue" />
                                Blog ({blogPosts.length} posts)
                            </h2>
                            <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                                {blogPosts.map((post) => (
                                    <li key={post.slug}>
                                        <Link
                                            href={`/blog/${post.slug}/`}
                                            className="text-sm text-slate-300 hover:text-electric-blue transition-colors line-clamp-1"
                                        >
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Service Areas + Legal */}
                    <ScrollReveal delay={400}>
                        <div className="glass-card p-6 rounded-xl">
                            <h2 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan" />
                                Legal & Utility
                            </h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/privacy-policy" className="text-sm text-slate-300 hover:text-electric-blue transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="text-sm text-slate-300 hover:text-electric-blue transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sitemap-page" className="text-sm text-slate-300 hover:text-electric-blue transition-colors">
                                        Sitemap
                                    </Link>
                                </li>
                            </ul>

                            {areas.length > 0 && (
                                <>
                                    <h3 className="text-sm font-bold text-white mt-6 mb-3 font-display">
                                        Service Areas
                                    </h3>
                                    <ul className="space-y-2">
                                        {areas.map((area) => (
                                            <li key={area.slug}>
                                                <Link
                                                    href={`/areas/${area.slug}/`}
                                                    className="text-sm text-slate-300 hover:text-electric-blue transition-colors"
                                                >
                                                    {area.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </main>
    );
}
