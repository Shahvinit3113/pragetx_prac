import React, { useMemo, useCallback } from "react";

const ImageContainer = React.memo(({ src, alt }) => (
  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
      loading="lazy"
      decoding="async"
      fetchpriority="low"
    />
  </div>
));
ImageContainer.displayName = "ImageContainer";

const RightTime = React.memo(() => {
  // memoize static arrays so they aren't recreated on each render
  const cards = useMemo(
    () => [
      {
        title: "Drowning in Repetition",
        subtitle: "Let automation handle routine tasks for you.",
        type: "workflow",
      },
      {
        title: "When Accuracy Matters",
        subtitle: "AI ensures error-free, instant execution.",
        type: "accuracy",
      },
      {
        title: "Scaling Too Fast",
        subtitle: "Grow without overwhelming your team.",
        type: "scaling",
      },
      {
        title: "Always On",
        subtitle: "Automation never sleeps, unlike humans.",
        type: "always-on",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "80%", label: "Tasks Automated" },
      { value: "22%", label: "Cost Savings" },
      { value: "3x", label: "Faster Scaling" },
      { value: "500+", label: "Clients" },
    ],
    []
  );

  // stable render function for visuals
  const renderVisual = useCallback((type) => {
    switch (type) {
      case "workflow":
        return (
          <ImageContainer src="/images/dia.png" alt="Workflow Automation" />
        );
      case "accuracy":
        return (
          <ImageContainer
            src="/images/stock.png"
            alt="AI Accuracy Visualization"
          />
        );
      case "scaling":
        return (
          <ImageContainer src="/images/ai.png" alt="Scaling Visualization" />
        );
      case "always-on":
        return <ImageContainer src="/images/thunder.png" alt="Always-On AI" />;
      default:
        return null;
    }
  }, []);

  return (
    <section
      className="py-20 px-6 relative"
      aria-label="Right time to adopt automation and AI solutions"
    >
      <div className="max-w-6xl mx-auto text-center select-none">
        {/* Badge */}
        <div
          className="inline-flex px-5 py-1.5 mt-4 mb-4 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
          role="presentation"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
            ✨ Always On
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          The Right{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Time
          </span>{" "}
          is Now
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              aria-labelledby={`rt-card-${i}-title`}
              role="region"
            >
              <div className="p-6 pb-3 text-left">
                <h3
                  id={`rt-card-${i}-title`}
                  className="text-xl font-bold text-purple-600 mb-1"
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{card.subtitle}</p>
              </div>

              <div className="p-2">{renderVisual(card.type)}</div>
            </article>
          ))}
        </div>

        {/* Lower AI Innovation Section */}
        <div className="mt-20 bg-white border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div>
              {/* Tag */}
              <div
                className="inline-flex px-4 py-1.5 mb-6 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
                role="presentation"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm">
                  ✨ Why PragetX.ai
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-5">
                An{" "}
                <span className="text-transparent bg-clip-text from-blue-800 to-blue-400 bg-gradient-to-r">
                  AI innovation
                </span>{" "}
                partner trusted by organizations worldwide!
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 max-w-md">
                Join hands with our skilled team to turn bold ideas into
                practical, scalable AI solutions.
              </p>

              {/* Button — kept as button but with accessible label */}
              <button
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-400 hover:from-blue-700 hover:to-sky-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition focus:outline-none"
                aria-label="Build the future with AI"
                type="button"
              >
                Let’s build the future together with AI →
              </button>
            </div>

            {/* Right Gradient Stats Box */}
            <div className="relative bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-3xl p-8 sm:p-10 md:p-12 flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-transparent border border-white/60 rounded-xl py-5 px-3 text-center backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                    aria-hidden={false}
                  >
                    {/* Corner sparkles — decorative */}
                    <div className="absolute -top-3 -left-3 w-4 h-4 bg-white/90 rounded-full blur-sm pointer-events-none"></div>
                    <div className="absolute -top-3 -right-3 w-4 h-4 bg-white/90 rounded-full blur-sm pointer-events-none"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-white/90 rounded-full blur-sm pointer-events-none"></div>
                    <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-white/90 rounded-full blur-sm pointer-events-none"></div>

                    <p className="text-3xl font-bold text-white drop-shadow-md">
                      {item.value}
                    </p>
                    <p className="text-white/90 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Subtle inner glow effect (decorative) */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-[2px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

RightTime.displayName = "RightTime";
export default RightTime;
