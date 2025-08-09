"use client";

import { useTranslations } from "next-intl";
import React, { useState, useEffect, useCallback } from "react";

// --- TYPE DEFINITIONS ---
// This is the internal shape of a slide after merging props and translations.
interface Slide {
  imageUrl: string;
  title: React.ReactNode;
  subtitle: string;
}

// This describes the data that must be passed in from the parent.
interface SlideDataFromParent {
  imageUrl: string;
}

// This defines the full props object for the HeroSlide component.
interface HeroSlideProps {
  slides: SlideDataFromParent[];
}

// --- Chevron Icon Component (UNCHANGED) ---
const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {direction === "left" ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    )}
  </svg>
);

// --- Main Slider Component ---
export const HeroSlide: React.FC<HeroSlideProps> = ({ slides: slidesFromProps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("HeroSlide");

  // State to track touch starting position for swipe gesture
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const slides: Slide[] = slidesFromProps.map((slideProp, index) => ({
    imageUrl: slideProp.imageUrl,
    title: t(`slide${index + 1}.title`),
    subtitle: t(`slide${index + 1}.subtitle`),
  }));

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // --- SWIPE HANDLERS ---
  // Records the initial touch position on the X-axis.
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Determines swipe direction and navigates accordingly.
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) {
      return;
    }

    const touchEnd = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance in pixels for a swipe to be registered

    // If swiped left (finger moves from right to left)
    if (swipeDistance > minSwipeDistance) {
      goToNext();
    } 
    // If swiped right (finger moves from left to right)
    else if (swipeDistance < -minSwipeDistance) {
      goToPrevious();
    }

    // Reset touch start position for the next swipe
    setTouchStart(null);
  };


  useEffect(() => {
    const sliderInterval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(sliderInterval);
  }, [goToNext]);

  return (
    // Add touch event handlers to the main container
    <div 
        className="relative w-full h-[clamp(560px,64vh,576px)] lg:h-[clamp(630px,72vh,648px)] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-center">
              <h1
                className="text-white text-3xl md:text-6xl lg:text-4xl font-bold leading-tight mb-4"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                {slide.title}
              </h1>
              <p
                className="text-white text-lg md:text-xl max-w-2xl mb-8"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="hidden md:block absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label={t("previousButton")}
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:block absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label={t("nextButton")}
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={t("goToSlide", { number: slideIndex + 1 })}
          ></button>
        ))}
      </div>
    </div>
  );
};
