import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function LocationSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Photo — Margaret Hunt Hill Bridge */}
            <Image
                src="/images/backgrounds/bridgenativz.jpg"
                alt="Margaret Hunt Hill Bridge in Dallas"
                fill
                className="object-cover"
                quality={80}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60 z-[1]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20 z-[2]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <ScrollReveal>
                        <div>
                            <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                                Location
                            </span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
                                Based in North Texas.{" "}
                                <span className="text-gradient">Available Everywhere.</span>
                            </h2>
                            <p className="text-cool-gray text-lg leading-relaxed mb-8">
                                Our home base is in the heart of DFW, but we serve clients
                                across the country. In-person strategy sessions, on-location
                                production, or fully remote; we adapt to how you work best.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-electric-blue/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">In-Person Sessions</h4>
                                        <p className="text-cool-gray text-sm">
                                            Strategy meetings, film days, and creative workshops at our DFW studio.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-cyan/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">We Come to You</h4>
                                        <p className="text-cool-gray text-sm">
                                            Full production setup on location. We travel with everything needed to make magic happen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Visual: Photo reveal with glassmorphism overlay */}
                    <ScrollReveal delay={200}>
                        <div className="relative">
                            <div className="glass-card p-1 rounded-2xl overflow-hidden">
                                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/backgrounds/reuniontowernativz.jpg"
                                        alt="Dallas skyline from Reunion Tower"
                                        fill
                                        className="object-cover"
                                        quality={80}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                                    {/* DFW Pin overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="glass-card px-4 py-3 flex items-center gap-3">
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" />
                                                <div className="absolute inset-0 w-3 h-3 bg-electric-blue rounded-full animate-ping opacity-30" />
                                            </div>
                                            <div>
                                                <span className="text-electric-blue font-mono text-xs font-bold block">DFW, TX</span>
                                                <span className="text-cool-gray text-xs">Dallas-Fort Worth, Texas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
