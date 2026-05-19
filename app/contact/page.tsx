"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="py-16 px-4">
      <Container className="max-w-lg">
        <Card className="p-8">
          <h1 className="font-serif text-3xl font-semibold text-forest mb-2">Get in touch</h1>
          <p className="text-forest/60 mb-8">We&apos;d love to hear from you.</p>

          {sent ? (
            <div className="text-center py-8">
              <p className="font-serif text-xl text-forest mb-2">We&apos;ll be in touch soon.</p>
              <p className="text-sm text-forest/60">Thanks for reaching out.</p>
            </div>
          ) : (
            <form
              noValidate
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest mb-1">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="What's on your mind?" rows={5} required />
              </div>
              <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                Send
              </Button>
            </form>
          )}
        </Card>
      </Container>
    </div>
  );
}
