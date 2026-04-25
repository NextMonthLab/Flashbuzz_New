import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderPhoto from "@assets/flashbuzz-photo-2.jpg";
import { PageMeta } from "@/components/page-meta";
import { Faq, type FaqItem } from "@/components/faq";
import { BookEmailCapture } from "@/components/book-email-capture";

const faqItems: FaqItem[] = [
  {
    id: "treatment",
    question: "What's a Discovery?",
    answer:
      "A 90-minute diagnostic call where I run the framework on your business, followed by a written treatment. The treatment lays out what the film should communicate, what to leave out, and how to design the project so that what your business needs to say connects with what your audience actually wants to hear. It's also designed to win senior leadership buy-in, so the project gets supported internally before any production cost is committed. £2,500, delivered within two weeks of booking. The fee comes off any Signature engagement booked within 60 days.",
  },
  {
    question: "Why is the Discovery the most valuable part?",
    answer:
      "Because most brand films fail at the treatment stage, not the production stage. By the time the cameras turn on, the wrong decisions have usually been made about what to include, what to cut, and what story to tell. The Discovery happens before any of that, and it's where the work that determines whether the final film resonates actually gets done.",
  },
  {
    question: "What's a treatment?",
    answer:
      "A treatment is a written document that lays out how a film will be made before any of it is shot. Structure, key sequences, tone, the role each contributor plays, what's deliberately included and what's deliberately left out, and the reasoning behind each choice. It's the design document for the film. In my work, it also functions as the internal sales tool that gets senior leadership behind the project.",
  },
  {
    question: "What does a Signature film cost?",
    answer:
      "Signature brand films start at £18,000 and typically land between £18,000 and £25,000 depending on shoot days, locations, and post-production scope. Most engagements include a hero film plus social cut-downs and behind-the-scenes content.",
  },
  {
    question: "What about larger campaigns?",
    answer:
      "Campaign-scale productions, multi-day shoots, multiple locations, full content suites, start at £40,000.",
  },
  {
    question: "Why publish prices when most production companies don't?",
    answer:
      "Because if you've been let down by a previous supplier, the last thing you want is another opaque discovery call. The numbers above tell you whether I'm in your range before you book a conversation. If I am, the conversation can be about the work, not budget gymnastics.",
  },
  {
    question: "What do you shoot on?",
    answer:
      "A Panasonic S1H day-to-day, the first mirrorless camera Netflix recognised for its Originals. For productions that warrant it I bring in ARRI, RED, or Sony cinema bodies through my crew network.",
  },
  {
    question: "Who is this for?",
    answer:
      "Founders and marketing directors at UK businesses turning over roughly £5m to £100m. The common thread isn't size, it's the point where you've outgrown your previous video setup and you want the work to reflect that.",
  },
];

