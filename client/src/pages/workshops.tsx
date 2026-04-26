import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/page-meta";

const workshopChoices = [
  {
    title: "For small business owners",
    heading: "Losing customers to big-name chains?",
    description:
      "The visual mistake costing you bookings, and the simple shift that turns the tables.",
    href: "/workshop/small-business-photography",
    eventClass: "plausible-event-name=Workshops+Disambiguation+Photo+Click",
    testId: "workshops-choice-photo",
  },
  {
    title: "For marketing managers at growing businesses",
    heading: "When your next video has to actually work",
    description:
      "The brief diagnostic that prevents your next campaign, launch, or pitch video from underperforming.",
    href: "/workshop/video-brief",
    eventClass: "plausible-event-name=Workshops+Disambiguation+Video+Click",
    testId: "workshops-choice-video",
  },
  {
    title: "For marketing directors at established businesses",
    heading: "How to waste £25k on a brand film",
    description:
      "What your audience really cares about, and how to make sure your next brand film actually finds it.",
    href: "/workshop/brand-film",
    eventClass: "plausible-event-name=Workshops+Disambiguation+Film+Click",
    testId: "workshops-choice-film",
  },
];

export default function Workshops() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 plausible-event-name=Workshops+Disambiguation+View">
      <PageMeta
        title="Workshops | Flashbuzz"
        description="Three free workshops calibrated to three commercial decisions. Pick the one that matches your business."
        canonical="https://flashbuzz.tv/workshops"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three workshops, three audiences
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Each Flashbuzz workshop is calibrated to a specific audience and a specific commercial decision. Pick the one that matches where your business is now.
          </p>

          <div className="space-y-5">
            {workshopChoices.map((choice) => (
              <div key={choice.href} className="border border-card-border bg-card rounded-lg p-6 lg:p-8">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">{choice.title}</p>
                <h2 className="text-2xl font-semibold text-foreground mb-2">"{choice.heading}"</h2>
                <p className="text-muted-foreground mb-5">{choice.description}</p>
                <Link href={choice.href} className={choice.eventClass} data-testid={choice.testId}>
                  <Button>
                    {choice.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
