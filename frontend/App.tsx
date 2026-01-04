import { AppleIcon, PlayIcon, TrendingDown, PiggyBank, Shield, Smartphone } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-lime-500">
      {/* Hero Section */}
      <header className="px-6 py-12 text-center">
        <img src="/gripah-logo.png" alt="Gripah" className="h-24 mx-auto mb-6" />
        <p className="text-2xl text-lime-500/90">Keep Your Mind On Your Money</p>
      </header>

      {/* Features Section */}
      <main className="max-w-5xl mx-auto px-6 py-2">
        {/* Download Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-lime-400">
            Download Gripah Today
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<TrendingDown className="w-10 h-10" />}
              title="Your Privacy Is Permanent"
              description="We don't collect your data. We don't sell your data. We don't want your data. The transactions that you choose to add to Gripah stay on your device and you can delete it all at any time."
            />
            
            <FeatureCard
              icon={<PiggyBank className="w-10 h-10" />}
              title="Smart Savings Goals"
              description="Set personalized savings targets and watch your progress. Gripah helps you stay motivated and reach your financial goals faster."
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
      </main>

      {/* Footer */}
      <footer className="text-center py-12 px-6 border-t border-lime-500/20">
        <p className="text-lime-500/60 text-sm">
          © 2024 Gripah. All rights reserved.
        </p>
      </footer>
    </div>
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
    <div className="bg-black border border-lime-500/30 rounded-xl p-6 hover:border-lime-500/60 transition-colors duration-200">
      <div className="text-lime-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-lime-400">{title}</h3>
      <p className="text-lime-500/80 leading-relaxed">{description}</p>
    </div>
  );
}

function StatBadge({ label }: { label: string }) {
  return (
    <span className="bg-lime-500/10 border border-lime-500/30 px-6 py-2 rounded-full text-lime-400 font-medium">
      {label}
    </span>
  );
}
