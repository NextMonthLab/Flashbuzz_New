import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InlineCtaProps {
  className?: string;
}

/**
 * Inline CTA - for embedding within blog posts and case studies
 */
export function InlineCta({ className }: InlineCtaProps) {
  return (
    <div
      className={cn(
        "my-8 p-6 rounded-lg bg-muted/50 border border-border",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-medium text-foreground mb-1">
            Got a project in mind?
          </p>
          <p className="text-sm text-muted-foreground">
            Get a quote in 24 hours, or join the next free workshop.
          </p>
        </div>
        <Link
          href="/contact"
          data-testid="cta-quote-inline"
          className="flex-shrink-0 plausible-event-name=Quote+CTA"
        >
          <Button>
            Get a quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
