import { useReveal } from "@/hooks/use-reveal";
import eventsImg from "@/assets/WhatsApp Image 2026-05-11 at 18.58.59.jpeg";
import eventsImg2 from "@/assets/got medal.jpeg";
import eventsImg3 from "@/assets/WhatsApp Image 2026-05-11 at 18.59.00.jpeg";
import { WaveLine } from "./Decorations";

export function Events() {
  const ref = useReveal();
  return (
    <section id="events" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            חוויות מהשטח
          </h2>
          <WaveLine className="mt-3 mx-auto w-32 h-4 text-primary/40" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {/* <div className="rounded-3xl overflow-hidden border border-border shadow-soft sm:col-span-2">
            <img src={eventsImg} alt="חוויות מהשטח - תמונה ראשית" className="h-full w-full object-cover" />
          </div> */}
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
            <img src={eventsImg2} alt="חוויות מהשטח - תמונה נוספת" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
            <img src={eventsImg3} alt="חוויות מהשטח - תמונה נוספת" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* <div className="mt-6 text-center">
          <a href="#contact" className="inline-flex rounded-full bg-gradient-warm text-primary-foreground px-8 py-3 font-semibold shadow-soft hover:scale-105 transition-transform text-lg">
            להרשמה
          </a>
        </div> */}
      </div>
    </section>
  );
}
