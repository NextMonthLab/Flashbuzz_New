/**
 * Lead Generation CTA Configuration
 *
 * This config drives all lead-gen CTAs across the site.
 * It's designed to be reusable across multiple sites with minimal changes.
 */

export interface LeadGenConfig {
  siteName: string;
  utmSource: string;

  // Primary CTA: Video Growth Scorecard
  scorecard: {
    url: string;
    label: string;
    headerLabel: string;
    heroLabel: string;
    mobileLabel: string;
    description: string;
  };

  // Secondary CTA: 90-Day Plan
  plan: {
    url: string;
    label: string;
    headerLabel: string;
    heroLabel: string;
    description: string;
  };

  // UTM parameters
  utm: {
    medium: string;
    campaign: string;
  };

  // Copy/messaging
  copy: {
    footerHeadline: string;
    footerDescription: string;
    bandHeadline: string;
    bandDescription: string;
    trustCopy: string;
  };
}

const defaultConfig: LeadGenConfig = {
  siteName: "FlashBuzz",
  utmSource: "flashbuzz",

  scorecard: {
    url: "https://rob-hutt-scorecard.onrender.com/scorecards/flashbuzz-video-growth",
    label: "Free Video Growth Scorecard",
    headerLabel: "Free Video Growth Scorecard",
    heroLabel: "Take the free scorecard",
    mobileLabel: "Free scorecard",
    description: "Answer 12 questions. Get a clear score, insights, and a 90-day plan.",
  },

  plan: {
    url: "https://rob-hutt-scorecard.onrender.com/scorecards/flashbuzz-video-growth",
    label: "Get the 90-Day Plan",
    headerLabel: "Get the 90-Day Plan",
    heroLabel: "View the 90-day plan",
    description: "A tailored video content roadmap based on your scorecard results.",
  },

  utm: {
    medium: "site-cta",
    campaign: "video-growth-scorecard",
  },

  copy: {
    footerHeadline: "Free Tools",
    footerDescription: "Answer 12 questions. Get a clear score, insights, and a 90-day plan.",
    bandHeadline: "Not sure what video to make next?",
    bandDescription: "Take the scorecard and get a tailored 90-day plan in minutes.",
    trustCopy: "Used by 500+ video marketers. Takes under 3 minutes.",
  },
};

/**
 * Site-specific overrides
 * Add entries here when deploying to other sites
 */
const siteOverrides: Record<string, Partial<LeadGenConfig>> = {
  // flashbuzz: {}, // Default, no overrides needed
  // characterx: { utmSource: "characterx", siteName: "CharacterX" },
};

/**
 * Get the lead gen config for the current site
 * @param siteKey - Optional site key for multi-site deployments
 */
export function getLeadGenConfig(siteKey?: string): LeadGenConfig {
  const overrides = siteKey ? siteOverrides[siteKey] : {};
  return { ...defaultConfig, ...overrides };
}

/**
 * Build a URL with UTM parameters
 */
export function buildCtaUrl(
  baseUrl: string,
  config: LeadGenConfig,
  ctaType: "scorecard" | "plan"
): string {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", config.utmSource);
  url.searchParams.set("utm_medium", config.utm.medium);
  url.searchParams.set("utm_campaign", config.utm.campaign);
  url.searchParams.set("utm_content", ctaType);
  return url.toString();
}

// Export the default config for convenience
export const leadGenConfig = getLeadGenConfig();
