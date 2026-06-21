import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import ibudLeida from "@/assets/ibud leida.png";
import beforbirth from "@/assets/befor birthhh.png";
import holdbed from "@/assets/hold bed.png";
import hanakaguide from "@/assets/hanaka guide.png";
import { WaveLine, FlowerSmall, DotScatter } from "./Decorations";

// test deploy

type ServiceIconProps = {
  className?: string;
};

type ServiceItem = {
  icon?: React.ComponentType<ServiceIconProps>;
  imageSrc?: string;
  title: string;
  text: string;
};

// ליווי דולה ללידה — לב שמכיל תינוק בעמדת עובר, מסומל ע"י עיגול + תנועת גוף מתעגלת
// מבטא חיבוק, ליווי וקרבה לעובר/יולדת
function ServiceBirthSupportIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="service-birth-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.73 0.053 198)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.59 0.108 354)" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 195)" />
      <circle cx="32" cy="32" r="9" fill="oklch(0.9 0.04 354 / 0.6)" />
      <circle cx="94" cy="30" r="8" fill="oklch(0.88 0.04 198 / 0.6)" />
      <path
        d="M60 99C38 82 25 70 25 53C25 40 36 31 48 31C55 31 61 34 65 40C69 34 75 31 82 31C94 31 105 40 105 53C105 70 92 82 70 99L65 102L60 99Z"
        fill="url(#service-birth-gradient)"
      />
      {/* תינוק בעמדת עובר, מוחבק בתוך הלב */}
      <circle cx="58" cy="55" r="9" fill="oklch(0.97 0.01 75 / 0.96)" />
      <path
        d="M58 64C66 65 71 71 70 79"
        fill="none"
        stroke="oklch(0.97 0.01 75 / 0.96)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="68" cy="59" r="3.2" fill="oklch(0.59 0.108 354 / 0.7)" />
    </svg>
  );
}

// קורסי הכנה ללידה — ספר פתוח עם "לב" כסימניה, מסמל לימוד מתוך אכפתיות ואהבה
function ServiceCourseIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 75)" />
      <circle cx="38" cy="30" r="7" fill="oklch(0.88 0.045 354 / 0.6)" />
      <circle cx="85" cy="90" r="6" fill="oklch(0.87 0.045 198 / 0.65)" />
      <path
        d="M24 40C31 36 38 35 45 35C53 35 60 37 66 41V89C60 85 53 83 45 83C38 83 31 84 24 88V40Z"
        fill="oklch(0.73 0.053 198 / 0.9)"
      />
      <path
        d="M96 40C89 36 82 35 75 35C67 35 60 37 54 41V89C60 85 67 83 75 83C82 83 89 84 96 88V40Z"
        fill="oklch(0.59 0.108 354 / 0.83)"
      />
      <path d="M60 41V89" stroke="oklch(0.97 0.01 75 / 0.92)" strokeWidth="3" />
      <path d="M36 50H47M36 58H47M36 66H47" stroke="oklch(0.97 0.01 75 / 0.86)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M73 52C78 47 85 47 89 52" fill="none" stroke="oklch(0.97 0.01 75 / 0.86)" strokeWidth="2.6" strokeLinecap="round" />
      {/* סימניית לב בראש הספר */}
      <path
        d="M60 24C57 20 51 22 51 27C51 32 56 35 60 40C64 35 69 32 69 27C69 22 63 20 60 24Z"
        fill="oklch(0.97 0.01 75 / 0.96)"
      />
    </svg>
  );
}

// עיבוד לידה — בלון שיח (שיתוף הסיפור) עם לב בפנים, וקו גלי שמסמל את המסע להירפא ולהתקדם
function ServiceProcessingIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 195)" />
      <circle cx="28" cy="76" r="8" fill="oklch(0.9 0.04 354 / 0.56)" />
      <circle cx="92" cy="40" r="7" fill="oklch(0.87 0.05 198 / 0.62)" />
      {/* בלון שיח */}
      <path
        d="M30 36C30 29 36 24 44 24H84C92 24 98 29 98 36V60C98 67 92 72 84 72H62L48 86V72H44C36 72 30 67 30 60Z"
        fill="oklch(0.59 0.108 354 / 0.74)"
      />
      {/* לב בתוך בלון השיח */}
      <path
        d="M64 38C60 32 51 34 51 41C51 49 58 54 64 60C70 54 77 49 77 41C77 34 68 32 64 38Z"
        fill="oklch(0.97 0.01 75 / 0.95)"
      />
      {/* קו גלי - מסע ההתקדמות וההחלמה */}
      <path
        d="M34 96C42 90 50 100 58 94C66 88 74 98 82 92"
        fill="none"
        stroke="oklch(0.73 0.053 198 / 0.9)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// הדרכת הנקה — אמא מחזיקה תינוק קרוב לחזה (סיליאוטת הנקה), עם לב המסמל את הקשר ביניהם
function ServiceNursingIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 75)" />
      <circle cx="29" cy="35" r="8" fill="oklch(0.9 0.04 198 / 0.58)" />
      <circle cx="90" cy="84" r="7" fill="oklch(0.9 0.04 354 / 0.58)" />
      {/* אמא: ראש + גוף יושב */}
      <circle cx="68" cy="40" r="13" fill="oklch(0.73 0.053 198 / 0.9)" />
      <path
        d="M38 98C38 76 51 64 70 64C89 64 98 80 98 98Z"
        fill="oklch(0.73 0.053 198 / 0.9)"
      />
      {/* תינוק מוחזק קרוב לחזה */}
      <circle cx="46" cy="70" r="9" fill="oklch(0.59 0.108 354 / 0.86)" />
      <path
        d="M40 80C40 74 48 70 56 73C62 76 64 86 58 92C50 94 41 90 40 80Z"
        fill="oklch(0.59 0.108 354 / 0.86)"
      />
      {/* לב - הקשר והאהבה בין אמא לתינוק */}
      <path
        d="M64 56C61 53 56 55 56 59C56 63 60 66 64 70C68 66 72 63 72 59C72 55 67 53 64 56Z"
        fill="oklch(0.97 0.01 75 / 0.95)"
      />
    </svg>
  );
}

const services = [
  {
    imageSrc: holdbed,
    title: "ליווי דולה ללידה",
    text: "ליווי מקצועי ורגיש מההיריון ועד ללידה. במפגשי ההכנה ללידה נכיר זה את זה, נבין את הצרכים שלכם ונצעד יחד. אני כאן כדי לספק מידע נרחב ככל שברשותי, לתת לך בטחון, להסביר מה קורה בגופך, ולתת כלים מנטליים ומעשיים להתמודדות עם ההיריון, הצירים והלידה. לתמוך בבן הזוג ולתת לו כלים להיות שותף מלא ופעיל, ולעזור בתקשורת מכבדת מול הצוות הרפואי.\n\nבמהלך הלידה איישם את הטכניקות בהן אני מיומנת ואשתמש בכל ארגז הכלים העומד לרשותי כדי לעודד את התקדמותך בלידה ולסייע לך בכל דרך, על מנת להפוך את חוויית הלידה שלך לחיובית, טובה ומעצימה, והכל מתוך רגישות ושימת לב לצרכים המשתנים. וגם אחרי הלידה אמשיך במעטפת חמה ודואגת, לסכם יחד את החוויה ולגלות את האמא שנולדה מתוכך.",
  },
  {
    imageSrc: beforbirth,
    title: "קורסי הכנה ללידה",
    text: "מפגשי הכנה ללידה מקיפים המכינים אותך ואת בן הזוג שלך ללידה ולהורות ומעניקים כלים מעשיים לליווי מיטבי של תהליך הלידה. כלים להתמודדות עם הצירים ועם המצבים המשתנים תוך כדי הלידה, ומקנים בטחון בתהליך ובגוף שלך ומאפשרים לך לחוות חוויה רגועה ומיטיבה. נלמד יחד איך להגביר את השפעת ההורמונים הטבעיים ע\"מ לקדם את הלידה, לשכך את הכאב באופן טבעי.\n\nמבנה הקורסים מותאם הן לנשים בלידה ראשונה והן לנשים בלידות חוזרות.\n\nקורס הכנה ללידה ראשונה: כולל 4 מפגשים בני כשעתיים.\nקורס הכנה ללידה חוזרת: 1-2 מפגשים כשעתיים בהם נתמקד בצרכים שעולים בעקבות הלידות הקודמות.",
  },
  {
    imageSrc: ibudLeida,
    title: "עיבוד לידה",
    text: "חלק מהקושי שעולה בעקבות לידה הוא הקושי לתת לגיטמציה ולפנות מקום לחווית הלידה ולכל התחושות המלוות אותה.\nכשמשהו מהלידה לא עוזב אותך, גדול או קטן או תחושה פנימית שכלל לא נראית כלפי חוץ, אפשר וכדאי לתת להם מקום, לתת תוקף ומילים לתחושות שלך ואת זה אנחנו עושות בעיבוד לידה.\n\nאז מה זה עיבוד לידה?\nמפגשים בהם שתינו ביחד נפגוש את סיפור הלידה שלך או חלק ממנו מתוך הקשבה וניתן הזדמנות לכל מה שנשאר בך מהלידה ועדין לא קיבל ביטוי להישמע ולהירפא.\n\nהליווי מבוסס על גישת B.O.T (Birth Oriented Thinking) ומטרתו לעזור לך:\nלעבד ולהבין את מה שקרה בלידה\nלזהות ולהתמודד עם הרגשות הקשים\nלשחרר מתחים ופחדים לקראת לידות עתידיות\nלסגור מעגל ולהתקדם קדימה בשלום עם החוויה\n\nזהו תהליך מותאם אישית שמאפשר לך להשלים עם הלידה שהייתה ולהרגיש מוכנה יותר להמשך הדרך.",
  },
  {
    imageSrc: hanakaguide,
    title: "הדרכת הנקה",
    text: "ליווי והדרכה בתחום ההנקה - מהצעדים הראשונים ועד לפתרון בעיות ואתגרים. הדרכה מותאמת אישית לצרכים שלך ושל התינוק, להנקה רגועה.\nבהתאם לצורך שלך ניתן לקבל הדרכה מוקדמת עוד בשלב ההיריון בכדי למנוע את הקשיים הראשונים שעולים מייד אחרי הלידה כשאת כאובה ולומדת את צעדייך הראשונים כאמא, הכנה כזו מקנה בטחון בהתנהלות נכונה.",
  },
];

