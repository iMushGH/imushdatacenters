"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ImageSlider from "./ImageSlider";
import Services from "./components/Services";
import Testimonial from "./Testimonial";
import Link from "next/link";
import WhyChoseUs from "./WhyChoseUs";
import Query from "./components/Query";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>iMush Data Center | CCTV, Networking, IT Solutions</title>
        <meta
          name="description"
          content="Welcome to iMush Data Center. Your trusted partner for CCTV installations, networking, telephone systems, and IT solutions."
        />
        <meta
          name="keywords"
          content="CCTV, Networking, IT Solutions, Telephone Systems, Security, Business, Home, iMush Data Center"
        />
        {/* Add more meta tags as needed */}
      </Head>
      <main
        className="min-h-screen bg-white flex flex-col items-center justify-center p-0"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Scrolling Vector Background */}
        <div className="vector-bg-scroll">
          <svg
            width="100%"
            height="180"
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C360,180 1080,0 1440,120 L1440,180 L0,180 Z"
              fill="#8D6944"
              fillOpacity="0.12"
            />
          </svg>
        </div>
        {/* Hero Section with Slider */}
        <section
          className="w-full  mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <ImageSlider />
          <div
            style={{
              width: "100vw",
              position: "relative",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              background: "linear-gradient(90deg, #8D6944 0%, #2E2419 100%)",
              color: "#fff",
              borderRadius: 0,
              boxShadow: "0 2px 12px rgba(46,36,25,0.10)",
              padding: "38px 18px 18px 38px",
              marginTop: 8,
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              Welcome to iMush Data Center
            </h1>
            <p
              style={{
                fontSize: 20,
                fontWeight: 500,
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              Your trusted partner for CCTV installations, networking, telephone
              systems, and IT solutions. We deliver innovation, reliability, and
              security for your business and home.
            </p>
          </div>
        </section>
        {/* Services Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Services />
        </div>
        {/* Contact Card Section */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Query />
        </div>
        {/* Why Choose Us Section */}
        <div data-aos="fade-up" data-aos-delay="600">
          <WhyChoseUs />
        </div>
        {/* Testimonial Section */}
        {/* <div data-aos="fade-up" data-aos-delay="800">
          <Testimonial />
        </div> */}
        <style jsx>{`
          .vector-bg-scroll {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            z-index: 0;
            animation: scroll-bg 12s linear infinite;
          }
          @keyframes scroll-bg {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200px);
            }
          }
        `}</style>
      </main>
    </>
  );
}
