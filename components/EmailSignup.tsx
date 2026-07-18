"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setMessage("You're on the list! We'll notify you when we launch.");
    setEmail("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === "success" ? (
        <div
          className="glass rounded-2xl p-5 text-center"
          style={{ border: "1px solid rgba(0,184,148,0.4)" }}
        >
          <div className="text-4xl mb-2">🎧</div>
          <p className="text-teal-400 font-semibold text-sm">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email address"
              disabled={status === "loading"}
              className="input-glow w-full glass rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 transition-all duration-300 disabled:opacity-50"
              style={{
                border: status === "error"
                  ? "1px solid rgba(255,100,100,0.5)"
                  : "1px solid rgba(0,212,255,0.2)",
              }}
            />
            {status === "error" && (
              <p className="absolute -bottom-5 left-1 text-xs text-red-400">{message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="relative overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #00b894 100%)",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
            }}
          >
            <span className="relative z-10">
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </span>
              ) : (
                "Notify Me"
              )}
            </span>
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #00b894 0%, #00d4ff 100%)" }}
            />
          </button>
        </form>
      )}
    </div>
  );
}
