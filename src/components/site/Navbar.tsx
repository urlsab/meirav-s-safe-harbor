import logo from "@/assets/logo-meirav.png";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "השירותים" },
  { href: "#audience", label: "למי זה מתאים" },
  { href: "#tips", label: "טיפים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#events", label: "אירועים" },
  { href: "#contact", label: "יצירת קשר" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="מירב ברוך דולה" className="h-12 w-auto" />
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex rounded-full bg-gradient-warm text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:scale-105 transition-transform duration-300"
        >
          קבעי שיחת היכרות
        </a>
      </nav>
    </header>
  );
}
