import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-black via-green-950 to-black border-l border-green-500/20 text-white">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/20 bg-black/60 backdrop-blur">
        {/* LEFT: LANGUAGE */}
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="w-6 h-6 "
          />

          <select
            value={selectedLanguage}
            onChange={onLanguageChange}
            className="bg-black/70 border border-green-500/30 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key} className="bg-black">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* RIGHT: RUN */}
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
            ${
              isRunning
                ? "bg-green-500/20 text-green-300 cursor-not-allowed"
                : "bg-green-500 text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:scale-105"
            }
          `}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="w-4 h-4 animate-spin" />
              Executing
            </>
          ) : (
            <>
              <PlayIcon className="w-4 h-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      {/* EDITOR */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 15,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            cursorBlinking: "smooth",
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
