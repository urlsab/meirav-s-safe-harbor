import { useReveal } from "@/hooks/use-reveal";

const certifications = [
  "דולה מוסמכת",
  "מדריכת הכנה ללידה",
  "מדריכת הנקה",
  "מלווה עיבוד לידה בגישת B.O.T",
  "חובשת באיחוד הצלה",
  "מלווה אישית ורגשית להורות",
];

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <span className="text-accent font-semibold tracking-wide">מי אני</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">מירב ברוך, דולה ומלווה לידה</h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-lg">
            <p>
              שמי מירב ברוך, נשואה לאבינועם, אמא ל-6 וסבתא לנכדים חמודים. אני דולה ומדריכת הכנה ללידה עם 5 שנות ניסיון, במהלכן ליוויתי עשרות לידות.
            </p>
            <p>
              לאורך השנים הרחבתי את ארגז הכלים שלי – היום אני גם מלווה נשים בעיבוד חוויית הלידה בגישת B.O.T, מדריכת הנקה התומכת בימים הראשונים, ובזמני החופשי מתנדבת כחובשת באיחוד הצלה.
            </p>
            <p>
              אני מאמינה שכל לידה היא חוויה זוגית מיוחדת ומשמעותית. מטרתי להעניק לכל אישה ובן זוגה את התמיכה, הביטחון והכלים שצריך – כבר מההיריון ועד למעבר מיטבי אל ההורות.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-card p-7 shadow-soft border border-border">
            <h3 className="text-xl font-bold mb-5 text-primary">6 הסמכות מקצועיות</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-warm shrink-0" />
                  <span className="text-foreground/85">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
