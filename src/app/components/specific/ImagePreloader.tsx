// components/ImagePreloader.tsx
'use client'; // This component uses client-side hooks

import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import clsx from 'clsx';

// Define the types for the component's props
interface ImagePreloaderProps {
  imageUrls: string[];
  children: React.ReactNode;
}

const ImagePreloader = ({ imageUrls, children }: ImagePreloaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      // Create a promise for each image
      const promises = imageUrls.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject(`Failed to load image: ${src}`);
        });
      });

      try {
        // Wait for all images to load
        await Promise.all(promises);
      } catch (error) {
        console.error("One or more images failed to load.", error);
      } finally {
        if (isMounted) {
          // Add a small delay for a smoother transition
          setTimeout(() => setIsLoaded(true), 500);
        }
      }
    };

    preloadImages();

    // Cleanup function to prevent state updates on an unmounted component
    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return (
    <>
      {/* --- Loader Overlay --- */}
      <div
        className={clsx(
          'fixed inset-0 z-50 flex items-center justify-center bg-gray-900',
          'transition-opacity duration-700 ease-out',
          {
            'opacity-100': !isLoaded,
            'opacity-0 pointer-events-none': isLoaded,
          }
        )}
      >
        <LoadingSpinner />
      </div>

      {/* --- Main Content --- */}
      <div
        className={clsx(
          'transition-all duration-500 ease-in',
          {
            'opacity-0 translate-y-5': !isLoaded,
            'opacity-100 translate-y-0 delay-500': isLoaded, // Delay entrance animation
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default ImagePreloader;