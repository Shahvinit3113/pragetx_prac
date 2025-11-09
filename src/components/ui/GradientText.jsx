import React from "react";
import clsx from "clsx";

const GradientText = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-500",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default GradientText;
