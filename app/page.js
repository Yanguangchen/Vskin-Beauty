import MainPage from "../components/homepage"; // Import the HomePage component

export const metadata = {
  title: " VSkin Beauty & Slimming",
  description:
    "Needle-free beauty and slimming in Jurong—guided by concern, not jargon. Book your consultation or find your starting point with our Beauty Concierge.",
};

export default function HomePage() {
  return (
    <main>
      <div className="title1">
        <h1>Look like you—only more confident</h1>
        <p
          style={{
            maxWidth: "36rem",
            margin: "0.75rem auto 0",
            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            fontWeight: 500,
            color: "#4b5563",
            lineHeight: 1.6,
          }}
        >
          Curated needle-free treatments in Jurong. We match your goal to the
          right protocol—no hard sell, clear next steps.
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
