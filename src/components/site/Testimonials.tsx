import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { LotusDecor, WaveLine } from "./Decorations";

const testimonials = [
  {
    text: "מהרגע שבחרתי הראתה לי שהיא כאן! אני ממליצה מעומק הלב ותודה רבה!!!",
    author: "יולדת א׳",
  },
  {
    text: "וואוו שאת מהממת – נשארת איתי כל הזמן הזה! כל כך שמחה שלקחנו אותך, עזרת לי מאוד.",
    author: "יולדת א׳",
  },
  {
    text: "תודה על קורס ההכנה ללידה, על הליווי לאורך כל הדרך ועל העזרה בשעות הקשות. בלעדייך זה לא היה אותו דבר.",
    author: "יולדת ש׳",
  },
  {
    text: "באמת שהיית חלק משמעותי בלידה שלי – בלי התמיכה שלך לא בטוחה שהייתי צולחת את זה.",
    author: "יולדת שו׳",
  },
  {
    text: "תודה על התמיכה והרוגע והעזרה בשעות שלנו. תודה שזכינו בך.",
    author: "אמא של יולדת",
  },
  {
    text: "כמו המים, חסד גמור! למרות לילה מתיש – לא הפסקת לתמוך בכל ציר, עיסוי ורפלקסולוגיה עד עלות השחר כשמך כן את.",
    author: "יולדת נ׳",
  },
  {
    text: "עזרת לי להיות ברוגע ולהיות חיובית, על הרפלקסולוגיה והאוזן הקשבת. הזכרת לי שיש לי כוח כשאני שכחתי.",
    author: "יולדת ח׳",
  },
  {
    text: "הנעימות והסבלנות שלך... תודה לך על הגישה ועל הכל. שהשם יברך אותך, עזרת לי מאוד.",
    author: "יולדת תא׳",
  },
  {
    text: "אני כל הזמן משחזרת את הלידה הזאת – היא לא הייתה יכולה להיות כזאת מדהימה בלעדייך.",
    author: "יולדת תה׳",
  },
  {
    text: "עשית לי את הלידה לאפשרית כמו שרציתי, בפרט שזו לידה ראשונה. תודה גדולה.",
    author: "יולדת ע׳",
  },
  {
    text: "השרית ביטחון, אכפתיות ואווירה מרגיעה. בזכותך חוויית הלידה הייתה הרבה יותר נעימה.",
    author: "אמא של א׳",
  },
];

export function Testimonials() {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LotusDecor className="absolute top-8 right-8 w-20 h-14 text-accent/20 animate-drift" />
        <LotusDecor className="absolute bottom-8 left-8 w-16 h-12 text-primary/15 animate-drift" style={{ animationDelay: "6s" }} />
      </div>
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1">
            מה אומרות הנשים שליוויתי
          </h2>
          <WaveLine className="mt-3 mx-auto w-36 h-4 text-primary/40" />
        </div>

        <div className="mt-14">
          <div className="overflow-hidden" dir="ltr">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${current * -100}%)` }}
            >
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="min-w-full px-2 sm:px-16"
                  dir="rtl"
                >
                  <div
                    className={`rounded-3xl border-2 p-7 sm:p-10 shadow-soft max-w-2xl mx-auto bg-background/50 ${
                      i % 2 === 0 ? "border-primary" : "border-accent"
                    }`}
                  >
                    <blockquote className="text-foreground/85 leading-relaxed text-lg">&ldquo;{t.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 font-semibold text-primary">— {t.author}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-rose-deep w-6" : "bg-rose-soft/50 w-2"
                }`}
                aria-label={`הצג המלצה ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
