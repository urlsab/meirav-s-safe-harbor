import { useReveal } from "@/hooks/use-reveal";
import { WaveLine, FlowerSmall, DotScatter } from "./Decorations";

type ServiceIconProps = {
  className?: string;
};

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
      <circle cx="54" cy="61" r="7" fill="oklch(0.97 0.01 75 / 0.96)" />
      <path d="M49 76C52 68 60 65 67 68" fill="none" stroke="oklch(0.97 0.01 75 / 0.96)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

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
    </svg>
  );
}

function ServiceProcessingIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 195)" />
      <circle cx="28" cy="76" r="8" fill="oklch(0.9 0.04 354 / 0.56)" />
      <circle cx="92" cy="40" r="7" fill="oklch(0.87 0.05 198 / 0.62)" />
      <path
        d="M60 96C42 84 30 71 30 56C30 44 39 35 51 35C57 35 63 37 68 43C73 37 79 35 85 35C96 35 104 44 104 56C104 71 92 84 74 96L68 100L60 96Z"
        fill="oklch(0.59 0.108 354 / 0.74)"
      />
      <path
        d="M43 57C43 47 51 40 61 40C71 40 79 47 79 57C79 65 73 72 65 74"
        fill="none"
        stroke="oklch(0.97 0.01 75 / 0.95)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M57 65C57 62 60 60 63 60C67 60 70 63 70 67C70 71 67 73 63 73"
        fill="none"
        stroke="oklch(0.97 0.01 75 / 0.9)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceNursingIcon({ className }: ServiceIconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="oklch(0.95 0.02 75)" />
      <circle cx="29" cy="35" r="8" fill="oklch(0.9 0.04 198 / 0.58)" />
      <circle cx="90" cy="84" r="7" fill="oklch(0.9 0.04 354 / 0.58)" />
      <path
        d="M66 24C74 36 80 43 80 54C80 67 71 76 60 76C49 76 40 67 40 54C40 43 46 36 54 24"
        fill="oklch(0.73 0.053 198 / 0.9)"
      />
      <path d="M54 24C57 27 59 31 60 36C61 31 63 27 66 24" fill="oklch(0.59 0.108 354 / 0.86)" />
      <path d="M42 88C47 79 56 76 64 76C72 76 81 79 86 88" fill="none" stroke="oklch(0.59 0.108 354 / 0.82)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="64" cy="50" r="5" fill="oklch(0.97 0.01 75 / 0.95)" />
    </svg>
  );
}

