"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceMenu = [
  { label: "Web Design Solutions", href: "/our-services/web-design-solutions" },
  {
    label: "Data Center Solutions",
    href: "/our-services/data-center-solutions",
  },
  {
    label: "Video Surveillance Systems",
    href: "/our-services/video-surveillance-systems",
  },
  {
    label: "Server, Storage & Backup Solutions",
    href: "/our-services/server-storage-backup-solutions",
  },
  {
    label: "IT Infrastructure Management",
    href: "/our-services/it-infrastructure-management",
  },
  {
    label: "Enterprise Networking Solutions",
    href: "/our-services/enterprise-networking-solutions",
  },
  {
    label: "Unified Communication Systems",
    href: "/our-services/unified-communication-systems",
  },
  {
    label: "Structured Cabling Services",
    href: "/our-services/structured-cabling-services",
  },
];

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Only show banner on /our-services, not on nested routes
  const isRootServices = pathname === "/our-services";
  return (
    <main>
      {isRootServices && (
        <div className="services-banner">
          <div className="banner-overlay"></div>
          <h1 className="banner-title">Our Services</h1>
        </div>
      )}
      <div>{children}</div>
      <style jsx>{`
        .services-banner {
          position: relative;
          width: 100%;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("/sliders/server.jpg");
          background-size: cover;
          background-position: center;
          margin-bottom: 32px;
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
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 2px;
          text-shadow: 0 2px 12px rgba(46, 36, 25, 0.18);
        }
        .service-submenu {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin: 32px auto 24px auto;
          justify-content: center;
        }
        .submenu-link {
          background: #f3f2f1;
          color: #2e2419;
          border-radius: 8px;
          padding: 8px 18px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(46, 36, 25, 0.08);
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .submenu-link:hover {
          background: #e2c9a7;
          color: #8d6944;
          box-shadow: 0 4px 16px rgba(141, 105, 68, 0.12);
        }
        .submenu-link.active {
          background: #8d6944;
          color: #fff;
          box-shadow: 0 4px 16px rgba(141, 105, 68, 0.18);
        }
      `}</style>
    </main>
  );
}
