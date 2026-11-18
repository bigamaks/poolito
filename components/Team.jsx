"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Tag, ph } from "./ui";

const team = [
  { name: "Tonoy Rahomon", role: "Supervisor" },
  { name: "Rivan Islam", role: "Supervisor" },
  { name: "Erica Hanson", role: "Supervisor" },
];

const stats = [
  { icon: "✺", n: 35, suffix: "K", label: "Quality Services" },
  { icon: "👥", n: 12, suffix: "+", label: "Year Experience" },
  { icon: "🧹", n: 99, suffix: "%", label: "Success Rate" },
  { icon: "🏅", n: 100, suffix: "+", label: "Awards Winning" },
];

function Counter({ n, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let c = 0;
      const t = setInterval(() => {
        c = Math.min(n, c + Math.ceil(n / 40));
        setVal(c);
        if (c >= n) clearInterval(t);
      }, 30);
      io.disconnect();
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);

  return <b ref={ref} className="block font-heading text-[26px] leading-none">{val}{suffix}</b>;
}

export default function Team() {
  return (
    <section className="bg-white pt-24">
      <Container className="text-center">
        <Tag>Meet Our Team</Tag>
        <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-bold">We have a expert team</h2>

        <div className="mb-16 mt-10 grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name}>
              <div className="relative overflow-hidden rounded-2xl bg-dark">
                <img src={ph(400, 300, "Team")} alt={m.name} className="h-[260px] w-full object-cover" />
                <div className="absolute left-0 top-[30%] flex flex-col gap-2 rounded-r-lg bg-brand px-1.5 py-2 text-[11px] text-white">
                  <span>f</span><span>X</span><span>ig</span>
                </div>
              </div>
              <h4 className="mt-3.5 text-sm font-semibold uppercase">{m.name}</h4>
              <small className="font-semibold text-brand">{m.role}</small>
            </div>
          ))}
        </div>
      </Container>

      <div className="bg-brand py-6 text-white">
        <Container className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center justify-center gap-3.5">
              <i className="grid h-[54px] w-[54px] place-items-center rounded-full bg-dark not-italic">{s.icon}</i>
              <div>
                <Counter n={s.n} suffix={s.suffix} />
                <span className="text-[11px] uppercase">{s.label}</span>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}