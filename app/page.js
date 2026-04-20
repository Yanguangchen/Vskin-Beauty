import MainPage from "../components/homepage"; // Import the HomePage component

export const metadata = {
  title: " VSkin Beauty & Slimming",
  description:
    "Needle-free VJet slimming & skin treatments in Jurong, Singapore. Book by WhatsApp 9880 7382—no hard sell, FDA/HSA compliant technology.",
};

export default function HomePage() {
  return (
    <main>
      <div className="title1">
        <h1>Needle-free sculpting & slimming you can trust—Jurong East</h1>
        <p
          style={{
            maxWidth: "38rem",
            margin: "0.5rem auto 0",
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            fontWeight: 500,
            color: "#444",
            lineHeight: 1.55,
          }}
        >
          VJet technology: pneumatic serum delivery—no needles, no surgery. WhatsApp{" "}
          <a href="https://wa.me/6598807382" style={{ color: "#652D90", fontWeight: 700 }}>
            9880 7382
          </a>{" "}
          to book or ask about first-time trials from $158.
        </p>
      </div>
      <script
        async
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
      ></script>
      <script
        async
        src="https://files.bpcontent.cloud/2025/01/15/14/20250115141621-7O84I2EE.js"
      ></script>

      {/* Use the imported HomePage component */}
      <MainPage />
    </main>
  );
}
