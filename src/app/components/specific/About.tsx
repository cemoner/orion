import type { NextPage } from "next";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Define the props for the component
interface CorporateCardProps {
  imageUrl: string;
  overlayImageUrl: string;
}

const CorporateCard: React.FC<CorporateCardProps> = ({
  imageUrl,
  overlayImageUrl,
}) => {

  return (
    // The main container allows overflow. The group class has been removed.
    <div className="relative w-full h-96 lg:h-[500px]">
      {/* The main card, which contains the base image and is clipped */}
      <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden z-10 border-4 border-blue-900">
        <img
          src={imageUrl}
          alt="Corporate Building Exterior"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src =
              "https://placehold.co/800x600/e2e8f0/4a5568?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Wrapper for the overlay image and its hover effect. This is the new hover target. */}
      <div className="absolute top-1/2 left-10 md:left-0 -translate-y-1/2 -translate-x-[20%] w-3/5 md:w-2/5 lg:w-3/5 z-20 group">
        <img
          src={overlayImageUrl}
          alt="Corporate Interior"
          className="w-full h-full object-contain rounded-lg border-4 border-white shadow-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src =
              "https://placehold.co/800x600/1e3a8a/ffffff?text=Overlay+Missing";
          }}
        />

      </div>
    </div>
  );
};

// AboutUs Page
const AboutUs: NextPage = () => {
  const t = useTranslations("About_Us");

  return (
    <div className="flex items-center justify-center shadow-2xl bg-gray-100 font-sans p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-gray-700 order-2 text-center md:text-start p-8 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {t("title")}
            </h1>
            <br></br>
            <div className="space-y-5 text-gray-600 text-base md:text-lg">
              <p className="text-text">{t("paragraph1")}</p>
              <p className="text-text">{t("paragraph2")}</p>
              <br></br>
              <button className="flex-shrink-0 flex items-center justify-center px-6 py-3 text-white border border-white rounded-full bg-background-dark hover:text-blue-200 transition-colors duration-300">
                <ArrowRight className="mr-2 h-5 w-5" />
                <span>{t("card_button")}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image Card. Added more padding on the left for mobile. */}
          <div className="order-1 lg:order-2 pl-4 md:pl-18 lg:pl-8">
            <CorporateCard
              imageUrl="/about1.png"
              overlayImageUrl="/about2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
