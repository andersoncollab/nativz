import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Privacy Policy | Nativz",
    description:
        "Nativz privacy policy. Learn how we collect, use, and protect your personal information when you use our website and marketing services.",
    openGraph: {
        title: "Privacy Policy | Nativz",
        description: "How Nativz collects, uses, and protects your personal information.",
        url: "https://nativz.io/privacy-policy",
        type: "website",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <ScrollReveal>
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-400 mb-12">
                        Last updated: February 15, 2026
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-cyan-400">
                        <h2>1. Introduction</h2>
                        <p>
                            Nativz, LLC (&quot;Nativz,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                            privacy. This Privacy Policy explains how we collect, use, disclose, and
                            safeguard your information when you visit our website nativz.io (the
                            &quot;Site&quot;) or engage our marketing services.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide, including:</p>
                        <ul>
                            <li>Name and contact information (email address, phone number)</li>
                            <li>Company name and job title</li>
                            <li>Marketing goals and budget information shared during consultations</li>
                            <li>Payment and billing information for service engagements</li>
                            <li>Any other information you choose to provide via forms or communications</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you visit our Site, we may automatically collect:</p>
                        <ul>
                            <li>IP address and geolocation data</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Referring URL and pages visited</li>
                            <li>Time and date of visits</li>
                            <li>Click patterns and interaction data</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the collected information for the following purposes:</p>
                        <ul>
                            <li>To respond to inquiries and provide requested services</li>
                            <li>To send marketing communications (with your consent)</li>
                            <li>To improve our website and user experience</li>
                            <li>To analyze website traffic and usage patterns</li>
                            <li>To comply with legal obligations</li>
                            <li>To detect, prevent, and address technical issues or fraud</li>
                        </ul>

                        <h2>4. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies, web beacons, and similar tracking technologies to collect
                            information about your browsing activities. You can control cookie preferences
                            through your browser settings. Please note that disabling cookies may affect
                            certain functionality of the Site.
                        </p>
                        <p>We use the following types of cookies:</p>
                        <ul>
                            <li><strong>Essential cookies:</strong> Required for the Site to function properly</li>
                            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site (e.g., Google Analytics)</li>
                            <li><strong>Marketing cookies:</strong> Used to track visitors across websites for advertising purposes (e.g., Meta Pixel, Google Ads)</li>
                        </ul>

                        <h2>5. Data Sharing and Disclosure</h2>
                        <p>We do not sell your personal information. We may share information with:</p>
                        <ul>
                            <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our business (hosting, analytics, email services)</li>
                            <li><strong>Advertising partners:</strong> For remarketing and audience targeting purposes, in anonymized or aggregated form</li>
                            <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process</li>
                            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        </ul>

                        <h2>6. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal
                            information, including encryption, secure servers, and access controls.
                            However, no method of transmission over the Internet is 100% secure, and we
                            cannot guarantee absolute security.
                        </p>

                        <h2>7. Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <ul>
                            <li>Access, correct, or delete your personal information</li>
                            <li>Opt out of marketing communications at any time</li>
                            <li>Request a copy of your data in a portable format</li>
                            <li>Object to the processing of your data</li>
                            <li>Withdraw consent where processing is based on consent</li>
                        </ul>
                        <p>To exercise any of these rights, contact us at <a href="mailto:hello@nativz.io">hello@nativz.io</a>.</p>

                        <h2>8. Third-Party Links</h2>
                        <p>
                            Our Site may contain links to third-party websites. We are not responsible
                            for the privacy practices of these external sites. We encourage you to review
                            their privacy policies before providing any personal information.
                        </p>

                        <h2>9. Children&apos;s Privacy</h2>
                        <p>
                            Our services are not directed to individuals under the age of 18. We do not
                            knowingly collect personal information from children. If you believe we have
                            collected information from a child, please contact us immediately.
                        </p>

                        <h2>10. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of
                            any changes by posting the new Privacy Policy on this page and updating the
                            &quot;Last updated&quot; date. Your continued use of the Site after changes constitutes
                            acceptance of the updated policy.
                        </p>

                        <h2>11. Contact Us</h2>
                        <p>
                            If you have questions or concerns about this Privacy Policy, please contact us:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:hello@nativz.io">hello@nativz.io</a></li>
                            <li>Phone: <a href="tel:+14699692903">(469) 969-2903</a></li>
                            <li>Address: Dallas-Fort Worth, TX</li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
