import "../styles/body.css";
import "../styles/grid.css";
import "../styles/navbar.css";
import Navbar from "../components/navbar";

import ContactForm from "../components/form";

export const metadata = {
  title: "Emille International Beauty",
  description: "Discover your inner beauty and confidence.",
  openGraph: {
    title: "Emille International Beauty",
    description:
      "Welcome to Emille Beauty, a premier beauty salon located in the heart of Singapore. Nestled conveniently at 9 Yio Chu Kang Road, #01-03, SPACE @ Kovan, our salon is just a short walk from Kovan MRT, offering an oasis of luxury and tranquility for all your beauty and wellness needs. At Emille Beauty, we specialize in a wide range of services designed to pamper, rejuvenate, and enhance your natural beauty",
    url: "https://journeybeauty.net",
    type: "website",
    siteName: "Emille Beauty",
    images: [
      {
        url: "/Assets/icon1.png",
        alt: "App Icon of EmilleBeauty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Assets/icon1.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Emille Beauty",
    description:
      "Welcome to Emille Beauty, a premier beauty salon located in the heart of Singapore. Nestled conveniently at 9 Yio Chu Kang Road, #01-03, SPACE @ Kovan, our salon is just a short walk from Kovan MRT, offering an oasis of luxury and tranquility for all your beauty and wellness needs. At Emille Beauty, we specialize in a wide range of services designed to pamper, rejuvenate, and enhance your natural beauty",
    url: "https://journeybeauty.net/",
    telephone: "+65 9096 7798",
    email: "journeybeauty@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blk 201E Tampines St 23, #01-78",
      addressLocality: "Singapore",
      postalCode: "527201",
      addressCountry: "SG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.353,
      longitude: 103.943,
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61571261739335"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+65 9096 7798",
      contactType: "Customer Service",
      availableLanguage: ["English", "Chinese"],
    },
    currenciesAccepted: "SGD",
    paymentAccepted: "Cash, Credit Card, Mobile Payments",
    priceRange: "$$",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Refreshments",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
      },
    ],
    service: [
      {
        "@type": "Service",
        name: "Facial Treatments",
        description:
          "Customized facial treatments that address individual skin needs, using premium skincare products and advanced techniques for a healthy, glowing complexion.",
        offers: {
          "@type": "Offer",
          priceCurrency: "SGD",
          price: "80",
          eligibleCustomerType: "Adult",
        },
      },
      {
        "@type": "Service",
        name: "Eyebrow Embroidery",
        description:
          "Professional eyebrow embroidery service designed to create full, defined, and perfectly shaped brows using high-quality pigments and techniques.",
        offers: {
          "@type": "Offer",
          priceCurrency: "SGD",
          price: "300",
          eligibleCustomerType: "Adult",
        },
      },
      {
        "@type": "Service",
        name: "IPL Laser Treatments",
        description:
          "State-of-the-art IPL treatments for skin rejuvenation, addressing pigmentation, fine lines, acne scars, and unwanted hair.",
        offers: {
          "@type": "Offer",
          priceCurrency: "SGD",
          price: "150",
          eligibleCustomerType: "Adult",
        },
      },
    ],
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Alice Tan",
        },
        datePublished: "2024-10-01",
        reviewBody:
          "The facial treatment at Journey Beauty was exceptional. The staff were attentive and my skin felt rejuvenated. Highly recommend!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John Lim",
        },
        datePublished: "2024-09-15",
        reviewBody:
          "Great experience with the eyebrow embroidery. The results looked natural, and the process was painless.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.5",
          bestRating: "5",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.75",
      ratingCount: "2",
    },
    founder: {
      "@type": "Person",
      name: "Wong Mae Swee",
      jobTitle: "Founder",
      description:
        "Wong Mae Swee is the founder of Journey Beauty, with a passion for beauty and wellness. She believes in empowering individuals to embrace their unique beauty and feel confident in their skin.",
    },
    employee: [
      {
        "@type": "Person",
        name: "Emily Wong",
        jobTitle: "Senior Esthetician",
      },
      {
        "@type": "Person",
        name: "David Lee",
        jobTitle: "Eyebrow Specialist",
      },
    ],
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F22E31" />
        <meta name="author" content="Web Wizards" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/icon1.png" />
        <link rel="apple-touch-icon" href="/icon1.png" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="canonical" href="https://journeybeauty.net" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0W5DN5QP94"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0W5DN5QP94');
            `,
          }}
        />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js"
        ></script>
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>

        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"
          async
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
      <script src="https://files.bpcontent.cloud/2025/01/03/17/20250103172846-B5A8NMAZ.js"></script>
      <script id="setmore_script" type="text/javascript" src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"></script><a style={{float:"none", position: "fixed", right: "-2px", top: "25%", display: "block", Zindex: "9999999"}} id="Setmore_button_iframe"  href="https://booking.setmore.com/scheduleappointment/baae3e6e-1abf-4051-845c-9664035b8112"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png" alt="Book an appointment with Emille Beauty using Setmore"/></a>
        <Navbar /> {/* Render the Navbar as the first component */}
        <ContactForm />
        {children} {/* Render child routes */}
      </body>
    </html>
  );
}