export default function About() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="About | Rob Hutt | Flashbuzz"
        description="27-time award-winning documentary filmmaker. Brand films for UK businesses whose previous suppliers couldn't see what made them different."
        canonical="https://flashbuzz.tv/about"
      />

      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-about-title">
                I'm Rob Hutt.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                I make brand films for businesses whose previous suppliers couldn't see what made them different.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src={founderPhoto}
                  alt="Rob Hutt, founder of Flashbuzz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a documentary filmmaker first. <em>Time Spent</em>, my 2023 short, has won 27 international awards and holds an 8.8 IMDb rating. I'm working on the feature now. Before Flashbuzz I taught at the Film and Television Academy, working with young filmmakers on the craft of making films that resonate rather than videos that don't. Alongside the films I make under my own name, I run Flashbuzz, a video and photography practice based in Banbury working with mid-market UK businesses.
            </p>
            <p>
              The work I'm proudest of has one thing in common: the client could already see what made them different, they just hadn't found a supplier who could put it on screen. HERO ERA wanted a build-up film for Peking to Paris that would feel editorial rather than corporate. Bibby Financial Services wanted recruitment content that didn't sound like recruitment content; we built it around laughter and outtakes and it became their hiring asset for the year. Catherine House Hospice needed an awareness film about end-of-life care, made with the dignity that subject demands. None of those were standard briefs. None of them came back standard.
            </p>
            <p>
              If you've been through a couple of brand films and walked away thinking it should have been better, I'd like to hear about your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-video-vs-film">
            Video vs film
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every business I work with has been sold a video at some point. Sometimes several. Usually they were technically fine, with sharp footage, clean audio, a reasonable edit. And usually they didn't do very much.
            </p>
            <p>
              A film is a different kind of object. It isn't defined by length, budget, or whether it ends up on television. It's defined by whether the audience leaves with something they didn't have before. A feeling, a recognition, a small shift in how they see the subject. A video can inform. A film <em>moves</em> you, even fractionally, even briefly. That's the threshold. Most business content doesn't cross it.
            </p>
            <p>
              The reasons it doesn't cross are knowable. They aren't mystical and they aren't subjective. There's a craft underneath what makes audiences resonate with material. What the writing does, what the camera does, what the edit does, what's deliberately left out. I've spent a decade studying it across documentary work, narrative shorts, and commercial film. I'm currently writing a book about it.
            </p>
            <p>
              Not every project needs a film. Sometimes a business needs a sixty-second product advert, and a film would be wasted on the brief. Part of my job in the first conversation is being honest about which one your project actually requires. If you need a video, I'll make a good one. If you need a film, you'll know the difference because I'll walk you through every choice that makes it one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-characterx">
            How I find the film inside the brief
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most briefs describe a video. The film is usually somewhere underneath, waiting to be found. CharacterX is the method I use to find it.
            </p>
            <p>
              CharacterX is a diagnostic borrowed from screenwriting, applied to business. Films work because they have a protagonist, a guide, and a system the protagonist navigates. When you flatten any of those three, the story collapses. Most business video flattens all three.
            </p>
            <p>Here's the diagnostic in plain terms.</p>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                Who is the protagonist?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Not your business. Your customer. The films that work are the ones where the viewer sees themselves on screen, in the situation they're actually in. The films that fail are the ones where your business is the hero. People don't watch that.
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                What is your business actually offering?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Not your product. The role you play in your customer's situation. Are you the guide who helps them get unstuck? The tool that gives them leverage? The witness who finally sees something nobody else has? Different roles produce different films. Most briefs don't get this far, they describe the product and skip the role.
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                What is the system the protagonist is navigating?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Not your industry. The lived reality your customer is operating inside. The constraints, the pressures, the alternatives they've tried and ruled out. Films that show real systems land. Films that gesture at "the modern business landscape" don't.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              When I run this at the start of an engagement, usually a 90-minute call before any equipment is booked, three things happen. The brief sharpens. The film becomes shorter. And we usually find that the most interesting moment in the story is something the marketing team had been quietly leaving out because it didn't fit the brand voice.
            </p>
            <p>
              That moment, more often than not, is the one the film should hinge on.
            </p>
            <p>
              CharacterX isn't a slide deck I deliver. It's a way of looking at a business that I've used on every commercial film I've made for the last five years. It's also the framework I'm building into a self-serve video tool for businesses that eventually want to apply this thinking themselves. If you'd like to be on the waitlist for that, there's a place to add your name below.
            </p>
            <p>
              For now, if you've got a film to make and you'd like a filmmaker who'll find the protagonist before he picks up a camera, that's what I'm for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-equipment">
            What I shoot on
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Day-to-day, a Panasonic S1H. It was the first mirrorless camera Netflix recognised for its Originals and meets the same capture standards as the streamers' approved cinema cameras. For productions that warrant it, I bring in cinema bodies through my crew network: ARRI ALEXA, RED V-RAPTOR, Sony VENICE.
            </p>
            <p>Match the kit to the project, not the other way round.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-book">
            The book
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              I'm currently writing a book about why some films and videos resonate with audiences and others don't. It's the long-form version of the work I do with clients on every brand film, and it'll be published when it's ready. If you'd like to know when it's out, add your name below.
            </p>
          </div>
          <BookEmailCapture />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-training">
            In-house team training
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Some businesses don't need a film made for them. They need their internal content team to understand what makes a film resonate, so the work that team produces every week stops looking like everyone else's.
            </p>
            <p>
              I taught at the Film and Television Academy for several years, working with young filmmakers on the same craft principles I now apply to commercial work. The training I run for in-house teams is the corporate version of that curriculum, applied directly to your brand and your existing content.
            </p>
            <p>
              A typical engagement is two days on site with up to eight members of your team. We work through the principles that separate film from video, run them against examples from your industry, and then apply them to a piece of content your team is currently working on. You leave with a working method, not a deck.
            </p>
          </div>

          <div className="bg-background border border-card-border rounded-lg p-6 lg:p-8 mb-8">
            <p className="text-xl lg:text-2xl font-semibold text-foreground" data-testid="text-training-price">
              £6,000. Available as a standalone engagement, or alongside production work.
            </p>
          </div>

          <Link
            href="/contact?type=training"
            className="plausible-event-name=Training+CTA"
            data-testid="cta-training"
          >
            <Button size="lg" data-testid="button-training">
              Enquire about training
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center" data-testid="text-faq">
            Frequently asked questions
          </h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center" data-testid="text-two-ways">
            Two ways to start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-background border border-card-border rounded-lg p-6 lg:p-8 flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Discovery</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                A 90-minute diagnostic call and a written treatment. £2,500, two weeks from booking. The fastest way to see how this would work on your business.
              </p>
              <Link
                href="/contact?type=discovery"
                className="plausible-event-name=Discovery+CTA"
                data-testid="cta-about-discovery"
              >
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-about-discovery">
                  Book a Discovery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-background border border-card-border rounded-lg p-6 lg:p-8 flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Quote</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                Already know what you want to make? Tell me about the project and I'll come back to you within 24 hours with an indicative quote.
              </p>
              <Link
                href="/contact?type=quote"
                className="plausible-event-name=Quote+CTA"
                data-testid="cta-about-quote"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-about-quote">
                  Get a quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
