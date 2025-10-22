"use client";
import React, { useEffect, useState } from "react";

type Product = {
  slug: string;
  title: string;
  short?: string;
  description?: string;
  features?: string[];
  image?: string;
  price?: string;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Record<string, Product>>({});
  const [editing, setEditing] = useState<Product | null>(null);

  const load = async () => {
    const res = await fetch("/api/admin/products");
    const data = await res.json();
    setProducts(data.products || {});
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (p: Product) => {
    await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
    });
    setEditing(null);
    await load();
  };

  const remove = async (slug: string) => {
    if (!confirm("Delete product?")) return;
    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    await load();
  };

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
      <h1>Products Admin</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}
      >
        <div>
          <div style={{ display: "grid", gap: 12 }}>
            {Object.keys(products).length === 0 && <div>No products yet</div>}
            {Object.values(products).map((p) => (
              <div
                key={p.slug}
                style={{
                  padding: 12,
                  border: "1px solid #eee",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>{p.slug}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setEditing(p)}>Edit</button>
                  <button
                    onClick={() => remove(p.slug)}
                    style={{ color: "red" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div
            style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}
          >
            <h3>{editing ? "Edit Product" : "New Product"}</h3>
            <ProductForm
              product={editing}
              onSave={save}
              onCancel={() => setEditing(null)}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}

function ProductForm({
  product,
  onSave,
  onCancel,
}: {
  product: Product | null;
  onSave: (p: Product) => Promise<void>;
  onCancel: () => void;
}) {
  const [p, setP] = useState<Product>(product || { slug: "", title: "" });

  useEffect(() => {
    setP(product || { slug: "", title: "" });
  }, [product]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(p);
      }}
      style={{ display: "grid", gap: 8 }}
    >
      <label>Slug</label>
      <input
        value={p.slug}
        onChange={(e) => setP({ ...p, slug: e.target.value })}
        required
      />

      <label>Title</label>
      <input
        value={p.title}
        onChange={(e) => setP({ ...p, title: e.target.value })}
        required
      />

      <label>Short</label>
      <input
        value={p.short || ""}
        onChange={(e) => setP({ ...p, short: e.target.value })}
      />

      <label>Image (public path)</label>
      <input
        value={p.image || ""}
        onChange={(e) => setP({ ...p, image: e.target.value })}
        placeholder="/products/door_bell.jpg"
      />

      <label>Price</label>
      <input
        value={p.price || ""}
        onChange={(e) => setP({ ...p, price: e.target.value })}
      />

      <label>Description</label>
      <textarea
        value={p.description || ""}
        onChange={(e) => setP({ ...p, description: e.target.value })}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="submit"
          style={{ background: "#2E2419", color: "#fff", padding: "8px 12px" }}
        >
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
