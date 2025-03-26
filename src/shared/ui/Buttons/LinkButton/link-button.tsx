import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="px-[1.8vw] py-[1vh] border text-[1.2vw] min-text-[16px] dark:text-white rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
