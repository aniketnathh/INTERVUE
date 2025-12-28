import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#0B0F1A] via-[#111827] to-[#0B0F1A] text-gray-300">
      {/* NAVBAR */}
      <nav className="bg-black/60 backdrop-blur-md border-b border-cyan-600/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-mono tracking-wider">
                Intervue
              </span>
              <span className="text-xs text-gray-400 font-medium -mt-1">
                Code Together
              </span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg bg-cyan-700/30 text-cyan-300 border-cyan-500">
              <ZapIcon className="size-4 text-cyan-300" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="text-gray-300">Learn Together</span>
            </h1>

            <p className="text-xl text-gray-400/80 leading-relaxed max-w-xl">
              The ultimate platform for collaborative coding interviews and pair
              programming. Connect face-to-face, code in real-time, and ace your
              technical interviews.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline border-cyan-500 text-cyan-400">
                <CheckIcon className="size-4 text-cyan-400" />
                Live Video Chat
              </div>
              <div className="badge badge-lg badge-outline border-cyan-500 text-cyan-400">
                <CheckIcon className="size-4 text-cyan-400" />
                Code Editor
              </div>
              <div className="badge badge-lg badge-outline border-cyan-500 text-cyan-400">
                <CheckIcon className="size-4 text-cyan-400" />
                Multi-Language
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-cyan btn-lg">
                  Start Coding Now
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg border-cyan-600 text-cyan-400">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-black/50 shadow-lg border border-cyan-700/50">
              <div className="stat">
                <div className="stat-value text-cyan-400">10K+</div>
                <div className="stat-title text-gray-400">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-blue-400">50K+</div>
                <div className="stat-title text-gray-400">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-indigo-400">99.9%</div>
                <div className="stat-title text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/Intervue_hero.png"
            alt="CodeCollab Platform"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-black/50 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-cyan-400 font-mono">Succeed</span>
          </h2>
          <p className="text-lg text-gray-400/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card bg-black/50 shadow-xl border border-cyan-700/30">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-cyan-700/20 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-cyan-400" />
              </div>
              <h3 className="card-title text-gray-300">HD Video Call</h3>
              <p className="text-gray-400/80">
                Crystal clear video and audio for seamless communication during
                interviews
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card bg-black/50 shadow-xl border border-cyan-700/30">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-cyan-700/20 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-cyan-400" />
              </div>
              <h3 className="card-title text-gray-300">Live Code Editor</h3>
              <p className="text-gray-400/80">
                Collaborate in real-time with syntax highlighting and multiple
                language support
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card bg-black/50 shadow-xl border border-cyan-700/30">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-cyan-700/20 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-cyan-400" />
              </div>
              <h3 className="card-title text-gray-300">Easy Collaboration</h3>
              <p className="text-gray-400/80">
                Share your screen, discuss solutions, and learn from each other
                in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
