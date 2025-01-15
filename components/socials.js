"use client";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import styles from "./socials.module.css";

function Socials() {

  return (
    <main>
      <div className={styles["flex-container"]}>
        <div
          className={`${styles["whatsapp-widget"]} ${styles.widgetControl}`}
          style={{
            position: "fixed",
            right: "1px", // Keep it on the right side
            bottom: "15%", // Position it halfway up the page
            transform: "translateY(50%)", // Center it vertically
            zIndex: 1, // Use a very high z-index
          }}
        >
          <WhatsAppWidget
            phoneNumber="98807382"
            companyName="VSkin Beauty & Slimming"
            message="Ready to change your whole look? Contact us now!"
          />
        </div>
      </div>
    </main>
  );
}

export default Socials;
