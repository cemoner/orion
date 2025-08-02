import type { NextPage } from "next";
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
    <div className="relative w-full h-96 lg:h-[440px]">
      {/* The main card, which contains the base image and is clipped */}
      <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden z-10 border-4 border-blue-900">
        <img
          src={imageUrl}
          alt="Corporate Building Exterior"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/800x600/e2e8f0/4a5568?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Wrapper for the overlay image and its hover effect. This is the new hover target. */}
      <div className="absolute opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-110  top-1/2 right-0 md:right-0 md:translate-x-[7.5%] -translate-y-1/2 -translate-x-[-10%] lg:-translate-x-[-20%] w-2/5 md:translate lg:w-5/10 z-20 group">
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

// Location
// Page
const Location: NextPage = () => {
  const t = useTranslations("Location");

  return (
    <div className="flex items-center justify-center bg-background border-b-2 border-gray-200 font-sans pr-8 pt-4 pb-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 pl-8 md:pl-0 lg:pl-16">
            <CorporateCard
              imageUrl="/location2.png"
              overlayImageUrl="/location1.png"
            />
          </div>

          {/* Right Column - Image Card. Added more padding on the left for mobile. */}

          <div className="text-gray-700 order-2 text-center md:text-start p-2 lg:order-2">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {t("title")}
            </h1>
            <div className="space-y-5 text-gray-600 text-base md:text-lg">
              <p className="text-text">{t("paragraph1")}</p>
              <p className="text-text">{t("paragraph2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
