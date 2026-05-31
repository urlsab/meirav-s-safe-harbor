import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Audience } from "@/components/site/Audience";
import { Tips } from "@/components/site/Tips";
import { Testimonials } from "@/components/site/Testimonials";
import { Events } from "@/components/site/Events";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מירב ברוך – דולה, הכנה ללידה, עיבוד לידה והדרכת הנקה" },
      { name: "description", content: "ליווי דולה חם ומקצועי, קורסי הכנה ללידה, עיבוד לידה והדרכת הנקה. פגישת היכרות ללא תשלום." },
      { property: "og:title", content: "מירב ברוך – דולה והכנה ללידה" },
      { property: "og:description", content: "ליווי מעצים לכל אישה בדרכה להורות." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Audience />
        <Tips />
        <Testimonials />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
