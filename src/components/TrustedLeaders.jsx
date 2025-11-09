import React, { useMemo } from "react";

const TrustedLeaders = React.memo(() => {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Clay Johnson",
        role: "CTO, ShopNow",
        image: "/images/Founder1.png",
        quote:
          "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
      },
      {
        id: 2,
        name: "Alex Sharma",
        role: "CTO, ShopNow",
        image: "/images/Founder2.png",
        quote:
          "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
      },
      {
        id: 3,
        name: "Priyanka Sharma",
        role: "CTO, ShopNow",
        image: "/images/Founder3.png",
        quote:
          "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
      },
    ],
    []
  );

  return (
    <section
      className="w-full bg-white py-20 px-6"
      aria-label="Trusted by industry leaders testimonials section"
    >
      <div className="max-w-6xl mx-auto text-center">
        <header className="select-none">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
              Leaders
            </span>
          </h2>
          <p className="text-gray-600 mb-12 text-base max-w-2xl mx-auto">
            See what our clients say about scaling smarter with AI agents.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((user) => (
            <article
              key={user.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden will-change-transform"
              aria-label={`Profile of ${user.name}, ${user.role}`}
            >
              <div className="p-2">
                <img
                  src={user.image}
                  alt={`${user.name} portrait`}
                  className="w-full h-68 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex items-center gap-3 px-4 pb-3 pt-1">
                <img
                  src={user.image}
                  alt={`${user.name} small portrait`}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-left">
                  <p className="text-gray-900 font-semibold text-sm md:text-base">
                    {user.name}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {user.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((user) => (
            <blockquote
              key={user.id}
              className="bg-white rounded-3xl p-8 shadow-md relative overflow-hidden will-change-transform transition-transform duration-300 hover:shadow-lg"
              aria-label={`Testimonial from ${user.name}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-transparent rounded-3xl pointer-events-none"></div>

              <div className="relative">
                <div className="flex mb-5">
                  <svg
                    className="w-10 h-10 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-8 italic">
                  “{user.quote}”
                </p>

                <footer className="flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={`${user.name} profile`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="text-gray-900 font-semibold text-base">
                      {user.name}
                    </p>
                    <p className="text-gray-500 text-sm">{user.role}</p>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TrustedLeaders;
