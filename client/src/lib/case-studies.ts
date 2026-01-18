export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientOrProjectName: string;
  category: string;
  summary: string;
  theBrief: string;
  approach: string[];
  outcome: string;
  services: string[];
  featuredVideoUrl: string;
  featuredVideoPoster: string;
  supportingVideos?: { url: string; poster: string; title: string }[];
  hero: boolean;
  tags: string[];
  location?: string;
  year?: number;
  isShowreel?: boolean;
}

export const showreel: CaseStudy = {
  id: "showreel",
  slug: "showreel",
  title: "Flashbuzz Showreel",
  clientOrProjectName: "Flashbuzz",
  category: "Showreel / Brand Film",
  summary: "High-energy showreel showcasing Flashbuzz work across multiple sectors and clients over the years.",
  theBrief: "Demonstrate the breadth and quality of Flashbuzz documentary-style video production.",
  approach: ["Curated selection of best work", "High-energy pacing", "Multi-sector representation"],
  outcome: "A compelling portfolio piece that captures the essence of Flashbuzz's documentary craft.",
  services: ["Filming", "Editing"],
  featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813455/flashbuzz_showreel_april_2023_1080p_upggnw.mp4",
  featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813455/flashbuzz_showreel_april_2023_1080p_upggnw.jpg",
  hero: false,
  tags: ["Showreel", "Portfolio", "Multi-sector"],
  isShowreel: true,
};

