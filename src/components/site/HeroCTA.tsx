export function HeroCTA() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8 sm:py-10 px-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <a
        href="#contact"
        className="rounded-full bg-gradient-warm text-primary-foreground px-7 py-3 font-semibold shadow-warm hover:scale-105 transition-transform duration-300"
      >
        פגישת היכרות ללא תשלום
      </a>
      <a
        href="#services"
        className="rounded-full border-2 border-rose-deep text-rose-deep px-7 py-3 font-semibold hover:bg-rose-deep hover:text-primary-foreground transition-colors duration-300"
      >
        לשירותים שלי
      </a>
    </div>
  );
}
