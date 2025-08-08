'use client'

import React from 'react';
import { useTranslations } from "next-intl";
import Link from 'next/link';
import ImagePreloader from '@/app/components/specific/ImagePreloader';


// --- TypeScript Interface for ProductCard Props ---
interface ProductCardProps {
  size: number;
  price: string;
  imageUrl: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ size, price, imageUrl, altText }) => (
  <Link href={`/details?size=${size}`} className="block group">
    <div className="relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden h-full">
      {/* Image container for zoom effect */}
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${altText} ${size}mm`} 
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          // Fallback image in case the primary one fails to load
          onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src='https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
        />
      </div>
      <div className="p-6 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {size}mm
        </h3>
        <p className="mt-3 text-xl font-bold text-blue-600 dark:text-blue-400">
          {price}
        </p>
      </div>
    </div>
  </Link>
);


// --- Main Exportable Component ---

const App = () => {
  const productSizes: number[] = [8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32];
  
  const t = useTranslations("Products");

  // --- Function to get the price based on size ---
  const getPrice = (size: number): string => {
    let price: number;
    if (size === 8) {
      price = 26050;
    } else if (size === 10) {
      price = 25850;
    } else {
      price = 25250;
    }
    // Formats the number to the specified currency format.
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const thinRebarImage = "/thin_rebar.png";
  const midThickRebarImage = "/mid_thick_rebar.png";
  const thickRebarImage = "/thick_rebar.png";

  const productImages = [
    thinRebarImage,
    midThickRebarImage,
    thickRebarImage,
  ]

  // --- Function to get the image URL based on size ---
  const getImageUrl = (size: number): string => {
    if (size === 8) {
      return thinRebarImage;
    } else if (size === 10) {
      return midThickRebarImage
    } else {
      return thickRebarImage
    }
  };

  return (
<ImagePreloader imageUrls={productImages}>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen p-4 sm:p-8 md:p-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("page_header")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("page_paragraph")}
          </p>
        </div>

        {/* --- Products Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productSizes.map((size) => (
            <ProductCard 
              key={size} 
              size={size} 
              price={getPrice(size)}
              imageUrl={getImageUrl(size)} // Dynamically set image URL
              altText="alttext"
            />
          ))}
        </div>
      </div>
    </div>
</ImagePreloader>
  );
};

export default App;
