import { Container, Tag, Btn, Play, ph } from "./ui";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark/95 pb-32 pt-24 text-white">
      <span className="absolute left-[22%] top-[20%] h-[70px] w-17.5 animate-float rounded-full border-2 border-white/20" />
      <span className="absolute left-[55%] top-[60%] h-10 w-10 animate-float rounded-full border-2 border-white/20 [animation-delay:2s]" />

      <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Tag leftLine={false}>🧽 100% Satisfaction</Tag>
          <h1 className="my-3 text-[clamp(36px,5.5vw,62px)] font-bold leading-[1.1]">
            Pool &amp; <span className="text-brand">Cleaning</span> Solutions
          </h1>
          <p className="mb-7 text-[#d4e6e0]">Always Been So Professional In Handling Our Teams.</p>
          <div className="flex items-center">
            <Btn href="#quote">Get Pricing</Btn>
            <Play className="ml-2.5" />
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="absolute -bottom-10 h-95 w-[380px] rounded-full bg-gradient-to-br from-brand to-teal2 [clip-path:inset(35%_0_0_0)]" />
          {/* <img src={ph(360, 460, "Cleaner photo", "0e4b42")} alt="Cleaner" className="relative w-[320px]" /> */}
{/* <Image
  src="/images/cleaning-man.jpg"
  alt="Professional cleaner"
  width={360}
  height={460}
  className="relative w-[320px] h-auto object-contain"
/> */}

{/* <div className="relative bg-[#eaf3ed] min-h-[500px] overflow-hidden">

  <div className="absolute bottom-0 right-0">
    <Image
      src="/images/cleaning-lady.jpg"
      alt="Cleaner"
      width={400}
      height={500}
      className="object-contain"
    />
  </div>

</div> */}

<img
  src={ph(360, 460, "cleaning", "0e4b42")}
  alt="Cleaner"
  className="relative w-[320px] h-auto"
/>
  {/* src="/images/cleaning-lady.jpg" */}
        </div>
      </Container>

      <div className="wave absolute bottom-[-1px] left-0 h-[30px] w-full" />
    </section>
  );
}