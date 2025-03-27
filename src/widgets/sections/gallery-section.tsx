"use client";
import React from "react";
import { GalleryParallax } from "@/components/ui/gallery-parallax/gallery-parallax";
import { galleryData } from "@/components/lib/content/gallery-data";

export const GallerySection = () => {
  return <GalleryParallax products={galleryData} />;
};
