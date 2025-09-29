"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Services from "../components/Services";

export default function OurServicesHome() {
  return (
    <section style={{ textAlign: "center", marginTop: 48 }}>
      <Services />
    </section>
  );
}
