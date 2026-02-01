import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Portfolio | PixByNick Photography",
  description: "Browse my photography portfolio featuring events, holidays, nature, sports, architecture, and more.",
};

export default function PortfolioPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-orange/30 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-orange/30 hidden lg:block" />

          <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">My Work</span>
          <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            PORTFOLIO
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A collection of my favorite captures across various categories.
            Click on any image to view it in full size.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Gallery />
      </section>
    </div>
  );
}
