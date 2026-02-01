import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | PixByNick Photography",
  description: "Learn about Nick, an aspiring photographer passionate about capturing life's beautiful moments through the lens.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center text-gray-500 dark:text-gray-400 text-sm">
              Your photo here
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I&apos;m Nick
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I&apos;m an aspiring photographer with a deep passion for capturing the world around me.
              Through my lens, I seek to freeze moments in time, telling stories that words alone cannot express.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in photography began with a simple curiosity about light and composition.
              What started as a hobby quickly evolved into a passionate pursuit of visual storytelling.
              I find beauty in the everyday moments that often go unnoticed.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Whether it&apos;s the energy of a live event, the serenity of nature, the intensity of sports,
              or the elegance of architecture, I approach each subject with fresh eyes and genuine enthusiasm.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Let&apos;s Work Together
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 mt-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Approach
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every photograph I take is guided by these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Authentic Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in capturing genuine moments as they unfold, preserving the authentic emotions and atmosphere of each scene.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Passion Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Photography isn&apos;t just what I do - it&apos;s what I love. That passion shines through in every image I create.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                As an aspiring photographer, I&apos;m constantly learning, experimenting, and pushing my creative boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Gear
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools I use to bring my vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Camera Bodies
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Your camera body here</li>
                <li>Your backup camera here</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Lenses
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Your primary lens here</li>
                <li>Your telephoto lens here</li>
                <li>Your wide-angle lens here</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Create Together
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to take on new projects and collaborate with like-minded individuals.
            Whether you need event coverage, portraits, or creative photography, I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
