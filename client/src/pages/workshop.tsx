import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/PageMeta";

export default function Workshop() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Workshop | Flashbuzz"
        description="The Flashbuzz workshop for business storytellers is in production. Sign up to be the first to hear when it launches, or get a quote for a film today."
        canonical="https://flashbuzz.tv/workshop"
      />
      <section className="py-16 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
            data-testid="text-workshop-title"
          >
            Workshop launching soon
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            We're building a hands-on workshop on documentary storytelling for businesses—story
            architecture, authentic interview technique, and how to direct a story that matters.
            Details and dates are being finalised. In the meantime, if you have a film project we
            can help with, let's talk.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-workshop-quote">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
