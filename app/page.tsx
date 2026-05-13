"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const targetAudience = [
  { icon: "🎮", label: "Adults aged 18+ seeking fast-paced prediction challenges" },
  { icon: "📱", label: "Pakistani mobile users exploring real earning apps" },
  { icon: "🧠", label: "Strategy enthusiasts who enjoy skill-based decision-making" },
  { icon: "💰", label: "Gamers familiar with JazzCash and Easypaisa payment systems" },
  { icon: "🏆", label: "Competitive players interested in ranked tournaments and events" },
];

const gameModes = [
  {
    mode: "Practice Mode",
    difficulty: "Beginner",
    reward: "No real money",
    duration: "Unlimited",
    risk: "None",
    riskColor: "text-green-600 bg-green-50",
  },
  {
    mode: "Color Prediction",
    difficulty: "Easy – Medium",
    reward: "2× – 10× stake",
    duration: "30 – 60 sec",
    risk: "Medium",
    riskColor: "text-amber-600 bg-amber-50",
  },
  {
    mode: "Number Pattern",
    difficulty: "Medium",
    reward: "Up to 15× stake",
    duration: "60 – 90 sec",
    risk: "High",
    riskColor: "text-red-600 bg-red-50",
  },
  {
    mode: "Mini Slots",
    difficulty: "Easy",
    reward: "Variable multipliers",
    duration: "10 – 20 sec",
    risk: "High",
    riskColor: "text-red-600 bg-red-50",
  },
  {
    mode: "Card Quick Rounds",
    difficulty: "Medium",
    reward: "2× – 8× stake",
    duration: "20 – 40 sec",
    risk: "Medium",
    riskColor: "text-amber-600 bg-amber-50",
  },
  {
    mode: "Tournament Events",
    difficulty: "Advanced",
    reward: "Prize pool splits",
    duration: "Time-limited",
    risk: "Varies",
    riskColor: "text-purple-600 bg-purple-50",
  },
];

const systemRequirements = [
  {
    spec: "Operating System",
    android: "Android 5.0 (Lollipop) or higher",
    ios: "iOS 12.0 or higher",
  },
  {
    spec: "Free Storage",
    android: "Min 100 MB (500 MB recommended)",
    ios: "Min 150 MB (500 MB recommended)",
  },
  { spec: "RAM", android: "2 GB minimum, 3 GB recommended", ios: "2 GB minimum" },
  {
    spec: "Internet",
    android: "Stable 3G / 4G / Wi-Fi",
    ios: "Stable 3G / 4G / Wi-Fi",
  },
  {
    spec: "Special Setting",
    android: "Unknown sources must be enabled",
    ios: "Developer profile trust step required",
  },
  {
    spec: "Account",
    android: "Phone number or email registration",
    ios: "Phone number or email registration",
  },
];

const withdrawalMethods = [
  {
    method: "JazzCash",
    flag: "🟢",
    minAmount: "PKR 200",
    processingTime: "10 min – 2 hours",
    fees: "Platform dependent",
    availability: "24 / 7",
  },
  {
    method: "Easypaisa",
    flag: "🟢",
    minAmount: "PKR 200",
    processingTime: "10 min – 2 hours",
    fees: "Platform dependent",
    availability: "24 / 7",
  },
  {
    method: "Bank Transfer",
    flag: "🔵",
    minAmount: "PKR 1,000",
    processingTime: "1 – 3 business days",
    fees: "May apply",
    availability: "Business hours",
  },
  {
    method: "In-app Wallet",
    flag: "⚪",
    minAmount: "No minimum",
    processingTime: "Instant",
    fees: "None",
    availability: "Always",
  },
];

const androidSteps = [
  {
    title: "Find the Official Download Source",
    desc: "Open your mobile browser and search for the official HD77 game APK. Verify the domain carefully — fake mirror sites are common. Only download from the platform's own verified URL.",
  },
  {
    title: "Confirm Version and APK Details",
    desc: "On the official page, locate the APK download link and confirm it matches the latest 2026 release. Check the file size and version number before proceeding.",
  },
  {
    title: "Enable Unknown Sources Installation",
    desc: "Navigate to Settings → Security (or Privacy on Android 8+) and enable 'Install from Unknown Sources' or 'Allow this source'. This is required for all sideloaded APK files.",
  },
  {
    title: "Download the APK File",
    desc: "Tap the official download link and wait for the APK to fully save to your Downloads folder. Do not close the browser or interrupt the connection during download.",
  },
  {
    title: "Install and Review Permissions",
    desc: "Open the APK from your file manager or Downloads app, tap Install, and carefully review the requested permissions. Grant only what the app genuinely needs to function.",
  },
  {
    title: "Launch HD77 and Create Your Account",
    desc: "Open HD77 from your app drawer. Register with your phone number or email, verify your identity, and set a daily budget limit before entering any paid rounds.",
  },
];

