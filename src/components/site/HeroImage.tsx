import heroImg from "@/assets/new handsss.png";

export function HeroImage() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 flex justify-center">
      <div className="relative animate-fade mx-auto max-w-120 px-4 w-full" style={{ animationDelay: "0.3s" }}>
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
          <span className="absolute animate-heart-float text-2xl text-accent/70"    style={{ top: "8%",  right: "7%",  animationDelay: "0s"   }}>♥</span>
          <span className="absolute animate-heart-float text-lg  text-primary/60"   style={{ top: "28%", right: "-1%", animationDelay: "1.3s" }}>♥</span>
          <span className="absolute animate-heart-float text-3xl text-rose-deep/55" style={{ top: "62%", right: "5%",  animationDelay: "2.6s" }}>♥</span>
          <span className="absolute animate-heart-float text-base text-accent/50"   style={{ top: "18%", left:  "5%",  animationDelay: "0.7s" }}>♥</span>
          <span className="absolute animate-heart-float text-xl  text-primary/45"   style={{ top: "74%", left:  "7%",  animationDelay: "2s"   }}>♥</span>
        </div>
      </div>
    </section>
  );
}
