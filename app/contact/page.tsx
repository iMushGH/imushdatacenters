import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | iMush Data Center",
  description:
    "Get in touch with iMush Data Center for CCTV, networking, telephone systems, and IT solutions.",
  openGraph: {
    title: "Contact | iMush Data Center",
    description:
      "Get in touch with iMush Data Center for CCTV, networking, telephone systems, and IT solutions.",
    url: "https://imushdatacenter.com/contact",
  },
};

export default function ContactPage() {
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
      <ContactForm />
    </main>
  );
}
