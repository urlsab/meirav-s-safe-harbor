import { useReveal } from "@/hooks/use-reveal";

export function Events() {
  const ref = useReveal();
  return (
    <section id="events" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wide">אירועים ומפגשים</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">המפגשים הקרובים</h2>
          <p className="mt-3 text-muted-foreground">מפגשים קהילתיים, סדנאות וקורסים. מקום נשמר לעדכונים שוטפים.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-soft p-8 border border-border shadow-soft">
            <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary">קרוב</span>
            <h3 className="mt-4 text-2xl font-bold">מעגלי עיבוד לידה 2026</h3>
            <p className="mt-2 text-foreground/80">מיזם קהילתי בפריסה ארצית בהנחיית מירב ברוך וברכה דנינו.</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-foreground/75">
              <span>📅 רביעי, 03.06</span>
              <span>🕖 19:00</span>
              <span>📍 קרני שומרון</span>
            </div>
            <a href="#contact" className="mt-6 inline-flex rounded-full bg-gradient-warm text-primary-foreground px-5 py-2.5 font-semibold shadow-soft hover:scale-105 transition-transform">
              הרשמה ופרטים
            </a>
          </div>

          <div className="rounded-3xl bg-card p-8 border border-dashed border-border flex items-center justify-center text-center">
            <div>
              <div className="mx-auto h-16 w-16 rounded-full bg-secondary/60 flex items-center justify-center text-3xl mb-3">✨</div>
              <h3 className="text-xl font-bold">בקרוב – אירועים נוספים</h3>
              <p className="mt-2 text-muted-foreground text-sm">סדנאות, מפגשים קבוצתיים ומעגלי שיח. השאירי פרטים ואעדכן.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
