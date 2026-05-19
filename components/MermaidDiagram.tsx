"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  source: string;
}

let mermaidInitialized = false;

export default function MermaidDiagram({ source }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;

        if (!mermaidInitialized) {
          mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });
          mermaidInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, source);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [source]);

  if (error) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-medium text-amber-800 mb-2">Diagram could not be rendered</p>
        <pre className="text-xs text-amber-700 whitespace-pre-wrap break-words">{source}</pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex justify-center overflow-x-auto rounded-lg border border-gray-200 bg-white p-4"
      aria-label="Concept diagram"
    />
  );
}
