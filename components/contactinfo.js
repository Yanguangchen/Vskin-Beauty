import React from "react";
import styles from "./contactinfo.module.css";

function ContactInfo() {
  return (
    <div className={`${styles.containerWrapper} ${styles.contact}`}>
      <h1 className={styles.contactTitle}>Contact Information</h1>

      <div className={`${styles.bodyStyle} ${styles.contactBody}`}>
        {/* Left Column: Contact Details */}
        <div className={styles.subContent}>
          <p className={styles.pStyle}>
            Phone: 9880 7382 <br></br>
            Jurong Outlet: Blk 350 Jurong East Ave 1 #01-1239
            <br></br>
            (Level 2) Singapore 600350, Singapore, Singapore
          </p>
        </div>

        {/* Right Column: Service Hours */}
        <div className={styles.subContent}>
          <h3 className={styles.h3Style}>Service Hours</h3>
          <p className={styles.openingTime}>Opens Daily: By Appointment Only</p>
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;
