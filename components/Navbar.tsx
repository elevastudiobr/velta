"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Modelos", href: "#modelos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Experiência", href: "#experiencia" },
  { label: "A VELTA", href: "#marca" },
];

const whatsappUrl =
  "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20conhecer%20a%20VELTA.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      24;

    window.history.pushState(null, "", href);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(href);
    setMenuOpen(false);
  };

  const handleHome = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    window.history.pushState(null, "", "#");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveSection("");
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#050608]/65 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="relative flex h-[76px] items-center justify-between md:h-[82px]">

          {/* LOGO */}
          <a
            href="#"
            onClick={handleHome}
            className="relative z-10 flex items-center"
            aria-label="VELTA — início"
          >
            <Image
              src="/images/logo/velta-logo.png"
              alt="VELTA"
              width={120}
              height={36}
              priority
              className="h-auto w-[92px] object-contain md:w-[108px]"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(event, item.href)
                  }
                  className={`group relative py-3 font-[var(--font-inter)] text-[12px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#7f9aff] transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden h-[38px] w-[154px] items-center rounded-full border border-white/[0.13] bg-white/[0.065] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.22] hover:bg-white/[0.11] md:flex"
          >
            {/* TEXTO */}
            <span className="absolute left-[19px] top-1/2 -translate-y-1/2 whitespace-nowrap font-[var(--font-inter)] text-[10px] font-medium tracking-[-0.01em] text-white/75 transition-colors duration-300 group-hover:text-white">
              Fale com a VELTA
            </span>

            {/* ÍCONE */}
            <span className="absolute right-[4px] top-1/2 flex h-[29px] w-[29px] -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.08] text-white/75 transition-all duration-500 group-hover:bg-white group-hover:text-[#050608]">
              <ArrowUpRight
                size={13}
                strokeWidth={1.8}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Fechar menu" : "Abrir menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] text-white backdrop-blur-md transition-colors hover:bg-white/[0.08] md:hidden"
          >
            {menuOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            menuOpen
              ? "max-h-[420px] pb-4 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/[0.08] bg-[#080a0d]/95 p-2 backdrop-blur-2xl">

            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) =>
                    handleNavigation(event, item.href)
                  }
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 font-[var(--font-inter)] text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5b7cff]" />
                  )}
                </a>
              );
            })}

            {/* MOBILE CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="group relative mt-2 flex h-[50px] items-center rounded-2xl border border-white/[0.10] bg-white/[0.06] px-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.10]"
            >
              <span className="absolute inset-0 flex items-center justify-center pr-8 font-[var(--font-inter)] text-[12px] font-medium tracking-[-0.01em] text-white/75 transition-colors group-hover:text-white">
                Fale com a VELTA
              </span>

              <span className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.07] text-white/80 transition-all duration-300 group-hover:bg-white group-hover:text-[#050608]">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}