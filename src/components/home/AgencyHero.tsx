"use client";

import Link from "next/link";
import ParticleNetwork from "@/components/ui/ParticleNetwork";

export default function AgencyHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark">
            {/* Animated particle mesh background */}
            <ParticleNetwork
                className="z-[1]"
                particleCount={90}
                connectionDistance={160}
                particleColor="59,130,246"
                lineColor="56,189,248"
                speed={0.35}
            />

            {/* Floating gradient orbs for depth */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] animate-pulse z-[2]" />
            <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-cyan/8 rounded-full blur-[100px] animate-pulse z-[2]" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] z-[2]" />

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-transparent to-navy/95 z-[3]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    <span className="text-sm text-slate-300 tracking-wide font-semibold">
                        Dallas-Fort Worth&apos;s Premier Creative Agency
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.08] tracking-tight font-display">
                    Marketing Systems Engineered
                    <br />
                    <span className="bg-gradient-to-r from-electric-blue via-cyan to-electric-blue bg-clip-text text-transparent">
                        for Rapid Growth
                    </span>
                </h1>

                {/* Narrative Blurb */}
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                    We don&apos;t run campaigns. We build content machines. Nativz blends AI-infused
                    strategy, algorithm-native creative, and serious production volume into marketing
                    systems that compound — not just convert. This is what happens when an army of
                    nerds takes over your brand.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/case-studies"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue-hover text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                    >
                        See Our Work
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        Book a Strategy Call
                    </Link>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent z-[3]" />
        </section>
    );
}

