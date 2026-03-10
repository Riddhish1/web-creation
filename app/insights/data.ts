// Shared data file for insights articles

export interface Article {
    slug: string;
    tag: string;
    readTime: string;
    publishDate: string;
    title: string;
    subtitle: string;
    excerpt: string;
    imageUrl: string;
    authors: { name: string; role: string; avatar: string }[];
    youtubeId?: string;
    body: string[];
}

export const articles: Article[] = [
    {
        slug: "venture-capital-restarts",
        tag: "COMPANY BUILDING",
        readTime: "9 min read",
        publishDate: "November 11, 2025",
        title: "Venture capital restarts: Navigating the funding desert to unlock extreme value",
        subtitle: "How founders and investors are finding new paths through a challenging macro environment.",
        excerpt: "In the current venture capital landscape, a phenomenon known as the \"funding desert\" is reshaping how investors and startups interact.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
        authors: [
            { name: "Fawaz Al-Rashid", role: "General Partner", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" },
            { name: "Ryan Koh", role: "Investor", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" },
        ],
        youtubeId: "JcoGh2-qMTQ",
        body: [
            "The venture capital landscape has shifted dramatically over the past three years. Rising interest rates, compressed multiples, and a reset in growth valuations have created what many insiders now call the \"funding desert\" — a period where capital is available but highly selective, and the bar for funding has been raised significantly.",
            "For founders, this environment demands a fundamental rethink of company building. The era of growth-at-all-costs is over. Investors today are rewarding efficiency, unit economics, and paths to profitability. Those who adapted early are not just surviving — they are building durable businesses that will define the next decade.",
            "Lalit Keshre, Harsh Jain, Neeraj Singh, and Ishan Bansal — all former colleagues — had seen firsthand how technology could expand access to financial services. At their previous venture, they learned the value of relentless customer obsession, the discipline of building at scale, and the importance of surrounding themselves with exceptional talent. Those lessons became the foundation for their next mission: to make investing simple, transparent, and delightful for millions of people.",
            "Today, as the company enters public markets, its IPO marks both the culmination of that early vision and the beginning of an exciting new chapter.",
            "Our partnership began in 2021 when we led their Series E. When we first met the founders, we were immediately struck by their thoughtful approach to product building, their maniacal emphasis on customer experience, and their relentless focus on the long-term mission. What began with a simple, zero-commission platform quickly became the first investment account for millions of people, many of whom were being introduced to the concept of preserving and building wealth for the very first time.",
            "The company has since expanded into stocks, derivatives trading, Exchange Traded Funds (ETFs), bonds, credit, asset management, and more — all delivered through one unified and intuitive experience across mobile and web. Guided by customer feedback as their north star, the team has followed a first-principles approach from day one.",
            "Education and trust are also central to their DNA. From a weekly newsletter — now the largest investment newsletter in the region — to a widely followed YouTube channel and even books authored by the team, they have empowered millions to learn and invest with confidence.",
            "As a result, the company has scaled rapidly, propelled by deep customer love, and word of mouth, with exceptional engagement and industry-leading retention. This IPO is a milestone years in the making, reflecting not only the incredible growth of the business, but also the impact they have had in opening doors for millions of people to better financial futures.",
        ],
    },
    {
        slug: "ai-native-companies-compounding-growth",
        tag: "DATA SCIENCE",
        readTime: "6 min read",
        publishDate: "October 28, 2025",
        title: "How AI-native companies are rewriting the rules of compounding growth",
        subtitle: "The metrics that once defined success in SaaS no longer adequately capture the dynamics at play in AI-first businesses.",
        excerpt: "The metrics that once defined success in SaaS no longer adequately capture the dynamics at play in AI-first businesses.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        authors: [
            { name: "Priya Mehta", role: "Partner, Data Science", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" },
        ],
        body: [
            "AI-native companies don't just use AI as a feature — they architect their entire value chain around it. This seemingly subtle distinction has profound implications for how these companies grow, retain customers, and defend competitive moats over time.",
            "Traditional SaaS businesses grew by adding seats and modules. Revenue was predictable, linear, and deeply tied to headcount at the customer organization. AI-native businesses are different. Their value compounds with usage, not headcount. Every prompt, every workflow automation, every data point fed into the model makes the product smarter, stickier, and more valuable.",
            "This changes the fundamental unit of analysis. Net Revenue Retention (NRR), long the gold standard for SaaS health, tells only part of the story. For AI-native businesses, what matters equally is model improvement rate, inference cost trajectory, and the rate at which the product improves without explicit customer effort.",
            "We have developed a new framework for evaluating these businesses. It looks at four dimensions: data moat (proprietary training data), inference efficiency (cost per useful output), workflow depth (how deeply embedded the product is in mission-critical processes), and feedback loop velocity (how quickly the model improves from customer usage).",
            "The companies that score highest across these dimensions are not just better businesses — they are fundamentally more defensible. The compounding benefits of better data, cheaper inference, and deeper workflows create barriers to entry that traditional competitive analysis dramatically underestimates.",
        ],
    },
    {
        slug: "public-market-signals-2026",
        tag: "MARKETS",
        readTime: "12 min read",
        publishDate: "September 15, 2025",
        title: "Public market signals every private investor should be watching in 2026",
        subtitle: "Cross-market intelligence is becoming a key differentiator for private investors.",
        excerpt: "Cross-market intelligence is becoming a key differentiator. Here is our framework for reading the signals that matter most.",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
        authors: [
            { name: "James Walker", role: "General Partner", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" },
            { name: "Sofia Chen", role: "Senior Analyst", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" },
        ],
        body: [
            "Private market investors have historically operated in a data vacuum. Quarterly financials, infrequent board updates, and lagging comparable transactions have been the primary inputs into valuation and portfolio management decisions. Public markets offer something different: real-time signal.",
            "In 2026, we believe the integration of public market intelligence into private investment decision-making is not just an advantage — it is a necessity. As the lines between public and private markets continue to blur, and as crossover investors increasingly participate in late-stage private rounds, the pricing tension between the two markets has never been higher.",
            "We watch five categories of public signals closely. First, revenue multiples by sector — specifically, the premium the market is willing to pay for growth in each vertical. Second, margin expansion stories — which companies are successfully navigating the transition from growth to efficiency, and what the market is rewarding that transition with. Third, management commentary on demand environments — public company earnings calls remain one of the richest sources of real-time demand intelligence available to any investor.",
            "Fourth, talent flow data — where are senior executives and engineers moving, and what does that signal about which companies and sectors are gaining momentum? And fifth, M&A activity — which acquirers are active, which assets are attracting multiple bids, and how is the market pricing strategic value versus financial value?",
            "Each of these signals, taken individually, is informative. Taken together, they paint a picture of the competitive landscape, the demand environment, and the valuation expectations for an entire sector. Private investors who ignore them do so at their peril.",
        ],
    },
];
