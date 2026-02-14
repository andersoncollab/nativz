"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Photo */}
            <Image
                src="/images/backgrounds/Bridgeshotnativz.jpg"
                alt="Dallas skyline at night"
                fill
                priority
                className="object-cover"
                quality={85}
            />

            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy z-[1]" />

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 bg-mesh pointer-events-none z-[2]" />

            {/* Animated floating orbs */}
            <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float z-[2]" />
            <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-float z-[2]" style={{ animationDelay: "3s" }} />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
                {/* Eyebrow tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 backdrop-blur-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                    <span className="text-electric-blue text-sm font-medium font-mono">
                        Post-Andromeda Marketing
                    </span>
                </div>

                {/* Headline */}
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
                    Andromeda Changed Everything.{" "}
                    <span className="text-gradient">
                        Your Content Strategy Should Too.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-cool-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                    The brands winning on Meta in 2025 are not targeting better. They are
                    producing more. Nativz gives you the creative volume to feed the
                    algorithm and dominate your niche.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#process"
                        className="group px-8 py-4 btn-gradient text-white font-semibold text-sm flex items-center gap-2"
                    >
                        See How It Works
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 btn-gradient-outline text-white font-semibold text-sm backdrop-blur-sm"
                    >
                        Book a Strategy Call
                    </Link>
                </div>

                {/* Trust signal */}
                <div className="mt-16 flex items-center justify-center gap-8 text-cool-gray text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>10+ Creatives/Month</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Algorithm-Optimized</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>One Film Day = One Month</span>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent z-[3]" />
        </section>
    );
}
