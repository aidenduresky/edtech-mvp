import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-h2:text-lg prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
