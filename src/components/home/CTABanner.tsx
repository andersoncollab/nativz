import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
    return (
        <section className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                <ScrollReveal>
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-electric-blue-dark to-navy" />
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                            backgroundSize: '24px 24px',
                        }} />

                        <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 font-display leading-tight">
                                Ready to build a marketing system
                                <br className="hidden sm:block" />
                                {" "}that actually scales?
                            </h2>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                                Let&apos;s talk about your growth goals, your creative gaps, and how
                                Nativz can build the machine that gets you there.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-bold rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
                                >
                                    Book a Strategy Call
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
