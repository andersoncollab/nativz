import ScrollReveal from "../ui/ScrollReveal";

export default function WhoWeAre() {
    return (
        <section className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 font-display">
                            A creative agency built for
                            <br className="hidden sm:block" />
                            {" "}the algorithm era
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                            Nativz is a Dallas-based creative agency that builds content systems and marketing
                            machines. We blend AI, data, and human creativity to produce work that doesn&apos;t
                            just look great — it performs.
                        </p>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                            We work with franchise systems scaling across hundreds of locations, e-commerce
                            brands chasing aggressive ROAS targets, and local businesses fighting for every
                            click in hyper-competitive markets. We manage serious ad spend and produce
                            serious creative volume.
                        </p>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            Our team is part strategist, part technologist, part creative obsessive. We&apos;ve
                            built proprietary workflows that fuse generative AI with human craft, giving our
                            clients a creative output advantage that traditional agencies simply cannot match.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Stats Row */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                        {[
                            { number: "500+", label: "Brands Served" },
                            { number: "$500M+", label: "Ad Spend Managed" },
                            { number: "1,000s", label: "Assets/Month" },
                            { number: "2016", label: "Founded" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-white font-display mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
