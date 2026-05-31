import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="text-accent font-semibold tracking-wide">יצירת קשר</span>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold">לכל אישה הזכות לחוויה מעצימה</h2>
        <p className="mt-5 text-lg text-foreground/80 max-w-2xl mx-auto">
          אני כאן כדי לוודא שתהיי מוכנה, בטוחה ונתמכת לאורך כל הדרך. מזמינה אותך לפגישת היכרות ללא תשלום וללא התחייבות.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href="tel:0548002836"
            className="rounded-2xl bg-gradient-warm text-primary-foreground p-6 shadow-warm hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="text-sm opacity-90">חייגי אליי</div>
            <div className="mt-1 text-2xl font-bold" dir="ltr">054-800-2836</div>
          </a>
          <a
            href="mailto:meirav613@gmail.com"
            className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:scale-[1.03] hover:bg-gradient-soft transition-all duration-300"
          >
            <div className="text-sm text-muted-foreground">שלחי מייל</div>
            <div className="mt-1 text-xl font-semibold text-primary" dir="ltr">meirav613@gmail.com</div>
          </a>
        </div>

        <a
          href="https://wa.me/972548002836"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-accent text-accent-foreground px-7 py-3 font-semibold shadow-warm hover:scale-105 transition-transform"
        >
          שלחי הודעת וואטסאפ
        </a>
      </div>
    </section>
  );
}
