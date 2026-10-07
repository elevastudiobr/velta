"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const models = [
  {
    name: "S1",
    category: "Urban",
    description:
      "A escolha para quem quer transformar a mobilidade urbana sem abrir mão do design.",
    image: "/images/models/s1/s1-showcase.webp",
    specs: "80 KM • 45 KM/H",
  },
  {
    name: "S2",
    category: "Performance",
    description:
      "Mais potência, mais presença e uma experiência criada para ir além.",
    image: "/images/models/s2/s2-showcase.webp",
    specs: "95 KM • 55 KM/H",
  },
  {
    name: "X1",
    category: "Flagship",
    description:
      "O ápice da experiência VELTA. Sofisticação, autonomia e performance.",
    image: "/images/models/x1/x1-showcase.webp",
    specs: "120 KM • 65 KM/H",
  },
];

export default function ModelShowcase() {
  return (
    <section
      id="modelos"
      className="relative overflow-hidden bg-[#050608] py-28 md:py-44"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[#5b7cff]">
              The lineup
            </p>

            <h2 className="display-font text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-white">
              Escolha seu
              <br />
              <span className="text-white/25">movimento.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40 md:pb-2 md:text-base">
            Três interpretações da mobilidade elétrica. Uma mesma obsessão por
            design, tecnologia e experiência.
          </p>
        </motion.div>

        {/* Models */}
        <div className="mt-16 border-t border-white/[0.08] md:mt-24">
          {models.map((model, index) => (
            <motion.article
              key={model.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-white/[0.08] py-10 md:py-14"
            >
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                {/* Information */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.25em] text-white/25">
                      0{index + 1}
                    </span>

                    <span className="h-px w-8 bg-[#5b7cff]/60" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                      {model.category}
                    </span>
                  </div>

                  <h3 className="display-font mt-7 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.8] tracking-[-0.08em] text-white">
                    VELTA
                    <span className="text-white/25"> {model.name}</span>
                  </h3>

                  <p className="mt-7 max-w-md text-sm leading-7 text-white/40 md:text-base">
                    {model.description}
                  </p>

                  <div className="mt-8 flex items-center gap-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {model.specs}
                    </span>

                    <a
                      href="#contato"
                      className="group/link flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#7f9aff]"
                    >
                      Explorar

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* Product image */}
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b0d10]">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={model.image}
                      alt={`VELTA ${model.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.025]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}