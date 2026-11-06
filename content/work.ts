export type WorkLink = { label: string; href: string };

export type CaseStudy = {
  slug: string;
  name: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  engagement: string;
  image: string;
  link?: WorkLink;
  links?: WorkLink[];
  scope: string[];
  sections: { label: string; title: string; paragraphs: string[] }[];
  outcomes: string[];
  featured: boolean;
};

const caseStudyData: Omit<CaseStudy, "index">[] = [
  {
    slug: "kfss",
    name: "KFSS",
    category: "Education · AI-native learning",
    title: "An AI-native senior school, explained as a product.",
    summary:
      "A senior school platform built around systems thinking, project-based learning, mentor-led guidance and personal AI assistance.",
    role: "Product design, frontend engineering, content strategy",
    engagement: "Product concept and digital platform",
    image: "/kfss.png",
    link: { label: "kfss-web.vercel.app", href: "https://kfss-web.vercel.app/" },
    scope: [
      "Positioning and product narrative",
      "Information architecture",
      "Interface design",
      "Frontend build",
      "AI feature framing",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "The brief",
        paragraphs: [
          "KFSS needed to explain an unconventional model of secondary education: one organised around systems thinking, real projects, mentors and a personal AI assistant for every learner.",
          "The challenge was not visual. It was making an unfamiliar academic model feel structured, credible and implementable for parents, teachers and institutional reviewers at the same time.",
        ],
      },
      {
        label: "02 — Approach",
        title: "Treating the school as a product",
        paragraphs: [
          "I defined the learner journey first, then mapped the pathways, the mentor relationship and the role of AI onto a navigable structure. Each ambitious claim in the model was paired with something concrete: a pathway, a project cycle, a support structure.",
          "That meant writing alongside design — shaping the language, the hierarchy and the evidence so the proposition read as a working system rather than a vision statement.",
        ],
      },
      {
        label: "03 — Build",
        title: "One coherent system",
        paragraphs: [
          "The result is a platform that presents the academic model, the learning pathways and the AI layer as a single system. The information design is strong enough that a parent, a teacher and a ministry reviewer can each follow their own route through it.",
          "AI assistance is positioned as part of the learning structure — tutoring, feedback and continuity — rather than as a feature used for spectacle.",
        ],
      },
    ],
    outcomes: [
      "An abstract education vision turned into a clear, navigable digital structure",
      "AI assistance framed as academic support, not novelty",
      "Delivered as a live product site that can carry a conversation with institutions",
    ],
    featured: true,
  },
  {
    slug: "leftfoot-sports",
    name: "LeftFoot Sports",
    category: "Sport · Operations platform",
    title: "Football operations, organised as a product.",
    summary:
      "A football operations platform for fixtures, results, statistics and community-driven competition.",
    role: "Product engineering, UI systems, frontend development",
    engagement: "Platform design and frontend build",
    image: "/leftfoot-sports.png",
    link: {
      label: "leftfoot-sports-web.vercel.app",
      href: "https://leftfoot-sports-web.vercel.app/",
    },
    scope: [
      "Product structure",
      "Interface system",
      "Fixture and results architecture",
      "Frontend implementation",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "Football as a service, without the spreadsheet",
        paragraphs: [
          "LeftFoot Sports positions football as a service: leagues, fixtures, results, statistics and community all in one place. In practice that information usually lives across spreadsheets, group chats and posts, which makes the sport harder to follow and harder to run.",
          "The product needed to serve two audiences at once — people who want to follow competition, and organisers who need the operation to stay coherent.",
        ],
      },
      {
        label: "02 — Approach",
        title: "Structure before styling",
        paragraphs: [
          "I organised the data-heavy workflows into clear navigational layers: competition, fixtures, results and statistics each get a defined place, so a visitor can move from a headline result into the detail behind it without losing context.",
          "The brand energy of the sport was kept intact through typography and motion, but the hierarchy underneath is deliberately operational.",
        ],
      },
      {
        label: "03 — Build",
        title: "A platform that can grow with the league",
        paragraphs: [
          "The interface system was built so new competitions, teams and statistics can be added without redesigning the experience. That matters for a product whose value increases with every competition it carries.",
        ],
      },
    ],
    outcomes: [
      "Data-heavy sports workflows reorganised into a navigable product",
      "A reusable interface system for fixtures, results and statistics",
      "A clearer path for discovery, following and competition management",
    ],
    featured: true,
  },
  {
    slug: "propertyfinder",
    name: "PropertyFinder",
    category: "PropTech · Marketplace",
    title: "Property discovery across two markets.",
    summary:
      "Property platforms for Kenya and Uganda built around search, listing visibility and lead generation.",
    role: "Developer, property platforms",
    engagement: "Multi-market platform delivery",
    image: "/Propertyfinder.png",
    links: [
      { label: "propertyfinder.ke", href: "https://www.propertyfinder.ke" },
      { label: "propertyfinder.ug", href: "https://www.propertyfinder.ug" },
      {
        label: "vectorafriqproperties.co.ke",
        href: "https://vectorafriqproperties.co.ke",
      },
    ],
    scope: [
      "Listing architecture",
      "Search and discovery flows",
      "Lead capture",
      "Frontend delivery",
      "Multi-market rollout",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "Two sides of a property marketplace",
        paragraphs: [
          "Property platforms live or die on two things: whether buyers can find what they are looking for, and whether agents can be seen by the right people. VectorAfriq needed both, across markets with different inventory, pricing conventions and buyer expectations.",
        ],
      },
      {
        label: "02 — Approach",
        title: "Search first, market by market",
        paragraphs: [
          "I worked on a search-first structure — location, property type, budget and intent — with listing pages built to answer the questions a buyer actually asks before making contact: what it costs, where it is, what it includes and who is selling it.",
          "For agents, the platform is built around visibility and lead quality rather than volume. The same patterns were adapted for the Kenyan and Ugandan markets instead of duplicated.",
        ],
      },
      {
        label: "03 — Build",
        title: "Shared patterns, local inventory",
        paragraphs: [
          "The outcome is a family of property platforms sharing a consistent structure while carrying their own inventory and market context — PropertyFinder in Kenya, PropertyFinder in Uganda and the VectorAfriq property site.",
        ],
      },
    ],
    outcomes: [
      "A search and discovery flow designed around buyer intent",
      "Listing pages structured around visibility and lead generation",
      "One delivery pattern reused across two national markets",
    ],
    featured: true,
  },
  {
    slug: "akiba-plus",
    name: "Akiba Plus",
    category: "Fintech · Pensions",
    title: "Making a pension feel like a product people want.",
    summary:
      "A Kenya-focused digital pension platform where I contributed to the early interface direction, mockups and brand foundation.",
    role: "UI/UX and brand contribution, as part of a team",
    engagement: "Early product direction",
    image: "/Akibaplus.png",
    link: { label: "akibaplus.co.ke", href: "https://akibaplus.co.ke" },
    scope: [
      "Early interface mockups",
      "Design direction",
      "Brand foundation",
      "Product presentation",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "A category that runs on trust",
        paragraphs: [
          "Akiba Plus is positioned as a digital, tax-advantaged pension platform for Kenya. Pensions are a category where clarity is the product: people need to understand what they are committing to, what it costs and what happens next before they trust it with their money.",
        ],
      },
      {
        label: "02 — Contribution",
        title: "Setting the visual and product foundation",
        paragraphs: [
          "I contributed as part of a team on the early UI/UX direction — working through initial interface mockups, the visual language and the brand foundation so the product felt modern and credible from the outset.",
          "That early work set patterns for how the proposition is presented: plain-language framing, calm financial surfaces and a structure that could scale into a full product.",
        ],
      },
    ],
    outcomes: [
      "An early visual and product direction for a regulated financial product",
      "Interface patterns that support trust and comprehension",
      "A brand foundation that the wider team could build on",
    ],
    featured: true,
  },
  {
    slug: "lumo",
    name: "Lumo",
    category: "Insurtech · Digital experience",
    title: "Insurance that reads as trust, not paperwork.",
    summary:
      "A modern insurtech presence designed to make a complex, low-trust category feel clearer and more credible.",
    role: "Product design, frontend development",
    engagement: "Digital product experience",
    image: "/lumo.png",
    link: { label: "lumo.co.ke", href: "https://lumo.co.ke/" },
    scope: [
      "Product presentation",
      "Interface design",
      "Brand framing",
      "Frontend build",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "Confidence matters as much as functionality",
        paragraphs: [
          "Insurance is a category where the user is asked to pay now for something they hope never to use. That makes the digital experience a trust exercise before it is a product exercise.",
        ],
      },
      {
        label: "02 — Approach",
        title: "Clarity over decoration",
        paragraphs: [
          "I worked on the digital layer around the proposition: a cleaner product story, calmer interface structure and stronger trust cues. The design is deliberately restrained — in financial products, the interface should reduce ambiguity rather than add personality.",
        ],
      },
      {
        label: "03 — Build",
        title: "A contemporary surface for a traditional category",
        paragraphs: [
          "The result is a modern insurtech presence that presents cover and value in plain terms, with a visual language contemporary enough to compete for attention and sober enough to be believed.",
        ],
      },
    ],
    outcomes: [
      "An insurance proposition translated into a clearer digital experience",
      "Stronger trust cues and more contemporary product presentation",
      "A build that holds up across devices and connection speeds",
    ],
    featured: true,
  },
  {
    slug: "the-coded-tomorrow",
    name: "The Coded Tomorrow",
    category: "Brand · Digital experience",
    title: "An abstract idea given a credible digital presence.",
    summary:
      "A concept-led digital experience positioned around technology, creativity and what comes next.",
    role: "Product storytelling, UI/UX design, frontend build",
    engagement: "Concept and brand experience",
    image: "/thecodedtomorrow.png",
    link: {
      label: "the-coded-tomorrow.vercel.app",
      href: "https://the-coded-tomorrow.vercel.app/",
    },
    scope: [
      "Narrative structure",
      "Interface design",
      "Frontend build",
      "Brand presentation",
    ],
    sections: [
      {
        label: "01 — Context",
        title: "A brand with an idea but no surface",
        paragraphs: [
          "The Coded Tomorrow needed a digital presence for an abstract, future-facing idea. Concept brands fail when they rely on atmosphere alone; they need a structure that makes the idea legible.",
        ],
      },
      {
        label: "02 — Approach",
        title: "Narrative first",
        paragraphs: [
          "I built the experience around a narrative sequence — positioning, evidence, invitation — so a visitor moves through the idea rather than scrolling past a mood. Typography and motion carry the tone; the information architecture carries the argument.",
        ],
      },
    ],
    outcomes: [
      "An abstract direction turned into a structured digital narrative",
      "Clearer positioning and a more premium presentation",
      "A shipped experience rather than a concept deck",
    ],
    featured: false,
  },
];

