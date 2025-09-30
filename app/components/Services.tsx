import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaVideo,
  FaDatabase,
  FaNetworkWired,
  FaSitemap,
  FaPhoneAlt,
  FaEthernet,
} from "react-icons/fa";

const services = [
  {
    title: "Web Design Solutions",
    description: "Custom web design solutions for all needs.",
    icon: <FaLaptopCode size={56} color="#8D6944" />,
  },
  {
    title: "Data Center Solutions",
    description: "Efficient and reliable data center engineering.",
    icon: <FaServer size={56} color="#8D6944" />,
  },
  {
    title: "Video Surveillance Systems",
    description: "Smart video surveillance for security.",
    icon: <FaVideo size={56} color="#8D6944" />,
  },
  {
    title: "Server, Storage & Backup Solutions",
    description: "Custom server, storage, and backup solutions for all needs.",
    icon: <FaDatabase size={56} color="#8D6944" />,
  },
  {
    title: "IT Infrastructure Management",
    description:
      "Reliable local and wide area network design and implementation.",
    icon: <FaNetworkWired size={56} color="#8D6944" />,
  },
  {
    title: "Enterprise Networking Solutions",
    description: "Efficient and reliable enterprise networking solutions.",
    icon: <FaSitemap size={56} color="#8D6944" />,
  },
  {
    title: "Unified Communication Systems",
    description: "Modern unified communication for business.",
    icon: <FaPhoneAlt size={56} color="#8D6944" />,
  },
  {
    title: "Structured Cabling Services",
    description: "Custom structured cabling solutions for all needs.",
    icon: <FaEthernet size={56} color="#8D6944" />,
  },
];

export default function Services() {
  return (
    <section className="w-full max-w-[1180px] mx-auto mt-4 p-4">
      <p className=" font-regular text-sm text-center text-gray-800 ">
        WHAT WE DO
      </p>
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Our Services
      </h2>
      <p className="mb-18 text-base max-w-[750px] mx-auto text-center text-gray-700">
        We can understand and support all areas of your IT Systems, from
        back-end infrastructure to front-end personnel productivity. Our goal is
        to create an innovative technology solution that enable your business to
        be more agile and competitive.
      </p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .service-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(46, 36, 25, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .service-card:hover {
          box-shadow: 0 6px 24px rgba(141, 105, 68, 0.18);
          transform: translateY(-6px) scale(1.04);
        }
        .service-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .service-card:hover .service-icon {
          transform: scale(1.18) rotate(-8deg);
        }
        .service-title {
          font-size: 1.25rem;
          text-align: center;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 0.5rem;
          transition: color 0.3s, letter-spacing 0.3s;
        }
        .service-card:hover .service-title {
          color: #8d6944;
          letter-spacing: 2px;
        }
        .service-desc {
          color: #4b5563;
          text-align: center;
          font-weight: 400;
          transition: font-weight 0.2s;
        }
        .service-card:hover .service-desc {
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
