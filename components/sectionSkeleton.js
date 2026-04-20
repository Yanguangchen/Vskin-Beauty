import React from "react";
import styles from "./sectionSkeleton.module.css";

export default function SectionSkeleton({ variant = "default" }) {
  const cls =
    variant === "tall"
      ? `${styles.wrap} ${styles.tall}`
      : variant === "short"
        ? `${styles.wrap} ${styles.short}`
        : styles.wrap;
  return (
    <div
      className={cls}
      aria-hidden
      role="presentation"
    />
  );
}
