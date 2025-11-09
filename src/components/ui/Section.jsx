import React from "react";
import clsx from "clsx";

const Section = ({
  children,
  bgImage,
  overlay = null,
  center = false,
  minHeight = "auto",
  className,
}) => {
  return (
    <section
      className={clsx(
        "relative w-full flex flex-col py-16 md:py-20",
        center && "items-center justify-center text-center",
        className
      )}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight,
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ backgroundColor: overlay }}
        ></div>
      )}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
