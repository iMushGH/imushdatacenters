import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | iMush Data Center",
  description:
    "Learn about iMush Data Center — our mission, leadership and services for CCTV, networking and IT solutions.",
  openGraph: {
    title: "About | iMush Data Center",
    description:
      "Learn about iMush Data Center — our mission, leadership and services for CCTV, networking and IT solutions.",
    url: "https://imushdatacenter.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
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
          About
        </h1>
      </section>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            marginBottom: 32,
          }}
        >
          <img
            src="/ceo.jpg"
            alt="CEO"
            style={{
              width: 160,
              height: 160,
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 2px 12px rgba(46,36,25,0.10)",
            }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#2E2419" }}>
              Mushnan Hassan
            </div>
            <div style={{ fontSize: 16, color: "#8D6944", marginTop: 4 }}>
              Chief Executive Officer
            </div>
            <div
              style={{
                fontSize: 15,
                color: "#2E2419",
                marginTop: 10,
                maxWidth: 320,
              }}
            >
              Leading iMush Data Center with a vision for innovation and
              excellence in IT solutions.
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 24,
            color: "#2E2419",
          }}
        >
          About Our Company
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#2E2419" }}>
          At iMush Data Center, we are dedicated to providing comprehensive IT
          solutions tailored to meet the evolving needs of businesses and
          individuals. Our expertise spans a wide range of services, including
          advanced CCTV installations for robust security, professional
          networking solutions to ensure seamless connectivity, and modern
          telephone systems that keep you connected with the world. <br />
          <br />
          We pride ourselves on our ability to design, implement, and maintain
          cutting-edge technology infrastructures. Whether it's setting up
          secure surveillance systems, building reliable local and wide area
          networks, or deploying efficient communication platforms, our team
          combines technical know-how with a passion for innovation. <br />
          <br />
          In addition to our core offerings, we provide IT consulting, system
          integration, and ongoing support to help our clients stay ahead in a
          rapidly changing digital landscape. Our commitment to excellence,
          reliability, and customer satisfaction drives every project we
          undertake. <br />
          <br />
          Choose iMush Data Center for all your IT needs—where security,
          connectivity, and technology come together to empower your business
          and daily life.
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 24 }}>
          <a
            href="/services"
            style={{
              background: "#8D6944",
              color: "#fff",
              padding: "10px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 18,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(46,36,25,0.10)",
              transition: "background 0.2s",
            }}
          >
            View Our Services
          </a>
          <a
            href="/portfolio"
            style={{
              background: "#2E2419",
              color: "#fff",
              padding: "10px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 18,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(46,36,25,0.10)",
              transition: "background 0.2s",
            }}
          >
            View Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
