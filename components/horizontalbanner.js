import React from "react";
import styles from "./horizontalbanner.module.css"; // Import the CSS module

function HorizontalBanner() {
  return (
    <section className={styles.totalContainerClass}>
      {/* CARD 1 */}
      <div className={styles.cardWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.HorizontalVideo}`}
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="Assets/HorizontalVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.container2}>
            <p className={`${styles.textAlightLeft2} ${styles.TextContent}`}>
              <b>Non Invasive & Safe Technology</b> <br />
              The VSkin system is a pneumatic, gas-driven delivery mechanism
              that injects beauty serums directly into the skin's dermis layer
              without using needles. This non-invasive approach reduces the
              risks commonly associated with needle-based treatments...
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className={styles.cardWrapper}>
        <div className={styles.gridContainer2}>
          <div className={styles.container2}>
            <p className={`${styles.textAlightLeft3} ${styles.TextContent}`}>
              <b>VSkin Technology</b> <br />
              The V-Skin technology offers unmatched comfort and convenience to
              customers by providing a non-invasive and needle-free treatment...
            </p>
          </div>
          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.HorizontalVideo}`}
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src="Assets/HorizontalVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalBanner;
