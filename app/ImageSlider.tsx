"use client";
import React from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/slider1.jpg",
    title: "Innovative Circuits",
    description: "Discover the latest in circuit design and technology.",
  },
  {
    image: "/slider2.jpg",
    title: "Power Systems",
    description: "Explore modern solutions for energy and power.",
  },
  {
    image: "/slider0.jpg",
    title: "Smart Devices",
    description: "Learn about IoT and smart electrical devices.",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
      className="mb-8"
    >
      <div
        style={{
          width: "100vw",
          height: "600px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={slides[current].image}
          alt={slides[current].title}
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              borderRadius: 16,
              padding: 32,
              maxWidth: 700,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              {slides[current].title}
            </h2>
            <p style={{ color: "#fff", fontSize: 20 }}>
              {slides[current].description}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 0,
          gap: 8,
          background: "rgba(255, 255, 255, 0.7)",
          padding: "8px 0",
          borderRadius: 24,
          maxWidth: 200,
          margin: "0 auto",
          position: "relative",
          zIndex: 50,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: idx === current ? "#8D6944" : "#F3F2F1",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
