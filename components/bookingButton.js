"use client";

import React from "react";
import { getBookingUrl } from "../lib/booking";

/** Reusable Book CTA — uses Calendly/Acuity when NEXT_PUBLIC_BOOKING_URL is set */
export default function BookingButton({
  children = "Book appointment",
  className,
  style,
  variant = "primary",
}) {
  const href = getBookingUrl();
  const base =
    variant === "ghost"
      ? {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 40,
          padding: "0 1rem",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 14,
          textDecoration: "none",
          border: "2px solid rgba(101,45,144,0.35)",
          color: "#40215c",
          background: "#fff",
          fontFamily: "'Quicksand', sans-serif",
        }
      : {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 40,
          padding: "0 1.1rem",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 14,
          textDecoration: "none",
          background: "linear-gradient(135deg, #c4b5fd 0%, #7c3aed 35%, #5b21b6 100%)",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(91,33,182,0.35)",
          fontFamily: "'Quicksand', sans-serif",
          border: "none",
        };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ ...base, ...style }}
    >
      {children}
    </a>
  );
}
