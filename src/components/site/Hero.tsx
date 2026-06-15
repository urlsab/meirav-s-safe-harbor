import heroImg from "@/assets/hand 2 birth.png";
import { LotusDecor, DotScatter, FlowerSmall } from "./Decorations";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-105 h-105 rounded-full bg-primary/15 blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 -left-32 w-90 h-90 rounded-full bg-accent/15 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-1/3 w-70 h-70 rounded-full bg-rose-soft/30 blur-3xl animate-pulse-soft" style={{ animationDelay: "4s" }} />
        <LotusDecor className="absolute bottom-10 left-8 w-20 h-14 text-primary/25 animate-drift" />
        <FlowerSmall className="absolute top-16 right-1/4 w-10 h-10 text-accent/20 animate-drift" style={{ animationDelay: "3s" }} />
        <DotScatter className="absolute top-0 left-0 w-full h-full text-primary/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-right">
          <h1 className="gveret-levin-regular animate-fade-up text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.28] text-primary px-1 py-1 inline-block -translate-x-2 sm:-translate-x-3 lg:-translate-x-4" style={{ animationDelay: "0.1s", padding: "1rem" }}>
            כאן בשבילך לחוויית לידה בטוחה ומעצימה,
            <br />
            שותפה מלאה למסע ההיריון, הלידה וההורות הראשונית.
             כי לידה היא לא רגע, היא חוויה משנה חיים.
          </h1>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.4s" }}>
            <a href="#contact" className="rounded-full bg-gradient-warm text-primary-foreground px-7 py-3 font-semibold shadow-warm hover:scale-105 transition-transform duration-300">
              פגישת היכרות ללא תשלום
            </a>
            <a href="#services" className="rounded-full border-2 border-rose-deep text-rose-deep px-7 py-3 font-semibold hover:bg-rose-deep hover:text-primary-foreground transition-colors duration-300">
              לשירותים שלי
            </a>
          </div>
        </div>

        <div className="relative animate-fade" style={{ animationDelay: "0.3s" }}>
          <div className="mx-auto max-w-120 rounded-[2.2rem] border-2 border-primary/35 bg-background/75 p-3 shadow-warm">
            <div className="aspect-square overflow-hidden rounded-4xl border border-white/55 bg-card/65">
              <img
                src={heroImg}
                alt="אישה בהריון מחבקת את בטנה"
                width={1536}
                height={1280}
                className="h-full w-full object-cover object-center animate-float"
              />
            </div>
          </div>
          {/* Floating hearts */}
          <div className="pointer-events-none absolute inset-0 overflow-visible">
            <span className="absolute animate-heart-float text-2xl text-accent/70" style={{ top: "8%",  right: "7%",  animationDelay: "0s" }}>♥</span>
            <span className="absolute animate-heart-float text-lg  text-primary/60" style={{ top: "28%", right: "-1%", animationDelay: "1.3s" }}>♥</span>
            <span className="absolute animate-heart-float text-3xl text-rose-deep/55" style={{ top: "62%", right: "5%",  animationDelay: "2.6s" }}>♥</span>
            <span className="absolute animate-heart-float text-base text-accent/50" style={{ top: "18%", left:  "5%",  animationDelay: "0.7s" }}>♥</span>
            <span className="absolute animate-heart-float text-xl  text-primary/45" style={{ top: "74%", left:  "7%",  animationDelay: "2s" }}>♥</span>
          </div>
        </div>
      </div>
    </section>
  );
}
