import { Container } from "./ui";

export default function Logos() {
  return (
    <Container className="flex flex-wrap items-center justify-between gap-5 py-12 font-heading text-2xl font-bold text-gray-800/85">
      {["logitech", "YAHOO!", "monday", "in VISION", "Walmart ✳"].map((l) => <span key={l}>{l}</span>)}
    </Container>
  );
}