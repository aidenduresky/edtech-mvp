export default function LoadingState() {
  return (
    <div className="mt-8 animate-pulse space-y-4" aria-live="polite" aria-label="Loading explanation">
      <div className="h-6 w-1/3 rounded bg-gray-200" />
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-4 w-4/6 rounded bg-gray-200" />
      </div>
      <div className="space-y-2">
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>
      <p className="text-sm text-gray-500 text-center pt-2">Generating your explanation…</p>
    </div>
  );
}
