"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        // fallback to mail client if API missing or returns error
        window.location.href = `mailto:info@imushdatacenter.com?subject=Newsletter%20Signup&body=Please%20subscribe%20${encodeURIComponent(
          email
        )}`;
        setStatus("sent");
      }
    } catch (err) {
      // fallback to mail client
      window.location.href = `mailto:info@imushdatacenter.com?subject=Newsletter%20Signup&body=Please%20subscribe%20${encodeURIComponent(
        email
      )}`;
      setStatus("sent");
    }
  };

  return (
    <div className="flex flex-row items-center">
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "transparent",
            color: "#fff",
            minWidth: 180,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            background: "#8D6944",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: 6,
            cursor: status === "loading" ? "wait" : "pointer",
            fontWeight: 700,
          }}
        >
          {status === "loading" ? "Sending..." : "Subscribe"}
        </button>
      </form>
      <div style={{ marginTop: 8, fontSize: 13, opacity: 0.9 }}>
        {status === "sent" && <span>Thanks — check your inbox.</span>}
        {status === "error" && <span>Please enter a valid email.</span>}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="flex flex-col"
      style={{
        width: "100%",
        background: "#2E2419",
        color: "#fff",
        padding: "40px 0 18px 0",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: 1,
        marginTop: 48,
        boxShadow: "0 -2px 12px rgba(46,36,25,0.10)",
        borderTop: "4px solid #8D6944",
      }}
    >
      <div
        className="flex flex-start"
        style={{ maxWidth: 1100, margin: "0 auto", gap: 48 }}
      >
        <div
          className="flex flex-col"
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            gap: 24,
            flexWrap: "wrap",
            margin: 18,
          }}
        >
          {/* Logo */}
          <div style={{ minWidth: 160, textAlign: "left" }}>
            <a href="/" aria-label="iMush Data Center home">
              <img
                src="/logo/logo.png"
                alt="iMush Data Center"
                style={{ width: 140 }}
              />
            </a>
          </div>

          {/* Newsletter signup */}
          <div style={{ minWidth: 260, textAlign: "left" }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Newsletter</div>
            <NewsletterForm />
          </div>
          <div
            style={{
              marginBottom: 18,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 18,
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#fff",
                fontSize: 28,
                //   verticalAlign: "middle",
              }}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#fff",
                fontSize: 28,
                //   verticalAlign: "middle",
              }}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#fff",
                fontSize: 28,
                //   verticalAlign: "middle",
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <div style={{ minWidth: 180, textAlign: "left" }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Services</div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: 1.9,
              }}
            >
              <li>
                <a
                  href="/our-services/data-center-solutions"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Data Center Solutions
                </a>
              </li>
              <li>
                <a
                  href="/our-services/enterprise-networking-solutions"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Enterprise Networking
                </a>
              </li>
              <li>
                <a
                  href="/our-services/it-infrastructure-management"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  IT Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="/our-services/server-storage-backup-solutions"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Server, Storage & Backup
                </a>
              </li>
              <li>
                <a
                  href="/our-services/structured-cabling-services"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Structured Cabling
                </a>
              </li>
              <li>
                <a
                  href="/our-services/unified-communication-systems"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Unified Communications
                </a>
              </li>
              <li>
                <a
                  href="/our-services/video-surveillance-systems"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Video Surveillance
                </a>
              </li>
              <li>
                <a
                  href="/our-services/web-design-solutions"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Web Design Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ minWidth: 220, textAlign: "left" }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Contact</div>
          <div style={{ fontSize: 14, lineHeight: 1.7 }}>
            <div>
              <strong>Address:</strong> Oku Street, Accra Ghana
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@imushdatacenter.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                info@imushdatacenter.com
              </a>
              <br />
              <a
                href="mailto:support@imushdatacenter.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                support@imushdatacenter.com
              </a>
            </div>
            <div style={{ marginTop: 6 }}>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+233544955728"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                +233 544 955 728
              </a>
              <br />
              <a
                href="tel:+233242739374"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                +233 242 739 374
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 8, fontSize: 15, opacity: 0.95 }}>
        &copy; {new Date().getFullYear()} iMush Data Center. All rights
        reserved.
      </div>
      <div style={{ fontSize: 14, opacity: 0.85 }}>
        Built with Next.js &amp; React | Contact:{" "}
        <a
          href="mailto:info@imushdatacenter.com"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          info@imushdatacenter.com
        </a>
      </div>
    </footer>
  );
}
