"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error.");
    }
    setLoading(false);
  };

  return (
    <main className="text-gray-700">
      <section
        style={{
          width: "100%",
          height: "200px",
          background: `linear-gradient(90deg, rgba(46,36,25,0.7) 20%, rgba(46,36,25,0.7) 80%), url('/slider1.jpg') center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: 48,
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Contact
        </h1>
      </section>
      <div
        style={{
          maxWidth: 1100,
          margin: "-80px auto 0 auto",
          padding: "2rem",
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(46,36,25,0.08)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            flex: "1 1 350px",
            minWidth: 320,
            // padding: "2rem 1rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 18,
              color: "#2E2419",
            }}
          >
            Contact Us
          </h2>
          <div style={{ fontSize: 18, marginBottom: 18 }}>
            <p style={{ marginBottom: 10 }}>
              <strong>Address:</strong> Oku Street, Accra Ghana
            </p>
            <p style={{ marginBottom: 10 }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@imushdatacenter.com"
                style={{ color: "#0070f3" }}
              >
                info@imushdatacenter.com
              </a>{" "}
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@imushdatacenter.com"
                style={{ color: "#0070f3" }}
              >
                support@imushdatacenter.com
              </a>
            </p>
            <p style={{ marginBottom: 10 }}>
              <strong>Phone:</strong>{" "}
              <a href="tel:+233544955728" style={{ color: "#0070f3" }}>
                +233 544 955 728
              </a>{" "}
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+233242739374" style={{ color: "#0070f3" }}>
                +233 242 739 374
              </a>
            </p>
            {/* Social Media Links */}
            <hr className="my-4" />
            <div
              className="flex flex-row items-center"
              style={{ marginBottom: 10 }}
            >
              <strong>{<FaFacebook />}</strong>{" "}
              <a
                href="https://www.facebook.com/imushdatacenter/"
                style={{ color: "#0070f3" }}
                className="ml-2"
              >
                @imushdatacenter
              </a>{" "}
              <br />
            </div>
            <div
              className="flex flex-row items-center"
              style={{ marginBottom: 10 }}
            >
              <strong>{<FaInstagram />}</strong>{" "}
              <a
                href="https://www.instagram.com/imushdatacente/"
                style={{ color: "#0070f3" }}
                className="ml-2"
              >
                @imushdatacente
              </a>{" "}
              <br />
            </div>
            <div
              className="flex flex-row items-center"
              style={{ marginBottom: 10 }}
            >
              <strong>{<FaTiktok />}</strong>{" "}
              <a
                href="https://www.tiktok.com/@imushdatacenter"
                style={{ color: "#0070f3" }}
                className="ml-2"
              >
                @imushdatacenter
              </a>{" "}
              <br />
            </div>
          </div>
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(46,36,25,0.10)",
              marginTop: 10,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8857191857237!2d-0.20463008852949283!3d5.583905994373391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bb6b0b1a38f%3A0xb9ddab35a5dc3d9c!2siMush%20DataCenter%20%26%20Engineering%20Services!5e0!3m2!1sen!2sgh!4v1758152664420!5m2!1sen!2sgh"
              width="600"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          style={{
            flex: "1 1 350px",
            minWidth: 320,
            padding: "2rem 2rem 2rem 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#F3F2F1",
            borderRadius: 16,
          }}
        >
          <h3
            style={{
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 18,
              color: "#2E2419",
            }}
          >
            Send Us a Message
          </h3>
          <form
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              style={{
                padding: "14px 16px",
                borderRadius: 8,
                border: "1px solid #d1cfc9",
                fontSize: 16,
                background: "#fff",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              style={{
                padding: "14px 16px",
                borderRadius: 8,
                border: "1px solid #d1cfc9",
                fontSize: 16,
                background: "#fff",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{
                padding: "14px 16px",
                borderRadius: 8,
                border: "1px solid #d1cfc9",
                fontSize: 16,
                background: "#fff",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#8D6944",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "14px 0",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                opacity: loading ? 0.7 : 1,
                marginTop: 8,
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <div style={{ color: "green", marginTop: 8, fontWeight: 600 }}>
                {success}
              </div>
            )}
            {error && (
              <div style={{ color: "red", marginTop: 8, fontWeight: 600 }}>
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
