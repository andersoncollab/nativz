import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import { getAssetPath } from "@/lib/assets";

const tiers = [
    {
        name: "Starter",
        tagline: "Start Building",
        description: "Perfect for brands ready to start building consistent content.",
        features: [
            "1 Film Day per month",
            "10 short-form videos",
            "5 static posts",
            "Content calendar",
            "Basic caption writing",
            "Monthly strategy call",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        tagline: "Most Popular",
        description: "For brands serious about feeding the algorithm and scaling creative.",
        features: [
            "1 Film Day per month",
            "15+ short-form videos",
            "10 static posts",
            "Content calendar + scheduling",
            "AI-assisted caption writing",
            "Bi-weekly strategy calls",
            "Organic + Paid content system",
            "Content Matrix strategy",
        ],
        highlighted: true,
    },
    {
        name: "Scale",
        tagline: "Full Service",
        description: "Full-service creative volume for brands ready to dominate their niche.",
        features: [
            "2 Film Days per month",
            "25+ short-form videos",
            "15 static posts",
            "Full content management",
            "AI-assisted workflows",
            "Weekly strategy calls",
            "Organic + Paid content system",
            "Content Matrix + A/B testing",
            "Ad creative production",
            "Performance reporting",
        ],
        highlighted: false,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Photo */}
            <Image
                src={getAssetPath("/images/backgrounds/smunativz.jpg")}
                alt="Dallas architecture"
                fill
                className="object-cover"
                quality={75}
            />
            <div className="absolute inset-0 bg-navy/90 z-[1]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20 z-[2]" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            Plans
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Built for Your Stage.{" "}
                            <span className="text-gradient">Scaled to Your Goals.</span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            Every plan delivers algorithm-optimized content production
                            tailored to your brand. Let&apos;s find the right fit together.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {tiers.map((tier, i) => (
                        <ScrollReveal key={tier.name} delay={i * 100}>
                            <div
                                className={`relative p-8 rounded-2xl h-full flex flex-col ${tier.highlighted
                                    ? "bg-gradient-to-b from-electric-blue/10 to-charcoal border-2 border-electric-blue/40 shadow-lg shadow-electric-blue/10"
                                    : "glass-card"
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1.5 bg-electric-blue text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                            {tier.tagline}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                                        {tier.name}
                                    </h3>
                                    {!tier.highlighted && (
                                        <span className="text-electric-blue font-mono text-xs uppercase tracking-wider">
                                            {tier.tagline}
                                        </span>
                                    )}
                                    <p className="text-cool-gray text-sm mt-3">{tier.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-start gap-3">
                                            <svg
                                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-electric-blue" : "text-cyan"
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-cool-gray-light text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`w-full text-center py-3.5 font-semibold text-sm transition-all duration-300 ${tier.highlighted
                                        ? "btn-gradient"
                                        : "btn-gradient-outline"
                                        }`}
                                >
                                    Let&apos;s Talk
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={400}>
                    <p className="text-center text-cool-gray text-sm mt-8">
                        <span className="text-cool-gray-light font-mono">*</span> Travel
                        quoted separately for out-of-DFW production.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
