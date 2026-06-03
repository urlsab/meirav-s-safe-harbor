import { useReveal } from "@/hooks/use-reveal";
import { WaveLine } from "@/components/site/Decorations";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "האם ניתן לקבל החזרים על השירותים דרך קופת חולים?",
    a: "ניתן לקבל החזרים על ליווי דולה וקורס הכנה ללידה מקופ\"ח. ההחזר משתנה בהתאם לקופה ולתוכנית הביטוח שלך – מומלץ לבדוק מול קופת החולים שלך לפני תחילת הליווי.",
  },
  {
    q: "מתי כדאי לפנות אל הדולה?",
    a: "אפשר לפנות אלי בכל שלב של ההיריון – ואף לפני ההתעברות אם את בשלב תכנון. ככל שנתחיל מוקדם יותר, כך יהיה לנו יותר זמן לבנות קשר, להכין ולהתאים את הליווי לצרכים שלך.",
  },
  {
    q: "האם ניתן לבצע מפגשים מרחוק?",
    a: "כן! מפגשי הכנה ללידה, עיבוד לידה והדרכת הנקה ניתנים גם בזום ובוידאו קול. הליווי בלידה עצמה הוא כמובן פיזי ובבית היולדות.",
  },
  {
    q: "מה ההבדל בין דולה לרופא או מיילדת?",
    a: "דולה אינה מבצעת פרוצדורות רפואיות. תפקידי הוא לתמוך בך רגשית ופיזית, לספק מידע ולעזור בתקשורת עם הצוות הרפואי. הדולה והצוות הרפואי עובדים יחד לטובתך.",
  },
  {
    q: "האם בן הזוג משתתף בתהליך?",
    a: "בהחלט ובשמחה! בן הזוג הוא חלק מרכזי בתהליך. מפגשי ההכנה ללידה מיועדים לשניכם יחד, ואני מלמדת את בן הזוג כלים מעשיים איך להיות שותף פעיל ותומך לאורך הלידה כולה.",
  },
  {
    q: "מה קורה אם אני צריכה ניתוח קיסרי?",
    a: "ניתוח קיסרי הוא חלק מהמציאות של לידה ואני מכינה אתכם גם לתרחיש הזה. אני נמצאת לצדך גם בניתוח קיסרי מתוכנן וגם בלתי מתוכנן, ותומכת ברגשית לאחריו.",
  },
  {
    q: "האם את זמינה 24/7 לקראת הלידה?",
    a: "כן. לקראת מועד הלידה אני זמינה עבורך בכל שעה ביממה. נסכם יחד כיצד ומתי ליצור קשר, ואני מבטיחה להגיע אליך בהקדם האפשרי.",
  },
];

export function FAQ() {
  const ref = useReveal();
  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">שאלות שנשאלות לעיתים קרובות</h2>
          <WaveLine className="mt-3 mx-auto w-36 h-4 text-primary/40" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-accent/35 bg-rose-soft shadow-soft px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-base font-semibold text-right py-5 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed text-base pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
