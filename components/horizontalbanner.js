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
                <b>Pedicure and Manicure</b> <br></br>
                Pamper your hands and feet with our luxurious pedicure and
                manicure services. At Emille Beauty, we combine precision,
                hygiene, and creativity to give your nails the care and
                attention they deserve. Whether you are looking for a simple,
                clean look or a dazzling design, our skilled technicians will
                ensure your nails are a perfect reflection of your style. Relax
                in our cozy environment and let us rejuvenate your hands and
                feet, leaving you feeling polished and refreshed.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.gridContainer2}>
            <div className={styles.container2}>
              <p className={`${styles.textAlightLeft3} ${styles.TextContent}`}>
                <b>Facial Massage</b> <br></br>
                Glow from within with our rejuvenating facial massage
                treatments. At Emille Beauty, we combine expert techniques with
                premium skincare products to deeply nourish your skin and
                enhance its natural radiance. Whether you’re looking to combat
                signs of aging, improve skin texture, or simply unwind, our
                facial massages offer a luxurious experience that leaves you
                feeling refreshed and confident.
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
                <source src="Assets/HorizontalVideo3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.container2}>
              <p className={`${styles.textAlightLeft2} ${styles.TextContent}`}>
                <b>Bojin Massage</b> <br></br>
                Discover the healing power of the Bojin massage, a unique
                therapy that stimulates acupressure points to promote
                relaxation, detoxification, and rejuvenation. At Emille Beauty,
                our skilled therapists use this ancient technique to release
                tension, enhance circulation, and restore your body’s natural
                balance. Perfect for relieving stress or chronic aches, a Bojin
                massage is not just a treatment—it’s a journey to complete
                well-being.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.gridContainer2}>
            <div className={styles.container2}>
              <p className={`${styles.textAlightLeft3} ${styles.TextContent}`}>
                <b>Hair Spa</b> <br></br>
                Treat your hair to the ultimate care it deserves with our
                revitalizing hair spa treatments. Designed to nourish your scalp
                and strengthen your hair, our services are tailored to address
                concerns like dryness, damage, or dullness. Using high-quality
                products and soothing techniques, we’ll restore vitality and
                shine, giving your locks a soft, healthy glow. Relax in our
                tranquil salon and let us help you achieve the radiant,
                beautiful hair you’ve always desired.
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
                <source src="Assets/HorizontalVideo4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
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
                <source src="Assets/HorizontalVideo5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={styles.container2}>
              <p className={`${styles.textAlightLeft2} ${styles.TextContent}`}>
                <b>IPL Hair Removal</b> <br></br>
                Experience smooth, flawless skin with our advanced IPL (Intense
                Pulsed Light) hair removal services. At Emille Beauty, we use
                state-of-the-art IPL technology to provide a safe, effective,
                and virtually pain-free solution for long-lasting hair
                reduction. This gentle yet powerful treatment targets hair
                follicles, minimizing regrowth while leaving your skin soft and
                silky. Perfect for various areas of the body, IPL hair removal
                is your ticket to effortless confidence and convenience. Let us
                help you achieve the smooth skin you’ve always desired with a
                personalized IPL experience tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizontalBanner;
