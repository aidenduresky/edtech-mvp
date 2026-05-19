import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-sand bg-white px-3 py-2 text-sm text-forest placeholder:text-forest/40",
        "focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage transition-colors duration-150",
        className
      )}
      {...props}
    />
  );
}
