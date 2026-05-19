"use client";

import { cn } from "@/lib/utils";
import type { Format } from "@/lib/types";

const FORMATS: { value: Format; label: string; description: string }[] = [
  { value: "reading", label: "Reading", description: "Structured text with clear sections" },
  { value: "visual", label: "Visual", description: "Concept diagram (Mermaid)" },
  { value: "analogy", label: "Analogy", description: "Real-world comparison" },
  { value: "step-by-step", label: "Step-by-step", description: "Numbered process breakdown" },
];

interface Props {
  value: Format;
  onChange: (format: Format) => void;
}

export default function FormatSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-forest mb-2">Learning format</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {FORMATS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={value === f.value}
            title={f.description}
            onClick={() => onChange(f.value)}
            className={cn(
              "rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2",
              value === f.value
                ? "border-sage bg-sage text-white"
                : "border-sand bg-white text-forest/70 hover:border-sage-dark hover:text-forest"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
