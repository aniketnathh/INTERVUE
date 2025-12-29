import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";

function difficultyStyles(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/15 text-green-400 border-green-500/40";
    case "Medium":
      return "bg-yellow-500/15 text-yellow-400 border-yellow-500/40";
    case "Hard":
      return "bg-red-500/15 text-red-400 border-red-500/40";
    default:
      return "";
  }
}

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easy = problems.filter((p) => p.difficulty === "Easy").length;
  const medium = problems.filter((p) => p.difficulty === "Medium").length;
  const hard = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-500/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-400/10 blur-[140px]" />

      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="mb-14">
          <h1 className="text-5xl font-black tracking-tight mb-4">
            Problem <span className="text-green-400">Arena</span>
          </h1>
          <p className="text-white/70 max-w-2xl">
            Each problem is a battle. Sharpen logic, control pressure, and level
            up your interview skills.
          </p>
        </div>

        {/* PROBLEMS */}
        <div className="space-y-6">
          {problems.map((problem, idx) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="group block"
            >
              <div className="relative rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-black p-6 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(34,197,94,0.25)] transition duration-500">
                {/* GLOW STRIP */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-start justify-between gap-6">
                  {/* LEFT */}
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
                      <Code2Icon className="w-7 h-7 text-green-400" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold">
                          {idx + 1}. {problem.title}
                        </h2>

                        <span
                          className={`text-xs px-3 py-1 rounded-full border ${difficultyStyles(
                            problem.difficulty
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>

                      <p className="text-sm text-white/50 mb-2">
                        {problem.category}
                      </p>

                      <p className="text-white/70 leading-relaxed">
                        {problem.description.text}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-2 text-green-400 group-hover:translate-x-1 transition">
                    <span className="font-semibold">Enter</span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Battles", value: problems.length },
            { label: "Easy", value: easy, color: "text-green-400" },
            { label: "Medium", value: medium, color: "text-yellow-400" },
            { label: "Hard", value: hard, color: "text-red-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-green-500/10 to-black border border-green-500/20 p-6 text-center hover:scale-101 transition"
            >
              <div className={`text-3xl font-black ${stat.color ?? ""}`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
