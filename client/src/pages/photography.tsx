import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, getPhotosByCategory, photos, type Photo } from "@/lib/photography";
import { PageMeta } from "@/components/page-meta";
import { Faq, type FaqItem } from "@/components/faq";

const cloudinaryBase = "https://res.cloudinary.com/drl0fxrkq/image/upload";

const heroImage = `${cloudinaryBase}/q_auto,f_auto,w_1200/Doorfit_48_k6ls8g`;

const tiers = [
  {
    id: "headshots",
    title: "Team portraits & headshots",
    description:
      "Professional headshots and team portraits, shot on location at your office with a portable studio setup. The kind of pictures your team will actually use on LinkedIn rather than the ones from three years ago everyone hates.",
    pricing: [
      { label: "Half-day (up to 8 people)", price: "£600" },
      { label: "Full day (up to 16 people)", price: "£1,100" },
    ],
    included: [
      "On-location portable studio setup",
      "Professional lighting and direction",
      "Edited high-resolution files plus web-optimised versions",
      "Two weeks from booking to delivered files",
    ],
    ctaLabel: "Book a headshot session",
    ctaHref: "/contact?type=photography-headshots",
    plausibleClass: "plausible-event-name=Photo+Headshots+CTA",
    testId: "cta-photo-headshots",
  },
  {
    id: "stills",
    title: "Brand stills",
    description:
      "Lifestyle, product, environment, and behind-the-scenes photography that captures the actual texture of your business. The stills you wished you had instead of the stock images you've been using.",
    pricing: [{ label: "Full day on location", price: "£2,200" }],
    included: [
      "Full day shoot at your location or relevant venue",
      "Pre-shoot creative call to plan key images",
      "Edited high-resolution files delivered as a curated gallery",
      "Standard usage rights for web, social, decks, and PR",
      "Two weeks from booking to delivered files",
    ],
    ctaLabel: "Book a brand stills day",
    ctaHref: "/contact?type=photography-stills",
    plausibleClass: "plausible-event-name=Photo+Stills+CTA",
    testId: "cta-photo-stills",
  },
  {
    id: "events",
    title: "Event coverage",
    description:
      "Conferences, awards, launches, internal away-days. Photography that captures what the day actually felt like, not just who stood where.",
    pricing: [
      { label: "Half-day (up to 4 hours)", price: "£750" },
      { label: "Full day (up to 8 hours)", price: "£1,300" },
    ],
    included: [
      "On-the-day coverage",
      "Selection of edited highlights delivered within 48 hours for social",
      "Full edited gallery delivered within two weeks",
      "Standard usage rights for internal and external use",
    ],
    ctaLabel: "Book event coverage",
    ctaHref: "/contact?type=photography-events",
    plausibleClass: "plausible-event-name=Photo+Events+CTA",
    testId: "cta-photo-events",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How long from booking to delivered files?",
    answer:
      "Two weeks from booking is standard. For event coverage, a selection of social-ready highlights is delivered within 48 hours of the event, with the full edited gallery following within two weeks.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. I'm based in Banbury and regularly shoot across the South Midlands, London, and the Home Counties. Travel beyond a 60-mile radius is charged at cost. For shoots requiring overnight stays, accommodation and a half-day travel rate are added to the quote.",
  },
  {
    question: "What about usage rights?",
    answer:
      "Standard packages include usage for your website, social channels, internal materials, decks, and PR. If you need images for paid advertising, billboards, or licensed print campaigns, that's an additional usage licence and we'll discuss it before the shoot. No surprises after the fact.",
  },
  {
    question: "Can you shoot stills and video on the same day?",
    answer:
      "Yes, but it's worth knowing it's a different shoot day. Either I'm directing your people for stills or I'm directing them for film. Doing both well in a single day usually means a second shooter or a second day. Happy to scope a combined engagement if that's what the project needs.",
  },
  {
    question: "Why book a filmmaker for photography rather than a photographer?",
    answer:
      "Most photographers know how to take a good picture. Documentary filmmakers know how to direct people who don't want to be on camera, find the moment that says something about who someone actually is, and keep a session moving so it doesn't fall apart by the last subject. The stills come back with a point of view rather than just a competent execution.",
  },
  {
    question: "What if I'm thinking about video too?",
    answer:
      "Mention it when you book. The photography day is a complete engagement in itself — but if you're thinking about a brand film at some point, I can show you what that would look like alongside the stills work, with no obligation. Most clients who eventually commission a film started with photography first.",
  },
];

const doorfitImages = photos
  .filter((photo) => photo.id.startsWith("Doorfit_"))
  .slice(0, 2);

