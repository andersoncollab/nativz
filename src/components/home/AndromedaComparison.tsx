import ScrollReveal from "../ui/ScrollReveal";

const oldWay = [
    { label: "Targeting Strategy", value: "Precise audience targeting" },
    { label: "Creative Volume", value: "3-5 ads per ad set" },
    { label: "Testing Method", value: "Test audiences" },
    { label: "Optimization", value: "Manual optimization" },
    { label: "Creative Refresh", value: "When performance drops" },
    { label: "Campaign Structure", value: "Complex, segmented" },
];

const newReality = [
    { label: "Targeting Strategy", value: "Creative diversity wins" },
    { label: "Creative Volume", value: "10+ meaningfully different creatives" },
    { label: "Testing Method", value: "Test creative angles" },
    { label: "Optimization", value: "Algorithm does the heavy lifting" },
    { label: "Creative Refresh", value: "Monthly or biweekly cycles" },
    { label: "Campaign Structure", value: "Simplified, one ad set, 10-25 creatives" },
];

export default function AndromedaComparison() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            <div className="relative max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            The Shift
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            Meta Changed the Rules.{" "}
                            <span className="text-cool-gray">
                                Most Brands Haven&apos;t Caught Up.
                            </span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            The Andromeda update fundamentally changed how ads are selected and delivered.
                            Creative is now the primary signal, not audience targeting.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Old Way */}
                    <ScrollReveal delay={100}>
                        <div className="glass-card p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/60 to-orange-500/60" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-lg text-white">Old Way</h3>
                                    <p className="text-cool-gray text-xs font-mono">Pre-Andromeda</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {oldWay.map((item, i) => (
                                    <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-white-border last:border-0">
                                        <span className="text-cool-gray text-sm">{item.label}</span>
                                        <span className="text-white/70 text-sm text-right">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* New Reality */}
                    <ScrollReveal delay={200}>
                        <div className="glass-card p-8 relative overflow-hidden animate-pulse-glow">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-cyan" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-lg text-white">New Reality</h3>
                                    <p className="text-electric-blue text-xs font-mono">Post-Andromeda</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {newReality.map((item, i) => (
                                    <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-white-border last:border-0">
                                        <span className="text-cool-gray text-sm">{item.label}</span>
                                        <span className="text-white text-sm text-right font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
