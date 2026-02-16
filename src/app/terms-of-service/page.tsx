import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Terms of Service | Nativz",
    description:
        "Nativz terms of service. Read the terms and conditions governing the use of our website and marketing services.",
    openGraph: {
        title: "Terms of Service | Nativz",
        description: "Terms and conditions governing the use of the Nativz website and services.",
        url: "https://nativz.io/terms-of-service",
        type: "website",
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="pt-32 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <ScrollReveal>
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-cyan mb-4">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                        Terms of Service
                    </h1>
                    <p className="text-slate-400 mb-12">
                        Last updated: February 15, 2026
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="prose prose-invert prose-cyan max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-cyan-400">
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the Nativz website at nativz.io (the &quot;Site&quot;), you agree
                            to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with
                            these Terms, please do not use the Site. These Terms constitute a legally
                            binding agreement between you and Nativz, LLC (&quot;Nativz,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
                        </p>

                        <h2>2. Services</h2>
                        <p>
                            Nativz provides digital marketing, content production, advertising management,
                            website development, SEO, branding, and related creative and technology
                            services. Specific service terms, deliverables, timelines, and pricing are
                            outlined in individual service agreements or statements of work executed
                            between Nativz and the client.
                        </p>

                        <h2>3. Intellectual Property</h2>
                        <p>
                            All content on the Site, including text, graphics, logos, images, videos,
                            and software, is the property of Nativz or its content suppliers and is
                            protected by United States and international copyright laws.
                        </p>
                        <ul>
                            <li>You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.</li>
                            <li>Client deliverables are governed by the terms of individual service agreements.</li>
                            <li>Nativz retains the right to showcase client work in portfolios and case studies unless otherwise agreed.</li>
                        </ul>

                        <h2>4. User Conduct</h2>
                        <p>When using the Site, you agree not to:</p>
                        <ul>
                            <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
                            <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
                            <li>Interfere with or disrupt the Site or its servers</li>
                            <li>Submit false, misleading, or fraudulent information through forms</li>
                            <li>Use automated tools to scrape, crawl, or extract data from the Site without permission</li>
                            <li>Transmit viruses, malware, or other harmful code</li>
                        </ul>

                        <h2>5. Contact Form and Communications</h2>
                        <p>
                            By submitting information through our contact forms, you consent to being
                            contacted by Nativz regarding your inquiry. You represent that the information
                            you provide is accurate and complete. We are not obligated to respond to every
                            inquiry and reserve the right to decline potential engagements at our discretion.
                        </p>

                        <h2>6. Third-Party Links</h2>
                        <p>
                            The Site may contain links to third-party websites or services that are not
                            owned or controlled by Nativz. We have no control over, and assume no
                            responsibility for, the content, privacy policies, or practices of any
                            third-party websites. You access third-party sites at your own risk.
                        </p>

                        <h2>7. Disclaimer of Warranties</h2>
                        <p>
                            THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. NATIVZ MAKES
                            NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SITE, INCLUDING BUT NOT
                            LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                            AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED,
                            ERROR-FREE, OR SECURE.
                        </p>

                        <h2>8. Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NATIVZ SHALL NOT BE LIABLE FOR ANY
                            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
                            OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR
                            ANY CLAIM ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID
                            TO NATIVZ, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                        </p>

                        <h2>9. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless Nativz, its officers, directors,
                            employees, and agents from any claims, damages, losses, or expenses
                            (including reasonable attorney&apos;s fees) arising out of your use of the Site,
                            violation of these Terms, or infringement of any third-party rights.
                        </p>

                        <h2>10. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of the
                            State of Texas, without regard to its conflict of law provisions. Any disputes
                            arising under these Terms shall be resolved in the courts located in Dallas
                            County, Texas.
                        </p>

                        <h2>11. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Changes will be
                            effective immediately upon posting to the Site. Your continued use of the
                            Site after any modification constitutes your acceptance of the revised Terms.
                        </p>

                        <h2>12. Severability</h2>
                        <p>
                            If any provision of these Terms is found to be unenforceable or invalid,
                            that provision shall be limited or eliminated to the minimum extent necessary,
                            and the remaining provisions shall remain in full force and effect.
                        </p>

                        <h2>13. Contact</h2>
                        <p>
                            If you have questions about these Terms, contact us:
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
