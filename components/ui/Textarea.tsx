import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-sand bg-white px-3 py-2 text-sm text-forest placeholder:text-forest/40 resize-none",
        "focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage transition-colors duration-150",
        className
      )}
      {...props}
    />
  );
}
