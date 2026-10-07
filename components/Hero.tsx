"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20VELTA.";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050608]">
      {/* FUNDO */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-s1.webp"
          alt="VELTA — mobilidade elétrica"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Escurecimento */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Gradiente lateral */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,8,0.94)_0%,rgba(5,6,8,0.62)_38%,rgba(5,6,8,0.10)_78%)]" />

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#050608_0%,rgba(5,6,8,0.35)_30%,transparent_62%)]" />

        {/* Atmosfera */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b7cff]/10 blur-[170px]" />
      </div>

      {/* CONTEÚDO */}
      <div className="container relative z-10 min-h-screen">
        <div className="flex min-h-screen items-center">
          <div className="w-full max-w-[760px] pb-8 pt-24 md:pb-16 md:pt-28">

            {/* TÍTULO */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display-font text-[clamp(4.5rem,10vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white"
            >
              VIVA O
              <br />
              <span className="text-white/30">FUTURO.</span>
            </motion.h1>

            {/* BLOCO INFERIOR */}
            <div className="mt-12 md:mt-14">

              {/* DESCRIÇÃO */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[470px] text-sm leading-7 text-white/55 md:text-base md:leading-7"
              >
                Mobilidade elétrica criada para transformar a forma como você
                se move pela cidade.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-16 flex flex-col gap-3 sm:flex-row"
              >
                {/* EXPLORAR MODELOS */}
                <a
                  href="#modelos"
                  className="group relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.18] bg-white/[0.09] px-7 font-[var(--font-inter)] text-[12px] font-medium tracking-[-0.01em] text-white backdrop-blur-xl transition-all duration-500 hover:border-white/[0.30] hover:bg-white/[0.15] sm:w-[172px]"
                >
                  <span>Explorar modelos</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="ml-3 text-white/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>

                {/* FALE COM A VELTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.13] bg-[#050608]/25 px-7 font-[var(--font-inter)] text-[12px] font-medium tracking-[-0.01em] text-white/75 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.25] hover:bg-[#050608]/40 hover:text-white sm:w-[172px]"
                >
                  <span>Fale com a VELTA</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="ml-3 text-white/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}