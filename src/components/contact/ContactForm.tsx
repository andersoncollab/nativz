"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    });
    const [focused, setFocused] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would POST to an API
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="glass-card p-12 rounded-2xl text-center relative overflow-hidden">
                {/* Success animation background */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-cyan/10 animate-pulse" />

                <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-electric-blue/20 flex items-center justify-center animate-[bounceIn_0.6s_ease-out]">
                        <svg className="w-10 h-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">
                        We&apos;ll be in touch soon.
                    </h3>
                    <p className="text-slate-300 max-w-md mx-auto">
                        Thanks for reaching out. Our team typically responds within 2 business hours.
                        In the meantime, check out our latest work.
                    </p>
                </div>
            </div>
        );
    }

    const inputClasses = (field: string) =>
        `w-full bg-white/[0.03] border ${focused === field ? "border-electric-blue shadow-[0_0_20px_rgba(0,173,239,0.15)]" : "border-white/10"
        } rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-white/[0.06]`;

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="Jane Smith"
                        className={inputClasses("name")}
                    />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="jane@company.com"
                        className={inputClasses("email")}
                    />
                </div>
            </div>

            {/* Company + Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                        placeholder="Acme Corp"
                        className={inputClasses("company")}
                    />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder="(469) 555-0123"
                        className={inputClasses("phone")}
                    />
                </div>
            </div>

            {/* Service + Budget row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Service Interested In
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClasses("service")} appearance-none cursor-pointer`}
                    >
                        <option value="" className="bg-navy-dark">Select a service...</option>
                        <option value="social-media" className="bg-navy-dark">Social Media Management</option>
                        <option value="paid-media" className="bg-navy-dark">Paid Media & Advertising</option>
                        <option value="content" className="bg-navy-dark">Content Production</option>
                        <option value="seo" className="bg-navy-dark">SEO & Web Development</option>
                        <option value="branding" className="bg-navy-dark">Branding & Creative</option>
                        <option value="ai-systems" className="bg-navy-dark">AI Marketing Systems</option>
                        <option value="full-service" className="bg-navy-dark">Full-Service Partnership</option>
                        <option value="other" className="bg-navy-dark">Not Sure / Other</option>
                    </select>
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                        Monthly Budget
                    </label>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocused("budget")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClasses("budget")} appearance-none cursor-pointer`}
                    >
                        <option value="" className="bg-navy-dark">Select a range...</option>
                        <option value="under-5k" className="bg-navy-dark">Under $5,000/mo</option>
                        <option value="5k-10k" className="bg-navy-dark">$5,000 – $10,000/mo</option>
                        <option value="10k-25k" className="bg-navy-dark">$10,000 – $25,000/mo</option>
                        <option value="25k-50k" className="bg-navy-dark">$25,000 – $50,000/mo</option>
                        <option value="50k-plus" className="bg-navy-dark">$50,000+/mo</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="group">
                <label className="block text-sm font-medium text-slate-400 mb-2 group-focus-within:text-electric-blue transition-colors">
                    Tell Us About Your Project *
                </label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="What are your goals? What's working? What's not? The more detail, the better our strategy call will be."
                    className={`${inputClasses("message")} resize-none`}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full group relative overflow-hidden px-8 py-4 bg-electric-blue text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,173,239,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
                <span className="relative z-10 inline-flex items-center gap-2 text-lg">
                    Send Your Brief
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </span>
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <p className="text-xs text-slate-500 text-center">
                We respond within 2 business hours. No spam, no auto-sequences — just a real human.
            </p>
        </form>
    );
}
