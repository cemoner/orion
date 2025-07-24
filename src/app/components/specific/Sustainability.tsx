import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";


const SustainabilitySection = () => {
    const t = useTranslations("Sustainability");
  

  return (
    <section className="relative w-full shadow:lg text-white overflow-hidden" style={{ maxHeight: '600px' }}>
      <div className="w-full relative" style={{ aspectRatio: '2.865' }}>
        <Image
          src="/sustain.jpg"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 flex justify-end items-center p-8 md:p-16">
        <div className="w-full md:w-4/5 flex flex-col items-end text-end">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            {t("title")}
          </h1>
          <button
            onClick={() => { window.location.href = '/sustainability'; }}
            className="bg-sustainability-green hover:bg-sustainability-green-dark hover:cursor-pointer text-white font-bold py-4 px-10 shadow-md rounded-sm transition-colors duration-300 ease-in-out shadow-lg"
          >
          {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
