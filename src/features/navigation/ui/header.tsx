import React from "react";
import { links } from "../model/header-links";
import Image from "next/image";
import SparkLogo from "../../../../public/assets/hero-section/spark_logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-[100vw] mx-auto flex items-center justify-between py-[2vh] px-[2vw]">
        <div className="w-[8vw] min-w-[80px]">
          <Image src={SparkLogo} alt="Spark-logo" className="w-full h-auto" />
        </div>

        {links.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="cursor-pointer text-[1.2vw] min-text-[16px] hover:text-gray-500 transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          className="cursor-pointer text-[1.2vw] min-text-[16px] hover:text-custom-orange transition-all duration-300"
          href=""
        >
          Получить консультацию
        </a>
      </nav>
    </header>
  );
};
