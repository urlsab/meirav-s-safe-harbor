import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    text: "התלבטתי אם לקחת דולה, ומירב הייתה שם לאורך כל הדרך – נתנה לי לבחור בלי לחץ. מהרגע שבחרתי הרגשתי שהיא כאן. ממליצה מעומק הלב!",
    author: "יולדת א׳",
  },
  {
    text: "כמו המים, חסד גמור. למרות לילה מתיש – לא הפסקת לתמוך בכל ציר, עיסוי ורפלקסולוגיה עד עלות השחר. תודה על המסירות וההסברים.",
    author: "יולדת",
  },
  {
    text: "תודה רבה על הליווי. עזרת לי להיות ברגע, להיות חיובית, על האוזן הקשבת והכלים. הזכרת לי שיש לי כוח כשאני שכחתי.",
    author: "יולדת ח׳",
  },
  {
    text: "אני כל הזמן משחזרת את הלידה הזאת והיא לא יכולה הייתה להיות מדהימה בלעדייך. לא יודעת מה הייתי עושה בלעדייך.",
    author: "יולדת ה׳",
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
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wide">המלצות</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">מה אומרות הנשים שליוויתי</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-4 right-6 h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground text-xl">
                ♥
              </div>
              <blockquote className="text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 font-semibold text-primary">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
