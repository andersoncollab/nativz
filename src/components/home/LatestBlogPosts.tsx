import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import ScrollReveal from "../ui/ScrollReveal";

export default function LatestBlogPosts() {
    // Grab the 3 most recent blog posts
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, 3);

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                                Insights
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display">
                                Latest from the blog
                            </h2>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden md:inline-flex items-center gap-2 text-electric-blue hover:text-cyan font-semibold transition-colors"
                        >
                            View all posts
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestPosts.map((post, i) => (
                        <ScrollReveal key={post.slug} delay={i * 100}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:bg-white/[0.06] hover:border-electric-blue/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Card header with category badge */}
                                <div className="p-6 pb-0">
                                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-cyan bg-cyan/10 px-3 py-1 rounded-full mb-4">
                                        {post.categories[0] || "Agency"}
                                    </span>
                                </div>
                                <div className="p-6 pt-3 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan transition-colors font-display line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                                        {post.metaDescription}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                                        <span className="text-electric-blue group-hover:text-cyan font-semibold transition-colors">
                                            Read →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-electric-blue hover:text-cyan font-semibold transition-colors"
                    >
                        View all posts →
                    </Link>
                </div>
            </div>
        </section>
    );
}
