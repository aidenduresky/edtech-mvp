import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-soft border border-sand/60 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
