import { useReveal } from "@/hooks/use-reveal";
import { ContactActionButtons } from "@/components/site/ContactActionButtons";

export function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-4 sm:px-6 text-center">

        <h2 className="mt-2 text-3xl sm:text-5xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1">
          לכל אישה הזכות לחוויה מעצימה
        </h2>
        <p className="mt-5 text-lg sm:text-xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1 max-w-3xl mx-auto">
          אני כאן כדי לוודא שתהיי מוכנה, בטוחה ונתמכת לאורך כל הדרך. מזמינה אותך לפגישת היכרות ללא תשלום וללא התחייבות.
        </p>

        <ContactActionButtons className="mt-10 justify-center" />
      </div>
    </section>
  );
}
