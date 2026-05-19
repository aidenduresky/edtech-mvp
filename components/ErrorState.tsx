interface Props {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: Props) {
  return (
    <div
      role="alert"
      className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
    >
      <p className="font-medium mb-1">Something went wrong</p>
      <p className="mb-3">{message}</p>
      <button
        onClick={onRetry}
        className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      >
        Try again
      </button>
    </div>
  );
}
