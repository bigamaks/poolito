import { Container, Tag, ph } from "./ui";

const posts = [
  { cat: "Bedroom", title: "Get Launches Cleaning room service" },
  { cat: "Apartment", title: "Cleaning services match your lifestyle" },
  { cat: "Bedroom", title: "Meet Your Geaux house cleaning pro" },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-soft pb-24 pt-16">
      <Container className="text-center">
        <Tag>Our Update Blog</Tag>
        <h2 className="mb-6 mt-2 text-[clamp(28px,4vw,40px)] font-bold">Updated Natest News</h2>

        <div className="grid gap-6 text-left md:grid-cols-3">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl bg-white p-3 shadow-[0_6px_20px_rgba(0,0,0,.05)]">
              <div className="relative">
                <img src={ph(400, 170, "Post", "dfe9e5", "555555")} alt="" className="h-[170px] w-full rounded-xl object-cover" />
                <span className="absolute bottom-3 left-0 rounded-r-md bg-dark px-3 py-1 font-heading text-[10px] font-semibold uppercase text-white">{p.cat}</span>
              </div>
              <div className="mb-1 mt-3 flex gap-3.5 text-[11px] text-gray-500">
                <span>📅 April 27, 2024</span><span>💬 0 Comments</span>
              </div>
              <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
              <a href="#" className="mt-3 flex items-center gap-2 font-heading text-xs font-semibold">
                <i className="grid h-[22px] w-[22px] place-items-center rounded-full bg-brand text-[10px] not-italic text-white">→</i>
                Read More
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}