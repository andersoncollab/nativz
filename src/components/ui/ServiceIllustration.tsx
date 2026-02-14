"use client";

interface ServiceIllustrationProps {
    variant?: "network" | "wave" | "data" | "pulse" | "orbit";
    className?: string;
}

export default function ServiceIllustration({
    variant = "network",
    className = "",
}: ServiceIllustrationProps) {
    return (
        <div className={`flex items-center justify-center py-8 ${className}`}>
            <svg
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-md h-auto opacity-60"
                aria-hidden="true"
            >
                {variant === "network" && <NetworkIllustration />}
                {variant === "wave" && <WaveIllustration />}
                {variant === "data" && <DataIllustration />}
                {variant === "pulse" && <PulseIllustration />}
                {variant === "orbit" && <OrbitIllustration />}
            </svg>
        </div>
    );
}

/* ── Network: Connected nodes with pulsing links ── */
function NetworkIllustration() {
    const nodes = [
        { cx: 80, cy: 60 },
        { cx: 200, cy: 40 },
        { cx: 320, cy: 70 },
        { cx: 140, cy: 140 },
        { cx: 260, cy: 150 },
        { cx: 50, cy: 130 },
        { cx: 350, cy: 140 },
    ];

    const links = [
        [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [0, 5], [2, 6], [5, 3], [6, 4],
    ];

    return (
        <g>
            {links.map(([a, b], i) => (
                <line
                    key={`l${i}`}
                    x1={nodes[a].cx} y1={nodes[a].cy}
                    x2={nodes[b].cx} y2={nodes[b].cy}
                    stroke="url(#blueGrad)"
                    strokeWidth="1"
                    opacity="0.3"
                >
                    <animate
                        attributeName="opacity"
                        values="0.1;0.5;0.1"
                        dur={`${2 + i * 0.3}s`}
                        repeatCount="indefinite"
                    />
                </line>
            ))}
            {nodes.map((n, i) => (
                <g key={`n${i}`}>
                    <circle cx={n.cx} cy={n.cy} r="16" fill="#00ADEF" opacity="0.06">
                        <animate
                            attributeName="r"
                            values="12;18;12"
                            dur={`${3 + i * 0.5}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx={n.cx} cy={n.cy} r="4" fill="#00ADEF" opacity="0.7">
                        <animate
                            attributeName="opacity"
                            values="0.4;0.9;0.4"
                            dur={`${2 + i * 0.4}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
            <defs>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00ADEF" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>
        </g>
    );
}

/* ── Wave: Sine wave with particles ── */
function WaveIllustration() {
    const points = Array.from({ length: 50 }, (_, i) => {
        const x = (i / 49) * 400;
        const y = 100 + Math.sin((i / 49) * Math.PI * 3) * 40;
        return `${x},${y}`;
    }).join(" ");

    return (
        <g>
            <polyline
                points={points}
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="2"
                opacity="0.4"
            >
                <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </polyline>
            {[60, 140, 220, 300, 380].map((x, i) => {
                const y = 100 + Math.sin(((x / 400) * Math.PI * 3)) * 40;
                return (
                    <circle key={i} cx={x} cy={y} r="3" fill="#06B6D4" opacity="0.6">
                        <animate
                            attributeName="cy"
                            values={`${y};${y - 8};${y}`}
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                );
            })}
            <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00ADEF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00ADEF" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
            </defs>
        </g>
    );
}

/* ── Data: Rising bar chart with shimmer ── */
function DataIllustration() {
    const bars = [
        { x: 60, h: 60 }, { x: 110, h: 90 }, { x: 160, h: 70 },
        { x: 210, h: 120 }, { x: 260, h: 85 }, { x: 310, h: 110 },
    ];

    return (
        <g>
            {/* Base line */}
            <line x1="40" y1="170" x2="360" y2="170" stroke="#00ADEF" strokeWidth="1" opacity="0.2" />
            {bars.map((b, i) => (
                <g key={i}>
                    <rect
                        x={b.x}
                        y={170 - b.h}
                        width="30"
                        height={b.h}
                        rx="4"
                        fill="url(#barGrad)"
                        opacity="0.25"
                    >
                        <animate
                            attributeName="height"
                            values={`0;${b.h};${b.h}`}
                            dur="1.5s"
                            begin={`${i * 0.15}s`}
                            fill="freeze"
                        />
                        <animate
                            attributeName="y"
                            values={`170;${170 - b.h};${170 - b.h}`}
                            dur="1.5s"
                            begin={`${i * 0.15}s`}
                            fill="freeze"
                        />
                    </rect>
                    <circle
                        cx={b.x + 15}
                        cy={170 - b.h - 8}
                        r="3"
                        fill="#00ADEF"
                        opacity="0.6"
                    >
                        <animate
                            attributeName="opacity"
                            values="0;0.8;0.4"
                            dur="2s"
                            begin={`${i * 0.15 + 1}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
            <defs>
                <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ADEF" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </g>
    );
}

/* ── Pulse: Expanding concentric rings ── */
function PulseIllustration() {
    return (
        <g>
            {[1, 2, 3, 4].map((ring) => (
                <circle
                    key={ring}
                    cx="200"
                    cy="100"
                    r={ring * 25}
                    fill="none"
                    stroke="#00ADEF"
                    strokeWidth="1"
                    opacity="0"
                >
                    <animate
                        attributeName="r"
                        values={`${ring * 10};${ring * 30 + 20}`}
                        dur={`${3 + ring * 0.5}s`}
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="0.5;0"
                        dur={`${3 + ring * 0.5}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            ))}
            {/* Center dot */}
            <circle cx="200" cy="100" r="6" fill="#00ADEF" opacity="0.8">
                <animate
                    attributeName="r"
                    values="4;8;4"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </circle>
            {/* Satellite dots */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 200 + Math.cos(rad) * 60;
                const cy = 100 + Math.sin(rad) * 60;
                return (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#06B6D4" opacity="0.5">
                        <animate
                            attributeName="opacity"
                            values="0.2;0.8;0.2"
                            dur={`${1.5 + i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                );
            })}
        </g>
    );
}

/* ── Orbit: Rotating paths around a central point ── */
function OrbitIllustration() {
    return (
        <g>
            {/* Orbit paths */}
            {[40, 65, 90].map((r, i) => (
                <ellipse
                    key={i}
                    cx="200" cy="100"
                    rx={r} ry={r * 0.5}
                    fill="none"
                    stroke="#00ADEF"
                    strokeWidth="0.8"
                    opacity="0.15"
                    strokeDasharray="4 4"
                />
            ))}
            {/* Center glow */}
            <circle cx="200" cy="100" r="20" fill="#00ADEF" opacity="0.04">
                <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="100" r="5" fill="#00ADEF" opacity="0.6" />
            {/* Orbiting particles */}
            {[
                { r: 40, dur: "6s", ry: 20 },
                { r: 65, dur: "9s", ry: 32.5 },
                { r: 90, dur: "12s", ry: 45 },
            ].map((orbit, i) => (
                <circle key={i} r="4" fill="#06B6D4" opacity="0.7">
                    <animateMotion
                        dur={orbit.dur}
                        repeatCount="indefinite"
                        path={`M ${200 - orbit.r},100 A ${orbit.r},${orbit.ry} 0 1,1 ${200 + orbit.r},100 A ${orbit.r},${orbit.ry} 0 1,1 ${200 - orbit.r},100`}
                    />
                    <animate
                        attributeName="opacity"
                        values="0.3;0.9;0.3"
                        dur={orbit.dur}
                        repeatCount="indefinite"
                    />
                </circle>
            ))}
        </g>
    );
}
