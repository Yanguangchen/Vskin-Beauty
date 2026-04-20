import MainPage from "../components/homepage"; // Import the HomePage component

export const metadata = {
  title: " VSkin Beauty & Slimming",
  description:
    "V-Sculpt Method: needle-free facial sculpting in Jurong. Book face analysis + trial from $158. FDA/HSA compliant VJet—WhatsApp 9880 7382.",
};

export default function HomePage() {
  return (
    <main>
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
