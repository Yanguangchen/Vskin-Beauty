import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#512573",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#968442",
            color: "white",
            border: "1px solid black",
          }}
        >
          <span
            style={{
              fontWeight: "600",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            {title}
          </span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let us bring out the best in you, shine with confidence, and embrace
        your beauty
      </h1>

      <div>
        <AccordionItem
          title="Non-Invasive with Long-Lasting Results"
        >
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Non-Invasive with Long-Lasting Results
          </h4>
          <p>
            V-Skin technology uses a pneumatic gas-driven delivery system that
            delivers fat-burning and skin-tightening solutions deep into the
            skins dermis layer—without needles. This non-invasive method ensures
            minimal discomfort and little to no downtime. For example, the
            V-Skin Nose Lifting treatment lasts 16–18 months, with peak results
            appearing around 8–12 months.
          </p>
        </AccordionItem>

        <AccordionItem title="Comprehensive Skin and Body Solutions">
          <p>
            V-Skin treatments offer a wide range of beauty solutions, from fat
            melting and skin tightening to wrinkle removal and pigmentation
            treatments. Whether you are looking to achieve a more sculpted face,
            rejuvenate your skin, or target stubborn fat areas, V-Skin provides
            personalized solutions to help you look and feel your best.
          </p>
        </AccordionItem>

        <AccordionItem title="Affordable and Transparent Pricing">
          <p>
            At Vskin Beauty & Slimming, we prioritize affordability and
            transparency. With no GST, no hard selling, and no hidden fees, you
            can enjoy premium treatments without any pressure. First trial
            prices for treatments like fat melting + lifting start at just $380,
            making advanced beauty care more accessible than ever.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
