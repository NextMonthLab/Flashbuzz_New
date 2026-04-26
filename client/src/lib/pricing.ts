export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: {
    label: string;
    href: string;
    testId: string;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Discovery",
    price: "£2,500",
    description: "A diagnostic for businesses considering a brand film commission",
    features: [
      "90-minute strategic conversation",
      "Written CharacterX treatment",
      "Audience and system diagnostic",
      "Honest read on whether you need a film",
      "Two weeks from booking to delivery",
      "Fee credited in full against any Signature engagement booked within 60 days",
    ],
    highlighted: false,
    cta: {
      label: "Book a Discovery",
      href: "/contact?type=discovery",
      testId: "button-tier-discovery",
    },
  },
  {
    name: "Signature film",
    price: "from £18,000",
    description: "A brand film engagement built around a strategic question",
    features: [
      "Full Discovery treatment included",
      "Multi-day shoot with director and camera operator",
      "Full post-production: edit, colour, sound design, music",
      "Multi-format delivery for web, social, and pitch use",
      "Three rounds of revisions",
      "Six-week delivery from shoot",
    ],
    highlighted: true,
    cta: {
      label: "Start a Signature engagement",
      href: "/contact?type=signature",
      testId: "button-tier-signature",
    },
  },
  {
    name: "Campaign",
    price: "from £40,000",
    description: "A multi-asset production built around a single brand strategic moment",
    features: [
      "Brand film plus supporting cuts and stills",
      "Multiple shoot days, multiple locations",
      "Coordinated launch assets across web, social, paid, and event use",
      "Full creative direction across the asset family",
      "Four rounds of revisions",
      "Eight to twelve week delivery from shoot",
    ],
    highlighted: false,
    cta: {
      label: "Discuss a Campaign",
      href: "/contact?type=campaign",
      testId: "button-tier-campaign",
    },
  },
];

export interface SecondaryOffer {
  name: string;
  price: string;
  description: string;
  href: string;
  testId: string;
}

export const secondaryOffers: SecondaryOffer[] = [
  {
    name: "Photography",
    price: "from £600",
    description: "Headshots, brand stills, and editorial photography for UK businesses. Half-day from £600, full-day from £1,100, brand stills from £2,200.",
    href: "/photography",
    testId: "secondary-offer-photography",
  },
  {
    name: "In-house team training",
    price: "£6,000",
    description: "Two-day workshop training your in-house team to commission and produce video work that holds up under pressure. CharacterX methodology applied to your team's actual upcoming projects.",
    href: "/contact?type=training",
    testId: "secondary-offer-training",
  },
];