export function Services() {
  const ref = useReveal();
  const [supportsHover, setSupportsHover] = useState(true);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateSupportsHover = () => {
      setSupportsHover(mediaQuery.matches);
      if (mediaQuery.matches) {
        setActiveServiceIndex(null);
      }
    };

    updateSupportsHover();
    mediaQuery.addEventListener("change", updateSupportsHover);

    return () => mediaQuery.removeEventListener("change", updateSupportsHover);
  }, []);

  return (
    <section id="services" className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 bg-muted/40 overflow-hidden">
      {/* SVG decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FlowerSmall className="absolute top-16 left-8 w-12 h-12 text-accent/20 animate-drift" />
        <FlowerSmall className="absolute bottom-20 right-10 w-9 h-9 text-primary/20 animate-drift" style={{ animationDelay: "5s" }} />
        <DotScatter className="absolute bottom-0 left-0 w-64 h-32 text-primary/20" />
      </div>
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            ארבעה מעגלי ליווי לאורך הדרך
          </h2>
          <WaveLine className="mt-3 mx-auto w-40 h-4 text-accent/40" />
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {(services as ServiceItem[]).map((s, i) => (
            <article
              key={s.title}
              className={`group relative h-72 rounded-3xl overflow-hidden shadow-soft border-2 hover:shadow-warm hover:-translate-y-1 transition-all duration-500 bg-background/45 ${i % 2 === 0 ? 'border-primary' : 'border-accent'} cursor-pointer`}
              style={{ animationDelay: `${i * 0.1}s` }}
              tabIndex={0}
              role="button"
              aria-expanded={supportsHover ? undefined : activeServiceIndex === i}
              aria-label={`${activeServiceIndex === i ? "סגירת" : "פתיחת"} ${s.title}`}
              onClick={() => setActiveServiceIndex((current) => current === i ? null : i)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveServiceIndex((current) => current === i ? null : i);
                }
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-30" aria-hidden="true">
                {s.imageSrc ? (
                  <img src={s.imageSrc} alt="" className="h-[82%] w-[82%] object-contain" />
                ) : s.icon ? (
                  <s.icon className="h-[82%] w-[82%]" />
                ) : null}
              </div>

              <div
                className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0 ${!supportsHover && activeServiceIndex === i ? 'opacity-0' : ''}`}
                aria-hidden="true"
              >
                {s.imageSrc ? (
                  <img src={s.imageSrc} alt="" className="h-[58%] w-[58%] object-contain"/>
                ) : s.icon ? (
                  <s.icon className="h-[58%] w-[58%]" />
                ) : null}
                <h3 className={`text-xl sm:text-2xl font-bold text-center ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                  <span className="inline-block rounded-full border border-gray-400/40 bg-gray-500/15 px-6 py-2 shadow-sm backdrop-blur-sm">
                    {s.title}
                  </span>
                </h3>
              </div>

              <div className={`absolute inset-0 z-20 translate-y-full transition-transform duration-700 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 ${!supportsHover && activeServiceIndex === i ? 'translate-y-0' : ''}`}>
                <div className="absolute inset-0 bg-linear-to-b from-background/14 via-background/38 to-background/52 backdrop-blur-[1px]" aria-hidden="true" />
                <div className="relative h-full overflow-y-auto p-6">
                  <h3 className={`text-xl sm:text-2xl font-bold text-center ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                    <span className="inline-block rounded-full border border-gray-400/40 bg-gray-500/15 px-6 py-2 shadow-sm backdrop-blur-sm">
                      {s.title}
                    </span>
                  </h3>
                  <p className="mt-3 text-foreground/90 leading-relaxed whitespace-pre-line text-sm sm:text-base">{s.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center relative">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-96 h-24 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <p className="gveret-levin-regular text-3xl sm:text-4xl font-bold text-primary leading-[1.24] px-1 py-1">
            לכל אישה הזכות לחוויה חיובית ומעצימה בדרך להורות.
          </p>
          <p className="gveret-levin-regular mt-5 text-3xl sm:text-4xl font-bold text-primary leading-[1.24] px-1 py-1">
            אני כאן כדי לוודא שתהיי מוכנה, בטוחה ונתמכת לאורך כל הדרך.
          </p>
        </div>
      </div>
    </section>
  );
}
