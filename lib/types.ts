export type Level = "beginner" | "intermediate" | "advanced";
export type Format = "reading" | "visual" | "analogy" | "step-by-step";

export interface ExplainRequest {
  topic: string;
  level: Level;
  format: Format;
}

export interface ExplainResponse {
  format: Format;
  title: string;
  content: string;
}
