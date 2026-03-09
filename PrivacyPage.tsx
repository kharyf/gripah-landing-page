import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-lime-500 selection:bg-lime-500/30">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-lime-400 hover:text-white transition-colors duration-200 mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span>Back to Home</span>
                </button>

                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-lime-500/60">Last Updated: March 8, 2026</p>
                </header>

                <div className="space-y-12 text-lime-500/90 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-lime-400 mb-4 uppercase tracking-wider">1. INTRODUCTION</h2>
                        <p>
                            Gripah ("the App") is a personal finance management tool designed to help users track their spending. This Privacy Policy explains how we collect, use, and share information when you use our mobile application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-lime-400 mb-4 uppercase tracking-wider">2. INFORMATION COLLECTION AND USE</h2>
                        <p className="mb-6">
                            The app collects information to provide its services to you. No camera or spending data is ever transmitted away from your device.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">A. Camera and Image Data</h3>
                                <p className="mb-3">Gripah requests access to your device's camera and photo library specifically for the "Scanner" feature.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-lime-400">Purpose:</strong> To capture or select images of receipts for automatic spending entry.</li>
                                    <li><strong className="text-lime-400">Processing:</strong> Receipt images are processed locally on your device using on-device machine learning (ML Kit) to extract text (OCR).</li>
                                    <li><strong className="text-lime-400">Retention:</strong> Images are used temporarily during the scanning process. Gripah does not permanently store original receipt images in your device's persistent gallery.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">B. User-Provided Information</h3>
                                <p className="mb-3">When you create an account, we collect:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Email address</li>
                                    <li>Name (optional)</li>
                                    <li>Login credentials (managed via AWS Cognito)</li>
                                    <li>No Gripah employee will ever see or ask for your password.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">C. Spending Data</h3>
                                <p>
                                    Information about your spending categories, item names, dates, and amounts is stored locally on your device's persistent storage (AsyncStorage) to ensure fast access and privacy.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-lime-400 mb-4 uppercase tracking-wider">3. THIRD-PARTY SERVICES AND DATA SHARING</h2>
                        <p className="mb-4">We integrate with the following third-party services to provide core app functionality:</p>
                        <ul className="space-y-6">
                            <li className="bg-neutral-900/50 border border-lime-500/10 rounded-xl p-6">
                                <strong className="block text-white text-lg mb-2">Amazon Web Services (AWS)</strong>
                                Used for secure user authentication (Cognito) and backend API services (AppSync). Your email and user ID are processed by AWS to manage your account.
                            </li>
                            <li className="bg-neutral-900/50 border border-lime-500/10 rounded-xl p-6">
                                <strong className="block text-white text-lg mb-2">Stripe</strong>
                                Used for processing subscription payments. When you subscribe to Premium, your payment details are handled directly by Stripe. Gripah does not see or store your credit card information.
                            </li>
                            <li className="bg-neutral-900/50 border border-lime-500/10 rounded-xl p-6">
                                <strong className="block text-white text-lg mb-2">Google AdMob</strong>
                                Used to display advertisements to users of the free version of the App. AdMob may collect and use device identifiers for advertising purposes.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-lime-400 mb-4 uppercase tracking-wider">4. DATA RETENTION AND DELETION</h2>
                        <p className="mb-6">You have full control over your data within Gripah.</p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">A. Local Data Deletion</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-lime-400">Scan History:</strong> You can clear your receipt scanning history at any time using the "Clear History" button in the Scanner tab.</li>
                                    <li><strong className="text-lime-400">Spending Records:</strong> You can delete individual spending items or entire categories in the Spending tab. You can delete your entire historical spending data at any time using the "Reset Now" button in the Settings tab.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">B. Account Deletion</h3>
                                <p>
                                    If you wish to delete your account and all associated data from our authentication systems, please contact support at <a href="mailto:support@gripah.com" className="text-lime-400 hover:underline">support@gripah.com</a>.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">C. Data Portability</h3>
                                <p>
                                    Your spending data remains on your device. Clearing the app cache or uninstalling the app will remove all locally stored spending data.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-lime-400 mb-4 uppercase tracking-wider">5. CONTACT US</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@gripah.com" className="text-lime-400 hover:underline">support@gripah.com</a>.
                        </p>
                    </section>
                </div>

                <footer className="mt-24 pt-8 border-t border-lime-500/20 text-center">
                    <p className="text-lime-500/40 text-sm">© 2026 Gripah. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
