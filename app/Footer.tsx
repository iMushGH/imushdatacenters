"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
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
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
      </div>
    </footer>
  );
}
