"use client";
import { useState } from "react";
import { Container, Tag, Btn, Play, ph } from "./ui";
import Image from "next/image";

const tabs = ["Mission", "Service", "Vision"];
const checks = ["One-Off Thorough Deep Clean", "Schedule A Cleaning Time", "Trained Professionals", "Choose Synergy The Maids"];

export default function About() {
  const [tab, setTab] = useState("Mission");
  return (
    <section id="about" className="bg-white py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[460px] md:h-[520px]">
      <Image
  src="/images/bathroom.jpg"
  alt="Clean, modern bathroom"
  width={400}
  height={420}
  className="absolute left-0 top-0 h-4/5 w-[55%] border-[6px] border-brand object-cover"
/>

<Image
  src="/images/cleaning-lady.jpg"
  alt="Professional cleaner"
  width={420}
  height={420}
  className="absolute bottom-0 right-0 h-[78%] w-[60%] border-8 border-brand bg-white object-cover"
/>
          <span className="absolute left-[36%] top-[38%] z-10 grid h-[84px] w-[84px] place-items-center rounded-full border-4 border-dashed border-white bg-brand text-3xl text-white">🖌</span>
        <Image
  src="/images/cleaning-lady.jpg"
  alt="Professional cleaner"
  width={400}
  height={400}
  className="absolute bottom-0 right-0 h-[78%] w-[60%] border-8 border-brand bg-white object-cover"
/>
        </div>

        <div>
          <Tag leftLine>About Cleaning</Tag>
          <h2 className="my-2 mb-5 text-[clamp(28px,4vw,40px)] font-bold leading-tight">
            Our Cleaning <span className="text-brand">Agency</span> For Your City
          </h2>
          <p className="text-[13px] text-gray-500">
            When You Work Angeles House Cleaners Referal Agency Cleaning Breathe Easy Because Your Home Will Soon
          </p>

          <div className="my-4 flex gap-1.5">
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`rounded-md border px-4 py-1.5 font-heading text-[13px] font-semibold ${
                  tab === t ? "border-brand bg-brand text-white" : "border-gray-300 bg-white"
                }`}>
                {t}
              </button>
            ))}
          </div>

          <div className="my-5 grid items-center gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border-[3px] border-brand">
              <img src={ph(300, 170)} alt="" className="w-full" />
              <Play className="absolute inset-0 m-auto" />
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {checks.map((c) => (
                <li key={c} className="relative pl-5 before:absolute before:left-0 before:text-brand before:content-['✔']">{c}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Btn dark>Read More</Btn>
            <div className="flex items-center gap-2.5">
              <img src={ph(44, 44, "cleaning-lady", "9fb5ae")} alt="" className="h-11 w-11 rounded-full" />
              <div className="text-[13px]"><b>D.markwin</b><br /><small className="text-brand">Co-founder</small></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}