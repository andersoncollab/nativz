// ============================================================
// Schema Markup Component
// JSON-LD renderer for Service, WebPage, Organization, and LocalBusiness schemas
// ============================================================

const ORG_BASE = {
    "@type": "Organization",
    name: "Nativz",
    url: "https://nativz.io",
    logo: "https://nativz.io/images/nativz-logo.svg",
    sameAs: [
        "https://www.instagram.com/nativzmedia",
        "https://www.linkedin.com/company/nativz",
        "https://www.tiktok.com/@nativzmedia",
        "https://www.facebook.com/nativzmedia",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-469-969-2903",
        contactType: "sales",
        areaServed: ["US", "Worldwide"],
        availableLanguage: "English",
    },
    foundingDate: "2016",
    description:
        "Premium Dallas-Fort Worth marketing agency that builds AI-infused content systems, manages $500M+ in ad spend, and produces creative at volume for brands nationwide and worldwide.",
};

interface ServiceSchemaProps {
    type: "service";
    name: string;
    description: string;
    url: string;
    provider?: string;
    areaServed?: string | string[];
}

interface WebPageSchemaProps {
    type: "webpage";
    name: string;
    description: string;
    url: string;
}

interface LocalBusinessSchemaProps {
    type: "localbusiness";
    name: string;
    description: string;
    url: string;
    areaName?: string;
}

interface OrganizationSchemaProps {
    type: "organization";
}

type SchemaMarkupProps =
    | ServiceSchemaProps
    | WebPageSchemaProps
    | LocalBusinessSchemaProps
    | OrganizationSchemaProps;

export default function SchemaMarkup(props: SchemaMarkupProps) {
    let schema: Record<string, unknown>;

    if (props.type === "service") {
        schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            name: props.name,
            description: props.description,
            url: props.url,
            provider: {
                ...ORG_BASE,
                name: props.provider || "Nativz",
            },
            areaServed: props.areaServed || [
                { "@type": "Country", name: "United States" },
                { "@type": "State", name: "Texas" },
                { "@type": "City", name: "Dallas" },
                { "@type": "City", name: "Fort Worth" },
            ],
            serviceType: props.name,
        };
    } else if (props.type === "localbusiness") {
        schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://nativz.io/#localbusiness",
            name: props.name || "Nativz",
            description: props.description,
            url: props.url,
            image: "https://nativz.io/images/nativz-logo.svg",
            telephone: "+1-469-969-2903",
            address: {
                "@type": "PostalAddress",
                addressLocality: props.areaName || "Dallas",
                addressRegion: "TX",
                addressCountry: "US",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: "32.7767",
                longitude: "-96.7970",
            },
            areaServed: [
                { "@type": "City", name: props.areaName || "Dallas" },
                { "@type": "State", name: "Texas" },
                { "@type": "Country", name: "United States" },
                "Worldwide",
            ],
            priceRange: "$$$",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
            },
            sameAs: ORG_BASE.sameAs,
        };
    } else if (props.type === "organization") {
        schema = {
            "@context": "https://schema.org",
            ...ORG_BASE,
        };
    } else {
        schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: props.name,
            description: props.description,
            url: props.url,
            publisher: ORG_BASE,
            inLanguage: "en-US",
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

