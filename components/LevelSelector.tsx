"use client";

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
      <legend className="text-sm font-medium text-gray-700 mb-2">Knowledge level</legend>
      <div className="flex gap-2">
        {LEVELS.map((l) => (
          <button
            key={l.value}
            type="button"
            aria-pressed={value === l.value}
            title={l.description}
            onClick={() => onChange(l.value)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              value === l.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
