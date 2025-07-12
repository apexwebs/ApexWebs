"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + 100;
      const sectionIds = ["hero", "about", "services", "projects", "contact"];
      let found = false;
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section && fromTop >= section.offsetTop) {
          setActiveIdx(i);
          found = true;
        }
      }
      if (!found) setActiveIdx(-1);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, idx: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveIdx(idx);
    // Always go to home page for Home link
    if (href === "#hero") {
      if (pathname !== "/") {
        router.push("/");
        return;
      }
      // If already on home, scroll to top
      const el = document.getElementById("hero");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
      return;
    }
    // For other links, go to /#section if not on home
    if (pathname !== "/") {
      router.push(`/#${href.replace('#', '')}`);
      return;
    }
    // If on home page, scroll smoothly
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = href;
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeMenu = (e: MouseEvent) => {
      const menu = document.getElementById("apex-navbar-mobile-menu");
      const hamburger = document.getElementById("apex-navbar-hamburger");
      if (
        menu &&
        !menu.contains(e.target as Node) &&
        hamburger &&
        e.target !== hamburger
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [mobileMenuOpen]);

  return (
    <div style={{ position: "fixed", top: 18, left: 0, width: "100%", background: "rgba(0,0,0,0.4)", zIndex: 100, boxShadow: "0 2px 12px #0006", borderBottom: "1.5px solid #222", borderTopLeftRadius: 10, borderTopRightRadius: 10, transition: "background 0.2s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.7rem 2rem 0.7rem 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/images/ApexLogo.jpg" alt="Apex Webs Logo" width={38} height={38} style={{ borderRadius: "8px", background: "transparent" }} />
          <span style={{ fontWeight: 800, fontSize: "1.6rem", color: "#fff", letterSpacing: "-1px", fontFamily: "inherit" }}>Apex Webs</span>
        </div>
        {/* Desktop Nav */}
        <nav className="apex-navbar-links" style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}>
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={activeIdx === idx ? "active" : ""}
              style={{
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1.08rem",
                borderBottom: activeIdx === idx ? "2.5px solid #0ea5e9" : "2.5px solid transparent",
                borderRadius: 2,
                paddingBottom: 2,
                cursor: "pointer",
                background: activeIdx === idx ? "rgba(14,165,233,0.07)" : undefined,
                transition: "color 0.3s, border-bottom 0.3s, background 0.3s",
              }}
              onClick={handleNavClick(link.href, idx)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Hamburger for mobile */}
        <div
          className="apex-navbar-hamburger"
          id="apex-navbar-hamburger"
          style={{ display: "none", cursor: "pointer", marginLeft: "auto", zIndex: 1001 }}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span style={{ display: "block", width: 28, height: 4, background: "#fff", borderRadius: 2, margin: "6px 0" }}></span>
          <span style={{ display: "block", width: 28, height: 4, background: "#fff", borderRadius: 2, margin: "6px 0" }}></span>
          <span style={{ display: "block", width: 28, height: 4, background: "#fff", borderRadius: 2, margin: "6px 0" }}></span>
        </div>
        {/* Mobile Menu */}
        <nav
          id="apex-navbar-mobile-menu"
          className="apex-navbar-mobile-menu"
          style={{
            display: mobileMenuOpen ? "flex" : "none",
            position: "fixed",
            top: 62,
            right: 12,
            background: "rgba(0,0,0,0.97)",
            borderRadius: 14,
            boxShadow: "0 8px 32px #2228",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1.3rem 1.7rem",
            zIndex: 2000,
            minWidth: 180,
            maxWidth: "90vw",
            transition: "display 0.2s",
          }}
        >
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: "1.08rem", marginBottom: idx === NAV_LINKS.length - 1 ? 0 : 12, background: activeIdx === idx ? "rgba(14,165,233,0.07)" : undefined, borderRadius: 2, borderBottom: activeIdx === idx ? "2.5px solid #0ea5e9" : "2.5px solid transparent", transition: "color 0.3s, border-bottom 0.3s, background 0.3s" }}
              className={activeIdx === idx ? "active" : ""}
              onClick={handleNavClick(link.href, idx)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <style>{`
          @media (max-width: 900px) {
            .apex-navbar-links {
              display: none !important;
            }
            .apex-navbar-hamburger {
              display: block !important;
            }
          }
          @media (min-width: 901px) {
            .apex-navbar-mobile-menu {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
