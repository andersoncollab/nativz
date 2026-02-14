import { MetadataRoute } from "next";
import { parentServices, subServices } from "@/data/services";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nativz.io";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/industries/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/case-studies/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Parent service pages
    const parentServicePages: MetadataRoute.Sitemap = parentServices.map((service) => ({
        url: `${baseUrl}/services/${service.slug}/`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Sub-service pages
    const subServicePages: MetadataRoute.Sitemap = subServices
        .filter((s) => s.parentSlug)
        .map((service) => ({
            url: `${baseUrl}/services/${service.parentSlug}/${service.slug}/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

    // Industry pages
    const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
        url: `${baseUrl}/industries/${industry.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...parentServicePages, ...subServicePages, ...industryPages];
}
