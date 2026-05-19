"use client";

import { cn } from "@/lib/utils";
import type { Level } from "@/lib/types";

const LEVELS: { value: Level; label: string; description: string }[] = [
  { value: "beginner", label: "Beginner", description: "No prior knowledge assumed" },
  { value: "intermediate", label: "Intermediate", description: "Familiar with the basics" },
  { value: "advanced", label: "Advanced", description: "Deep domain knowledge" },
];

interface Props {
  value: Level;
  onChange: (level: Level) => void;
}

export default function LevelSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-forest mb-2">Knowledge level</legend>
      <div className="flex gap-2">
        {LEVELS.map((l) => (
          <button
            key={l.value}
            type="button"
            aria-pressed={value === l.value}
            title={l.description}
            onClick={() => onChange(l.value)}
            className={cn(
              "flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2",
              value === l.value
                ? "border-sage bg-sage text-white"
                : "border-sand bg-white text-forest/70 hover:border-sage-dark hover:text-forest"
            )}
          >
            {l.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
