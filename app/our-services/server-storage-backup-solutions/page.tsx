"use client";
import React from "react";
import { FaDatabase } from "react-icons/fa";

export default function ServerStorageBackupSolutions() {
  return (
    <>
      <div className="service-banner">
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Server, Storage & Backup Solutions</h1>
      </div>
      <section className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <FaDatabase size={48} color="#8D6944" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/sliders/server.jpg"
              alt="Server Room"
              className="rounded-lg shadow-md mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-xl font-bold text-[#8D6944] mb-2">
              Enterprise Server Solutions
            </h2>
            <p className="text-gray-700 mb-2">
              We design, deploy, and manage enterprise-grade servers tailored to
              your business needs. Our solutions ensure high performance,
              reliability, and scalability for mission-critical applications.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Rack & tower server installation</li>
              <li>Virtualization & cloud integration</li>
              <li>24/7 monitoring & support</li>
            </ul>
          </div>
          <div>
            <img
              src="/sliders/storage.jpg"
              alt="Data Storage"
              className="rounded-lg shadow-md mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-xl font-bold text-[#8D6944] mb-2">
              Advanced Storage Solutions
            </h2>
            <p className="text-gray-700 mb-2">
              Secure your data with our advanced storage systems, including SAN,
              NAS, and cloud storage. We help you scale storage as your business
              grows, ensuring data integrity and accessibility.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>On-premises & cloud storage</li>
              <li>Data migration & consolidation</li>
              <li>Redundant storage architecture</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/sliders/backup.jpg"
              alt="Backup Solutions"
              className="rounded-lg shadow-md mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-xl font-bold text-[#8D6944] mb-2">
              Comprehensive Backup & Recovery
            </h2>
            <p className="text-gray-700 mb-2">
              Protect your business from data loss with automated backup and
              disaster recovery solutions. We implement robust strategies to
              ensure your data is safe and quickly recoverable in any scenario.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Automated daily backups</li>
              <li>Offsite & cloud backup options</li>
              <li>Rapid disaster recovery planning</li>
            </ul>
          </div>
          <div>
            <img
              src="/sliders/security.jpg"
              alt="Data Security"
              className="rounded-lg shadow-md mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-xl font-bold text-[#8D6944] mb-2">
              Data Security & Compliance
            </h2>
            <p className="text-gray-700 mb-2">
              Our solutions are designed with security and compliance in mind.
              We help you meet industry standards and protect sensitive
              information from threats and breaches.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>End-to-end encryption</li>
              <li>Access control & auditing</li>
              <li>Regulatory compliance (GDPR, HIPAA, etc.)</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#F7F2EE] rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-bold text-blue-700 mb-2">
            Why Choose iMush Data Center?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>
              Expert team with years of experience in server and storage
              solutions
            </li>
            <li>Custom solutions for businesses of all sizes</li>
            <li>Proactive support and monitoring</li>
            <li>Competitive pricing and flexible packages</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Contact us today to discuss your server, storage, and backup needs.
            We ensure your data is protected, accessible, and secure—so you can
            focus on growing your business.
          </p>
        </div>
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
