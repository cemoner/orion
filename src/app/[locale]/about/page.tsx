"use client"; // This directive is needed for the onError event handler

import { Target, CheckCircle, Rocket, ShieldCheck } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import ImagePreloader from '@/app/components/specific/ImagePreloader';

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <CheckCircle className="h-4 w-4 text-logo-blue dark:text-logo-blue mt-1" />
    </div>
    <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">{text}</p>
  </li>
);

interface AboutImageProps {
  imageUrl: string;
}
// A new Client Component to handle the image with the onError event handler
const AboutImage: React.FC<AboutImageProps> = ({imageUrl}) => {
    const t = useTranslations("About_Us_Page");
    return (
        <img 
            className="rounded-2xl mt-6 shadow-xl w-full object-contain" 
            src={imageUrl}
            alt={t('image_alt')} 
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/cccccc/ffffff?text=Resim+Yüklenemedi'; }}
        />
    );
};

export default function AboutUsPage() {
  const t = useTranslations("About_Us_Page");

  // Dynamically create arrays from the translation file
  const visionPoints = Object.keys(t.raw('vision_points')).map(key => t(`vision_points.${key}`));
  const missionPoints = Object.keys(t.raw('mission_points')).map(key => t(`mission_points.${key}`));

  const imageUrl = "/aboutphoto.png";
  
  const images = [
    imageUrl
  ]

  return (
    <ImagePreloader imageUrls={images}>
      <main className="bg-background px-4 md:px-0 dark:bg-background-dark">
      {/* Section 1: Hero/Introduction */}
      <section className="py-4 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-30items-stretch">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h1 className=" text-center lg:text-base font-semibold text-logo-blue dark:text-logo-blue tracking-wider uppercase">{t('pre_title')}</h1>
              <p className="text-center lg:text-base mt-2 text-2xl font-extrabold text-foreground dark:text-text-dark tracking-tight sm:text-3xl">
                {t('title')}
              </p>
              <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
                {t('paragraph1')}
              </p>
               <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                {t('paragraph2')}
              </p>
            </div>
            <div className="order-1 lg:order-2 flex items-center">
              <AboutImage imageUrl={imageUrl} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-75 border-t-1 border-gray-300 dark:border-0 dark:bg-background-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-logo-blue/10 dark:bg-logo-blue-dark/50 rounded-lg">
                    <Target className="h-7 w-7 text-logo-blue dark:text-logo-blue" />
                </div>
                <h2 className="ml-4 text-2xl font-extrabold text-foreground dark:text-text-dark tracking-tight">{t('vision_title')}</h2>
              </div>
              <p className="mb-5 text-sm text-gray-600 dark:text-gray-300 min-h-[80px]">
                {t('vision_description')}
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <ListItem key={index} text={point} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-logo-blue/10 dark:bg-logo-blue-dark/50 rounded-lg">
                    <Rocket className="h-7 w-7 text-logo-blue dark:text-logo-blue" />
                </div>
                <h2 className="ml-4 text-2xl font-extrabold text-foreground dark:text-text-dark tracking-tight">{t('mission_title')}</h2>
              </div>
              <p className="mb-5 text-sm text-gray-600 dark:text-gray-300 min-h-[80px]">
                {t('mission_description')}
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <ListItem key={index} text={point} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t-1 border-gray-300 dark:border-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-logo-blue dark:text-logo-blue"/>
            <h2 className="mt-4 text-2xl font-extrabold text-foreground dark:text-text-dark tracking-tight">
                {t('closing_title')}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300">
                {t('closing_subtitle')}
            </p>
            <p className="mt-5 text-xl font-bold text-logo-blue dark:text-logo-blue">
                {t('closing_tagline')}
            </p>
        </div>
      </section>
    </main>
    </ImagePreloader>
  );
}
