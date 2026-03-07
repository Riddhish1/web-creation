import React from 'react';

export function AboutUs() {
    return (
        <section className="w-full relative flex flex-col lg:flex-row lg:-ml-[300px] lg:w-[calc(100%+300px)] border-b border-grid bg-[#222] text-white">
            {/* Left Sidebar Empty Spacer */}
            <div className="hidden lg:block w-[300px] shrink-0 border-r border-grid border-white/10" />

            {/* Main Content Area */}
            <div className="flex-1 w-full px-8 lg:px-[40px] py-[64px]">
                <p className="font-[family-name:var(--font-serif)] text-[18px] lg:text-[22px] leading-[1.6] tracking-wide text-[#f4f4f4]">
                    <span className="font-semibold text-white">About us -</span> We focus exclusively on long-term investing in the industries of the future. Our work combines industry research, deep company analysis, and conversations with founders building enduring businesses, supported by ongoing insights and in-depth company research, all grounded in fundamentals and long-term conviction.
                </p>
            </div>
        </section>
    );
}
