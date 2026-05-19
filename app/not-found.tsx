import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 px-4 text-center">
      <Container className="max-w-md">
        <p className="text-sm font-medium text-terracotta mb-4 uppercase tracking-widest">
          404
        </p>
        <h1 className="font-serif text-3xl font-semibold text-forest mb-4">
          Page not found.
        </h1>
        <p className="text-forest/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </Container>
    </div>
  );
}
