import React from "react";
import Link from "next/link";
import styles from "./listings.module.css";
import {
  CATEGORY_MAP,
  MENU_ITEMS,
  TOTAL_ITEMS,
  TRIAL_PRICE_FROM,
  displayName,
  formatPrice,
  priceLabel,
} from "../lib/menuData";

/* A handful of first-trial prices as a taster for the full menu. */
const HIGHLIGHT_IDS = [
  "lifting-trial-face",
  "facial-trial",
  "slim-trial-fatmelt",
  "acne-vjet-trial",
  "renewal-trial-05",
  "collagen-trial-nose",
];

const highlights = HIGHLIGHT_IDS.map((id) =>
  MENU_ITEMS.find((item) => item.id === id)
).filter(Boolean);

function Listings() {
  return (
    <section className={styles.section} aria-labelledby="price-teaser-title">
      <p className={styles.kicker}>Price List</p>
      <h2 id="price-teaser-title" className={styles.title}>
        Transparent pricing, no surprises
      </h2>
      <p className={styles.text}>
        {TOTAL_ITEMS} treatments, packages and products — all priced on one
        page, with first trials from {formatPrice(TRIAL_PRICE_FROM)}. Here are a
        few to start with.
      </p>

      <ul className={styles.grid}>
        {highlights.map((item) => (
          <li key={item.id} className={styles.card}>
            <span className={styles.cardCategory}>
              {CATEGORY_MAP[item.category].name}
            </span>
            <span className={styles.cardName}>{displayName(item)}</span>
            {item.detail && (
              <span className={styles.cardDetail}>{item.detail}</span>
            )}
            <span className={styles.cardPrice}>{priceLabel(item)}</span>
            <span className={styles.cardTag}>First Trial</span>
          </li>
        ))}
      </ul>

      <Link href="/listings" className={styles.button}>
        View the full menu
      </Link>
      <p className={styles.note}>
        Search and filter every treatment, package and product — consultation is
        free.
      </p>
    </section>
  );
}

export default Listings;
