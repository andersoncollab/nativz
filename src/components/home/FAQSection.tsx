"use client";

import { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

const faqs = [
    {
        question: "How long is a typical film day?",
        answer: "A standard film day runs 4-8 hours depending on the scope. We come with a full production crew, equipment, and a detailed shot list designed to maximize content output. Most clients are amazed at how much we capture in a single session.",
    },
    {
        question: "Do you work with brands outside of DFW?",
        answer: "Absolutely. While our studio is in the Dallas-Fort Worth area, we regularly travel for production. We bring everything needed for a full production setup to your location. Travel is quoted separately based on destination.",
    },
    {
        question: "I already have an ad agency. Can you still help?",
        answer: "Yes. Many of our clients have separate media buying teams. We focus on the creative production side, giving your ad team a constant stream of fresh, algorithm-optimized creatives to test. Our content is designed to perform in Andromeda-era campaigns.",
    },
    {
        question: "What is the typical turnaround time?",
        answer: "After a film day, initial edits are delivered within 5-7 business days. Your full month of content is ready for review within two weeks. Rush timelines are available for time-sensitive campaigns.",
    },
    {
        question: "What is Andromeda, and why does it matter?",
        answer: "Andromeda is Meta's AI-powered ad retrieval engine that rolled out globally by October 2025. It fundamentally changed how ads are selected and delivered. Creative is now the primary signal for ad delivery, replacing audience targeting as the main lever. This means creative diversity and volume are no longer optional; they are the core strategy.",
    },
    {
        question: "Who handles posting and publishing?",
        answer: "It depends on your plan. On Starter, we deliver content and you handle publishing. On Growth and Scale, we manage the full content calendar including scheduling and posting. All plans include a client review step before anything goes live.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="relative max-w-3xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            FAQ
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Everything You&apos;re{" "}
                            <span className="text-gradient">Probably Wondering.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 80}>
                            <div className="glass-card overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <span className="font-semibold text-white pr-4 group-hover:text-electric-blue transition-colors">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white-subtle flex items-center justify-center transition-all duration-300 ${openIndex === i
                                                ? "rotate-180 bg-electric-blue/20"
                                                : ""
                                            }`}
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-colors ${openIndex === i ? "text-electric-blue" : "text-cool-gray"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-6 pb-6 text-cool-gray leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
