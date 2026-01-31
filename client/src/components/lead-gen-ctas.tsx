/**
 * LeadGenCtas - Reusable CTA components for lead generation
 *
 * These components can be dropped into any page to provide consistent
 * lead generation CTAs that link to the scorecard and 90-day plan.
 */

import { ArrowRight, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadGenConfig, buildCtaUrl } from "@/lib/leadGenConfig";
import { cn } from "@/lib/utils";

interface LeadGenCtasProps {
  variant?: "default" | "hero" | "compact" | "footer";
  showTrustCopy?: boolean;
  className?: string;
}

/**
 * Primary CTA component - renders both scorecard and plan CTAs
 */
export function LeadGenCtas({
  variant = "default",
  showTrustCopy = false,
  className,
}: LeadGenCtasProps) {
  const config = leadGenConfig;
  const scorecardUrl = buildCtaUrl(config.scorecard.url, config, "scorecard");
  const planUrl = buildCtaUrl(config.plan.url, config, "plan");

  const scorecardLabel =
    variant === "hero" ? config.scorecard.heroLabel : config.scorecard.label;
  const planLabel =
    variant === "hero" ? config.plan.heroLabel : config.plan.label;

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-col sm:flex-row items-center gap-3", className)}>
        <a
          href={scorecardUrl}
          data-cta="scorecard"
          data-testid="cta-scorecard-compact"
        >
          <Button size="sm">
            <BarChart3 className="w-4 h-4 mr-2" />
            {config.scorecard.mobileLabel}
          </Button>
        </a>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("space-y-3", className)}>
        <a
          href={scorecardUrl}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-cta="scorecard"
          data-testid="cta-scorecard-footer"
        >
          <BarChart3 className="w-4 h-4 text-primary flex-shrink-0" />
          {config.scorecard.label}
        </a>
        <a
          href={planUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-cta="plan"
          data-testid="cta-plan-footer"
        >
          <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
          {config.plan.label}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className={cn(
          "flex items-center gap-4",
          variant === "hero"
            ? "flex-col sm:flex-row justify-center"
            : "flex-wrap"
        )}
      >
        <a
          href={scorecardUrl}
          data-cta="scorecard"
          data-testid="cta-scorecard-primary"
        >
          <Button
            size={variant === "hero" ? "lg" : "default"}
            className={variant === "hero" ? "min-w-[200px]" : ""}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            {scorecardLabel}
          </Button>
        </a>
        <a
          href={planUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="plan"
          data-testid="cta-plan-secondary"
        >
          <Button
            variant="outline"
            size={variant === "hero" ? "lg" : "default"}
            className={variant === "hero" ? "min-w-[200px]" : ""}
          >
            {planLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
      {showTrustCopy && (
        <p className="mt-4 text-sm text-muted-foreground text-center">
          {config.copy.trustCopy}
        </p>
      )}
    </div>
  );
}

interface HeaderCtaProps {
  className?: string;
  showSecondary?: boolean;
}

/**
 * Header-specific CTA - designed for the global navigation
 */
export function HeaderCta({ className, showSecondary = false }: HeaderCtaProps) {
  const config = leadGenConfig;
  const scorecardUrl = buildCtaUrl(config.scorecard.url, config, "scorecard");
  const planUrl = buildCtaUrl(config.plan.url, config, "plan");

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={scorecardUrl}
        data-cta="scorecard"
        data-testid="cta-scorecard-header"
      >
        <Button>
          <BarChart3 className="w-4 h-4 mr-2" />
          {config.scorecard.headerLabel}
        </Button>
      </a>
      {showSecondary && (
        <a
          href={planUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden xl:block"
          data-cta="plan"
          data-testid="cta-plan-header"
        >
          {config.plan.headerLabel}
        </a>
      )}
    </div>
  );
}

interface InlineCtaProps {
  className?: string;
}

/**
 * Inline CTA - for embedding within blog posts and case studies
 */
export function InlineCta({ className }: InlineCtaProps) {
  const config = leadGenConfig;
  const scorecardUrl = buildCtaUrl(config.scorecard.url, config, "scorecard");

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
            {config.copy.bandHeadline}
          </p>
          <p className="text-sm text-muted-foreground">
            {config.scorecard.description}
          </p>
        </div>
        <a
          href={scorecardUrl}
          data-cta="scorecard"
          data-testid="cta-scorecard-inline"
          className="flex-shrink-0"
        >
          <Button>
            <BarChart3 className="w-4 h-4 mr-2" />
            Take the scorecard
          </Button>
        </a>
      </div>
    </div>
  );
}
