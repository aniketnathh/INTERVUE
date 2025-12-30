import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="mt-10 rounded-3xl bg-black/40 border border-green-500/30 backdrop-blur">
      <div className="p-6">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-lg">
            <Clock className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white">
            Battle History
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-24">
              <Loader className="w-10 h-10 animate-spin text-green-400" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="relative rounded-2xl bg-black/60 border border-green-500/20 hover:border-green-400/60 transition-all group"
              >
                <div className="p-5">
                  {/* TOP */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow-md">
                      <Code2 className="w-6 h-6 text-black" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-white truncate mb-1">
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
                  </div>

                  {/* META */}
                  <div className="space-y-2 text-sm text-white/70 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      <span>
                        {session.participant ? "2 warriors" : "Solo battle"}
                      </span>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between pt-3 border-t border-green-500/20">
                    <span className="text-xs uppercase tracking-wide text-green-400 font-semibold">
                      Completed
                    </span>
                    <span className="text-xs text-white/40">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-24">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl flex items-center justify-center">
                <Trophy className="w-12 h-12 text-green-400/50" />
              </div>
              <p className="text-xl font-bold text-white/70 mb-2">
                No battles yet
              </p>
              <p className="text-sm text-white/40">
                Your victories will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
