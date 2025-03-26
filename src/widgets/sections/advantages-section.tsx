import { AdvantagesBlocks } from "@/components/ui/advantages-blocks";
import { advantagesData } from "@/components/lib/content/advantages-data";

export const AdvantagesSection = () => {
  return (
    <div className="max-w-5xl h-[100vh] mx-auto px-8">
      <h2 className="text-[4.6vw] min-text-[32px] font-extrabold dark:text-white text-center">
        Наши приемущества
      </h2>
      <AdvantagesBlocks items={advantagesData} />
    </div>
  );
};
