import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Thank You | Nativz",
    description:
        "Thank you for reaching out to Nativz. Our team will be in touch within 2 business hours to discuss your marketing goals.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen relative overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-electric-blue/[0.04] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-cyan/[0.05] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <ScrollReveal>
                    {/* Success icon */}
                    <div className="w-20 h-20 rounded-full bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mx-auto mb-8">
                        <svg
                            className="w-10 h-10 text-electric-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                        We got your message.{" "}
                        <span className="bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
                            Let&apos;s go.
                        </span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                        Thanks for reaching out. A real human on our team will review your inquiry
                        and get back to you within <strong className="text-white">2 business hours</strong>.
                    </p>

                    <p className="text-slate-400 mb-10">
                        In the meantime, check out some of our recent work and marketing insights.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/case-studies"
                            className="px-8 py-3.5 btn-gradient rounded-xl text-sm font-bold hover:shadow-[0_0_40px_rgba(0,173,239,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Case Studies
                        </Link>
                        <Link
                            href="/blog"
                            className="px-8 py-3.5 btn-gradient-outline rounded-xl text-sm font-bold hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Read the Blog
                        </Link>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <div className="mt-16 glass-card p-6 rounded-xl inline-block">
                        <p className="text-sm text-slate-400">
                            Need an answer right now? Call us directly at{" "}
                            <a href="tel:+14699692903" className="text-electric-blue hover:text-cyan transition-colors font-semibold">
                                (469) 969-2903
                            </a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
