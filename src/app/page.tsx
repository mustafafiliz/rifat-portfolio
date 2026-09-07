import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallBar, Rail } from "@/components/Chrome";
import { HomePage } from "@/components/HomePage";

export default function Page() {
  return (
    <>
      <a className="skip" href="#leistungen">
        Zum Inhalt springen
      </a>
      <Header />
      <HomePage />
      <Footer />
      <CallBar />
      <Rail />
    </>
  );
}
