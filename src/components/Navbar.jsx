import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.jpg";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "News" },
  { to: "/trustees", label: "Trustees" },
  { to: "/governance", label: "Governance" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  /* ---------- scroll shadow ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- close drawer on route change ---------- */
  useEffect(() => setIsOpen(false), [location]);

  /* ---------- body scroll lock + ESC key ---------- */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* ---------- render ---------- */
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="The Outliers logo" width={100} height={100} />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">The Outliers</span>
              <span className="navbar__brand-motto">Non solus ambulabis...</span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={location.pathname === to ? "active" : ""}
            >
              {label}
            </Link>
          ))}
          <Link to="/donate" className="navbar__donate">
            Donate
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="navbar-drawer"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <aside
        id="navbar-drawer"
        ref={drawerRef}
        className={`navbar__drawer ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        tabIndex={-1}
      >
        <div className="navbar__drawer-header">
          <span className="sr-only">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="navbar__drawer-close"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="navbar__drawer-nav" aria-label="Mobile">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="navbar__donate"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </nav>
      </aside>
    </header>
  );
}