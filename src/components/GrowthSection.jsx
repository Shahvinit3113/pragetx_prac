import React, { useState, useCallback } from "react";

const steps = [
  { id: 1, text: "Reduce repetitive admin tasks by up to 80%." },
  { id: 2, text: "Average 22% reduction in operating costs." },
  { id: 3, text: "Teams scale without adding headcount." },
];

const GrowthSection = React.memo(() => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = useCallback((id) => setActiveStep(id), []);

  return (
    <section
      className="relative w-full py-24 px-6 bg-white overflow-hidden"
      aria-label="Faster Growth with Workflow Automation"
    >
      <div className="max-w-6xl mx-auto text-center select-none">
        <div
          className="inline-flex px-5 py-1.5 mt-4 mb-4 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
          role="presentation"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
            ✨ Faster Growth
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-snug">
          <span className="text-gray-900">Less Busywork.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            More Growth.
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
        <div className="flex flex-col gap-4">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-3 cursor-pointer transition-all duration-300 rounded-full px-6 py-3 will-change-transform focus:outline-none ${
                  isActive
                    ? "bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 border border-sky-300 shadow-sm"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-sky-500 text-white border-transparent"
                      : "border-gray-300 text-gray-500 bg-white"
                  }`}
                >
                  {step.id}
                </div>

                <span
                  className={`text-sm md:text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500"
                      : "text-gray-500"
                  }`}
                >
                  {step.text}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="bg-neutral-800 rounded-3xl w-full h-[280px] md:h-[360px] shadow-inner transition-transform duration-300 will-change-transform"
          role="img"
          aria-label="Visual representation of growth automation"
        ></div>
      </div>
    </section>
  );
});

export default GrowthSection;
