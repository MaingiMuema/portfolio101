export const site = {
  name: "Mark Maingi",
  shortName: "MM",
  role: "Software Engineer. Systems Thinker. Product Builder.",
  roleShort: "Software Engineer & Product Builder",
  location: "Kenya",
  email: "manlikemaingi@gmail.com",
  phone: "+254 112 246 573",
  phoneHref: "tel:+254112246573",
  whatsapp: "https://wa.me/254112246573",
  linkedin: "https://ke.linkedin.com/in/muema-mark-maingi-3790a020b",
  github: "https://github.com/MaingiMuema",
  url: "https://portfolio-eta-five-23.vercel.app",
  cv: "/Mark Maingi CV.pdf",
  headline:
    "I design, engineer and grow digital products and technology systems that solve real-world problems.",
  intro:
    "From software architecture and full-stack development to product design, AI integration and digital growth, I work across the technology lifecycle to turn complex ideas into practical, scalable solutions.",
  availability: "Available for select engineering and product work",
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Practice", href: "/#practice" },
  { label: "Experience", href: "/#experience" },
  { label: "Profile", href: "/#profile" },
  { label: "Résumé", href: "/resume" },
];

export const heroStats = [
  { value: "20+", label: "Products and platforms shipped or contributed to" },
  { value: "8", label: "Engineering, design and product roles since 2022" },
  { value: "5", label: "Sectors: education, property, fintech, sport, insurance" },
];

export const disciplines = [
  "Software Engineering",
  "Systems Design",
  "Product Engineering",
  "Full-Stack Development",
  "UI/UX Engineering",
  "AI & Automation",
  "Technical Leadership",
  "Technical SEO",
];

export const practiceAreas = [
  {
    id: "01",
    title: "Software Engineering",
    description:
      "From interface to database. I build, ship and maintain production web applications end to end.",
    items: [
      "Full-stack development",
      "Frontend architecture",
      "API design and integration",
      "Authentication and data flows",
      "Deployment and maintenance",
    ],
  },
  {
    id: "02",
    title: "Systems & Architecture",
    description:
      "I map the whole system before writing code, so products hold up as usage and teams grow.",
    items: [
      "Solution architecture",
      "Systems and workflow design",
      "Data modelling",
      "Integration strategy",
      "Technical documentation",
    ],
  },
  {
    id: "03",
    title: "Product Engineering",
    description:
      "Product judgement applied during the build, not bolted on after the first release.",
    items: [
      "Product discovery and scoping",
      "MVP definition and delivery",
      "UX and interface engineering",
      "Design systems",
      "Iteration against real usage",
    ],
  },
  {
    id: "04",
    title: "AI & Automation",
    description:
      "Applied intelligence where it removes real work for real people, not where it demos well.",
    items: [
      "AI-assisted workflows",
      "Agent orchestration",
      "Prompt and evaluation systems",
      "Process digitisation",
      "Workflow automation",
    ],
  },
  {
    id: "05",
    title: "Technical Leadership",
    description:
      "Direction, decisions and delivery for products that need one accountable technical owner.",
    items: [
      "Product and technical direction",
      "Delivery planning",
      "Architecture decisions",
      "Stakeholder communication",
      "Team and vendor coordination",
    ],
  },
  {
    id: "06",
    title: "Growth & Digital",
    description:
      "A product does not stop at launch. I work on how it gets found, adopted and measured.",
    items: [
      "Technical SEO",
      "Digital marketing",
      "Analytics and measurement",
      "Conversion-focused UX",
      "Content and brand systems",
    ],
  },
];

export const toolbelt = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "Django", "Laravel"],
  },
  {
    label: "Data & backend",
    items: ["PostgreSQL", "Supabase", "REST APIs", "Authentication"],
  },
  {
    label: "AI",
    items: ["LangChain", "OpenAI APIs", "Agent workflows", "Automation"],
  },
  {
    label: "Platforms",
    items: ["Vercel", "Git & GitHub", "WordPress", "Webflow", "cPanel"],
  },
];

export type RoleLink = { label: string; href: string };

export type Role = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  focus: string[];
  links?: RoleLink[];
};

