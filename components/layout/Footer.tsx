"use client";

import Link from "next/link";
import { DigitalButton } from "@/components/ui/DigitalButton";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    const links = [
        { name: "VENTURE", href: "#" },
        { name: "CRYPTO", href: "#" },
        { name: "INCUBATIONS", href: "#" },
        { name: "ESSAYS", href: "#" },
        { name: "TEAM", href: "#" },
        { name: "ABOUT", href: "#" },
    ];

    return (
        <footer className="w-full bg-black text-white px-6 py-20 lg:py-32">
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left main text */}
                <div className="col-span-1 lg:col-span-8 flex flex-col items-start gap-8">
                    <h2 className="text-4xl lg:text-6xl font-light leading-tight tracking-tight">
                        If you&apos;re a founder, investor, or operator interested in Tribe Capital, reach out.
                    </h2>
                </div>

                {/* Right CTA */}
                <div className="col-span-1 lg:col-span-4 flex justify-start lg:justify-end items-start mt-2 lg:mt-4">
                    <DigitalButton variant="primary" className="py-4 px-8 text-sm">
                        CONTACT US <ArrowUpRight className="w-4 h-4 ml-1" />
                    </DigitalButton>
                </div>

                {/* Divider */}
                <div className="col-span-1 lg:col-span-12 w-full h-[1px] bg-white/15 my-10" />

                {/* Links row */}
                <div className="col-span-1 lg:col-span-12 flex flex-wrap gap-8 lg:gap-16 mb-20">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-semibold tracking-[2px] text-white hover:text-white/70 transition-colors uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom Contact / Legal Row */}
                <div className="col-span-1 lg:col-span-12 flex flex-col lg:flex-row justify-between items-end gap-16 lg:gap-0 font-light">

                    <div className="w-full lg:w-auto flex flex-col gap-4 text-[13px] text-white/50">
                        <p>© 2026 Tribe Capital Management, LLC</p>
                        <p>Legal Notices & Terms of Use</p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-12">
                        <a href="mailto:hello@tribecap.co" className="text-2xl hover:opacity-70 transition-opacity">
                            hello@tribecap.co
                        </a>
                        <div className="flex items-center gap-6">
                            <span>Designed with ❋ zypsy</span>
                            <span className="flex gap-4">
                                {/* Mock social icons using simple text for now */}
                                <a href="#" className="hover:opacity-70">X</a>
                                <a href="#" className="hover:opacity-70">In</a>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Small Legal Disclaimer */}
                <div className="col-span-1 lg:col-span-12 mt-16 text-[10px] text-white/30 leading-relaxed max-w-5xl">
                    Any investments or portfolio companies mentioned, referred to, or described on this page are presented for informational purposes only and represent a selected, non-comprehensive list of investments made by funds managed by Tribe Capital Management ("Tribe Capital"). The companies shown are not intended to be representative of investment performance and do not imply that any investment has been or will be profitable. Certain publicly traded companies on this list may still be held in Tribe Capital funds. Excluded from this list are investments for which the issuer has not provided permission for Tribe Capital to disclose publicly. A complete list of investments made by funds managed by Tribe Capital is available here. This list is updated quarterly and may not reflect the most recent investments. Past investments of Tribe Capital, its pooled investment vehicles, or investment strategies are not necessarily indicative of future results. AUM based on committed capital as of September 30, 2025.
                </div>
            </div>
        </footer>
    );
}
