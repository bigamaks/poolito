"use client";
import { Container, Tag, Play } from "./ui";

const field = "w-full rounded bg-[#e9efec] p-3 text-[13px] text-gray-700 outline-none focus:ring-2 focus:ring-brand";

export default function QuoteForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Quote request sent!");
    e.target.reset();
  };

  return (
    <section id="quote" className="bg-dark2 py-24 text-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Tag leftLine={false}>Book Your Cleaning?</Tag>
          <h2 className="my-2 mb-5 text-[clamp(28px,4vw,40px)] font-bold leading-tight">
            Get Instant <span className="text-brand">Price for</span> Cleaning?
          </h2>
          <div className="mb-5 flex items-center gap-3 text-[13px]">
            <i className="grid h-10 w-10 place-items-center rounded-full bg-brand not-italic">🧾</i>
            <div><b>Need To Speak To Someone?</b><br />Call Us (877) 740-5530</div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
            <input className={field} placeholder="Your Name *" required />
            <input className={field} type="email" placeholder="Email *" required />
            <input className={field} placeholder="Phone Number" />
            <input className={field} placeholder="Zip Code" />
            <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
              <select className={field}><option>Type of service</option><option>Apartment</option><option>Spring</option></select>
              <select className={field}><option>Bed Rooms</option><option>1</option><option>2</option><option>3+</option></select>
              <select className={field}><option>Bathrooms</option><option>1</option><option>2</option><option>3+</option></select>
            </div>
            <button className="rounded bg-brand p-3.5 font-heading text-[13px] font-bold uppercase sm:col-span-2">
              See my instant quote
            </button>
          </form>
        </div>

        <div className="grid place-items-center text-center font-[cursive] text-xl italic">
          watch video
          <Play className="mt-3 !h-16 !w-16" />
        </div>
      </Container>
    </section>
  );
}