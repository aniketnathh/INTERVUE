function OutputPanel({ output }) {
  return (
    <div className="h-full flex flex-col bg-neutral-900 border-l border-neutral-700">
      {/* HEADER */}
      <div
        className="px-4 py-2 bg-neutral-800 border-b border-neutral-700
  font-semibold text-sm text-neutral-200"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Output Console
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-auto p-4 bg-neutral-900">
        {output === null ? (
          <p className="text-white/40">Run the code to reveal the result…</p>
        ) : output.success ? (
          <pre className="whitespace-pre-wrap text-green-400">
            {output.output}
          </pre>
        ) : (
          <div className="space-y-3">
            {output.output && (
              <pre className="whitespace-pre-wrap text-white/70">
                {output.output}
              </pre>
            )}
            <pre className="whitespace-pre-wrap text-red-400">
              {output.error}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
