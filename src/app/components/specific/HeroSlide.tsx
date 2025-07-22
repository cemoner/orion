'use client';

import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useCallback } from 'react';

// Define the type for a single slide (can remain outside)
interface Slide {
  imageUrl: string;
  title: React.ReactNode;
  subtitle: string;
}

// --- Chevron Icon Component (No changes) ---
const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {direction === 'left' ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    )}
  </svg>
);


// --- Main Slider Component ---
export const HeroSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("HeroSlide");

  // ✅ Define slide data INSIDE the component to use the 't' function
  const slides: Slide[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=2070&auto=format&fit=crop',
      title: t('slide1.title'),
      subtitle: t('slide1.subtitle'),
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=1974&auto=format&fit=crop',
      title: t('slide2.title'),
      subtitle: t('slide2.subtitle'),
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1581297832338-f538937213c2?q=80&w=2070&auto=format&fit=crop',
      title: t('slide3.title'),
      subtitle: t('slide3.subtitle'),
    },
  ];

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]); // Added slides.length to dependency array

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]); // Added slides.length to dependency array

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [goToNext]);

  return (
    <div className="relative w-full h-[clamp(500px,80vh,720px)] overflow-hidden">
      {/* Slides Container */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
              <div className="absolute inset-0 w-full h-full bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-center">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation (No changes needed here) */}
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors" aria-label={t('previousButton')}>
        <ChevronIcon direction="left" />
      </button>

      <button onClick={goToNext} className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors" aria-label={t('nextButton')}>
        <ChevronIcon direction="right" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'}`}
            aria-label={t('goToSlide', { number: slideIndex + 1 })}
          ></button>
        ))}
      </div>
    </div>
  );
};