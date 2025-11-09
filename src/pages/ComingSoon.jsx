import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        🚧 Page Coming Soon
      </h1>
      <p className="text-gray-500 text-lg mb-6">
        We're working hard to bring this page to life. Check back later!
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-800 to-blue-400 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ComingSoon;
