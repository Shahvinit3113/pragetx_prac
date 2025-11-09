import React from "react";

const WorkflowSection = React.memo(() => {
  return (
    <section
      className="relative w-full bg-gradient-to-br from-white via-[#ffffff] to-[#e6f7ff] py-24 px-6 overflow-hidden"
      aria-label="Workflow automation and AI solutions"
    >
      <div className="max-w-5xl mx-auto text-center select-none">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Workflows
          </span>{" "}
          that work for you
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Automate repetitive tasks, empower AI-driven decision-making, and
          build a secure, scalable digital backbone so your business runs
          faster, smarter, and more reliably than ever.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm px-1 py-1 w-full sm:w-[650px] justify-between will-change-transform">
            <button
              className="flex-1 bg-gradient-to-r from-blue-800 to-blue-400 text-white font-medium py-3 rounded-full transition-all shadow-sm hover:shadow-md focus:outline-none"
              aria-label="View Workflow Automation"
            >
              Workflow Automation
            </button>

            <button
              className="flex-1 text-gray-600 font-medium py-2.5 rounded-full hover:bg-gray-50 transition focus:outline-none"
              aria-label="View AI Agents"
            >
              AI Agents
            </button>

            <button
              className="flex-1 text-gray-600 font-medium py-2.5 rounded-full hover:bg-gray-50 transition focus:outline-none"
              aria-label="View Data and System Architecture"
            >
              Data & System Architecture
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="select-none">
          <div
            className="inline-flex px-5 py-1.5 mt-4 mb-4 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
            role="presentation"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
              ✨ Smart Automation
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
              Workflows
            </span>{" "}
            That Run Themselves
          </h3>

          <p className="mt-5 text-gray-600 text-lg max-w-lg">
            Automation replaces manual, repetitive work with smart, AI-driven
            workflows that run effortlessly and accurately.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-2xl shadow-md border border-gray-200 bg-white p-6 will-change-transform">
            <img
              src="/images/hero-2.png"
              alt="Workflow Integration Illustration"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>

          <div
            className="absolute bottom-6 right-6 inline-flex px-5 py-1.5 mt-4 mb-4 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm"
            role="presentation"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
              Save up to 80% of admin time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default WorkflowSection;
