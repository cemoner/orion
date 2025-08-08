import { Leaf, Users, Landmark, Target, Recycle, HeartHandshake, ShieldCheck } from 'lucide-react';
import React from 'react';
import { useTranslations } from "next-intl";
import ImagePreloader from '@/app/components/specific/ImagePreloader';


// This component requires the `lucide-react` package. You can install it with:
// npm install lucide-react
// or
// yarn add lucide-react

const PillarCard = ({ icon, title, quote, points }: { icon: React.JSX.Element; title: string; quote: string; points: string[] }) => (
  <div className="flex flex-col bg-background dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
    <div className="p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-sustainability-green text-white rounded-lg p-3">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-foreground dark:text-white tracking-tight">{title}</h3>
      </div>
      <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">{quote}</p>
      <ul className="mt-5 space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <ShieldCheck className="h-5 w-5 text-sustainability-green" />
            </div>
            <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const GoalItem = ({ icon, text }: { icon: React.JSX.Element; text: string }) => (
    <div className="flex items-start p-4 bg-sustainability-green/10 dark:bg-sustainability-green-dark/20 rounded-lg">
        <div className="flex-shrink-0 text-sustainability-green dark:text-sustainability-green">
            {icon}
        </div>
        <p className="ml-4 text-base font-medium text-sustainability-green-dark dark:text-green-100">{text}</p>
    </div>
);


export default function SustainabilityPage() {

   const t = useTranslations("SustainabilityPage");
  
  const pillars = [
    {
      icon: <Leaf className="h-7 w-7" />,
      title: t("environmentalPillarTitle"),
      quote: t("environmentalPillarQuote"),
      points: [
        t("environmentalPillarPoint1"),
        t("environmentalPillarPoint2"),
        t("environmentalPillarPoint3"),
        t("environmentalPillarPoint4")
      ]
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: t("socialPillarTitle"),
      quote: t("socialPillarQuote"),
      points: [
        t("socialPillarPoint1"),
        t("socialPillarPoint2"),
        t("socialPillarPoint3"),
        t("socialPillarPoint4")
      ]
    },
    {
      icon: <Landmark className="h-7 w-7" />,
      title: t("governancePillarTitle"),
      quote: t("governancePillarQuote"),
      points: [
        t("governancePillarPoint1"),
        t("governancePillarPoint2"),
        t("governancePillarPoint3"),
        t("governancePillarPoint4")
      ]
    }
  ];

  const goals = [
      { icon: <Target className="h-6 w-6"/>, text: t("goal1") },
      { icon: <Recycle className="h-6 w-6"/>, text: t("goal2") },
      { icon: <HeartHandshake className="h-6 w-6"/>, text: t("goal3") },
      { icon: <ShieldCheck className="h-6 w-6"/>, text: t("goal4") },
  ];
  const sustainabilityImage = '/sustainabilityhero.png';
  const images = [sustainabilityImage]

  return (
    
   <ImagePreloader imageUrls={images}>
     <main className="bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${sustainabilityImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 md:py-24 bg-background dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-sustainability-green dark:text-sustainability-green tracking-wider uppercase">{t("strategicApproachTitle")}</h2>
            <p className="mt-2 text-3xl font-extrabold text-foreground dark:text-white tracking-tight sm:text-4xl">
              {t("strategicApproachSubtitle")}
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t("strategicApproachDescription")}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Goals Section */}
      <section className="py-20 md:py-24 bg-gray-100 dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-foreground dark:text-white tracking-tight sm:text-4xl">
                    {t("goalsTitle")}
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                    {t("goalsDescription")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                    <GoalItem key={index} icon={goal.icon} text={goal.text} />
                ))}
            </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-background dark:bg-gray-800/50 py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-foreground dark:text-white tracking-tight">
                  {t("conclusionTitle")}
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {t("conclusionDescription")}
              </p>
              <p className="mt-8 text-xl font-semibold text-sustainability-green dark:text-sustainability-green">
                  {t("conclusionCallToAction")}
              </p>
          </div>
      </section>
    </main>
   </ImagePreloader>
  );
}
