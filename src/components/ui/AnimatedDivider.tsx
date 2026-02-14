"use client";

import { useEffect, useRef } from "react";

interface AnimatedDividerProps {
    variant?: "glow" | "mesh" | "dots";
    className?: string;
}

export default function AnimatedDivider({
    variant = "glow",
    className = "",
}: AnimatedDividerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("divider-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    if (variant === "dots") {
        return (
            <div ref={ref} className={`divider-animate py-12 ${className}`}>
                <div className="flex items-center justify-center gap-3">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-electric-blue/40 transition-all duration-500"
                            style={{
                                transitionDelay: `${i * 100}ms`,
                                opacity: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (variant === "mesh") {
        return (
            <div ref={ref} className={`divider-animate relative py-16 ${className}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative h-px">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 border border-electric-blue/20 rotate-45 bg-navy" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-electric-blue/30 rotate-45" />
                    </div>
                </div>
            </div>
        );
    }

    // Default "glow" variant
    return (
        <div ref={ref} className={`divider-animate relative py-10 ${className}`}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative h-[2px] overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/60 to-transparent divider-shimmer" />
                </div>
            </div>
        </div>
    );
}
