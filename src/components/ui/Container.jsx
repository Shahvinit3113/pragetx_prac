import React from "react";
import clsx from "clsx";

const Container = ({ children, className }) => {
  return (
    <div className={clsx("max-w-6xl mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
