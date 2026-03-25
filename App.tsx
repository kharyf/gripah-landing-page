import { AppleIcon, PlayIcon, Eye, PiggyBank, Shield, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPage from "./PrivacyPage";

const screenshots = [
  "/Screenshots/IMG_6247.PNG",
  "/Screenshots/IMG_6248.PNG",
  "/Screenshots/IMG_6250.PNG",
  "/Screenshots/IMG_6251.PNG",
  "/Screenshots/IMG_6252.PNG",
  "/Screenshots/IMG_6253.PNG",
  "/Screenshots/IMG_6254.PNG",
  "/Screenshots/IMG_6255.PNG",
  "/Screenshots/IMG_6256.PNG",
  "/Screenshots/IMG_6257.PNG",
  "/Screenshots/IMG_6263.PNG",
];

function ScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % screenshots.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[9/19.5]">
      {screenshots.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Screenshot ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-contain rounded-2xl border-2 border-lime-500 transition-opacity duration-500"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="px-6 py-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-6 mb-6">
          <img src="/GripahSquareLogo.png" alt="Gripah Square" className="h-24" />
          <img src="/GripahLogo.png" alt="Gripah" className="h-24" />
        </div>
        <p className="text-2xl text-lime-500/90">Keep Your Mind On Your Money</p>
      </header>

      {/* Features Section */}
      <main className="max-w-5xl mx-auto px-6 py-2">
        {/* Download Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-lime-400">
            Coming Soon To Your Favorite App Distributor
          </h3>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-lime-500/20"
            >
              <AppleIcon className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-lime-500/20"
            >
              <PlayIcon className="w-8 h-8" fill="currentColor" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-lime-400">
            Why Choose Gripah?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="h-auto min-h-[500px]">
              <ScreenshotCarousel />
            </div>
            <div className="grid gap-2">
            <FeatureCard
              icon={<Eye className="w-10 h-10" />}
              title="Your Privacy Is Permanent"
              description="We don't collect your data. We don't sell your data. We don't want your data. The transactions that you choose to add to Gripah stay on your device and you can delete it all at any time."
            />

            <FeatureCard
              icon={<PiggyBank className="w-10 h-10" />}
              title="Smart Budgeting Goals"
              description="Set personalized budgeting targets and watch your progress. Gripah helps you spend less money, save more money, track your necessary spending, and reach your financial goals faster."
            />

            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Bank-Level Security"
              description="Your premium tier purchase information is protected with industry-leading encryption. We don't store your card information. Hackers can't harm you though us."
            />

            <FeatureCard
              icon={<Smartphone className="w-10 h-10" />}
              title="Simple & Intuitive"
              description="No complex features or confusing menus. Just open the app, log your expenses, and get instant insights in seconds."
            />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Gripah - Keep Your Mind On Your Money";

    const metaTags = [
      { name: "description", content: "Gripah is a privacy-first expense tracking app that helps you manage your finances securely. Track spending, set savings goals, and gain financial insights without compromising your privacy." },
      { name: "keywords", content: "expense tracker, budget app, financial app, privacy-first, savings goals, personal finance, money management" },
      { name: "author", content: "Gripah" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Gripah - Keep Your Mind On Your Money" },
      { property: "og:description", content: "Privacy-first expense tracking app. Track your spending, set savings goals, and manage your finances securely. Your data stays on your device." },
      { property: "og:url", content: "https://www.gripah.com" },
      { property: "og:image", content: "https://www.gripah.com/gripah-logo.png" },
      { property: "og:image:alt", content: "Gripah Logo" },
      { property: "og:site_name", content: "Gripah" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gripah - Keep Your Mind On Your Money" },
      { name: "twitter:description", content: "Privacy-first expense tracking app. Track your spending, set savings goals, and manage your finances securely. Your data stays on your device." },
      { name: "twitter:image", content: "https://www.gripah.com/gripah-logo.png" },
      { name: "twitter:image:alt", content: "Gripah Logo" },
      { name: "theme-color", content: "#000000" }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const existingTag = document.querySelector(
        name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      );

      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    });

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://www.gripah.com");
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-lime-500">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        {/* Footer */}
        <footer className="text-center py-12 px-6 border-t border-lime-500/20">
          <div className="flex flex-col items-center gap-4">
            <p className="text-lime-500/60 text-sm">
              © 2026 Gripah. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link to="/privacy" className="text-lime-500/40 hover:text-lime-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black border border-lime-500/30 rounded-xl p-1 hover:border-lime-500/60 transition-colors duration-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-lime-400">{icon}</div>
        <h3 className="text-xl font-semibold text-lime-400">{title}</h3>
      </div>
      <p className="text-lime-500/80 leading-relaxed">{description}</p>
    </div>
  );
}
