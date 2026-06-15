import { useReveal } from "@/hooks/use-reveal";
import entryMeirav from "@/assets/sopa meirav.png";
import { LeafSprig, MotherBabyDecor, WaveLine } from "./Decorations";

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* decorative SVGs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LeafSprig className="absolute top-12 left-6 w-10 h-14 text-primary/20 animate-drift" />
        <LeafSprig className="absolute bottom-12 right-8 w-8 h-12 text-accent/15 animate-drift" style={{ animationDelay: "4s" }} />
        <MotherBabyDecor className="absolute -bottom-16 -left-12 w-48 h-48 text-primary/10" />
      </div>
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            מירב ברוך, דולה ומלווה לידה
          </h2>
          <WaveLine className="mt-3 w-32 h-4 text-primary/40" />
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-lg">
            <p>
              שמי מירב ברוך, נשואה לאבינועם, אמא ל-6 וסבתא לנכדים חמודים. אני דולה ומדריכת הכנה ללידה.
            </p>
            <p>
              במהלך השנים בהן זכיתי ללוות עשרות לידות, הרחבתי את ארגז הכלים שלי ורכשתי ידע נוסף. היום אני גם מלווה נשים לעיבוד חוויות לידה בגישת B.O.T, מדריכת הנקה ותומכת סביב הימים הראשונים, ומדריכה בהתנהלות נכונה להנקה נינוחה. בזמני החופשי אני גם מתנדבת כחובשת באיחוד הצלה ורואה ערך בהצלת חיים.
            </p>
            <p>
              אני מאמינה שכל לידה היא חוויה זוגית מיוחדת ומשמעותית, שמה לי למטרה להעניק לכל אישה ובן זוגה את התמיכה, הביטחון והכלים הנדרשים בתהליך עוד מתקופת ההיריון ולעיתים אף קצת קודם ועד למעבר מיטבי לתוך ההורות.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="rounded-[2.2rem] border-2 border-accent/35 bg-background/75 p-3 shadow-soft">
            <div className="aspect-square overflow-hidden rounded-4xl border border-white/55 bg-card/65">
              <img src={entryMeirav} alt="מירב ברוך" className="h-full w-full object-cover object-center" />
            </div>
          </div>
          {/* Dots that appear and disappear around the image */}
          <div className="pointer-events-none absolute inset-0 overflow-visible">
            {/* right side */}
            <span className="absolute rounded-full w-2.5 h-2.5" style={{ top: "8%",  right: "-9%",  background: "oklch(0.73 0.053 198 / 0.85)", animation: "line-breathe 5s ease-in-out infinite 0s" }} />
            <span className="absolute rounded-full w-2   h-2"   style={{ top: "22%", right: "-13%", background: "oklch(0.59 0.108 354 / 0.75)", animation: "line-breathe 5s ease-in-out infinite 0.9s" }} />
            <span className="absolute rounded-full w-3   h-3"   style={{ top: "40%", right: "-7%",  background: "oklch(0.73 0.053 198 / 0.70)", animation: "line-breathe 5s ease-in-out infinite 1.8s" }} />
            <span className="absolute rounded-full w-1.5 h-1.5" style={{ top: "58%", right: "-11%", background: "oklch(0.59 0.108 354 / 0.80)", animation: "line-breathe 5s ease-in-out infinite 2.7s" }} />
            <span className="absolute rounded-full w-2.5 h-2.5" style={{ top: "76%", right: "-8%",  background: "oklch(0.73 0.053 198 / 0.65)", animation: "line-breathe 5s ease-in-out infinite 3.6s" }} />
            {/* left side */}
            <span className="absolute rounded-full w-2   h-2"   style={{ top: "14%", left: "-10%", background: "oklch(0.59 0.108 354 / 0.75)", animation: "line-breathe 5s ease-in-out infinite 0.4s" }} />
            <span className="absolute rounded-full w-3   h-3"   style={{ top: "32%", left: "-14%", background: "oklch(0.73 0.053 198 / 0.85)", animation: "line-breathe 5s ease-in-out infinite 1.3s" }} />
            <span className="absolute rounded-full w-2   h-2"   style={{ top: "52%", left: "-9%",  background: "oklch(0.59 0.108 354 / 0.70)", animation: "line-breathe 5s ease-in-out infinite 2.2s" }} />
            <span className="absolute rounded-full w-2.5 h-2.5" style={{ top: "70%", left: "-12%", background: "oklch(0.73 0.053 198 / 0.75)", animation: "line-breathe 5s ease-in-out infinite 3.1s" }} />
            <span className="absolute rounded-full w-1.5 h-1.5" style={{ top: "88%", left: "-7%",  background: "oklch(0.59 0.108 354 / 0.65)", animation: "line-breathe 5s ease-in-out infinite 4s" }} />
            {/* top */}
            <span className="absolute rounded-full w-2   h-2"   style={{ top: "-7%",  left: "22%", background: "oklch(0.73 0.053 198 / 0.70)", animation: "line-breathe 5s ease-in-out infinite 1s" }} />
            <span className="absolute rounded-full w-2.5 h-2.5" style={{ top: "-9%",  left: "52%", background: "oklch(0.59 0.108 354 / 0.75)", animation: "line-breathe 5s ease-in-out infinite 2.4s" }} />
            {/* bottom */}
            <span className="absolute rounded-full w-2   h-2"   style={{ top: "104%", left: "28%", background: "oklch(0.59 0.108 354 / 0.70)", animation: "line-breathe 5s ease-in-out infinite 0.6s" }} />
            <span className="absolute rounded-full w-3   h-3"   style={{ top: "106%", left: "58%", background: "oklch(0.73 0.053 198 / 0.75)", animation: "line-breathe 5s ease-in-out infinite 1.8s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
