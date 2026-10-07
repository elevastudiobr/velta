"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-32 md:py-48">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              The VELTA way
            </p>

            <h2 className="display-font max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
              Mobilidade não precisa ser apenas{" "}
              <span className="text-white/25">funcional.</span>
              <br />
              Ela pode ser uma{" "}
              <span className="text-white/25">experiência.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:pb-2"
          >
            <div className="mb-8 h-px w-12 bg-[#5b7cff]" />

            <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
              A VELTA combina design, tecnologia e performance para
              transformar cada deslocamento em algo mais simples,
              inteligente e prazeroso.
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/30">
              Criada para uma nova geração que não aceita escolher entre
              funcionalidade e estética.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-24 h-px origin-left bg-white/[0.08] md:mt-36"
        />
      </div>
    </section>
  );
}