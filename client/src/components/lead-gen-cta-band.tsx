/**
 * LeadGenCtaBand - Full-width CTA section for services and landing pages
 *
 * A prominent CTA band that can be inserted after the first major section
 * on service pages and key landing pages.
 */

import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadGenConfig, buildCtaUrl } from "@/lib/leadGenConfig";
import { cn } from "@/lib/utils";

interface LeadGenCtaBandProps {
  className?: string;
  variant?: "default" | "minimal" | "gradient";
  headline?: string;
  description?: string;
}

/**
 * Full-width CTA band component
 */
export function LeadGenCtaBand({
  className,
  variant = "default",
  headline,
  description,
}: LeadGenCtaBandProps) {
  const config = leadGenConfig;
  const scorecardUrl = buildCtaUrl(config.scorecard.url, config, "scorecard");
  const planUrl = buildCtaUrl(config.plan.url, config, "plan");

  const displayHeadline = headline || config.copy.bandHeadline;
  const displayDescription = description || config.copy.bandDescription;

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
              <a
                href={scorecardUrl}
                data-cta="scorecard"
                data-testid="cta-scorecard-band"
              >
                <Button>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Take the scorecard
                </Button>
              </a>
              <a
                href={planUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
                data-cta="plan"
                data-testid="cta-plan-band-link"
              >
                Or view the plan
              </a>
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
            <a
              href={scorecardUrl}
              data-cta="scorecard"
              data-testid="cta-scorecard-band-gradient"
            >
              <Button size="lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Take the free scorecard
              </Button>
            </a>
            <a
              href={planUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="plan"
              data-testid="cta-plan-band-gradient"
            >
              <Button variant="outline" size="lg">
                View the 90-day plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {config.copy.trustCopy}
          </p>
        </div>
      </section>
    );
  }

  // Default variant
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
            <a
              href={scorecardUrl}
              data-cta="scorecard"
              data-testid="cta-scorecard-band-default"
            >
              <Button size="lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Take the free scorecard
              </Button>
            </a>
            <a
              href={planUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="plan"
              data-testid="cta-plan-band-default"
            >
              <Button variant="outline" size="lg">
                View the plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
