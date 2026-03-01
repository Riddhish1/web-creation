import React from 'react';

const featuredInsight = {
    date: "October 2025",
    title: "Public Markets\nUpdate",
    bottomText: "Public Markets Update Deck and Replay",
    headshots: [
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    ]
};

const insightsList = [
    {
        title: "Investing in innovation through public and private markets with responsible risk management",
        linkText: "Visit CoatueCTEK.com",
        isDarkPlaceholder: true,
        placeholderText: "CTEK Coatue Innovative Strategies Fund"
    },
    {
        title: "Our Partnership with Anthropic: Enterprise Intelligence has Liftoff",
        authors: "Thomas Laffont, Lucas Swisher, Jade Lai, Abhi Srinivas",
        linkText: "Learn more",
        imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=180",
    },
    {
        title: "Uncapped Podcast",
        authors: "Featuring Coatue's Thomas Laffont",
        linkText: "Learn more",
        imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=300&h=180",
    }
];

export function Insights() {
    return (
        <section className="w-full relative flex flex-col lg:flex-row lg:-ml-[300px] lg:w-[calc(100%+300px)] bg-white border-b border-[#efefef] overflow-hidden">
            {/* Left Featured Block as Sidebar */}
            <div className="w-full lg:w-[300px] shrink-0 bg-[#171a24] text-white p-8 lg:p-[40px] flex flex-col justify-between min-h-[500px] border-r border-[#171a24]">
                <div>
                    <p className="text-[#a0a0a0] text-[16px] lg:text-[18px] tracking-tight mb-2 font-light">
                        {featuredInsight.date}
                    </p>
                    <h2 className="text-[32px] lg:text-[36px] leading-[1.15] font-light tracking-[-0.02em] whitespace-pre-line mb-8">
                        {featuredInsight.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {featuredInsight.headshots.map((src, idx) => (
                            <div key={idx} className="w-[60px] h-[65px] lg:w-[65px] lg:h-[75px] rounded-[6px] overflow-hidden bg-gray-800 shadow-md">
                                <img src={src} alt="Presenter" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-[14px] lg:text-[15px] font-medium tracking-wide">
                        {featuredInsight.bottomText}
                    </p>
                </div>
            </div>

            {/* Main Content (Right List Block) */}
            <div className="flex-1 w-full bg-white px-8 lg:px-[40px] py-[64px]">
                <div className="w-full flex flex-col h-full">
                    {insightsList.map((item, idx) => (
                        <a href="#" key={idx} className={`group block w-full flex-1 flex flex-col md:flex-row gap-6 lg:gap-10 pb-8 pt-2 ${idx !== insightsList.length - 1 ? 'border-b border-[#dfdfdf] mb-8' : ''}`}>
                            {/* Image Box */}
                            <div className="w-full md:w-[240px] shrink-0 h-[140px] lg:h-[150px] bg-[#1a1f2e] overflow-hidden relative flex items-center justify-center">
                                {item.isDarkPlaceholder ? (
                                    <div className="text-center px-4 flex flex-col items-center justify-center">
                                        <div className="text-white font-light tracking-wide leading-[1.3] text-center">
                                            <span className="font-medium text-[20px] block mb-1">CTEK</span>
                                            <span className="text-[10px] uppercase tracking-wider block leading-tight">Coatue Innovative<br />Strategies Fund</span>
                                        </div>
                                    </div>
                                ) : (
                                    item.imageSrc && (
                                        <img src={item.imageSrc} alt="" className="w-full h-full object-cover opacity-90" />
                                    )
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-start pt-1">
                                <h3 className="text-[18px] lg:text-[19px] text-[#222] leading-[1.35] mb-2 font-normal tracking-[-0.01em]">
                                    <span className="bg-gradient-to-r from-[#222] to-[#222] bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-[background-size] duration-500 pb-[1px]">
                                        {item.title}
                                    </span>
                                </h3>
                                {item.authors && (
                                    <p className="text-[13px] text-[#444] flex items-start gap-2 mb-4">
                                        <span className="mt-[6.5px] w-1 h-1 rounded-full bg-[#333] inline-block shrink-0"></span>
                                        <span className="leading-[1.4]">{item.authors}</span>
                                    </p>
                                )}
                                <div className="mt-auto pt-6">
                                    <div className="inline-flex items-center gap-3 text-[13px] font-mono text-[#555] group-hover:text-[#111] transition-colors">
                                        <div className="relative w-[45px] h-[1px] bg-[#999] group-hover:bg-[#111] transition-colors">
                                            {/* Arrow head */}
                                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[5px] h-[5px] border-r border-t border-[#999] group-hover:border-[#111] rotate-45 transform translate-x-[1px]"></span>
                                        </div>
                                        {item.linkText}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
