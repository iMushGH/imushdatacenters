import React from "react";

const testimonials = [
  {
    name: "Dr. Jane Smith",
    text: "The team delivered outstanding circuit designs for our research lab. Highly recommended!",
    image: "/globe.svg",
  },
  {
    name: "Engr. John Doe",
    text: "Their power system solutions improved our efficiency and reliability.",
    image: "/window.svg",
  },
  {
    name: "Prof. Emily Lee",
    text: "Excellent automation services for our smart campus project.",
    image: "/globe.svg",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Testimonials
      </h2>
      <div className="space-y-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-6 flex items-center gap-4"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-700 italic mb-2">"{t.text}"</p>
              <span className="text-blue-600 font-semibold">- {t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
