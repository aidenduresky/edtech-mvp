"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: Props) {
  return (
    <div className="py-24 px-4 text-center">
      <Container className="max-w-md">
        <p className="text-sm font-medium text-terracotta mb-4 uppercase tracking-widest">
          Error
        </p>
        <h1 className="font-serif text-3xl font-semibold text-forest mb-4">
          Something went wrong.
        </h1>
        <p className="text-forest/60 mb-8">
          An unexpected error occurred. Try again or return to the homepage.
        </p>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