const iosSteps = [
  {
    title: "Open Safari and Navigate to Official Source",
    desc: "On your iPhone or iPad, open Safari and go directly to the official HD77 platform website. Avoid App Store alternatives or third-party download pages for safety.",
  },
  {
    title: "Follow the iOS-Specific Install Method",
    desc: "iOS installation may require a TestFlight link, web clip shortcut, or MDM configuration profile. Follow the exact method outlined on the official HD77 source page.",
  },
  {
    title: "Trust the Developer Profile",
    desc: "After installation, open Settings → General → VPN & Device Management. Find the developer certificate associated with HD77 and tap 'Trust' to allow the app to run.",
  },
  {
    title: "Launch and Complete Account Setup",
    desc: "Open HD77, complete your registration using your phone number or email, verify your account, and review the platform's terms and withdrawal policies before depositing.",
  },
];

const beginnerTips = [
  {
    icon: "🎯",
    title: "Begin in Practice Mode",
    desc: "Always start in free practice mode. Learn how each game type works, observe round patterns, and get comfortable with the interface before risking real money.",
  },
  {
    icon: "💳",
    title: "Set a Strict Daily Budget",
    desc: "Before each session, decide the maximum amount you can afford to lose. Stop immediately once you reach that limit, regardless of momentum or recent results.",
  },
  {
    icon: "📊",
    title: "Observe Patterns — Never Chase Losses",
    desc: "Study historical round results across sessions. However, no historical pattern guarantees future outcomes. Never increase bets to recover losses emotionally.",
  },
  {
    icon: "🔄",
    title: "Keep the App Updated",
    desc: "Always run the latest HD77 version. Updates include security patches, revised withdrawal rules, and new game mechanics that directly affect your strategy.",
  },
  {
    icon: "🔒",
    title: "Protect Your Login Credentials",
    desc: "Use a strong, unique password and enable any available two-factor authentication. Never share your login details with anyone, including people claiming to be support agents.",
  },
];

const pros = [
  "Real cash reward potential through color and number prediction rounds",
  "Supports local Pakistani payment channels — JazzCash and Easypaisa",
  "Lightweight APK compatible with many budget Android devices",
  "Quick round cycles ideal for short 5 – 15 minute sessions",
  "Multiple game modes from free practice to competitive tournaments",
  "Regular platform updates with new promotions and limited events",
];

const cons = [
  "High financial risk comparable to gambling — losses can exceed deposits",
  "No clear regulatory oversight or consumer protection for Pakistani users",
  "Frequent fake APK clones and scam mirror sites undermine platform trust",
  "Withdrawal limits, processing times, and fees can change without notice",
  "Results are probability-based — no strategy guarantees consistent profit",
  "Repetitive round formats may trigger addictive behaviour patterns",
];

