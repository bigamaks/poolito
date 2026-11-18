import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Logos />
        <Services />
        <QuoteForm />
        <Team />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </>
  );
}