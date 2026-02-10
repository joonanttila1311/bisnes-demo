import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Oletuslinkit (Fallback)
const DEFAULT_LINKS = [
  { label: "Etusivu",       href: "#" },
  { label: "Palvelut",      href: "#services" },
  { label: "Hinnasto",      href: "#pricing" },
  { label: "Ota yhteyttä",  href: "#contact", cta: true },
];

export default function Navbar({ navLinks }) {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("Etusivu");

  // ── LOGIIKKA: Datan normalisointi ──
  const rawLinks = (navLinks && navLinks.length > 0) ? navLinks : DEFAULT_LINKS;

  const links = rawLinks.map(link => {
    const label = link.label || link.name;
    const isCta = link.cta || label === 'Ota yhteyttä' || label === 'Löydä meidät' || label === 'Pyydä tarjous';
    return { ...link, label, cta: isCta };
  });

  /* ── Efektit ─────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .navbar-root { font-family: 'DM Sans', sans-serif; }
        .navbar-logo  { font-family: 'Sora', sans-serif; }

        /* Animoitu alleviivaus käyttää nyt dynaamista brand-väriä */
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--brand-color);
          border-radius: 9999px;
          transition: width 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-line:hover::after,
        .nav-link-line.is-active::after { width: 100%; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
          animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Mobiililinkkien dynaamiset korostukset */
        .mobile-link:hover {
          color: var(--brand-color);
          background: color-mix(in srgb, var(--brand-color) 8%, transparent);
          padding-left: 1.25rem;
          border-radius: 0.75rem;
        }
        .mobile-link.is-active {
          color: var(--brand-color);
          background: color-mix(in srgb, var(--brand-color) 12%, transparent);
          padding-left: 1.25rem;
          border-radius: 0.75rem;
          font-weight: 600;
        }

        .icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .icon-wrap.open { transform: rotate(90deg); }
      `}</style>

      <header
        className={`navbar-root fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          
          {/* LOGO */}
          <a href="#" className="navbar-logo flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand shadow-md shadow-brand/20 transition-transform duration-300 group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2"  y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="10" y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                <rect x="2"  y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
              </svg>
            </span>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Yritys<span className="text-brand">Oy</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map(({ label, href, cta }) =>
              cta ? null : (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(label)}
                    className={`nav-link-line relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeLink === label ? "is-active text-brand" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {links.filter(l => l.cta).map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover focus:outline-none focus:ring-4 focus:ring-brand/30"
                >
                  {link.label}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden focus:ring-4 focus:ring-brand/10"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`icon-wrap ${menuOpen ? "open" : ""}`}>
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </span>
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu-enter border-t border-gray-100 bg-white px-6 pb-6 pt-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {links.map(({ label, href, cta }) => (
                <li key={label}>
                  {cta ? (
                    <a
                      href={href}
                      onClick={() => handleNavClick(label)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover"
                    >
                      {label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={href}
                      onClick={() => handleNavClick(label)}
                      className={`mobile-link block px-4 py-3 text-base transition-all ${
                        activeLink === label ? "is-active" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand">
                 <svg width="12" height="12" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1.5" fill="white"/></svg>
              </span>
              <span className="navbar-logo text-sm font-bold text-gray-400">Yritys<span className="text-brand">Oy</span></span>
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}