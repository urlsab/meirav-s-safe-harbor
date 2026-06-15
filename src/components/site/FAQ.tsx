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
    q: "למה בכלל לקחת דולה? ולשתף דמות זרה בחוויה אינטימית?",
    a: "דולה היא הדמות היחידה שאת בוחרת מתוך אינטואיציה וחיבור רגשי. הדולה מלווה אותך ואת בן זוגך עוד משלב ההיריון ונוצר ביניכם קשר, אמון והבנת צרכים. הדולה זמינה לך לאורך כל ההיריון בכל שאלה והתלבטות, תומכת ומסייעת לאורך כל הלידה ואף שעתיים אחריה מתוך הקשבה מלאה לצרכים שלכם.",
  },
  {
    q: "האם ניתן לקבל החזרים על השירותים דרך קופת חולים?",
    a: "ניתן לקבל החזרים על ליווי דולה וקורס הכנה ללידה מקופ\"ח. ההחזר משתנה בהתאם לקופה ולתוכנית הביטוח שלך – מומלץ לבדוק מול קופת החולים שלך לפני תחילת הליווי.",
  },
  {
    q: "מתי לפנות ולחפש דולה?",
    a: "אפשר לפנות אלי בכל שלב של ההיריון, מרגע שאת מרגישה צורך בכך. אף פעם לא מאוחר מדי, אך ככל שנתחיל מוקדם יותר כך יהיה לנו יותר זמן לבנות קשר, להכין ולהתאים את הליווי לצרכים שלך.",
  },
  {
    q: "מה ההבדל בין דולה לרופא או מיילדת?",
    a: "דולה אינה מבצעת פרוצדורות רפואיות. תפקידי הוא לתמוך בך רגשית ופיזית, לספק מידע ולעזור בתקשורת עם הצוות הרפואי. הדולה והצוות הרפואי עובדים יחד לטובתך.",
  },
  {
    q: "האם בן הזוג משתתף בתהליך?",
    a: "בהחלט ובשמחה! בן הזוג הוא חלק מרכזי ובלתי נפרד בתהליך. מפגשי ההכנה ללידה מיועדים לשניכם יחד, ואני מלמדת את בן הזוג כלים מעשיים איך להיות שותף פעיל ותומך בהתמודדות עם הצירים בבית, בשלב הלטנטי ולאורך הלידה כולה.",
  },
  {
    q: "מה קורה אם אני צריכה ניתוח?",
    a: "ניתוח הוא חלק מהמציאות של לידה ואני מכינה אתכם גם לתרחיש הזה. במידת הצורך אני מלווה ותומכת בך ובבן הזוג גם בניתוח קיסרי מתוכנן וגם בניתוח חירום, ודואגת לכל הצרכים שלך בשעות הראשונות כולל עזרה בהנקה ראשונה.",
  },
  {
    q: "מה הזמינות שלך בהריון ולקראת הלידה?",
    a: "אני זמינה לשאלות והתייעצויות לכל אורך ההיריון. לקראת הלידה אני זמינה עבורך 24/7. מרגע שתצרי קשר אלווה אותך טלפונית ואנחה אתכם בשלבי ההתקדמות, וכשתקבלי החלטה לצאת לבית היולדות ותודיעי לי שאת צריכה אותי אגיע אליך בהקדם האפשרי.",
  },
];

export function FAQ() {
  const ref = useReveal();
  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            שאלות שנשאלות לעיתים קרובות
          </h2>
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
