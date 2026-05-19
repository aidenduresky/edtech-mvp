"use client";

import dynamic from "next/dynamic";
import type { ExplainResponse } from "@/lib/types";
import MarkdownRenderer from "./MarkdownRenderer";

const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), { ssr: false });

interface Props {
  response: ExplainResponse;
}

export default function ResultsDisplay({ response }: Props) {
  const { format, title, content } = response;

  return (
    <section className="mt-8" aria-labelledby="result-title">
      <h2 id="result-title" className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>

      {format === "visual" ? (
        <MermaidDiagram source={content} />
      ) : (
        <MarkdownRenderer content={content} />
      )}
    </section>
  );
}
