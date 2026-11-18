"use client";
import { Container, Logo, ph } from "./ui";

const links = ["Help Center", "Apartment Cleaning", "About Us", "One-Time Clean", "Contact Us", "Shield Glass", "Become A Cleaner", "Vacation Rental Cleaning", "Blog"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark pt-16 text-[#cfe3dc]">
      <Container>
        <div className="mb-12 rounded-xl bg-gradient-to-br from-brand to-teal2 px-5 py-10 text-center text-white">
          <div className="text-2xl">✨</div>
          <h3 className="text-2xl font-semibold">Subscribe Newsletter</h3>
          <p className="text-xs">Stay up to update with our latest offer</p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); e.target.reset(); }}
            className="mt-3.5 inline-flex max-w-full rounded-full border-2 border-white bg-white p-1">
            <input type="email" required placeholder="Enter Your Email Address..."
              className="w-60 max-w-full bg-transparent px-4 text-xs text-gray-700 outline-none" />
            <button className="rounded-full bg-brand px-6 py-2.5 font-heading text-xs font-bold uppercase">Subscribe</button>
          </form>
        </div>

        <div className="grid gap-10 pb-10 lg:grid-cols-[1.2fr_1.4fr_1fr]">
          <div className="text-xs">
            <div className="mb-3"><Logo light /></div>
            <p>Provide Detailed House Cleaning Sanitizing Services For Valued Clients.</p>
            <p className="mt-3 font-heading text-[15px] font-semibold text-white">
              ✆ +1 999 888 666<br /><small className="text-brand">Call 24/7</small>
            </p>
          </div>

          <div>
            <h4 className="mb-3.5 border-b border-white/15 pb-2 text-[15px] font-semibold text-white">Useful Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {links.map((l) => (
                <li key={l} className="before:mr-1 before:text-brand before:content-['›']">{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 border-b border-white/15 pb-2 text-[15px] font-semibold text-white">Instagram</h4>
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <img key={i} src={ph(80, 80, "", "9fb5ae")} alt="" className="aspect-square rounded-md border-2 border-brand object-cover" />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#082e29] py-3.5 text-xs">
        <Container className="flex flex-wrap items-center justify-between gap-2">
          <span>© Copyright 2025 - <span className="text-brand">Poolito</span>. All rights reserved</span>
          <span>VISA &nbsp; PayPal &nbsp; MasterCard &nbsp; AMEX</span>
        </Container>
      </div>
    </footer>
  );
}