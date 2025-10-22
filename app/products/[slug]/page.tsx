// "use client";
import fs from "fs";
import path from "path";
import React from "react";

type Props = {
  params: { slug: string };
};

function readProducts() {
  const p = path.join(process.cwd(), "data", "products.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf8") || "{}");
}

export default function ProductPage({ params }: Props) {
  const slug = params.slug;
  const products = readProducts();
  const product = (products as any)[slug];

  if (!product) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Product not found</h1>
      </main>
    );
  }

  const features: string[] = Array.isArray(product.features)
    ? product.features
    : [];

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: 420,
            maxWidth: "100%",
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, color: "#2E2419" }}>{product.title}</h1>
          <p style={{ color: "#8D6944", marginTop: 6 }}>{product.price}</p>
          <p style={{ marginTop: 12, lineHeight: 1.7 }}>
            {product.description}
          </p>
          <ul style={{ marginTop: 12 }}>
            {features.map((f) => (
              <li key={f} style={{ marginBottom: 6 }}>
                {f}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
            <a
              href="/contact"
              style={{
                background: "#8D6944",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Request Quote
            </a>
            <a
              href="/portfolio"
              style={{
                background: "#2E2419",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Installations
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
