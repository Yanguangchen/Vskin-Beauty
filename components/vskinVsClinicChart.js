"use client";

import React from "react";
import chartStyles from "./vskinVsClinicChart.module.css";

const rows = [
  {
    label: "Delivery",
    vskin: "VJet pneumatic serum delivery — controlled pressure, no needles",
    clinic: "Often syringe- or device-first pathways",
  },
  {
    label: "Comfort & anxiety",
    vskin: "Designed for a gentler experience than needle-first approaches",
    clinic: "Needle anxiety is common where injections are the default",
  },
  {
    label: "Your plan",
    vskin: "We explain what each session is for — aligned to your goal",
    clinic: "Easy to end up with many unrelated add-ons",
  },
  {
    label: "Pricing clarity",
    vskin: "First-time trials from $158 where applicable; ask us anything twice",
    clinic: "Pricing and packages can be harder to compare up front",
  },
];

export default function VskinVsClinicChart() {
  return (
    <section
      style={{
        padding: "4rem 1.5rem 5rem",
        background: "linear-gradient(180deg, #f0f0f0 0%, #f8f5fc 45%, #f0f0f0 100%)",
      }}
      aria-labelledby="vskin-vs-clinic-heading"
    >
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <h2
          id="vskin-vs-clinic-heading"
          style={{
            textAlign: "center",
            fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
            fontWeight: "800",
            color: "#1a1a1a",
            marginBottom: "0.5rem",
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          VSkin vs typical aesthetic clinic
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#444",
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "2.25rem",
            maxWidth: "36rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          A simple side-by-side view of what we optimise for — so you can decide
          with less noise.
        </p>

        <div
          style={{
            borderRadius: "1.25rem",
            overflow: "hidden",
            boxShadow:
              "12px 12px 28px rgba(0,0,0,0.12), -8px -8px 24px rgba(255,255,255,0.85)",
            border: "1px solid rgba(101, 45, 144, 0.12)",
          }}
        >
        <div
          className={chartStyles.chartGrid}
          style={{
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
            <div
              style={{
                padding: "0.85rem 1rem",
                fontWeight: "700",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#555",
                background: "linear-gradient(180deg, #ece8f2 0%, #e4dfea 100%)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              Topic
            </div>
            <div
              style={{
                padding: "0.85rem 1rem",
                fontWeight: "800",
                fontSize: "0.82rem",
                color: "#fff",
                background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                textAlign: "center",
              }}
            >
              VSkin (VJet)
            </div>
            <div
              style={{
                padding: "0.85rem 1rem",
                fontWeight: "800",
                fontSize: "0.82rem",
                color: "#2a2a2a",
                background: "linear-gradient(180deg, #f5f5f5 0%, #ebebeb 100%)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              Typical aesthetic clinic
            </div>

            {rows.map((row, i) => (
              <React.Fragment key={row.label}>
                <div
                  style={{
                    padding: "1rem",
                    fontWeight: "700",
                    fontSize: "0.88rem",
                    color: "#40215C",
                    background: i % 2 === 0 ? "#faf8fc" : "#f3f0f8",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    padding: "1rem",
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                    color: "#1f1f1f",
                    background: i % 2 === 0 ? "#ffffff" : "#faf7ff",
                    borderBottom: "1px solid rgba(101, 45, 144, 0.08)",
                  }}
                >
                  {row.vskin}
                </div>
                <div
                  style={{
                    padding: "1rem",
                    fontSize: "0.92rem",
                    lineHeight: 1.55,
                    color: "#444",
                    background: i % 2 === 0 ? "#f9f9f9" : "#f3f3f3",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {row.clinic}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
