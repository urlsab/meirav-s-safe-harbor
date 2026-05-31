import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "תנאי שימוש – מירב ברוך דולה" },
      { name: "description", content: "תנאי השימוש באתר מירב ברוך דולה." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Link to="/" className="text-primary hover:underline">→ חזרה לעמוד הבית</Link>
        <h1 className="mt-6 text-4xl font-bold">תנאי שימוש</h1>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>השימוש באתר זה ובשירותים המוצעים בו כפוף לתנאים המפורטים להלן. הגלישה באתר מהווה הסכמה מלאה לתנאים אלה.</p>
          <h2 className="text-2xl font-bold mt-8">השירותים</h2>
          <p>השירותים באתר כוללים ליווי דולה, קורסי הכנה ללידה, עיבוד לידה והדרכת הנקה. התכנים אינם מהווים תחליף לייעוץ רפואי מקצועי.</p>
          <h2 className="text-2xl font-bold mt-8">קניין רוחני</h2>
          <p>כל הזכויות באתר, לרבות תכנים, עיצוב ותמונות, שמורות למירב ברוך. אין להעתיק, לשכפל או להפיץ ללא אישור מראש ובכתב.</p>
          <h2 className="text-2xl font-bold mt-8">אחריות</h2>
          <p>השימוש באתר הוא באחריות המשתמשת. בעלת האתר אינה אחראית לכל נזק עקיף שייגרם משימוש באתר או מהסתמכות על התכנים בו.</p>
          <h2 className="text-2xl font-bold mt-8">שינויים</h2>
          <p>בעלת האתר רשאית לשנות את תנאי השימוש בכל עת. השינויים ייכנסו לתוקף עם פרסומם באתר.</p>
          <p className="mt-8 text-sm text-muted-foreground">עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}</p>
        </div>
      </div>
    </div>
  );
}
