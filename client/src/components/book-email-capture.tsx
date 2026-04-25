import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BookEmailCapture() {
  const [email, setEmail] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setLocation(`/contact?type=book-waitlist&email=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-xl"
      data-testid="book-waitlist-form"
    >
      <Input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 text-base"
        aria-label="Email address"
        data-testid="input-book-email"
      />
      <Button
        type="submit"
        size="lg"
        className="plausible-event-name=Book+Waitlist"
        data-testid="button-book-waitlist"
      >
        Add my name
      </Button>
    </form>
  );
}
