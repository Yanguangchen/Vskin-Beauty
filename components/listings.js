import React from "react";
import styles from "./listings.module.css";

const WA = "https://wa.me/6598807382?text=Hi%20VSkin%2C%20I%27d%20like%20to%20book%20or%20ask%20about%20treatments.";

function BarRow({ label, typicalPct, vskinPct }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#555", margin: "0 0 0.35rem" }}>
        {label}
      </p>
      <p style={{ fontSize: "0.72rem", color: "#777", margin: "0 0 0.2rem" }}>Typical aesthetic range (illustrative)</p>
      <div
        style={{
          height: 10,
          borderRadius: 999,
          background: "#e5e7eb",
          overflow: "hidden",
          marginBottom: 6,
        }}
      >
        <div
          style={{
            width: `${typicalPct}%`,
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg,#94a3b8,#64748b)",
          }}
        />
      </div>
      <p style={{ fontSize: "0.72rem", color: "#777", margin: "0 0 0.2rem" }}>VSkin needle-free goal</p>
      <div style={{ height: 10, borderRadius: 999, background: "#e5e7eb", overflow: "hidden" }}>
        <div
          style={{
            width: `${vskinPct}%`,
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg,#a78bfa,#5b21b6)",
          }}
        />
      </div>
    </div>
  );
}

function Listings() {
  return (
    <div className={styles.videoContainer}>
      <h2 style={{ margin: "0 0 0.5rem", fontSize: "clamp(1.25rem, 3vw, 1.6rem)", color: "#333" }}>
        Why clients choose needle-free VJet
      </h2>
      <p style={{ maxWidth: "36rem", margin: "0 auto 1.25rem", lineHeight: 1.6, color: "#444", fontSize: "1rem" }}>
        Same Jurong team, same technology—clearer copy. We focus on{" "}
        <strong>less social downtime</strong> than many injectable or ablative-heavy
        lanes, while still being honest: your healing depends on your skin and the
        exact protocol.
      </p>

      <h3 style={{ fontSize: "1.05rem", color: "#652D90", margin: "1.5rem 0 0.75rem" }}>
        Social downtime (illustrative chart)
      </h3>
      <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.5, margin: "0 0 1rem" }}>
        Bars show <strong>relative</strong> interruption—not calendar days. Typical aesthetic
        ranges are general industry norms; VSkin reflects our needle-free positioning.
      </p>
      <BarRow label="Back to work / dinner the same day" typicalPct={55} vskinPct={12} />
      <BarRow label="Buffer before a major photo event" typicalPct={88} vskinPct={20} />
      <BarRow label="Comfort-first clients (low pain tolerance)" typicalPct={100} vskinPct={15} />
      <p style={{ fontSize: "0.72rem", color: "#888", fontStyle: "italic", lineHeight: 1.45, margin: "0 0 1.5rem" }}>
        Marketing illustration only—not a clinical study, not a guarantee of your
        recovery. Injectable bruising, laser downtime, and surgery recovery vary
        widely; confirm your personal plan during consultation.
      </p>

      <h3 style={{ fontSize: "1.05rem", color: "#652D90", margin: "0 0 0.75rem" }}>
        What to ask on WhatsApp
      </h3>
      <ul style={{ textAlign: "left", maxWidth: "32rem", margin: "0 auto 1.25rem", color: "#444", lineHeight: 1.6 }}>
        <li>First-time face or body trial from $158 (what is included today?)</li>
        <li>Fat melt vs facial sculpt vs tightening—which fits my goal first?</li>
        <li>How many sessions before I should judge progress?</li>
        <li>Reschedule or cancellation—what is your policy in one sentence?</li>
      </ul>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "0.5rem",
          padding: "0.85rem 1.75rem",
          borderRadius: 999,
          background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
          color: "#fff",
          fontWeight: 800,
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        WhatsApp 9880 7382 — book or ask
      </a>
    </div>
  );
}

export default Listings;
