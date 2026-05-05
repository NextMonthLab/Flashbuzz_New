/**
 * Public NextMonth-hosted workshop URLs that flashbuzz.tv links to.
 * Updating a workshop URL is a one-line change here - every CTA picks it up.
 *
 * Status legend:
 *   live: published on NextMonth, ready for traffic
 *   coming_soon: not yet published; CTA renders as a waitlist link instead
 */

export interface WorkshopLink {
  status: "live" | "coming_soon";
  url: string | null;
  waitlistUrl?: string;
}

export const PHOTOGRAPHY_WORKSHOP: WorkshopLink = {
  status: "live",
  url: "https://nextmonth.io/w/losing-customers-to-big-name-chains-f6e4126f",
};

export const VIDEO_WORKSHOP: WorkshopLink = {
  status: "coming_soon",
  url: null,
  waitlistUrl: "/contact?type=workshop-followup",
};

export const FILM_WORKSHOP: WorkshopLink = {
  status: "coming_soon",
  url: null,
  waitlistUrl: "/contact?type=workshop-followup",
};
