"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

const services = [
    {
        title: "Social Media Management",
        description: "Full-service organic content strategy and posting",
        href: "/services/social-media-management",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        title: "Advertising & Paid Media",
        description: "Algorithm-optimized ad creative production",
        href: "/services/advertising",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        title: "Content Production",
        description: "Film days, editing, and creative volume",
        href: "/services/content-production",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        title: "Website Development",
        description: "High-performance websites that convert",
        href: "/services/website-development",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
    },
    {
        title: "Branding & Design",
        description: "Visual identity and brand system creation",
        href: "/services/branding-design",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
    },
    {
        title: "SEO & Search",
        description: "Technical SEO and search visibility",
        href: "/services/seo",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        title: "Answer Engine Optimization",
        description: "Get found by AI-powered search engines",
        href: "/services/aeo",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        ),
    },
];

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const industriesRef = useRef<HTMLDivElement>(null);
    const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mega menu on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
            if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
                setIndustriesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleServicesEnter = () => {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        setServicesOpen(true);
    };

    const handleServicesLeave = () => {
        servicesTimeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 200);
    };

    const handleIndustriesEnter = () => {
        if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
        setIndustriesOpen(true);
    };

    const handleIndustriesLeave = () => {
        industriesTimeoutRef.current = setTimeout(() => {
            setIndustriesOpen(false);
        }, 200);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-navy/95 backdrop-blur-xl border-b border-white-border shadow-lg shadow-navy-dark/50"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative z-10">
                        <Image
                            src={getAssetPath("/images/nativz-logo.svg")}
                            alt="Nativz"
                            width={130}
                            height={36}
                            priority
                            className="h-9 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Services Mega Menu Trigger */}
                        <div
                            ref={servicesRef}
                            className="relative"
                            onMouseEnter={handleServicesEnter}
                            onMouseLeave={handleServicesLeave}
                        >
                            <button
                                className="flex items-center gap-1.5 text-cool-gray hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                Services
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${servicesOpen
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                                style={{ width: "680px" }}
                            >
                                <div className="bg-navy-dark/98 backdrop-blur-2xl border border-white-border rounded-2xl shadow-2xl shadow-navy-dark/80 overflow-hidden">
                                    {/* Top accent line */}
                                    <div className="h-[2px] bg-gradient-to-r from-electric-blue via-cyan to-electric-blue" />

                                    <div className="p-6">
                                        <div className="grid grid-cols-2 gap-2">
                                            {services.map((service, i) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    onClick={() => setServicesOpen(false)}
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                                                    style={{ animationDelay: `${i * 50}ms` }}
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover/item:bg-electric-blue/20 group-hover/item:scale-110 transition-all duration-200 flex-shrink-0 mt-0.5">
                                                        {service.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-sm font-semibold group-hover/item:text-electric-blue transition-colors block">
                                                            {service.title}
                                                        </span>
                                                        <span className="text-cool-gray text-xs leading-relaxed block mt-0.5">
                                                            {service.description}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Bottom CTA */}
                                        <div className="mt-4 pt-4 border-t border-white-border">
                                            <Link
                                                href="/contact"
                                                onClick={() => setServicesOpen(false)}
                                                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-electric-blue/10 to-cyan/5 hover:from-electric-blue/20 hover:to-cyan/10 transition-all duration-300 group/cta"
                                            >
                                                <div>
                                                    <span className="text-white text-sm font-semibold block">Not sure where to start?</span>
                                                    <span className="text-cool-gray text-xs">Book a free strategy call and we&apos;ll map out your plan.</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center group-hover/cta:scale-110 transition-transform flex-shrink-0">
                                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Industries Mega Menu */}
                        <div
                            ref={industriesRef}
                            className="relative"
                            onMouseEnter={handleIndustriesEnter}
                            onMouseLeave={handleIndustriesLeave}
                        >
                            <button
                                className="flex items-center gap-1.5 text-cool-gray hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                                onClick={() => setIndustriesOpen(!industriesOpen)}
                            >
                                Industries
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
                            </button>

                            {/* Mega Menu Panel */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${industriesOpen
                                    ? "opacity-100 translate-y-0 pointer-events-auto"
                                    : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                                style={{ width: "720px" }}
                            >
                                <div className="bg-navy-dark/98 backdrop-blur-2xl border border-white-border rounded-2xl shadow-2xl shadow-navy-dark/80 overflow-hidden">
                                    {/* Top accent line */}
                                    <div className="h-[2px] bg-gradient-to-r from-cyan via-electric-blue to-purple-500" />

                                    <div className="p-6">
                                        {/* Industries Grid */}
                                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cool-gray mb-4 block">Industries We Serve</span>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                {
                                                    title: "Franchise Marketing",
                                                    description: "Multi-location systems at scale",
                                                    href: "/industries/franchise-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "E-Commerce Marketing",
                                                    description: "Revenue-driving digital storefronts",
                                                    href: "/industries/ecommerce-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Restaurant Marketing",
                                                    description: "Foot traffic, delivery & brand loyalty",
                                                    href: "/industries/restaurant-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .37" />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Local Business Marketing",
                                                    description: "Dominate your local market",
                                                    href: "/industries/local-business-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Healthcare Marketing",
                                                    description: "Patient acquisition & compliance",
                                                    href: "/industries/healthcare-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                        </svg>
                                                    ),
                                                },
                                                {
                                                    title: "Real Estate Marketing",
                                                    description: "Listings, leads & agent branding",
                                                    href: "/industries/real-estate-marketing",
                                                    icon: (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                                        </svg>
                                                    ),
                                                },
                                            ].map((item, i) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setIndustriesOpen(false)}
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                                                    style={{ animationDelay: `${i * 50}ms` }}
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan group-hover/item:bg-cyan/20 group-hover/item:scale-110 transition-all duration-200 flex-shrink-0 mt-0.5">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-white text-sm font-semibold group-hover/item:text-cyan transition-colors block">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-cool-gray text-xs leading-relaxed block mt-0.5">
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Service Areas + View All Row */}
                                        <div className="mt-4 pt-4 border-t border-white-border grid grid-cols-2 gap-2">
                                            <Link
                                                href="/areas"
                                                onClick={() => setIndustriesOpen(false)}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-electric-blue/10 to-cyan/5 hover:from-electric-blue/20 hover:to-cyan/10 transition-all duration-300 group/area"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-electric-blue/15 flex items-center justify-center text-electric-blue group-hover/area:scale-110 transition-transform flex-shrink-0">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span className="text-white text-sm font-semibold block">DFW Service Areas</span>
                                                    <span className="text-cool-gray text-xs">Dallas, Fort Worth, Plano & more</span>
                                                </div>
                                            </Link>
                                            <Link
                                                href="/industries"
                                                onClick={() => setIndustriesOpen(false)}
                                                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan/10 to-purple-500/5 hover:from-cyan/20 hover:to-purple-500/10 transition-all duration-300 group/all"
                                            >
                                                <div>
                                                    <span className="text-white text-sm font-semibold block">All Industries</span>
                                                    <span className="text-cool-gray text-xs">View our full industry expertise</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center group-hover/all:scale-110 transition-transform flex-shrink-0">
                                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Nav Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-cool-gray hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-2 px-6 py-2.5 btn-gradient text-white text-sm font-semibold"
                        >
                            Start Your Project
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative z-10 p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-navy/98 backdrop-blur-2xl transition-all duration-400 ${mobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
                    {/* Services Accordion */}
                    <div className="w-full max-w-sm">
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-center gap-2 text-2xl font-display font-semibold text-white hover:text-electric-blue transition-colors"
                        >
                            Services
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-400 ease-in-out overflow-hidden ${mobileServicesOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="space-y-1 glass-card p-4 rounded-2xl">
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setMobileServicesOpen(false);
                                        }}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0">
                                            {service.icon}
                                        </div>
                                        <span className="text-cool-gray-light text-sm font-medium">
                                            {service.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Industries Accordion - Mobile */}
                    <div className="w-full max-w-sm">
                        <button
                            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                            className="w-full flex items-center justify-center gap-2 text-2xl font-display font-semibold text-white hover:text-electric-blue transition-colors"
                        >
                            Industries
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`transition-all duration-400 ease-in-out overflow-hidden ${mobileIndustriesOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="space-y-1 glass-card p-4 rounded-2xl">
                                {[
                                    { title: "Franchise Marketing", href: "/industries/franchise-marketing" },
                                    { title: "E-Commerce", href: "/industries/ecommerce-marketing" },
                                    { title: "Restaurant Marketing", href: "/industries/restaurant-marketing" },
                                    { title: "Local Business", href: "/industries/local-business-marketing" },
                                    { title: "Healthcare", href: "/industries/healthcare-marketing" },
                                    { title: "Real Estate", href: "/industries/real-estate-marketing" },
                                ].map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setMobileIndustriesOpen(false);
                                        }}
                                        className="block p-3 rounded-xl hover:bg-white/5 transition-colors text-cool-gray-light text-sm font-medium"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                                <div className="pt-2 mt-2 border-t border-white-border space-y-1">
                                    <Link
                                        href="/industries"
                                        onClick={() => { setMobileMenuOpen(false); setMobileIndustriesOpen(false); }}
                                        className="block p-3 rounded-xl text-electric-blue text-sm font-semibold"
                                    >
                                        All Industries →
                                    </Link>
                                    <Link
                                        href="/areas"
                                        onClick={() => { setMobileMenuOpen(false); setMobileIndustriesOpen(false); }}
                                        className="block p-3 rounded-xl text-electric-blue text-sm font-semibold"
                                    >
                                        DFW Service Areas →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Nav Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-display font-semibold text-white hover:text-electric-blue transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-4 px-8 py-3 btn-gradient text-white font-semibold"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </header>
    );
}
