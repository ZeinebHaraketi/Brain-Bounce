import AppExplanation from "@/components/AppExplanation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    <Header />
    <br />
    <main>
      <Hero />
      
      <br />
      <Services />
      <AppExplanation />
      <Pricing />
    </main>
    </>
  );
}
