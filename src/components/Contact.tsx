"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Formspree veya EmailJS ile entegre etmek için buraya ekleyin
    // Örnek: await fetch("https://formspree.io/f/FORM_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("sent");
  };

  return (
    <section id="iletisim" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-mono uppercase tracking-widest">
            Bana Ulaş
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            İletişim
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Bir proje fikriniz mi var? İş birliği yapalım!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Konuşalım 💬
              </h3>
              <p className="text-gray-400 leading-relaxed">
                İş fırsatları, proje iş birlikleri veya yazılım hakkında
                sohbet etmek için ulaşabilirsiniz. En kısa sürede dönüş
                yapacağım.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:mehmetkucuk3599@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors shrink-0">
                  <Mail size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">E-posta</p>
                  <p className="text-white text-sm group-hover:text-violet-300 transition-colors">
                    mehmetkucuk3599@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/MehmetKucukOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                  <p className="text-white text-sm group-hover:text-white/80 transition-colors">
                    MehmetKucukOfficial
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mehmetkucuk99/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors shrink-0 text-cyan-400">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                  <p className="text-white text-sm group-hover:text-cyan-300 transition-colors">
                    Mehmet Küçük
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-fuchsia-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Konum</p>
                  <p className="text-white text-sm">Türkiye</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div className="flex items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/5 p-14 text-center">
                <div>
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Mesajın iletildi!
                  </h3>
                  <p className="text-gray-400">En kısa sürede sana döneceğim.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@ornek.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Merhaba, bir proje fikrim var..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
                >
                  <Send size={16} />
                  {status === "sending" ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mehmet Küçük — Tüm hakları saklıdır.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Next.js & Tailwind CSS ile yapıldı
          </p>
        </motion.div>
      </div>
    </section>
  );
}
