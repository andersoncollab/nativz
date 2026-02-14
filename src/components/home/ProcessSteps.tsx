import ScrollReveal from "../ui/ScrollReveal";

const steps = [
    {
        number: "01",
        title: "Research & Ideation",
        description: "We dissect viral content in your niche, analyze algorithm signals, and map out a content strategy built for Andromeda.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Film Day",
        description: "One production day, full creative output. Multiple formats, angles, and concepts captured for maximum content diversity.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Edit & Produce",
        description: "Our editors transform raw footage into scroll-stopping content. 10+ meaningfully different creatives, ready for deployment.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Schedule & Caption",
        description: "AI-assisted captioning and strategic scheduling. Every post timed for maximum algorithmic favor and audience engagement.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Client Review",
        description: "Content approval workflow. You review, approve, and we handle everything else. Simple, transparent, fast.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        number: "06",
        title: "Feed the Ad Network",
        description: "Top-performing organic content becomes ad creative. Your paid campaigns get proven winners, not untested guesses.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

export default function ProcessSteps() {
    return (
        <section id="process" className="py-24 gradient-section relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="relative max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-electric-blue font-mono text-sm uppercase tracking-widest mb-4 block">
                            Our Process
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
                            One Film Day. One Month of Content.{" "}
                            <span className="text-gradient">Endless Ad Creatives.</span>
                        </h2>
                        <p className="text-cool-gray text-lg max-w-2xl mx-auto">
                            Our six-step system turns a single production day into a full
                            month of algorithm-optimized content and ad creatives.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <ScrollReveal key={step.number} delay={i * 100}>
                            <div className="glass-card glass-card-hover p-6 h-full group cursor-default">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-electric-blue/40 font-mono text-3xl font-bold">
                                        {step.number}
                                    </span>
                                    <div className="w-10 h-10 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:bg-electric-blue/20 transition-colors">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="font-display font-semibold text-lg text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-cool-gray text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
