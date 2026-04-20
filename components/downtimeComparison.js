import React from "react";
import styles from "./downtimeComparison.module.css";

const CATEGORIES = [
  {
    key: "social",
    label: "Return to work / dinner plans (typical goal)",
    typicalLabel: "Injectables day (bruise / swell risk)",
    typicalPct: 55,
    vskinLabel: "Needle-free VJet facial / sculpt day",
    vskinPct: 10,
  },
  {
    key: "event",
    label: "Camera-ready buffer before a major event",
    typicalLabel: "Stronger laser or ablative-style window",
    typicalPct: 90,
    vskinLabel: "VJet course pacing (non-ablative lane)",
    vskinPct: 18,
  },
  {
    key: "comfort",
    label: "Comfort-first clients (low pain threshold)",
    typicalLabel: "Surgical or invasive alternatives",
    typicalPct: 100,
    vskinLabel: "Non-invasive VJet delivery",
    vskinPct: 12,
  },
];

export default function DowntimeComparison() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>
        Social downtime: VSkin needle-free vs typical aesthetic lanes
      </h3>
      <p className={styles.sub}>
        Bars are <strong>relative</strong> (not days on a calendar). Shorter = less
        social interruption we aim for with needle-free protocols. Your therapist
        sets real expectations for <em>your</em> skin and programme.
      </p>

      <div className={styles.gridHead}>
        <span />
        <span className={styles.colHead}>Typical aesthetic clinic range</span>
        <span className={styles.colHeadV}>VSkin needle-free goal</span>
      </div>

      <div className={styles.categories}>
        {CATEGORIES.map((c) => (
          <div key={c.key} className={styles.cat}>
            <p className={styles.catTitle}>{c.label}</p>
            <div className={styles.pair}>
              <div>
                <p className={styles.micro}>{c.typicalLabel}</p>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${styles.typical}`}
                    style={{ width: `${c.typicalPct}%` }}
                  />
                </div>
              </div>
              <div>
                <p className={styles.micro}>{c.vskinLabel}</p>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${styles.vskin}`}
                    style={{ width: `${c.vskinPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Illustrative comparison for marketing context only—not a medical claim,
        not a substitute for informed consent, and not statistically derived from
        your patient charts. Injectable, laser, and surgical recovery vary by
        technique and individual.
      </p>
    </div>
  );
}
