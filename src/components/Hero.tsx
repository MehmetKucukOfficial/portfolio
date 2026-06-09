"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const titles = [
  "Full Stack Developer",
  "AI & NLP Enthusiast",
  "Mobile App Developer",
  "Software Engineer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)",
            animation: "orb-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 65%)",
            animation: "orb-pulse 6s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, #a21caf 0%, transparent 65%)",
            animation: "orb-pulse 10s ease-in-out infinite 4s",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
            👋 Merhaba, ben Mehmet
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-5"
        >
          <span className="text-white">Mehmet </span>
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
            Küçük
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 mb-8 flex items-center justify-center gap-2"
        >
          <span className="text-2xl md:text-3xl text-cyan-400 font-mono tracking-tight">
            {displayed}
          </span>
          <span
            className="w-0.5 h-8 bg-cyan-400 rounded-full"
            style={{ animation: "orb-pulse 0.8s ease-in-out infinite" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Yazılım Mühendisliği lisans mezunu; web, masaüstü ve mobil uygulama
          geliştirme alanlarında dört yıllık deneyime sahip. Yapay zeka, doğal
          dil işleme ve makine öğrenimine odaklanan, SAP/PLM sistemleriyle
          çalışmış, sonuç odaklı geliştirici.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projeler"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-900/30"
          >
            Projelerimi Gör
          </a>
          <a
            href="#iletisim"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
          >
            İletişime Geç
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/MehmetKucukOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehmetkucuk99/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href="mailto:dilaraturgutt@gmail.com"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
          >
            <Mail size={19} />
          </a>
        </motion.div>
      </div>

      <a
        href="#projeler"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
        style={{ animation: "float 2.5s ease-in-out infinite" }}
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
