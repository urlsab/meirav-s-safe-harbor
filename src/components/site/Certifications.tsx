import { useReveal } from "@/hooks/use-reveal";
import tomechetBirth from "@/assets/tomechet birth.png";
import hanakAdvisor from "@/assets/hanak advaisor.png";
import hachanBirth from "@/assets/hachan birth.png";
import bot from "@/assets/bot.png";

const certs = [
  { src: tomechetBirth, alt: "תומכת לידה", title: "ליווי לידה" },
  { src: hanakAdvisor, alt: "יועצת הנקה", title: "ייעוץ הנקה" },
  { src: hachanBirth, alt: "הכנה ללידה", title: "הכנה ללידה" },
  { src: bot, alt: "עיבוד לידה", title: "עיבוד לידה" },
];

export function Certifications() {
  const ref = useReveal();
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-background/60">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">ההכשרות שלי</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
          {certs.map((c, idx) => (
            <div key={c.title} className="flex flex-col items-center gap-3 w-full">
              <div className="rounded-full bg-gradient-warm px-4 py-1.5 shadow-warm">
                <span className="text-sm font-bold text-primary-foreground tracking-wide">{c.title}</span>
              </div>
              <div className="relative flex flex-col items-center w-full mt-2">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full max-w-44 object-contain relative z-10 animate-float-gentle"
                  style={{
                    animationDelay: `${idx * 1.2}s`,
                    filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.18))",
                  }}
                />
                <div
                  className="w-3/5 h-2.5 rounded-full float-shadow"
                  style={{
                    background: "oklch(0.73 0.053 198 / 0.28)",
                    filter: "blur(6px)",
                    marginTop: "-0.4rem",
                    animationDelay: `${idx * 1.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
