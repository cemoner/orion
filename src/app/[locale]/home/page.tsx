// This file is likely app/page.tsx or a similar route.
// It remains a Server Component as it has no hooks or event listeners.

'use client'
import { HeroSlide } from "@/app/components/specific/HeroSlide";
import SustainabilitySection from "@/app/components/specific/Sustainability";
import AboutUs from "@/app/components/specific/About";
import Location from "@/app/components/specific/Location";
import Products from "@/app/components/specific/Products";

// Step 1: Import the ImagePreloader we built.
import ImagePreloader from "@/app/components/specific/ImagePreloader";

export default function Home() {
  // Your image URL definitions remain the same.
  const aboutUsImageUrl = "/about1.png";
  const aboutUsOverlayUrl = "/about2.png";
  const productsImageUrl = "/products1.png";
  const productsOverlayUrl = "/products2.png";
  const sustainability = "/sustainability.png";
  const locationImageUrl = "/location2.png";
  const locationOverlayUrl = "/location1.png";
  const heroSlideData = [
    { imageUrl: "/hero1.png" },
    { imageUrl: "/hero2.png" },
    { imageUrl: "/hero3.png" },
    { imageUrl: "/hero4.png" },
  ];

  // Step 2: Create a single "master list" of ALL critical image URLs.
  // We use .map() to extract URLs from the heroSlideData array.
  const criticalImageUrls = [
    ...heroSlideData.map(slide => slide.imageUrl),
    aboutUsImageUrl,
    aboutUsOverlayUrl,
    productsImageUrl,
    productsOverlayUrl,
    sustainability,
    locationImageUrl,
    locationOverlayUrl,
  ];

  return (
    // Step 3: Wrap your entire page content in the ImagePreloader.
    // Pass the master list to its `imageUrls` prop.
    <ImagePreloader imageUrls={criticalImageUrls}>
      <div>
        <main>
          <section>
            <HeroSlide slides={heroSlideData} />
          </section>
          <section>
            <AboutUs
              imageUrl={aboutUsImageUrl}
              overlayImageUrl={aboutUsOverlayUrl}
            />
          </section>
          <section>
            <Products
              imageUrl={productsImageUrl}
              overlayImageUrl={productsOverlayUrl}
            />
          </section>
          <section>
            <SustainabilitySection imageUrl={sustainability} />
          </section>
          <section>
            <Location imageUrl={locationImageUrl} overlayImageUrl={locationOverlayUrl} />
          </section>
        </main>
      </div>
    </ImagePreloader>
  );
};