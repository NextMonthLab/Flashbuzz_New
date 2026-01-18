import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Play, Film, Users, BookOpen, Mic, Zap, Building2, Banknote, Factory, Flag, Microscope, UtensilsCrossed, Camera } from "lucide-react";
import flashbuzzLogo from "@assets/flashbuzz-logo-white.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Brand & Corporate Films", href: "/services/brand-corporate-films", icon: Film, description: "Films that capture your essence" },
  { title: "Recruitment & Employer Brand", href: "/services/recruitment-employer-brand", icon: Users, description: "Attract talent with authentic stories" },
  { title: "Documentary-Style Case Studies", href: "/services/documentary-case-studies", icon: BookOpen, description: "Client success stories with depth" },
  { title: "Presenter & Interviewee Coaching", href: "/services/presenter-coaching", icon: Mic, description: "Prepare your team to shine on camera" },
  { title: "Event & Motorsport Films", href: "/services/event-motorsport-films", icon: Zap, description: "Capture energy and drama" },
];

const sectors = [
  { title: "Food & Hospitality", href: "/sectors/food-hospitality", icon: UtensilsCrossed, description: "Capturing craft and passion" },
  { title: "Recruitment & Employer Branding", href: "/sectors/recruitment-employer-branding", icon: Users, description: "Authentic employer brand content" },
  { title: "Financial Services", href: "/sectors/financial-services", icon: Banknote, description: "Compliant, compelling video" },
  { title: "Manufacturing & Health Safety", href: "/sectors/manufacturing-health-safety", icon: Factory, description: "Showcasing craftsmanship and safety" },
  { title: "Motorsport", href: "/sectors/motorsport", icon: Flag, description: "The drama behind racing" },
  { title: "Scientific & Tech", href: "/sectors/scientific-tech", icon: Microscope, description: "Making innovation accessible" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img 
              src={flashbuzzLogo} 
              alt="Flashbuzz" 
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/work"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate",
                        location === "/work" ? "text-primary" : "text-foreground"
                      )}
                      data-testid="link-work"
                    >
                      Work
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/case-studies"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate",
                        location.startsWith("/case-studies") ? "text-primary" : "text-foreground"
                      )}
                      data-testid="link-case-studies"
                    >
                      Case Studies
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover-elevate" data-testid="button-services-menu">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="mb-3 pb-3 border-b border-border">
                        <Link href="/services" className="block">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors" data-testid="link-services-overview">
                            <Play className="w-4 h-4" />
                            Services Overview
                          </div>
                        </Link>
                      </div>
                      <ul className="grid gap-2">
                        {services.map((service) => (
                          <li key={service.href}>
                            <Link href={service.href}>
                              <div className="flex items-start gap-3 p-3 rounded-md hover-elevate transition-colors cursor-pointer" data-testid={`link-service-${service.href.split('/').pop()}`}>
                                <service.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-sm font-medium text-foreground">{service.title}</div>
                                  <div className="text-xs text-muted-foreground">{service.description}</div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover-elevate" data-testid="button-sectors-menu">
                    Sectors
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="mb-3 pb-3 border-b border-border">
                        <Link href="/sectors" className="block">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors" data-testid="link-sectors-overview">
                            <Building2 className="w-4 h-4" />
                            Sectors Overview
                          </div>
                        </Link>
                      </div>
                      <ul className="grid gap-2">
                        {sectors.map((sector) => (
                          <li key={sector.href}>
                            <Link href={sector.href}>
                              <div className="flex items-start gap-3 p-3 rounded-md hover-elevate transition-colors cursor-pointer" data-testid={`link-sector-${sector.href.split('/').pop()}`}>
                                <sector.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-sm font-medium text-foreground">{sector.title}</div>
                                  <div className="text-xs text-muted-foreground">{sector.description}</div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/photography"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate",
                        location === "/photography" ? "text-primary" : "text-foreground"
                      )}
                      data-testid="link-photography"
                    >
                      Photography
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate",
                        location === "/about" ? "text-primary" : "text-foreground"
                      )}
                      data-testid="link-about"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/journal"
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate",
                        location === "/journal" ? "text-primary" : "text-foreground"
                      )}
                      data-testid="link-journal"
                    >
                      Journal
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/work">
              <Button variant="ghost" data-testid="button-view-work">
                View Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button data-testid="button-start-project">
                Start a Project
              </Button>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <Link href="/work" className="block py-2 text-lg font-medium" data-testid="mobile-link-work">
              Work
            </Link>
            
            <Link href="/case-studies" className="block py-2 text-lg font-medium" data-testid="mobile-link-case-studies">
              Case Studies
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Services</div>
              <Link href="/services" className="block py-2 text-foreground" data-testid="mobile-link-services">
                All Services
              </Link>
              {services.map((service) => (
                <Link 
                  key={service.href} 
                  href={service.href} 
                  className="block py-1.5 pl-4 text-sm text-muted-foreground hover:text-foreground"
                  data-testid={`mobile-link-service-${service.href.split('/').pop()}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Sectors</div>
              <Link href="/sectors" className="block py-2 text-foreground" data-testid="mobile-link-sectors">
                All Sectors
              </Link>
              {sectors.map((sector) => (
                <Link 
                  key={sector.href} 
                  href={sector.href} 
                  className="block py-1.5 pl-4 text-sm text-muted-foreground hover:text-foreground"
                  data-testid={`mobile-link-sector-${sector.href.split('/').pop()}`}
                >
                  {sector.title}
                </Link>
              ))}
            </div>

            <Link href="/photography" className="block py-2 text-lg font-medium" data-testid="mobile-link-photography">
              Photography
            </Link>
            <Link href="/about" className="block py-2 text-lg font-medium" data-testid="mobile-link-about">
              About
            </Link>
            <Link href="/journal" className="block py-2 text-lg font-medium" data-testid="mobile-link-journal">
              Journal
            </Link>

            <div className="pt-4 space-y-3">
              <Link href="/work" className="block">
                <Button variant="outline" className="w-full" data-testid="mobile-button-view-work">
                  View Work
                </Button>
              </Link>
              <Link href="/contact" className="block">
                <Button className="w-full" data-testid="mobile-button-start-project">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
