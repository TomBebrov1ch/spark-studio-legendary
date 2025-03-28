import { HeroSection } from "@/widgets/sections/hero-section";
import Providers from "@/shared/ui/ThemeProvider/ThemeProvider";
import { GallerySection } from "@/widgets/sections/gallery-section";
import { ReachSection } from "@/widgets/sections/reach-section";

export default function Home() {
  return (
    <Providers>
      <HeroSection />
      <ReachSection />
      <GallerySection />
    </Providers>
  );
}
