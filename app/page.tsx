import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/sections/Portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Background Grid Setup */}
      <div className="fixed inset-0 pointer-events-none z-[-1] grid-bg" />

      <Navbar />

      <main className="flex-1 w-full lg:pl-[300px] relative lg:border-l border-grid">
        {/* Horizontal grid lines for structural padding feel */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none border-t border-grid mt-[140px]" />

        {/* HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col pt-[100px] lg:pt-[180px] pb-32 px-6 lg:px-20 xl:px-28 relative">
          <div className="max-w-[750px] z-10 bg-[#fafafa]/40 p-2 md:p-0 backdrop-blur-[2px] md:backdrop-blur-none">
            <h1 className="text-3xl md:text-[45px] font-light leading-[1.15] tracking-tight text-[var(--color-tribe-darkest)]">
              We are a $2.2B AUM venture capital firm focused on harnessing AI and data science to deploy capital with precision — into N-of-1 companies.
            </h1>
          </div>

          <div className="mt-16 lg:mt-0 lg:absolute right-12 lg:right-20 xl:right-28 lg:top-[180px] lg:text-right z-10">
            <p className="text-[13px] text-black/50 font-light tracking-wide">Founded June 2018</p>
            <p className="text-[13px] text-black/50 font-light tracking-wide mt-1">Menlo Park, California, USA</p>
            <div className="mt-12 flex lg:justify-end">
              <a href="#" className="flex items-center justify-between gap-3 text-[13px] font-medium border-b border-black/30 pb-1 hover:border-black transition-colors w-[110px]">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* DOT MATRIX GRAPHIC SECTION (Replacing ASCII) */}
        <section className="w-full bg-[var(--color-tribe-light)] relative overflow-hidden h-[600px] border-t border-b border-grid flex items-center justify-center">
          {/* Decorative absolute blocks to simulate the tiered background shown in the design */}
          <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-white border-b border-l border-grid mix-blend-overlay" />

          <div className="relative z-10 w-full flex justify-center text-center">
            {/* Simulating the blue dotted hand graphic with a styled container representing the dot matrix */}
            <div className="w-[80vw] max-w-[900px] h-[500px] relative opacity-90" style={{
              backgroundSize: '16px 16px',
              backgroundImage: 'radial-gradient(circle at center, var(--color-tribe-blue) 1.5px, transparent 2px)',
              maskImage: 'linear-gradient(to top, black 10%, transparent 95%), radial-gradient(ellipse at 60% 50%, black 30%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 95%), radial-gradient(ellipse at 60% 50%, black 30%, transparent 70%)',
            }} />
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
