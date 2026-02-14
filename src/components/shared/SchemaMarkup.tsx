// ============================================================
// Schema Markup Component
// JSON-LD renderer for Service, WebPage, and Organization schemas
// ============================================================

interface ServiceSchemaProps {
    type: "service";
    name: string;
    description: string;
    url: string;
    provider?: string;
    areaServed?: string;
}

interface WebPageSchemaProps {
    type: "webpage";
    name: string;
    description: string;
    url: string;
}

type SchemaMarkupProps = ServiceSchemaProps | WebPageSchemaProps;

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
                "@type": "Organization",
                name: props.provider || "Nativz",
                url: "https://nativz.io",
            },
            areaServed: props.areaServed || "United States",
        };
    } else {
        schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: props.name,
            description: props.description,
            url: props.url,
            publisher: {
                "@type": "Organization",
                name: "Nativz",
                url: "https://nativz.io",
            },
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
