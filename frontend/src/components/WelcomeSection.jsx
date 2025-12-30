import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between gap-10">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <SparklesIcon className="w-7 h-7 text-green-400" />
              </div>

              <h1 className="text-5xl font-black text-green-300 tracking-tight">
                Welcome back,{" "}
                <span className="text-green-400">
                  {user?.firstName || "warrior"}
                </span>
              </h1>
            </div>

            <p className="text-xl text-green-300/60 ml-16">
              Sharpen your blade. Face the interview arena.
            </p>
          </div>

          {/* RIGHT CTA */}
          <button
            onClick={onCreateSession}
            className="group relative px-8 py-4 rounded-2xl border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 transition-all duration-200"
          >
            <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur opacity-0 group-hover:opacity-100 transition" />

            <div className="relative flex items-center gap-3 text-green-300 font-bold text-lg">
              <ZapIcon className="w-6 h-6" />
              <span>Create Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
