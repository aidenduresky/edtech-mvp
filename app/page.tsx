import ExplainForm from "@/components/ExplainForm";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <div className="py-16 px-4">
      <Container className="max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest tracking-tight text-balance">
            Explanations that meet you where you are.
          </h1>
          <p className="mt-4 text-forest/60 text-lg">
            Enter any topic. Choose your level and how you want to learn. Get an explanation built for you.
          </p>
        </div>

        <Card>
          <ExplainForm />
        </Card>
      </Container>
    </div>
  );
}
