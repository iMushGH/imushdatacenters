"use client";
import React, { useEffect, useState, useRef } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const pollingRef = useRef<number | null>(null as unknown as number | null);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/contact");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  useEffect(() => {
    fetchMessages();
    pollingRef.current = window.setInterval(fetchMessages, 5000);
    return () => {
      if (pollingRef.current) window.clearInterval(pollingRef.current);
    };
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name || !email || !text)
      return alert("Please fill name, email and message.");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });
      if (res.ok) {
        setText("");
        await fetchMessages();
      } else {
        const err = await res.json();
        alert(err?.error || "Failed to send");
      }
    } catch (err) {
      console.error("Send error", err);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      {/* Floating button */}
      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open chat"
          style={{
            background: "#2E2419",
            color: "#fff",
            borderRadius: 999,
            width: 56,
            height: 56,
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          {open ? "×" : "Chat"}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: 20,
            bottom: 90,
            width: 360,
            maxWidth: "calc(100% - 40px)",
            height: 480,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: 12,
              borderBottom: "1px solid #eee",
              background: "#f7f7f7",
            }}
          >
            <strong>Live Chat</strong>
            <div style={{ fontSize: 12, color: "#666" }}>
              We typically reply within 24 hours
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              background: "#fafafa",
            }}
          >
            {messages.length === 0 && (
              <div style={{ color: "#666" }}>No messages yet.</div>
            )}
            {messages.map((m) => (
              <div key={m.id} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>
                  {m.name}{" "}
                  <span
                    style={{ fontWeight: 400, color: "#999", fontSize: 12 }}
                  >
                    · {new Date(m.created_at).toLocaleString()}
                  </span>
                </div>
                <div style={{ marginTop: 4 }}>{m.message}</div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSend}
            style={{ padding: 12, borderTop: "1px solid #eee" }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              style={{ width: "100%", padding: "8px", marginBottom: 8 }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              style={{ width: "100%", padding: "8px", marginBottom: 8 }}
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message"
              rows={3}
              style={{ width: "100%", padding: "8px", marginBottom: 8 }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#2E2419",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                }}
              >
                Send
              </button>
              <button
                type="button"
                onClick={() => {
                  setText("");
                }}
                style={{
                  padding: "10px",
                  background: "#eee",
                  border: "none",
                  borderRadius: 6,
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
