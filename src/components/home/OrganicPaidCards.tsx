import ScrollReveal from "../ui/ScrollReveal";

const organicItems = [
    "30 days of algorithm-optimized content",
    "Strategic posting schedule",
    "Community building and engagement",
    "Algorithm-friendly frequency",
    "Brand recognition and authority",
    "Trend and hashtag strategy",
];

const paidItems = [
    "10+ diverse ad creatives monthly",
    "Built for Andromeda's retrieval engine",
    "Fresh creative = lower CPMs",
    "Multiple angles and formats",
    "Sustainable campaign performance",
    "Creative fatigue prevention",
];

export default function OrganicPaidCards() {
    return (
        <section className="py-24 gradient-section relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="relative max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            The Flywheel
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Your Organic Feeds Your Paid.{" "}
                            <span className="text-gradient">
                                Your Paid Amplifies Your Organic.
                            </span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            Same content system, both channels. This is a marketing system, not a campaign.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Organic Card */}
                    <ScrollReveal delay={100}>
                        <div className="glass-card p-8 h-full relative overflow-hidden group">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-electric-blue" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-xl text-white">Organic Social</h3>
                                    <p className="text-cyan text-xs font-mono">Feed the Algorithm</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {organicItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-cool-gray-light text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* Paid Card */}
                    <ScrollReveal delay={200}>
                        <div className="glass-card p-8 h-full relative overflow-hidden group">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-cyan" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-xl text-white">Paid Advertising</h3>
                                    <p className="text-electric-blue text-xs font-mono">Amplify the Winners</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {paidItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-cool-gray-light text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Connection visual */}
                <ScrollReveal delay={300}>
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 glass-card">
                            <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                            <span className="text-cool-gray text-sm font-medium">
                                The cycle feeds itself. Organic data informs paid strategy. Paid reach builds organic audience.
                            </span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
