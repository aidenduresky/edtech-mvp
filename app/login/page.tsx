"use client";

// TODO: wire to auth

import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="py-16 px-4">
      <Container className="max-w-sm">
        <Card className="p-8">
          <h1 className="font-serif text-3xl font-semibold text-forest mb-2 text-center">
            Welcome back
          </h1>
          <p className="text-forest/60 text-sm text-center mb-8">
            Sign in to your Prysm account.
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-forest mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="w-full justify-center">
              Login
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-forest/60">
            Don&apos;t have an account?{" "}
            <Link
              href="/login"
              className="text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors duration-150"
            >
              Sign up
            </Link>
          </p>
        </Card>
      </Container>
    </div>
  );
}
