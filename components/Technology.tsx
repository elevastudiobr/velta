"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    number: "01",
    title: "Energia inteligente",
    description:
      "Bateria de alta capacidade desenvolvida para entregar autonomia consistente sem comprometer o desempenho.",
  },
  {
    number: "02",
    title: "Potência precisa",
    description:
      "Motor elétrico de 2.4 kW com resposta suave e entrega de potência pensada para o ambiente urbano.",
  },
  {
    number: "03",
    title: "Conexão intuitiva",
    description:
      "Um cockpit digital minimalista mantém as informações essenciais sempre ao alcance.",
  },
];

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-[#050608] py-28 md:py-44"
    >
      <div className="container">
        {/* Cabeçalho */}
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              Technology
            </p>

            <h2 className="display-font text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
              Tecnologia
              <br />
              <span className="text-white/25">que desaparece.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-lg text-sm leading-7 text-white/45 md:pb-2 md:text-base"
          >
            Tudo o que a VELTA faz por você foi pensado para parecer simples.
            Por trás dessa simplicidade existe engenharia, precisão e
            tecnologia trabalhando em conjunto.
          </motion.p>
        </div>

        {/* Imagem tecnológica */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.08] md:mt-24"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[16/7]">
            <Image
              src="/images/technology/s1-technology.webp"
              alt="Tecnologia da VELTA S1"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/80 via-[#050608]/20 to-transparent" />

            <div className="absolute left-6 top-6 md:left-10 md:top-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5b7cff]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/45">
                  VELTA Engineering
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="max-w-sm text-sm leading-6 text-white/55 md:text-base">
                Complexidade nos bastidores.
                <br />
                Simplicidade na experiência.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tecnologias */}
        <div className="mt-16 border-t border-white/[0.08]">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[80px_1fr_1fr] md:items-center md:py-10"
            >
              <span className="text-[10px] tracking-[0.2em] text-white/25">
                {technology.number}
              </span>

              <h3 className="display-font text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                {technology.title}
              </h3>

              <div className="flex items-end justify-between gap-6">
                <p className="max-w-md text-sm leading-6 text-white/40">
                  {technology.description}
                </p>

                <ArrowUpRight
                  size={17}
                  className="hidden shrink-0 text-white/20 md:block"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}