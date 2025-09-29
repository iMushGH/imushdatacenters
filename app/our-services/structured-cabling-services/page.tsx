"use client";
import React from "react";
import { FaEthernet } from "react-icons/fa";

export default function StructuredCablingServices() {
  return (
    <section className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <FaEthernet size={48} color="#8D6944" />
        <h1 className="text-2xl font-bold text-blue-700">
          Structured Cabling Services
        </h1>
      </div>
      <p className="text-gray-700 mb-4 font-medium">
        We offer custom structured cabling solutions for all needs, including
        design, installation, and maintenance for reliable connectivity.
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Cabling design & installation</li>
        <li>Testing & certification</li>
        <li>Maintenance & troubleshooting</li>
        <li>Upgrades & expansion</li>
      </ul>
    </section>
  );
}
