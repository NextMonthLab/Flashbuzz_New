/**
 * MobileStickyCtaBar - Mobile-only sticky bottom CTA bar
 *
 * A small, unobtrusive sticky bar that appears at the bottom of the screen
 * on mobile devices. Designed to not cover cookie banners or critical UI.
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileStickyCtaBarProps {
  className?: string;
}

export function MobileStickyCtaBar({ className }: MobileStickyCtaBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show bar after scrolling past 30% of viewport height
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.3;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for session-based dismissal
  useEffect(() => {
    const dismissed = sessionStorage.getItem("cta-bar-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("cta-bar-dismissed", "true");
  };

  // Only show on mobile (lg breakpoint and below), when visible, and not dismissed
  if (isDismissed) {
    return null;
  }

  return (
    <div
      className={cn(
        // Only show on mobile/tablet (hidden on lg and above)
        "lg:hidden",
        // Fixed positioning at bottom
        "fixed bottom-0 left-0 right-0 z-40",
        // Transition for smooth show/hide
        "transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )}
    >
      {/* Safe area for bottom notch on iOS */}
      <div className="bg-background/95 backdrop-blur-lg border-t border-border safe-area-bottom">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/contact"
            data-testid="cta-quote-mobile-sticky"
            className="flex-1 plausible-event-name=Quote+CTA"
          >
            <Button className="w-full" size="default">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <button
            onClick={handleDismiss}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
            data-testid="cta-mobile-sticky-dismiss"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
