import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Memoized navigation links
  const navLinks = useMemo(
    () => [
      { title: "Company", path: "/company" },
      { title: "Products", path: "/products" },
      { title: "Services", path: "/services" },
      { title: "Resources", path: "/resources" },
      { title: "Industries", path: "/industries" },
    ],
    []
  );

  // ✅ Debounced scroll listener
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    requestAnimationFrame(() => setIsScrolled(scrollTop > 20));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={clsx(
        "fixed w-full top-0 z-50 transition-all duration-500 ease-in-out will-change-transform",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4 transition-all duration-500 ease-in-out">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transform transition-transform duration-500 hover:scale-105"
          aria-label="PragetX Home"
        >
          <img
            src="/images/pragetxLogo.webp"
            alt="PragetX"
            width="180"
            height="60"
            loading="lazy"
            decoding="async"
            className="object-contain select-none"
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          className={clsx(
            "hidden lg:flex items-center gap-6 transition-all duration-500 ease-in-out",
            !isScrolled &&
              "bg-white py-2 px-5 rounded-2xl shadow-sm border border-gray-100"
          )}
        >
          {navLinks.map(({ title, path }) => (
            <Link
              key={title}
              to={path}
              className={clsx(
                "group flex items-center gap-2 text-[16px] font-medium cursor-pointer transition-colors duration-300",
                isScrolled
                  ? "text-gray-800 hover:text-blue-800"
                  : "text-black hover:text-blue-400"
              )}
            >
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-800 to-blue-400 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-md transition-transform duration-300 hover:scale-110 text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300 rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out will-change-transform",
          menuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        )}
      >
        <div
          className={clsx(
            "px-6 py-4 border-t transition-all duration-500 ease-in-out",
            isScrolled
              ? "bg-white border-gray-200"
              : "bg-white/90 backdrop-blur-md"
          )}
        >
          {navLinks.map(({ title, path }) => (
            <Link
              key={title}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block py-3 flex justify-between items-center text-gray-800 font-medium hover:text-blue-600 transition-all duration-300"
            >
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          ))}
          <div className="mt-4">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-600 to-sky-400 text-white font-medium px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
