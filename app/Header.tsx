"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="w-full border-b bg-[#F7F2EE] sticky top-0 z-50 header-shadow border-b-amber-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-green-700 dark:text-green-400"
        >
          <img src="/logo/logo.png" alt="iMush data center" className="h-24" />
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            if (item.label === "Services") {
              return (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={
                      `font-bold transition-colors px-2 py-1 rounded flex items-center gap-2 ` +
                      (isActive
                        ? "bg-[#8D6944] text-[#8D6944] dark:text-[#ffffff] shadow"
                        : "text-gray-700 dark:text-[#8D6944] hover:text-[#8D6944] dark:hover:text-[rgb(212,196,179)]")
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="service-dropdown absolute left-0 top-full min-w-[260px] bg-white shadow-xl rounded-lg z-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 border border-gray-100">
                    {serviceMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-3 text-gray-700 hover:bg-[#F3F2F1] hover:text-[#8D6944] font-semibold text-sm border-b last:border-b-0 border-gray-100 transition-colors"
                        onClick={() => setServiceDropdownOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={
                  `font-bold transition-colors px-2 py-1 rounded ` +
                  (isActive
                    ? "bg-[#8D6944] text-[#8D6944] dark:text-[#ffffff] shadow"
                    : "text-gray-700 dark:text-[#8D6944] hover:text-[#8D6944] dark:hover:text-[rgb(212,196,179)]")
                }
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-[#8D6944]"></span>
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-[#8D6944]"></span>
          <span className="block w-6 h-0.5 bg-gray-700 dark:bg-[#8D6944]"></span>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu-transition${open ? " open" : ""}`}>
        <nav className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 px-4 pb-4">
          <ul className="flex flex-col gap-4 mt-2">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              if (item.label === "Services") {
                return (
                  <li key={item.label} className="relative">
                    <button
                      className={
                        `font-medium transition-colors px-2 py-1 rounded w-full text-left flex items-center gap-2 ` +
                        (isActive
                          ? "bg-[#8D6944] text-[#8D6944] dark:text-[#ffffff] shadow"
                          : "text-gray-700 dark:text-[#8D6944] hover:text-[#8D6944] dark:hover:text-[rgb(212,196,179)]")
                      }
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setServiceDropdownOpen((v) => !v)}
                    >
                      {item.label}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    {serviceDropdownOpen && (
                      <div className="service-dropdown-mobile static w-full bg-white shadow-xl rounded-lg z-40 border border-gray-100 mt-2">
                        {serviceMenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-[#F3F2F1] hover:text-[#8D6944] font-semibold text-sm border-b last:border-b-0 border-gray-100 transition-colors"
                            onClick={() => {
                              setOpen(false);
                              setServiceDropdownOpen(false);
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      `block font-medium transition-colors px-2 py-1 rounded ` +
                      (isActive
                        ? "bg-[#8D6944] text-[#8D6944] dark:text-[#ffffff] shadow"
                        : "text-gray-700 dark:text-[#8D6944] hover:text-[#8D6944] dark:hover:text-[rgb(212,196,179)]")
                    }
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header-shadow {
          box-shadow: 0 4px 18px rgba(141, 105, 68, 0.13);
        }
        .dropdown-arrow {
          font-size: 0.8em;
          margin-left: 4px;
          transition: transform 0.2s;
        }
        .group:hover .dropdown-arrow,
        .group:focus-within .dropdown-arrow {
          transform: rotate(180deg);
        }
        .group:hover .service-dropdown,
        .group:focus-within .service-dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .service-dropdown {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 0.2s, transform 0.2s;
          background: linear-gradient(180deg, #fff 90%, #f3f2f1 100%);
        }
        .service-dropdown-mobile {
          position: static;
          width: 100%;
          background: linear-gradient(180deg, #fff 90%, #f3f2f1 100%);
          box-shadow: 0 6px 24px rgba(141, 105, 68, 0.18);
          left: 0;
          right: 0;
        }
        .service-dropdown a,
        .service-dropdown-mobile a {
          border-radius: 0;
        }
        .service-dropdown a:hover,
        .service-dropdown-mobile a:hover {
          background: #e2c9a7;
          color: #8d6944;
        }
        .service-dropdown a.active,
        .service-dropdown-mobile a.active {
          background: #8d6944;
          color: #fff;
        }
        .header-shadow.sticky {
          position: sticky;
          top: 0;
          animation: stickyFadeIn 0.4s;
        }
        @keyframes stickyFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .logo-animate:active {
          animation: logoBounce 0.5s;
        }
        @keyframes logoBounce {
          0% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.1) rotate(-8deg);
          }
          60% {
            transform: scale(0.95) rotate(8deg);
          }
          100% {
            transform: scale(1);
          }
        }
        .mobile-menu-transition {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
            opacity 0.3s;
        }
        .mobile-menu-transition.open {
          max-height: 600px;
          opacity: 1;
        }
      `}</style>
    </header>
  );
}
