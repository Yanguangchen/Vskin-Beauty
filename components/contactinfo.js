import React from "react";
import styles from "./contactinfo.module.css"; // Import CSS Module

function ContactInfo() {
  return (
    <section>
      <div className={`${styles["container-wrapper"]} ${styles.contact}`}>
        <h1>Contact Information</h1>
        <div className={`${styles["body-style"]} ${styles.contactBody}`}>
          <div className={`${styles["sub-content"]} ${styles.subcontent}`}>
            <p className={styles["p-style"]}>Phone: 9781 8877</p>
            <p className={styles["p-style"]}>
              Visit our salon at: <br />9 Yio Chu Kang Rd, #01-03, Singapore
              545523
            </p>
            Email us at:
            <p>ebeautyintl@gmail.com</p>
          </div>

          <a href="https://www.google.com/search?q=emille+beauty&rlz=1C5CHFA_enSG1030SG1030&oq=emill&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYQDIGCAMQRRg5MhAIBBAuGMcBGLEDGNEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHOTU5ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8">
            <div className={`${styles["sub-content"]} ${styles.subcontent}`}>
              <h3>Like our services? Click here to give us a review!</h3>
            </div>
          </a>
        </div>
        <h3 className={styles["h3-style"]}>Service Hours</h3>
        <p className={styles["opening-time"]}>
          Tuesday - Sunday: 10am - 8pm <br />
          Closed on Mondays
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
