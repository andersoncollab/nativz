import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import ScrollReveal from "../ui/ScrollReveal";

const pillars = [
    {
        title: "AI-Infused Workflows",
        description: "We embed generative AI into every step of the creative process — from ideation to production to distribution — giving our clients a creative output advantage.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        gradient: "from-purple-500 to-electric-blue",
    },
    {
        title: "Algorithm-Native Content",
        description: "Every piece of content we produce is engineered for the algorithm. Platform-specific formats, hook structures, and engagement patterns baked into the creative DNA.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        gradient: "from-electric-blue to-cyan",
    },
    {
        title: "Performance-Driven Creative",
        description: "We measure everything. Every asset is tested, iterated, and optimized. Creative decisions backed by data, not guesswork. Your budget works harder.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        gradient: "from-cyan to-green-400",
    },
    {
        title: "Data-First Strategy",
        description: "Every strategy starts with data — competitive analysis, audience intelligence, platform insights. We build marketing systems with quantified assumptions, not vibes.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
        gradient: "from-green-400 to-emerald-500",
    },
];

export default function OurApproach() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background texture */}
            <Image
                src={getAssetPath("/images/backgrounds/approach-texture.png")}
                alt=""
                fill
                className="object-cover opacity-40"
                quality={60}
            />
            <div className="absolute inset-0 bg-navy/80 z-[1]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display mb-4">
                            How we think differently
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Four pillars that define every project, every campaign, and every creative asset we produce.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {pillars.map((pillar, i) => (
                        <ScrollReveal key={pillar.title} delay={i * 100}>
                            <div className="glass-card p-8 rounded-2xl h-full hover:bg-white/[0.06] hover:border-electric-blue/20 transition-all duration-300 group">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}>
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