const featuredCaldwellImages = [
  "P1011199_ycq6hy",
  "P1011152_z2iudk",
  "P1011262_ooaj27",
  "P1011218_mkkje9",
].map((id) => photos.find((photo) => photo.id === id)).filter((photo): photo is Photo => Boolean(photo));

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState("portraits");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = getPhotosByCategory(activeCategory);

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Photography | Flashbuzz"
        description="Headshots, brand stills, and editorial photography for UK businesses. Recent commissions include Alastair Caldwell for Auto Addicts magazine. Two weeks from booking."
        canonical="https://flashbuzz.tv/photography"
      />

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Photography</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6"
                data-testid="text-photography-title"
              >
                Photography for businesses that need their stills to do the work.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The team portraits, brand images, and event coverage that show what makes your business different. Shot by a 27-time award-winning documentary filmmaker.
              </p>
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt="Doorfit on-location headshot — UK door hardware specialist by Flashbuzz"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-12" data-testid="text-photography-tiers-title">
            Three ways to book
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-background border border-card-border rounded-lg p-6 lg:p-8 flex flex-col"
                data-testid={`card-photo-tier-${tier.id}`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">{tier.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{tier.description}</p>

                <div className="space-y-2 mb-6">
                  {tier.pricing.map((price) => (
                    <div key={price.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-muted-foreground">{price.label}</span>
                      <span className="text-lg font-semibold text-foreground">{price.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8 flex-grow">
                  <p className="text-sm font-semibold text-foreground mb-3">What's included</p>
                  <ul className="space-y-2">
                    {tier.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tier.ctaHref}
                  className={tier.plausibleClass}
                  data-testid={tier.testId}
                >
                  <Button className="w-full">
                    {tier.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-why-filmmaker-title">
            Why hire a filmmaker for stills
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Most photographers shoot people. Filmmakers shoot situations.</p>
            <p>
              Auto Addicts magazine commissioned a profile shoot of former McLaren team manager Alastair Caldwell, the F1 figure depicted in <em>Rush</em>. The brief was to capture not just the man but the world he's built around the cars he loves. The published feature spread came back with images that worked because they were directed the way a documentary scene gets directed: looking for the moment that says something about who someone actually is, finding the frame where the environment tells half the story.
            </p>
            <p>
              That's the difference between a good headshot and a portrait that makes someone stop scrolling. Twelve years of documentary work means the same approach goes into a team headshot session, a brand stills day, or event coverage. The kit is professional, the lighting is properly set, the editing is tight. None of that is the differentiator. The differentiator is that the stills come back with a point of view.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="border border-card-border rounded-lg bg-background p-6 lg:p-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured commission</h2>
            <p className="text-xl text-foreground/80 mt-2">Alastair Caldwell for Auto Addicts</p>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Auto Addicts magazine commissioned a profile shoot of Alastair Caldwell at his home and workshops. Caldwell was McLaren's Formula One team manager during their championship years of 1974 and 1976, the period dramatised in Ron Howard's film <em>Rush</em>, on which he served as technical advisor. He invented the F1 air-starter and the six-speed gearbox.
              </p>
              <p>
                The brief was to capture not just the man but the world he's built around the cars he loves. Four images from the published feature shown below.
              </p>
            </div>
            <p className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">
              Auto Addicts magazine — {" "}
              <a
                href="https://autoaddicts.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=Caldwell+Feature+View underline hover:no-underline"
              >
                autoaddicts.co.uk
              </a>
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredCaldwellImages.map((photo) => (
                <div key={photo.id} className="aspect-[3/2] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={`${cloudinaryBase}/q_auto,f_auto,w_1200/${photo.id}`}
                    srcSet={`${cloudinaryBase}/q_auto,f_auto,w_800/${photo.id} 800w, ${cloudinaryBase}/q_auto,f_auto,w_1200/${photo.id} 1200w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8" data-testid="text-selected-work-title">
            Selected work
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[3/2] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
                data-testid={`card-photo-${photo.category}-${photo.id.split("_")[0]}`}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm text-white/80 capitalize">{photo.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-doorfit-shoot-title">
                Recent shoot: Doorfit
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Doorfit are a UK door hardware and trade specialist. They needed updated team portraits for their website and trade press without the corporate-cardboard look most B2B headshots have. We shot the leadership team on location, lit it properly, and got through everyone in a half-day. The brief was specifically: don't make us look like every other distributor. We didn't.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {doorfitImages.map((photo) => (
                <div
                  key={photo.id}
                  className="aspect-[3/4] rounded-lg overflow-hidden bg-muted"
                >
                  <img
                    src={photo.thumbnail}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center" data-testid="text-photography-faq">
            Frequently asked questions
          </h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center" data-testid="text-photography-cta-title">
            Two ways to start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-background border border-card-border rounded-lg p-6 lg:p-8 flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Photography</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                Headshots, brand stills, or event coverage. Book the tier that fits, two weeks from booking to delivered files.
              </p>
              <Link
                href="/contact?type=photography"
                className="plausible-event-name=Photo+General+CTA"
                data-testid="cta-photo-strip-photography"
              >
                <Button size="lg" className="w-full">
                  Book photography
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-background border border-card-border rounded-lg p-6 lg:p-8 flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Brand film</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                Already thinking about video as well? Start with a Discovery — £2,500, two weeks from booking to delivered treatment.
              </p>
              <Link
                href="/contact?type=discovery"
                className="plausible-event-name=Discovery+CTA"
                data-testid="cta-photo-strip-discovery"
              >
                <Button size="lg" variant="outline" className="w-full">
                  Book a Discovery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          data-testid="photo-lightbox"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
              onClick={() => setSelectedPhoto(null)}
              data-testid="button-close-lightbox"
            >
              &times;
            </button>
            <div className="absolute bottom-4 left-4 text-white/80 text-sm capitalize">
              {selectedPhoto.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
