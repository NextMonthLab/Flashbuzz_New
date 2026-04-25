import { Link } from "wouter";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/lib/data";
import { PageMeta } from "@/components/page-meta";

const alwaysIncluded = [
  "Strategy session",
  "Licensed music",
  "Professional colour grading",
  "Multi-format delivery",
  "Revision rounds",
  "Ongoing support",
];

const videoTypePricing = [
  { type: "Testimonial", price: "from £2,000" },
  { type: "Case Study", price: "from £3,000" },
  { type: "Social Content Pack", price: "from £1,500" },
  { type: "Event Coverage", price: "from £2,500" },
  { type: "Recruitment Video", price: "from £3,500" },
];

const faqs = [
  {
    question: "What affects the final price?",
    answer: "Key factors include shoot duration, crew size, number of locations, complexity of post-production, and additional deliverables. We provide detailed quotes after understanding your specific needs.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we typically split payments into three stages: deposit at booking, second payment at shoot completion, and final payment on delivery. For larger projects, we can discuss alternative arrangements.",
  },
  {
    question: "What if we need something custom?",
    answer: "Most projects are custom to some degree. Our packages are starting points, and we'll tailor scope and pricing to match your specific requirements and budget.",
  },
  {
    question: "Do you charge for travel?",
    answer: "For projects within reasonable distance of Banbury, travel is included. For more distant locations or overnight stays, we'll include travel costs in your quote.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Pricing | Flashbuzz"
        description="Transparent pricing for documentary-style video production. Recruitment films from £3,500, testimonials from £2,000. No hidden surprises."
        canonical="https://flashbuzz.tv/pricing"
      />
      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-pricing-title">
            Transparent Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Accessible-premium video production. Clear pricing with no hidden surprises.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name}
                className={`relative overflow-visible ${tier.highlighted ? 'border-primary shadow-lg' : ''}`}
                data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-foreground">
                    {tier.price}
                    <span className="text-base font-normal text-muted-foreground ml-1">starting</span>
                  </div>
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
                  <Link href="/contact" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={tier.highlighted ? "default" : "outline"}
                      data-testid={`button-tier-${tier.name.toLowerCase()}`}
                    >
                      Get Started
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
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What's Always Included
          </h2>
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
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Pricing by Video Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videoTypePricing.map((item) => (
              <div 
                key={item.type} 
                className="bg-muted/50 rounded-lg p-4 text-center"
                data-testid={`pricing-type-${item.type.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="text-sm font-medium text-foreground mb-1">{item.type}</p>
                <p className="text-xs text-muted-foreground">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
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
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Not sure which package fits?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your needs and we'll recommend the right approach for your budget and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-pricing-cta">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
