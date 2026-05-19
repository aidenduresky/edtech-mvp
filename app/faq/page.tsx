import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Prysm.",
};

const faqs = [
  {
    q: "What is Prysm?",
    a: "Prysm is an AI-powered learning tool that explains any topic at your level, in the format that works best for you. Whether you learn by reading, through visuals, via analogies, or step-by-step breakdowns, Prysm adapts the explanation to match how you think.",
  },
  {
    q: "How is Prysm different from just asking ChatGPT?",
    a: "Prysm is built around two things most AI tools ignore: conceptual precision and learning format. It never oversimplifies into inaccuracy — beginner explanations use simpler language, not simpler facts. And it lets you choose how you receive information, not just what level you want.",
  },
  {
    q: 'What does "knowledge level" mean?',
    a: "Beginner means no prior background assumed — concepts are explained from scratch using everyday language. Intermediate assumes you know the basics and goes deeper. Advanced engages formal definitions, edge cases, and where the field's understanding is still evolving.",
  },
  {
    q: "What are the learning formats?",
    a: "Reading gives you structured markdown sections. Visual generates a diagram of the concept using Mermaid. Analogy explains the idea through a real-world comparison and explicitly notes where the analogy breaks down. Step-by-step breaks the concept into a numbered process with a reason for each step.",
  },
  {
    q: "Is my data saved?",
    a: "Not currently. Prysm does not store your queries or explanations between sessions. Each explanation is generated fresh.",
  },
  {
    q: "Does Prysm work for any topic?",
    a: "Prysm works best for conceptual topics — science, history, technology, economics, philosophy, and more. It may be less useful for very procedural tasks (like specific software tutorials) or topics requiring real-time information.",
  },
  {
    q: "Is Prysm free to use?",
    a: "Prysm is currently in early development and being tested with a small group of users. Pricing and access details will be announced as the product matures.",
  },
  {
    q: "Who built Prysm?",
    a: "Prysm is being developed by a small team focused on making AI a genuine learning tool — not just an answer machine.",
  },
];

export default function FaqPage() {
  return (
    <div className="py-16 px-4">
      <Container className="max-w-2xl">
        <header className="mb-12 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest tracking-tight">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-forest/60 text-lg">
            Everything you need to know about Prysm.
          </p>
        </header>

        <div className="divide-y divide-sand">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group py-1 [&[open]]:border-l-4 [&[open]]:border-sage [&[open]]:pl-4 [&[open]]:bg-cream/60 transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 rounded">
                <span className="font-medium text-forest">{item.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-forest/50 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-sm text-forest/70 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}
