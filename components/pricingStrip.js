import React from "react";
import styles from "./pricingStrip.module.css";
import { PRICING_STRIP } from "../lib/pricingStrip";

export default function PricingStrip() {
  return (
    <section id="starting-prices" className={styles.wrap} aria-labelledby="pricing-strip-heading">
      <h2 id="pricing-strip-heading" className={styles.title}>
        Starting prices (transparent entry)
      </h2>
      <p className={styles.sub}>
        Final quotes are always personalised—use this as orientation, not a
        contract menu.
      </p>
      <ul className={styles.list}>
        {PRICING_STRIP.map((row) => (
          <li key={row.label} className={styles.item}>
            <span className={styles.label}>{row.label}</span>
            <span className={styles.detail}>{row.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
