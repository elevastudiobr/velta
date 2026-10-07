"use client";

import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Modelos", href: "#modelos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Experiência", href: "#experiencia" },
  { label: "A VELTA", href: "#marca" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050608]">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="display-font text-[22px] font-extrabold tracking-[-0.05em] text-white"
            >
              VELTA<span className="text-[#5b7cff]">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/30">
              Electric mobility,
              <br />
              elevated.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
            >
              Instagram
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
            >
              Contact
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-[10px] uppercase tracking-[0.18em] text-white/20 md:flex-row md:items-center md:justify-between">
          <p>© 2026 VELTA. All rights reserved.</p>

          <p>
            Designed & developed by{" "}
            <span className="text-white/40">Eleva Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}