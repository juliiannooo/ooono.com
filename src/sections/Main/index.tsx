import { HeroSection } from "@/sections/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { ProductFeatureSection } from "@/sections/ProductFeatureSection";
import { VideoBannerSection } from "@/sections/VideoBannerSection";
import { TextCtaSection } from "@/sections/TextCtaSection";
import { ProductCarouselSection } from "@/sections/ProductCarouselSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { ImageBannerSection } from "@/sections/ImageBannerSection";
import { AboutSection } from "@/sections/AboutSection";

export const Main = () => {
  return (
    <main
      role="main"
      className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
    >
      <HeroSection />
      <IntroSection />
      <ProductFeatureSection />
      <VideoBannerSection />
      <TextCtaSection />
      <ProductCarouselSection />
      <CommunitySection />
      <ImageBannerSection />
      <AboutSection />
    </main>
  );
};
