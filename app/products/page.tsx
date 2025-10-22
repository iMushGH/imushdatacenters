import Link from "next/link";
import fs from "fs";
import path from "path";

function readProducts() {
  const p = path.join(process.cwd(), "data", "products.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf8") || "{}");
}

export default function ProductsPage() {
  const products = readProducts();
  const list = Object.values(products as any) as Array<any>;
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: 36, color: "#2E2419", marginBottom: 16 }}>
        Products
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {list.map((p) => (
          <article
            key={p.slug}
            style={{
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              overflow: "hidden",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#2E2419" }}>
                {p.title}
              </h3>
              <p style={{ margin: 0, color: "#666" }}>{p.short}</p>
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <Link
                  href={`/products/${p.slug}`}
                  style={{
                    background: "#8D6944",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: 6,
                    textDecoration: "none",
                  }}
                >
                  View
                </Link>
                <Link
                  href="/contact"
                  style={{
                    background: "#2E2419",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: 6,
                    textDecoration: "none",
                  }}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
