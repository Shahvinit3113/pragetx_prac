import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="px-5 py-1.5 mt-4 mb-6 bg-gradient-to-r from-purple-50 via-blue-50 to-sky-50 rounded-full border border-gray-200 shadow-sm">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 font-semibold text-sm md:text-sm">
        {text}
      </span>
    </div>
  );
};

export default Badge;
