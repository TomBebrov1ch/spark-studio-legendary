// "use client";
// import React from "react";
// import { AuroraBackground } from "@/components/ui/aurora-background/aurora-background";
// import { motion } from "framer-motion";
// import { LinkButton } from "@/shared/ui/Buttons/LinkButton/link-button";

// export const HeroSection = () => {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//         <h1 className="text-[4.6vw] min-text-[32px] font-extrabold dark:text-white text-center">
//           Цифровые продукты, которые меняют правила игры
//         </h1>
//         <div className="text-[1.4vw] min-text-[16px] font-nunito dark:text-gray-300 py-4 w-[50%] text-center">
//           Мы разрабатываем <span className="text-white">надежные</span> и
//           масштабируемые <span className="text-white">веб-решения</span>,
//           используя современные технологии.
//         </div>
//         <LinkButton text="Начать проект" />
//       </motion.div>
//     </AuroraBackground>
//   );
// };

"use client";
import { useScroll, useTransform } from "motion/react";
import React from "react";

import { DynamicLines } from "@/components/ui/dinamical-lines/dynamic-lines";

export const HeroSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-[400vh] w-full relative pt-40 overflow-clip" ref={ref}>
      <DynamicLines
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
};
