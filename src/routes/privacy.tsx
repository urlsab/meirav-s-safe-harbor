import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות – מירב ברוך דולה" },
      { name: "description", content: "מדיניות הפרטיות של אתר מירב ברוך דולה." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Link to="/" className="text-primary hover:underline">→ חזרה לעמוד הבית</Link>
        <h1 className="mt-6 text-4xl font-bold">מדיניות פרטיות</h1>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>פרטיותך חשובה לנו. מסמך זה מסביר כיצד נאסף, נשמר ומשמש המידע באתר.</p>
          <h2 className="text-2xl font-bold mt-8">איסוף מידע</h2>
          <p>בעת יצירת קשר נאסף מידע שאת מוסרת מרצונך – שם, טלפון, דוא"ל ופרטי הפנייה. המידע משמש לטיפול בפנייה בלבד.</p>
          <h2 className="text-2xl font-bold mt-8">שמירת מידע</h2>
          <p>המידע נשמר באופן מאובטח ולא יועבר לצדדים שלישיים, למעט במקרים בהם הדבר נדרש על פי דין.</p>
          <h2 className="text-2xl font-bold mt-8">קובצי Cookie</h2>
          <p>האתר עשוי להשתמש בקובצי Cookie לצורך שיפור חוויית הגלישה. ניתן לחסום אותם בהגדרות הדפדפן.</p>
          <h2 className="text-2xl font-bold mt-8">זכויות</h2>
          <p>בכל עת תוכלי לפנות אליי ולבקש לעיין במידע, לתקנו או למוחקו, בכתובת meirav613@gmail.com.</p>
          <p className="mt-8 text-sm text-muted-foreground">עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}</p>
        </div>
      </div>
    </div>
  );
}
