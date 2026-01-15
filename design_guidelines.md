# Flashbuzz Design Guidelines

## Design Approach

**Primary Reference**: Combine **Vimeo's** video-first presentation + **Stripe's** premium restraint + **Medium's** editorial typography. This creates a filmmaker-led aesthetic that balances creative credibility with business professionalism.

**Key Principles**:
- Cinema-first: Video content is the hero, design supports but never competes
- Generous whitespace: Calm authority through breathing room, not clutter
- Typography-led hierarchy: Editorial approach to content structure
- Subtle, purposeful motion: Filmmaker's restraint—no gratuitous animations

---

## Color System: Option B (Cinematic Dark Mode)

The site uses a deep, cinematic studio palette that feels high-end like a professional editing interface. The logo colors (electric magenta + neon yellow + black) appear as small, intentional accents.

### Dark Mode Core (Primary Experience)
- **Background**: #0B0F14 (deep cinematic charcoal)
- **Surface**: #111827 (dark slate)
- **Raised Surface**: #1F2937 (elevated slate)
- **Text**: #F9FAFB (near-white)
- **Muted Text**: #9CA3AF (medium gray)
- **Borders**: #2B3442 (subtle dark border)

### Soft Accents (Primary UI)
- **Steel Blue** (primary): #60A5FA — buttons, links, interactive elements
- **Purple Smoke** (accent): #A78BFA — secondary highlights, badges

### Logo Colors (Use Sparingly — 10-20% of design)
- **Magenta**: #FF3BB5 — special callouts, featured badges only
- **Yellow**: #FFE066 — tiny accent hits, never full backgrounds

### Light Mode (Alternative)
- **Background**: #F3F4F6 (soft gray)
- **Surface**: #FFFFFF (white cards)
- **Text**: #111827 (near-black)
- **Primary**: #60A5FA (steel blue)
- **Accent**: #A78BFA (purple smoke)

---

## Typography

**Font Stack**:
- **Headings**: Inter (700-800 weight) — clean, modern, confident without being flashy
- **Body**: Inter (400-500 weight) — optimal readability for longer content
- **Accents**: Inter (600 weight italic) for pull quotes and emphasis

**Scale**:
- Hero H1: text-6xl lg:text-7xl xl:text-8xl (dramatic but readable)
- Section H2: text-4xl lg:text-5xl
- Service/Card H3: text-2xl lg:text-3xl
- Body: text-base lg:text-lg (generous reading size)
- Small/Meta: text-sm

**Hierarchy Rules**:
- Generous line-height (leading-relaxed) for body copy
- Tighter leading for headlines (leading-tight)
- Ample letter-spacing for all-caps labels (tracking-wide)

---

## Layout System

**Spacing Scale**: Use Tailwind units of **4, 6, 8, 12, 16, 24, 32** (e.g., p-8, gap-12, py-24)

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content-focused: `max-w-4xl` for text-heavy pages (About, Journal)
- Portfolio grids: `max-w-6xl` for work showcases

**Grid Patterns**:
- Portfolio: 3-column desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Service cards: 2-3 column (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Client logos: 6-column desktop, 3 tablet, 2 mobile
- Case study layouts: Asymmetric 60/40 splits for text/image balance

**Vertical Rhythm**: Section padding of py-16 md:py-24 lg:py-32 for consistent breathing room

---

## Component Library

**Navigation**:
- Sticky header with backdrop blur (backdrop-blur-lg bg-background/95)
- Logo left, menu center/right, dual CTAs (View Work + Start Project)
- Dropdown mega-menus for Services/Sectors with icon previews
- Mobile: Full-screen overlay menu with large touch targets

**Video Players**:
- 16:9 aspect ratio containers (aspect-video)
- Vimeo embed with custom controls hidden initially
- Thumbnail overlay with large play button (centered, 80px circle)
- Full-bleed option for hero videos (autoplay, muted, loop)

**Project Cards**:
- Thumbnail image with gradient overlay on hover
- Title, client name, sector tag visible
- Smooth scale transform on hover (scale-105)
- Description reveals on hover with fade transition

**Buttons**:
- Primary: Steel blue background (#60A5FA), dark text
- Secondary: Border outline with subtle hover
- Ghost: Transparent with hover elevation
- Sizes: Large (py-4 px-8), standard (py-3 px-6)
- Rounded corners (rounded-lg)

**Forms**:
- Generous input padding (p-4)
- Clear focus states with ring-2 in steel blue
- Inline validation messages
- Grouped label + input with mb-6 spacing

**Testimonial Blocks**:
- Large pull-quote typography (text-2xl lg:text-3xl)
- Author info below with photo (rounded-full, 64px)
- Subtle border-l-4 accent in steel blue on left

---

## Images & Video

**Hero Sections**:
- Homepage: Full-viewport video background (80vh min-h) with centered text overlay
- Service pages: Large 60vh hero images, cinematic crops
- Case studies: Featured project frame as hero

**Image Treatment**:
- High-quality stills from actual projects (never stock)
- Subtle grayscale filter with color on hover for client logos
- Behind-the-scenes imagery: authentic production photos
- Founder portrait: Professional but approachable (not corporate headshot style)

**Buttons on Images**:
- Backdrop blur background (backdrop-blur-md bg-black/40)
- White text with subtle shadow for legibility
- No additional hover states—let Button component handle interaction

---

## Navigation & User Flow

**Header Structure**:
- Work (direct link to portfolio)
- Services (dropdown: 5 service pages)
- Sectors (dropdown: 5 sector pages)
- About (direct link)
- Journal (direct link)
- CTAs: "View Work" (ghost) + "Start a Project" (primary steel blue)

**Footer**:
- Four-column layout: Company info, Quick Links, Services, Locations
- Social icons (LinkedIn, Vimeo) with subtle hover states
- Banbury, Oxfordshire address with subtle map icon

**Breadcrumbs**: On all deep pages (case studies, individual service/sector pages) with simple text separator

---

## Page-Specific Layouts

**Homepage**: 7-8 sections: Hero video → Client logos → Featured work (3 projects) → Filmmaker difference (2-column text/image) → Services overview (3-column cards) → Testimonial → Contact CTA

**Work Page**: Filter tabs → Masonry grid (3 columns) → 12 projects per page with load more

**Case Studies**: Hero video → Project details (2-column: challenge/approach) → Full-width outcome → Image gallery → Next project navigation

**Service Pages**: Hero image (60vh) → Who this is for → Problem/solution (asymmetric layout) → Featured projects (2-column) → Deliverables list → CTA

**Sectors**: Similar to services but industry-focused imagery and testimonials from that sector
