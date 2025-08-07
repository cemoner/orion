import type { NextPage } from "next";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Define the props for the component
interface ProductCardProps {
  imageUrl: string;
  overlayImageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  overlayImageUrl,
}) => {
  return (
    // The main container allows overflow. The group class has been removed.
    <div className="relative w-full overflow-hidden lg:overflow-visible ">
      {/* The main card, which contains the base image and is clipped */}
      <div className=" w-full h-full rounded-lg z-10 border-4 border-blue-900">
        <img
          src={imageUrl}
          alt="Corporate Building Exterior"
          className=" inset-0 w-full h-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src =
              "https://placehold.co/800x600/e2e8f0/4a5568?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Wrapper for the overlay image and its hover effect. This is the new hover target. */}
      <div className="absolute top-25 translate-x-[20%] lg:top-40 lg:translate-x-[-20%] z-20 group">
        <img
          src={overlayImageUrl}
          alt="Corporate Interior"
          className="w-3/5 lg:w-full h-full object-contain rounded-lg border-4 border-white shadow-lg"
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

// Products Page
const Products: NextPage = () => {
  const t = useTranslations("Products");

  return (
    <div className="flex items-center flex-col w-full justify-center  bg-gray-50 font-sans p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl mt-12">
        {/* H1 takes its own row, centered */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
          {t("title")}
        </h1>

        {/* Paragraph takes its own row, centered, with bottom margin */}
        <p className="text-center mb-6 md:mb-14 break-words max-w-4xl mx-auto px-4">
          {t("paragraph1")}
        </p>

        {/* The two-column layout for the remaining content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content (2/3 width on large screens) */}
          <div className="lg:col-span-2  text-center md:text-start p-2">
            <div className="space-y-5 text-base md:text-lg">
              <p className="text-text break-words">{t("paragraph2")}</p>
              <p className="font-bold text-text break-words md:w-7/10 lg:w-full">
                {t("paragraph3")}
              </p>
              <p className="text-text break-words lg:w-4/5">{t("paragraph5")}</p>
              <p className="text-text break-words lg:w-3/5">{t("paragraph4")}</p>
              <button className="flex-shrink-0 flex items-center justify-center px-6 py-3 text-white border border-white rounded-full bg-background-dark hover:text-blue-200 transition-colors duration-300 mx-auto md:mx-0">
                <ArrowRight className="mr-2 h-5 w-5" />
                <span>{t("card_button")}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image Card (1/3 width on large screens) */}
          <div className="lg:col-span-1 pl-4 flex justify-center h-full items-start md:justify-end lg:pl-0">
            <ProductCard
              imageUrl="/products1.png"
              overlayImageUrl="/products2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
