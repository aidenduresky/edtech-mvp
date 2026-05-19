import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "What Prysm is, why it exists, and the principles behind it.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <Container className="max-w-3xl">
        <header className="mb-14 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest tracking-tight text-balance">
            Why Prysm exists.
          </h1>
          <p className="mt-4 text-forest/60 text-lg max-w-xl mx-auto text-balance">
            Most learning tools either overwhelm or oversimplify. Prysm does neither.
          </p>
        </header>

        <article className="space-y-14">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
              What Prysm Does
            </h2>
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-terracotta prose-strong:text-forest">
              <p>
                Prysm is an AI-powered learning tool that explains any topic at your level, in the
                format that works best for you. You choose how deep to go — beginner, intermediate,
                or advanced — and how you want to receive the information: through reading, a
                visual diagram, an analogy, or a step-by-step breakdown.
              </p>
              <p>
                The explanation you get isn&apos;t a one-size-fits-all summary. It&apos;s built
                around your background and your preferred way of thinking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
              Why Conceptual Precision Matters
            </h2>
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-terracotta prose-strong:text-forest">
              <p>
                The most common failure mode in AI-generated explanations isn&apos;t inaccuracy —
                it&apos;s false simplicity. A tool that explains gravity as &quot;things falling
                down&quot; isn&apos;t wrong, exactly. But it&apos;s not useful either. It gives
                you the shape of understanding without the substance.
              </p>
              <p>
                Prysm is built on a different principle: <strong>simpler language, not simpler
                facts.</strong> A beginner explanation uses everyday vocabulary. It doesn&apos;t
                use a stripped-down version of reality. The goal is to be genuinely understood,
                not just briefly reassured.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
              The Four Learning Formats
            </h2>
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-terracotta prose-strong:text-forest">
              <p>
                People don&apos;t all learn the same way. Prysm offers four formats because the
                right explanation for an engineer might be completely wrong for a historian — even
                for the exact same topic.
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Reading",
                  desc: "Structured markdown sections with clear headings and prose. Good for building a mental model step by step.",
                },
                {
                  name: "Visual",
                  desc: "A Mermaid diagram of the concept's structure. Good for seeing how parts relate to a whole.",
                },
                {
                  name: "Analogy",
                  desc: "A real-world comparison that makes the abstract concrete — with an explicit note on where the analogy breaks down.",
                },
                {
                  name: "Step-by-step",
                  desc: "A numbered sequence with the reasoning behind each step. Good for process-oriented thinking.",
                },
              ].map((f) => (
                <div
                  key={f.name}
                  className="rounded-xl border border-sand bg-white p-5 shadow-softer"
                >
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2">{f.name}</h3>
                  <p className="text-sm text-forest/70">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-forest mb-4">Our Mission</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-terracotta prose-strong:text-forest">
              <p>
                We believe AI should be a genuine learning partner — not a shortcut that leaves
                you feeling informed but remaining confused. Prysm is built to make understanding
                more accessible, one explanation at a time.
              </p>
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
