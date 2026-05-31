import { useReveal } from "@/hooks/use-reveal";

const groups = [
  { icon: "🤰", title: "נשים בהיריון", text: "מהיריון ראשון ועד חוזר – הכנה רגועה ובטוחה." },
  { icon: "👶", title: "אמהות טריות", text: "ליווי הנקה, עיבוד לידה ותמיכה בימים הראשונים." },
  { icon: "💑", title: "זוגות", text: "מפגשי הכנה משותפים כדי שתעברו את זה יחד." },
  { icon: "🌿", title: "אמהות לאחר לידה קשה", text: "מרחב בטוח לעיבוד החוויה ולחזור לעצמך." },
  { icon: "🍼", title: "נשים מניקות", text: "תמיכה מקצועית להנקה נינוחה וללא קשיים." },
  { icon: "✨", title: "כל מי שמחפשת חיבור", text: "ליווי מתוך רכות, נוכחות וקבלה." },
];

export function Audience() {
  const ref = useReveal();
  return (
    <section id="audience" className="py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold tracking-wide">למי זה מתאים</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">הליווי מיועד לך אם את...</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-3xl bg-card border border-border p-6 text-center hover:bg-gradient-soft hover:-translate-y-1 transition-all duration-500 shadow-soft"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-warm flex items-center justify-center text-3xl mb-4">
                {g.icon}
              </div>
              <h3 className="font-bold text-lg">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
