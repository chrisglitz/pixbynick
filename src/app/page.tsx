import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Events",
      description: "Weddings, parties, corporate events - every celebration deserves to be remembered.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Nature",
      description: "Landscapes, wildlife, and the raw beauty of the natural world.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Sports",
      description: "Action shots that freeze the thrill and intensity of athletic moments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Architecture",
      description: "The art of structures - from modern marvels to timeless classics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Holidays",
      description: "Festive moments and seasonal celebrations captured beautifully.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
    {
      title: "Portraits",
      description: "Personal and professional portraits that capture your unique personality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(var(--orange) 1px, transparent 1px), linear-gradient(90deg, var(--orange) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Diagonal accent lines */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute inset-0 diagonal-lines" />
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-orange/20 rotate-45 animate-float" />
          <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-orange/30 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-orange/40 animate-pulse-glow" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Small tagline */}
          <div className="inline-flex items-center space-x-3 mb-8 opacity-0 animate-fade-in">
            <span className="w-12 h-px bg-orange" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted">Photography Portfolio</span>
            <span className="w-12 h-px bg-orange" />
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground mb-6 opacity-0 animate-slide-up stagger-1">
            CAPTURING
            <br />
            <span className="text-gradient-orange">MOMENTS</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up stagger-2">
            Professional photography that tells your story through stunning visuals. Every frame, a memory preserved forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up stagger-3">
            <Link href="/portfolio" className="btn-primary group">
              <span>View Portfolio</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange/30" />
      </section>

      {/* Services/Categories Section */}
      <section className="py-24 px-4 bg-surface relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Services</span>
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
              WHAT I CAPTURE
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From intimate moments to grand celebrations, I specialize in capturing the essence of every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group card p-8 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-orange/0 to-orange/0 group-hover:from-orange/5 group-hover:via-orange/10 group-hover:to-orange/5 transition-all duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 mb-6 flex items-center justify-center border border-border group-hover:border-orange group-hover:bg-orange/10 transition-all duration-300">
                  <div className="text-muted group-hover:text-orange transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-display text-foreground mb-3 group-hover:text-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-muted group-hover:text-foreground/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Corner accent on hover */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-transparent group-hover:border-orange transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos Taken" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Passion" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-display text-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-surface-elevated relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 diagonal-lines" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Let&apos;s Work Together</span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
            READY TO CREATE
            <br />
            <span className="text-gradient-orange">SOMETHING AMAZING?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s work together to capture your special moments. Reach out today and let&apos;s discuss your photography needs.
          </p>
          <Link href="/contact" className="btn-primary group inline-flex">
            <span>Start a Conversation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
