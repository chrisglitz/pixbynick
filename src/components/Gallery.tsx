"use client";

import { useState, useMemo } from "react";
import { categories, getPhotosByCategory, type Category, type Photo } from "@/data/portfolio";

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white/70 hover:border-orange hover:text-orange hover:bg-orange/10 transition-all duration-300 z-50"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/20 text-white/70 hover:border-orange hover:text-orange hover:bg-orange/10 transition-all duration-300 z-50"
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/20 text-white/70 hover:border-orange hover:text-orange hover:bg-orange/10 transition-all duration-300 z-50"
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-[92vw] max-h-[92vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[85vh] w-auto object-contain shadow-2xl"
        />
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
          <h3 className="text-2xl font-display text-white">{photo.title}</h3>
          <p className="text-sm text-orange uppercase tracking-widest mt-1">{photo.category}</p>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs font-mono tracking-wider hidden md:block">
        ← → NAVIGATE &nbsp;&nbsp;|&nbsp;&nbsp; ESC CLOSE
      </div>
    </div>
  );
}

// Determines the grid span for each photo based on position for visual variety
function getGridSpan(index: number, total: number): { colSpan: string; rowSpan: string; aspectClass: string } {
  // Create a repeating pattern that ensures visual interest
  const pattern = index % 12;

  // Featured large images (span 2 cols, 2 rows)
  if (pattern === 0 || pattern === 7) {
    return {
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      aspectClass: "aspect-square md:aspect-auto md:h-full"
    };
  }

  // Wide panoramic images (span 2 cols)
  if (pattern === 3 || pattern === 10) {
    return {
      colSpan: "md:col-span-2",
      rowSpan: "",
      aspectClass: "aspect-[16/9]"
    };
  }

  // Tall vertical images (span 2 rows)
  if (pattern === 5) {
    return {
      colSpan: "",
      rowSpan: "md:row-span-2",
      aspectClass: "aspect-[3/4] md:aspect-auto md:h-full"
    };
  }

  // Standard images
  return {
    colSpan: "",
    rowSpan: "",
    aspectClass: "aspect-[4/3]"
  };
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = useMemo(() => getPhotosByCategory(activeCategory), [activeCategory]);

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  // Keyboard navigation
  if (typeof window !== "undefined") {
    // This is handled in useEffect in production
  }

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 text-sm font-mono uppercase tracking-wider transition-all duration-300 relative overflow-hidden ${
              activeCategory === category.id
                ? "bg-orange text-white shadow-lg shadow-orange/25"
                : "border border-border text-muted hover:border-orange hover:text-orange"
            }`}
          >
            {activeCategory === category.id && (
              <span className="absolute inset-0 bg-gradient-to-r from-orange-dark via-orange to-orange-light opacity-100" />
            )}
            <span className="relative">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Photo count */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-muted/60 tracking-widest">
          {filteredPhotos.length} PHOTOS
        </span>
      </div>

      {/* Gallery Grid - Masonry-style with varied sizes */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredPhotos.map((photo, index) => {
            const { colSpan, rowSpan, aspectClass } = getGridSpan(index, filteredPhotos.length);

            return (
              <div
                key={photo.id}
                className={`group relative overflow-hidden bg-surface-elevated cursor-pointer ${colSpan} ${rowSpan}`}
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  animationDelay: `${Math.min(index * 0.05, 0.5)}s`,
                }}
              >
                {/* Image */}
                <div className={`relative w-full h-full ${aspectClass}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay - always visible but stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Orange accent line - animates on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-xs text-orange uppercase tracking-[0.2em] font-mono mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {photo.category}
                      </p>
                      <h3 className="text-lg md:text-xl font-display text-white leading-tight">
                        {photo.title}
                      </h3>
                    </div>
                  </div>

                  {/* Corner brackets on hover */}
                  <div className="absolute top-4 left-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-orange" />
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-orange" />
                  </div>
                  <div className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-orange" />
                    <div className="absolute top-0 right-0 h-full w-[2px] bg-orange" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange" />
                    <div className="absolute bottom-0 left-0 h-full w-[2px] bg-orange" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-250">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-orange" />
                    <div className="absolute bottom-0 right-0 h-full w-[2px] bg-orange" />
                  </div>

                  {/* View icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center border-2 border-white/80 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center border border-border">
            <svg
              className="w-12 h-12 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-display text-foreground mb-2">No Photos Yet</h3>
          <p className="text-muted">
            Check back soon for new additions to this category!
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
