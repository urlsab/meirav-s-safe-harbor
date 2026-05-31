import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: "👩‍🍼",
    title: "ליווי דולה ללידה",
    text: "ליווי מקצועי ורגשי מההיריון ועד אחרי הלידה. כלים מנטליים ומעשיים להתמודדות עם הצירים, תקשורת עם הצוות הרפואי בנועם, ותמיכה גם בבן הזוג כדי שיהיה שותף מלא ופעיל. אעטוף אתכם לפני, במהלך ואחרי – להפיכת הלידה לחוויה חיובית ומעצימה.",
  },
  {
    icon: "🎓",
    title: "קורסי הכנה ללידה",
    text: "מפגשים מקיפים שמכינים אותך ואת בן הזוג ללידה ולהורות, נותנים כלים להתמודדות עם הצירים ובונים ביטחון בגוף ובתהליך. קורס ללידה ראשונה: 4 מפגשים בני כשעתיים וחצי. קורס ללידה חוזרת: 1–2 מפגשים ממוקדים בצרכים שעלו בלידות הקודמות.",
  },
  {
    icon: "💙",
    title: "עיבוד לידה",
    text: "כשמשהו מהלידה לא עוזב אותך – גדול או קטן – אפשר וכדאי לתת לו מקום. בגישת B.O.T נפגוש יחד את סיפור הלידה שלך מתוך הקשבה, נעבד את החוויה, נשחרר מתחים ופחדים ונסגור מעגל לקראת ההמשך.",
  },
  {
    icon: "🍼",
    title: "הדרכת הנקה",
    text: "ליווי והדרכה מהצעדים הראשונים ועד פתרון אתגרים. ניתן להתחיל הדרכה כבר בהיריון כדי למנוע קשיים נפוצים מיד אחרי הלידה, ולבנות ביטחון בהתנהלות נכונה ורגועה להנקה נינוחה.",
  },
];

export function Services() {
  const ref = useReveal();
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wide">השירותים שלי</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">ארבעה מעגלי ליווי לאורך הדרך</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-3xl bg-card p-8 shadow-soft border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-5 right-7 h-14 w-14 rounded-full bg-gradient-warm flex items-center justify-center text-2xl shadow-warm group-hover:scale-110 transition-transform duration-500">
                <span>{s.icon}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
