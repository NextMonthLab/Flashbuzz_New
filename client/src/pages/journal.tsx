import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { journalPosts } from "@/lib/data";
import { LeadGenCtaBand } from "@/components/lead-gen-cta-band";

export default function Journal() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32">
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6" data-testid="text-journal-title">
              Journal
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Insights on documentary filmmaking, business video, and the craft of authentic storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {journalPosts.map((post) => (
              <Link key={post.id} href={`/journal/${post.slug}`}>
                <Card className="h-full hover-elevate cursor-pointer overflow-visible" data-testid={`card-post-${post.slug}`}>
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl text-primary/30">J</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recent'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {journalPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No posts yet. Check back soon for insights on documentary filmmaking.</p>
            </div>
          )}
        </div>
      </section>

      <LeadGenCtaBand
        variant="gradient"
        headline="Want to improve your video marketing?"
        description="Take our free scorecard and get a tailored 90-day plan in minutes."
      />
    </div>
  );
}
