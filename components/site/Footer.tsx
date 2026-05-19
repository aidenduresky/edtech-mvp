import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-cream">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <Link href="/" className="font-serif text-xl text-forest">
            Prysm
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-forest/60 hover:text-forest transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-forest/40 text-center sm:text-right">
            Learning, at your level.
          </p>
        </div>
      </Container>
    </footer>
  );
}
