import React from "react";
import clsx from "clsx";

const Button = ({ variant = "primary", children, className, ...props }) => {
  const base = "px-8 py-2 rounded-full font-semibold transition duration-200";
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-sky-400 text-white shadow-md hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
