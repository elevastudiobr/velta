"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Performance() {
  return (
    <section
      id="performance"
      className="relative overflow-hidden bg-[#050608] py-24 md:py-36"
    >
      <div className="container">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08]"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[16/8]">
            <Image
              src="/images/details/s1-performance.webp"
              alt="Performance da VELTA S1"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/5" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Conteúdo */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 md:px-12 lg:px-16">
                <div className="max-w-xl">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-[#7f9aff]"
                  >
                    Performance
                  </motion.p>

                  <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="display-font text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white"
                  >
                    Feita para
                    <br />
                    <span className="text-white/30">ir além.</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base"
                  >
                    Resposta instantânea, aceleração suave e potência
                    inteligente para transformar cada trajeto em uma
                    experiência mais fluida.
                  </motion.p>

                  <motion.a
                    href="#tecnologia"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="group mt-8 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    Conhecer tecnologia

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Métricas */}
        <div className="grid grid-cols-2 border-b border-white/[0.08] md:grid-cols-4">
          {[
            {
              value: "2.4",
              unit: "KW",
              label: "Potência máxima",
            },
            {
              value: "45",
              unit: "KM/H",
              label: "Velocidade máxima",
            },
            {
              value: "0–40",
              unit: "KM/H",
              label: "Aceleração ágil",
            },
            {
              value: "80",
              unit: "KM",
              label: "Autonomia",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`py-8 ${
                index !== 0 ? "border-l border-white/[0.08] pl-5 md:pl-8" : ""
              } ${
                index < 2 ? "border-b border-white/[0.08] md:border-b-0" : ""
              }`}
            >
              <p className="display-font text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                {item.value}
                <span className="ml-1 text-xs font-medium text-white/35">
                  {item.unit}
                </span>
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}