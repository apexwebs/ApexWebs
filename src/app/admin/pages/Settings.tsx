import React from "react";
import React, { useState, useEffect } from "react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Load current settings from backend
    fetch("/api/admin-settings")
      .then(res => res.json())
      .then(data => {
        setEmail(data.email || "");
        setPhone(data.phone || "");
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/admin-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, password }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Settings saved successfully.");
        setPassword("");
      } else {
        setError(data.error || "Failed to save settings.");
      }
    } catch (err) {
      setError("Failed to save settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-bg flex items-center justify-center min-h-screen">
      <div className="admin-card w-full max-w-md p-8">
        <h1 className="admin-title mb-4">Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Admin Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Admin Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="0700000000"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Change Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="New password"
            />
          </div>
          {success && <div className="text-green-600 text-sm">{success}</div>}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Settings"}
          </button>
        </form>
      </div>
    </div>
  );
}
