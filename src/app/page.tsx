
import AgencyHero from "@/components/home/AgencyHero";
import TickerBar from "@/components/home/TickerBar";
import WhoWeAre from "@/components/home/WhoWeAre";
import ServicesGrid from "@/components/home/ServicesGrid";
import OurApproach from "@/components/home/OurApproach";
import SocialProof from "@/components/home/SocialProof";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";
import CTABanner from "@/components/home/CTABanner";

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nativz",
  url: "https://nativz.io",
  logo: "https://nativz.io/images/nativz-logo.svg",
  description:
    "Premium Dallas-Fort Worth marketing agency that builds AI-infused content systems, manages serious ad spend, and produces creative at volume.",
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

      <main>
        <AgencyHero />
        <TickerBar />
        <WhoWeAre />
        <ServicesGrid />
        <OurApproach />
        <SocialProof />
        <CaseStudiesPreview />
        <LatestBlogPosts />
        <CTABanner />
      </main>
    </>
  );
}
