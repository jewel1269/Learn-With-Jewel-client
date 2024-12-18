import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  children?: React.ReactNode;
  photo: string
}

const CardTwo: React.FC<CardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  photo,
  children,
}) => {
  return (
    <div className="bg-white border border-gray-700  rounded-lg shadow-lg p-6 text-custom-text">
      {children}
      <div className="flex justify-center">
      <Image src={photo} width={200} className="rounded-xl" height={200} alt="Logo"/>
      </div>
      <h2 className="text-xl text-center font-bold mt-4">{title}</h2>
      <h1 className="text-sm text-center mt-2">{description}</h1>
      <a
        href={linkHref}
        className="text-blue-400 flex justify-center mt-4 underline"
      >
        {linkText}
      </a>
    </div>
  );
};

export default CardTwo;