const services = [
  {
    icon: ServiceBirthSupportIcon,
    title: "ליווי דולה ללידה",
    text: "ליווי מקצועי ורגשי מההיריון ועד לאחר הלידה. אני כאן כדי לתת לך ביטחון, להסביר מה קורה בגופך, לתת כלים מנטליים ומעשיים להתמודדות עם ההיריון הצירים והלידה, לעזור בתקשורת עם הצוות הרפואי בשיתוף ובנועם, ולתמוך גם בבן הזוג שלך לאורך כל התהליך, ולתת לו כלים להיות שותף מלא ופעיל. אני רגישה לצרכים המשתנים שלכם במהלך הלידה, בתהליך הליווי אעניק לכם שירותי תמיכה מגוונים סביב ללידה: נכיר זה את זה, אערוך לכם מפגשי הכנה לקראת הלידה, אהיה זמינה לשאלותיכם, אספק לכם מידע נרחב ככל שברשותי, אתמוך בכם לאורך כל הלידה בבית היולדות, איישם את הטכניקות שבהן אני מיומנת ואשתמש בכל ארגז הכלים העומד לרשותי כדי לעודד את התקדמותך בלידה ולסייע לכם בכל דרך שאוכל במטרה להפוך את חווית הלידה לחיובית, טובה ומעצימה. ואחרי הלידה אמשיך לתת מעטפת לסכם את החוויה ולגלות את האמא שנולדה מתוכך.",
  },
  {
    icon: ServiceCourseIcon,
    title: "קורסי הכנה ללידה",
    text: "מפגשי הכנה ללידה מקיפים המכינים אותך ואת בן הזוג שלך ללידה ולהורות ומעניקים כלים מעשיים לליווי מיטבי של תהליך הלידה. כלים להתמודדות עם הצירים ועם המצבים המשתנים תוך כדי הלידה, ומקנים בטחון בתהליך ובגוף שלך ומאפשרים לך לחוות חוויה רגועה ומיטיבה. נלמד יחד איך להגביר את השפעת ההורמונים הטבעיים ע\"מ לקדם את הלידה, לשכך את הכאב באופן טבעי.\n\nמבנה הקורסים מותאמים הן לנשים בלידה ראשונה והן לנשים בלידות חוזרות,\n\nקורס הכנה ללידה ראשונה – כולל 4 מפגשים בני כשעתיים וחצי\nקורס הכנה ללידה חוזרת - 1-2 מפגשים כשעתיים בהם נתמקד בצרכים שעולים בעקבות הלידות הקודמות.\n\nמזמינה אותך לפגישת היכרות ללא תשלום והתחייבות.",
  },
  {
    icon: ServiceProcessingIcon,
    title: "עיבוד לידה",
    text: "חלק מהקושי שעולה בעקבות לידה הוא הקושי לתת לגיטמציה ולפנות מקום לחווית הלידה ולכל התחושות המלוות אותה.\nכשמשהו מהלידה לא עוזב אותך, גדול או קטן או תחושה פנימית שכלל לא נראית כלפי חוץ, אפשר וכדאי לתת להם מקום, לתת תוקף ומילים לתחושות שלך ואת זה אנחנו עושות בעיבוד לידה.\n\nאז מה זה עיבוד לידה?\nמפגשים בהם שתינו ביחד נפגוש את סיפור הלידה שלך או חלק ממנו מתוך הקשבה וניתן הזדמנות לכל מה שנשאר בך מהלידה ועדין לא קיבל ביטוי להישמע ולהירפא.\n\nהליווי מבוסס על גישת B.O.T (Birth Oriented Thinking) ומטרתו לעזור לך:\nלעבד ולהבין את מה שקרה בלידה\nלזהות ולהתמודד עם הרגשות הקשים\nלשחרר מתחים ופחדים לקראת לידות עתידיות\nלסגור מעגל ולהתקדם קדימה בשלום עם החוויה\n\nזהו תהליך מותאם אישית שמאפשר לך להשלים עם הלידה שהייתה ולהרגיש מוכנה יותר להמשך הדרך.",
  },
  {
    icon: ServiceNursingIcon,
    title: "הדרכת הנקה",
    text: "ליווי והדרכה בתחום ההנקה - מהצעדים הראשונים ועד לפתרון בעיות ואתגרים. הדרכה מותאמת אישית לצרכים שלך ושל התינוק, להנקה רגועה.\nבהתאם לצורך שלך ניתן לקבל הדרכה מוקדמת עוד בשלב ההיריון בכדי למנוע את הקשיים הראשונים שעולים מייד אחרי הלידה כשאת כאובה ולומדת את צעדייך הראשונים כאמא, הכנה כזו מקנה בטחון בהתנהלות נכונה.\n\nמה אומרות הנשים שליוויתי\nהנשים שליוויתי מספרות על תחושת ביטחון ורוגע בחוויה הכי משמעותית בחייהן, רוגע שהוביל ללידות מעצימות, בטחון שהוביל להתמודדות טובה יותר עם אתגרי ההיריון והלידה, ולחיבור עמוק יותר לעצמן ולתהליך הלידה.\nאני מזמינה אותך להצטרף אליהן ולגלות כיצד השילוב הייחודי של רכות ועוצמה, יכול לשנות את חוויית ההיריון והלידה שלך.\n\nבואי להתנסות ללמוד יחד לשלב את החוזקות שלך עם ידע ומודעות, ולאפשר לעצמך לעצור, לנשום להקשיב ולהתחבר- כדי לצעוד במסע האימהות שלך מתוך תחושת מסוגלות.",
  },
];

export function Services() {
  const ref = useReveal();
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
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">ארבעה מעגלי ליווי לאורך הדרך</h2>
          <WaveLine className="mt-3 mx-auto w-40 h-4 text-accent/40" />
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative h-108 rounded-3xl overflow-hidden shadow-soft border-2 hover:shadow-warm hover:-translate-y-1 transition-all duration-500 bg-background/45 ${i % 2 === 0 ? 'border-primary' : 'border-accent'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-22" aria-hidden="true">
                <s.icon className="h-[82%] w-[82%]" />
              </div>

              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 group-hover:opacity-0 group-focus-within:opacity-0"
                aria-hidden="true"
              >
                <s.icon className="h-[68%] w-[68%]" />
                <h3 className={`px-6 text-xl sm:text-2xl font-bold text-center ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{s.title}</h3>
              </div>

              <div className="absolute inset-0 z-20 translate-y-full transition-transform duration-700 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
                <div className="absolute inset-0 bg-background/90" aria-hidden="true" />
                <div className="relative h-full overflow-y-auto p-6">
                  <h3 className={`text-xl sm:text-2xl font-bold text-center ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{s.title}</h3>
                  <p className="mt-3 text-foreground/85 leading-relaxed whitespace-pre-line text-base">{s.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center relative">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-96 h-24 rounded-full bg-accent/10 blur-3xl" />
          </div>
          <p className="text-3xl sm:text-4xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1">
            לכל אישה הזכות לחוויה חיובית ומעצימה בדרך להורות.
          </p>
          <p className="mt-5 text-3xl sm:text-4xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1">
            אני כאן כדי לוודא שתהיי מוכנה, בטוחה ונתמכת לאורך כל הדרך.
          </p>
        </div>
      </div>
    </section>
  );
}
