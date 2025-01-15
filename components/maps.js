import React from "react";
import styles from "./Maps.module.css";

function Maps() {
  return (
    <main>
      <div>
        <div className={`${styles["flex-wrapper"]} ${styles.maps}`}>
          <h1>Locate Us!</h1>
        </div>
        <div className={styles.grid1maps}>
          <iframe
            className={styles["grid-maps"]}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4762.552424109482!2d103.8767406!3d1.3549736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1735ce773389%3A0x54d073eec8db33b4!2sEmille%20International%20Beauty%20%26%20Skin%20Care%20Center!5e1!3m2!1sen!2ssg!4v1736092817721!5m2!1sen!2ssg"
            allowFullScreen="" // React uses camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emille International Beauty & Skin Care Center"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Maps;
