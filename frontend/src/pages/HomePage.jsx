import { Link } from "react-router";
import {
  ArrowRightIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-black text-white">
      {/* ANIME FLOATING BLOBS */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[140px]" />

      {/* NAVBAR */}
      <nav className="relative z-50 px-8 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <SparklesIcon className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-extrabold tracking-widest">
            INTERVUE
          </span>
        </Link>

        <SignInButton mode="modal">
          <button className="px-6 py-2 rounded-full bg-green-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition">
            Get Started
          </button>
        </SignInButton>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
            <ZapIcon className="w-4 h-4" />
            Real-Time Interview Arena
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-[1.1]">
            <span className="block text-green-400">Code.</span>
            <span className="block">Fight Fear.</span>
            <span className="block text-emerald-300">Win Interviews.</span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl">
            The ultimate platform for collaborative coding interviews and pair
            programming. Connect face-to-face, code in real-time, and ace your
            technical interviews.
          </p>

          <div className="flex gap-6">
            <SignInButton mode="modal">
              <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold flex items-center gap-3 hover:scale-105 transition">
                Start Session
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </SignInButton>

            <button className="px-8 py-4 rounded-xl border border-green-500/40 text-green-300 hover:bg-green-500/10 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT – ANIME PANEL */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 to-transparent rounded-[2rem] rotate-3 group-hover:rotate-6 transition duration-500" />

          <img
            src="/hero.png"
            alt="Interview Arena"
            className="relative z-10 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-green-500/20 group-hover:scale-101 transition duration-500"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: VideoIcon,
              title: "Live Video Duel",
              text: "Ultra-clear video for real interview pressure.",
            },
            {
              icon: Code2Icon,
              title: "Real-Time Code Sync",
              text: "Write, erase, think together — instantly.",
            },
            {
              icon: UsersIcon,
              title: "1v1 Focus Mode",
              text: "No noise. Just you and the problem.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-black border border-green-500/20 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)] transition duration-500"
            >
              <f.icon className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-white/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
