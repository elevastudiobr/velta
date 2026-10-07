"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[#050608] py-24 md:py-40"
    >
      <div className="container">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              The experience
            </p>

            <h2 className="display-font max-w-4xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
              Mais que chegar.
              <br />
              <span className="text-white/25">É como você chega.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-md text-sm leading-7 text-white/45 md:pb-2 md:text-base"
          >
            A VELTA foi criada para transformar deslocamentos comuns em
            momentos que fazem parte do seu estilo de vida.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.08] md:mt-24"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/lifestyle/velta-experience.webp"
              alt="VELTA S1 em ambiente urbano"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Urban freedom
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/65 md:text-base">
                Liberdade para escolher seu próprio caminho.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 border-b border-white/[0.08] py-10 md:grid-cols-[1fr_auto] md:items-center md:py-12"
        >
          <div className="flex items-start gap-5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b7cff]" />

            <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
              Silenciosa quando você precisa. Ágil quando você quer.
              Sofisticada em todos os detalhes.
            </p>
          </div>

          <a
            href="#marca"
            className="group flex w-fit items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#7f9aff]"
          >
            Conheça a VELTA

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