"use client";

import React from "react";
import styles from "./sectionCta.module.css";

const WA = "https://wa.me/6598807382";

export default function SectionCta({
  primaryLabel = "Get your face analysis now",
  primaryMessage = "Hi VSkin, I want to book a face analysis. What slots do you have?",
  showQuiz = true,
}) {
  const href = `${WA}?text=${encodeURIComponent(primaryMessage)}`;
  return (
    <div className={styles.bar}>
      <a className={`${styles.link} ${styles.primary}`} href={href} target="_blank" rel="noopener noreferrer">
        {primaryLabel}
      </a>
      {showQuiz ? (
        <a className={`${styles.link} ${styles.secondary}`} href="#beauty-concierge">
          Check if you’re suitable
        </a>
      ) : null}
    </div>
  );
}
