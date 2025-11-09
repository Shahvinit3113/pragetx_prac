import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  Play,
  Lightbulb,
  Landmark,
  Brain,
  GraduationCap,
  Film,
} from "lucide-react";

const Artificial = React.memo(() => {
  const categories = useMemo(
    () => [
      { name: "Manufacturing & Innovation", icon: Lightbulb },
      { name: "Government & Public Sector", icon: Landmark },
      { name: "Artificial Intelligence", icon: Brain },
      { name: "Education", icon: GraduationCap },
      { name: "Media & Entertainment", icon: Film },
    ],
    []
  );

  const useLazyImage = (src) => {
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
        { rootMargin: "100px" }
      );
      if (imgRef.current) observer.observe(imgRef.current);
      return () => observer.disconnect();
    }, []);

    return [imgRef, visible];
  };

  const [bgRef, showBg] = useLazyImage("/images/artificial-bg.jpg");
  const [toolsRef, showTools] = useLazyImage("/images/artificial.png");

  return (
    <section
      className="w-full bg-white py-20 px-6"
      aria-label="Artificial Intelligence and Industry Tools Section"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className="flex flex-wrap justify-center items-center gap-8 mb-10 select-none"
          aria-label="Industry Categories"
        >
          {categories.map((item, idx) => {
            const Icon = item.icon;
            const isActive = item.name === "Artificial Intelligence";
            const isFaded = idx === 0 || idx === categories.length - 1;
            return (
              <button
                key={idx}
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center gap-2 text-sm md:text-base font-medium transition-all focus:outline-none ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400"
                    : "text-gray-500 hover:text-gray-700"
                } ${isFaded ? "opacity-40" : "opacity-100"}`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "stroke-sky-500" : "stroke-gray-500"
                  } transition-colors`}
                />
                {item.name}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-800 to-blue-400 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        <div
          className="relative rounded-3xl overflow-hidden shadow-xl"
          role="region"
          aria-label="Artificial Intelligence Showcase Video"
        >
          <div
            ref={bgRef}
            className="w-full h-[360px] md:h-[420px] bg-gray-100"
          >
            {showBg && (
              <img
                src="/images/artificial-bg.jpg"
                alt="Artificial Intelligence Background"
                className="w-full h-full object-cover"
                decoding="async"
              />
            )}
          </div>

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between rounded-3xl">
            <div className="p-6 md:p-8">
              <p className="text-white text-lg font-medium max-w-md">
                AI that learns, adapts, and powers innovation across industries.
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play video about Artificial Intelligence"
                className="bg-white/20 hover:bg-white/30 transition-all rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm will-change-transform"
              >
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="p-6 md:p-8 flex justify-end">
              <button
                type="button"
                aria-label="Read more about AI innovation"
                className="bg-gradient-to-r from-blue-800 to-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow hover:opacity-90 transition-all focus:outline-none will-change-transform"
              >
                Read More →
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 select-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Here are the{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
              Tools
              <span className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 rounded-full"></span>
            </span>{" "}
            & Software We Use
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            ref={toolsRef}
            className="w-[500px] h-[300px] bg-gray-50 rounded-xl"
          >
            {showTools && (
              <img
                src="/images/artificial.png"
                alt="AI tools and software logos"
                className="max-w-full w-[500px] object-contain"
                decoding="async"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Artificial;
