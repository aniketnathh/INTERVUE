import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 card bg-gradient-to-br from-black via-green-950 to-black border border-green-500/20 h-full">
      <div className="card-body">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-xl">
              <ZapIcon className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-xl font-semibold text-green-300">
              Live Sessions
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-green-400/70">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {sessions.length} active
          </div>
        </div>

        {/* LIST */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="w-8 h-8 animate-spin text-green-400/60" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => {
              const isFull = session.participant && !isUserInSession(session);

              return (
                <div
                  key={session._id}
                  className="card bg-black/40 border border-green-500/20 hover:border-green-400/40 transition"
                >
                  <div className="flex items-center justify-between gap-4 p-4">
                    {/* LEFT */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="relative w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Code2Icon className="w-6 h-6 text-green-400" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-black" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate text-green-200">
                            {session.problem}
                          </h3>
                          <span
                            className={`badge badge-sm ${getDifficultyBadgeClass(
                              session.difficulty
                            )}`}
                          >
                            {session.difficulty}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-green-300/70">
                          <div className="flex items-center gap-1">
                            <CrownIcon className="w-3.5 h-3.5" />
                            <span>{session.host?.name}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <UsersIcon className="w-3.5 h-3.5" />
                            <span>{session.participant ? "2/2" : "1/2"}</span>
                          </div>

                          <span
                            className={`badge badge-xs ${
                              isFull ? "badge-error" : "badge-success"
                            }`}
                          >
                            {isFull ? "FULL" : "OPEN"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ACTION */}
                    {isFull ? (
                      <button className="btn btn-sm btn-disabled opacity-50">
                        Full
                      </button>
                    ) : (
                      <Link
                        to={`/session/${session._id}`}
                        className="btn btn-sm bg-green-500/10 text-green-300 border border-green-500/30 hover:bg-green-500/20 gap-2"
                      >
                        {isUserInSession(session) ? "Rejoin" : "Join"}
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 text-green-300/60">
              <p className="font-medium mb-1">No active sessions</p>
              <p className="text-sm">Create one to start interviewing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;
