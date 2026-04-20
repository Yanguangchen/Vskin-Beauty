"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./beautyConcierge.module.css";
import {
  CONCERNS,
  QUIZ_OUTCOMES,
  QUIZ_STEPS,
  STAFF_PICKS,
} from "../lib/treatmentsData";

function concernById(id) {
  return CONCERNS.find((c) => c.id === id) ?? CONCERNS.find((c) => c.id === "first-visit");
}

export default function BeautyConcierge() {
  const [outcomeId, setOutcomeId] = useState(null);

  const concern = useMemo(() => (outcomeId ? concernById(outcomeId) : null), [outcomeId]);

  const handlePick = (optionId) => {
    const mapped = QUIZ_OUTCOMES[optionId] ?? "first-visit";
    setOutcomeId(mapped);
  };

  return (
    <section
      id="beauty-concierge"
      className={styles.section}
      aria-labelledby="concierge-heading"
    >
      <p className={styles.kicker}>Beauty concierge</p>
      <h2 id="concierge-heading" className={styles.title}>
        Find a starting point in under a minute
      </h2>
      <p className={styles.subtitle}>
        We are not a faceless retailer—you book real sessions in Jurong with
        therapists who explain options and respect your budget. Answer one
        question and we will point you to the right concern hub on our price
        list.
      </p>

      <div className={styles.quizCard}>
        {!concern ? (
          <>
            <p className={styles.question}>{QUIZ_STEPS[0].question}</p>
            <div className={styles.options} role="list">
              {QUIZ_STEPS[0].options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={styles.optionBtn}
                  onClick={() => handlePick(opt.id)}
                >
                  <span className={styles.optionLabel}>{opt.label}</span>
                  <span className={styles.optionHint}>{opt.hint}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.result}>
            <p className={styles.resultTitle}>Suggested focus: {concern.title}</p>
            <p className={styles.resultText}>{concern.tagline}</p>
            <div className={styles.actions}>
              <Link
                href={`/listings#concern-${concern.id}`}
                className={styles.ctaPrimary}
              >
                View matching treatments
              </Link>
              <a
                href="https://wa.me/6598807382?text=Hi%20VSkin%2C%20I%20used%20your%20Beauty%20Concierge%20and%20want%20to%20book%20a%20consultation."
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp to book
              </a>
            </div>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => setOutcomeId(null)}
            >
              Start over
            </button>
          </div>
        )}
      </div>

      <h3 className={styles.picksTitle}>Staff picks — where clients start</h3>
      <div className={styles.picksGrid}>
        {STAFF_PICKS.map((pick) => (
          <article key={pick.title} className={styles.pickCard}>
            <h3>{pick.title}</h3>
            <p>{pick.benefit}</p>
            <Link href={`/listings#concern-${pick.concernId}`} className={styles.pickLink}>
              See this track →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
