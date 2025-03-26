"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const GalleryParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] py-[8vh] overflow-hidden relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse gap-[3vw] mb-[6vh]">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row gap-[3vw] mb-[6vh]">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse gap-[3vw]">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="px-[2vw] py-[1vh] max-w-[1920px] mx-auto mt-[1vw] relative left-0 top-0">
      <h3 className="text-[4.6vw] min-text-[32px] font-extrabold dark:text-white text-left">
        The Ultimate <br /> development studio
      </h3>
      <p className="text-[1.4vw] min-text-[16px] font-nunito dark:text-gray-300 py-4 w-[50%]">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product w-[28vw] h-[40vh] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          width={600}
          height={600}
          alt={product.title}
          className="object-cover object-left-top absolute inset-0 w-full h-full"
        />
      </Link>
      <div className="absolute inset-0 w-full h-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-[1.2vh] left-[1.2vw] text-[1.2vw] min-text-[16px] opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
