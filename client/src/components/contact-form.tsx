import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  return (
    <Card className="border-card-border" data-testid="contact-form-placeholder">
      <CardContent className={variant === "compact" ? "p-6" : "p-8 lg:p-12"}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-flash-pink/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-flash-pink" />
          </div>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Let's Discuss Your Project
          </h3>
          
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Ready to tell your story? Get in touch to discuss your video production needs. We typically respond within 24 hours.
          </p>
          
          <a href="mailto:boo@flashbuzz.co.uk?subject=Project%20Enquiry">
            <Button size="lg" className="bg-flash-pink hover:bg-flash-pink/90" data-testid="button-email-contact">
              <Mail className="w-4 h-4 mr-2" />
              boo@flashbuzz.co.uk
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground mt-6">
            Or call us to chat about your project
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
