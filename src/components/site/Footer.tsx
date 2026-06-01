import { useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo-meirav.png";
import catappLogo from "@/assets/catapp logo no bg.png";

const sectionLinks = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "השירותים" },
  { href: "#audience", label: "למי זה מתאים" },
  { href: "#tips", label: "טיפים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#events", label: "אירועים" },
  { href: "#certifications", label: "הסמכות" },
  { href: "#faq", label: "שאלות ותשובות" },
  { href: "#contact", label: "יצירת קשר" },
];

type ModalType = "terms" | "privacy" | null;

const termsContent = (
  <div className="space-y-4 text-foreground/80 leading-relaxed">
    <p>השימוש באתר זה ובשירותים המוצעים בו כפוף לתנאים המפורטים להלן. הגלישה באתר מהווה הסכמה מלאה לתנאים אלה.</p>
    <h2 className="text-xl font-bold mt-6">השירותים</h2>
    <p>השירותים באתר כוללים ליווי דולה, קורסי הכנה ללידה, עיבוד לידה והדרכת הנקה. התכנים אינם מהווים תחליף לייעוץ רפואי מקצועי.</p>
    <h2 className="text-xl font-bold mt-6">קניין רוחני</h2>
    <p>כל הזכויות באתר, לרבות תכנים, עיצוב ותמונות, שמורות למירב ברוך. אין להעתיק, לשכפל או להפיץ ללא אישור מראש ובכתב.</p>
    <h2 className="text-xl font-bold mt-6">אחריות</h2>
    <p>השימוש באתר הוא באחריות המשתמשת. בעלת האתר אינה אחראית לכל נזק עקיף שייגרם משימוש באתר או מהסתמכות על התכנים בו.</p>
    <h2 className="text-xl font-bold mt-6">שינויים</h2>
    <p>בעלת האתר רשאית לשנות את תנאי השימוש בכל עת. השינויים ייכנסו לתוקף עם פרסומם באתר.</p>
  </div>
);

const privacyContent = (
  <div className="space-y-4 text-foreground/80 leading-relaxed">
    <p>פרטיותך חשובה לנו. מסמך זה מסביר כיצד נאסף, נשמר ומשמש המידע באתר.</p>
    <h2 className="text-xl font-bold mt-6">איסוף מידע</h2>
    <p>בעת יצירת קשר נאסף מידע שאת מוסרת מרצונך – שם, טלפון, דוא"ל ופרטי הפנייה. המידע משמש לטיפול בפנייה בלבד.</p>
    <h2 className="text-xl font-bold mt-6">שמירת מידע</h2>
    <p>המידע נשמר באופן מאובטח ולא יועבר לצדדים שלישיים, למעט במקרים בהם הדבר נדרש על פי דין.</p>
    <h2 className="text-xl font-bold mt-6">קובצי Cookie</h2>
    <p>האתר עשוי להשתמש בקובצי Cookie לצורך שיפור חוויית הגלישה. ניתן לחסום אותם בהגדרות הדפדפן.</p>
    <h2 className="text-xl font-bold mt-6">זכויות</h2>
    <p>בכל עת תוכלי לפנות אליי ולבקש לעיין במידע, לתקנו או למוחקו, בכתובת meirav613@gmail.com.</p>
  </div>
);

export function Footer() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      <footer className="bg-gradient-warm text-primary-foreground mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="מירב ברוך דולה" className="h-16 w-auto bg-cream rounded-2xl p-2" />
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              ליווי דולה, הכנה ללידה, עיבוד לידה והדרכת הנקה – חם, מקצועי ומותאם אישית.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">יצירת קשר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:0548002836" className="underline decoration-white/60 hover:text-accent transition-colors duration-200" dir="ltr">054-800-2836</a></li>
              <li><a href="mailto:meirav613@gmail.com" className="underline decoration-white/60 hover:text-accent transition-colors duration-200" dir="ltr">meirav613@gmail.com</a></li>
              <li>זמינה בוואטסאפ ובטלפון</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-3">ניווט</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 opacity-80">
            <span>© {new Date().getFullYear()} מירב ברוך – דולה. כל הזכויות שמורות.</span>
            <span className="flex items-center gap-3">
              <button onClick={() => setModal("terms")} className="hover:underline opacity-80 hover:opacity-100 transition-opacity">תנאי שימוש</button>
              <span className="opacity-40">|</span>
              <button onClick={() => setModal("privacy")} className="hover:underline opacity-80 hover:opacity-100 transition-opacity">מדיניות פרטיות</button>
              <span className="opacity-40">|</span>
              <a
                href="https://catapp.it.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:opacity-100 transition-opacity"
              >
                <span>נבנה ע&quot;י</span>
                <img src={catappLogo} alt="CatApp" className="h-5 w-auto" />
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(35,31,32,0.55)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-background rounded-3xl shadow-warm max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-muted text-foreground/50 hover:text-foreground transition-colors"
              aria-label="סגור"
            >
              <X className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-foreground mb-6 pr-2">
              {modal === "terms" ? "תנאי שימוש" : "מדיניות פרטיות"}
            </h1>
            {modal === "terms" ? termsContent : privacyContent}
            <p className="mt-8 text-sm text-muted-foreground">
              עודכן לאחרונה: {new Date().toLocaleDateString("he-IL")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
