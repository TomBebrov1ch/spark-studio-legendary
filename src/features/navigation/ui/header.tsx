import React from "react";
// import { links } from "../model/header-links";
import Image from "next/image";
import SparkLogo from "../../../../public/assets/hero-section/spark_logo.svg";
import { BurgerMenu } from "./burger-button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-[100vw] mx-auto flex items-center justify-between py-[2vh] px-[2vw]">
        <div className="w-[8vw] min-w-[80px]">
          <Image src={SparkLogo} alt="Spark-logo" className="w-full h-auto" />
        </div>

        <BurgerMenu />
      </nav>
    </header>
  );
};
