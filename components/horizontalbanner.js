import React from "react";
// Updated import to the CSS module
import styles from "./horizontalbanner.module.css";

function HorizontalBanner() {
  return (
    <div className={styles.totalContainerClass}>
      <div className={styles.flexWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.horizontalVideo}`}
              loading="lazy"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="./Assets/HorizontalVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.container2}>
            <p
              className={`
                ${styles.textAlignLeft2} 
                ${styles.textContent}
              `}
            >
              <strong>Non Invasive & Safe Technology </strong>
              <br></br>The VSkin system is a pneumatic, gas-driven delivery
              mechanism that injects beauty serums directly into the skins
              dermis layer without using needles. This non-invasive approach
              reduces the risks commonly associated with needle-based
              treatments...
            </p>
          </div>
        </div>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.gridContainer2}>
          <div className={styles.container2}>
            <p
              className={`
                ${styles.textAlignLeft3} 
                ${styles.textContent}
              `}
            >
              <strong>VSkin Technology</strong>
              <br></br>The V-Skin technology offers unmatched comfort and
              convenience to customers by providing a non-invasive and
              needle-free treatment.
            </p>
          </div>

          <div className={styles.container1}>
            <video
              className={`${styles.videoStyle} ${styles.horizontalVideo}`}
              autoPlay
              muted
              loading="lazy"
              playsInline
              loop
            >
              <source src="./Assets/HorizontalVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
