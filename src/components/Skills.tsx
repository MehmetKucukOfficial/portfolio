"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🖥️",
    color: "violet",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "cyan",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST API"],
  },
  {
    title: "AI / ML & NLP",
    icon: "🤖",
    color: "fuchsia",
    skills: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "spaCy", "Scikit-learn"],
  },
  {
    title: "Mobil",
    icon: "📱",
    color: "blue",
    skills: ["Flutter", "Dart", "Firebase", "React Native"],
  },
  {
    title: "Veritabanı",
    icon: "🗄️",
    color: "teal",
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
  },
  {
    title: "Araçlar & Kurumsal",
    icon: "🛠️",
    color: "violet",
    skills: ["Git", "Docker", "SAP / PLM", "Azure", "Linux", "Agile / Scrum"],
  },
];

const borderColors: Record<string, string> = {
  violet: "hover:border-violet-500/50",
  cyan: "hover:border-cyan-500/50",
  fuchsia: "hover:border-fuchsia-500/50",
  blue: "hover:border-blue-500/50",
  teal: "hover:border-teal-500/50",
};

export default function Skills() {
  return (
    <section id="yetenekler" className="py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, #0e7490 0%, transparent 60%)",
            opacity: 0.06,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Yetenekler
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            4 yıllık geliştirme sürecinde edindiğim teknik beceriler.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 ${borderColors[cat.color]}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-white/25 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
          {[
            { value: "4+", label: "Yıl Deneyim" },
            { value: "20+", label: "Tamamlanan Proje" },
            { value: "3", label: "Platform (Web/Mobil/Masaüstü)" },
            { value: "∞", label: "Öğrenme Azmi" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
