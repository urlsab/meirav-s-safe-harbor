import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-meirav.png";
import { ContactActionButtons } from "@/components/site/ContactActionButtons";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "השירותים" },
  { href: "#tips", label: "טיפים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#events", label: "אירועים" },
  { href: "#certifications", label: "הסמכות" },
  { href: "#faq", label: "שאלות ותשובות" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="מירב ברוך דולה" className="h-12 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ContactActionButtons className="hidden sm:flex" />
          {/* Hamburger – visible below lg */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-4 rounded-xl text-foreground/80 hover:text-primary hover:bg-muted transition-colors font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-border/50">
              <div className="flex justify-center" onClick={() => setOpen(false)}>
                <ContactActionButtons />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
