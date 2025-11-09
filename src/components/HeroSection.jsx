import React, { useRef, useState, useEffect } from "react";

const HeroSection = React.memo(() => {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 py-16"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Automation and AI Solutions Hero Section"
    >
      <div
        className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"
        role="presentation"
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center mt-4 select-none">
        <div className="px-4 sm:px-5 py-1.5 mt-2 sm:mt-4 mb-5 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 rounded-full border border-gray-200 shadow-sm will-change-transform">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 font-medium text-xs sm:text-sm md:text-base">
            ✨ Trusted by businesses in finance, healthcare, logistics, retail,
            and beyond.
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 leading-tight max-w-xl">
          Automate, Accelerate & Scale
        </h1>

        <p className="mt-3 sm:mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-4xl px-3 sm:px-0">
          Unlock the future of work with <strong>AI Agents</strong>,{" "}
          <strong>Workflow Automation</strong>, and{" "}
          <strong>Smart Data Architecture</strong>. From startups to
          enterprises, we help businesses cut costs, save time, and grow faster
          without the tech headaches.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center w-full sm:w-auto">
          <button
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold px-11 py-1.5 rounded-full shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-700 transition w-full sm:w-auto will-change-transform"
            aria-label="Get Started with Automation"
          >
            Get Started
          </button>
          <button
            className="border border-gray-300 text-gray-800 px-11 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition w-full sm:w-auto will-change-transform"
            aria-label="See How It Works"
          >
            See How It Works
          </button>
        </div>

        <div ref={imgRef} className="mt-2 sm:mt-14 w-full flex justify-center">
          {visible && (
            <img
              src="/images/hero-2.png"
              alt="AI and automation integrations illustration"
              className="w-[90%] sm:w-[500px] h-auto max-w-full"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
