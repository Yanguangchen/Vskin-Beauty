import React from "react";
import styles from "./horizontalbanner.module.css"; // Import the CSS module

function HorizontalBanner() {
  return (
    <section>
      <div className={styles.totalContainerClass}>
        <div className={styles.flexWrapper}>
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
                <b>Non Invasive & Safe Technology</b> <br></br>
                The VSkin system is a pneumatic, gas-driven delivery mechanism
                that injects beauty serums directly into the skins dermis layer
                without using needles. This non-invasive approach reduces the
                risks commonly associated with needle-based treatments, such as
                bruising, swelling, and infection. The absence of needles also
                means there is minimal to no downtime, allowing clients to
                resume daily activities almost immediately after the procedure.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.gridContainer2}>
            <div className={styles.container2}>
              <p className={`${styles.textAlightLeft3} ${styles.TextContent}`}>
                <b>VSkin Technology</b> <br></br>
                The V-Skin technology offers unmatched comfort and convenience to
                customers by providing a non-invasive and needle-free treatment
                that eliminates the discomfort commonly associated with
                traditional beauty procedures. The use of a pneumatic,
                gas-driven delivery system ensures that serums and solutions are
                gently infused into the skin, minimizing any sensation of pain
                or irritation.
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
      </div>
    </section>
  );
}

export default HorizontalBanner;
