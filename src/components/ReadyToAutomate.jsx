import React from "react";
import { Sparkles } from "lucide-react";

const ReadyToAutomate = React.memo(() => {
  return (
    <section
      className="w-full py-20 px-6 flex justify-center items-center bg-white"
      aria-label="AI automation call to action section"
    >
      <div
        className="relative max-w-6xl w-full rounded-[40px] overflow-hidden p-12 text-center shadow-md 
        bg-gradient-to-r from-rose-300 via-purple-300 to-sky-400 select-none"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_1px,_transparent_1px)] 
          bg-[length:22px_22px] opacity-40 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="absolute top-8 right-8 text-white opacity-80 will-change-transform">
          <Sparkles className="w-6 h-6 animate-pulse" aria-hidden="true" />
        </div>
        <div className="absolute bottom-8 left-8 text-white opacity-80 will-change-transform">
          <Sparkles
            className="w-6 h-6 rotate-180 animate-pulse"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10">
          <p className="text-white/90 text-sm md:text-base font-medium mb-4">
            Our workflows, powered by AI — simple, fast, reliable
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Ready to Automate Your <br /> Business with AI?
          </h2>

          <button
            type="button"
            aria-label="Get started with AI automation"
            className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-full shadow-md 
            hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5 
            text-sm md:text-base will-change-transform focus:outline-none"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
});

export default ReadyToAutomate;
