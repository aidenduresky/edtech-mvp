import Button from "@/components/ui/Button";

interface Props {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: Props) {
  return (
    <div
      role="alert"
      className="mt-8 rounded-lg border border-red-300 bg-red-50/70 p-4 text-sm text-red-800"
    >
      <p className="font-medium mb-1">Something went wrong</p>
      <p className="mb-3">{message}</p>
      <Button onClick={onRetry} variant="primary" size="sm">
        Try again
      </Button>
    </div>
  );
}