// Significance order: the first entry leads the homepage and the archive.
const studyOrder = [
  "propertyfinder",
  "akiba-plus",
  "lumo",
  "leftfoot-sports",
  "kfss",
  "the-coded-tomorrow",
];

const studiesBySlug = new Map(
  caseStudyData.map((study) => [study.slug, study] as const),
);

export const caseStudies: CaseStudy[] = studyOrder.map((slug, position) => {
  const study = studiesBySlug.get(slug);

  if (!study) {
    throw new Error(`Unknown case study: ${slug}`);
  }

  return { ...study, index: String(position + 1).padStart(2, "0") };
});

export const moreProjects = [
  {
    name: "VectorAfriq",
    category: "Property platform",
    summary:
      "A real estate platform supporting listings, property discovery and visibility.",
    href: "https://vectorafriqproperties.co.ke",
    image: "/VectorAfriq.png",
  },
  {
    name: "Learnwise Technologies",
    category: "Education technology",
    summary:
      "Education technology products and digital systems for modern schools.",
    href: "https://www.learnwisetech.com/",
    image: "/learnwise.png",
  },
  {
    name: "Credwave",
    category: "Fintech product presence",
    summary:
      "A fintech-oriented digital experience shaped around trust, usability and conversion.",
    href: "https://www.credwave.com",
    image: "/Credwave.png",
  },
  {
    name: "Viva Global",
    category: "Corporate web presence",
    summary:
      "A corporate site for a Kenyan beverage importer and distributor, covering portfolio, distribution and partner information.",
    href: "https://viva.global",
  },
  {
    name: "Shulenetwork",
    category: "School management",
    summary:
      "A school-focused digital platform built around administration, visibility and connected operations.",
    href: "https://shulenetwork.co.ke/",
    image: "/shulenet.png",
  },
  {
    name: "Forecast 254",
    category: "Prediction market",
    summary:
      "A Kenya-focused prediction market exploring event-based forecasting and engagement.",
    href: "https://forecast254.vercel.app/",
    image: "/forecast254.png",
  },
  {
    name: "Aminiblock",
    category: "Blockchain credentials",
    summary:
      "A trust-led digital product exploring blockchain-based credential verification.",
    href: "https://aminiblock101.vercel.app/",
    image: "/Aminiblock.png",
  },
  {
    name: "USD-Flash",
    category: "Fintech experience",
    summary:
      "A fintech product experience built around clarity, trust and speed.",
    href: "https://usd-flash.vercel.app/",
    image: "/usd-flash.png",
  },
  {
    name: "FlashSlides",
    category: "Learning tool",
    summary:
      "A structured presentation and knowledge-delivery experience for digital learning.",
    href: "https://on-the-know.vercel.app/",
    image: "/flashslides.png",
  },
  {
    name: "Perpetua",
    category: "Industrial brand platform",
    summary:
      "A corporate web experience with strong product and brand presentation.",
    href: "https://perpetua-steel.vercel.app/",
    image: "/perpetua.png",
  },
  {
    name: "Explorer Game",
    category: "Interactive experience",
    summary:
      "An immersive browser-based interactive built around play, motion and engagement.",
    href: "https://simple-plane-game.vercel.app/",
    image: "/explorer.png",
  },
  {
    name: "FTUSDT",
    category: "Trading interface",
    summary:
      "A digital asset interface exploring fast-moving market and data experiences.",
    href: "https://ftusdt.vercel.app/",
    image: "/FTUSDT.png",
  },
  {
    name: "Brandlogs",
    category: "Brand & digital studio",
    summary:
      "A polished digital presence built to communicate creative capability and modern execution.",
    href: "https://brandlogs.co.ke",
    image: "/Brandlogs.png",
  },
  {
    name: "Zeno's",
    category: "Brand website",
    summary:
      "A brand-led digital experience built to sharpen online presence and presentation.",
    href: "https://zeno-s.vercel.app/",
    image: "/zeno-s.png",
  },
  {
    name: "SCFF",
    category: "Corporate web platform",
    summary:
      "A services-focused web presence designed for clarity, credibility and reach.",
    href: "https://www.scff.llc",
    image: "/SCFF.png",
  },
];

export const featuredWork = caseStudies.filter((study) => study.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
