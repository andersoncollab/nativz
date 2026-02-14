"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;        // 0–1, default 0.3
    className?: string;
    overlay?: boolean;     // dark overlay for readability
    variant?: "quote" | "stats" | "illustration";
}

export default function ParallaxSection({
    children,
    speed = 0.3,
    className = "",
    overlay = true,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const windowH = window.innerHeight;
                // Only animate when visible
                if (rect.bottom > 0 && rect.top < windowH) {
                    const offset = (rect.top - windowH / 2) * speed;
                    el.style.setProperty("--parallax-y", `${offset}px`);
                }
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            style={{ willChange: "transform" }}
        >
            {/* Parallax-moving background layer */}
            <div
                className="absolute inset-0 -top-20 -bottom-20"
                style={{ transform: "translateY(var(--parallax-y, 0))" }}
            >
                {/* Animated mesh background */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/[0.06] via-transparent to-cyan/[0.04]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(0,173,239,0.4) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                {/* Glowing orbs */}
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-electric-blue/[0.05] rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan/[0.04] rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Dark overlay for contrast */}
            {overlay && (
                <div className="absolute inset-0 bg-navy/40" />
            )}

            {/* Content layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
