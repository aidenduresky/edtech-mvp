import ExplainForm from "@/components/ExplainForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Prysm</h1>
          <p className="mt-2 text-gray-600">
            Enter any topic. Choose your level and how you want to learn. Get an explanation built for you.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <ExplainForm />
        </div>
      </div>
    </main>
  );
}
