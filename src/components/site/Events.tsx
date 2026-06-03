import { useReveal } from "@/hooks/use-reveal";
import eventsImg from "@/assets/WhatsApp Image 2026-05-11 at 18.58.59.jpeg";
import { WaveLine } from "./Decorations";

export function Events() {
  const ref = useReveal();
  return (
    <section id="events" className="py-20 sm:py-28 bg-muted/40">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold bg-linear-to-l from-primary via-accent to-primary bg-clip-text text-transparent leading-snug pb-1">
            המפגשים הקרובים
          </h2>
          <WaveLine className="mt-3 mx-auto w-32 h-4 text-primary/40" />
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden border border-border shadow-soft">
          <img src={eventsImg} alt="אירועים קרובים" className="w-full object-cover" />
        </div>

        <div className="mt-6 text-center">
          <a href="#contact" className="inline-flex rounded-full bg-gradient-warm text-primary-foreground px-8 py-3 font-semibold shadow-soft hover:scale-105 transition-transform text-lg">
            להרשמה
          </a>
        </div>
      </div>
    </section>
  );
}
