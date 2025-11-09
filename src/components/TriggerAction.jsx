import React from "react";

const TriggerAction = React.memo(() => {
  return (
    <section
      className="relative w-full py-24 px-6 bg-gradient-to-br from-[#f7f6ff] via-[#f4f9ff] to-[#eaf8ff] overflow-hidden"
      aria-label="Trigger actions automation workflow section"
    >
      <div className="max-w-6xl mx-auto text-center select-none">
        <div
          className="inline-flex px-5 py-1.5 mt-4 mb-4 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
          role="presentation"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
            ✨ Trigger Actions
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-snug">
          <span className="text-gray-900">Trigger.</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Automate.
          </span>{" "}
          <span className="text-gray-900">Done.</span>
        </h2>

        <div className="relative mt-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          <div
            className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 -translate-y-1/2 z-0"
            role="presentation"
          ></div>

          <article
            className="relative bg-white border border-gray-200 rounded-3xl shadow-sm p-6 w-full md:w-1/3 text-left z-10 transition hover:shadow-lg will-change-transform"
            aria-label="Choose your trigger workflow card"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
              Choose your trigger
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Select the event that starts your workflow: email, form, or call.
            </p>

            <div className="mt-5 relative w-full h-52 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="/images/hero-2.png"
                alt="Choose Trigger"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
              <button
                className="absolute left-5 bottom-5 bg-white text-sky-600 font-semibold px-5 py-2 rounded-full shadow-md text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 will-change-transform"
                aria-label="Start automation process"
              >
                Start Automate
              </button>
            </div>
          </article>

          <article
            className="relative bg-white border border-gray-200 rounded-3xl shadow-sm p-6 w-full md:w-1/3 text-left z-10 transition hover:shadow-lg will-change-transform"
            aria-label="Build the workflow card"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
              Build the workflow
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Drag-and-drop steps, set conditions, and let AI plan the path.
            </p>

            <div className="mt-5 relative w-full h-52 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="/images/hero-2.png"
                alt="Build Workflow"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          </article>

          <article
            className="relative bg-white border border-gray-200 rounded-3xl shadow-sm p-6 w-full md:w-1/3 text-left z-10 transition hover:shadow-lg will-change-transform"
            aria-label="AI automation execution card"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
              Let AI handle the rest
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Tasks executed automatically, data updated, and notifications
              sent.
            </p>

            <div className="mt-5 relative w-full h-52 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="/images/hero-2.png"
                alt="AI Handles Tasks"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
});

export default TriggerAction;
