// CV content.
//
// This module is the single source of truth for three outputs: the /resume
// route, the printable PDF (Chrome printing that route) and the Word file
// (scripts/build-cv-docx.py reading the JSON that scripts/export-cv.mjs writes).
//
// It is deliberately plain: a profile, what I do, selected work, experience,
// skills and the record. To target a specific role, edit `profile`,
// `summary` and `strengths` — the rest is the durable history.

export type CvStrength = {
  title: string;
  detail: string;
};

export type CvProject = {
  name: string;
  role: string;
  period: string;
  problem: string;
  approach: string;
  outcome: string;
  href?: string;
};

export type CvRole = {
  role: string;
  company: string;
  period: string;
  summary: string;
  current?: boolean;
};

export const cv = {
  profile: {
    kicker: "Curriculum vitae",
    toolbar: "Software engineering · Product · Applied AI",
    facts: [
      { label: "Role", value: "Software engineer & founder" },
      { label: "Experience", value: "4+ years" },
      { label: "Based in", value: "Nairobi, Kenya · UTC+3" },
      { label: "Availability", value: "Open to new work" },
    ],
  },

  name: "Mark Maingi",

  title:
    "Software engineer and technical founder. Four years building production systems end to end — pensions, insurance, property, education, freight — with a preference for products whose state is cheap to check.",

  summary: [
    "I build software for operations where a wrong answer is expensive: a pension transfer that moves someone's savings, an admissions list that decides who gets a place, a truck that is either loaded or not. The recurring problem in all of them is the same — making the system's own state legible enough that a person with limited attention can tell whether it is working.",
    "I work end to end: framing the problem, choosing the architecture, and shipping the interface. Four years of that has meant founding an education platform, delivering 20+ products for clients across five sectors, taking a regulated pension-transfer workflow from blank page to working proof of concept inside an insurer, and building agentic tools where the model has to act without supervision.",
  ],

  strengthsHeading: "What I do",
  strengthsNote: "Three things the record below keeps doing.",

  strengths: [
    {
      title: "End-to-end product engineering",
      detail:
        "Problem framing, architecture, interface and deployment, usually alone. Three products launched inside one quarter in late 2023, and a pension-consolidation proof of concept delivered inside an insurer's innovation unit.",
    },
    {
      title: "Applied AI, at the product layer",
      detail:
        "An agentic tax assistant and a prompt-to-explainer-video pipeline. Both forced an explicit answer to where the model may act and what a human must be able to check afterwards.",
    },
    {
      title: "Systems built for verification",
      detail:
        "Credential attestation, pension consolidation and freight coordination all reduce to the same move: making an expensive claim cheap to check. It is the pattern I keep choosing, in regulated and unregulated markets alike.",
    },
  ],

  workHeading: "Selected work",
  workNote: "Four builds, with what each one needed and what it produced.",

  work: [
    {
      name: "Learnwise Technologies",
      role: "Founder & lead engineer",
      period: "2025 — present",
      problem:
        "Schools run admissions, fees, timetables and results across spreadsheets and messaging groups. The operation is invisible until something breaks.",
      approach:
        "Built around the checkpoints a head teacher actually needs to see, with legibility as the design goal rather than feature count: an operator should be able to answer \u201cis this working?\u201d without reading every record.",
      outcome:
        "An education platform covering school operations and digital learning, led end to end from problem framing to deployment.",
      href: "https://www.learnwisetech.com/",
    },
    {
      name: "PensionPlus — Sanlam",
      role: "UI/UX engineer & frontend",
      period: "2022 — 2023",
      problem:
        "Members hold fragmented pensions across providers. Consolidation is high-trust and low-comprehension: the user commits money to a process they cannot observe.",
      approach:
        "Reduced a regulated transfer workflow to a sequence a member could follow and an operator could audit, working inside the insurer's innovation unit.",
      outcome:
        "A working proof of concept rather than a deck — a compliance-heavy process made verifiable by someone who is not a compliance officer.",
      href: "https://github.com/MaingiMuema/PensionPlus-5.0",
    },
    {
      name: "VectorAfriq / PropertyFinder",
      role: "Platform developer",
      period: "2023 — present",
      problem:
        "A two-sided property marketplace across two national markets with different inventory and buyer expectations.",
      approach:
        "Search-first architecture, with listing pages built to answer the questions a buyer asks before making contact. One pattern reused across Kenya and Uganda instead of duplicated per market.",
      outcome:
        "Property platforms live in both markets — systems design that survived a second country, which is the test a one-off build fails.",
      href: "https://www.propertyfinder.ke",
    },
    {
      name: "Applied AI — EasyUshuru, Sparkmind",
      role: "Founder & builder",
      period: "2025 — present",
      problem:
        "Agentic products either do real work unsupervised or fall apart quietly. Both of these sit where a wrong answer is expensive: tax filing and generated teaching material.",
      approach:
        "Built an agentic tax assistant and a prompt-to-explainer-video pipeline. Both forced an explicit answer to where the model may act and what a human must be able to check afterwards.",
      outcome:
        "Two agentic tools shipped, with model failure modes handled at the product layer rather than in the prompt.",
    },
  ],

  experienceHeading: "Experience",

  experience: [
    {
      role: "Founder & Developer",
      company: "Learnwise Technologies",
      period: "Feb 2025 — present",
      current: true,
      summary:
        "Product direction, architecture and full-stack delivery for an education platform covering school operations and digital learning.",
    },
    {
      role: "Developer",
      company: "CargoLink",
      period: "Nov 2024 — present",
      current: true,
      summary:
        "Logistics platform matching returning trucks with available cargo to cut empty runs.",
    },
    {
      role: "Founder & Developer",
      company: "Forecast 254",
      period: "Nov 2023 — present",
      current: true,
      summary: "Prediction-market product: market mechanics, incentive design and frontend.",
    },
    {
      role: "Developer",
      company: "VectorAfriq Properties",
      period: "Dec 2023 — present",
      current: true,
      summary:
        "Property platforms for Kenya and Uganda: listing architecture, search and discovery, lead capture.",
    },
    {
      role: "Founder & Developer",
      company: "Aminiblock",
      period: "Nov 2023 — present",
      current: true,
      summary:
        "Blockchain credential model, designed around what a third party can confirm without trusting the issuer.",
    },
    {
      role: "Product Designer & Developer",
      company: "Brandlogs",
      period: "Sep 2023 — Nov 2023",
      summary: "Product design and frontend for a brand studio.",
    },
    {
      role: "Developer",
      company: "Bountiful Safaris",
      period: "May 2023 — Sep 2023",
      summary: "CRM development for customer workflows and operational visibility.",
    },
    {
      role: "UI/UX Engineer & Web Developer",
      company: "Sanlam",
      period: "Sep 2022 — Mar 2023",
      summary:
        "Proof-of-concept pension transfer product inside the innovation and growth department.",
    },
  ],

  skillsHeading: "Technical skills",

  skills: [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"] },
    { label: "Frameworks", items: ["Next.js", "React", "Node.js", "Express", "Django", "Laravel"] },
    { label: "Data", items: ["PostgreSQL", "Supabase", "REST APIs", "Authentication"] },
    {
      label: "Applied AI",
      items: ["LangChain", "OpenAI APIs", "Agent workflows", "Prompt and evaluation systems"],
    },
    { label: "Delivery", items: ["Vercel", "Git and GitHub", "WordPress", "Webflow"] },
  ],

  education: {
    school: "Kabarak University",
    program: "Computer Science",
    detail: "Associate of Science, in progress · Nakuru, Kenya",
    period: "2022 — present",
  },

  certifications: [
    {
      title: "Programming and web",
      items: [
        "HTML · 2020",
        "CSS · 2021",
        "PHP · 2021",
        "SQL · 2021",
        "Responsive Web Design · 2021",
        "Python · 2021",
        "JavaScript · 2022",
      ],
    },
    {
      title: "Professional",
      items: ["Risk Management · Sanlam", "Data Protection · Sanlam"],
    },
  ],

  earlierHeading: "Earlier",
  earlier: [
    {
      period: "2020 — 2022",
      text: "Freelance web developer and researcher: client builds, last-mile service delivery research, and co-founding a blockchain project for public verification of construction transactions.",
    },
    {
      period: "Feb — Apr 2020",
      text: "Secondary school teacher. The classroom is where I learned that an explanation only counts if the person in front of you can act on it.",
    },
  ],

  detailsHeading: "Details",
  details: [
    { label: "Location", value: "Nairobi, Kenya · UTC+3" },
    { label: "Relocation", value: "Open to relocation" },
    { label: "Languages", value: "English (fluent), Swahili (native)" },
    { label: "References", value: "Available on request" },
  ],

  footerNote: "Updated November 2026 · portfolio-eta-five-23.vercel.app",
};
