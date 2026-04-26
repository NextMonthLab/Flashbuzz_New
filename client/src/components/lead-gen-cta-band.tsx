/**
 * LeadGenCtaBand - Full-width CTA section for services and landing pages
 *
 * A prominent CTA band that can be inserted after the first major section
 * on service pages and key landing pages.
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LeadGenCtaBandProps {
  className?: string;
  variant?: "default" | "minimal" | "gradient";
  headline?: string;
  description?: string;
}

const DEFAULT_HEADLINE = "Got a project in mind?";
const DEFAULT_DESCRIPTION = "Get a quote in 24 hours, or join the next free workshop.";

/**
 * Full-width CTA band component
 */
export function LeadGenCtaBand({
  className,
  variant = "default",
  headline,
  description,
}: LeadGenCtaBandProps) {
  const displayHeadline = headline || DEFAULT_HEADLINE;
  const displayDescription = description || DEFAULT_DESCRIPTION;

  if (variant === "minimal") {
    return (
      <section
        className={cn(
          "py-10 border-y border-border bg-muted/30",
          className
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {displayHeadline}
              </h3>
              <p className="text-muted-foreground text-sm">
                {displayDescription}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="plausible-event-name=Quote+CTA"
                data-testid="cta-quote-band"
              >
                <Button>
                  Get a quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link
                href="/workshops"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block plausible-event-name=Workshops+Nav+Click"
                data-testid="cta-workshop-band-link"
              >
                Or join the workshop
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section
        className={cn(
          "py-16 lg:py-20 bg-gradient-to-br from-deep-petrol to-background",
          className
        )}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {displayHeadline}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {displayDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="plausible-event-name=Quote+CTA"
              data-testid="cta-quote-band-gradient"
            >
              <Button size="lg">
                Get a quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link
              href="/workshops"
              className="plausible-event-name=Workshops+Nav+Click"
              data-testid="cta-workshop-band-gradient"
            >
              <Button variant="outline" size="lg">
                Join the workshop
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "py-12 lg:py-16 bg-card border-y border-card-border",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              {displayHeadline}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {displayDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
            <Link
              href="/contact"
              className="plausible-event-name=Quote+CTA"
              data-testid="cta-quote-band-default"
            >
              <Button size="lg">
                Get a quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link
              href="/workshops"
              className="plausible-event-name=Workshops+Nav+Click"
              data-testid="cta-workshop-band-default"
            >
              <Button variant="outline" size="lg">
                Join the workshop
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
