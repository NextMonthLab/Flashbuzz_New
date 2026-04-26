import { Link } from "wouter";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingTiers, secondaryOffers } from "@/lib/data";
import { PageMeta } from "@/components/page-meta";

const alwaysIncluded = [
  "Strategic conversation",
  "Written treatment",
  "Licensed music",
  "Professional colour grading",
  "Multi-format delivery",
  "Revision rounds",
];

const faqs = [
  {
    question: "What does a Signature film actually cost?",
    answer: "Signature engagements start at £18,000 and most projects land between £18,000 and £35,000. The price reflects shoot scale, locations, contributors, and post-production scope. The Discovery diagnostic is the right first step if you want a precise quote against a specific brief.",
  },
  {
    question: "Is the Discovery fee really credited against a Signature engagement?",
    answer: "Yes, in full, for any Signature booking made within 60 days of the Discovery being delivered. The Discovery is structured as a low-friction first step rather than a profit centre. If the Discovery treatment confirms a Signature engagement is the right fit, the £2,500 comes off the Signature price.",
  },
  {
    question: "What if my project doesn't need a Signature film?",
    answer: "For businesses commissioning a defined-scope video to a brief they have already shaped, there is a separate offer called Purpose-led video, priced from £2,000 to £4,000. Details on the Purpose-led video page, linked from the footer.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Signature and Campaign engagements are typically split across three stages: deposit at booking, second payment at shoot completion, and final payment on delivery. For Campaign engagements with longer timelines, alternative arrangements are possible.",
  },
  {
    question: "What if we need something custom?",
    answer: "Most engagements at the Signature and Campaign tiers are custom to some degree. The pricing here reflects starting points for projects that fit the typical shape. If your project sits outside that shape, the Discovery is the right place to start the conversation.",
  },
  {
    question: "Do you charge for travel?",
    answer: "For projects within reasonable distance of Banbury, Oxfordshire, travel is included. For more distant locations or overnight stays, travel costs are itemised separately in the engagement quote.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Pricing | Flashbuzz"
        description="Brand film and campaign pricing for UK businesses. Discovery from £2,500, Signature film from £18,000, Campaign from £40,000. Photography and team training also available."
        canonical="https://flashbuzz.tv/pricing"
      />

      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-pricing-title">
            Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Three engagement tiers for brand film work, plus photography and team training. No hidden surprises.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-visible ${tier.highlighted ? "border-primary shadow-lg" : ""}`}
                data-testid={`pricing-tier-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most chosen
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-foreground">{tier.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={tier.cta.href}
                    className={`w-full ${
                      tier.name === "Discovery"
                        ? "plausible-event-name=Pricing+Discovery+Click"
                        : tier.name === "Signature film"
                          ? "plausible-event-name=Pricing+Signature+Click"
                          : "plausible-event-name=Pricing+Campaign+Click"
                    }`}
                  >
                    <Button
                      className="w-full"
                      variant={tier.highlighted ? "default" : "outline"}
                      data-testid={tier.cta.testId}
                    >
                      {tier.cta.label}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Always included at every tier</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {alwaysIncluded.map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Other ways to work together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not every project needs a Signature engagement. For some businesses, photography or team training is the right next step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {secondaryOffers.map((offer) => (
              <Link
                key={offer.name}
                href={offer.href}
                data-testid={offer.testId}
                className={`block bg-card border border-card-border rounded-lg p-6 hover:border-primary/50 transition-colors ${
                  offer.name === "Photography"
                    ? "plausible-event-name=Pricing+Photography+Click"
                    : "plausible-event-name=Pricing+Training+Click"
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{offer.name}</h3>
                  <span className="text-lg font-semibold text-primary">{offer.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{offer.description}</p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  Learn more
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Frequently asked questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-card-border rounded-lg p-6" data-testid={`pricing-faq-${index}`}>
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Not sure which tier fits?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            The Discovery diagnostic is built for that exact question. £2,500, two weeks from booking, fully credited against any Signature engagement booked within 60 days.
          </p>
          <Link href="/contact?type=discovery" className="plausible-event-name=Pricing+Bottom+CTA+Click">
            <Button size="lg" data-testid="button-pricing-cta">
              Book a Discovery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
