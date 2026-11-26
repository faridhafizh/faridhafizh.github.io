export type Lang = "id" | "en"

export type NavItem = { id: string; label: string }

export type SiteContent = {
  meta: { title: string; description: string }
  nav: {
    items: NavItem[]
    downloadCv: string
    menu: string
    close: string
    theme: string
    language: string
    skipToContent: string
  }
  hero: {
    availability: string
    rolePrimary: string
    roleSecondary: string
    firstName: string
    lastName: string
    intro: string
    ctaPrimary: string
    ctaSecondary: string
    location: string
    email: string
    phone: string
    portraitAlt: string
    portraitBadgeTitle: string
    portraitBadgeText: string
    certificationsBadge: string
  }
  statsLabel: string
  stats: { value: string; label: string; note: string }[]
  about: {
    label: string
    title: string
    paragraphs: string[]
    cards: { title: string; value: string; note: string }[]
    languagesTitle: string
    languages: { name: string; level: string; value: number }[]
  }
  skills: {
    label: string
    title: string
    description: string
    groups: { title: string; description: string; items: string[] }[]
    footnote: string
  }
  experience: {
    label: string
    title: string
    description: string
    items: {
      role: string
      company: string
      type: string
      location: string
      period: string
      summary: string
      bullets: string[]
      stack: string[]
    }[]
  }
  projects: {
    label: string
    title: string
    description: string
    viewAll: string
    items: {
      name: string
      subtitle: string
      type: string
      summary: string
      highlights: string[]
      stack: string[]
    }[]
  }
  certifications: {
    label: string
    title: string
    description: string
    filters: { all: string; bnsp: string; dicoding: string }
    items: { name: string; issuer: string; year: string; category: "bnsp" | "dicoding" }[]
    note: string
  }
  education: {
    label: string
    title: string
    degree: string
    school: string
    period: string
    location: string
    gpaLabel: string
    gpa: string
    honors: string
    focusLabel: string
    focus: string[]
  }
  organizations: {
    label: string
    title: string
    items: { role: string; org: string; period: string; description: string }[]
  }
  contact: {
    label: string
    title: string
    description: string
    availability: string
    labels: { email: string; phone: string; location: string; github: string; linkedin: string }
    form: {
      title: string
      description: string
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      sending: string
      successTitle: string
      successBody: string
      sendAnother: string
      required: string
      invalidEmail: string
      errorTitle: string
      errorBody: string
      privacy: string
      mailtoNotice: string
    }
  }
  footer: {
    tagline: string
    navigation: string
    connect: string
    builtWith: string
    rights: string
    backToTop: string
  }
}

export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "education",
  "contact",
] as const

