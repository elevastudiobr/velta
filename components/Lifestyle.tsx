"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const lifestylePoints = [
  {
    number: "01",
    title: "Na cidade",
    text: "Agilidade para atravessar a rotina com mais liberdade e menos complicação.",
  },
  {
    number: "02",
    title: "No seu ritmo",
    text: "Uma experiência silenciosa, intuitiva e confortável para acompanhar o seu dia.",
  },
  {
    number: "03",
    title: "Do seu jeito",
    text: "Design marcante e tecnologia pensada para fazer parte do seu estilo.",
  },
];

export default function Lifestyle() {
  return (
    <section
      id="lifestyle"
      className="relative overflow-hidden bg-[#050608] py-28 md:py-44"
    >
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              Lifestyle
            </p>

            <h2 className="display-font max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.87] tracking-[-0.07em] text-white">
              A cidade
              <br />
              <span className="text-white/25">do seu jeito.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-md text-sm leading-7 text-white/45 md:pb-2 md:text-base"
          >
            Porque mobilidade não é apenas sobre chegar ao destino. É sobre
            aproveitar o caminho, escolher seu ritmo e viver a cidade de uma
            forma diferente.
          </motion.p>
        </div>

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

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                VELTA lifestyle
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/70 md:text-base">
                Movimento que acompanha a sua vida.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/[0.08]">
          {lifestylePoints.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[80px_1fr_1fr] md:items-center md:py-10"
            >
              <span className="text-[10px] tracking-[0.2em] text-white/25">
                {item.number}
              </span>

              <h3 className="display-font text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                {item.title}
              </h3>

              <div className="flex items-end justify-between gap-6">
                <p className="max-w-md text-sm leading-6 text-white/40">
                  {item.text}
                </p>

                <ArrowUpRight
                  size={17}
                  className="hidden shrink-0 text-white/20 md:block"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="#contato"
            className="group flex items-center gap-3 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            Comece a se mover
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