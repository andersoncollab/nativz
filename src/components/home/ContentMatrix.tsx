"use client";

import { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

const contentTypes = ["Talking Head", "UGC-Style", "Meme / Trend"];
const angles = [
    { name: "Pain Point", description: "Address the core problem your audience faces" },
    { name: "Benefit-Led", description: "Showcase the transformation and results" },
    { name: "Objection Handling", description: "Overcome doubts and hesitations head-on" },
];

export default function ContentMatrix() {
    const [activeCell, setActiveCell] = useState<string | null>(null);

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh pointer-events-none" />
            <div className="relative max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            The System
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Meaningful Variety,{" "}
                            <span className="text-gradient">Not Random Chaos.</span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            Our Content Matrix ensures every creative is meaningfully distinct.
                            Three content types across three angles gives you 9+ unique concepts,
                            each one designed to trigger different algorithmic responses.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="glass-card p-6 md:p-8 overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 text-cool-gray text-xs uppercase tracking-wider font-mono">
                                        Angle / Format
                                    </th>
                                    {contentTypes.map((type) => (
                                        <th
                                            key={type}
                                            className="p-4 text-center text-electric-blue text-xs uppercase tracking-wider font-mono"
                                        >
                                            {type}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {angles.map((angle, ai) => (
                                    <tr key={angle.name} className="border-t border-white-border">
                                        <td className="p-4">
                                            <span className="text-white font-semibold text-sm">
                                                {angle.name}
                                            </span>
                                            <p className="text-cool-gray text-xs mt-1">
                                                {angle.description}
                                            </p>
                                        </td>
                                        {contentTypes.map((type, ti) => {
                                            const cellKey = `${ai}-${ti}`;
                                            const isActive = activeCell === cellKey;
                                            return (
                                                <td key={type} className="p-3 text-center">
                                                    <button
                                                        onMouseEnter={() => setActiveCell(cellKey)}
                                                        onMouseLeave={() => setActiveCell(null)}
                                                        className={`w-full p-4 rounded-xl transition-all duration-300 border ${isActive
                                                                ? "bg-electric-blue/20 border-electric-blue/50 scale-105"
                                                                : "bg-white-subtle border-white-border hover:border-blue-gray-light"
                                                            }`}
                                                    >
                                                        <div className="text-2xl mb-1">
                                                            {isActive ? "✨" : "🎬"}
                                                        </div>
                                                        <span className="text-xs text-cool-gray font-mono">
                                                            Creative {ai * 3 + ti + 1}
                                                        </span>
                                                    </button>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-6 text-center">
                            <p className="text-cool-gray text-sm">
                                <span className="text-cyan font-mono font-bold">9+</span>{" "}
                                meaningfully distinct creatives from a single content system.
                                Every one feeds the algorithm differently.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
