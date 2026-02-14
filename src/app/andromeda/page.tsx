import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TickerBar from "@/components/home/TickerBar";
import AndromedaComparison from "@/components/home/AndromedaComparison";
import ProcessSteps from "@/components/home/ProcessSteps";
import ContentMatrix from "@/components/home/ContentMatrix";
import OrganicPaidCards from "@/components/home/OrganicPaidCards";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
    title: "Andromeda Marketing Strategy | Post-Andromeda Creative Systems",
    description:
        "Meta's Andromeda AI engine changed everything. Learn how Nativz builds algorithm-native content systems that thrive in the post-Andromeda era. Creative volume, AI-optimized ads, and performance-driven strategy.",
    keywords: [
        "Andromeda marketing",
        "Meta Andromeda",
        "post-Andromeda strategy",
        "creative volume",
        "algorithm-native content",
        "AI advertising",
        "Meta ads optimization",
    ],
    openGraph: {
        title: "Andromeda Marketing Strategy | Nativz",
        description:
            "The Andromeda era demands creative volume, algorithm-native formats, and AI-infused strategy. See how Nativz builds marketing systems for the new reality.",
        url: "https://nativz.io/andromeda",
        type: "website",
    },
};

// JSON-LD for service page
const andromedaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Andromeda Marketing Strategy",
    provider: {
        "@type": "Organization",
        name: "Nativz",
        url: "https://nativz.io",
    },
    description:
        "Algorithm-native content strategy and creative production optimized for Meta's Andromeda AI engine.",
    areaServed: "Dallas-Fort Worth, TX",
};

export default function AndromedaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(andromedaSchema),
                }}
            />

            <main>
                <HeroSection />
                <TickerBar />
                <AndromedaComparison />
                <ProcessSteps />
                <ContentMatrix />
                <OrganicPaidCards />
                <PricingSection />
                <FAQSection />
                <CTASection />
            </main>
        </>
    );
}
