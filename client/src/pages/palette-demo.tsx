import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { ArrowLeft, Play, Star, Zap } from "lucide-react";

export default function PaletteDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Flashbuzz Palette Demo</h1>
            <p className="text-muted-foreground">Visual reference for the premium colour system</p>
          </div>
        </div>

        <section className="space-y-6" data-testid="section-neutrals">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-neutrals">Neutral Backgrounds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-24 bg-charcoal" />
              <div className="p-3 bg-card">
                <p className="font-medium">Charcoal Black</p>
                <p className="text-sm text-muted-foreground">#0F0F12 - Primary BG</p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-24 bg-card" />
              <div className="p-3 bg-card border-t border-border">
                <p className="font-medium">Slate Graphite</p>
                <p className="text-sm text-muted-foreground">#1C1F26 - Cards/Panels</p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-24 bg-muted" />
              <div className="p-3 bg-card">
                <p className="font-medium">Steel Grey</p>
                <p className="text-sm text-muted-foreground">#2A2F3A - Borders</p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-24 bg-deep-petrol" />
              <div className="p-3 bg-card">
                <p className="font-medium">Deep Petrol Blue</p>
                <p className="text-sm text-muted-foreground">#1F3A4A - Sections</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-text">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-text">Text Colours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-xl text-foreground font-medium">Off-White (Primary)</p>
                <p className="text-muted-foreground">#F4F4F6</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-xl text-muted-foreground font-medium">Muted Grey (Secondary)</p>
                <p className="text-muted-foreground">#A6ABB5</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-xl text-flash-pink font-medium">Flash Pink (Accent Only)</p>
                <p className="text-muted-foreground">#FF2E88</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-accents">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-accents">Brand Accents (Use Sparingly)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-20 bg-flash-pink flex items-center justify-center">
                <span className="text-white font-bold text-lg">Flash Pink</span>
              </div>
              <div className="p-4 bg-card">
                <p className="font-medium">#FF2E88</p>
                <p className="text-sm text-muted-foreground">Primary CTAs, active states, highlights</p>
              </div>
            </div>
            <div className="rounded-md overflow-hidden border border-border">
              <div className="h-20 bg-electric-amber flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">Electric Amber</span>
              </div>
              <div className="p-4 bg-card">
                <p className="font-medium">#FFC247</p>
                <p className="text-sm text-muted-foreground">Secondary CTAs, badges, hover highlights</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-buttons">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-buttons">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button data-testid="button-primary">
              <Play className="mr-2 h-4 w-4" /> Primary (Flash Pink)
            </Button>
            <Button variant="secondary" data-testid="button-secondary">
              <Star className="mr-2 h-4 w-4" /> Secondary (Amber)
            </Button>
            <Button variant="outline" data-testid="button-outline">
              Outline
            </Button>
            <Button variant="ghost" data-testid="button-ghost">
              Ghost
            </Button>
            <Button variant="destructive" data-testid="button-destructive">
              Destructive
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Zap className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-badges">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-badges">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-cards">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-cards">Cards & Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card data-testid="card-sample">
              <CardHeader>
                <CardTitle>Sample Card</CardTitle>
                <CardDescription>Uses Slate Graphite background with Steel Grey border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cards provide visual separation for content groups. The subtle border distinguishes them from the background.</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate cursor-pointer" data-testid="card-interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover to see elevation effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Interactive cards use the elevate system for subtle hover feedback.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-inputs">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-inputs">Inputs</h2>
          <div className="max-w-md space-y-4">
            <Input placeholder="Default input" data-testid="input-default" />
            <Input placeholder="Focused input (click me)" data-testid="input-focused" />
          </div>
        </section>

        <section className="space-y-6" data-testid="section-links">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-links">Links</h2>
          <div className="space-y-2">
            <p>
              Regular text with an <a href="#" className="text-foreground hover:text-flash-pink underline underline-offset-4 transition-colors" data-testid="link-sample">inline link</a> inside it.
            </p>
            <p>
              Muted text with a <a href="#" className="text-muted-foreground hover:text-flash-pink transition-colors" data-testid="link-muted">subtle link</a> style.
            </p>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-deep-petrol">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-deep-petrol">Deep Petrol Section</h2>
          <div className="rounded-lg bg-deep-petrol p-8" data-testid="panel-deep-petrol">
            <h3 className="text-2xl font-bold text-white mb-4" data-testid="text-featured-title">Featured Section</h3>
            <p className="text-white/80 mb-6" data-testid="text-featured-description">
              Deep Petrol Blue provides visual variety and reduces dark-mode fatigue. 
              Use it for hero sections, feature highlights, or CTAs.
            </p>
            <div className="flex gap-4">
              <Button data-testid="button-petrol-primary">
                Get Started
              </Button>
              <Button variant="outline" data-testid="button-petrol-outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-6" data-testid="section-guidelines">
          <h2 className="text-2xl font-semibold border-b border-border pb-2" data-testid="heading-guidelines">Colour Usage Guidelines</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-muted mt-1.5 shrink-0" />
                <p><strong>70-75% Neutrals:</strong> Charcoal Black, Slate Graphite, and Steel Grey do most of the work</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-flash-pink mt-1.5 shrink-0" />
                <p><strong>5-10% Flash Pink:</strong> Primary CTAs, active states, hover highlights, small icons</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-electric-amber mt-1.5 shrink-0" />
                <p><strong>5-10% Electric Amber:</strong> Secondary CTAs, badges, accent highlights</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-deep-petrol mt-1.5 shrink-0" />
                <p><strong>Occasional Petrol Blue:</strong> Large section backgrounds, hero panels to break monotony</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
