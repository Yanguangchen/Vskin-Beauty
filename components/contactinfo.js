import React from "react";
import styles from "./contactinfo.module.css"; // Import CSS Module

function ContactInfo() {
  return (
    <section className={styles["section-container"]}>
      <h1 className={styles["contact-title"]}>Contact Information</h1>

      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <p className={styles["p-style"]}>Phone: 9880 7382</p>
          <p className={styles["p-style"]}>
            Jurong Outlet: Blk 350 Jurong East Ave 1 <br />
            #01-1239 (Level 2) Singapore 600350, Singapore, Singapore
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