export const content: Record<Lang, SiteContent> = {
  id: {
    meta: {
      title: "Muhammad Farid Hafizh — Network & IT Support Engineer",
      description:
        "Portofolio Muhammad Farid Hafizh — Network & IT Support Engineer dan Fullstack & Automation Developer. Sertifikasi BNSP, infrastruktur jaringan, server Linux, Proxmox VE, dan pengembangan web.",
    },
    nav: {
      items: [
        { id: "about", label: "Tentang" },
        { id: "skills", label: "Keahlian" },
        { id: "experience", label: "Pengalaman" },
        { id: "projects", label: "Proyek" },
        { id: "certifications", label: "Sertifikasi" },
        { id: "contact", label: "Kontak" },
      ],
      downloadCv: "Unduh CV",
      menu: "Buka menu",
      close: "Tutup",
      theme: "Ganti tema",
      language: "Ganti bahasa",
      skipToContent: "Lewati ke konten",
    },
    hero: {
      availability: "Terbuka untuk freelance & proyek remote",
      rolePrimary: "Network & IT Support Engineer",
      roleSecondary: "Fullstack & Automation Developer",
      firstName: "Muhammad Farid",
      lastName: "Hafizh",
      intro:
        "Membangun jaringan yang andal dan perangkat lunak yang benar-benar dipakai. Lebih dari 3 tahun menangani infrastruktur, server Linux, dan otomasi — dari fiber optik sampai aplikasi web.",
      ctaPrimary: "Unduh CV",
      ctaSecondary: "Hubungi saya",
      location: "Pelaihari, Tanah Laut, Kalimantan Selatan",
      email: "faridhafizh.id@gmail.com",
      phone: "+62 813-4881-2407",
      portraitAlt: "Foto Muhammad Farid Hafizh",
      portraitBadgeTitle: "3+ tahun",
      portraitBadgeText: "Linux, Proxmox & Nextcloud",
      certificationsBadge: "7 sertifikasi profesional",
    },
    statsLabel: "Ringkasan singkat",
    stats: [
      { value: "3,51", label: "IPK / 4,00", note: "Cum Laude" },
      { value: "7", label: "Sertifikasi", note: "4 BNSP · 3 Dicoding" },
      { value: "4", label: "Pengalaman kerja", note: "Kontrak & magang" },
      { value: "4", label: "Proyek teknis", note: "IoT, web, CLI, homelab" },
    ],
    about: {
      label: "Tentang",
      title:
        "Infrastruktur yang rapi, perangkat lunak yang menyelesaikan masalah nyata.",
      paragraphs: [
        "Lulusan D4 Teknologi Rekayasa Komputer Jaringan, Politeknik Negeri Tanah Laut, dengan IPK 3,51 (Cum Laude). Saya bekerja di persimpangan dua dunia: jaringan dan pengembangan perangkat lunak — memasang dan menstabilkan koneksi di lapangan, lalu membangun tool yang membuat pekerjaan itu lebih cepat dan konsisten.",
        "Pengalaman saya mencakup instalasi dan troubleshooting fiber optik serta LAN, konfigurasi MikroTik dan Cisco, pemasangan NVR dan CCTV, hingga administrasi server Linux dan virtualisasi Proxmox VE. Di sisi pengembangan, saya menulis Python, Rust, dan TypeScript untuk automation tool, CLI, dan aplikasi web fullstack. Terbuka untuk posisi onsite maupun remote.",
      ],
      cards: [
        { title: "Lokasi", value: "Tanah Laut, Kalimantan Selatan", note: "Onsite & remote" },
        { title: "Pendidikan", value: "D4 Teknologi Rekayasa Komputer Jaringan", note: "IPK 3,51 · Cum Laude" },
        { title: "Sertifikasi", value: "4× BNSP + 3× Dicoding", note: "Network & cloud" },
        { title: "Fokus", value: "Network infrastructure & automation", note: "Sejak 2021" },
      ],
      languagesTitle: "Bahasa",
      languages: [
        { name: "Indonesia", level: "Native", value: 100 },
        { name: "Inggris", level: "Menengah", value: 65 },
        { name: "Rusia", level: "Dasar", value: 25 },
      ],
    },
    skills: {
      label: "Keahlian",
      title: "Kompetensi teknis yang teruji di lapangan.",
      description:
        "Bukan sekadar daftar alat — ini yang saya pakai untuk memasang, memperbaiki, dan mengotomasi sistem setiap hari.",
      groups: [
        {
          title: "Jaringan & Infrastruktur",
          description: "Dari terminasi fiber sampai koordinasi NOC.",
          items: [
            "Fiber optik",
            "LAN & wireless",
            "MikroTik",
            "Cisco routing & switching",
            "Load balancing",
            "TCP/IP",
            "CCTV & NVR",
            "Koordinasi NOC",
          ],
        },
        {
          title: "Sistem & Virtualisasi",
          description: "Server yang tetap hidup saat dibutuhkan.",
          items: ["Linux server", "Windows Server", "Proxmox VE", "Nextcloud", "SSH", "AnyDesk"],
        },
        {
          title: "Pemrograman",
          description: "Tool kecil yang menghilangkan pekerjaan berulang.",
          items: ["Python", "Rust", "TypeScript", "CLI tools", "Automation", "Fullstack web"],
        },
        {
          title: "Cloud & Tools",
          description: "Deploy, kolaborasi, dan dokumentasi.",
          items: ["Supabase", "Vercel", "Git", "GitHub", "AWS (dasar)"],
        },
        {
          title: "IoT & Embedded",
          description: "Komunikasi di tempat sinyal seluler tidak sampai.",
          items: ["Meshtastic", "LoRa", "Sensor monitoring", "Mesh networking"],
        },
        {
          title: "Cara kerja",
          description: "Kebiasaan yang membuat hasil bisa diandalkan.",
          items: ["Troubleshooting sistematis", "Dokumentasi teknis", "Remote support", "Koordinasi tim"],
        },
      ],
      footnote: "Terbiasa bekerja mandiri di lapangan maupun berkoordinasi dengan tim NOC dan tim teknis pusat.",
    },
    experience: {
      label: "Pengalaman",
      title: "Jejak kerja dari desa, gardu induk, sampai jaringan pelanggan.",
      description:
        "Empat peran dengan tanggung jawab yang makin besar: dari hotspot balai desa hingga jaringan fiber optik pelanggan.",
      items: [
        {
          role: "Onsite Engineer",
          company: "PT Fibernet Indonesia",
          type: "Kontrak",
          location: "Tanah Laut, Kalimantan Selatan",
          period: "Sep 2025 — Nov 2025",
          summary:
            "Menjaga kualitas layanan internet pelanggan melalui instalasi, konfigurasi, dan pemulihan jaringan di lapangan.",
          bullets: [
            "Melakukan instalasi, terminasi, konfigurasi, dan pemeliharaan jaringan fiber optik serta kabel LAN di lokasi pelanggan sesuai standar teknis perusahaan.",
            "Mengonfigurasi dan mengoptimalkan router pelanggan untuk menjaga stabilitas, keamanan, dan keandalan transmisi data.",
            "Mendiagnosis dan menyelesaikan gangguan konektivitas secara onsite, serta berkoordinasi dengan tim NOC untuk eskalasi dan pemulihan layanan.",
            "Menyusun laporan teknis pekerjaan lapangan sebagai dokumentasi operasional dan bahan evaluasi kualitas layanan.",
          ],
          stack: ["Fiber optik", "LAN", "Router", "NOC"],
        },
        {
          role: "IT Staff — Bidang Renev",
          company: "PT PLN (Persero) UPT Banjarbaru",
          type: "Magang",
          location: "Banjarbaru, Kalimantan Selatan",
          period: "Mar 2024 — Mei 2024",
          summary:
            "Mendukung keamanan fasilitas dan konektivitas kantor melalui CCTV, NVR, dan MikroTik.",
          bullets: [
            "Memasang dan mengonfigurasi sistem NVR dengan 4 unit kamera CCTV di titik strategis gedung UPT Banjarbaru untuk keamanan dan pemantauan fasilitas.",
            "Mengonfigurasi dan memperbaiki router MikroTik secara remote (WinBox, AnyDesk) untuk beberapa kantor gardu induk di Kalimantan Selatan guna meningkatkan performa konektivitas.",
            "Melakukan monitoring rutin dan troubleshooting jaringan internal kantor.",
          ],
          stack: ["CCTV", "NVR", "MikroTik", "WinBox", "AnyDesk"],
        },
        {
          role: "IT Support Technician",
          company: "Inspektorat Daerah Provinsi Kalimantan Selatan",
          type: "Magang",
          location: "Banjarbaru, Kalimantan Selatan",
          period: "Jan 2024 — Feb 2024",
          summary:
            "Dukungan TI harian untuk perangkat keras dan platform pemerintah.",
          bullets: [
            "Memberikan dukungan teknis TI harian serta pemeliharaan dan perbaikan perangkat keras (laptop, komputer desktop, printer).",
            "Melakukan instalasi perangkat keras baru dan mendukung input data pada platform web pemerintah dengan akurasi tinggi.",
          ],
          stack: ["Hardware", "IT support", "Data entry"],
        },
        {
          role: "Teknisi Jaringan — Project Intern",
          company: "Kantor Balai Desa Kait-Kait Baru",
          type: "Magang",
          location: "Tanah Laut, Kalimantan Selatan",
          period: "Okt 2022 — Nov 2022",
          summary:
            "Memperluas akses internet layanan masyarakat lewat hotspot dan load balancing.",
          bullets: [
            "Merancang dan memasang jaringan wireless (hotspot) di 3 titik area kantor balai desa untuk memperluas akses internet layanan masyarakat.",
            "Mengintegrasikan dua jalur internet (IndiHome dan IconNet/ICON+ PLN) serta mengonfigurasi load balancing pada router MikroTik untuk optimalisasi bandwidth dan keandalan koneksi.",
          ],
          stack: ["Wireless", "Hotspot", "MikroTik", "Load balancing"],
        },
      ],
    },
    projects: {
      label: "Proyek",
      title: "Proyek yang saya bangun untuk memecahkan masalah nyata.",
      description:
        "Mulai dari tugas akhir berbasis IoT hingga aplikasi web dan tool otomasi yang saya gunakan sendiri.",
      viewAll: "Lihat repositori di GitHub",
      items: [
        {
          name: "Sistem Monitoring Kebakaran Lahan Gambut",
          subtitle: "Tugas Akhir — Meshtastic, LoRa, IoT",
          type: "IoT",
          summary:
            "Sistem pemantauan dini kebakaran lahan gambut berbasis komunikasi mesh berdaya rendah untuk wilayah yang minim jangkauan seluler.",
          highlights: [
            "Merancang dan mengimplementasikan arsitektur sensor IoT dengan komunikasi mesh LoRa.",
            "Mentransmisikan data sensor secara real-time dari area tanpa jaringan seluler.",
            "Menggabungkan perangkat keras, firmware, dan alur monitoring dalam satu sistem.",
          ],
          stack: ["Meshtastic", "LoRa", "IoT", "Sensors"],
        },
        {
          name: "Aplikasi Web Fullstack & Manajemen Inventaris",
          subtitle: "app-stock-management · rosemaps",
          type: "Web",
          summary:
            "Aplikasi web fullstack untuk manajemen stok dan pemetaan, dengan backend Supabase dan deployment cloud melalui Vercel.",
          highlights: [
            "Membangun dan mengelola sistem manajemen stok berbasis TypeScript dan Python.",
            "Menerapkan backend Supabase untuk data dan autentikasi.",
            "Melakukan deployment dan pemeliharaan aplikasi melalui Vercel.",
          ],
          stack: ["TypeScript", "Python", "Supabase", "Vercel"],
        },
        {
          name: "CLI Automation Tools & Kontribusi Open-Source",
          subtitle: "OpenClaw",
          type: "Automation",
          summary:
            "Utilitas command-line untuk otomasi administrasi sistem dan jaringan, sekaligus kontribusi pada kerangka kerja agen open-source.",
          highlights: [
            "Mengembangkan utilitas CLI untuk mempercepat tugas administrasi sistem dan jaringan.",
            "Berkontribusi pada OpenClaw melalui pelaporan issue teknis.",
            "Memperbaiki manajemen eksekusi proses sistem pada codebase open-source.",
          ],
          stack: ["Python", "Rust", "TypeScript", "Linux"],
        },
        {
          name: "Infrastruktur Server & Virtualisasi",
          subtitle: "Homelab — Proxmox VE, Linux, Nextcloud",
          type: "Infrastructure",
          summary:
            "Server Linux dan hypervisor Proxmox yang saya kelola lebih dari 3 tahun untuk layanan cloud mandiri serta pengujian topologi jaringan.",
          highlights: [
            "Mengelola hypervisor Proxmox VE dan beberapa server Linux dalam produksi pribadi.",
            "Menjalankan layanan cloud mandiri Nextcloud untuk penyimpanan dan kolaborasi.",
            "Mensimulasikan dan menguji topologi jaringan sebelum diterapkan di lapangan.",
          ],
          stack: ["Proxmox VE", "Linux", "Nextcloud", "Networking"],
        },
      ],
    },
    certifications: {
      label: "Sertifikasi",
      title: "Kompetensi yang diverifikasi, bukan sekadar diklaim.",
      description:
        "Empat sertifikasi BNSP untuk kompetensi jaringan dan tiga sertifikasi Dicoding untuk cloud, Python, dan rekayasa prompt.",
      filters: { all: "Semua", bnsp: "BNSP", dicoding: "Dicoding" },
      items: [
        {
          name: "Belajar Dasar Cloud dan Gen AI di AWS",
          issuer: "Dicoding Indonesia / AWS",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Memulai Pemrograman dengan Python",
          issuer: "Dicoding Indonesia",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Prompt Engineering untuk Software Developer",
          issuer: "Dicoding Indonesia",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Network Designer",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          year: "2025",
          category: "bnsp",
        },
        {
          name: "Network Administrator Madya",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          year: "2024",
          category: "bnsp",
        },
        {
          name: "Junior Network Administrator",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          year: "2023",
          category: "bnsp",
        },
        {
          name: "Teknisi Muda Jaringan Komputer (TMJK)",
          issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
          year: "2022",
          category: "bnsp",
        },
      ],
      note: "Detail dan verifikasi sertifikasi tersedia melalui BNSP dan Dicoding atas permintaan.",
    },
    education: {
      label: "Pendidikan",
      title: "Fondasi teknis dari kampus terapan.",
      degree: "Sarjana Terapan (D4 / S.Tr.T.) Teknik Informatika",
      school: "Politeknik Negeri Tanah Laut",
      period: "Agu 2021 — Sep 2025",
      location: "Tanah Laut, Kalimantan Selatan",
      gpaLabel: "IPK",
      gpa: "3,51 / 4,00",
      honors: "Cum Laude",
      focusLabel: "Fokus studi",
      focus: [
        "Teknologi Rekayasa Komputer Jaringan",
        "Infrastruktur & keamanan jaringan",
        "Administrasi server",
        "Pengembangan aplikasi",
      ],
    },
    organizations: {
      label: "Organisasi",
      title: "Aktivitas di luar ruang kelas.",
      items: [
        {
          role: "Anggota Bidang Minat dan Bakat",
          org: "Himpunan Mahasiswa Program Studi (HIMA Prodi) TRKJ",
          period: "2021 — 2023",
          description:
            "Terlibat dalam kegiatan minat dan bakat mahasiswa program studi Teknologi Rekayasa Komputer Jaringan.",
        },
        {
          role: "Peserta Program Kewirausahaan Mahasiswa",
          org: "Wirausaha Merdeka (MBKM)",
          period: "2023",
          description:
            "Mengikuti program pengembangan kewirausahaan mahasiswa berbasis praktik.",
        },
        {
          role: "Peserta JuaraVibeCoding",
          org: "Program Pengembangan Aplikasi AI — Google AI Studio & Cloud Run",
          period: "2025",
          description:
            "Mengembangkan aplikasi berbasis AI menggunakan Google AI Studio dan Cloud Run.",
        },
      ],
    },
    contact: {
      label: "Kontak",
      title: "Punya pekerjaan atau proyek yang cocok?",
      description:
        "Saya terbuka untuk peran onsite maupun remote, serta proyek freelance di bidang infrastruktur jaringan, IT support, dan pengembangan aplikasi.",
      availability: "Biasanya membalas dalam 1–2 hari kerja.",
      labels: {
        email: "Email",
        phone: "Telepon",
        location: "Lokasi",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      form: {
        title: "Kirim pesan",
        description: "Ceritakan singkat kebutuhan Anda. Saya akan membalas lewat email.",
        name: "Nama",
        namePlaceholder: "Nama lengkap Anda",
        email: "Email",
        emailPlaceholder: "nama@perusahaan.com",
        subject: "Subjek",
        subjectPlaceholder: "Contoh: Proyek instalasi jaringan kantor",
        message: "Pesan",
        messagePlaceholder: "Tuliskan detail pekerjaan, lokasi, dan tenggat waktu…",
        submit: "Kirim pesan",
        sending: "Mengirim…",
        successTitle: "Pesan terkirim",
        successBody: "Terima kasih! Saya akan membalas ke email Anda secepatnya.",
        sendAnother: "Kirim pesan lain",
        required: "Wajib diisi",
        invalidEmail: "Format email tidak valid",
        errorTitle: "Pesan gagal terkirim",
        errorBody: "Silakan coba lagi atau kirim langsung ke faridhafizh.id@gmail.com.",
        privacy: "Informasi Anda hanya digunakan untuk membalas pesan ini.",
        mailtoNotice:
          "Formulir membuka aplikasi email Anda. Anda juga bisa menulis langsung ke faridhafizh.id@gmail.com.",
      },
    },
    footer: {
      tagline:
        "Network & IT Support Engineer dan Fullstack & Automation Developer di Kalimantan Selatan.",
      navigation: "Navigasi",
      connect: "Terhubung",
      builtWith: "Dibangun dengan React, shadcn/ui, dan Tailwind CSS.",
      rights: "Hak cipta dilindungi.",
      backToTop: "Kembali ke atas",
    },
  },

  en: {
    meta: {
      title: "Muhammad Farid Hafizh — Network & IT Support Engineer",
      description:
        "Portfolio of Muhammad Farid Hafizh — Network & IT Support Engineer and Fullstack & Automation Developer. BNSP certified, focused on network infrastructure, Linux servers, Proxmox VE, and web development.",
    },
    nav: {
      items: [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "certifications", label: "Certifications" },
        { id: "contact", label: "Contact" },
      ],
      downloadCv: "Download CV",
      menu: "Open menu",
      close: "Close",
      theme: "Toggle theme",
      language: "Switch language",
      skipToContent: "Skip to content",
    },
    hero: {
      availability: "Open to freelance & remote projects",
      rolePrimary: "Network & IT Support Engineer",
      roleSecondary: "Fullstack & Automation Developer",
      firstName: "Muhammad Farid",
      lastName: "Hafizh",
      intro:
        "Building reliable networks and software people actually use. More than 3 years across infrastructure, Linux servers, and automation — from fiber optic lines to fullstack web apps.",
      ctaPrimary: "Download CV",
      ctaSecondary: "Get in touch",
      location: "Pelaihari, Tanah Laut, South Kalimantan",
      email: "faridhafizh.id@gmail.com",
      phone: "+62 813-4881-2407",
      portraitAlt: "Portrait of Muhammad Farid Hafizh",
      portraitBadgeTitle: "3+ years",
      portraitBadgeText: "Linux, Proxmox & Nextcloud",
      certificationsBadge: "7 professional certifications",
    },
    statsLabel: "At a glance",
    stats: [
      { value: "3.51", label: "GPA / 4.00", note: "Cum Laude" },
      { value: "7", label: "Certifications", note: "4 BNSP · 3 Dicoding" },
      { value: "4", label: "Work experiences", note: "Contract & internships" },
      { value: "4", label: "Technical projects", note: "IoT, web, CLI, homelab" },
    ],
    about: {
      label: "About",
      title: "Tidy infrastructure, software that solves real problems.",
      paragraphs: [
        "I hold an Applied Bachelor's degree (D4) in Computer Network Engineering Technology from Politeknik Negeri Tanah Laut, graduating with a 3.51 GPA (Cum Laude). I work at the intersection of two worlds: networking and software development — stabilizing connections in the field, then building tools that make that work faster and more consistent.",
        "My experience covers fiber optic and LAN installation and troubleshooting, MikroTik and Cisco configuration, NVR and CCTV deployment, plus Linux server administration and Proxmox VE virtualization. On the development side, I write Python, Rust, and TypeScript for automation tools, CLIs, and fullstack web applications. Open to both onsite and remote roles.",
      ],
      cards: [
        { title: "Location", value: "Tanah Laut, South Kalimantan", note: "Onsite & remote" },
        { title: "Education", value: "D4 Computer Network Engineering", note: "GPA 3.51 · Cum Laude" },
        { title: "Certifications", value: "4× BNSP + 3× Dicoding", note: "Network & cloud" },
        { title: "Focus", value: "Network infrastructure & automation", note: "Since 2021" },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Indonesian", level: "Native", value: 100 },
        { name: "English", level: "Intermediate", value: 65 },
        { name: "Russian", level: "Basic", value: 25 },
      ],
    },
    skills: {
      label: "Skills",
      title: "Technical competence proven in the field.",
      description:
        "Not just a list of tools — this is what I use to install, repair, and automate systems every day.",
      groups: [
        {
          title: "Networking & Infrastructure",
          description: "From fiber termination to NOC coordination.",
          items: [
            "Fiber optic",
            "LAN & wireless",
            "MikroTik",
            "Cisco routing & switching",
            "Load balancing",
            "TCP/IP",
            "CCTV & NVR",
            "NOC coordination",
          ],
        },
        {
          title: "Systems & Virtualization",
          description: "Servers that stay up when it matters.",
          items: ["Linux server", "Windows Server", "Proxmox VE", "Nextcloud", "SSH", "AnyDesk"],
        },
        {
          title: "Programming",
          description: "Small tools that remove repetitive work.",
          items: ["Python", "Rust", "TypeScript", "CLI tools", "Automation", "Fullstack web"],
        },
        {
          title: "Cloud & Tools",
          description: "Deploy, collaborate, and document.",
          items: ["Supabase", "Vercel", "Git", "GitHub", "AWS (fundamentals)"],
        },
        {
          title: "IoT & Embedded",
          description: "Communication where cellular coverage ends.",
          items: ["Meshtastic", "LoRa", "Sensor monitoring", "Mesh networking"],
        },
        {
          title: "Ways of working",
          description: "Habits that make results dependable.",
          items: ["Systematic troubleshooting", "Technical documentation", "Remote support", "Team coordination"],
        },
      ],
      footnote:
        "Comfortable working independently in the field or coordinating with NOC and central technical teams.",
    },
    experience: {
      label: "Experience",
      title: "Work that spans village offices, substations, and customer networks.",
      description:
        "Four roles with growing responsibility: from a village hall hotspot to customer fiber optic networks.",
      items: [
        {
          role: "Onsite Engineer",
          company: "PT Fibernet Indonesia",
          type: "Contract",
          location: "Tanah Laut, South Kalimantan",
          period: "Sep 2025 — Nov 2025",
          summary:
            "Maintained customer internet quality through on-site installation, configuration, and network recovery.",
          bullets: [
            "Installed, terminated, configured, and maintained fiber optic and LAN cabling at customer sites according to company technical standards.",
            "Configured and optimized customer routers to maintain stability, security, and reliable data transmission.",
            "Diagnosed and resolved connectivity issues on site, coordinating with the NOC team for escalation and service restoration.",
            "Produced technical field reports as operational documentation and service quality evaluation material.",
          ],
          stack: ["Fiber optic", "LAN", "Routers", "NOC"],
        },
        {
          role: "IT Staff — Renev Division",
          company: "PT PLN (Persero) UPT Banjarbaru",
          type: "Internship",
          location: "Banjarbaru, South Kalimantan",
          period: "Mar 2024 — May 2024",
          summary:
            "Supported facility security and office connectivity through CCTV, NVR, and MikroTik.",
          bullets: [
            "Installed and configured an NVR system with 4 CCTV cameras at strategic points of the UPT Banjarbaru building for facility security and monitoring.",
            "Configured and repaired MikroTik routers remotely (WinBox, AnyDesk) for several substation offices across South Kalimantan to improve connectivity performance.",
            "Performed routine monitoring and troubleshooting of the office internal network.",
          ],
          stack: ["CCTV", "NVR", "MikroTik", "WinBox", "AnyDesk"],
        },
        {
          role: "IT Support Technician",
          company: "Regional Inspectorate of South Kalimantan Province",
          type: "Internship",
          location: "Banjarbaru, South Kalimantan",
          period: "Jan 2024 — Feb 2024",
          summary: "Daily IT support for hardware and government web platforms.",
          bullets: [
            "Provided daily IT technical support and maintained and repaired hardware (laptops, desktop computers, printers).",
            "Installed new hardware and supported data entry on government web platforms with high accuracy.",
          ],
          stack: ["Hardware", "IT support", "Data entry"],
        },
        {
          role: "Network Technician — Project Intern",
          company: "Kait-Kait Baru Village Hall Office",
          type: "Internship",
          location: "Tanah Laut, South Kalimantan",
          period: "Oct 2022 — Nov 2022",
          summary:
            "Expanded public internet access through hotspots and load balancing.",
          bullets: [
            "Designed and installed wireless hotspot networks at 3 points around the village hall to expand public internet access.",
            "Integrated two internet lines (IndiHome and IconNet/ICON+ PLN) and configured MikroTik load balancing to optimize bandwidth and connection reliability.",
          ],
          stack: ["Wireless", "Hotspot", "MikroTik", "Load balancing"],
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Projects built to solve real problems.",
      description:
        "From an IoT thesis to web applications and automation tools I use myself.",
      viewAll: "View repositories on GitHub",
      items: [
        {
          name: "Peatland Fire Monitoring System",
          subtitle: "Thesis — Meshtastic, LoRa, IoT",
          type: "IoT",
          summary:
            "An early-warning peatland fire monitoring system built on low-power mesh communication for areas with poor cellular coverage.",
          highlights: [
            "Designed and implemented an IoT sensor architecture with LoRa mesh communication.",
            "Transmitted real-time sensor data from areas without cellular networks.",
            "Combined hardware, firmware, and a monitoring workflow into one system.",
          ],
          stack: ["Meshtastic", "LoRa", "IoT", "Sensors"],
        },
        {
          name: "Fullstack Web Apps & Inventory Management",
          subtitle: "app-stock-management · rosemaps",
          type: "Web",
          summary:
            "Fullstack web applications for stock management and mapping, with a Supabase backend and cloud deployment on Vercel.",
          highlights: [
            "Built and maintained a stock management system using TypeScript and Python.",
            "Implemented Supabase as the backend for data and authentication.",
            "Deployed and maintained the applications through Vercel.",
          ],
          stack: ["TypeScript", "Python", "Supabase", "Vercel"],
        },
        {
          name: "CLI Automation Tools & Open-Source Contribution",
          subtitle: "OpenClaw",
          type: "Automation",
          summary:
            "Command-line utilities for system and network administration automation, plus contributions to an open-source agent framework.",
          highlights: [
            "Developed CLI utilities to speed up system and network administration tasks.",
            "Contributed to OpenClaw by reporting technical issues.",
            "Fixed system process execution management in the open-source codebase.",
          ],
          stack: ["Python", "Rust", "TypeScript", "Linux"],
        },
        {
          name: "Server Infrastructure & Virtualization",
          subtitle: "Homelab — Proxmox VE, Linux, Nextcloud",
          type: "Infrastructure",
          summary:
            "Linux servers and a Proxmox hypervisor managed for more than 3 years, running self-hosted cloud services and network topology testing.",
          highlights: [
            "Managed Proxmox VE and multiple Linux servers in a personal production environment.",
            "Ran self-hosted Nextcloud for storage and collaboration.",
            "Simulated and tested network topologies before deploying them in the field.",
          ],
          stack: ["Proxmox VE", "Linux", "Nextcloud", "Networking"],
        },
      ],
    },
    certifications: {
      label: "Certifications",
      title: "Verified competence, not just claims.",
      description:
        "Four BNSP certifications for network competence and three Dicoding certifications covering cloud, Python, and prompt engineering.",
      filters: { all: "All", bnsp: "BNSP", dicoding: "Dicoding" },
      items: [
        {
          name: "Cloud Fundamentals and Gen AI on AWS",
          issuer: "Dicoding Indonesia / AWS",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Getting Started with Python Programming",
          issuer: "Dicoding Indonesia",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Prompt Engineering for Software Developers",
          issuer: "Dicoding Indonesia",
          year: "2026",
          category: "dicoding",
        },
        {
          name: "Network Designer",
          issuer: "National Professional Certification Agency (BNSP)",
          year: "2025",
          category: "bnsp",
        },
        {
          name: "Network Administrator Madya",
          issuer: "National Professional Certification Agency (BNSP)",
          year: "2024",
          category: "bnsp",
        },
        {
          name: "Junior Network Administrator",
          issuer: "National Professional Certification Agency (BNSP)",
          year: "2023",
          category: "bnsp",
        },
        {
          name: "Teknisi Muda Jaringan Komputer (TMJK)",
          issuer: "National Professional Certification Agency (BNSP)",
          year: "2022",
          category: "bnsp",
        },
      ],
      note: "Certificate details and verification are available through BNSP and Dicoding on request.",
    },
    education: {
      label: "Education",
      title: "A technical foundation from an applied campus.",
      degree: "Applied Bachelor (D4 / S.Tr.T.) in Informatics Engineering",
      school: "Politeknik Negeri Tanah Laut",
      period: "Aug 2021 — Sep 2025",
      location: "Tanah Laut, South Kalimantan",
      gpaLabel: "GPA",
      gpa: "3.51 / 4.00",
      honors: "Cum Laude",
      focusLabel: "Study focus",
      focus: [
        "Computer Network Engineering Technology",
        "Network infrastructure & security",
        "Server administration",
        "Application development",
      ],
    },
    organizations: {
      label: "Organizations",
      title: "Activity beyond the classroom.",
      items: [
        {
          role: "Member, Interests & Talents Division",
          org: "Student Association (HIMA Prodi) TRKJ",
          period: "2021 — 2023",
          description:
            "Took part in student interest and talent activities within the Computer Network Engineering Technology program.",
        },
        {
          role: "Participant, Student Entrepreneurship Program",
          org: "Wirausaha Merdeka (MBKM)",
          period: "2023",
          description:
            "Completed a practice-based student entrepreneurship development program.",
        },
        {
          role: "Participant, JuaraVibeCoding",
          org: "AI App Development Program — Google AI Studio & Cloud Run",
          period: "2025",
          description:
            "Built an AI-powered application using Google AI Studio and Cloud Run.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Have a role or project that fits?",
      description:
        "I'm open to onsite and remote roles, as well as freelance work in network infrastructure, IT support, and application development.",
      availability: "I usually reply within 1–2 business days.",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      form: {
        title: "Send a message",
        description: "Briefly describe what you need. I'll reply by email.",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        subject: "Subject",
        subjectPlaceholder: "e.g. Office network installation project",
        message: "Message",
        messagePlaceholder: "Share the scope, location, and timeline…",
        submit: "Send message",
        sending: "Sending…",
        successTitle: "Message sent",
        successBody: "Thanks! I'll get back to your email as soon as I can.",
        sendAnother: "Send another message",
        required: "This field is required",
        invalidEmail: "Enter a valid email address",
        errorTitle: "Message failed to send",
        errorBody: "Please try again or email faridhafizh.id@gmail.com directly.",
        privacy: "Your details are only used to reply to this message.",
        mailtoNotice:
          "The form opens your email app. You can also write directly to faridhafizh.id@gmail.com.",
      },
    },
    footer: {
      tagline:
        "Network & IT Support Engineer and Fullstack & Automation Developer based in South Kalimantan.",
      navigation: "Navigation",
      connect: "Connect",
      builtWith: "Built with React, shadcn/ui, and Tailwind CSS.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
}
