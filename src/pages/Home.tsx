import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Zap, Lock, Eye, CheckCircle, Users, Rocket } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [tokenomicsData] = useState([
    { label: "Validator Rewards", value: 35, amount: "19.6M", color: "from-blue-500 to-cyan-400" },
    { label: "Community & Ecosystem", value: 25, amount: "14M", color: "from-cyan-400 to-blue-400" },
    { label: "Liquidity & Exchanges", value: 15, amount: "8.4M", color: "from-blue-400 to-indigo-500" },
    { label: "Treasury / DAO Reserve", value: 15, amount: "8.4M", color: "from-indigo-500 to-purple-500" },
    { label: "Core Team & Advisors", value: 9, amount: "5.04M", color: "from-purple-500 to-blue-600" },
    { label: "Developer (Nomos Hex)", value: 1, amount: "560k", color: "from-blue-600 to-cyan-500" },
  ]);

  const [burnedTokens, setBurnedTokens] = useState(0);
  const [displayedBurned, setDisplayedBurned] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate burned tokens counter
  useEffect(() => {
    const targetBurned = 1250000;
    const increment = targetBurned / 100;
    let current = 0;
    const timer = setInterval(() => {
      if (current < targetBurned) {
        current += increment;
        setDisplayedBurned(Math.floor(current));
      } else {
        setDisplayedBurned(targetBurned);
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Community",
      timeframe: "Sept 2025",
      milestones: [
        "Finalize Whitepaper",
        "Launch Testnet Alpha",
        "Security Audit",
      ],
    },
    {
      phase: "Phase 2",
      title: "Token Launch & Staking",
      timeframe: "Oct 2025 – Jan 2026",
      milestones: [
        "Token Generation Event",
        "Airdrop",
        "Pre-Validator Staking",
      ],
    },
    {
      phase: "Phase 3",
      title: "Mainnet Beta Launch",
      timeframe: "Jan – Jun 2026",
      milestones: [
        "Model Commitment Activation",
        "Validator Program",
        "Audit Tools Integration",
      ],
    },
  ];

  const solutionCards = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Data Provenance",
      description: "Verified datasets with cryptographic proof of origin and processing methodology.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Model Commitment",
      description: "Cryptographically locked algorithms with integrity bonds through token staking.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Execution Auditing",
      description: "Real-time, immutable logs of every critical AI decision on blockchain.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Decentralized Verification",
      description: "Validator-based truth system ensuring algorithmic accountability.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="CRYZESE" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CRYZESE
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-gray-300 hover:text-cyan-400 transition">About</a>
            <a href="#solution" className="text-sm text-gray-300 hover:text-cyan-400 transition">Solution</a>
            <a href="#tokenomics" className="text-sm text-gray-300 hover:text-cyan-400 transition">Tokenomics</a>
            <a href="#roadmap" className="text-sm text-gray-300 hover:text-cyan-400 transition">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Neural network animation */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Animated neural nodes */}
          <circle cx="20%" cy="30%" r="3" fill="#06b6d4" filter="url(#glow)" className="animate-pulse" />
          <circle cx="80%" cy="40%" r="3" fill="#0ea5e9" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="50%" cy="70%" r="3" fill="#06b6d4" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
          <line x1="80%" y1="40%" x2="50%" y2="70%" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
        </svg>

        <div className="container relative z-10 text-center">
          <div className="mb-8 animate-fade-in">
            <img src={APP_LOGO} alt="CRYZESE" className="h-32 w-32 mx-auto mb-8 drop-shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            CRYZESE
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-4">
            The Decentralized AI Accountability Protocol
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Empowering transparency, trust, and integrity in artificial intelligence through blockchain verification.
          </p>

          {/* Glow wave animation */}
          <div className="relative h-20 mb-12">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q300,0 600,50 T1200,50"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cryzese-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-cyan-500/50">
                Read Whitepaper <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-lg">
                Join Telegram <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-lg">
                Follow on X <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Trust Reinvented
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cryzese integrates AI systems with blockchain integrity, creating a decentralized protocol for full transparency and accountability. Powered by the Nomos Hex Protocol, it enforces ethical AI behavior through cryptographic verification and economic incentives.
              </p>
              <p className="text-gray-400 text-base">
                By combining the immutable ledger of blockchain with the operational lifecycle of AI models, Cryzese ensures that algorithmic integrity is not a claim but a verifiable, on-chain truth.
              </p>
            </div>
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg blur-2xl"></div>
              <svg className="relative w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                {/* Neural nodes */}
                <circle cx="200" cy="100" r="8" fill="url(#nodeGradient)" className="animate-pulse" />
                <circle cx="100" cy="200" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                <circle cx="300" cy="200" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                <circle cx="200" cy="300" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
                {/* Connecting lines */}
                <line x1="200" y1="100" x2="100" y2="200" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="100" x2="300" y2="200" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
                <line x1="100" y1="200" x2="200" y2="300" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
                <line x1="300" y1="200" x2="200" y2="300" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
                {/* Center blockchain node */}
                <circle cx="200" cy="200" r="12" fill="none" stroke="#0ea5e9" strokeWidth="2" className="animate-spin" style={{ animationDuration: "3s" }} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-950/20 to-orange-950/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 flex items-center justify-center order-2 md:order-1">
              <div className="relative w-64 h-64">
                {/* Animated cube to sphere transformation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg animate-pulse opacity-50 shadow-2xl shadow-red-500/50"></div>
                  <div className="absolute w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-70 shadow-2xl shadow-cyan-500/50"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                The AI Black Box Crisis
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Centralized AI systems make opaque decisions that shape lives—without accountability. From loan denials to healthcare diagnoses, algorithmic bias remains hidden behind proprietary walls.
              </p>
              <p className="text-gray-400 text-base">
                This opacity shields unfair outcomes from public audit, allowing systemic biases to propagate at scale. The current AI ecosystem is fundamentally incompatible with the principles of transparency and trust demanded by Web3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The 4-Stage Auditable AI Cycle
            </h2>
            <p className="text-gray-400 text-lg">
              Cryzese enforces integrity through four cryptographic stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutionCards.map((card, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-blue-900/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cryzese Token ($CRZ)
            </h2>
            <p className="text-gray-400 text-lg">
              Fueling Transparency. Powering Accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Donut Chart */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {tokenomicsData.map((item, index) => {
                    const startAngle = tokenomicsData.slice(0, index).reduce((sum, d) => sum + (d.value * 3.6), 0);
                    const endAngle = startAngle + item.value * 3.6;
                    const radius = 80;
                    const innerRadius = 50;

                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;

                    const x1 = 100 + radius * Math.cos(startRad);
                    const y1 = 100 + radius * Math.sin(startRad);
                    const x2 = 100 + radius * Math.cos(endRad);
                    const y2 = 100 + radius * Math.sin(endRad);

                    const ix1 = 100 + innerRadius * Math.cos(startRad);
                    const iy1 = 100 + innerRadius * Math.sin(startRad);
                    const ix2 = 100 + innerRadius * Math.cos(endRad);
                    const iy2 = 100 + innerRadius * Math.sin(endRad);

                    const largeArc = item.value > 50 ? 1 : 0;

                    const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;

                    return (
                      <path
                        key={index}
                        d={pathData}
                        fill={item.color.split(" ")[1]}
                        opacity="0.8"
                        className="hover:opacity-100 transition-opacity cursor-pointer"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-cyan-400">56M</p>
                    <p className="text-sm text-gray-400">Total Supply</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokenomics Details */}
            <div className="space-y-4">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="text-cyan-400 font-bold">{item.value}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{item.amount}</span>
                    <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Counters */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-blue-900/30 text-center">
              <p className="text-gray-400 mb-2">Total Supply</p>
              <p className="text-4xl font-bold text-cyan-400">56,000,000 CRZ</p>
            </div>
            <div className="p-8 rounded-lg border border-red-500/30 bg-gradient-to-br from-slate-900/50 to-red-900/30 text-center">
              <p className="text-gray-400 mb-2">Burned Tokens</p>
              <p className="text-4xl font-bold text-red-400">{displayedBurned.toLocaleString()} CRZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Project Roadmap
            </h2>
            <p className="text-gray-400 text-lg">
              Phased deployment towards full decentralized verification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {roadmapPhases.map((item, index) => (
              <div
                key={index}
                className="relative p-8 rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-blue-900/30 hover:border-cyan-500/60 transition-all"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.phase}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{item.timeframe}</p>
                <ul className="space-y-2">
                  {item.milestones.map((milestone, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mainnet Launch Banner */}
          <div className="relative p-12 rounded-lg border-2 border-cyan-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                🚀 Mainnet Launch
              </h3>
              <p className="text-xl text-cyan-400 font-semibold">Mid 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 to-blue-950/30">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Join the Cryzese Revolution
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Be part of the next evolution in AI integrity and decentralized trust. Together, we're building a transparent, accountable future for artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-cyan-500/50">
                <Users className="mr-2 w-5 h-5" />
                Join Telegram
              </Button>
            </a>
            <a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-blue-500/50">
                <Users className="mr-2 w-5 h-5" />
                Follow on X
              </Button>
            </a>
            <a href="https://www.cryzese.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-lg">
                Visit Website <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Neural wave background */}
          <div className="relative h-32 flex items-center justify-center opacity-30">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="communityWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q300,0 600,50 T1200,50"
                fill="none"
                stroke="url(#communityWave)"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-cyan-500/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt="CRYZESE" className="h-8 w-8" />
                <span className="font-bold text-white">CRYZESE</span>
              </div>
              <p className="text-sm text-gray-400">
                Decentralized AI Accountability Protocol on BNB Chain
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
                <li><a href="/cryzese-whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Whitepaper</a></li>
                <li><a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Twitter</a></li>
                <li><a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Countdown</h4>
              <div className="text-center p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20">
                <p className="text-sm text-gray-400 mb-2">Mainnet Launch</p>
                <p className="text-2xl font-bold text-cyan-400">Mid 2026</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Cryzese — Integrity Secured.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
