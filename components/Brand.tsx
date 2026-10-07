"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Brand() {
  return (
    <section
      id="marca"
      className="relative overflow-hidden bg-[#050608] py-28 md:py-48"
    >
      <div className="container">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
            The VELTA philosophy
          </p>

          <h2 className="display-font text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
            Não criamos apenas
            <br />
            <span className="text-white/25">veículos.</span>
          </h2>
        </motion.div>

        {/* Statement */}
        <div className="mt-20 grid gap-12 border-t border-white/[0.08] pt-12 md:mt-32 md:grid-cols-[0.8fr_1.2fr] md:pt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              01 / 03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="display-font max-w-3xl text-[clamp(1.8rem,3.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.05em] text-white">
              Criamos uma nova relação entre você, a cidade e a forma como
              escolhe se mover.
            </p>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              A VELTA nasceu de uma ideia simples: a mobilidade urbana pode
              ser eficiente sem ser comum. Cada detalhe é pensado para unir
              engenharia, design e uma experiência que faça sentido no mundo
              real.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24 grid border-t border-white/[0.08] md:mt-36 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Design",
              text: "Formas que têm propósito. Nada está aqui apenas para chamar atenção.",
            },
            {
              number: "02",
              title: "Tecnologia",
              text: "Soluções inteligentes desenvolvidas para desaparecer na experiência.",
            },
            {
              number: "03",
              title: "Liberdade",
              text: "Mais possibilidades para escolher como, quando e onde se mover.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`py-8 md:py-10 ${
                index !== 0
                  ? "border-t border-white/[0.08] md:border-l md:border-t-0 md:pl-10"
                  : "md:pr-10"
              }`}
            >
              <span className="text-[10px] tracking-[0.25em] text-white/25">
                {item.number}
              </span>

              <h3 className="display-font mt-8 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/35">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/[0.08] md:mt-36"
        >
          <div className="relative aspect-[16/7] w-full bg-[#0b0d10]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(91,124,255,0.12),transparent_35%)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="display-font px-6 text-center text-[clamp(3rem,8vw,9rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.06]">
                MOVE
                <br />
                DIFFERENT.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                VELTA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex justify-end"
        >
          <a
            href="#contato"
            className="group flex items-center gap-3 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Descubra a VELTA
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}