import { useReveal } from "@/hooks/use-reveal";

const tips = [
  {
    front: "לידה היא הקשבה",
    back: "לידה היא לא מבחן – היא הקשבה לגוף, לתנועה ולמה שקורה עכשיו. כשהגוף מקבל את המקום, הוא יודע להוביל.",
  },
  {
    front: "להיות שם בשבילה",
    back: "כבן זוג, אינך צריך 'לתקן'. נוכחות רגועה, מגע תומך ומילים עוטפות יעניקו לה תחושת ביטחון – והגוף יתקדם בקצב שלו.",
  },
  {
    front: "לשחרר שליטה",
    back: "כשמסכימה לשחרר שליטה ומבינה שהאוטומטים מנהלים אותך – שם השינוי קורה, והתפיסה של 'קשה' הופכת לבחירה שלך.",
  },
  {
    front: "לידה היא הליך אלוקי",
    back: "לידה אינה הליך רפואי בלבד – היא הליך אלוקי מושגח. בואי אליה ברוח טובה ובחשיבה חיובית, את שותפה בהבאת חיים לעולם.",
  },
  {
    front: "מה שיהיה לך – נכון לך",
    back: "לידה מוצלחת אינה לידה 'מושלמת'. זו לידה שבה את מרגישה טוב עם עצמך, שבחרת, שהיית מחוברת. שלמות פנימית – לא רפואית.",
  },
  {
    front: "לספר את הסיפור",
    back: "סיפור הלידה שלך ראוי למקום. אם משהו מבקש התייחסות – שבי, דברי, עבדי. כל חוויה ראויה לעיבוד.",
  },
];

export function Tips() {
  const ref = useReveal();
  return (
    <section id="tips" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wide">טיפים ונקודות למחשבה</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">העבירי עכבר על כל כרטיס</h2>
          <p className="mt-3 text-muted-foreground">מחשבות קטנות שעושות שינוי גדול בדרך אל הלידה.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((t) => (
            <div key={t.front} className="flip-card h-56" tabIndex={0}>
              <div className="flip-card-inner shadow-soft">
                <div className="flip-face bg-gradient-warm text-primary-foreground flex items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold leading-snug">{t.front}</h3>
                </div>
                <div className="flip-face flip-back bg-card border border-border flex items-center justify-center p-6 text-center">
                  <p className="text-foreground/85 leading-relaxed">{t.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
