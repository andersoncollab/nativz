"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import AnimatedCounter from "../ui/AnimatedCounter";

const BRANDFETCH_CLIENT = "1idTGmj32petBkJIqcI";

const clientLogos = [
    { name: "Jack Daniels", brandId: "idIfDh4gHE" },
    { name: "Wingstop", brandId: "idrxXVmIi_" },
    { name: "Mahindra", brandId: "idXYGjoJSI" },
    { name: "TopGolf", brandId: "idkY3vN1PW" },
    { name: "Smoothie King", brandId: "idrR5GMgYA" },
    { name: "AT&T", brandId: "idgWccDPPN" },
    { name: "Pizza Hut", brandId: "idzB6VtHPG" },
    { name: "Whataburger", brandId: "idfhNdiHOv" },
];

const reviewPlatforms = [
    { name: "Clutch", rating: "5.0", stars: 5 },
    { name: "DesignRush", rating: "4.9", stars: 5 },
    { name: "Google", rating: "5.0", stars: 5 },
];

const videoMetrics = [
    { views: 87500000, label: "87.5M Views", description: "Top Campaign" },
    { views: 1500000, label: "1.5M Views", description: "Viral Series" },
    { views: 500000, label: "500K Views", description: "Brand Launch" },
];

function BrandfetchLogo({ name, brandId }: { name: string; brandId: string }) {
    const src = `https://cdn.brandfetch.io/${brandId}/w/512/h/128/theme/dark/logo?c=${BRANDFETCH_CLIENT}`;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={`${name} logo`}
            width={140}
            height={40}
            className="h-8 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
        />
    );
}

export default function SocialProof() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Photo */}
            <Image
                src="/images/backgrounds/Dallas-Skyline.jpg"
                alt="Dallas downtown skyscrapers"
                fill
                className="object-cover"
                quality={75}
            />
            <div className="absolute inset-0 bg-navy/90 z-[1]" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Client Logos */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            Trusted By
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
                            Brands That Feed the Algorithm With Us
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="relative overflow-hidden mb-20">
                        <div className="flex animate-ticker whitespace-nowrap">
                            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                                <div
                                    key={i}
                                    className="group inline-flex items-center justify-center mx-6 min-w-[180px] h-20 glass-card px-8 hover:border-electric-blue/30 transition-all duration-300"
                                >
                                    <BrandfetchLogo name={logo.name} brandId={logo.brandId} />
                                </div>
                            ))}
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />
                    </div>
                </ScrollReveal>

                {/* Video Metrics */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {videoMetrics.map((metric, i) => (
                            <div key={i} className="glass-card p-8 text-center group hover:border-electric-blue/30 transition-all duration-300">
                                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                                    <AnimatedCounter
                                        end={metric.views}
                                        suffix=""
                                        className="text-gradient"
                                    />
                                </div>
                                <p className="text-white font-mono text-sm mb-1">{metric.label}</p>
                                <p className="text-cool-gray text-xs">{metric.description}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Review Badges */}
                <ScrollReveal delay={300}>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {reviewPlatforms.map((platform) => (
                            <div
                                key={platform.name}
                                className="glass-card px-6 py-4 flex items-center gap-4 hover:border-electric-blue/30 transition-all duration-300"
                            >
                                <div>
                                    <p className="text-white font-semibold text-sm">{platform.name}</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        {Array.from({ length: platform.stars }).map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-3xl font-display font-bold text-white">
                                    {platform.rating}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
