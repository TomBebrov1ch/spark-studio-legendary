import { HeroSection } from "@/widgets/sections/hero-section";
import Providers from "@/shared/ui/ThemeProvider/ThemeProvider";
import { GallerySection } from "@/widgets/sections/gallery-section";
import { AdvantagesSection } from "@/widgets/sections/advantages-section";

export default function Home() {
  return (
    <Providers>
      <HeroSection />
      <AdvantagesSection />
      <GallerySection />
    </Providers>
  );
}
