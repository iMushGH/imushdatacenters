"use client";
import React, { useEffect, useState } from "react";

export default function ReturnToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-[#c9b9a9] text-white dark:bg-[#8D6944] transition-opacity duration-300 hover:bg-[#342a20] dark:hover:bg-[#836546] focus:outline-none focus:ring-2 focus:ring-[#b09b86] ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Return to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
