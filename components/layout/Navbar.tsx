"use client";

import Link from "next/link";
import { DigitalButton } from "@/components/ui/DigitalButton";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
    const links = [
        { name: "HOME", href: "/" },
        { name: "INSIGHTS", href: "/insights" },
        { name: "VIDEOS", href: "/videos" },
        { name: "COMPANIES", href: "/company" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="w-full flex h-[72px] items-stretch border-b border-grid">

                {/* Logo Section */}
                <div className="flex items-center justify-center px-10 border-r border-grid shrink-0 w-[300px]">
                    <Link href="/" className="font-[family-name:var(--font-serif)] font-bold text-[22px] tracking-normal uppercase">
                        Fawaz
                    </Link>
                </div>

                {/* Links Section */}
                <nav className="flex-1 flex items-center justify-center gap-8 px-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-medium tracking-[1.8px] text-[var(--color-tribe-gray)] hover:text-black transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Section */}
                <div className="flex shrink-0">
                    <DigitalButton variant="primary" className="h-full rounded-none px-8 font-semibold">
                        LEARN MORE <ArrowUpRight className="w-4 h-4 ml-1" />
                    </DigitalButton>
                </div>
            </div>
        </header>
    );
}
