import React, { useState, useRef, useEffect } from "react";
// Updated import to the CSS module
import styles from "./horizontalbanner.module.css";

function HorizontalBanner() {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === card1Ref.current) setIsCard1Visible(true);
          if (entry.target === card2Ref.current) setIsCard2Visible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes shimmerText {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .neumorphic-banner-card {
            position: relative;
            overflow: hidden;
          }
          
          .neumorphic-banner-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.5s ease;
            pointer-events: none;
            z-index: 1;
          }
          
          .neumorphic-banner-card:hover::before {
            left: 100%;
          }
        `}
      </style>
      
      <div className={styles.totalContainerClass}>
        {/* Enhanced Card 1 */}
        <div className={styles.flexWrapper}>
          <div 
            ref={card1Ref}
            className={`${styles.gridContainer} neumorphic-banner-card`}
            style={{
              animation: isCard1Visible ? 'fadeInUp 0.6s ease forwards' : 'none',
              opacity: isCard1Visible ? 1 : 0,
              transform: isCard1Hovered ? 'translateY(-3px) scale(1.005)' : 'translateY(0) scale(1)',
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={() => setIsCard1Hovered(true)}
            onMouseLeave={() => setIsCard1Hovered(false)}
          >
            {/* Decorative corner elements */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(101, 45, 144, 0.3)',
                boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.5)',
                animation: isCard1Hovered ? 'floatUp 2s ease-in-out infinite' : 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(101, 45, 144, 0.2)',
                boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.4)',
                animation: isCard1Hovered ? 'floatUp 2s ease-in-out infinite 0.5s' : 'none',
              }}
            />
            
            <div className={styles.container1}>
              <video
                className={`${styles.videoStyle} ${styles.horizontalVideo}`}
                loading="lazy"
                autoPlay
                muted
                playsInline
                loop
                style={{
                  transform: isCard1Hovered ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
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
                style={{
                  transform: isCard1Hovered ? 'translateY(-1px)' : 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <strong style={{
                  background: isCard1Hovered ? 'linear-gradient(45deg, #652D90, #40215C, #652D90)' : 'none',
                  backgroundSize: isCard1Hovered ? '200% 100%' : '100% 100%',
                  backgroundClip: isCard1Hovered ? 'text' : 'initial',
                  WebkitBackgroundClip: isCard1Hovered ? 'text' : 'initial',
                  WebkitTextFillColor: isCard1Hovered ? 'transparent' : 'initial',
                  animation: isCard1Hovered ? 'shimmerText 2s ease-in-out infinite' : 'none',
                  transition: 'all 0.3s ease',
                }}>
                  Comfort-first care, same depth of results
                </strong>
                <br></br>
                Serums reach where they matter—without needles—so you can
                skip puncture risk and long recovery while still targeting
                texture, contour, and confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Card 2 */}
        <div className={styles.flexWrapper}>
          <div 
            ref={card2Ref}
            className={`${styles.gridContainer2} neumorphic-banner-card`}
            style={{
              animation: isCard2Visible ? 'fadeInUp 0.6s ease 0.15s forwards' : 'none',
              opacity: isCard2Visible ? 1 : 0,
              transform: isCard2Hovered ? 'translateY(-3px) scale(1.005)' : 'translateY(0) scale(1)',
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={() => setIsCard2Hovered(true)}
            onMouseLeave={() => setIsCard2Hovered(false)}
          >
            {/* Decorative corner elements */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(64, 33, 92, 0.3)',
                boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.5)',
                animation: isCard2Hovered ? 'floatUp 2s ease-in-out infinite' : 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(64, 33, 92, 0.2)',
                boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.4)',
                animation: isCard2Hovered ? 'floatUp 2s ease-in-out infinite 0.3s' : 'none',
              }}
            />
            
            <div className={styles.container2}>
              <p
                className={`
                  ${styles.textAlignLeft3} 
                  ${styles.textContent}
                `}
                style={{
                  transform: isCard2Hovered ? 'translateY(-1px)' : 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <strong style={{
                  background: isCard2Hovered ? 'linear-gradient(45deg, #40215C, #652D90, #40215C)' : 'none',
                  backgroundSize: isCard2Hovered ? '200% 100%' : '100% 100%',
                  backgroundClip: isCard2Hovered ? 'text' : 'initial',
                  WebkitBackgroundClip: isCard2Hovered ? 'text' : 'initial',
                  WebkitTextFillColor: isCard2Hovered ? 'transparent' : 'initial',
                  animation: isCard2Hovered ? 'shimmerText 2s ease-in-out infinite' : 'none',
                  transition: 'all 0.3s ease',
                }}>
                  Trust you can verify
                </strong>
                <br></br>
                Technology that meets rigorous safety expectations—so you know
                you are not gambling on an unregulated gadget.{" "}
                <strong>FDA and HSA compliant.</strong>
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
                style={{
                  transform: isCard2Hovered ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <source src="./Assets/HorizontalVideo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalBanner;
