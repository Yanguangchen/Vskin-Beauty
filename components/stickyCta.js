"use client";

import React from "react";
import styles from "./stickyCta.module.css";

const WA = "https://wa.me/6598807382";
const MSG =
  "Hi VSkin, I want a face analysis / suitability check. What’s the next available slot?";

export default function StickyCta() {
  return (
    <nav className={styles.bar} aria-label="Quick booking">
      <a
        className={`${styles.btn} ${styles.primary}`}
        href={`${WA}?text=${encodeURIComponent(MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Face analysis (WhatsApp)
      </a>
      <a className={`${styles.btn} ${styles.secondary}`} href="#beauty-concierge">
        Pre-qualify quiz
      </a>
    </nav>
  );
}
