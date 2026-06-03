import { useReveal } from "@/hooks/use-reveal";
import { WaveLine } from "./Decorations";
import womanThree from "@/assets/woman 3.png";
import holdss from "@/assets/holdss.png";
import babyIn from "@/assets/baby in.png";
import handss from "@/assets/handss.png";
import newBorn from "@/assets/new born.png";
import heartGreen from "@/assets/heart green.png";
import livuy from "@/assets/livuy.png";
import holdBaby from "@/assets/hold baby.png";

const tips = [
  {
    front: "לידה היא הקשבה",
    back: "לידה היא לא מבחן היא הקשבה לגוף,\nהקשבה לתנועה, למה שקורה עכשיו,\nזה לא זמן של שליטה, זה זמן של חיבור לגוף להתכנסות\nוכשהגוף מקבל את המקום הוא כבר יודע להוביל.",
  },
  {
    front: "להיות שם בשבילה",
    back: "כבני זוג אנחנו באים ללידה בתחושה שאנחנו צריכים \"לתקן\", \"לפתור בעיה\"\nוזה ממקום הכי טבעי מול הכאב של אדם אהוב,\nאבל בלידה המציאות שונה, הכאב הוא חלק מהתהליך\nאז פשוט תהיה שם בשבילה, בנוכחות רגועה\nבמגע בטוח ותומך במילים עוטפות ומרגיעות\nתן לה תחושה שהיא לא לבד בתהליך\nוכשהיא תרגיש בטוחה הגוף ירגע והלידה תתקדם בצורה טובה יותר.",
  },
  {
    front: "לשחרר שליטה",
    back: "כשאסכים לשחרר שליטה, כשאבין שהאוטומטים שלי מנהלים אותי\nכשאצליח להיות במצב תודעתי שמאפשר לי הבנה של דברים בצורה שונה\nשם השינוי יקרה\nוהתפיסה לגבי קשה או לא קשה תהיה בשליטה שלי\nוהמודעות הזו יכולה להפוך את הלידה למסע של קבלה והשלמה.",
  },
  {
    front: "לידה היא הליך אלוקי",
    back: "לידה אינה הליך רפואי\nלידה היא הליך אלוקי מושגח\nבואי אליה ברוח טובה בחשיבה חיובית\nאת שותפה בהבאת חיים לעולם.\nוגם יהיה שונה – יהיה מדוייק\nואם יהיה ארוך אמצא סבלנות,\nוכשלא-אז מותר להרגיש הכל, ומותר ורצוי לעצור להתמודד\nלדבר על זה ואז לאגור כח ולהמשיך\nמה שיהיה לך נכון לך...",
  },
  {
    front: "לידה מוצלחת",
    back: "לידה מוצלחת היא לא בהיכרח לידה \"מושלמת\"\nהיא לידה שבה את, עם כל מה שעברת מרגישה טוב עם עצמך,\nמרגישה שבחרת, מרגישה שנולדת עם התינוק.\nשהיית שם והיית מחוברת\nזה לא שלימות רפואית, זה שלמות פנימית.",
  },
  {
    front: "לתת ללידה לנווט",
    back: "לידה מחזיקה כל כך הרבה דברים לא ידועים,\nכל כך הרבה חוסר שליטה ואנחנו אף פעם לא יודעות את הגורמים והסיבות להכל\nוהכי חשוב בתוך כל זה לדעת שאת עושה את הכי טוב שאת יכולה,\nומה שלא בידייך- לתת גם ללידה ולתינוק לנווט בתוך התהליך,\nבתוך הגלים והעוצמה של החוויה המדהימה הזו.",
  },
  {
    front: "לספר את הסיפור",
    back: "לספר את סיפור הלידה שלך מאפשר מרחב בטוח\nליצירת קשר עם מה שנמצא שם בתוך הסיפור,\nואם את מרגישה שמשהו בלידה שלך מבקש התייחסות,\nקחי לך זמן שבי לדבר על הרגשות שאולי עדין לא קיבלו מקום,\nעל מה שהפתיע אותך, כל חוויה חשובה וראויה לעיבוד.",
  },
  {
    front: "לידה – התחלה חדשה",
    back: "לידה זה לא רק סוף הריון,\nלידה זו התחלה של חיים חדשים,\nלידה היא הרגע שבו אישה נולדת מחדש כאמא\nלידה היא מפגש עם עוצמה, רכות, אהבה ונתינה\nבלידה הכאב הוא חלק בלתי נפרד מהתהליך\nהכאב הוא הדלת אל עולם העוצמה\nהוא שער שצריך לעבור דרכו להתמסר אליו\nולא לנסות להילחם בו,\nומתוכו יוולדו חיים חדשים.",
  },
];