export const caseStudies: CaseStudy[] = [
  {
    id: "oxford-beard-festival",
    slug: "oxford-beard-festival",
    title: "Oxford Beard Festival",
    clientOrProjectName: "Oxford Beard Festival",
    category: "Event Film / Cultural Documentary",
    summary: "Flashbuzz captured the Oxford Beard Festival, a quirky, character-led competition featuring regional contestants and national and international beard champions.",
    theBrief: "Capture the culture, humour, and competitive spirit of the festival in a watchable, cinematic way.",
    approach: [
      "Character-led coverage focusing on contestants and champions",
      "Capturing atmosphere, detail, and energy",
      "Energy-driven edit that celebrates the unique culture"
    ],
    outcome: "Additional sizzle reel produced and pitched to Channel 4 for a one-off documentary exploring beard festivals and their culture.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813167/social_edit.mp4_1080p_dqnacl.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813167/social_edit.mp4_1080p_dqnacl.jpg",
    hero: true,
    tags: ["Event", "Documentary", "Culture", "Sizzle reel", "Broadcast development"],
    year: 2023,
  },
  {
    id: "redwings-horse-sanctuary",
    slug: "redwings-horse-sanctuary",
    title: "Redwings Horse Sanctuary",
    clientOrProjectName: "Redwings, Strangles Awareness Week",
    category: "Documentary / Awareness Campaign",
    summary: "Flashbuzz produced an emotive awareness film for Strangles Awareness Week, visiting real horse stables and speaking with owners about managing this devastating disease.",
    theBrief: "Raise awareness with an honest, sensitive campaign film.",
    approach: [
      "Real contributors in real environments",
      "Interview-led storytelling",
      "Restrained, respectful edit"
    ],
    outcome: "Strong audience reception and part of a wider series of awareness films for the campaign.",
    services: ["Filming", "Editing", "Interviews"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813425/redwings_1080p_tibalh.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813425/redwings_1080p_tibalh.jpg",
    hero: true,
    tags: ["Charity", "Awareness", "Documentary", "Animals"],
    year: 2023,
  },
  {
    id: "warm-front",
    slug: "warm-front",
    title: "Warm Front",
    clientOrProjectName: "Warm Front, Home Insulation Projects",
    category: "Corporate / Public Sector / Built Environment",
    summary: "A project showcase film highlighting home insulation works delivered with local housing associations, designed to inform residents and support new regional contracts.",
    theBrief: "Serve two audiences: homeowners (reassurance) and housing associations (credibility).",
    approach: [
      "Real properties showing process and outcomes",
      "Calm, informative tone",
      "Polished, procurement-friendly edit"
    ],
    outcome: "A trust-building comms asset supporting transparency and new partnership conversations.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813448/senior_warmfront_manager_discussion__alex_hearn_.mp4_1080p_u6ge2j.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813448/senior_warmfront_manager_discussion__alex_hearn_.mp4_1080p_u6ge2j.jpg",
    hero: true,
    tags: ["Housing", "Public sector", "Infrastructure", "Sustainability"],
    year: 2024,
  },
  {
    id: "medical-device-startup",
    slug: "medical-device-startup",
    title: "Medical Device Startup",
    clientOrProjectName: "GlucoWear, US Product Launch",
    category: "Product Launch / Technology / Healthcare",
    summary: "A product launch film for a medical technology startup with significant EU funding, created for a US launch event.",
    theBrief: "Communicate innovation and credibility for a high-stakes international audience.",
    approach: [
      "Premium tone throughout",
      "Clarity over complexity",
      "Event-ready pacing"
    ],
    outcome: "Strong visual anchor for launch presentations and stakeholder conversations.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813470/glucowear_3__1_1080p_uemmq5.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813470/glucowear_3__1_1080p_uemmq5.jpg",
    hero: false,
    tags: ["Product launch", "MedTech", "Startup", "International"],
    year: 2024,
  },
  {
    id: "industrial-recruitment",
    slug: "industrial-recruitment",
    title: "Industrial Recruitment & Health and Safety",
    clientOrProjectName: "Industrial Recruitment Montage",
    category: "Industrial / Recruitment / Health & Safety",
    summary: "Montage showcasing industrial recruitment and health and safety films across logistics, warehouse, and industrial environments.",
    theBrief: "Demonstrate breadth of work and competence in regulated environments.",
    approach: [
      "Real workplaces and authentic environments",
      "Authoritative tone",
      "Clarity and pace without gimmicks"
    ],
    outcome: "A strong proof asset for large employers and procurement teams.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813461/flashbuzz_warehouse_induction_showreel_1080p_hsz8hw.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813461/flashbuzz_warehouse_induction_showreel_1080p_hsz8hw.jpg",
    hero: false,
    tags: ["Recruitment", "H&S", "Logistics", "Warehousing"],
    year: 2023,
  },
  {
    id: "banbury-lunchbox",
    slug: "banbury-lunchbox",
    title: "Banbury Lunchbox Community Project",
    clientOrProjectName: "Banbury Lunchbox",
    category: "Community / Charity / Awareness",
    summary: "A local initiative bringing businesses together to support families in need at Christmas, and encourage wider business involvement.",
    theBrief: "Celebrate the impact and act as a call-to-action for next year's support.",
    approach: [
      "Natural moments and authentic interactions",
      "Warmth and community-first storytelling",
      "Positive, uplifting tone"
    ],
    outcome: "Awareness and recruitment asset to help grow the initiative.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813461/lunchbox_2024_highlights.mp4_1080p_r9oqsq.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813461/lunchbox_2024_highlights.mp4_1080p_r9oqsq.jpg",
    hero: false,
    tags: ["Community", "Christmas", "Social impact", "Charity"],
    location: "Banbury",
    year: 2024,
  },
  {
    id: "tugo-foods",
    slug: "tugo-foods",
    title: "Tugo Foods",
    clientOrProjectName: "Tugo Foods, Vegetable Stir-Fry Noodle Pot",
    category: "Food & Beverage / Product Marketing",
    summary: "High-energy product marketing film positioning Tugo as a rapid, creative culinary supplier for food service, not fast food.",
    theBrief: "Elevate perception and differentiate brand category.",
    approach: [
      "Appetite-led close-ups",
      "Fast-paced edits",
      "Stylised modern tone"
    ],
    outcome: "Strong marketing asset supporting brand repositioning across channels.",
    services: ["Filming", "Editing"],
    featuredVideoUrl: "https://res.cloudinary.com/drl0fxrkq/video/upload/v1744813444/vegetable_sweet_n_sour__2_1080p_xipyof.mp4",
    featuredVideoPoster: "https://res.cloudinary.com/drl0fxrkq/video/upload/so_0,w_800,h_450,c_fill,q_auto,f_jpg/v1744813444/vegetable_sweet_n_sour__2_1080p_xipyof.jpg",
    hero: false,
    tags: ["Food marketing", "Product video", "Food service", "Brand positioning"],
    year: 2024,
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  if (slug === "showreel") return showreel;
  return caseStudies.find((cs) => cs.slug === slug);
};

export const getHeroCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.hero).slice(0, 3);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(caseStudies.map((cs) => cs.category));
  return Array.from(categories);
};

export const getAllTags = (): string[] => {
  const tags = new Set(caseStudies.flatMap((cs) => cs.tags));
  return Array.from(tags);
};
