import MainPage from "../components/homepage"; // Import the HomePage component

export const metadata = {
  title: " VSkin Beauty & Slimming",
  description: "Discover your inner beauty and confidence.",
};

export default function HomePage() {
  return (
    <main>
      <div className="title1">
        <h1>Welcome to the world of VSkin Beauty & Slimming</h1>
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
      <div className="sk-ww-facebook-page-posts" data-embed-id="25510702"></div>
      <script
        src="https://widgets.sociablekit.com/facebook-page-posts/widget.js"
        defer
      ></script>
    </main>
  );
}
