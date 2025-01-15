import MainPage from "../components/homepage"; // Import the HomePage component
import "../styles/footer.css";

export const metadata = {
  title: " VSKin Beauty & Slimming",
  description: "Discover your inner beauty and confidence.",
};

export default function HomePage() {
  return (
    <main>
      <div className="title1">
        <h1>Welcome to the world of VSkin Beauty & Slimming</h1>
      </div>

      {/* Use the imported HomePage component */}
      <MainPage />
      <div className="sk-ww-facebook-page-posts" data-embed-id="25510702"></div>
      <script
        src="https://widgets.sociablekit.com/facebook-page-posts/widget.js"
        defer
      ></script>
      <footer>
        <div className="footerStyle">
          <div className="footerWrapper">
            <div className="footerContent">{/* Add footer content here */}</div>
          </div>
        </div>
        <div className="bottomSection">
          <a href="https://webwizardsg.com/">
            <div className="wwContainer">
              <img
                className="wwLogo"
                src="/transparent.png"
                loading="lazy"
                alt="Logo to webwizardsg.com"
              />
            </div>
          </a>
          <p className="footerContentPStyle">
            Powered using React.Js & Next.Js, hosted on Vercel and secured by
            Cloudflare CDN
          </p>
          <p className="footerContentPStyle">
            Developed by Chen Yanguang from Web Wizards
          </p>
        </div>
      </footer>
    </main>
  );
}
