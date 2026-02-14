
import HeroSection from "@/components/home/HeroSection";
import TickerBar from "@/components/home/TickerBar";
import AndromedaComparison from "@/components/home/AndromedaComparison";
import ProcessSteps from "@/components/home/ProcessSteps";
import ContentMatrix from "@/components/home/ContentMatrix";
import OrganicPaidCards from "@/components/home/OrganicPaidCards";
import SocialProof from "@/components/home/SocialProof";
import LocationSection from "@/components/home/LocationSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nativz",
  url: "https://nativz.io",
  logo: "https://nativz.io/images/nativz-logo.svg",
  description:
    "DFW-based digital marketing agency specializing in creative content production, social media domination, and algorithm-optimized marketing systems.",
  foundingDate: "2016",
  founders: [
    {
      "@type": "Person",
      name: "Cole Feigl",
      jobTitle: "CEO",
    },
    {
      "@type": "Person",
      name: "Trevor Anderson",
      jobTitle: "CMO",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas-Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://facebook.com/nativz",
    "https://twitter.com/nativz",
    "https://instagram.com/nativz",
    "https://linkedin.com/company/nativz",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nativz",
  url: "https://nativz.io",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nativz.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is a typical film day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard film day runs 4-8 hours depending on the scope. We come with a full production crew, equipment, and a detailed shot list designed to maximize content output.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with brands outside of DFW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. While our studio is in the Dallas-Fort Worth area, we regularly travel for production. We bring everything needed for a full production setup to your location.",
      },
    },
    {
      "@type": "Question",
      name: "I already have an ad agency. Can you still help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our clients have separate media buying teams. We focus on the creative production side, giving your ad team a constant stream of fresh, algorithm-optimized creatives to test.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical turnaround time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After a film day, initial edits are delivered within 5-7 business days. Your full month of content is ready for review within two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is Andromeda, and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andromeda is Meta's AI-powered ad retrieval engine that rolled out globally by October 2025. It fundamentally changed how ads are selected and delivered. Creative is now the primary signal for ad delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Who handles posting and publishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your plan. On Starter, we deliver content and you handle publishing. On Growth and Scale, we manage the full content calendar including scheduling and posting.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        <HeroSection />
        <TickerBar />
        <AndromedaComparison />
        <ProcessSteps />
        <ContentMatrix />
        <OrganicPaidCards />
        <SocialProof />
        <LocationSection />
        <CaseStudiesPreview />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
