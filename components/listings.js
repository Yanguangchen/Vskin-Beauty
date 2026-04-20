import React from "react";
import Link from "next/link";
import styles from "./listings.module.css";
import { CONCERNS } from "../lib/treatmentsData";

function Listings() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Treatments by concern</p>
        <h1 className={styles.title}>Choose what you want to feel—not jargon</h1>
        <p className={styles.lead}>
          VSkin Beauty & Slimming is your Jurong-based beauty concierge: we
          match goals to needle-free, non-invasive protocols and explain pricing
          upfront. Use the quick links or scroll for the concern that sounds like
          you.
        </p>
      </header>

      <p className={styles.jumpLabel}>Jump to a concern</p>
      <nav className={styles.jumpRow} aria-label="Treatment concerns">
        {CONCERNS.map((c) => (
          <a key={c.id} className={styles.jumpLink} href={`#concern-${c.id}`}>
            {c.title}
          </a>
        ))}
      </nav>

      {CONCERNS.map((concern) => (
        <section
          key={concern.id}
          id={`concern-${concern.id}`}
          className={styles.concernBlock}
          aria-labelledby={`heading-${concern.id}`}
        >
          <h2 id={`heading-${concern.id}`} className={styles.concernTitle}>
            {concern.title}
          </h2>
          <p className={styles.concernTagline}>{concern.tagline}</p>
          <div className={styles.serviceList}>
            {concern.services.map((s) => (
              <article key={s.name} className={styles.serviceCard}>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceBenefit}>{s.benefit}</p>
                <p className={styles.serviceNote}>{s.note}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className={styles.ctaBand}>
        <p>
          Ready for a human recommendation? WhatsApp us or take the quick quiz
          on the homepage.
        </p>
        <div className={styles.ctaRow}>
          <a
            className={styles.ctaPrimary}
            href="https://wa.me/6598807382?text=Hi%20VSkin%2C%20I%27d%20like%20to%20book%20or%20ask%20about%20treatments."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp 9880 7382
          </a>
          <Link className={styles.ctaSecondary} href="/#beauty-concierge">
            Back to Beauty Concierge
          </Link>
        </div>
      </div>

      <p className={styles.disclaimer}>
        Information on this page is for general education and is not medical
        advice. Results vary by individual; suitability is confirmed in person
        during consultation.
      </p>
    </div>
  );
}

export default Listings;
