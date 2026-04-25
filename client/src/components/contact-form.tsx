import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormProps {
  variant?: "default" | "compact";
  type?: string | null;
}

const TALLY_BASE_SRC =
  "https://tally.so/embed/Xxo2Le?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const contextLines: Record<string, string> = {
  "purpose-led-video":
    "Booking a Purpose-led video. Tell me about the project - what it's for, who it's for, and roughly when you'd like to shoot - and I'll come back to you within 24 hours with a quote.",
};

function buildTallySrc(type?: string | null, bookForFilmFollowup?: boolean): string {
  const params: string[] = [];
  if (type) params.push(`type=${encodeURIComponent(type)}`);
  if (bookForFilmFollowup) params.push("book_for_film_followup=yes");
  if (params.length === 0) return TALLY_BASE_SRC;
  return `${TALLY_BASE_SRC}&${params.join("&")}`;
}

export function ContactForm({ variant = "default", type = null }: ContactFormProps) {
  const isPhotography = useMemo(
    () => typeof type === "string" && type.startsWith("photography"),
    [type]
  );
  const [bookForFilmFollowup, setBookForFilmFollowup] = useState(false);
  const contextLine = type ? contextLines[type] : undefined;

  const tallySrc = useMemo(
    () => buildTallySrc(type, bookForFilmFollowup),
    [type, bookForFilmFollowup]
  );

  useEffect(() => {
    const loadTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');

    if (typeof (window as any).Tally !== "undefined") {
      loadTally();
    } else if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }
  }, [tallySrc]);

  return (
    <Card className="border-card-border" data-testid="contact-form">
      <CardContent className={variant === "compact" ? "p-6" : "p-8 lg:p-12"}>
        {isPhotography && (
          <label
            className="flex items-start gap-3 mb-6 cursor-pointer plausible-event-name=Photo+To+Film+Upsell"
            data-testid="photo-upsell-checkbox-label"
          >
            <input
              type="checkbox"
              checked={bookForFilmFollowup}
              onChange={(event) => setBookForFilmFollowup(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-border accent-primary"
              data-testid="photo-upsell-checkbox"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              I might be interested in video work in future, please add me to the list
            </span>
          </label>
        )}
        {contextLine && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-6" data-testid="contact-context-line">
            {contextLine}
          </p>
        )}
        <iframe
          key={tallySrc}
          data-tally-src={tallySrc}
          loading="lazy"
          width="100%"
          height="313"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Flashbuzz Contact Form"
          data-testid="tally-form-iframe"
        />
      </CardContent>
    </Card>
  );
}
