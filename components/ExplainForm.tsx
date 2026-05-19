"use client";

import { useState } from "react";
import LevelSelector from "./LevelSelector";
import FormatSelector from "./FormatSelector";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import ResultsDisplay from "./ResultsDisplay";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import type { Level, Format, ExplainResponse } from "@/lib/types";

type Status = "idle" | "loading" | "error" | "success";

export default function ExplainForm() {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState<Level>("beginner");
  const [format, setFormat] = useState<Format>("reading");
  const [status, setStatus] = useState<Status>("idle");
  const [response, setResponse] = useState<ExplainResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim()) return;

    setStatus("loading");
    setResponse(null);
    setErrorMessage("");

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), level, format }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "An unexpected error occurred.");
      }

      setResponse(data as ExplainResponse);
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
      setStatus("error");
    }
  }

  function handleRetry() {
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-forest mb-1">
            Topic
          </label>
          <Input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. quantum entanglement, the French Revolution, recursion…"
            maxLength={200}
            required
          />
        </div>

        <LevelSelector value={level} onChange={setLevel} />
        <FormatSelector value={format} onChange={setFormat} />

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "loading" || !topic.trim()}
          className="w-full justify-center"
        >
          {status === "loading" ? "Generating…" : "Explain this"}
        </Button>
      </form>

      {status === "loading" && <LoadingState />}
      {status === "error" && <ErrorState message={errorMessage} onRetry={handleRetry} />}
      {status === "success" && response && <ResultsDisplay response={response} />}
    </div>
  );
}
