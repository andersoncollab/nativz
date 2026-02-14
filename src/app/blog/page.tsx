import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getAllCategories } from "@/data/blogs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

export const metadata: Metadata = {
    title: "Blog | Marketing Insights & Industry Rankings | Nativz",
    description:
        "Expert marketing insights, agency rankings, SEO guides, and digital marketing strategy from the Nativz team. Stay ahead of the curve with actionable intelligence.",
};

export default function BlogIndexPage() {
    const posts = getAllBlogPosts();
    const categories = getAllCategories();

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name="Blog | Nativz"
                description="Marketing insights, agency rankings, and digital strategy guides."
                url="https://nativz.io/blog/"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
                        Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                        Marketing{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Intelligence
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Agency rankings, SEO deep-dives, advertising strategy, and the marketing
                        insights that give you a competitive edge.
                    </p>
                </div>

                {/* Category Filter */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            All Posts
                        </span>
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                className="px-4 py-2 rounded-full text-sm font-medium text-slate-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                )}

                {/* Blog Post Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}/`}
                                className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                            >
                                {/* Featured Image */}
                                {post.featuredImage && (
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.featuredImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    {/* Categories */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.categories.slice(0, 2).map((cat) => (
                                            <span
                                                key={cat}
                                                className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-display line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-500">
                                            {new Date(post.publishDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm text-cyan-400 group-hover:gap-2 transition-all">
                                            Read more
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-slate-400 text-lg">Blog posts coming soon.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
