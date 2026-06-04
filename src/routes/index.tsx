import { createFileRoute } from "@tanstack/react-router";
import { BackgroundDecor } from "@/components/site/BackgroundDecor";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Audience } from "@/components/site/Audience";
import { Tips } from "@/components/site/Tips";
import { Testimonials } from "@/components/site/Testimonials";
import { Events } from "@/components/site/Events";
import { Certifications } from "@/components/site/Certifications";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מירב ברוך דולה | ליווי דולה, הכנה ללידה והנקה" },
      { name: "description", content: "מירב ברוך דולה: ליווי דולה חם ומקצועי, קורסי הכנה ללידה, עיבוד לידה והדרכת הנקה. פגישת היכרות ללא תשלום." },
      { name: "keywords", content: "מירב ברוך, מירב ברוך דולה, דולה, קורס הכנה ללידה, עיבוד לידה, הדרכת הנקה" },
      { property: "og:title", content: "מירב ברוך דולה – ליווי והכנה ללידה" },
      { property: "og:description", content: "ליווי מעצים לכל אישה בדרכה להורות." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Audience />
        <Tips />
        <Testimonials />
        <Events />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
