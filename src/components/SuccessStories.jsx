import React, { useMemo } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const SuccessStories = React.memo(() => {
  // ✅ Memoize static tags array for performance
  const tags = useMemo(
    () => ["AI Agents", "Predictive Analytics", "NLP Chatbot"],
    []
  );

  return (
    <section
      className="w-full bg-gradient-to-r from-white to-sky-50 py-20 px-6"
      aria-label="AI Success Stories"
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left select-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
                Success
              </span>{" "}
              Stories That Matter
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto md:mx-0">
              See how companies are cutting costs and boosting efficiency with
              our AI-powered solutions.
            </p>
          </div>

          <button
            type="button"
            aria-label="Read all AI case studies"
            className="mt-6 md:mt-0 bg-gradient-to-r from-blue-800 to-blue-400 text-white font-medium px-6 py-2.5 rounded-full shadow hover:opacity-90 transition-all flex items-center gap-2 focus:outline-none will-change-transform"
          >
            Read All Case Study <ArrowRight className="w-4 h-4" />
          </button>
        </header>

        <article
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6"
          aria-label="SwiftLogix Smart Logistics Automation Case Study"
        >
          <div className="md:w-1/2 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-100 to-sky-100 text-sky-600">
                Logistics & Supply Chain
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/swift.png"
                alt="SwiftLogix logo"
                className="w-10 h-10 object-contain"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                SwiftLogix Smart Logistics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
                  Automation
                </span>
              </h3>
            </div>

            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              SwiftLogix partnered with us to automate shipment tracking and
              customer support. By deploying AI agents, they reduced manual data
              entry by 75%, cut response times from hours to seconds, and
              improved overall delivery efficiency.
            </p>

            <ul className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-sky-100 text-gray-700"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href="#"
              aria-label="Read full case study on SwiftLogix automation"
              className="text-sky-600 font-medium text-sm flex items-center gap-1 hover:underline transition-colors"
            >
              Read Case Study <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <img
              src="/images/Stories.jpg"
              alt="AI automation in logistics factory"
              className="rounded-2xl shadow-md w-full object-cover"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />

            <div
              className="absolute top-2 left-2 bg-white rounded-full shadow p-2"
              role="presentation"
            >
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="rounded-full w-8 h-8"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </article>

        <nav
          className="flex justify-center items-center gap-4 mt-10"
          aria-label="Case study navigation"
        >
          <button
            type="button"
            aria-label="Previous case study"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all bg-white focus:outline-none will-change-transform"
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            type="button"
            aria-label="Next case study"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-all bg-white focus:outline-none will-change-transform"
          >
            <ArrowRight className="w-4 h-4 text-gray-700" />
          </button>
        </nav>
      </div>
    </section>
  );
});

export default SuccessStories;
