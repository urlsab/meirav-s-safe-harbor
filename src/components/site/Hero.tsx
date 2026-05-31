import heroImg from "@/assets/hero-mother.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 -left-32 w-[360px] h-[360px] rounded-full bg-accent/20 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-1/3 w-[280px] h-[280px] rounded-full bg-rose-soft/40 blur-3xl animate-pulse-soft" style={{ animationDelay: "4s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-right">
          <p className="animate-fade-up inline-block rounded-full bg-secondary/60 text-secondary-foreground px-4 py-1.5 text-sm font-medium mb-5">
            דולה • הכנה ללידה • עיבוד לידה • הדרכת הנקה
          </p>
          <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground" style={{ animationDelay: "0.1s" }}>
            ליווי חם ומעצים
            <br />
            לכל אישה בדרכה <span className="text-accent">להורות</span>
          </h1>
          <p className="animate-fade-up mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animationDelay: "0.25s" }}>
            אני כאן כדי שתחווי לידה בטוחה, מודעת ומעצימה – מהרגע הראשון של ההיריון ועד הפגישה הראשונה עם התינוק שלך.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.4s" }}>
            <a href="#contact" className="rounded-full bg-gradient-warm text-primary-foreground px-7 py-3 font-semibold shadow-warm hover:scale-105 transition-transform duration-300">
              פגישת היכרות ללא תשלום
            </a>
            <a href="#services" className="rounded-full border-2 border-primary text-primary px-7 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              לשירותים שלי
            </a>
          </div>
        </div>

        <div className="relative animate-fade" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -inset-6 bg-gradient-soft rounded-[3rem] blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-warm animate-float">
            <img src={heroImg} alt="אישה בהריון מחבקת את בטנה" width={1536} height={1280} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
