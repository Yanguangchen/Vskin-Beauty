import "../styles/body.css";
import "../styles/grid.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import Navbar from "../components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Vskin Beauty & Slimming",
  description:
    "Discover your inner beauty and confidence with Vskin Beauty & Slimming. Offering a range of premium beauty and wellness services in Singapore.",
  openGraph: {
    title: "Vskin Beauty & Slimming",
    description:
      "Discover your inner beauty and confidence with Vskin Beauty & Slimming. Offering a range of premium beauty and wellness services in Singapore.",
    url: "https://journeybeauty.net",
    type: "website",
    siteName: "Vskin Beauty & Slimming",
    images: [
      {
        url: "/Assets/icon.png",
        alt: "App Icon of VSkin Beauty & Slimming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Assets/icon.png"],
  },
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "VSkin Beauty and Slimming",
    url: "https://vskin-beauty.vercel.app",
    telephone: "9880 7382",
    description:
      "VSkin Beauty and Slimming offers non-invasive slimming treatments powered by VSkin Technology. Our treatments focus on fat burning, skin tightening, and skin rejuvenation with long-lasting results and little to no downtime.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blk 350 Jurong East Ave 1, #01-1239 (Level 2)",
      addressLocality: "Singapore",
      postalCode: "600350",
      addressCountry: "SG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.3419",
      longitude: "103.7441",
    },
    hasMap:
      "https://www.google.com/maps?q=Blk+350+Jurong+East+Ave+1,+%2301-1239+(Level+2),+Singapore+600350",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    branchOf: {
      "@type": "Organization",
      name: "VSKin Beauty and Slimming",
    },
    location: {
      "@type": "Place",
      name: "Jurong Branch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blk 350 Jurong East Ave 1, #01-1239 (Level 2)",
        addressLocality: "Singapore",
        postalCode: "600350",
        addressCountry: "SG",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Toa Payoh Branch",
        value: "Available upon request",
      },
      {
        "@type": "PropertyValue",
        name: "Non-Invasive Treatments",
        value:
          "Our treatments include VSkin Nose Lifting Collagen (lasting 16–18 months with peak conditions around 8–12 months) and VSkin Fat Melt (results are not permanent and require a balanced diet and regular activity).",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ddc968" />
        <meta name="author" content="Web Wizards" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/Assets/apple-icon.png" />
        <link rel="apple-touch-icon" href="/Assets/apple-icon.png" />
        <meta property="og:url" content="https://vskin-beauty.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vskin Beauty & Slimming" />
        <meta
          property="og:description"
          content="Discover your inner beauty and confidence with Vskin Beauty & Slimming. Offering a range of premium beauty and wellness services in Singapore."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/496a7544-7fe2-4b67-8956-8b52ab6863c1.jpg?token=DX3vtu6h6wL-lIge-Zm-R4lv5Pse6SV_zlHDh3eLZY8&height=500&width=500&expires=33272945155"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vskin-beauty.vercel.app" />
        <meta
          property="twitter:url"
          content="https://vskin-beauty.vercel.app/"
        />
        <meta name="twitter:title" content="Vskin Beauty & Slimming" />
        <meta
          name="twitter:description"
          content="Discover your inner beauty and confidence with Vskin Beauty & Slimming. Offering a range of premium beauty and wellness services in Singapore."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/496a7544-7fe2-4b67-8956-8b52ab6863c1.jpg?token=DX3vtu6h6wL-lIge-Zm-R4lv5Pse6SV_zlHDh3eLZY8&height=500&width=500&expires=33272945155"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+IN:wght@100..400&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+IN:wght@100..400&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
        <link rel="canonical" href="https://www.vskinbeauty.shop/" />
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
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"
          async
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <script
          async
          src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
        
        {/* Footer */}
        <footer className="footerStyle">
          {/* Main Footer Content */}
          <div className="footerMain">
            <div className="footerSection">
              <h3>VSkin Beauty & Slimming</h3>
              <p>Your journey to beauty and confidence starts here. We specialize in advanced beauty treatments and slimming solutions to help you look and feel your best.</p>
            </div>

            <div className="footerSection">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61568387910807">Facebook Page</a></li>
                <li><a href="/listings">Price List</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/14/20250115141621-JOO3QMZ7.json">Chat with our AI</a></li>
                <li><a href="/Blogs">Why Us</a></li>
              </ul>
            </div>

            <div className="footerSection">
              <h4>Location & Contact</h4>
              <div className="contactInfo">
                <p><i className="fas fa-phone"></i> 9880 7382</p>
                <p><i className="fas fa-map-marker-alt"></i> Jurong Outlet: Blk 350 Jurong East Ave 1 #01-1239 (Level 2) Singapore 600350, Singapore, Singapore</p>
                <p><i className="fas fa-clock"></i> Mon-Sat: 10AM-8PM</p>
              </div>
              <div className="newsletter">
                <h5>Stay Updated</h5>
                <p>Get beauty tips and exclusive offers</p>
                <div className="newsletterForm">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottomSection">
            <div className="bottomContent">
              <div className="copyright">
                <p>&copy; {currentYear} VSkin Beauty & Slimming. All rights reserved.</p>
              </div>
              <div className="legalLinks">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/sitemap">Sitemap</a>
              </div>
              <div className="developer">
                <p>Powered by React.Js & Next.Js, hosted on Vercel and secured by Cloudflare CDN</p>
              </div>
            </div>
          </div>
        </footer>
        
        <script
          async
          src="https://files.bpcontent.cloud/2025/01/15/14/20250115141621-7O84I2EE.js"
        ></script>
      </body>
    </html>
  );
}
