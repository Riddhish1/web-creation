import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles } from "./data";

const insightItems = [
    {
        id: 1,
        date: "12.09.2025",
        title: "BofA's Let's Talk Alts: Investing in Artificial Intelligence",
        featuring: "Featuring Fawaz's Philippe Laffont",
        linkText: "Visit ml.com",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        slug: "venture-capital-restarts",
    },
    {
        id: 2,
        date: "12.07.2025",
        title: "HBS Investment Conference",
        featuring: "Featuring Fawaz's Michael Barton Jr.",
        linkText: "Learn more",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        slug: "ai-native-companies-compounding-growth",
    },
    {
        id: 3,
        date: "11.24.2025",
        title: "Why We're Doubling Down on Revolut",
        featuring: "Brendan O'Boyle, Rohan Bharvani, Lucas Swisher",
        linkText: "Learn more",
        imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
        slug: "public-market-signals-2026",
    },
];

export default function InsightsPage() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-[#f9f9f9] relative">
            <Navbar />

            {/* HERO HEADING SECTION */}
            <section className="w-full flex items-center justify-center px-6 sm:px-12 py-20 md:py-28 bg-white border-b border-gray-100">
                <div className="max-w-[860px] w-full text-center">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[60px] font-[family-name:var(--font-serif)] font-medium leading-[1.3] text-[#222]">
                        <span className="relative inline-block whitespace-nowrap">
                            Our insights
                            {/* Marker Underline */}
                            <svg
                                className="absolute pointer-events-none w-[110%] h-[28px] bottom-[-14px] left-[-5%] text-[#3BAA6D]"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <path
                                    d="M 2 12 C 25 18, 50 8, 98 12"
                                    stroke="currentColor"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </span>
                        {" "}interpret current market developments across the{" "}
                        <span className="relative inline-block whitespace-nowrap">
                            industries of the future
                            {/* Marker Oval */}
                            <svg
                                className="absolute pointer-events-none w-[115%] h-[155%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[#3BAA6D]"
                                viewBox="0 0 100 40"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <path
                                    d="M 50 4 C 80 2, 97 7, 97 19 C 97 32, 85 36, 50 36 C 15 36, 3 30, 3 19 C 3 8, 20 6, 52 5"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </span>
                        {", "}focusing on what matters for long-term outcomes rather than short-term reactions.
                    </h1>
                </div>
            </section>

            {/* ESSAYS SECTION */}
            <section className="w-full bg-white">
                <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">

                    {/* Section Header */}
                    <div className="pb-8 border-b border-gray-200 mb-0">
                        <p className="text-[13px] text-[#555] font-mono tracking-wide mb-5">// Essays</p>
                        <h2 className="text-[24px] md:text-[32px] font-light leading-[1.3] text-[#111] max-w-[560px] tracking-tight">
                            A selection of thoughts on the intersections of company building and data science
                        </h2>
                    </div>

                    {/* Essay List */}
                    <div className="flex flex-col divide-y divide-gray-200">
                        {articles.map((essay) => (
                            <Link
                                key={essay.slug}
                                href={`/insights/${essay.slug}`}
                                className="group flex flex-col sm:flex-row gap-6 lg:gap-10 py-10 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-sm"
                            >
                                {/* Image */}
                                <div className="w-full sm:w-[280px] md:w-[320px] shrink-0 aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
                                    <img
                                        src={essay.imageUrl}
                                        alt={essay.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-start pt-1 flex-1">
                                    {/* Tag + Read time */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="border border-[#3847FF] text-[#3847FF] group-hover:bg-[#3847FF] group-hover:text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-[5px] transition-colors">
                                            {essay.tag}
                                        </span>
                                        <span className="text-[13px] text-[#777] font-mono">// {essay.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[20px] md:text-[22px] font-normal leading-[1.35] text-[#111] group-hover:text-[#3847FF] transition-colors mb-4 tracking-[-0.01em]">
                                        {essay.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-[14px] text-[#666] leading-[1.7] mb-6 max-w-[520px]">
                                        {essay.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="mt-auto">
                                        <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#111] group-hover:text-[#3847FF] transition-colors border-b border-[#111] group-hover:border-[#3847FF] pb-[2px]">
                                            Read more <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* INSIGHTS SECTION */}
            <section className="w-full bg-[#f9f9f9] border-t border-gray-200">
                <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">

                    {/* Section Label */}
                    <h2 className="text-[22px] md:text-[26px] font-light text-[#111] tracking-tight mb-0 pb-6 border-b border-gray-300">
                        Insights
                    </h2>

                    {/* Insight Rows */}
                    <div className="flex flex-col divide-y divide-gray-200">
                        {insightItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/insights/${item.slug}`}
                                className="group flex flex-col sm:flex-row gap-6 lg:gap-12 py-8"
                            >
                                {/* Left: Image */}
                                <div className="w-full sm:w-[240px] md:w-[280px] shrink-0 aspect-[4/3] overflow-hidden bg-gray-200">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Right: Meta */}
                                <div className="flex flex-col justify-between flex-1 py-0 sm:py-1">
                                    <div>
                                        {/* Date */}
                                        <p className="text-[12px] text-[#888] font-mono tracking-wide mb-3">{item.date}</p>

                                        {/* Title */}
                                        <h3 className="text-[18px] md:text-[20px] font-normal leading-[1.35] text-[#111] group-hover:text-[#3847FF] transition-colors mb-4 tracking-[-0.01em]">
                                            {item.title}
                                        </h3>

                                        {/* Bullet info */}
                                        <p className="flex items-start gap-2 text-[13px] text-[#555] leading-[1.5]">
                                            <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#555] shrink-0 inline-block" />
                                            {item.featuring}
                                        </p>
                                    </div>

                                    {/* Arrow link */}
                                    <div className="mt-6 flex items-center gap-3 text-[13px] font-mono text-[#555] group-hover:text-[#111] transition-colors">
                                        <div className="relative w-[40px] h-[1px] bg-[#999] group-hover:bg-[#111] transition-colors">
                                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[5px] h-[5px] border-r border-t border-[#999] group-hover:border-[#111] rotate-45 transform translate-x-[1px]" />
                                        </div>
                                        {item.linkText}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
