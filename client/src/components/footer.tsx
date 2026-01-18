import { Link } from "wouter";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { SiVimeo } from "react-icons/si";
import flashbuzzLogo from "@assets/flashbuzz-logo-white.png";

const quickLinks = [
  { title: "Work", href: "/work" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Services", href: "/services" },
  { title: "Sectors", href: "/sectors" },
  { title: "Photography", href: "/photography" },
  { title: "About", href: "/about" },
  { title: "Journal", href: "/journal" },
  { title: "Contact", href: "/contact" },
];

const services = [
  { title: "Brand & Corporate Films", href: "/services/brand-corporate-films" },
  { title: "Recruitment & Employer Brand", href: "/services/recruitment-employer-brand" },
  { title: "Documentary-Style Case Studies", href: "/services/documentary-case-studies" },
  { title: "Presenter Coaching", href: "/services/presenter-coaching" },
  { title: "Event & Motorsport Films", href: "/services/event-motorsport-films" },
];

const locations = [
  { title: "Video Production Oxfordshire", href: "/video-production-oxfordshire" },
  { title: "Video Production Banbury", href: "/video-production-banbury" },
  { title: "Video Production Oxford", href: "/video-production-oxford" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" data-testid="footer-link-home">
              <img 
                src={flashbuzzLogo} 
                alt="Flashbuzz" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Documentary craft for business stories that matter. Video production powered by an award-winning filmmaker.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Banbury, Oxfordshire, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:boo@flashbuzz.co.uk" className="hover:text-foreground transition-colors" data-testid="footer-email">
                  boo@flashbuzz.co.uk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+441onal" className="hover:text-foreground transition-colors" data-testid="footer-phone">
                  Available on request
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.href.slice(1) || 'home'}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-service-${service.href.split('/').pop()}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link 
                    href={location.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-location-${location.href.slice(1)}`}
                  >
                    {location.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://vimeo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-social-vimeo"
                >
                  <SiVimeo className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Flashbuzz. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
