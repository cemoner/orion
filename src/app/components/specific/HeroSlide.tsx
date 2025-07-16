import React, { useState, useEffect, useCallback } from 'react';

// Define the type for a single slide
interface Slide {
  imageUrl: string;
  title: React.ReactNode; // Allow JSX for multi-line titles
  subtitle: string;
}

// --- Slide Data ---
// Updated with the new content provided.
const slides: Slide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?q=80&w=2070&auto=format&fit=crop',
    title: "Steel Reinvented with a Unique Touch",
    subtitle: 'We deliver innovative solutions from our modern, high-capacity production facilities.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?q=80&w=1974&auto=format&fit=crop',
    title: "Transparent Pricing with Daily Market Rates",
    subtitle: 'Check today’s rebar prices, request a quote, and place your order — we deliver across all 81 provinces in Türkiye.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581297832338-f538937213c2?q=80&w=2070&auto=format&fit=crop',
    title: "Strong and Trusted Since 2019",
    subtitle: 'From a humble start in 2019 to a leading steel company with over 200 team members today.',
  },
];

// --- Chevron Icon Component ---
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

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // --- Auto-play functionality ---
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(sliderInterval); // Cleanup interval on component unmount
  }, [goToNext]);


  return (
    <div className="relative w-full h-screen overflow-hidden">
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
            <div className="relative z-10 flex flex-col items-start justify-center w-full h-full p-8 md:p-16 lg:p-24">
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

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronIcon direction="left" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronIcon direction="right" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
