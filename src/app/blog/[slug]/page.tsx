import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/data/blogs";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllBlogPosts().map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return { title: "Post Not Found | Nativz" };

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            url: `https://nativz.io/blog/${post.slug}/`,
            type: "article",
            publishedTime: post.publishDate,
            authors: [post.author],
            images: post.featuredImage ? [post.featuredImage] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    return (
        <main className="pt-32 pb-16 min-h-screen">
            <SchemaMarkup
                type="webpage"
                name={post.title}
                description={post.excerpt}
                url={`https://nativz.io/blog/${post.slug}/`}
            />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        description: post.excerpt,
                        datePublished: post.publishDate,
                        author: {
                            "@type": "Organization",
                            name: post.author,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Nativz",
                            url: "https://nativz.io",
                        },
                        image: post.featuredImage,
                        url: `https://nativz.io/blog/${post.slug}/`,
                    }),
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: "Blog", href: "/blog" },
                        { label: post.title, href: `/blog/${post.slug}/` },
                    ]}
                />

                {/* Article Header */}
                <header className="max-w-4xl mb-12">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((cat) => (
                            <span
                                key={cat}
                                className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>{post.author}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <time dateTime={post.publishDate}>
                            {new Date(post.publishDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </div>
                </header>

                {/* Featured Image */}
                {post.featuredImage && (
                    <div className="max-w-4xl mb-12 rounded-2xl overflow-hidden">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="max-w-4xl">
                    <div
                        className="prose prose-invert prose-cyan max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-a:text-cyan-400 prose-strong:text-white prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="max-w-4xl mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
