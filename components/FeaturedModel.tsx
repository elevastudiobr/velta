"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedModel() {
  return (
    <section
      id="modelos"
      className="relative overflow-hidden bg-[#050608] py-24 md:py-36"
    >
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              Featured model
            </p>

            <h2 className="display-font text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.85] tracking-[-0.07em] text-white">
              VELTA S1
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/40 md:pb-2">
            Performance urbana, design refinado e liberdade para ir além do
            caminho habitual.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0b0d10]"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/models/s1/s1-featured.webp"
              alt="VELTA S1"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                    Urban performance
                  </p>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/65 md:text-base">
                    Uma nova forma de atravessar a cidade. Mais silenciosa,
                    mais inteligente, mais VELTA.
                  </p>
                </div>

                <a
                  href="#performance"
                  className="group/button flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
                >
                  Explorar modelo

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Especificações */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 border-b border-white/[0.08] md:grid-cols-4"
        >
          <div className="border-r border-white/[0.08] py-7 pr-5 md:py-10 md:pr-8">
            <p className="display-font text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              80
              <span className="ml-1 text-xs font-medium text-white/35">
                KM
              </span>
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Autonomia
            </p>
          </div>

          <div className="border-b border-white/[0.08] py-7 pl-5 md:border-b-0 md:border-r md:py-10 md:pl-8">
            <p className="display-font text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              45
              <span className="ml-1 text-xs font-medium text-white/35">
                KM/H
              </span>
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Velocidade
            </p>
          </div>

          <div className="border-r border-white/[0.08] py-7 pr-5 md:py-10 md:pl-8">
            <p className="display-font text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              2.4
              <span className="ml-1 text-xs font-medium text-white/35">
                KW
              </span>
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Potência
            </p>
          </div>

          <div className="py-7 pl-5 md:py-10 md:pl-8">
            <p className="display-font text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              4.2
              <span className="ml-1 text-xs font-medium text-white/35">
                H
              </span>
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Carga
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}