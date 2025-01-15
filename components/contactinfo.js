import React from "react";
import styles from "./contactinfo.module.css"; // Import CSS Module

function ContactInfo() {
  return (
    <section>
      <div className={`${styles["container-wrapper"]} ${styles.contact}`}>
        <h1>Contact Information</h1>
        <div className={`${styles["body-style"]} ${styles.contactBody}`}>
          <div className={`${styles["sub-content"]} ${styles.subcontent}`}>
            <p className={styles["p-style"]}>Phone: 9880 7382</p>
            <p className={styles["p-style"]}>
              Jurong Outlet: Blk 350 Jurong East Ave 1 <br></br>#01-1239 (Level 2)
              Singapore 600350, Singapore, Singapore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
