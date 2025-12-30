import { Code2Icon, LoaderIcon, PlusIcon, XIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* MODAL */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-br from-black via-green-950 to-black border border-green-500/30 shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-green-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-xl">
              <Code2Icon className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Initiate Session
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-green-500/10 transition"
          >
            <XIcon className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-8">
          {/* PROBLEM SELECT */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white/80">
              Select Challenge
              <span className="text-green-400 ml-1">*</span>
            </label>

            <select
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find(
                  (p) => p.title === e.target.value
                );
                setRoomConfig({
                  problem: e.target.value,
                  difficulty: selectedProblem.difficulty,
                });
              }}
              className="w-full rounded-xl bg-black/70 border border-green-500/30 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              <option value="" disabled>
                Choose your battleground...
              </option>

              {problems.map((problem) => (
                <option
                  key={problem.id}
                  value={problem.title}
                  className="bg-black"
                >
                  {problem.title} — {problem.difficulty}
                </option>
              ))}
            </select>
          </div>

          {/* SUMMARY */}
          {roomConfig.problem && (
            <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <Code2Icon className="w-5 h-5 text-green-400" />
                <p className="font-bold text-white">Session Brief</p>
              </div>

              <div className="text-sm text-white/80 space-y-1">
                <p>
                  Challenge:{" "}
                  <span className="font-semibold text-white">
                    {roomConfig.problem}
                  </span>
                </p>
                <p>
                  Mode:{" "}
                  <span className="font-semibold text-white">1-on-1 Duel</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-green-500/20">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 transition"
          >
            Abort
          </button>

          <button
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
            className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            {isCreating ? (
              <>
                <LoaderIcon className="w-4 h-4 animate-spin" />
                Creating…
              </>
            ) : (
              <>
                <PlusIcon className="w-4 h-4" />
                Create Session
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;
