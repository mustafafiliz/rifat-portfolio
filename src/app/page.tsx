import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="flex-1 pb-8 lg:pb-0">
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <Quote />
      <FAQ />
      <Contact />
    </main>
  );
}