const tipBackgrounds: Record<
  string,
  {
    frontImage: string;
    backImage?: string;
    frontDim?: string;
    backDim?: string;
  }
> = {
  "לידה היא הקשבה": {
    frontImage: womanThree,
    backImage: womanThree,
    frontDim: "rgba(0, 0, 0, 0.34)",
    backDim: "rgba(0, 0, 0, 0.56)",
  },
  "להיות שם בשבילה": {
    frontImage: holdss,
    backImage: holdss,
    frontDim: "rgba(0, 0, 0, 0.44)",
    backDim: "rgba(0, 0, 0, 0.44)",
  },
  "לשחרר שליטה": {
    frontImage: babyIn,
    backImage: babyIn,
    frontDim: "rgba(0, 0, 0, 0.34)",
    backDim: "rgba(0, 0, 0, 0.52)",
  },
  "לידה היא הליך אלוקי": {
    frontImage: handss,
    backImage: handss,
    frontDim: "rgba(0, 0, 0, 0.34)",
    backDim: "rgba(0, 0, 0, 0.5)",
  },
  "לידה מוצלחת": {
    frontImage: newBorn,
    backImage: newBorn,
    frontDim: "rgba(0, 0, 0, 0.35)",
    backDim: "rgba(0, 0, 0, 0.54)",
  },
  "לתת ללידה לנווט": {
    frontImage: heartGreen,
    backImage: heartGreen,
    frontDim: "rgba(0, 0, 0, 0.36)",
    backDim: "rgba(0, 0, 0, 0.5)",
  },
  "לספר את הסיפור": {
    frontImage: livuy,
    backImage: livuy,
    frontDim: "rgba(0, 0, 0, 0.34)",
    backDim: "rgba(0, 0, 0, 0.52)",
  },
  "לידה – התחלה חדשה": {
    frontImage: holdBaby,
    backImage: holdBaby,
    frontDim: "rgba(0, 0, 0, 0.34)",
    backDim: "rgba(0, 0, 0, 0.52)",
  },
};

export function Tips() {
  const ref = useReveal();
  return (
    <section id="tips" className="pt-12 sm:pt-16 pb-20 sm:pb-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <WaveLine className="mt-3 mx-auto w-36 h-4 text-accent/40" />
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-accent/90 italic">מחשבות קטנות שעושות שינוי גדול</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((t, i) => (
            <div key={t.front} className="flip-card h-72" tabIndex={0}>
              <div className="flip-card-inner shadow-soft">
                <div
                  className={`flip-face text-primary-foreground flex flex-col items-center justify-center p-6 text-center gap-3 ${tipBackgrounds[t.front] ? "bg-cover bg-center bg-no-repeat" : "bg-gradient-warm"}`}
                  style={
                    tipBackgrounds[t.front]
                      ? {
                          backgroundImage: `linear-gradient(${tipBackgrounds[t.front].frontDim ?? "rgba(0, 0, 0, 0.36)"}, ${tipBackgrounds[t.front].frontDim ?? "rgba(0, 0, 0, 0.36)"}), url(${tipBackgrounds[t.front].frontImage})`,
                        }
                      : undefined
                  }
                >
                  <h3 className="text-xl font-bold leading-snug">{t.front}</h3>
                </div>
                <div
                  className={`flip-face flip-back border flex flex-col p-5 text-center overflow-y-auto ${tipBackgrounds[t.front] ? "border-white/30 bg-cover bg-center bg-no-repeat" : `${i % 2 === 0 ? "card-teal" : "card-rose"} border-border`}`}
                  style={
                    tipBackgrounds[t.front]
                      ? {
                          backgroundImage: `linear-gradient(${tipBackgrounds[t.front].backDim ?? "rgba(0, 0, 0, 0.54)"}, ${tipBackgrounds[t.front].backDim ?? "rgba(0, 0, 0, 0.54)"}), url(${tipBackgrounds[t.front].backImage ?? tipBackgrounds[t.front].frontImage})`,
                        }
                      : undefined
                  }
                >
                  <p className={`my-auto leading-relaxed text-sm whitespace-pre-line ${tipBackgrounds[t.front] ? "text-primary-foreground" : "text-foreground/85"}`}>
                    {t.back}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
