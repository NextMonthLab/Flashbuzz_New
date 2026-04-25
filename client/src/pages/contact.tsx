import { useEffect, useState } from "react";
import { Link } from "wouter";
import { MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageMeta } from "@/components/page-meta";

const photographyContextLines: Record<string, string> = {
  "photography-headshots":
    "Booking a half-day or full-day headshot session. Tell me about your team and where you're based, and I'll come back to you within 24 hours with availability.",
  "photography-stills":
    "Booking a brand stills day. Tell me about your business and the kind of images you're missing, and I'll come back to you within 24 hours with availability.",
  "photography-events":
    "Booking event coverage. Tell me about the event — date, location, format — and I'll come back to you within 24 hours with availability.",
  photography:
    "Booking a photography session. Tell me what you need — headshots, brand stills, or event coverage — and I'll come back to you within 24 hours.",
};

const whatHappensNext = [
  "We'll respond within 24 hours",
  "We'll set up a discovery call to understand your needs",
  "We'll provide a tailored proposal within a week",
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4-8 weeks from initial brief to final delivery. This includes pre-production planning, filming, and post-production. Timelines can be adjusted based on your specific needs.",
  },
  {
    question: "Do you travel for shoots?",
    answer: "Yes, we work across the UK and internationally. Based in Banbury, we're centrally located with excellent transport links. Travel costs are included in project quotes for UK-based work.",
  },
  {
    question: "What's included in your packages?",
    answer: "All packages include pre-production planning, professional filming, editing, motion graphics, music licensing, and multiple revision rounds. Specific deliverables vary by package tier.",
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking 4-6 weeks ahead for typical projects. For larger productions or specific dates, earlier booking is advisable. We do accommodate shorter timelines when possible.",
  },
];

export default function Contact() {
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type"));
  }, []);

  const photographyContextLine = type ? photographyContextLines[type] : undefined;

  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <PageMeta
        title="Get a Quote | Flashbuzz"
        description="Tell us about your project and we'll respond within 24 hours. Documentary-style video production from Flashbuzz, based in Banbury, Oxfordshire and working UK-wide."
        canonical="https://flashbuzz.tv/contact"
      />
      <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-contact-title">
                Let's Talk
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Every great film starts with a conversation. Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://res.cloudinary.com/drl0fxrkq/image/upload/w_600,h_450,c_fill,q_auto,f_auto/v1744814523/Meadow-Cafe-Filming-0014_nggmtt.jpg"
                  alt="Flashbuzz film crew on location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="bg-card border border-card-border rounded-lg p-6 lg:p-10">
                <h2 className="text-xl font-semibold text-foreground mb-6">Start Your Project</h2>
                {photographyContextLine && (
                  <p
                    className="text-sm italic text-muted-foreground mb-6"
                    data-testid="photography-context-line"
                  >
                    {photographyContextLine}
                  </p>
                )}
                <ContactForm type={type} />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contact Details</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-foreground font-medium">Location</p>
                      <p>Banbury, Oxfordshire, UK</p>
                      <p className="text-sm">Serving clients across the UK and internationally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <a href="mailto:hello@flashbuzz.co.uk" className="hover:text-primary transition-colors" data-testid="contact-email">
                        hello@flashbuzz.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <a href="tel:+441234567890" className="hover:text-primary transition-colors" data-testid="contact-phone">
                        +44 (0) 1234 567890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">What Happens Next</h3>
                <ul className="space-y-3">
                  {whatHappensNext.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours on business days. For urgent enquiries, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card border-t border-card-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6" data-testid={`faq-${index}`}>
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
