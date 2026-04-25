import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/page-meta";

export default function PurposeLedVideo() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Purpose-led video | Flashbuzz"
        description="Single-piece video commissions for businesses with a defined brief. £2,000–£4,000. Three weeks from booking."
        canonical="https://flashbuzz.tv/purpose-led-video"
      />

      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-purpose-led-video-title">
            Purpose-led video
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
            For businesses commissioning a single piece of video to serve a specific business purpose. The brief is already shaped. The work is in making it land.
          </p>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most of the work I take on is Signature brand film: strategic engagements where the diagnostic happens before the camera comes out. But not every video needs that level of engagement. Some businesses arrive with the strategic work already done. They know what the video is for, who it's for, and what it needs to do. They're not asking me to find the brief - they're asking me to execute it well.
            </p>
            <p>
              Purpose-led video is for those projects. A product launch piece. A recruitment campaign asset. An event recap. A homepage hero. A pitch supporting video. Anything where the buyer has done the thinking and the work is in the making.
            </p>
            <p>
              The same craft principles go in. The same camera kit. The same approach to direction, lighting, edit, and sound. What's different is the engagement structure: there's no Discovery, no diagnostic call, no strategic treatment. We agree the brief, schedule the shoot, deliver the work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Pricing</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Purpose-led video is priced from £2,000 to £4,000, depending on shoot complexity, location, and post-production scope. Most projects land in the middle of that range.
            </p>
            <div>
              <p className="text-foreground font-medium mb-3">What's included:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A short pre-production call to confirm the brief, locations, and contributors</li>
                <li>Shoot day with professional camera, lighting, and sound</li>
                <li>Edit, colour, and sound mix</li>
                <li>One round of revisions</li>
                <li>Final delivery in formats suited to the agreed use</li>
              </ul>
            </div>
            <div>
              <p className="text-foreground font-medium mb-3">What's not included (and why):</p>
              <p>
                A Discovery diagnostic, a written treatment, or strategic positioning work. Those are part of a Signature engagement, which is a different product. If your project needs that level of engagement, the Signature film offer is the right fit and the Discovery is the entry point.
              </p>
            </div>
            <p>Three weeks from booking to final delivery, in most cases.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Is this the right offer for your project?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="text-foreground font-medium mb-3">Purpose-led video is the right offer if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You already know what the video is for and who it's for</li>
                <li>You have a brief, even a rough one, you can describe in a paragraph</li>
                <li>You want the work made well, with craft, but you don't need help shaping the strategic question</li>
                <li>The project is a single piece of video with a clear deliverable</li>
              </ul>
            </div>
            <div>
              <p className="text-foreground font-medium mb-3">Signature film is the right offer if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can see what makes your business different but haven't found a supplier who can put it on screen</li>
                <li>The brief is unclear, or the previous brand films you've commissioned haven't landed</li>
                <li>The project warrants a strategic engagement before the cameras come out</li>
                <li>You want the diagnostic process - the Discovery, the treatment, the deeper craft work</li>
              </ul>
            </div>
            <p>
              If you're not sure which one fits, the Discovery engagement is designed to help work that out. £2,500, two weeks from booking, fully credited against any Signature engagement booked within 60 days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Get in touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you've got a defined brief and a Purpose-led video sounds like the right fit, tell me about the project and I'll come back to you within 24 hours with a quote and indicative timeline.
          </p>
          <Link
            href="/contact?type=purpose-led-video"
            className="plausible-event-name=Purpose+Led+Video+CTA"
            data-testid="cta-purpose-led-video"
          >
            <Button size="lg" data-testid="button-purpose-led-video">
              Enquire about Purpose-led video
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
