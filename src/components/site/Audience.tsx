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
  return <section id="audience" />;
}
