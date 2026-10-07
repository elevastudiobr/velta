"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050608] py-28 md:py-48"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b7cff]/[0.07] blur-[140px]" />

      <div className="container relative z-10">
        <div className="border-t border-white/[0.08] pt-16 md:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]"
          >
            Start moving
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display-font mt-7 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.8] tracking-[-0.085em] text-white"
          >
            Move
            <br />
            <span className="text-white/20">different.</span>
          </motion.h2>

          <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="max-w-md text-sm leading-7 text-white/40 md:text-base"
            >
              Descubra uma nova forma de se mover pela cidade. Conheça a linha
              VELTA e encontre o modelo que combina com você.
            </motion.p>

            <motion.a
              href="#modelos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Explorar modelos

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}