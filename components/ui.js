export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-[min(1200px,92%)] ${className}`}>{children}</div>
);

export const Tag = ({ children, className = "", leftLine = true }) => (
  <span className={`inline-flex items-center gap-2.5 font-heading text-xs font-semibold uppercase tracking-widest text-brand ${className}`}>
    {leftLine && <i className="h-0.5 w-7 bg-brand" />}
    {children}
    <i className="h-0.5 w-7 bg-brand" />
  </span>
);

export const Btn = ({ href = "#", dark = false, children }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 font-heading text-[13px] font-semibold uppercase text-white ${
      dark ? "bg-dark" : "bg-gradient-to-r from-brand to-teal2"
    }`}
  >
    {children}
    <i className={`grid h-[34px] w-[34px] place-items-center rounded-full not-italic ${dark ? "bg-brand" : "bg-dark"}`}>→</i>
  </a>
);

export const Play = ({ className = "" }) => (
  <a href="#" className={`inline-grid h-[46px] w-[46px] place-items-center rounded-full bg-brand text-white shadow-[0_0_0_8px_rgba(22,163,74,.25)] ${className}`}>▶</a>
);

export const Logo = ({ light = false }) => (
  <a href="#" className={`flex items-center gap-2 font-heading text-3xl font-bold ${light ? "text-white" : "text-dark"}`}>
    <i className="grid h-[38px] w-[38px] place-items-center rounded-full bg-brand text-lg not-italic text-white">✦</i>
    Poolito
  </a>
);

export const ph = (w, h, text = "", bg = "0b3d36", fg = "ffffff") =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}${text ? `?text=${encodeURIComponent(text)}` : ""}`;