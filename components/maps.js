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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7205714435404!2d103.72865317496569!3d1.3440719986431962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d068cc5561f%3A0x7be24b2708d43a14!2sShebella%20Beauty%20%40%20Jurong!5e0!3m2!1sen!2ssg!4v1736929342988!5m2!1sen!2ssg"
            allowFullScreen="" // React uses camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vskin Beauty"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Maps;
