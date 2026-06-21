import { useReveal } from "@/hooks/use-reveal";
// import eventsImg from "@/assets/WhatsApp Image 2026-05-11 at 18.58.59.jpeg";
import eventsImg2 from "@/assets/finish course hanaka.jpg";
import eventsImg3 from "@/assets/WhatsApp Image 2026-05-11 at 18.59.00.jpeg";
import eventsImg4 from "@/assets/card table.jpg";
import eventsImg5 from "@/assets/past bot event.jpeg";
import { WaveLine } from "./Decorations";

// test deploy 22

export function Events() {
  const ref = useReveal();
  return (
    <section id="events" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            גלריה
          </h2>
          <WaveLine className="mt-3 mx-auto w-32 h-4 text-primary/40" />
        </div>

        {/* Collage grid: 3 cols × 3 rows — large main + varied sizes */}
        <div className="mt-8 grid grid-cols-3 grid-rows-3 gap-1.5 sm:gap-2 aspect-4/3 w-full">
          {/* תמונה ראשית גדולה — שמאל עליון */}
          <div className="[grid-area:1/1/3/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-border/30 group">
            <img src={eventsImg5} alt="גלריה" className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
          </div>
          {/* קטנה — ימין עליון */}
          <div className="[grid-area:1/3/2/4] overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-border/30 group">
            <img src={eventsImg2} alt="גלריה" className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
          </div>
          {/* גבוהה — ימין תחתון */}
          <div className="[grid-area:2/3/4/4] overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-border/30 group">
            <img src={eventsImg3} alt="גלריה" className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
          </div>
          {/* רחבה — שמאל תחתון */}
          <div className="[grid-area:3/1/4/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-border/30 group">
            <img src={eventsImg4} alt="גלריה" className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
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
