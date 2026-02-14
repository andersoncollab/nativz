export default function TickerBar() {
    const items = [
        "Creative Volume",
        "Ad-Ready Content",
        "Organic + Paid",
        "Monthly Output",
        "Algorithm-Optimized",
        "Content Systems",
        "Meta Andromeda",
        "Creative Diversity",
    ];

    const separator = (
        <span className="text-electric-blue mx-4 text-lg">&#10038;</span>
    );

    return (
        <section className="relative py-5 bg-charcoal border-y border-white-border overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap">
                {/* Duplicate the list twice for seamless looping */}
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                            {item}
                        </span>
                        {separator}
                    </span>
                ))}
            </div>
        </section>
    );
}
