import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/page-meta";

export default function Workshop() {
  return (
    <>
      <PageMeta
        title="Workshop launching soon | Flashbuzz"
        description="The Flashbuzz documentary storytelling workshop is in production. Sign up for a quote in the meantime and we'll let you know when it opens."
        canonical="https://flashbuzz.tv/workshop"
      />
      <div className="min-h-screen pt-24 lg:pt-32">
        <section className="py-16 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
              data-testid="text-workshop-title"
            >
              Workshop launching soon
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
              The Flashbuzz documentary storytelling workshop is in production. We're shaping a hands-on programme that brings filmmaker discipline to the way teams tell their own stories. In the meantime, get in touch and we'll line up a project quote — or let you know the moment the workshop opens.
            </p>
            <Link
              href="/contact"
              className="plausible-event-name=Quote+CTA"
              data-testid="cta-quote-workshop"
            >
              <Button size="lg" data-testid="button-workshop-quote">
                Get a quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