const experienceData: Role[] = [
  {
    role: "Founder & Developer",
    company: "Learnwise Technologies",
    period: "Feb 2025 — Present",
    current: true,
    description:
      "Leading product direction and engineering for an education technology platform serving schools with management tools, digital learning resources and scalable operational systems. The work spans product thinking, interface design and full-stack implementation.",
    focus: ["Product direction", "Full-stack build", "School operations"],
    links: [{ label: "learnwisetech.com", href: "https://www.learnwisetech.com/" }],
  },
  {
    role: "Developer",
    company: "CargoLink",
    period: "Nov 2024 — Present",
    current: true,
    description:
      "Developing a logistics platform that connects returning trucks with available cargo to reduce empty runs, improve route efficiency and digitise freight coordination.",
    focus: ["Logistics", "Platform build", "Operations"],
  },
  {
    role: "Founder & Developer",
    company: "Forecast 254",
    period: "Nov 2023 — Present",
    current: true,
    description:
      "Building and iterating on a prediction market product that lets users engage future events through a more interactive, system-driven market experience.",
    focus: ["Product build", "Market mechanics", "Frontend"],
    links: [{ label: "forecast254.vercel.app", href: "https://forecast254.vercel.app/" }],
  },
  {
    role: "Developer",
    company: "VectorAfriq Properties",
    period: "Dec 2023 — Present",
    current: true,
    description:
      "Delivering property-focused digital platforms that improve listing visibility, browsing and lead generation across East African real estate markets.",
    focus: ["PropTech", "Search and discovery", "Lead generation"],
    links: [
      { label: "propertyfinder.ke", href: "https://www.propertyfinder.ke" },
      {
        label: "vectorafriqproperties.co.ke",
        href: "https://vectorafriqproperties.co.ke",
      },
      { label: "propertyfinder.ug", href: "https://www.propertyfinder.ug" },
    ],
  },
  {
    role: "Founder & Developer",
    company: "Aminiblock",
    period: "Nov 2023 — Present",
    current: true,
    description:
      "Designing a blockchain-based credential model focused on trust, verification and digital proof systems.",
    focus: ["Credential systems", "Trust design", "Product concept"],
    links: [{ label: "aminiblock.com", href: "https://www.aminiblock.com" }],
  },
  {
    role: "Product Designer & Developer",
    company: "Brandlogs",
    period: "Sep 2023 — Nov 2023",
    description:
      "Worked across product design and development, translating brand goals into cleaner interfaces and stronger digital experiences.",
    focus: ["UI/UX", "Brand systems", "Frontend"],
  },
  {
    role: "Developer",
    company: "Bountiful Safaris",
    period: "May 2023 — Sep 2023",
    description:
      "Contributed to CRM development focused on customer workflows, operational visibility and service coordination.",
    focus: ["CRM", "Internal tools", "Workflow"],
  },
  {
    role: "UI/UX Engineer & Web Developer",
    company: "Sanlam",
    period: "Sep 2022 — Mar 2023",
    description:
      "Built a proof-of-concept pension transfer product that simplified a complex financial workflow into a more usable digital experience.",
    focus: ["Financial services", "Prototype", "UI engineering"],
  },
];

// Significance order: flagship ownership first, then delivery and client work.
const experienceOrder = [
  "VectorAfriq Properties",
  "Learnwise Technologies",
  "CargoLink",
  "Forecast 254",
  "Aminiblock",
  "Brandlogs",
  "Bountiful Safaris",
  "Sanlam",
];

export const experience: Role[] = experienceOrder.map((company) => {
  const role = experienceData.find((entry) => entry.company === company);

  if (!role) {
    throw new Error(`Unknown experience entry: ${company}`);
  }

  return role;
});

export const profile = {
  heading: "Computer science foundations. Industry-built range.",
  paragraphs: [
    "I am a software engineer who works across the whole life of a product: the problem framing, the system design, the interface, the build and the growth that follows. My foundation is a computer science education at Kabarak University; my range comes from shipping real products for schools, property businesses, fintech teams and sports organisations.",
    "That route taught me to judge a solution by whether it survives contact with real users and real operations, not by how well it demos. I care about the architecture underneath a product as much as the interface on top of it, because most of the problems that make software feel fragile are structural.",
    "Most of my work sits where operational complexity meets a product that has to stay simple. I lead the delivery, design the system, and stay involved until it is running and improving — whether that means a school platform, a property marketplace, a pension product or an AI-assisted workflow.",
  ],
  facts: [
    { label: "Based in", value: "Kenya — working remotely" },
    { label: "Education", value: "Computer Science, Kabarak University" },
    { label: "Building", value: "Founder, Learnwise Technologies" },
    { label: "Focus", value: "Full-stack engineering, systems design, applied AI" },
  ],
  interests: [
    "Systems design",
    "Product strategy",
    "Visual culture",
    "Writing",
    "Reading",
    "Chess",
  ],
};

export const education = {
  school: "Kabarak University",
  program: "Computer Science",
  detail: "Associate of Science in Computer Science (in progress)",
};

export const certifications = [
  {
    title: "Web Development",
    items: [
      "HTML — December 2020",
      "CSS — March 2021",
      "PHP — February 2021",
      "Responsive Web Design — June 2021",
      "JavaScript — April 2022",
    ],
  },
  {
    title: "Programming & Databases",
    items: ["SQL — March 2021", "Python — October 2021"],
  },
];

export const conceptLab = [
  {
    name: "EasyUshuru",
    category: "Agentic tax assistant",
    summary:
      "A Kenya tax assistant built around a web-first portal, conversational memory and lower-friction compliance tools.",
    status: "In prototype",
    href: "https://drive.google.com/file/d/1EETdys7m3xbO-fd97wGZ28TfrNY75hEt/view",
  },
  {
    name: "Sparkmind",
    category: "AI video generation platform",
    summary:
      "A pipeline that turns a text prompt into an educational explainer video through AI scripting, scene planning, narration and motion.",
    status: "In testing",
    href: "https://drive.google.com/file/d/1jq76pAhawW89Yr-IybGxYDAmINV-wi8p/view",
  },
];
