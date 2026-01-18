import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
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
  }, []);

  return (
    <Card className="border-card-border" data-testid="contact-form">
      <CardContent className={variant === "compact" ? "p-6" : "p-8 lg:p-12"}>
        <iframe
          data-tally-src="https://tally.so/embed/Xxo2Le?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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
