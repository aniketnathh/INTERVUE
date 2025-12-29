import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  return (
    <div
      className="h-full min-w-0 overflow-y-auto overflow-x-hidden
  bg-gradient-to-br from-green-950 via-green-900 to-black text-white"
    >
      {/* HEADER */}
      <div
        className="sticky top-0 z-20 bg-black/70 backdrop-blur
    border-b border-green-500/20 p-6"
      >
        <div className="flex items-start justify-between gap-4 mb-2 min-w-0">
          <h1 className="text-3xl font-black tracking-tight break-words min-w-0">
            {problem.title}
          </h1>

          <span
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border
        ${getDifficultyBadgeClass(problem.difficulty)}`}
          >
            {problem.difficulty}
          </span>
        </div>

        <p className="text-sm text-white/50 break-words">{problem.category}</p>

        {/* PROBLEM SELECTOR */}
        <div className="mt-4">
          <select
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
            className="w-full rounded-lg bg-black/70 border border-green-500/30
          px-3 py-2 text-sm text-white min-w-0
          focus:outline-none focus:ring-2 focus:ring-green-500/50"
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id} className="bg-black">
                {p.title} — {p.difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-8 min-w-0">
        {/* DESCRIPTION */}
        <section
          className="rounded-2xl bg-gradient-to-br
      from-green-500/10 to-black border border-green-500/20 p-6 min-w-0"
        >
          <h2 className="text-xl font-bold mb-4 text-green-400">
            Mission Brief
          </h2>

          <div className="space-y-4 leading-relaxed text-white/80 break-words">
            <p>{problem.description.text}</p>

            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="break-words">
                {note}
              </p>
            ))}
          </div>
        </section>

        {/* EXAMPLES */}
        <section
          className="rounded-2xl bg-gradient-to-br
      from-green-500/10 to-black border border-green-500/20 p-6 min-w-0"
        >
          <h2 className="text-xl font-bold mb-6 text-green-400">
            Combat Scenarios
          </h2>

          <div className="space-y-6 min-w-0">
            {problem.examples.map((example, idx) => (
              <div key={idx} className="min-w-0">
                <div className="flex items-center gap-3 mb-2 min-w-0">
                  <span
                    className="shrink-0 text-xs px-2 py-0.5 rounded-full
                border border-green-500/40 text-green-400"
                  >
                    #{idx + 1}
                  </span>
                  <p className="font-semibold break-words">Example {idx + 1}</p>
                </div>

                <div
                  className="rounded-xl bg-black/60 border border-green-500/20
              p-4 font-mono text-sm space-y-2 overflow-x-auto"
                >
                  <div className="flex gap-2 min-w-0">
                    <span className="text-green-400 min-w-[70px] font-semibold">
                      Input
                    </span>
                    <span className="text-white/80 break-all whitespace-pre-wrap">
                      {example.input}
                    </span>
                  </div>

                  <div className="flex gap-2 min-w-0">
                    <span className="text-emerald-400 min-w-[70px] font-semibold">
                      Output
                    </span>
                    <span className="text-white/80 break-all whitespace-pre-wrap">
                      {example.output}
                    </span>
                  </div>

                  {example.explanation && (
                    <div
                      className="pt-3 mt-3 border-t border-green-500/20
                  text-xs text-white/60 font-sans break-words"
                    >
                      <span className="font-semibold text-white/70">
                        Explanation:
                      </span>{" "}
                      {example.explanation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONSTRAINTS */}
        <section
          className="rounded-2xl bg-gradient-to-br
      from-green-500/10 to-black border border-green-500/20 p-6 min-w-0"
        >
          <h2 className="text-xl font-bold mb-4 text-green-400">
            Rules of Engagement
          </h2>

          <ul className="space-y-3 text-white/80 min-w-0">
            {problem.constraints.map((constraint, idx) => (
              <li key={idx} className="flex gap-3 min-w-0">
                <span className="text-green-400 shrink-0">▸</span>
                <code className="text-sm break-all whitespace-pre-wrap">
                  {constraint}
                </code>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProblemDescription;
