import { contactCta } from "./portfolioContent";

export default function ContactSection() {
  return (
    <div className="p-6 bg-black text-white text-center">
      <h3 className="text-lg font-semibold">{contactCta.title}</h3>
      <p className="mt-2 text-sm text-gray-300 max-w-2xl mx-auto">
        {contactCta.description}
      </p>
      <div className="mt-4 space-x-4">
        {contactCta.footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} Mark Maingi. All rights reserved.
      </p>
    </div>
  );
}
