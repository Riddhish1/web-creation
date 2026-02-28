"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface DigitalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export const DigitalButton = React.forwardRef<HTMLButtonElement, DigitalButtonProps>(
    ({ className, variant = "primary", href, children, ...props }, ref) => {
        const [isHovered, setIsHovered] = useState(false);

        // Generate 28 spans for the digital border effect with deterministic delays
        const spans = Array.from({ length: 28 }).map((_, i) => {
            // Use pseudo-random deterministic delay based on index
            const delay = (i * 17 % 100) + 20;

            return (
                <span
                    key={i}
                    className={cn(
                        "absolute bg-current transition-all duration-75",
                        // Distribute spans around the perimeter
                        i < 7 ? "top-0 h-[1px]" : "", // Top edge
                        i >= 7 && i < 14 ? "right-0 w-[1px]" : "", // Right edge
                        i >= 14 && i < 21 ? "bottom-0 h-[1px]" : "", // Bottom edge
                        i >= 21 ? "left-0 w-[1px]" : "", // Left edge
                    )}
                    style={{
                        // Top
                        ...(i < 7 && {
                            left: `${(i / 7) * 100}%`,
                            width: isHovered ? `${100 / 7}%` : "0%",
                            transitionDelay: `${delay}ms`,
                        }),
                        // Right
                        ...(i >= 7 && i < 14 && {
                            top: `${((i - 7) / 7) * 100}%`,
                            height: isHovered ? `${100 / 7}%` : "0%",
                            transitionDelay: `${delay}ms`,
                        }),
                        // Bottom
                        ...(i >= 14 && i < 21 && {
                            right: `${((i - 14) / 7) * 100}%`,
                            width: isHovered ? `${100 / 7}%` : "0%",
                            transitionDelay: `${delay}ms`,
                        }),
                        // Left
                        ...(i >= 21 && {
                            bottom: `${((i - 21) / 7) * 100}%`,
                            height: isHovered ? `${100 / 7}%` : "0%",
                            transitionDelay: `${delay}ms`,
                        }),
                    }}
                />
            );
        });

        const content = (
            <>
                {/* Border container that clips the spans */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {spans}
                </div>

                {/* Inner button content */}
                <span className="relative flex items-center gap-2 z-10 w-full h-full justify-center px-6 py-3 font-medium text-[12px] tracking-[1.5px] uppercase">
                    {children}
                </span>
            </>
        );

        const baseClasses = cn(
            "relative group overflow-hidden inline-flex transition-colors duration-300 min-w-[140px]",
            variant === "primary"
                ? "bg-[var(--color-tribe-blue)] text-white hover:text-white"
                : "bg-transparent text-white border border-white/20 hover:border-transparent",
            className
        );

        if (href) {
            return (
                <a
                    href={href}
                    className={baseClasses}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={baseClasses}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {content}
            </button>
        );
    }
);
DigitalButton.displayName = "DigitalButton";
