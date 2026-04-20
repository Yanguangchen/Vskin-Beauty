import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [rippleStyle, setRippleStyle] = useState({});

  const handleMouseDown = (e) => {
    setIsPressed(true);
    
    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    setRippleStyle({
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.2)',
      transform: 'scale(0)',
      animation: 'ripple 0.6s linear',
      pointerEvents: 'none',
    });
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    setTimeout(() => setRippleStyle({}), 600);
  };

  const cardStyle = {
    ...styles.card,
    ...(isHovered ? styles.cardHover : {}),
    ...(isPressed ? styles.cardPressed : {}),
  };

  return (
    <>
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 
                15px 15px 30px rgba(0, 0, 0, 0.25),
                -15px -15px 30px rgba(255, 255, 255, 0.1),
                inset -3px -3px 6px rgba(0, 0, 0, 0.2),
                inset 3px 3px 6px rgba(255, 255, 255, 0.1),
                0 0 20px rgba(101, 45, 144, 0.3);
            }
            50% { 
              box-shadow: 
                15px 15px 30px rgba(0, 0, 0, 0.25),
                -15px -15px 30px rgba(255, 255, 255, 0.1),
                inset -3px -3px 6px rgba(0, 0, 0, 0.2),
                inset 3px 3px 6px rgba(255, 255, 255, 0.1),
                0 0 25px rgba(101, 45, 144, 0.4);
            }
          }
          
          .neumorphic-card:focus {
            outline: none;
            box-shadow: 
              15px 15px 30px rgba(0, 0, 0, 0.25),
              -15px -15px 30px rgba(255, 255, 255, 0.1),
              inset -3px -3px 6px rgba(0, 0, 0, 0.2),
              inset 3px 3px 6px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(101, 45, 144, 0.6),
              0 0 0 3px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
      <div
        className="neumorphic-card"
        style={{
          ...cardStyle,
          animation: 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        tabIndex={0}
        role="button"
        aria-label={`Learn more about ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleMouseDown(e);
            setTimeout(handleMouseUp, 150);
          }
        }}
      >
        {/* Ripple effect element */}
        {rippleStyle.width && <div style={rippleStyle} />}
        
        {/* Shimmer overlay for enhanced visual appeal */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: isHovered ? 'shimmer 2s infinite' : 'none',
            pointerEvents: 'none',
            borderRadius: '1.5rem',
          }}
        />
        
        <h2 style={{
          ...styles.cardTitle,
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'transform 0.3s ease',
        }}>
          {title}
        </h2>
        <p style={{
          ...styles.cardDescription,
          transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
          transition: 'transform 0.3s ease 0.1s',
        }}>
          {description}
        </p>
        
        {/* Decorative corner elements */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.5)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.4)',
          }}
        />
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <div style={styles.mainContainer}>
      {/* Subtle background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(101, 45, 144, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(64, 33, 92, 0.1) 0%, transparent 25%)
          `,
          pointerEvents: 'none',
        }}
      />
      
      <h1 style={styles.sectionTitle}>
        Confidence you can feel—in your skin and in our process
      </h1>

      {/* 3 cards laid out side by side in a responsive grid */}
      <div style={styles.grid}>
        <Card
          title="Results without the needle anxiety"
          description="Walk out knowing you chose a needle-free, non-invasive path—designed for comfort and clearer skin over time, not a quick shock to your face."
        />
        <Card
          title="One team, mapped to your goal"
          description="Whether you want contour, firmness, or a gentler first experience, we connect you to the right protocol instead of selling everything at once."
        />
        <Card
          title="Honest pricing, no surprises"
          description="Transparent trials and packages so you decide your pace—starting from accessible first visits so you can try before you commit."
        />
      </div>
    </div>
  );
};

/* Advanced Neumorphic Styling */
const styles = {
  mainContainer: {
    maxWidth: "64rem",
    margin: "3rem auto 0",
    padding: "2.5rem",
    borderRadius: "2rem",
    /* Advanced neumorphic container styling */
    background: "linear-gradient(145deg, #f0f0f0, #e6e6e6)",
    boxShadow: `
      20px 20px 40px rgba(0, 0, 0, 0.1),
      -20px -20px 40px rgba(255, 255, 255, 0.9),
      inset 0 0 0 rgba(0, 0, 0, 0)
    `,
    position: "relative",
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "3rem",
    /* Advanced neumorphic text styling */
    color: "#2a2a2a",
    textShadow: `
      3px 3px 6px rgba(0, 0, 0, 0.1),
      -3px -3px 6px rgba(255, 255, 255, 0.9)
    `,
    position: "relative",
  },
  grid: {
    display: "grid",
    gap: "2.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    /* Enhanced grid positioning */
    padding: "1rem",
  },
  card: {
    background: "linear-gradient(135deg, #652D90 0%, #40215C 100%)",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    color: "#FFF",
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    /* Advanced multi-layered neumorphic shadows */
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    boxShadow: `
      15px 15px 30px rgba(0, 0, 0, 0.25),
      -15px -15px 30px rgba(255, 255, 255, 0.1),
      inset -3px -3px 6px rgba(0, 0, 0, 0.2),
      inset 3px 3px 6px rgba(255, 255, 255, 0.1),
      0 0 20px rgba(101, 45, 144, 0.3)
    `,
    /* Additional depth with backdrop effects */
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    
    /* Pseudo-element for advanced lighting effect */
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
    },
  },
  cardHover: {
    transform: "translateY(-8px) scale(1.02)",
    /* Enhanced hover neumorphic effects */
    boxShadow: `
      20px 20px 40px rgba(0, 0, 0, 0.3),
      -20px -20px 40px rgba(255, 255, 255, 0.15),
      inset -5px -5px 10px rgba(0, 0, 0, 0.3),
      inset 5px 5px 10px rgba(255, 255, 255, 0.15),
      0 0 30px rgba(101, 45, 144, 0.5),
      0 0 60px rgba(101, 45, 144, 0.2)
    `,
    /* Enhanced gradient on hover */
    background: "linear-gradient(135deg, #7a3ba3 0%, #4d2870 100%)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  cardPressed: {
    transform: "translateY(-2px) scale(0.98)",
    /* Pressed neumorphic effect - deeply inset */
    boxShadow: `
      inset 8px 8px 16px rgba(0, 0, 0, 0.4),
      inset -8px -8px 16px rgba(255, 255, 255, 0.05),
      5px 5px 10px rgba(0, 0, 0, 0.2),
      0 0 15px rgba(101, 45, 144, 0.4)
    `,
    /* Darker gradient when pressed */
    background: "linear-gradient(135deg, #5a2580 0%, #351f4f 100%)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    transition: "all 0.15s ease-in-out",
  },
  cardTitle: {
    marginBottom: "1.5rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
    /* Advanced neumorphic text effects */
    textShadow: `
      2px 2px 4px rgba(0, 0, 0, 0.3),
      -1px -1px 2px rgba(255, 255, 255, 0.1)
    `,
    letterSpacing: "0.5px",
    position: "relative",
  },
  cardDescription: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    /* Subtle text shadow for depth */
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    opacity: "0.95",
    position: "relative",
  },
};

export default AboutSection;
