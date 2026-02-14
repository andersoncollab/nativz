import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";

const caseStudies = [
    {
        title: "Wingstop Social Media Takeover",
        category: "Marketing",
        description: "Generated 1.5M organic views in 30 days through creative volume strategy.",
        metrics: "+340% Engagement",
        color: "electric-blue",
        image: "/images/backgrounds/downtownnativz.jpg",
    },
    {
        title: "Mahindra Brand Launch Campaign",
        category: "Design",
        description: "Built and launched a complete brand identity and content system for US market entry.",
        metrics: "500K+ Reach",
        color: "cyan",
        image: "/images/backgrounds/westelmnativz.jpg",
    },
    {
        title: "Local DFW Restaurant Chain SEO",
        category: "SEO",
        description: "First page rankings for 47 competitive local keywords within 90 days.",
        metrics: "+215% Organic Traffic",
        color: "electric-blue",
        image: "/images/backgrounds/oldredmuseumnativz.jpg",
    },
    {
        title: "E-Commerce Content Production",
        category: "Development",
        description: "Full production pipeline producing 60+ creatives per month for Meta Ads.",
        metrics: "-42% CPM",
        color: "cyan",
        image: "/images/backgrounds/Bridgeshotnativz.jpg",
    },
];

const categoryColors: Record<string, string> = {
    Marketing: "bg-electric-blue/10 text-electric-blue",
    Design: "bg-purple-500/10 text-purple-400",
    SEO: "bg-cyan/10 text-cyan",
    Development: "bg-green-500/10 text-green-400",
};

export default function CaseStudiesPreview() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Photo */}
            <Image
                src="/images/backgrounds/attnativz.jpg"
                alt="Dallas Arts District reflection"
                fill
                className="object-cover"
                quality={75}
            />
            <div className="absolute inset-0 bg-navy/92 z-[1]" />
            <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50 z-[2]" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            Case Studies
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Real Results.{" "}
                            <span className="text-gradient">Real Brands.</span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            We don&apos;t just talk about creative volume. Here&apos;s what it looks like in action.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {caseStudies.map((cs, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <Link href="/case-studies" className="block">
                                <div className="glass-card glass-card-hover p-6 h-full group">
                                    {/* Thumbnail */}
                                    <div className="w-full h-48 rounded-lg mb-5 overflow-hidden relative">
                                        <Image
                                            src={cs.image}
                                            alt={cs.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            quality={70}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                                    </div>

                                    {/* Category Tag */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[cs.category]}`}>
                                        {cs.category}
                                    </span>

                                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-electric-blue transition-colors">
                                        {cs.title}
                                    </h3>
                                    <p className="text-cool-gray text-sm mb-4">
                                        {cs.description}
                                    </p>

                                    {/* Metrics badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white-subtle rounded-lg">
                                        <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>
                                        <span className="text-cyan font-mono text-sm font-bold">{cs.metrics}</span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={400}>
                    <div className="text-center">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 px-6 py-3 btn-gradient-outline text-white font-medium text-sm group"
                        >
                            View All Case Studies
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
