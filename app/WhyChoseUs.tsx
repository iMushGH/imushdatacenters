import React from "react";

const WhyChoseUs = () => {
  // component logic here
  return (
    <section className="w-full max-w-[1180px] mx-auto mt-12 p-4">
      <div
        className="flex flex-col md:flex-row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 32,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(46,36,25,0.10)",
          padding: "32px 24px",
          marginBottom: 38,
        }}
      >
        <div
          style={{
            flex: 1,
            paddingRight: 18,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              color: "#2E2419",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Why Choose Us
          </h3>
          <ul
            style={{
              color: "#2E2419",
              fontSize: 18,
              lineHeight: 1.7,
              paddingLeft: 18,
            }}
          >
            <li>Expert team with years of IT experience</li>
            <li>Reliable and innovative solutions</li>
            <li>Fast response and customer support</li>
            <li>Comprehensive services: CCTV, networking, telephony, IT</li>
            <li>Proven track record and client satisfaction</li>
          </ul>
        </div>
        <div
          style={{
            flex: 1,
            paddingLeft: 18,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              color: "#2E2419",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Request Call Back
          </h3>
          <form
            className="text-gray-600"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #8D6944",
                fontSize: 16,
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              style={{
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #8D6944",
                fontSize: 16,
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #8D6944",
                fontSize: 16,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#8D6944",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
                border: "none",
                borderRadius: 8,
                padding: "12px 0",
                marginTop: 8,
                cursor: "pointer",
              }}
            >
              Request Call Back
            </button>
          </form>
        </div>
      </div>
      ;
    </section>
  );
};
export default WhyChoseUs;
