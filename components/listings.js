import React from "react";
import styles from "./listings.module.css";

function Listings() {
  return (
    <>
      <div className={styles.videoContainer}>
        <video
          className={styles.videoStyle}
          autoPlay
          muted
          controls
          loop
          playsInline
        >
          <source src="/Assets/EmilleContainer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Listings;
