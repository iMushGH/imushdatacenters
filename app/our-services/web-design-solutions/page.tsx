"use client";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

export default function WebDesignSolutions() {
  return (
    <>
      <div className="service-banner">
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Web Design Solutions</h1>
      </div>
      <section className="max-w-2xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-4">
          <FaLaptopCode size={48} color="#8D6944" />
        </div>
        <p className="text-gray-700 mb-4 font-medium">
          We provide custom web design solutions tailored to your business
          needs, including responsive design, e-commerce, and content management
          systems.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Responsive website development</li>
          <li>E-commerce solutions</li>
          <li>Content management systems</li>
          <li>UI/UX design</li>
        </ul>
      </section>
      <style jsx>{`
        .service-banner {
          position: relative;
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("/sliders/server.jpg");
          background-size: cover;
          background-position: center;
          margin-bottom: 24px;
        }
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(46, 36, 25, 0.7) 0%,
            rgba(141, 105, 68, 0.5) 100%
          );
          z-index: 1;
        }
        .banner-title {
          position: relative;
          z-index: 2;
          color: #fff;
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 2px;
          text-shadow: 0 2px 12px rgba(46, 36, 25, 0.18);
        }
      `}</style>
    </>
  );
}
