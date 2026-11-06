import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site } from "@/content/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Mark Maingi — Software Engineer, Systems Thinker, Product Builder",
    template: "%s — Mark Maingi",
  },
  description:
    "Mark Maingi is a software engineer, systems designer and product builder in Kenya. He designs, engineers and grows digital products across full-stack development, product engineering, AI integration and technical growth.",
  keywords: [
    "Mark Maingi",
    "software engineer Kenya",
    "systems designer",
    "product builder",
    "full-stack developer",
    "Next.js developer",
    "AI engineering",
    "technical SEO",
    "Nairobi software engineer",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_KE",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: "Mark Maingi — Software Engineer, Systems Thinker, Product Builder",
    description:
      "I design, engineer and grow digital products and technology systems that solve real-world problems.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mark Maingi — Software Engineer, Systems Thinker, Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Maingi — Software Engineer, Systems Thinker, Product Builder",
    description:
      "I design, engineer and grow digital products and technology systems that solve real-world problems.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  email: `mailto:${site.email}`,
  jobTitle: "Software Engineer, Systems Designer and Product Builder",
  description:
    "Software engineer and product builder working across systems design, full-stack development, product engineering, applied AI and technical growth.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kabarak University",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Software Engineering",
    "Systems Design",
    "Product Engineering",
    "Full-Stack Development",
    "UI/UX Engineering",
    "AI and Automation",
    "Technical SEO",
    "Digital Product Strategy",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — Portfolio`,
  url: siteUrl,
  description:
    "Portfolio of Mark Maingi, software engineer, systems designer and product builder.",
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-16 md:pt-[72px]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
