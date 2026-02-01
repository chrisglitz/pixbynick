import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | PixByNick Photography",
  description: "Get in touch for photography inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-orange mb-4 block">Let&apos;s Connect</span>
          <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            Fill out the form below or reach out through any of my social channels.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card p-8 lg:p-10">
            <h2 className="text-2xl font-display text-foreground mb-8">
              SEND A MESSAGE
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-display text-foreground mb-8">
                CONTACT INFORMATION
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "Nickglanden14@gmail.com",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Location",
                    value: "Newark, Delaware",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Availability",
                    value: "Open for bookings and collaborations",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start group">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-orange group-hover:bg-orange/10 transition-all duration-300 flex-shrink-0">
                      <div className="text-muted group-hover:text-orange transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm uppercase tracking-widest text-orange">{item.label}</h3>
                      <p className="text-foreground mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-display text-foreground mb-6">
                FOLLOW ALONG
              </h2>
              <div className="flex space-x-4">
                {[
                  {
                    label: "Instagram",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Twitter",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-border text-muted hover:border-orange hover:text-orange hover:bg-orange/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="card p-8">
              <h3 className="text-xl font-display text-foreground mb-6">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <div className="space-y-6">
                {[
                  {
                    q: "What types of photography do you offer?",
                    a: "I specialize in events, nature, sports, architecture, holidays, and portrait photography.",
                  },
                  {
                    q: "How can I book a session?",
                    a: "Simply fill out the contact form or send me an email with your project details.",
                  },
                  {
                    q: "Do you travel for shoots?",
                    a: "Yes! I'm available for local and destination photography projects.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <h4 className="font-medium text-foreground mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
