import React, { useState, useRef, useEffect } from "react";
import styles from "./Maps.module.css";

function Maps() {
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMapFocused, setIsMapFocused] = useState(false);
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === containerRef.current) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
                     @keyframes mapZoomIn {
             from {
               opacity: 0;
               transform: scale(0.96) translateY(20px);
             }
             to {
               opacity: 1;
               transform: scale(1) translateY(0);
             }
           }
          
          @keyframes titleGlow {
            0%, 100% {
              text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.3),
                0 0 10px rgba(101, 45, 144, 0.3);
            }
            50% {
              text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(101, 45, 144, 0.5),
                0 0 30px rgba(101, 45, 144, 0.3);
            }
          }
          
          @keyframes pulseGlow {
            0%, 100% { 
              box-shadow: 
                12px 12px 24px rgba(0, 0, 0, 0.1),
                -12px -12px 24px rgba(255, 255, 255, 0.9),
                inset -2px -2px 4px rgba(0, 0, 0, 0.05),
                inset 2px 2px 4px rgba(255, 255, 255, 0.5),
                0 0 20px rgba(101, 45, 144, 0.2);
            }
            50% { 
              box-shadow: 
                12px 12px 24px rgba(0, 0, 0, 0.1),
                -12px -12px 24px rgba(255, 255, 255, 0.9),
                inset -2px -2px 4px rgba(0, 0, 0, 0.05),
                inset 2px 2px 4px rgba(255, 255, 255, 0.5),
                0 0 30px rgba(101, 45, 144, 0.4);
            }
          }
          
                     @keyframes floatUpDown {
             0%, 100% { transform: translateY(0px); }
             50% { transform: translateY(-3px); }
           }
          
          .neumorphic-map-container {
            position: relative;
            overflow: hidden;
          }
          
          .neumorphic-map-container::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, rgba(101, 45, 144, 0.3), rgba(64, 33, 92, 0.3), rgba(101, 45, 144, 0.3));
            border-radius: 18px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .neumorphic-map-container:hover::before {
            opacity: 1;
          }
        `}
      </style>
      
      <main>
        <div ref={containerRef}>
          {/* Enhanced Title Section */}
          <div 
            className={styles["flex-wrapper"]}
                         style={{
               animation: isVisible ? 'mapZoomIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
               position: 'relative',
               zIndex: 2,
             }}
          >
            <h1 style={{
              color: '#1a1a1a',
              fontSize: '2.5rem',
              fontWeight: '800',
              letterSpacing: '2px',
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}>
              Locate Us!
            </h1>
          </div>

          {/* Enhanced Map Section */}
          <div 
            className={styles.mapSection}
                         style={{
               animation: isVisible ? 'mapZoomIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both' : 'none',
             }}
          >
            <div
              ref={mapRef}
              className={`neumorphic-map-container ${styles.mapFrame}`}
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '8px',
                background: 'linear-gradient(145deg, #f0f0f0, #e6e6e6)',
                boxShadow: isMapHovered ? `
                  16px 16px 32px rgba(0, 0, 0, 0.15),
                  -16px -16px 32px rgba(255, 255, 255, 0.9),
                  inset -3px -3px 6px rgba(0, 0, 0, 0.1),
                  inset 3px 3px 6px rgba(255, 255, 255, 0.8),
                  0 0 40px rgba(101, 45, 144, 0.3)
                ` : `
                  12px 12px 24px rgba(0, 0, 0, 0.1),
                  -12px -12px 24px rgba(255, 255, 255, 0.9),
                  inset -2px -2px 4px rgba(0, 0, 0, 0.05),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.5)
                `,
                                 transform: isMapHovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
                 transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animation: !isMapHovered ? 'pulseGlow 4s ease-in-out infinite' : 'none',
              }}
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
            >
              {/* Interactive corner indicators */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(101, 45, 144, 0.8), rgba(64, 33, 92, 0.6))',
                  boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.5), 2px 2px 6px rgba(0, 0, 0, 0.2)',
                  animation: isMapHovered ? 'floatUpDown 1.5s ease-in-out infinite' : 'none',
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(64, 33, 92, 0.8), rgba(101, 45, 144, 0.6))',
                  boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.2)',
                  animation: isMapHovered ? 'floatUpDown 1.5s ease-in-out infinite 0.3s' : 'none',
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(101, 45, 144, 0.7), rgba(64, 33, 92, 0.5))',
                  boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(0, 0, 0, 0.1)',
                  animation: isMapHovered ? 'floatUpDown 1.5s ease-in-out infinite 0.6s' : 'none',
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(64, 33, 92, 0.7), rgba(101, 45, 144, 0.5))',
                  boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.4), 1px 1px 3px rgba(0, 0, 0, 0.15)',
                  animation: isMapHovered ? 'floatUpDown 1.5s ease-in-out infinite 0.9s' : 'none',
                  zIndex: 10,
                }}
              />

              <iframe
                className={styles["grid-maps"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7205714435404!2d103.72865317496569!3d1.3440719986431962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d068cc5561f%3A0x7be24b2708d43a14!2sShebella%20Beauty%20%40%20Jurong!5e0!3m2!1sen!2ssg!4v1736929342988!5m2!1sen!2ssg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vskin Beauty"
                                 style={{
                   filter: isMapFocused || isMapHovered ? 'brightness(1.05) contrast(1.02)' : 'brightness(1) contrast(1)',
                   transition: 'filter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                 }}
                onFocus={() => setIsMapFocused(true)}
                onBlur={() => setIsMapFocused(false)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Maps;
