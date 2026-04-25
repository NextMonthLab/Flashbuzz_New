export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Spark",
    price: "£2,000",
    description: "For businesses beginning their video journey",
    features: [
      "Half-day shoot (2-4 hours)",
      "One filmmaker",
      "One final video (60-90 seconds)",
      "2 social cut-downs",
      "Basic motion graphics",
      "Music licensing",
      "2 revision rounds",
      "2-3 week delivery",
    ],
    highlighted: false,
  },
  {
    name: "Ignite",
    price: "£4,500",
    description: "Most popular — for growing brands",
    features: [
      "Full-day shoot (8 hours)",
      "2-person crew",
      "One hero video (2-3 minutes)",
      "3-4 social cut-downs",
      "Standard motion graphics",
      "Professional voiceover",
      "Music licensing",
      "Strategy session pre-shoot",
      "3 revision rounds",
      "3-4 week delivery",
    ],
    highlighted: true,
  },
  {
    name: "Blaze",
    price: "£8,000",
    description: "For ambitious brands with bigger stories",
    features: [
      "Multi-day shoot (2+ days)",
      "Full crew",
      "Multiple locations",
      "Flagship video + content suite",
      "Advanced motion graphics",
      "Professional voiceover + sound design",
      "Content strategy workshop",
      "Full RAW footage delivery",
      "Priority turnaround",
    ],
    highlighted: false,
  },
];
