export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  screenshot?: string;
  gradient: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Voice Project — Konuşmacı Tanıma",
    description:
      "Destek Vektör Makineleri (SVM) ile konuşmacı kimliği tespiti yapan, Google Speech Recognition API ile Türkçe konuşma tanıyan Python masaüstü uygulaması. Canlı mikrofon kaydı, MFCC ses özellik çıkarımı, ses görselleştirme ve F1/doğruluk skoru hesaplama özelliklerine sahip.",
    tech: ["Python", "scikit-learn", "librosa", "SVM", "MFCC", "Tkinter", "PyAudio"],
    github: "https://github.com/MehmetKucukOfficial/VoiceProject",
    screenshot: "/voiceproject.svg",
    gradient: "from-violet-600 to-fuchsia-600",
    category: "AI / ML",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "Node.js ve Express tabanlı kapsamlı hastane yönetim web uygulaması. Randevu planlama, doktor/çalışan yönetimi, eczane envanteri, maaş takibi ve Socket.io ile gerçek zamanlı mesajlaşma özelliklerini tek platformda sunar.",
    tech: ["Node.js", "Express.js", "MySQL", "EJS", "Socket.io", "Bootstrap", "Nodemailer"],
    github: "https://github.com/MehmetKucukOfficial/Hospital-Management",
    screenshot: "/hospital.svg",
    gradient: "from-blue-700 to-cyan-600",
    category: "Web",
  },
  {
    id: 3,
    title: "NewsApp — Android Haber Uygulaması",
    description:
      "NewsAPI entegrasyonuyla Türkiye gündem haberlerini listeleyen, anahtar kelimeyle arama yapılabilen ve favori makalelerin Room veritabanında saklandığı modern Android uygulaması. MVVM mimarisi, Kotlin Coroutines, Retrofit ve Glide kullanılarak geliştirildi.",
    tech: ["Kotlin", "Android", "MVVM", "Retrofit", "Room DB", "Glide", "NewsAPI"],
    github: "https://github.com/MehmetKucukOfficial/NewsApp",
    screenshot: "/newsapp.svg",
    gradient: "from-violet-700 to-indigo-600",
    category: "Mobil",
  },
  {
    id: 4,
    title: "PCAT — Fotoğraf Galeri Uygulaması",
    description:
      "Node.js ve MongoDB tabanlı fotoğraf katalog web uygulaması. Kullanıcılar fotoğraf yükleyebilir, başlık/açıklama ekleyebilir, düzenleyebilir ve silebilir. Video arka planlı hero section, sayfalandırmalı galeri ve responsive tasarım içerir.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "express-fileupload"],
    github: "https://github.com/MehmetKucukOfficial/PCAT",
    screenshot: "/pcat.svg",
    gradient: "from-green-700 to-emerald-600",
    category: "Web",
  },
  {
    id: 5,
    title: "JobFinder — İstihdam & Eğitim Platformu",
    description:
      "Kullanıcıların iş fırsatlarını ve eğitim kurslarını keşfedebildiği, güvenli kimlik doğrulama (bcrypt) ile korunan Node.js tabanlı web platformu. Kategori bazlı kurs yönetimi, oturum yönetimi ve slug tabanlı URL yapısı içerir.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "bcrypt", "express-session"],
    github: "https://github.com/MehmetKucukOfficial/JobFinder",
    screenshot: "/jobfinder.svg",
    gradient: "from-amber-600 to-orange-500",
    category: "Web",
  },
  {
    id: 6,
    title: "Fiverr — Freelance Marketplace",
    description:
      "Next.js 14 ve Node.js ile geliştirilen tam kapsamlı Fiverr.com klonu. Kullanıcı kimlik doğrulama, hizmet (gig) oluşturma/listeleme, sipariş yönetimi, değerlendirme sistemi ve alıcı-satıcı mesajlaşması; Stripe ödeme entegrasyonu ve Prisma ORM ile PostgreSQL veritabanı kullanılarak hayata geçirildi.",
    tech: ["Next.js 14", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe", "REST API"],
    github: "https://github.com/MehmetKucukOfficial/Fiverr",
    screenshot: "/fiverr.svg",
    gradient: "from-emerald-600 to-teal-500",
    category: "Full Stack",
  },
];
