
import React from "react";

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  children,
}) => {
  return (
    <div className="bg-white border border-gray-700  rounded-lg shadow-lg p-6 text-custom-text">
      {children}
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <h1 className="text-sm mt-2">{description}</h1>
      <a
        href={linkHref}
        className="text-black mt-4 inline-block hover:underline"
      >
        {linkText}
      </a>
    </div>
  );
};

export default Card;
