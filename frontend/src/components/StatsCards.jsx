import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
      {/* ACTIVE SESSIONS */}
      <div className="relative rounded-2xl bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 hover:border-green-400/60 transition-all">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
              <UsersIcon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs font-semibold tracking-wider text-green-400 uppercase">
              Live
            </span>
          </div>

          <div className="text-4xl font-black text-white mb-1">
            {activeSessionsCount}
          </div>
          <div className="text-sm text-white/60">Active Sessions</div>
        </div>

        {/* subtle glow line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      </div>

      {/* TOTAL SESSIONS */}
      <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500/10 to-black border border-emerald-500/30 hover:border-emerald-400/60 transition-all">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
              <TrophyIcon className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Total
            </span>
          </div>

          <div className="text-4xl font-black text-white mb-1">
            {recentSessionsCount}
          </div>
          <div className="text-sm text-white/60">Total Sessions</div>
        </div>

        {/* subtle glow line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>
    </div>
  );
}

export default StatsCards;
