import { useReveal } from "@/hooks/use-reveal";
import tomechetBirth from "@/assets/שתף 1 Z0 Z.pdf-1.png";
import hanakAdvisor from "@/assets/שתף CERTIFICATE OF COMPLETION.pdf-1.png";
import beforebirth from "@/assets/שתף IIL1.pdf-1.png";
import bot from "@/assets/עותק של תעודת סיום בי או. טי .png";

const certs = [
  { src: tomechetBirth, alt: "תומכת לידה", title: "הכנה ללידה" },
  { src: hanakAdvisor, alt: "יועצת הנקה", title: "ייעוץ הנקה" },
  { src: beforebirth, alt: "הכנה ללידה", title: "ליווי לידה" },
  { src: bot, alt: "עיבוד לידה", title: "עיבוד לידה" },
];

export function Certifications() {
  const ref = useReveal();
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-background/60">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary leading-snug pb-1">
            ההכשרות שלי
          </h2>
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
