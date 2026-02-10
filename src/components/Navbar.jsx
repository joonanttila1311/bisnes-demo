import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Etusivu",       href: "#" },
  { label: "Palvelut",      href: "#palvelut" },
  { label: "Hinnasto",      href: "#hinnasto" },
  { label: "Ota yhteyttä",  href: "#contact", cta: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("Etusivu");

  /* ── Scroll shadow trigger ─────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
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
      {/* ── Google Font import ─────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .navbar-root { font-family: 'DM Sans', sans-serif; }
        .navbar-logo  { font-family: 'Sora', sans-serif; }

        /* Animated underline for desktop links */
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #2563eb;
          border-radius: 9999px;
          transition: width 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-line:hover::after,
        .nav-link-line.is-active::after { width: 100%; }

        /* Mobile menu slide-down */
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
          animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Mobile link hover bar */
        .mobile-link {
          position: relative;
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover {
          color: #2563eb;
          background: #eff6ff;
          padding-left: 1.25rem;
          border-radius: 0.75rem;
        }
        .mobile-link.is-active {
          color: #2563eb;
          background: #dbeafe;
          padding-left: 1.25rem;
          border-radius: 0.75rem;
          font-weight: 600;
        }

        /* Hamburger icon spin */
        .icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .icon-wrap.open { transform: rotate(90deg); }
      `}</style>

      {/* ── Sticky Header ─────────────────────────────── */}
      <header
        className={`navbar-root fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white shadow-sm"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Päänavigaatio"
        >
          {/* ── Logo ──────────────────────────────────── */}
          <a
            href="#"
            className="navbar-logo flex items-center gap-2.5 group"
            aria-label="Yritys Oy — etusivu"
          >
            {/* Logomark icon */}
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-md shadow-blue-200 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2"  y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="10" y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                <rect x="2"  y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
              </svg>
            </span>

            {/* Wordmark */}
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Yritys
              <span className="text-blue-600">Oy</span>
            </span>
          </a>

          {/* ── Desktop Links ─────────────────────────── */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {NAV_LINKS.map(({ label, href, cta }) =>
              cta ? null : (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(label)}
                    className={`nav-link-line relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeLink === label
                        ? "is-active text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* ── Desktop CTA ───────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={() => handleNavClick("Ota yhteyttä")}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Ota yhteyttä
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>

          {/* ── Mobile Hamburger ──────────────────────── */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-200 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
          >
            <span className={`icon-wrap ${menuOpen ? "open" : ""}`}>
              {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </span>
          </button>
        </nav>

        {/* ── Mobile Dropdown Menu ──────────────────────── */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu-enter border-t border-gray-100 bg-white px-6 pb-6 pt-4 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobiilinavigaatio"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href, cta }) => (
                <li key={label}>
                  {cta ? (
                    <a
                      href={href}
                      onClick={() => handleNavClick(label)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-200 transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      {label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={href}
                      onClick={() => handleNavClick(label)}
                      className={`mobile-link block px-4 py-3 text-base transition-all duration-200 ${
                        activeLink === label ? "is-active" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Bottom brand strip */}
            <div className="mt-6 border-t border-gray-100 pt-4 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                  <rect x="2"  y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
                  <rect x="10" y="2"  width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                  <rect x="2"  y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
                </svg>
              </span>
              <span className="navbar-logo text-sm font-bold text-gray-400">
                Yritys<span className="text-blue-500">Oy</span>
              </span>
              <span className="ml-auto text-xs text-gray-400">© 2025</span>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile backdrop overlay ───────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}