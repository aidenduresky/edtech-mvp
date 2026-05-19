import { NextRequest, NextResponse } from "next/server";
import { getAnthropicClient } from "@/lib/anthropic";
import { buildSystemPrompt, buildUserPrompt } from "@/lib/prompts";
import type { ExplainRequest, ExplainResponse, Level, Format } from "@/lib/types";

const VALID_LEVELS = new Set<Level>(["beginner", "intermediate", "advanced"]);
const VALID_FORMATS = new Set<Format>(["reading", "visual", "analogy", "step-by-step"]);

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { topic, level, format } = body as Partial<ExplainRequest>;

  if (typeof topic !== "string" || topic.trim().length === 0 || topic.length > 200) {
    return NextResponse.json(
      { error: "topic must be a non-empty string under 200 characters." },
      { status: 400 }
    );
  }
  if (!level || !VALID_LEVELS.has(level)) {
    return NextResponse.json({ error: "level must be beginner, intermediate, or advanced." }, { status: 400 });
  }
  if (!format || !VALID_FORMATS.has(format)) {
    return NextResponse.json(
      { error: "format must be reading, visual, analogy, or step-by-step." },
      { status: 400 }
    );
  }

  let anthropic;
  try {
    anthropic = getAnthropicClient();
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server configuration error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  let rawText: string;
  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      temperature: 0.3,
      system: buildSystemPrompt(level, format),
      messages: [{ role: "user", content: buildUserPrompt(topic.trim()) }],
    });
    const block = message.content[0];
    if (block.type !== "text") {
      throw new Error("Unexpected response type from model.");
    }
    rawText = block.text;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to reach AI model.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  let parsed: ExplainResponse;
  try {
    parsed = JSON.parse(rawText) as ExplainResponse;
    if (!parsed.format || !parsed.title || typeof parsed.content !== "string") {
      throw new Error("Missing required fields.");
    }
  } catch {
    return NextResponse.json(
      { error: "Model returned a malformed response — please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json(parsed);
}
