import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, MessageCircle, Mail, HelpCircle, Zap, Shield, CreditCard, Trash2 } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: "What is Gripah?",
    answer:
      "Gripah is a privacy-first personal finance management app designed to help you track your spending, set savings goals, and gain financial insights — all without ever sending your data off your device. Your spending data stays local and private.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my financial data safe?",
    answer:
      "Absolutely. Gripah is built with a privacy-first philosophy. Your spending categories, item names, dates, and amounts are stored locally on your device using AsyncStorage. No spending data is ever transmitted away from your device. Premium subscriptions are processed securely through Apple App Store or Google Play — Gripah never sees or stores your payment details.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    question: "How does the Receipt Scanner feature work?",
    answer:
      "The Scanner tab lets you photograph or select a receipt image from your photo library. Gripah uses on-device machine learning (Google ML Kit) to extract text from the receipt via OCR — entirely on your device. The image is used temporarily during the scan and is never stored in your gallery or sent to any server.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    question: "What's included in Gripah Premium?",
    answer:
      "Gripah Premium removes ads allowing you to scan more receipts faster without annoying delays. Subscriptions are purchased securely through the Apple App Store or Google Play using native in-app purchases — your payment information is handled entirely by Apple or Google and is never stored by Gripah.",
  },
  {
    icon: <Trash2 className="w-5 h-5" />,
    question: "How do I delete my data or account?",
    answer:
      "You have full control over your data. To clear your receipt scan history, tap the \"Clear History\" button in the Scanner tab. To delete individual spending records, use the Spending tab. To wipe all historical spending data, tap \"Reset Now\" in the Settings tab. To delete your account and remove it from our authentication systems, email us at support@gripah.com.",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    question: "Does Gripah require an account to use?",
    answer:
      "Yes. An email is required to create an account and use Gripah. All new users start on the free tier. The free tier includes access to all Gripah tools and subsidizes those experiences with ads. Login credentials are managed securely by Amazon Web Services (AWS Cognito). No Gripah employee will ever see or ask for your password.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Why does Gripah show ads?",
    answer:
      "Free-tier users see ads served by Google AdMob to help support the app's development. AdMob may collect device identifiers for advertising purposes. Upgrading to Premium removes all ads entirely.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    question: "When will Gripah be available on the App Store and Google Play?",
    answer:
      "Gripah is coming soon to both the Apple App Store and Google Play Store. Stay tuned — we'll announce the launch date on this page. You can also reach out to support@gripah.com to be notified when the app goes live.",
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
        ? "border-lime-500/60 bg-neutral-900/80"
        : "border-lime-500/20 bg-neutral-900/40 hover:border-lime-500/40"
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className={`transition-colors duration-200 ${isOpen ? "text-lime-400" : "text-lime-500/60 group-hover:text-lime-400"}`}>
            {item.icon}
          </span>
          <span className={`font-semibold transition-colors duration-200 ${isOpen ? "text-white" : "text-lime-400/90 group-hover:text-white"}`}>
            {item.question}
          </span>
        </div>
        <span className={`shrink-0 transition-colors duration-200 ${isOpen ? "text-lime-400" : "text-lime-500/40 group-hover:text-lime-400"}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="px-5 pb-5 text-lime-500/80 leading-relaxed border-t border-lime-500/10 pt-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

export default function SupportPage() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a submission delay (replace with real API call)
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-lime-500 selection:bg-lime-500/30">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-lime-400 hover:text-white transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-10 h-10 text-lime-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Support</h1>
          </div>
          <p className="text-lime-500/60 text-lg leading-relaxed max-w-2xl">
            Have a question or need help? Browse our Frequently Asked Questions below, or send us a message and we'll get back to you as soon as possible.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="mb-20" aria-labelledby="faq-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-lime-500/20" />
            <h2 id="faq-heading" className="text-2xl font-bold text-lime-400 uppercase tracking-wider whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <div className="h-px flex-1 bg-lime-500/20" />
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openFAQ === index}
                onToggle={() => handleToggleFAQ(index)}
              />
            ))}
          </div>
        </section>

        {/* Contact / Ask a Question Section */}
        <section className="mb-20" aria-labelledby="contact-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-lime-500/20" />
            <h2 id="contact-heading" className="text-2xl font-bold text-lime-400 uppercase tracking-wider whitespace-nowrap">
              Ask a Question
            </h2>
            <div className="h-px flex-1 bg-lime-500/20" />
          </div>

          <div className="bg-neutral-900/60 border border-lime-500/20 rounded-2xl p-8">
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-lime-500/10 border border-lime-500/40 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-lime-500/70 max-w-md">
                  Thanks for reaching out. We'll review your message and get back to you at the email address you provided shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 text-sm text-lime-400 hover:text-white underline underline-offset-4 transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="support-name" className="text-sm font-semibold text-lime-400 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="support-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-black border border-lime-500/30 rounded-xl px-4 py-3 text-lime-500 placeholder-lime-500/30 focus:outline-none focus:border-lime-500/70 focus:ring-1 focus:ring-lime-500/40 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="support-email" className="text-sm font-semibold text-lime-400 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-black border border-lime-500/30 rounded-xl px-4 py-3 text-lime-500 placeholder-lime-500/30 focus:outline-none focus:border-lime-500/70 focus:ring-1 focus:ring-lime-500/40 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="support-subject" className="text-sm font-semibold text-lime-400 uppercase tracking-wider">
                    Topic
                  </label>
                  <select
                    id="support-subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-black border border-lime-500/30 rounded-xl px-4 py-3 text-lime-500 focus:outline-none focus:border-lime-500/70 focus:ring-1 focus:ring-lime-500/40 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-lime-500/30">
                      Select a topic…
                    </option>
                    <option value="account">Account & Login</option>
                    <option value="billing">Billing & Premium</option>
                    <option value="scanner">Receipt Scanner</option>
                    <option value="budgeting">Budgeting & Spending</option>
                    <option value="privacy">Privacy & Data</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="support-message" className="text-sm font-semibold text-lime-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="support-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question in detail…"
                    className="bg-black border border-lime-500/30 rounded-xl px-4 py-3 text-lime-500 placeholder-lime-500/30 focus:outline-none focus:border-lime-500/70 focus:ring-1 focus:ring-lime-500/40 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !form.name || !form.email || !form.subject || !form.message}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 disabled:bg-lime-500/30 disabled:cursor-not-allowed text-black font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-lime-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Direct Contact */}
        <section className="mb-20" aria-labelledby="direct-contact-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-lime-500/20" />
            <h2 id="direct-contact-heading" className="text-2xl font-bold text-lime-400 uppercase tracking-wider whitespace-nowrap">
              Contact Us Directly
            </h2>
            <div className="h-px flex-1 bg-lime-500/20" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:support@gripah.com"
              className="group bg-neutral-900/40 border border-lime-500/20 hover:border-lime-500/60 rounded-xl p-6 transition-all duration-200 flex items-start gap-4"
            >
              <div className="bg-lime-500/10 border border-lime-500/30 rounded-lg p-3 group-hover:bg-lime-500/20 transition-colors duration-200">
                <Mail className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email Support</p>
                <p className="text-lime-500/60 text-sm mb-3">We aim to respond within 1–2 business days.</p>
                <p className="text-lime-400 text-sm font-medium group-hover:underline underline-offset-2">support@gripah.com</p>
              </div>
            </a>

            <div className="bg-neutral-900/40 border border-lime-500/20 rounded-xl p-6 flex items-start gap-4">
              <div className="bg-lime-500/10 border border-lime-500/30 rounded-lg p-3">
                <MessageCircle className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Account Deletion</p>
                <p className="text-lime-500/60 text-sm mb-3">
                  To delete your account and all associated data, email us at{" "}
                  <a href="mailto:support@gripah.com" className="text-lime-400 hover:underline underline-offset-2">
                    support@gripah.com
                  </a>{" "}
                  with the subject line <span className="text-lime-400 font-medium">"Delete My Account"</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-lime-500/20 text-center">
          <p className="text-lime-500/40 text-sm">© 2026 Gripah. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
