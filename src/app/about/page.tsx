import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | PixByNick Photography",
  description: "Learn about Nick, an aspiring photographer passionate about capturing life's beautiful moments through the lens.",
};

export default function AboutPage() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-elevated relative overflow-hidden group">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-orange/50 z-10" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-orange/50 z-10" />

              <Image
                src="/images/nick-profile.png"
                alt="Nick - Photographer"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-orange/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">About Me</span>
            <h1 className="text-5xl md:text-7xl font-display text-foreground mb-8">
              HELLO, I&apos;M
              <br />
              <span className="text-gradient-orange">NICK</span>
            </h1>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I&apos;m an aspiring photographer with a deep passion for capturing the world around me.
                Through my lens, I seek to freeze moments in time, telling stories that words alone cannot express.
              </p>
              <p>
                My journey in photography began with a simple curiosity about light and composition.
                What started as a hobby quickly evolved into a passionate pursuit of visual storytelling.
                I find beauty in the everyday moments that often go unnoticed.
              </p>
              <p>
                Whether it&apos;s the energy of a live event, the serenity of nature, the intensity of sports,
                or the elegance of architecture, I approach each subject with fresh eyes and genuine enthusiasm.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-10 inline-flex group">
              <span>Let&apos;s Work Together</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-24 mt-24 bg-surface relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
              MY APPROACH
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every photograph I take is guided by these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Vision",
                description: "I believe in capturing genuine moments as they unfold, preserving the authentic emotions and atmosphere of each scene.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                title: "Passion Driven",
                description: "Photography isn't just what I do - it's what I love. That passion shines through in every image I create.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Always Learning",
                description: "As an aspiring photographer, I'm constantly learning, experimenting, and pushing my creative boundaries.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-orange group-hover:bg-orange/10 transition-all duration-300">
                  <div className="text-muted group-hover:text-orange transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-display text-foreground mb-4 group-hover:text-orange transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Equipment</span>
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
              MY GEAR
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The tools I use to bring my vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-orange group-hover:bg-orange/10 transition-all duration-300 mr-4">
                  <svg className="w-6 h-6 text-muted group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-foreground group-hover:text-orange transition-colors">
                  Camera Bodies
                </h3>
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange mr-3" />
                  Your camera body here
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange mr-3" />
                  Your backup camera here
                </li>
              </ul>
            </div>

            <div className="card p-8 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-orange group-hover:bg-orange/10 transition-all duration-300 mr-4">
                  <svg className="w-6 h-6 text-muted group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-foreground group-hover:text-orange transition-colors">
                  Lenses
                </h3>
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange mr-3" />
                  Your primary lens here
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange mr-3" />
                  Your telephoto lens here
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange mr-3" />
                  Your wide-angle lens here
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 diagonal-lines" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Collaborate</span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
            LET&apos;S CREATE
            <br />
            <span className="text-gradient-orange">TOGETHER</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            I&apos;m always excited to take on new projects and collaborate with like-minded individuals.
            Whether you need event coverage, portraits, or creative photography, I&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-primary group inline-flex">
            <span>Get In Touch</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