const faqs = [
  {
    question: "Is HD77 game safe and legitimate in Pakistan?",
    answer:
      "HD77 operates in a high-risk, largely unregulated category in Pakistan. Some users report successful withdrawals, while others describe delays or account restrictions. Always verify you are on the official domain, avoid third-party APK agents, and deposit only money you can genuinely afford to lose. No regulatory body guarantees payouts.",
  },
  {
    question: "Can I really earn money from HD77 game?",
    answer:
      "Some users do receive payouts, but results are highly variable and depend on prediction accuracy, session discipline, platform availability, and policy changes at any given time. HD77 should never be treated as a stable or reliable income source. Approach it strictly as entertainment with the possibility of occasional rewards.",
  },
  {
    question: "What are the minimum system requirements for HD77 APK?",
    answer:
      "HD77 requires Android 5.0 or higher with at least 2 GB RAM and 100 MB free storage, or iOS 12.0 or higher. A stable 4G or Wi-Fi connection is recommended. Keep at least 500 MB free to accommodate updates and app cache without performance issues.",
  },
  {
    question: "How do I withdraw money from HD77 to JazzCash or Easypaisa?",
    answer:
      "Reach the platform minimum withdrawal threshold (typically PKR 200), open the wallet section inside HD77, select JazzCash or Easypaisa, and enter the phone number that exactly matches your registered account. Submit the request and wait for confirmation. Processing usually takes 10 minutes to 2 hours, but can extend to 72 hours during high-traffic or verification periods.",
  },
  {
    question: "What do I do if I forget my HD77 login password?",
    answer:
      "On the HD77 login screen, tap 'Forgot Password' and enter your registered phone number or email address. You will receive a verification code. Enter the code, create a new password, and sign back in. If recovery fails, contact official platform support directly — never use third-party agents who claim to recover accounts.",
  },
  {
    question: "Is there a minimum deposit requirement on HD77?",
    answer:
      "Minimum deposit amounts vary and are subject to change without notice. Always check the current rules inside the app wallet section before adding funds. Start with the lowest possible deposit while you are still learning the platform and evaluating its reliability.",
  },
  {
    question: "Why is the HD77 APK not installing on my Android phone?",
    answer:
      "First, confirm 'Unknown Sources' is enabled in Settings → Security. Then verify you have at least 200 MB free storage, your Android version is 5.0 or higher, and the APK was downloaded from the official source without corruption. Clear your browser cache and re-download the file if the problem continues.",
  },
  {
    question: "Is HD77 game suitable for all ages?",
    answer:
      "No. HD77 is strictly intended for adults aged 18 and above due to its real-money mechanics, gambling-adjacent prediction formats, and financial risk. The platform is not appropriate for minors and should never be accessed by anyone under 18 under any circumstances.",
  },
];

// ─── SCHEMA DATA ──────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToDownloadSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download HD77 Game APK on Android",
  description:
    "Step-by-step guide to safely download and install the HD77 game APK on an Android device in Pakistan.",
  step: androidSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

const howToWithdrawSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Withdraw Money from HD77 Game to JazzCash or Easypaisa",
  description:
    "Complete guide to withdrawing earnings from HD77 game to JazzCash or Easypaisa in Pakistan.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Reach Minimum Withdrawal Threshold",
      text: "Ensure your HD77 wallet balance meets the platform's minimum withdrawal amount (typically PKR 200).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Open the Wallet Section",
      text: "Navigate to the wallet or withdrawal panel inside the HD77 app.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select Your Payout Method",
      text: "Choose JazzCash, Easypaisa, or bank transfer as your preferred withdrawal method.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Enter Account Details",
      text: "Enter your registered phone number exactly as it appears on your HD77 profile.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Submit and Await Confirmation",
      text: "Submit the withdrawal request and wait for the processing confirmation message.",
    },
  ],
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [platform, setPlatform] = useState<"android" | "ios">("android");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const currentSteps = platform === "android" ? androidSteps : iosSteps;

  return (
    <>
      {/* ── STICKY NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-amber-400 tracking-tight group-hover:text-amber-300 transition-colors">
              HD77
            </span>
            <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
              Game Guide
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {[
              ["#overview", "Overview"],
              ["#features", "Features"],
              ["#download", "Download"],
              ["#withdrawal", "Withdrawal"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#download"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
          >
            Download APK
          </a>
        </div>
      </header>

      <main className="bg-white text-slate-800">
        {/* ── HERO ── */}
        <section
          id="top"
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 md:py-24 px-4"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                HD77 Game Complete Guide — 2026
              </span>
              <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                HD77 Game Download Pakistan 2026 —{" "}
                <span className="text-amber-400">Real Earning App Guide</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                HD77 is a real earning app popular in Pakistan that lets users play color
                prediction rounds, number games, and mini-slots for potential cash rewards
                via JazzCash and Easypaisa. This 2026 guide covers safe APK download, HD77
                login, deposit strategy, withdrawal steps, and responsible gameplay tips.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#download"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
                >
                  📥 Download HD77 APK
                </a>
                <a
                  href="#overview"
                  className="border border-slate-500 hover:border-amber-400 hover:text-amber-400 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Full Overview →
                </a>
              </div>
            </div>
            <figure className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
              <Image
                src="/images/hd22-game.png"
                alt="HD77 game home screen showing prediction rounds and earning features on Android"
                width={1200}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
            </figure>
          </div>

          {/* Stats Bar */}
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "App Name", value: "HD77 Game" },
              { label: "Category", value: "Prediction & Mini-Games" },
              { label: "Primary Region", value: "Pakistan" },
              { label: "Payment Support", value: "JazzCash & Easypaisa" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-base font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTRO / WHY HD77 ── */}
        <section id="intro" className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
                2026 Updated Guide
              </span>
              <h2 className="text-3xl font-black mt-2 mb-4 text-slate-900">
                Why HD77 Game Is Getting Attention Across Pakistan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                HD77 has grown into one of the most-searched real earning apps in Pakistan
                due to its simple mechanics, fast round cycles, and direct support for local
                payment channels. In this updated 2026 guide, you will learn how to safely
                download the HD77 APK, create and secure your account, navigate the deposit
                and withdrawal flow, and apply responsible strategies to manage risk.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Players who explore the prediction app space in Pakistan often compare HD77
                against alternatives like <strong>DK11 game</strong>,{" "}
                <strong>DK 777 game</strong>, and <strong>Q5bat game</strong>. This guide
                focuses exclusively on HD77 to give you the clearest, most accurate picture
                of what the platform offers in 2026.
              </p>
              {/* Disclaimer badge */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <span className="text-amber-500 text-xl">⚠️</span>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Important:</strong> HD77 involves real financial risk. This guide
                  is informational only. Only use the platform if you are 18+ and can afford
                  to lose any deposited funds.
                </p>
              </div>
            </div>
            <figure className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hd22game.png"
                alt="HD77 dashboard interface showing game categories, prediction tools, and wallet section"
                width={1200}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </figure>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section id="overview" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Platform Overview
            </span>
            <h2 className="text-3xl font-black mt-2 mb-6 text-slate-900">
              What Is HD77 Game? A Comprehensive Platform Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  HD77 is an online earning platform where registered users play
                  prediction-based and casino-style mini-games to win real money. In
                  Pakistan it is widely known as a <strong>color prediction app</strong> or{" "}
                  <strong>color trading app</strong> — you select a color, combination, or
                  number, wait a short countdown, and receive an instant outcome that
                  determines whether you win a multiplier of your stake or lose it.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unlike story-driven mobile games with XP progression, HD77 is structured
                  around risk and reward cycles. That places it much closer to online
                  gambling behaviour than casual gaming, which is why the platform is
                  restricted to adults aged 18 and above with clearly defined financial
                  limits.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Withdrawals are processed through <strong>JazzCash</strong>,{" "}
                  <strong>Easypaisa</strong>, and in some cases direct bank transfer —
                  making it accessible to users across Pakistan without needing an
                  international card or e-wallet.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Target Audience</h3>
                <ul className="space-y-3">
                  {targetAudience.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Platform Features
            </span>
            <h2 className="text-3xl font-black mt-2 mb-2 text-slate-900">
              Key Features and Gameplay Mechanics of HD77
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              Understanding HD77's core mechanics helps you make better decisions and
              manage risk effectively before committing real funds to the platform.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {[
                {
                  icon: "⚡",
                  title: "Fast Round Cycles",
                  desc: "Prediction rounds complete in 10–90 seconds, making HD77 suitable for short sessions between tasks.",
                },
                {
                  icon: "📱",
                  title: "Mobile-Optimised UI",
                  desc: "Clean interface built for Android and iOS with responsive controls, clear menus, and minimal loading time.",
                },
                {
                  icon: "🎯",
                  title: "Multiple Game Formats",
                  desc: "Color prediction, number patterns, mini-slots, card rounds, and competitive tournament formats.",
                },
                {
                  icon: "💳",
                  title: "Local Payment Integration",
                  desc: "Native support for JazzCash and Easypaisa — the two most widely used mobile wallets in Pakistan.",
                },
                {
                  icon: "📊",
                  title: "Result History Access",
                  desc: "View historical round results to observe patterns before placing predictions in competitive modes.",
                },
                {
                  icon: "🔔",
                  title: "Promotions and Events",
                  desc: "Regular bonus offers, referral programs, and time-limited tournament events with prize pool rewards.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-3xl mb-3 block">{f.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Game Modes Table */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              HD77 Game Modes Comparison
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    {["Game Mode", "Difficulty", "Reward Range", "Round Duration", "Risk Level"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-semibold whitespace-nowrap"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {gameModes.map((row, i) => (
                    <tr
                      key={row.mode}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {row.mode}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.difficulty}</td>
                      <td className="px-4 py-3 text-slate-600">{row.reward}</td>
                      <td className="px-4 py-3 text-slate-600">{row.duration}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block text-xs font-bold px-2 py-1 rounded-full ${row.riskColor}`}
                        >
                          {row.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD ── */}
        <section id="download" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Installation Guide
            </span>
            <h2 className="text-3xl font-black mt-2 mb-2 text-slate-900">
              How to Download HD77 APK — Android and iOS
            </h2>
            <p className="text-slate-500 mb-8">
              Follow the official steps below to safely install HD77 on your device. Never
              use modified APKs that promise guaranteed wins or unlimited balance.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                {/* Platform Toggle */}
                <div className="flex bg-slate-100 rounded-xl p-1 mb-6 w-fit">
                  {(["android", "ios"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                        platform === p
                          ? "bg-amber-500 text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {p === "android" ? "📱 Android" : "🍎 iOS"}
                    </button>
                  ))}
                </div>

                {/* Steps */}
                <ol className="space-y-4">
                  {currentSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-slate-900 font-black text-sm flex items-center justify-center shadow-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-6">
                <figure className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hd77.jpeg"
                    alt="HD77 APK installation steps on Android and iOS showing settings screen and app drawer"
                    width={1200}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="w-full h-auto object-cover"
                  />
                </figure>

                {/* System Requirements Table */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    System Requirements
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-700 text-white">
                        <tr>
                          <th className="px-3 py-2 text-left font-semibold">Spec</th>
                          <th className="px-3 py-2 text-left font-semibold">Android</th>
                          <th className="px-3 py-2 text-left font-semibold">iOS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {systemRequirements.map((row, i) => (
                          <tr
                            key={row.spec}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                          >
                            <td className="px-3 py-2 font-medium text-slate-700 whitespace-nowrap">
                              {row.spec}
                            </td>
                            <td className="px-3 py-2 text-slate-600">{row.android}</td>
                            <td className="px-3 py-2 text-slate-600">{row.ios}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BEGINNER TIPS ── */}
        <section id="tutorial" className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Beginner Strategy
            </span>
            <h2 className="text-3xl font-black mt-2 mb-2 text-slate-900">
              How to Play HD77 Game: Responsible Beginner Guide
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              After completing HD77 login and account setup, follow these evidence-based
              tips to play responsibly and reduce unnecessary financial exposure.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {beginnerTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{tip.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WITHDRAWAL ── */}
        <section id="withdrawal" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Payout Guide
            </span>
            <h2 className="text-3xl font-black mt-2 mb-2 text-slate-900">
              HD77 Withdrawal Guide — JazzCash, Easypaisa & Bank Transfer
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              Winnings are held in your HD77 in-app wallet. Follow these steps to move
              your earnings to your preferred local payment method.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Steps */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5">
                  Step-by-Step Withdrawal Process
                </h3>
                <ol className="space-y-4">
                  {[
                    {
                      title: "Meet the Minimum Threshold",
                      desc: "Ensure your wallet balance reaches the platform's minimum withdrawal amount before requesting a payout.",
                    },
                    {
                      title: "Open the Wallet Section",
                      desc: "Inside HD77, navigate to the Wallet or Withdrawal panel from the main navigation menu.",
                    },
                    {
                      title: "Select Your Payout Method",
                      desc: "Choose JazzCash, Easypaisa, or bank transfer depending on what is available at the time of withdrawal.",
                    },
                    {
                      title: "Enter Your Account Details",
                      desc: "Type your registered phone number exactly as it appears on your HD77 profile. Mismatches can cause withdrawal failures.",
                    },
                    {
                      title: "Submit and Monitor Your Request",
                      desc: "Tap Submit and keep your app open to monitor the processing status. Save your confirmation reference number.",
                    },
                  ].map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white font-black text-sm flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-800 leading-relaxed">
                    <strong>⚠️ Disclaimer:</strong> Withdrawals are never guaranteed.
                    Processing times, minimum amounts, and fees can change without notice.
                    Never treat HD77 earnings as a reliable income stream.
                  </p>
                </div>
              </div>

              {/* Methods Table */}
              <div>
                <figure className="rounded-2xl overflow-hidden shadow-xl mb-6">
                  <Image
                    src="/images/hd22game.png"
                    alt="HD77 wallet section showing withdrawal options including JazzCash and Easypaisa"
                    width={1200}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Withdrawal Methods Comparison
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-800 text-white">
                      <tr>
                        {[
                          "Method",
                          "Min Amount",
                          "Processing",
                          "Fees",
                          "Availability",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-3 py-2 text-left font-semibold whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {withdrawalMethods.map((row, i) => (
                        <tr
                          key={row.method}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-3 py-2 font-semibold text-slate-800">
                            <span className="mr-1">{row.flag}</span>
                            {row.method}
                          </td>
                          <td className="px-3 py-2 text-slate-600">{row.minAmount}</td>
                          <td className="px-3 py-2 text-slate-600">
                            {row.processingTime}
                          </td>
                          <td className="px-3 py-2 text-slate-600">{row.fees}</td>
                          <td className="px-3 py-2 text-slate-600">{row.availability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROS & CONS ── */}
        <section id="analysis" className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Honest Analysis
            </span>
            <h2 className="text-3xl font-black mt-2 mb-8 text-slate-900">
              HD77 Game Pros and Cons — Balanced Review 2026
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-green-600 text-white px-5 py-3 text-left font-bold text-base w-1/2">
                      ✅ Pros
                    </th>
                    <th className="bg-red-600 text-white px-5 py-3 text-left font-bold text-base w-1/2">
                      ❌ Cons
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pros.map((pro, i) => (
                    <tr key={pro} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 text-slate-700 border-r border-slate-100">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </td>
                      <td className="px-5 py-3 text-slate-700">
                        <span className="text-red-400 mr-2">✗</span>
                        {cons[i] ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm text-center max-w-2xl mx-auto">
              The cons above are not reasons to avoid HD77 entirely, but they are reasons
              to approach it with caution, strict budgeting, and clear personal limits.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Common Questions
            </span>
            <h2 className="text-3xl font-black mt-2 mb-2 text-slate-900">
              Frequently Asked Questions About HD77 Game
            </h2>
            <p className="text-slate-500 mb-8">
              Everything Pakistani players ask about HD77 login, download, withdrawal, and
              responsible gameplay — answered clearly.
            </p>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <article
                  key={item.question}
                  className="border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <h3 className="font-bold text-slate-800 pr-4 text-sm md:text-base">
                      {item.question}
                    </h3>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                        openFaq === i
                          ? "bg-amber-500 text-slate-900 rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed text-sm pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section
          id="conclusion"
          className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Final Verdict
            </span>
            <h2 className="text-3xl font-black mb-4">
              Is HD77 Game Worth Your Time in 2026?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              HD77 can be genuinely engaging for users who enjoy fast-paced prediction
              rounds, competitive modes, and the possibility of winning real money through
              JazzCash or Easypaisa. The platform's lightweight design and local payment
              integration make it one of the more accessible earning apps in Pakistan.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              However, financial risk is real and significant. Enter with realistic
              expectations, a strict daily budget, and a clear understanding that no
              prediction app guarantees profit. Treat HD77 as entertainment — not income —
              and you will have a far safer experience.
            </p>
            <a
              href="#download"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg inline-block"
            >
              📥 Download HD77 APK Safely
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-slate-900 text-slate-400 py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-lg">
                HD77 <span className="text-amber-400">Game Guide</span>
              </p>
              <p className="text-sm mt-1">Pakistan's Complete HD77 Reference — Updated 2026</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer navigation">
              {[
                ["#top", "Introduction"],
                ["#overview", "Overview"],
                ["#download", "Download"],
                ["#withdrawal", "Withdrawal"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <p className="text-xs text-slate-600 text-center md:text-right">
              For adults 18+ only. High financial risk. Not financial advice.
            </p>
          </div>
        </footer>
      </main>

      {/* ── SCROLL TO TOP ── */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black w-11 h-11 rounded-full shadow-xl flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* ── STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToDownloadSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToWithdrawSchema) }}
      />
    </>
  );
}