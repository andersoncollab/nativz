"use client";

// ============================================================
// FAQ Accordion with FAQPage JSON-LD Schema
// ============================================================

import { useState } from "react";
import { FAQItem } from "@/data/types";

interface FAQAccordionProps {
    items: FAQItem[];
    heading?: string;
}

export default function FAQAccordion({ items, heading = "Frequently Asked Questions" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (items.length === 0) return null;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <section className="py-16 md:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-heading">
                    {heading}
                </h2>
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-white font-medium pr-4">{item.question}</span>
                                <svg
                                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
