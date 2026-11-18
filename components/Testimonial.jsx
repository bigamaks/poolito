import { Container, ph } from "./ui";

export default function Testimonial() {
  return (
    <section className="bg-[linear-gradient(#16a34a_50%,#fff_50%)] pb-5">
      <Container className="pt-14">
        <div className="grid items-center overflow-hidden rounded-md bg-dark p-8 text-white md:grid-cols-[1.2fr_.8fr] md:p-12">
          <div>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand font-heading text-2xl font-bold">“</div>
            <blockquote className="text-lg italic">
              “ Cleaning Maids Has A Location In New Orleans And We Set Very High Standard For Who Pro Cleaning Work With Us Services ”
            </blockquote>
            <div className="mt-4 text-[13px]">
              <b>— ABOUT CLEANING</b><br /><span className="text-brand">Founder, CEO</span>
            </div>
          </div>
          <img src={ph(300, 320, "Client", "0e4b42")} alt="" className="ml-auto mt-6 max-h-80 md:mt-0" />
        </div>
      </Container>
    </section>
  );
}