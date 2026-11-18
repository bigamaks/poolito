"use client";
import { useState } from "react";
import { Container, Logo } from "./ui";

const links = [
  ["Home", "#"], ["About Us", "#about"], ["Service", "#services"],
  ["Blog", "#blog"], ["Pages", "#"], ["Contact", "#footer"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-dark py-2 text-[13px] text-white">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <span>✉ example@example.com &nbsp;|&nbsp; 🕒 Tuesday - Saturday 8:00 Am - 5:00 Pm</span>
          <div className="flex items-center gap-2">
            Follow Us On :
            {["f", "in", "ig"].map((s) => (
              <a key={s} href="#" className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[11px] font-bold">{s}</a>
            ))}
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Container className="flex items-center justify-between gap-5 py-3.5">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href], i) => (
              <a key={label} href={href}
                className={`font-heading text-[13px] font-semibold uppercase hover:text-brand ${i === 0 ? "text-brand" : "text-dark"}`}>
                {label}
              </a>
            ))}
            <span>🔍</span>
          </nav>
          <div className="hidden items-center gap-2.5 border-l border-gray-300 pl-5 lg:flex">
            <i className="grid h-[46px] w-[46px] place-items-center rounded-full bg-brand not-italic text-white">✆</i>
            <div>
              <small className="block text-xs font-semibold text-brand">Call Helpline</small>
              <b className="font-heading text-[15px]">+9 555 888 999</b>
            </div>
          </div>
          <button className="text-2xl lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </Container>

        {open && (
          <nav className="flex flex-col gap-3 border-t bg-white px-6 py-4 lg:hidden">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}
                className="font-heading text-sm font-semibold uppercase text-dark">{label}</a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}