// ============================================================
// Breadcrumbs Component with BreadcrumbList JSON-LD Schema
// Supports up to 4 levels deep
// ============================================================

import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `https://nativz.io${item.href}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-slate-400">
                    {allItems.map((item, index) => (
                        <li key={item.href} className="flex items-center gap-2">
                            {index > 0 && (
                                <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            {index === allItems.length - 1 ? (
                                <span className="text-slate-200 font-medium">{item.label}</span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
