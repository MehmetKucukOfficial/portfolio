"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projeler" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-mono uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Projelerim
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Web, mobil, masaüstü ve yapay zeka alanlarında geliştirdiğim
            projelerden seçmeler.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-900/20"
            >
              {/* Screenshot / Placeholder */}
              <div
                className={`relative aspect-video bg-[#05050f] overflow-hidden`}
              >
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="absolute inset-0 bg-black/25" />
                    <span className="relative z-10 text-white/50 text-xs font-mono uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <span className="relative z-10 text-white/20 text-4xl font-bold">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={15} />
                    Kaynak Kod
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/MehmetKucukOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-violet-500/5 transition-all duration-200"
          >
            <GithubIcon size={18} />
            Tüm Projelerimi GitHub&apos;da Gör
          </a>
        </motion.div>
      </div>
    </section>
  );
}
