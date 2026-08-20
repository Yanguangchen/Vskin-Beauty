import MainPage from "../components/homepage"; // Import the HomePage component

export const metadata = {
  title: " VSkin Beauty & Slimming",
  description:
    "Needle-free sculpting and slimming in Jurong East. VJet pneumatic serum delivery—no needles, no surgery. WhatsApp 9880 7382; first-time trials from $158.",
};

export default function HomePage() {
  return (
    <main>
      <div className="title1 hero-lead-block">
        <h1 className="hero-lead-title">
          Needle-free sculpting & slimming you can trust—Jurong East
        </h1>
        <p className="hero-lead-sub">
          VJet technology: pneumatic serum delivery—no needles, no surgery.
          WhatsApp{" "}
          <a href="https://wa.me/6598807382" className="hero-lead-link">
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
