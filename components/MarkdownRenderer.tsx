import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-forest prose-a:text-terracotta prose-strong:text-forest prose-pre:bg-forest prose-pre:text-cream prose-code:text-terracotta">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
