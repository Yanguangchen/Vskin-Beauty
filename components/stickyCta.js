"use client";

import React from "react";
import styles from "./stickyCta.module.css";
import { getBookingUrl, hasExternalBookingCalendar } from "../lib/booking";

const WA = "https://wa.me/6598807382";
const MSG =
  "Hi VSkin, I want a face analysis / suitability check. What’s the next available slot?";

export default function StickyCta() {
  const bookHref = getBookingUrl();
  const useCalendar = hasExternalBookingCalendar();

  return (
    <nav className={styles.bar} aria-label="Quick booking">
      <a
        className={`${styles.btn} ${styles.primary}`}
        href={useCalendar ? bookHref : `${WA}?text=${encodeURIComponent(MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {useCalendar ? "Book appointment" : "WhatsApp: Book now"}
      </a>
      <a className={`${styles.btn} ${styles.secondary}`} href="#beauty-concierge">
        Face-type quiz
      </a>
    </nav>
  );
}
