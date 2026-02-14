"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import { getAssetPath } from "@/lib/assets";

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with form backend
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Photo — Downtown Dallas at night */}
            <Image
                src={getAssetPath("/images/backgrounds/downtownnativz2.jpg")}
                alt="Downtown Dallas skyline at night"
                fill
                className="object-cover"
                quality={80}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy z-[1]" />
            <div className="absolute inset-0 bg-mesh pointer-events-none z-[2]" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Ready to{" "}
                            <span className="text-gradient">Feed the Algorithm?</span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            Let&apos;s talk about building a content system that actually works
                            in the post-Andromeda world.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <form
                        onSubmit={handleSubmit}
                        className="glass-card p-8 md:p-10 max-w-2xl mx-auto backdrop-blur-xl"
                    >
                        <div className="grid md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label
                                    htmlFor="cta-name"
                                    className="block text-sm font-medium text-cool-gray mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="cta-name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cool-gray focus:outline-none focus:border-electric-blue transition-colors backdrop-blur-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="cta-email"
                                    className="block text-sm font-medium text-cool-gray mb-2"
                                >
                                    Work Email
                                </label>
                                <input
                                    id="cta-email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cool-gray focus:outline-none focus:border-electric-blue transition-colors backdrop-blur-sm"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="cta-phone"
                                className="block text-sm font-medium text-cool-gray mb-2"
                            >
                                Phone
                            </label>
                            <input
                                id="cta-phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cool-gray focus:outline-none focus:border-electric-blue transition-colors backdrop-blur-sm"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="cta-message"
                                className="block text-sm font-medium text-cool-gray mb-2"
                            >
                                How can we help you today?
                            </label>
                            <textarea
                                id="cta-message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-cool-gray focus:outline-none focus:border-electric-blue transition-colors resize-none backdrop-blur-sm"
                                placeholder="Tell us about your project, goals, and timeline..."
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 py-3.5 btn-gradient text-white font-semibold text-sm"
                            >
                                Book Your Strategy Call
                            </button>
                            <a
                                href="#process"
                                className="flex-1 py-3.5 btn-gradient-outline text-white font-semibold text-sm text-center backdrop-blur-sm"
                            >
                                See Our Process
                            </a>
                        </div>
                    </form>
                </ScrollReveal>
            </div>
        </section>
    );
}
