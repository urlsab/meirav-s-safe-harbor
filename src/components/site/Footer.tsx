import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-meirav.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/90 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="מירב ברוך דולה" className="h-16 w-auto bg-cream rounded-2xl p-2" />
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            ליווי דולה, הכנה ללידה, עיבוד לידה והדרכת הנקה – חם, מקצועי ומותאם אישית.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">יצירת קשר</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:0548002836" className="hover:underline" dir="ltr">054-800-2836</a></li>
            <li><a href="mailto:meirav613@gmail.com" className="hover:underline" dir="ltr">meirav613@gmail.com</a></li>
            <li>זמינה בוואטסאפ ובטלפון</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">מידע</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terms" className="hover:underline">תנאי שימוש</Link></li>
            <li><Link to="/privacy" className="hover:underline">מדיניות פרטיות</Link></li>
            <li><a href="#services" className="hover:underline">השירותים שלי</a></li>
            <li><a href="#testimonials" className="hover:underline">המלצות</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs flex flex-col sm:flex-row justify-between gap-2 opacity-80">
          <span>© {new Date().getFullYear()} מירב ברוך – דולה. כל הזכויות שמורות.</span>
          <span>עיצוב באהבה לכל אישה בדרכה להורות</span>
        </div>
      </div>
    </footer>
  );
}
