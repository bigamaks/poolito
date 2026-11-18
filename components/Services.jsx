import { Container, Tag, ph } from "./ui";

const services = [
  { icon: "🏢", title: "Apartment Cleaning", text: "Apartment Cleaners Because Your Home Will Soon" },
  { icon: "🧴", title: "Medical Facilities", text: "House Cleaners Because Start Your Home Will Soon" },
  { icon: "🧹", title: "Spring Cleaning", text: "House Cleaners Because Start Your Home Will Soon" },
];

export default function Services() {
  return (
    <section id="services" className="bg-dark pb-28 pt-24 text-white">
      <Container className="text-center">
        <Tag>Cleaning Service</Tag>
        <h2 className="mt-2 text-[clamp(28px,4vw,40px)] font-bold leading-tight">
          Best IN Class Cleaning<br />Services
        </h2>

        <div className="mt-20 grid gap-7 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title}
              className="group relative mt-14 rounded-b-[40px] border-t-4 border-brand bg-white px-6 pb-7 pt-24 text-gray-800 transition hover:-translate-y-2 md:mt-0">
              <img src={ph(110, 110, "", "dfe9e5", "555555")} alt=""
                className="absolute -top-14 left-1/2 h-[110px] w-[110px] -translate-x-1/2 rounded-full border-4 border-white object-cover" />
              <span className="absolute left-1/2 top-9 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-[3px] border-white bg-brand text-sm text-white">{s.icon}</span>
              <h3 className="text-base font-semibold group-hover:text-brand">{s.title}</h3>
              <p className="mb-3.5 mt-1.5 text-[13px] text-gray-500">{s.text}</p>
              <span className="inline-grid h-[26px] w-[26px] place-items-center rounded-full bg-brand text-xs text-white">→</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}