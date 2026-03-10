"use client";

import Link from "next/link";
import { DigitalButton } from "@/components/ui/DigitalButton";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    const links = [
        { name: "HOME", href: "#" },
        { name: "INSIGHTS", href: "#" },
        { name: "VIDEOS", href: "#" },
        { name: "COMPANIES", href: "#" },
    ];

    return (
        <footer className="w-full bg-black text-white flex flex-col items-center">
            {/* Main Footer Container with Borders matching the 1280px app grid */}
            <div className="w-full max-w-[1280px] border-x border-[#222] flex flex-col">

                {/* Top Section */}
                <div className="px-6 lg:px-12 pt-16 lg:pt-48 pb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <h2 className="text-[28px] lg:text-[38px] font-light leading-[1.2] tracking-tight max-w-[800px]">
                        If you&apos;re a founder, investor, or operator<br className="hidden lg:block" /> interested in Tribe Capital, reach out.
                    </h2>

                    <DigitalButton variant="primary" className="py-3 px-6 text-[11px] font-bold tracking-[0.1em] shrink-0">
                        CONTACT US <ArrowUpRight className="w-[14px] h-[14px] ml-1 stroke-[2]" />
                    </DigitalButton>
                </div>

                {/* Horizontal Divider (Spans edge-to-edge of the 1280px bordered container) */}
                <div className="w-full h-[1px] bg-[#222]" />

                {/* Bottom Section */}
                <div className="px-6 lg:px-12 pt-16 pb-8 flex flex-col">

                    {/* Links */}
                    <div className="flex flex-wrap gap-8 lg:gap-[4.5rem] mb-12 lg:mb-32">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold tracking-[0.2em] text-white hover:text-[#3847FF] transition-colors uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Email */}
                    <div className="flex justify-end mb-8">
                        <a href="mailto:hello@tribecap.co" className="text-[28px] lg:text-[34px] font-light hover:opacity-70 transition-opacity">
                            hello@tribecap.co
                        </a>
                    </div>

                    {/* Bottom Stats/Info Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 text-[13px] text-[#777] font-light">
                        <div>© 2026 Tribe Capital Management, LLC</div>

                        <Link href="#" className="hover:text-white transition-colors">
                            Legal Notices & Terms of Use
                        </Link>

                        <div>Designed with <span className="text-[16px] leading-none align-middle mx-1">❋</span> riddhish</div>

                        <div className="flex items-center gap-5 text-white text-[16px]">
                            <a href="#" className="hover:opacity-70 font-semibold tracking-wide flex items-center justify-center w-[20px] h-[20px]">
                                <span>X</span>
                            </a>
                            <a href="#" className="hover:opacity-70 font-bold tracking-wide flex items-center justify-center w-[20px] h-[20px]">
                                <span>in</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Small Legal Disclaimer (Inside inner borders to pull borders to bottom) */}
                <div className="w-full px-6 lg:px-12 pt-8 pb-16">
                    <div className="text-[10px] text-[#555] font-light leading-relaxed max-w-[1200px]">
                        Any investments or portfolio companies mentioned, referred to, or described on this page are presented for informational purposes only and represent a selected, non-comprehensive list of investments made by funds managed by Tribe Capital Management ("Tribe Capital"). The companies shown are not intended to be representative of investment performance and do not imply that any investment has been or will be profitable. Certain publicly traded companies on this list may still be held in Tribe Capital funds. Excluded from this list are investments for which the issuer has not provided permission for Tribe Capital to disclose publicly. A complete list of investments made by funds managed by Tribe Capital is available here. This list is updated quarterly and may not reflect the most recent investments. Past investments of Tribe Capital, its pooled investment vehicles, or investment strategies are not necessarily indicative of future results. AUM based on committed capital as of September 30, 2025.
                    </div>
                </div>
            </div>
        </footer>
    );
}
