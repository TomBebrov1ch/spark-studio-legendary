"use client";
import { motion, MotionValue } from "motion/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export const GalleryCard = ({
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
