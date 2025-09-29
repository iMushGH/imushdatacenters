"use client";
import React from "react";
import { FaSitemap } from "react-icons/fa";

export default function EnterpriseNetworkingSolutions() {
  return (
    <section className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <FaSitemap size={48} color="#8D6944" />
        <h1 className="text-2xl font-bold text-blue-700">
          Enterprise Networking Solutions
        </h1>
      </div>
      <p className="text-gray-700 mb-4 font-medium">
        We provide efficient and reliable enterprise networking solutions,
        including network architecture, scalability, and security.
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Network architecture design</li>
        <li>Scalable solutions</li>
        <li>Enterprise security</li>
        <li>Performance optimization</li>
      </ul>
    </section>
  );
}
