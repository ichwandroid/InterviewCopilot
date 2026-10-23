(function () {
  "use strict";

  /* ---------- Data sekolah bawaan ---------- */
  var KEY = "sas-school-v1";
  var DEFAULT_SCHOOL = {
    v: 3,
    name: "Sekolah Anak Saleh",
    level: "Sekolah Dasar",
    address: "Jl. Arumba No. 31, Tunggulwulung, Lowokwaru, Malang",
    phone: "(0341) 487088",
    website: "www.sekolahanaksaleh.sch.id",
    youtube: "https://youtu.be/Wttuw8v2-ME",
    instagram: "https://www.instagram.com/sdanaksalehofficial/",
    instagramHandle: "@sdanaksalehofficial",
    founded: "2014",
    items: [
      {
        id: "i1",
        theme: "agama",
        title: "Unggul di bidang agama",
        detail:
          "Ulasan publik menyebut Sekolah Anak Saleh punya keunggulan di bidang agama.",
        verified: true,
        source: "Orami, SD Islam terbaik di Malang",
      },
      {
        id: "i2",
        theme: "akademik",
        title: "Prestasi pendidikan formal",
        detail:
          "Ulasan yang sama juga menyebut prestasi sekolah di pendidikan formal.",
        verified: true,
        source: "Orami, SD Islam terbaik di Malang",
      },
      {
        id: "i3",
        theme: "karakter",
        title: "Fokus membentuk karakter",
        detail:
          "Manajemen sekolah ini pernah dikaji dalam jurnal ilmiah tentang upaya menyiapkan peserta didik yang berkarakter.",
        verified: true,
        source: "Jurnal PRIMED, Universitas Ibrahimy Malang",
      },
      {
        id: "i4",
        theme: "rekomendasi",
        title: "Berdiri sejak 2014",
        detail:
          "Sudah lebih dari sepuluh tahun melayani keluarga di Malang.",
        verified: true,
        source: "Orami, SD Islam terbaik di Malang",
      },
      {
        id: "i5",
        theme: "lokasi",
        title: "Berlokasi di Lowokwaru",
        detail:
          "Alamat di Jl. Arumba No. 31, Tunggulwulung, Lowokwaru, Malang.",
        verified: true,
        source: "Orami, SD Islam terbaik di Malang",
      },
      {
        id: "i6",
        theme: "agama",
        title: "Sinkronisasi Pembiasaan Ibadah Harian",
        detail:
          "Di SD Anak Saleh, para siswa dibiasakan menjaga shalat fardhu tepat waktu, shalat dhuha, dan tadarus Al-Qur'an. Sekolah meminta komitmen orang tua untuk mengawal ibadah ini di rumah secara konsisten agar pembentukan karakter islami berjalan selaras.",
        verified: true,
        source: "Pedoman Pembiasaan Ibadah SD Anak Saleh",
      },
      {
        id: "i7",
        theme: "karakter",
        title: "Penegakan Adab & Anti-Bullying (Berkata Kasar)",
        detail:
          "Sekolah menerapkan aturan ketat mengenai adab: dilarang mengejek (bullying), berkelahi, dan berkata kasar/kotor. Orang tua mendukung dengan menyaring tontonan, game, atau pergaulan di rumah, serta mendukung penuh tindakan disiplin pembinaan dari sekolah.",
        verified: true,
        source: "Tata Tertib Penegakan Adab SD Anak Saleh",
      },
      {
        id: "i8",
        theme: "akademik",
        title: "Pembelajaran berjenjang",
        detail:
          "Kemampuan membaca, menulis, dan berhitung dipantau untuk setiap siswa.",
        verified: false,
        source: "",
      },
      {
        id: "i9",
        theme: "lingkungan",
        title: "Lingkungan Aman & Ramah Anak",
        detail:
          "Sekolah menjamin lingkungan yang aman, tertib, dan ramah anak dengan aturan ketat penanganan perundungan (anti-bullying) serta pengawasan aktif di setiap area sekolah.",
        verified: true,
        source: "Pedoman Sekolah Ramah Anak SD Anak Saleh",
      },
      {
        id: "i10",
        theme: "guru",
        title: "Guru pendamping",
        detail:
          "Guru kelas mengenal tiap anak dan mendampingi adaptasi di minggu-minggu awal.",
        verified: false,
        source: "",
      },
      {
        id: "i11",
        theme: "keterlibatan",
        title: "Saluran Resmi Saran dan Kritik",
        detail:
          "Sekolah terbuka terhadap masukan demi kemajuan bersama melalui saluran resmi: forum dialog resmi, kontak humas, atau janji temu formal dengan manajemen sekolah. Menghindari pergunjingan di grup WhatsApp umum demi mencegah kesalahpahaman.",
        verified: true,
        source: "Pedoman Komunikasi & Humas SD Anak Saleh",
      },
      {
        id: "i12",
        theme: "kegiatan",
        title: "Ekstrakurikuler",
        detail:
          "Pilihan kegiatan yang disesuaikan dengan minat dan bakat anak.",
        verified: false,
        source: "",
      },
      {
        id: "i13",
        theme: "komitmen",
        title: "Komitmen Bijak Bersosial Media",
        detail:
          "Sangat menghargai privasi dan nama baik seluruh warga sekolah. Jika terjadi kesalahpahaman, diselesaikan secara internal dan kekeluargaan. Orang tua berkomitmen tidak mengunggah (posting), mengeluhkan, atau memviralkan masalah sekolah ke media sosial.",
        verified: true,
        source: "Pedoman Kemitraan SD Anak Saleh",
      },
      {
        id: "i14",
        theme: "komitmen",
        title: "Etika Berpakaian (Dress Code) Antar/Jemput",
        detail:
          "Sebagai sekolah Islam, lingkungan sekolah adalah cerminan nilai syariat. Orang tua menjadi teladan dalam berpakaian: wali murid laki-laki berpakaian sopan, celana panjang, dan beralas kaki rapi; wali murid perempuan wajib menutup aurat sempurna dan mengenakan hijab/jilbab syar'i.",
        verified: true,
        source: "Tata Tertib Keteladanan SD Anak Saleh",
      },
      {
        id: "i15",
        theme: "komitmen",
        title: "Kedisiplinan Kehadiran dan Waktu Pagi",
        detail:
          "Keterlambatan sering dipengaruhi ritme pagi di rumah. Orang tua berkomitmen melatih kedisiplinan sejak bangun tidur agar tiba di sekolah tepat waktu sebelum bel berbunyi, sehingga anak tidak tertinggal pembiasaan pagi (zikir/dhuha bersama).",
        verified: true,
        source: "Tata Tertib Kehadiran SD Anak Saleh",
      },
      {
        id: "i16",
        theme: "komitmen",
        title: "Pembatasan Gadget (Gawai) dan Teknologi",
        detail:
          "Siswa dilarang membawa gadget ke sekolah kecuali instruksi guru untuk belajar. Orang tua wajib membatasi dan mengawasi gawai di rumah (misal aturan 'no gadget' magrib hingga isya) demi fokus belajar, kesehatan mata, dan jam istirahat anak.",
        verified: true,
        source: "Tata Tertib Penggunaan Gawai SD Anak Saleh",
      },
      {
        id: "i17",
        theme: "rekomendasi",
        title: "Video Profil Resmi SD Anak Saleh (YouTube)",
        detail:
          "Dokumentasi video profil resmi yang menampilkan lingkungan sekolah ramah anak, sarana prasarana modern, pembiasaan islami, dan budaya sekolah kreatif di Malang.",
        verified: true,
        source: "YouTube SD Anak Saleh",
        url: "https://youtu.be/Wttuw8v2-ME",
      },
      {
        id: "i18",
        theme: "kegiatan",
        title: "Dokumentasi Pembiasaan & Sinergi Parenting (Instagram)",
        detail:
          "Dokumentasi liputan harian shalat dhuha berjamaah, gebyar bakat siswa, unjuk karya kreatif, serta sinergi kegiatan parenting bersama orang tua di akun resmi @sdanaksalehofficial.",
        verified: true,
        source: "Instagram @sdanaksalehofficial",
        url: "https://www.instagram.com/sdanaksalehofficial/",
      },
    ],
  };

  var THEMES = [
    {
      id: "agama",
      label: "Pembiasaan agama",
      kw: [
        "agama",
        "islam",
        "quran",
        "al-quran",
        "al quran",
        "tahfidz",
        "hafalan",
        "hafal",
        "salat",
        "sholat",
        "shalat",
        "ibadah",
        "doa",
        "iman",
        "ngaji",
        "religius",
        "tauhid",
        "dhuha",
        "fardhu",
        "tadarus",
        "zikir",
        "dzikir",
      ],
    },
    {
      id: "karakter",
      label: "Akhlak dan karakter",
      kw: [
        "akhlak",
        "adab",
        "karakter",
        "sopan",
        "jujur",
        "mandiri",
        "disiplin",
        "tanggung jawab",
        "budi pekerti",
        "perilaku",
        "sikap",
        "saleh",
        "soleh",
        "sholeh",
        "santun",
        "kepribadian",
        "teladan",
        "keteladanan",
        "berkata kasar",
        "kasar",
      ],
    },
    {
      id: "akademik",
      label: "Capaian akademik",
      kw: [
        "pintar",
        "akademik",
        "prestasi",
        "belajar",
        "kurikulum",
        "nilai",
        "membaca",
        "berhitung",
        "ilmu",
        "cerdas",
        "kemampuan",
        "pelajaran",
        "berprestasi",
      ],
    },
    {
      id: "lingkungan",
      label: "Lingkungan aman dan nyaman",
      kw: [
        "aman",
        "nyaman",
        "lingkungan",
        "pergaulan",
        "teman",
        "bullying",
        "perundungan",
        "ramah",
        "kondusif",
        "bergaul",
        "berkelahi",
        "ejek",
        "mengejek",
      ],
    },
    {
      id: "guru",
      label: "Peran guru",
      kw: [
        "guru",
        "pengajar",
        "pendidik",
        "perhatian",
        "pendampingan",
        "mendampingi",
        "wali kelas",
      ],
    },
    {
      id: "keterlibatan",
      label: "Kerja sama dengan orang tua",
      kw: [
        "orang tua",
        "orangtua",
        "komunikasi",
        "laporan",
        "kerja sama",
        "kerjasama",
        "parenting",
        "melibatkan",
        "terlibat",
        "sinergi",
        "kolaborasi",
        "pantau",
        "saran",
        "kritik",
        "humas",
        "forum",
        "masukan",
        "komplain",
      ],
    },
    {
      id: "kegiatan",
      label: "Bakat dan kegiatan",
      kw: [
        "ekstrakurikuler",
        "ekskul",
        "kegiatan",
        "bakat",
        "minat",
        "olahraga",
        "seni",
        "kreatif",
        "lomba",
      ],
    },
    {
      id: "komitmen",
      label: "Komitmen dan tata tertib",
      kw: [
        "komitmen",
        "tata tertib",
        "aturan",
        "nama baik",
        "media sosial",
        "sosmed",
        "medsos",
        "kerja sama",
        "kerjasama",
        "sinergi",
        "mematuhi",
        "patuh",
        "mendukung",
        "kebijakan",
        "tata-tertib",
        "bersedia",
        "siap",
        "setuju",
        "gadget",
        "gawai",
        "hp",
        "handphone",
        "pakaian",
        "busana",
        "dress code",
        "aurat",
        "jilbab",
        "hijab",
        "celana",
        "terlambat",
        "keterlambatan",
        "hadir",
        "tepat waktu",
        "viral",
        "viralkan",
      ],
    },
    {
      id: "lokasi",
      label: "Lokasi dan akses",
      kw: [
        "lokasi",
        "jarak",
        "antar jemput",
        "antar-jemput",
        "macet",
        "transportasi",
        "dekat rumah",
        "dekat dari",
        "jauh",
      ],
    },
    {
      id: "rekomendasi",
      label: "Reputasi dan rekomendasi",
      kw: [
        "rekomendasi",
        "saudara",
        "tetangga",
        "alumni",
        "testimoni",
        "referensi",
        "kakaknya",
        "reputasi",
        "terpercaya",
        "kenalan",
        "dengar",
      ],
    },
  ];
  THEMES.forEach(function (t) {
    t.re = t.kw.map(function (k) {
      return new RegExp(
        "(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i",
      );
    });
  });

  var QUESTIONS = [
    {
      q: "Apa yang paling {S} cari dari sebuah sekolah untuk {A}?",
      hint: "Minta {S} memilih satu hal yang paling utama. Tanyakan: “Kalau harus memilih satu, yang mana?”",
      chips: [
        "Pembiasaan ibadah dan Al-Qur'an",
        "Akhlak dan adab yang baik",
        "Prestasi akademik",
        "Lingkungan yang aman dan islami",
        "Guru yang perhatian",
      ],
    },
    {
      q: "Kenapa akhirnya {S} tertarik mendaftarkan {A} ke Sekolah Anak Saleh?",
      hint: "Cari tahu sumber informasinya dan momen yang membuat {S} yakin. Catat kata-kata yang {S} pakai sendiri.",
      chips: [
        "Direkomendasikan saudara dan teman",
        "Lokasinya dekat rumah",
        "Sekolah unggul di bidang agama",
        "Melihat karakter anak alumni",
        "Visi dan komitmen sekolah yang kuat",
      ],
    },
    {
      q: "Seperti apa sosok {A} yang {S} harapkan lima tahun lagi?",
      hint: "Dengarkan harapan jangka panjang. Jawaban ini biasanya paling dekat dengan nilai keluarga.",
      chips: [
        "Anak yang jujur dan mandiri",
        "Rajin ibadah dan hafal Al-Qur'an",
        "Pintar dan berprestasi",
        "Percaya diri dalam bergaul",
        "Berbakti kepada orang tua",
      ],
    },
    {
      q: "Nilai apa yang sudah ditanamkan di rumah, dan bagian mana yang ingin dibantu sekolah?",
      hint: "Cari irisan antara kebiasaan di rumah dan program sekolah. Tanyakan contoh kebiasaan harian.",
      chips: [
        "Salat berjamaah dan doa harian di rumah",
        "Adab sopan kepada orang tua",
        "Kebiasaan belajar dan membaca",
        "Ingin sekolah membantu kedisiplinan",
        "Ingin sekolah membantu hafalan",
      ],
    },
    {
      q: "Apa yang masih menjadi pertimbangan atau kekhawatiran {S}?",
      hint: "Beri ruang sampai selesai bicara. Jangan memotong. Setiap kekhawatiran akan dijawab dengan data sekolah.",
      concern: true,
      chips: [
        "Khawatir anak sulit beradaptasi",
        "Penyesuaian tata tertib dan aturan sekolah",
        "Khawatir pergaulan dan perundungan",
        "Jarak dari rumah cukup jauh",
        "Khawatir beban belajar terlalu berat",
      ],
    },
    {
      q: "Sebagai calon wali murid SD Anak Saleh, bagaimana komitmen {S} untuk bekerja sama dengan sekolah dalam mendidik anak, mematuhi tata tertib, serta menjaga nama baik sekolah, baik di lingkungan nyata maupun di media sosial?",
      hint: "Dengarkan komitmen {S} dalam bekerja sama dengan sekolah, mematuhi tata tertib, serta saling menjaga nama baik di dunia nyata dan media sosial.",
      chips: [
        "Siap berkomitmen penuh dan bekerja sama",
        "Siap mematuhi seluruh tata tertib sekolah",
        "Siap menjaga nama baik sekolah di dunia nyata dan medsos",
        "Mendukung setiap kebijakan dan program sekolah",
        "Bijak bersosial media & dialog internal",
        "Etika berpakaian sopan & menutup aurat saat jemput",
        "Sinkronisasi ibadah shalat & tadarus di rumah",
        "Dukung penegakan adab anti-bullying & disiplin gadget",
      ],
    },
  ];
  var N = QUESTIONS.length;

  /* ---------- Data Pewawancara & Calon Murid ---------- */
  var INTERVIEWERS = [
    "Ustadz Rama",
    "Ustadz Rifa’i",
    "Ustadz Andre",
    "Ustadz Effendi",
    "Ustadzah Jehan",
    "Ustadzah Dian",
    "Ustadz Amir",
    "Ustadzah Ika",
    "Ustadzah Niha",
    "Ustadz Riris",
    "Ustadzah Heni",
    "Ustadz Ichsan",
    "Ustadz Davies",
    "Ustadzah Elin",
  ];

  var candidatesData = [];
  function loadCandidates() {
    try {
      fetch("candidates.json")
        .then(function (r) {
          return r.json();
        })
        .then(function (data) {
          if (Array.isArray(data) && data.length > 0) {
            candidatesData = data;
            if (state.tab === "interview" && state.step === 0) {
              render();
            }
          }
        })
        .catch(function (e) {
          console.warn("loadCandidates fallback:", e);
        });
    } catch (e) {}
  }

  /* ---------- State & AI Configuration ---------- */
  var KEY_INTERVIEWS = "sas-interviews-v1";
  var KEY_GEMINI = "sas-gemini-keys-v1";
  var KEY_MODEL = "sas-gemini-model-v1";
  var KEY_KNOWLEDGE = "sas-ai-knowledge-v1";

  var DEFAULT_KNOWLEDGE = [
    "# Referensi Data Komitmen & Penguat Sekolah (SD Anak Saleh)",
    "",
    "Dokumen rujukan resmi untuk grounding AI dalam wawancara calon orang tua murid baru (PPDB).",
    "",
    "## 7 Butir Komitmen Resmi SD Anak Saleh:",
    "",
    "### 1. Komitmen Bijak Bersosial Media",
    "- Tema: Komitmen dan tata tertib",
    "- Rujukan: Menyelesaikan kesalahpahaman atau insiden secara internal & kekeluargaan di ruang komunikasi sekolah yang telah disediakan. Wali murid berkomitmen tidak memposting, mengeluhkan, atau memviralkan masalah sekolah ke media sosial.",
    "",
    "### 2. Komitmen Etika Berpakaian (Dress Code) Mengantar/Menjemput",
    "- Tema: Komitmen dan tata tertib",
    "- Rujukan: Keteladanan nilai-nilai syariat Islam di lingkungan sekolah. Wali murid laki-laki wajib berpakaian sopan dan celana panjang rapi (bukan celana pendek). Wali murid perempuan wajib menutup aurat dengan jilbab/hijab syar'i.",
    "",
    "### 3. Komitmen Menyampaikan Saran dan Kritik",
    "- Tema: Kerja sama dengan orang tua",
    "- Rujukan: Masukan demi kemajuan sekolah disampaikan secara santun & produktif melalui forum dialog resmi, kontak humas, atau janji temu formal dengan manajemen sekolah, bukan pergunjingan di grup WhatsApp umum atau media sosial.",
    "",
    "### 4. Komitmen Sinkronisasi Ibadah Harian",
    "- Tema: Pembiasaan agama",
    "- Rujukan: Sekolah membiasakan shalat fardhu tepat waktu, shalat dhuha, dan tadarus Al-Qur'an. Orang tua berkomitmen mengawal dan mendampingi pembiasaan ibadah ini secara konsisten di rumah agar pembentukan karakter islami berjalan selaras.",
    "",
    "### 5. Komitmen Penegakan Adab dan Kesopanan (Anti-Bullying & Berkata Kasar)",
    "- Tema: Akhlak dan karakter",
    "- Rujukan: Aturan ketat dilarang mengejek (bullying), berkelahi, dan berkata kasar/kotor. Orang tua menyaring tontonan, game, atau lingkungan pergaulan anak di rumah, serta mendukung penuh tindakan disiplin pembinaan dari sekolah.",
    "",
    "### 6. Komitmen Kedisiplinan Kehadiran dan Keterlambatan",
    "- Tema: Komitmen dan tata tertib",
    "- Rujukan: Orang tua melatih ritme pagi anak sejak bangun tidur agar anak tiba di sekolah tepat waktu sebelum bel masuk untuk pembiasaan pagi (zikir dan shalat dhuha bersama).",
    "",
    "### 7. Komitmen Pembatasan Gadget (Gawai) dan Teknologi",
    "- Tema: Komitmen dan tata tertib",
    "- Rujukan: Siswa dilarang membawa gadget ke sekolah. Orang tua membatasi dan mengawasi penggunaan gawai di rumah (penerapan aturan 'no gadget' waktu magrib hingga isya) demi konsentrasi belajar dan kesehatan mata anak."
  ].join("\n");

  function loadGeminiKeys() {
    try {
      var raw = localStorage.getItem(KEY_GEMINI);
      if (raw) {
        var a = JSON.parse(raw);
        if (Array.isArray(a)) return a;
      }
    } catch (e) {}
    return [];
  }
  function saveGeminiKeys(arr) {
    try { localStorage.setItem(KEY_GEMINI, JSON.stringify(arr)); } catch (e) {}
  }

  function loadSelectedModel() {
    try {
      var m = localStorage.getItem(KEY_MODEL);
      // Auto-migrasi jika user sebelumnya menyimpan model yang sudah dideprecate oleh Google
      if (m === "gemini-2.0-flash-lite" || m === "gemini-2.0-flash") {
        m = "gemini-1.5-flash";
        localStorage.setItem(KEY_MODEL, m);
      }
      if (m && m.trim()) return m;
    } catch (e) {}
    return "gemini-1.5-flash";
  }
  function saveSelectedModel(m) {
    try { localStorage.setItem(KEY_MODEL, m); } catch (e) {}
  }

  function loadKnowledge() {
    try {
      var k = localStorage.getItem(KEY_KNOWLEDGE);
      if (k && k.trim()) return k;
    } catch (e) {}
    return DEFAULT_KNOWLEDGE;
  }
  function saveKnowledge(text) {
    try { localStorage.setItem(KEY_KNOWLEDGE, text); } catch (e) {}
  }

  function estimateTokens(text) {
    if (!text) return 0;
    var words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.round(words * 1.5);
  }

  function getActiveGeminiKey() {
    return state.geminiKeys[state.geminiKeyIdx] || "";
  }
  async function callGemini(prompt, customSystem, strictModel) {
    var keys = state.geminiKeys.filter(function (k) {
      return k && k.trim();
    });
    if (!keys.length) {
      throw new Error("Belum ada API Key Gemini yang tersimpan. Silakan masukkan API Key di tab Data Sekolah.");
    }
    var startIdx = state.geminiKeyIdx % keys.length;
    var lastError = "";

    var preferred = state.selectedModel || "gemini-1.5-flash";
    var standardModels = [
      "gemini-1.5-flash",
      "gemini-3.5-flash-lite",
      "gemini-2.5-flash",
      "gemini-1.5-pro",
    ];
    var models;
    if (strictModel) {
      models = [preferred];
    } else {
      models = [preferred].concat(
        standardModels.filter(function (m) {
          return m !== preferred;
        })
      );
    }

    var systemText = customSystem || (
      "Kamu adalah asisten pewawancara dan konsultan PPDB SD Anak Saleh Malang dengan kemampuan grounding dokumen seperti Google NotebookLM.\n\n" +
      "=== SUMBER DOKUMEN SEKOLAH (GROUNDING KNOWLEDGE BASE) ===\n" +
      (state.aiKnowledge || DEFAULT_KNOWLEDGE) + "\n" +
      "==========================================================\n\n" +
      "Petunjuk Kerja (Source Grounding ala NotebookLM):\n" +
      "1. Jadikan dokumen rujukan sekolah di atas sebagai sumber kebenaran mutlak.\n" +
      "2. Ketika menjawab atau menganalisis, kaitkan secara presisi dengan nomor dan butir komitmen / tata tertib yang ada di dokumen sumber.\n" +
      "3. Gunakan gaya bahasa Indonesia yang hangat, empatik, santun, dan profesional."
    );

    for (var i = 0; i < keys.length; i++) {
      var idx = (startIdx + i) % keys.length;
      var key = keys[idx].trim();

      for (var m = 0; m < models.length; m++) {
        var modelName = models[m];
        var url =
          "https://generativelanguage.googleapis.com/v1beta/models/" +
          modelName +
          ":generateContent?key=" +
          encodeURIComponent(key);

        var requestBody = {
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemText }] },
          generationConfig: { temperature: 0.7, maxOutputTokens: 1200 },
        };

        try {
          var resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          });

          if (resp.status === 429) {
            var errData429 = null;
            try {
              errData429 = await resp.json();
            } catch (_) {}
            var msg429 =
              (errData429 &&
                errData429.error &&
                errData429.error.message) ||
              "";

            if (
              /high demand|overloaded|spikes in demand/i.test(msg429) &&
              m < models.length - 1
            ) {
              lastError = "[" + modelName + "] " + msg429;
              await new Promise(function (res) {
                setTimeout(res, 500);
              });
              continue;
            }

            lastError =
              "Batas kuota gratis terlampaui (Error 429) untuk key #" +
              (idx + 1);
            state.geminiKeyIdx = (idx + 1) % keys.length;
            break;
          }

          if (!resp.ok) {
            var errData = null;
            try {
              errData = await resp.json();
            } catch (_) {}
            var msg =
              (errData && errData.error && errData.error.message) ||
              "HTTP " + resp.status + " " + resp.statusText;

            // Jika systemInstruction tidak didukung model tertentu, coba fallback embed systemText ke prompt
            if (/systemInstruction/i.test(msg)) {
              delete requestBody.systemInstruction;
              requestBody.contents[0].parts[0].text =
                systemText + "\n\n" + prompt;
              var retryResp = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
              });
              if (retryResp.ok) {
                var retryData = await retryResp.json();
                if (
                  retryData.candidates &&
                  retryData.candidates[0] &&
                  retryData.candidates[0].content &&
                  retryData.candidates[0].content.parts &&
                  retryData.candidates[0].content.parts[0]
                ) {
                  state.geminiKeyIdx = idx;
                  return retryData.candidates[0].content.parts[0].text;
                }
              }
            }

            var isOverload =
              resp.status === 503 ||
              /high demand|overloaded|spikes in demand|temporarily unavailable|capacity/i.test(msg);
            var isNotAvailable =
              resp.status === 404 ||
              /no longer available|not found|is not found|unsupported|deprecated|not supported/i.test(msg);

            if ((isOverload || isNotAvailable) && m < models.length - 1) {
              lastError = "[" + modelName + "] " + msg;
              await new Promise(function (res) {
                setTimeout(res, 300);
              });
              continue;
            }
            if (isNotAvailable) {
              lastError = "[" + modelName + "] " + msg;
              break;
            }
            throw new Error(msg);
          }

          var data = await resp.json();
          if (
            !data.candidates ||
            !data.candidates[0] ||
            !data.candidates[0].content ||
            !data.candidates[0].content.parts ||
            !data.candidates[0].content.parts[0]
          ) {
            throw new Error("Format respons AI kosong atau tidak sesuai.");
          }

          state.geminiKeyIdx = idx;
          return data.candidates[0].content.parts[0].text;
        } catch (e) {
          lastError = "[" + modelName + "] " + (e.message || String(e));
          continue;
        }
      }
    }
    throw new Error(lastError || "Gagal menghubungi Gemini API.");
  }

  var state = {
    tab: "interview",
    step: 0,
    done: false,
    profile: {
      id: "",
      anak: "",
      ayah: "",
      ibu: "",
      ortu: "",
      alamat: "",
      pewawancara: "",
      sapaan: "Ayah/Bunda",
    },
    answers: [],
    school: loadSchool(),
    startErr: "",
    interviews: loadLocalInterviews(),
    searchQuery: "",
    activeSessionId: null,
    firebaseStatus: "disconnected",
    geminiKeys: loadGeminiKeys(),
    geminiKeyIdx: 0,
    selectedModel: loadSelectedModel(),
    aiKnowledge: loadKnowledge(),
    geminiStatus: "idle",
    geminiMsg: "",
    aiPenguat: {},
    aiAnalysis: null,
    aiAnalysisStatus: "idle",
    aiAnalysisErr: "",
  };
  var lastThemes = {};

  function loadSchool() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && Array.isArray(o.items)) {
          // Selalu pastikan butir referensi komitmen & media resmi ada & tersinkronisasi
          o.youtube = DEFAULT_SCHOOL.youtube;
          o.instagram = DEFAULT_SCHOOL.instagram;
          o.instagramHandle = DEFAULT_SCHOOL.instagramHandle;
          var map = {};
          o.items.forEach(function (it) {
            map[it.id] = it;
          });
          var changed = false;
          DEFAULT_SCHOOL.items.forEach(function (defIt) {
            if (!map[defIt.id]) {
              o.items.push(JSON.parse(JSON.stringify(defIt)));
              changed = true;
            } else if (
              defIt.verified &&
              (!map[defIt.id].verified ||
                map[defIt.id].title !== defIt.title ||
                defIt.url !== map[defIt.id].url)
            ) {
              map[defIt.id].title = defIt.title;
              map[defIt.id].detail = defIt.detail;
              map[defIt.id].theme = defIt.theme;
              map[defIt.id].verified = true;
              map[defIt.id].source = defIt.source;
              map[defIt.id].url = defIt.url || "";
              changed = true;
            }
          });
          if (changed || !o.v || o.v < 2) {
            o.v = 2;
            try {
              localStorage.setItem(KEY, JSON.stringify(o));
            } catch (err) {}
          }
          return o;
        }
      }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_SCHOOL));
  }
  function saveSchool() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state.school));
    } catch (e) {}
  }

  function loadLocalInterviews() {
    try {
      var raw = localStorage.getItem(KEY_INTERVIEWS);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) {}
    return [];
  }
  function saveLocalInterviews(arr) {
    try {
      localStorage.setItem(KEY_INTERVIEWS, JSON.stringify(arr));
    } catch (e) {}
  }

  /* ---------- Firebase Integration ---------- */
  var db = null;
  function initFirebase() {
    var cfg = window.FIREBASE_CONFIG || window.firebaseConfig;
    if (cfg && cfg.projectId && window.firebase) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(cfg);
        }
        db = firebase.firestore();
        state.firebaseStatus = "connected";

        // Realtime listener
        db.collection("interviews").onSnapshot(
          function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
              var d = doc.data();
              d.id = doc.id;
              list.push(d);
            });
            // Sort descending by createdAt
            list.sort(function (a, b) {
              return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
            });
            state.interviews = list;
            state.firebaseStatus = "connected";
            state.firebaseError = "";
            saveLocalInterviews(list);
            updateTabBadge();
            if (state.tab === "history") {
              render();
            }
          },
          function (err) {
            console.error("Firestore onSnapshot error:", err);
            state.firebaseStatus = "error";
            state.firebaseError = err.message || err.code || String(err);
            if (state.tab === "history") render();
          },
        );
      } catch (e) {
        console.error("Firebase init failed:", e);
        state.firebaseStatus = "error";
        state.firebaseError = e.message || String(e);
      }
    } else {
      state.firebaseStatus = "disconnected";
    }
  }

  function saveCurrentInterview() {
    var r = buildResult();
    var p = state.profile;
    var now = new Date();
    var id = state.activeSessionId || "sesi-" + now.getTime();
    var record = {
      id: id,
      candidateId: (p.id || "").trim() || "-",
      anak: p.anak.trim(),
      ayah: (p.ayah || "").trim(),
      ibu: (p.ibu || "").trim(),
      ortu: computeOrtu(p),
      alamat: (p.alamat || "").trim(),
      sapaan: sap(p),
      pewawancara: p.pewawancara.trim(),
      createdAt: now.toISOString(),
      displayDate: now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      answers: state.answers.slice(),
      covered: r.covered,
      total: r.total,
      percent: r.total ? Math.round((r.covered / r.total) * 100) : 0,
      closing: closing(r),
      aiAnalysis: state.aiAnalysis || null,
    };

    var existingIdx = -1;
    for (var i = 0; i < state.interviews.length; i++) {
      if (state.interviews[i].id === id) {
        existingIdx = i;
        break;
      }
    }
    if (existingIdx >= 0) {
      state.interviews[existingIdx] = record;
    } else {
      state.interviews.unshift(record);
    }
    state.activeSessionId = id;
    saveLocalInterviews(state.interviews);
    updateTabBadge();

    if (db) {
      db.collection("interviews")
        .doc(id)
        .set(record)
        .catch(function (err) {
          console.error("Gagal menyimpan ke Firestore:", err);
        });
    }
  }

  function deleteInterview(id) {
    if (!confirm("Hapus catatan wawancara ini?")) return;
    state.interviews = state.interviews.filter(function (x) {
      return x.id !== id;
    });
    saveLocalInterviews(state.interviews);
    updateTabBadge();
    if (db) {
      db.collection("interviews")
        .doc(id)
        .delete()
        .catch(function (err) {
          console.error("Gagal menghapus dari Firestore:", err);
        });
    }
    render();
  }

  function exportCSV() {
    if (!state.interviews || !state.interviews.length) {
      alert("Belum ada data wawancara untuk diunduh.");
      return;
    }
    var headers = [
      "No",
      "ID Calon Murid",
      "Waktu Wawancara",
      "Nama Calon Murid",
      "Nama Ayah",
      "Nama Ibu",
      "Alamat Rumah",
      "Nama Orang Tua",
      "Sapaan",
      "Pewawancara",
      "Kesesuaian Harapan",
      "Persentase Cocok",
      "Pertanyaan 1 (Yang Dicari)",
      "Pertanyaan 2 (Alasan Memilih)",
      "Pertanyaan 3 (Harapan 5 Thn)",
      "Pertanyaan 4 (Nilai Rumah vs Sekolah)",
      "Pertanyaan 5 (Kekhawatiran/Pertimbangan)",
      "Pertanyaan 6 (Bentuk Keterlibatan)",
      "Kalimat Penutup Rekomendasi",
    ];
    var rows = [headers];
    state.interviews.forEach(function (it, idx) {
      var ans = it.answers || [];
      rows.push([
        idx + 1,
        it.candidateId || it.id || "",
        it.displayDate || it.createdAt || "",
        it.anak || "",
        it.ayah || "",
        it.ibu || "",
        it.alamat || "",
        it.ortu || computeOrtu(it) || "",
        it.sapaan || "",
        it.pewawancara || "",
        (it.covered || 0) + " dari " + (it.total || 0),
        (it.percent || 0) + "%",
        ans[0] || "",
        ans[1] || "",
        ans[2] || "",
        ans[3] || "",
        ans[4] || "",
        ans[5] || "",
        it.closing || "",
      ]);
    });

    var csvContent =
      "\uFEFF" +
      rows
        .map(function (e) {
          return e
            .map(function (val) {
              var s = String(val == null ? "" : val).replace(/"/g, '""');
              return '"' + s + '"';
            })
            .join(",");
        })
        .join("\r\n");

    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    var now = new Date();
    var dateStr = now.toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", "Rekap_Wawancara_PPDB_" + dateStr + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* ---------- Helpers ---------- */
  function $(s, r) {
    return (r || document).querySelector(s);
  }
  function $$(s, r) {
    return Array.prototype.slice.call(
      (r || document).querySelectorAll(s),
    );
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  var RM =
    window.matchMedia &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  function g() {
    return !RM && window.gsap ? window.gsap : null;
  }
  function animFrom(t, vars) {
    var G = g();
    if (G && t && (t.length === undefined || t.length > 0))
      G.from(t, vars);
  }
  function computeOrtu(p) {
    p = p || state.profile;
    var ay = (p.ayah || "").trim();
    var ib = (p.ibu || "").trim();
    if (ay && ib) {
      var aClean = ay.replace(/^ayah\s*/i, "");
      var iClean = ib.replace(/^(bunda|ibu)\s*/i, "");
      return "Ayah " + aClean + " & Bunda " + iClean;
    }
    if (ay) return /^ayah/i.test(ay) ? ay : "Ayah " + ay;
    if (ib) return /^(bunda|ibu)/i.test(ib) ? ib : "Bunda " + ib;
    return p.ortu || "Orang Tua";
  }

  function sap(p) {
    p = p || state.profile;
    var ay = (p.ayah || "").trim();
    var ib = (p.ibu || "").trim();
    if (ay && ib) return "Ayah/Bunda";
    if (ay) return "Ayah";
    if (ib) return "Bunda";
    return p.sapaan || "Ayah/Bunda";
  }

  function fill(s) {
    return s
      .replace(/\{S\}/g, sap())
      .replace(/\{A\}/g, state.profile.anak.trim() || "anak");
  }
  function themeById(id) {
    return THEMES.filter(function (t) {
      return t.id === id;
    })[0];
  }
  function itemsFor(id) {
    return state.school.items
      .filter(function (i) {
        return i.theme === id;
      })
      .sort(function (a, b) {
        return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
      });
  }
  function clip(s, n) {
    s = s.trim();
    return s.length > n ? s.slice(0, n - 1).trim() + "…" : s;
  }

  function analyze(text) {
    var out = [];
    if (!text || !text.trim()) return out;
    var sents = text
      .split(/[.!?\n]+/)
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
    THEMES.forEach(function (t) {
      for (var i = 0; i < sents.length; i++) {
        if (
          t.re.some(function (r) {
            return r.test(sents[i]);
          })
        ) {
          out.push({ theme: t, snippet: clip(sents[i], 150) });
          return;
        }
      }
    });
    return out;
  }

  function buildResult() {
    var hits = {},
      concerns = {};
    QUESTIONS.forEach(function (q, i) {
      analyze(state.answers[i] || "").forEach(function (m) {
        var bucket = q.concern ? concerns : hits;
        (bucket[m.theme.id] = bucket[m.theme.id] || []).push(m.snippet);
      });
    });
    var ids = {};
    Object.keys(hits).forEach(function (k) {
      ids[k] = 1;
    });
    Object.keys(concerns).forEach(function (k) {
      ids[k] = 1;
    });
    var all = Object.keys(ids);
    var covered = all.filter(function (k) {
      return itemsFor(k).length > 0;
    });
    var order = Object.keys(hits).sort(function (a, b) {
      return hits[b].length - hits[a].length;
    });
    return {
      hits: hits,
      concerns: concerns,
      order: order,
      total: all.length,
      covered: covered.length,
    };
  }

  function usedUnverified(r) {
    var n = 0,
      seen = {};
    Object.keys(r.hits)
      .concat(Object.keys(r.concerns))
      .forEach(function (k) {
        itemsFor(k).forEach(function (it) {
          if (!it.verified && !seen[it.id]) {
            seen[it.id] = 1;
            n++;
          }
        });
      });
    return n;
  }

  /* ---------- Views ---------- */
  function itemCard(it) {
    return (
      '<div class="item"><div class="item-top"><span class="item-title">' +
      esc(it.title) +
      "</span>" +
      (it.verified
        ? '<span class="badge ok">Terverifikasi</span>'
        : '<span class="badge warn">Contoh</span>') +
      "</div>" +
      '<div class="item-detail">' +
      esc(it.detail) +
      "</div>" +
      (it.url
        ? '<div style="margin-top:8px;"><a href="' +
          esc(it.url) +
          '" target="_blank" rel="noopener noreferrer" class="badge" style="text-decoration:none;display:inline-flex;align-items:center;gap:5px;font-size:11px;padding:3px 8px;background:var(--bg-subtle,#f8fafc);color:var(--accent,#0f766e);border-color:var(--border-subtle,#cbd5e1);font-weight:500;"><i data-lucide="external-link" style="width:12px;height:12px;"></i> ' +
          (it.source ? esc(it.source) : "Buka Tautan") +
          "</a></div>"
        : it.source
        ? '<div class="src">Sumber: ' + esc(it.source) + "</div>"
        : "") +
      "</div>"
    );
  }

  function startView() {
    var s = state.school,
      p = state.profile;
    var ver = s.items.filter(function (i) {
      return i.verified;
    }).length;
    return (
      '<div class="stack">' +
      '<div class="stack" data-anim="in"><span class="eyebrow">Wawancara calon orang tua murid</span>' +
      '<h1 class="display result-title">Dengarkan alasannya, lalu tunjukkan datanya.</h1>' +
      '<p class="muted" style="max-width:62ch">Tanyakan apa dan kenapa orang tua memilih ' +
      esc(s.name) +
      ". Setiap jawaban dicocokkan dengan data sekolah, lalu aplikasi menyusun ringkasan yang menguatkan keputusan mereka.</p></div>" +
      '<div class="grid">' +
      '<form class="card" id="start-form" data-anim="in" novalidate>' +
      '<div class="card-title">Mulai sesi baru</div>' +
      '<div class="two"><div class="field"><label for="p-id">ID Calon Murid</label>' +
      '<select class="select" id="p-id" data-profile="id">' +
      '<option value="">-- Pilih ID Calon Murid --</option>' +
      candidatesData
        .map(function (c) {
          var labelOrtu = c.ayah && c.ibu ? "Ayah " + c.ayah + " & Bunda " + c.ibu : (c.ortu || "");
          return (
            '<option value="' +
            esc(c.id) +
            '"' +
            (p.id === c.id ? " selected" : "") +
            '>' +
            esc(c.id) +
            ' – ' +
            esc(c.anak) +
            (labelOrtu ? ' (' + esc(labelOrtu) + ')' : '') +
            '</option>'
          );
        })
        .join("") +
      '<option value="manual"' + (p.id === "manual" ? " selected" : "") + '>-- Isi Manual / Tanpa ID --</option>' +
      '</select></div>' +
      '<div class="field"><label for="p-anak">Nama calon murid</label>' +
      '<input class="input" id="p-anak" data-profile="anak" value="' +
      esc(p.anak) +
      '" placeholder="Nama calon murid..." autocomplete="off"></div></div>' +
      '<div class="two"><div class="field"><label for="p-ayah">Nama Ayah</label>' +
      '<input class="input" id="p-ayah" data-profile="ayah" value="' +
      esc(p.ayah || "") +
      '" placeholder="Nama lengkap ayah..." autocomplete="off"></div>' +
      '<div class="field"><label for="p-ibu">Nama Ibu</label>' +
      '<input class="input" id="p-ibu" data-profile="ibu" value="' +
      esc(p.ibu || "") +
      '" placeholder="Nama lengkap ibu / bunda..." autocomplete="off"></div></div>' +
      '<div class="two"><div class="field"><label for="p-alamat">Alamat rumah</label>' +
      '<input class="input" id="p-alamat" data-profile="alamat" value="' +
      esc(p.alamat || "") +
      '" placeholder="Alamat domisili keluarga..." autocomplete="off"></div>' +
      '<div class="field"><label for="p-pew">Nama pewawancara</label>' +
      '<select class="select" id="p-pew" data-profile="pewawancara">' +
      '<option value="">-- Pilih Pewawancara --</option>' +
      INTERVIEWERS.map(function (name) {
        return (
          "<option" +
          (p.pewawancara === name ? " selected" : "") +
          ">" +
          esc(name) +
          "</option>"
        );
      }).join("") +
      "</select></div></div>" +
      '<div class="err" id="start-err"' +
      (state.startErr ? "" : " hidden") +
      ">" +
      esc(state.startErr) +
      "</div>" +
      '<div class="row"><button type="submit" class="btn btn-primary" data-action="start"><i data-lucide="play"></i> Mulai wawancara</button><span class="muted">' +
      N +
      " pertanyaan, sekitar 10 menit</span></div>" +
      "</form>" +
      '<aside class="panel" data-anim="in"><div class="panel-head"><span class="card-title">Data sekolah terhubung</span><span class="badge"><i data-lucide="hard-drive"></i> Tersimpan di browser ini</span></div>' +
      '<div class="item"><div class="item-title">' +
      esc(s.name) +
      '</div><div class="item-detail">' +
      esc(s.level) +
      ", berdiri " +
      esc(s.founded) +
      "</div>" +
      '<div class="src">' +
      esc(s.address) +
      '</div><div class="src mono">' +
      esc(s.phone) +
      " · " +
      esc(s.website) +
      "</div></div>" +
      '<div class="stat"><span class="badge ok"><i data-lucide="check-circle-2"></i> ' +
      ver +
      ' data terverifikasi</span><span class="badge warn"><i data-lucide="alert-circle"></i> ' +
      (s.items.length - ver) +
      " data contoh</span></div>" +
      '<p class="muted">Data contoh dipakai untuk memperlihatkan cara kerja aplikasi. Ganti dengan data resmi di tab Data sekolah sebelum dipakai wawancara sungguhan.</p>' +
      "</aside></div></div>"
    );
  }

  function questionView() {
    var i = state.step - 1,
      q = QUESTIONS[i],
      segs = "";
    for (var k = 0; k < N; k++)
      segs += '<i class="seg' + (k <= i ? " on" : "") + '"></i>';
    return (
      '<div class="grid"><div class="card step-card">' +
      '<div class="stack" style="gap:10px"><div class="row between"><span class="eyebrow">Pertanyaan ' +
      state.step +
      " dari " +
      N +
      "</span>" +
      '<span class="badge">' +
      esc(computeOrtu(state.profile)) +
      '</span></div><div class="progress">' +
      segs +
      "</div></div>" +
      '<h2 class="display q-text">' +
      esc(fill(q.q)) +
      "</h2>" +
      '<div class="hint"><b>Panduan:</b> ' +
      esc(fill(q.hint)) +
      "</div>" +
      '<div class="field"><label for="answer">Jawaban ' +
      esc(sap()) +
      "</label>" +
      '<textarea class="textarea" id="answer" placeholder="Ketik jawaban dengan kata-kata orang tua sendiri..."></textarea></div>' +
      '<div class="stack" style="gap:8px"><span class="eyebrow">Jawaban cepat</span><div class="chips">' +
      q.chips
        .map(function (c, ci) {
          return (
            '<button type="button" class="chip" data-action="chip" data-i="' +
            ci +
            '">' +
            esc(c) +
            "</button>"
          );
        })
        .join("") +
      "</div></div>" +
      '<div class="row between"><button class="btn btn-outline" data-action="prev"><i data-lucide="arrow-left"></i> Kembali</button>' +
      '<button class="btn btn-primary" data-action="next">' +
      (state.step === N ? '<i data-lucide="check-circle-2"></i> Lihat ringkasan' : 'Lanjut <i data-lucide="arrow-right"></i>') +
      "</button></div>" +
      "</div>" +
      '<aside class="panel"><div class="panel-head"><span class="card-title"><i class="live-dot"></i>Penguat dari Data Sekolah & AI</span><span class="badge" id="pg-count">0 tema</span></div>' +
      '<div style="padding:8px 12px;background:var(--bg-subtle,#f8fafc);border-bottom:1px solid var(--border-subtle,#e2e8f0);display:flex;align-items:center;gap:6px;flex-wrap:wrap;">' +
      '<a href="https://youtu.be/Wttuw8v2-ME" target="_blank" rel="noopener noreferrer" class="badge" style="text-decoration:none;display:inline-flex;align-items:center;gap:4px;color:#dc2626;border-color:hsl(0 70% 88%);background:#fef2f2;font-size:11px;" title="Buka Video Profil YouTube">' +
      '<i data-lucide="video" style="width:12px;height:12px;"></i> Video Profil YouTube</a>' +
      '<a href="https://www.instagram.com/sdanaksalehofficial/" target="_blank" rel="noopener noreferrer" class="badge" style="text-decoration:none;display:inline-flex;align-items:center;gap:4px;color:#be185d;border-color:hsl(330 70% 88%);background:#fdf2f8;font-size:11px;" title="Buka Instagram @sdanaksalehofficial">' +
      '<i data-lucide="instagram" style="width:12px;height:12px;"></i> @sdanaksalehofficial</a>' +
      '</div>' +
      '<div id="ai-penguat-card" style="padding:10px 12px;background:hsl(168 60% 98%);border-bottom:1px solid var(--border-subtle,#e2e8f0);">' +
      '<div class="row between" style="align-items:center;margin-bottom:6px;">' +
      '<span style="font-size:12px;font-weight:600;color:var(--accent,#0f766e);display:inline-flex;align-items:center;gap:4px;">' +
      '<i data-lucide="sparkles" style="width:13px;height:13px;"></i> Respon Penguat Spontan (AI)</span>' +
      '<button class="btn btn-ghost btn-sm" data-action="generate-ai-penguat" style="padding:2px 7px;font-size:11px;height:auto;" title="Buatkan respon spontan meyakinkan berbasis AI">' +
      '<i data-lucide="sparkles" style="width:11px;height:11px;"></i> Buat Respon</button>' +
      '</div>' +
      '<div id="ai-penguat-content" style="font-size:12px;line-height:1.45;color:var(--text-main,#0f172a);">' +
      (state.aiPenguat && state.aiPenguat[state.step]
        ? '<div style="font-weight:500;margin-bottom:4px;">“' +
          esc(state.aiPenguat[state.step]) +
          '”</div><div style="font-size:10px;color:var(--muted);display:flex;align-items:center;gap:4px;"><span class="badge ok" style="font-size:9px;padding:1px 4px;"><i data-lucide="check"></i> Siap Diucapkan</span> Didukung YouTube & Instagram</div>'
        : '<span class="muted" style="font-style:italic;">Ketik jawaban lalu klik "Buat Respon" untuk respon santun siap ucap meramu Data Sekolah, YouTube & Instagram.</span>') +
      '</div></div>' +
      '<div class="stack" id="penguat"></div></aside></div>'
    );
  }

  function renderFormattedAiText(raw) {
    if (!raw) return "";
    var parts = raw.split(/(?=###\s+)/g);
    return parts
      .map(function (part) {
        var lines = part.trim().split("\n");
        var title = lines[0].replace(/^###\s*/, "").trim();
        var body = lines.slice(1).join("\n").trim();
        if (!title && !body) return "";

        var icon = "sparkles";
        if (/narasi|profil/i.test(title)) icon = "heart-handshake";
        else if (/catatan|wali kelas|guru/i.test(title)) icon = "graduation-cap";
        else if (/whatsapp|pesan|draf/i.test(title)) icon = "message-circle";

        return (
          '<div style="background:#ffffff;border:1px solid var(--border-subtle,#e2e8f0);border-radius:var(--radius-sm,6px);padding:14px;margin-bottom:10px;">' +
          '<div style="font-weight:600;font-size:14px;color:var(--accent,#0f766e);margin-bottom:8px;display:flex;align-items:center;gap:6px;">' +
          '<i data-lucide="' +
          icon +
          '" style="width:16px;height:16px;"></i> ' +
          esc(title) +
          "</div>" +
          '<div style="white-space:pre-wrap;color:var(--text-main,#1e293b);font-size:13px;line-height:1.55;">' +
          esc(body) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderAiAnalysisSection() {
    var isL = state.aiAnalysisStatus === "loading";
    var res = state.aiAnalysis;
    var err = state.aiAnalysisErr;

    var h =
      '<div class="card" data-anim="r" style="border-left:4px solid var(--accent,#0f766e);background:linear-gradient(to bottom, #ffffff, hsl(168 50% 99%));">' +
      '<div class="row between" style="align-items:center;margin-bottom:12px;gap:12px;flex-wrap:wrap;">' +
      "<div>" +
      '<span class="card-title" style="display:inline-flex;align-items:center;gap:6px;color:var(--text-main,#0f172a);">' +
      '<i data-lucide="sparkles" style="color:var(--accent,#0f766e);"></i> Analisis & Penguat Komprehensif AI (Gemini)' +
      "</span>" +
      '<p class="muted" style="font-size:13px;margin:2px 0 0;">' +
      "Sinergi Jawaban Orang Tua + Data Sekolah + Video YouTube Profil + Instagram Resmi" +
      "</p></div>" +
      '<div class="row" style="gap:8px;">' +
      '<button class="btn btn-primary btn-sm" data-action="run-full-ai-analysis"' +
      (isL ? " disabled" : "") +
      ">" +
      (isL
        ? '<i data-lucide="loader" class="spin"></i> Menganalisis…'
        : '<i data-lucide="sparkles"></i> ' +
          (res ? "Analisis Ulang AI" : "Buat Analisis AI")) +
      "</button>" +
      (res
        ? '<button class="btn btn-outline btn-sm" data-action="copy-wa-draft" title="Salin Draf Pesan WhatsApp untuk Orang Tua"><i data-lucide="copy"></i> Salin Draf WA</button>'
        : "") +
      "</div></div>";

    if (isL) {
      h +=
        '<div style="padding:24px;text-align:center;color:var(--muted);font-size:13px;">' +
        '<i data-lucide="loader" class="spin" style="width:22px;height:22px;margin:0 auto 10px;display:block;color:var(--accent,#0f766e);"></i>' +
        "<div>Sedang menganalisis jawaban dan meramu penguat dari profil sekolah, video YouTube, dan Instagram…</div></div>";
    } else if (err) {
      h +=
        '<div class="notice" style="border-color:hsl(0 70% 80%);background:hsl(0 80% 98%);color:var(--danger);">' +
        '<i data-lucide="alert-triangle"></i> Gagal menghasilkan analisis AI: ' +
        esc(err) +
        "</div>";
    } else if (res) {
      h +=
        '<div class="stack" style="gap:4px;">' +
        renderFormattedAiText(res) +
        '<div class="row" style="gap:8px;margin-top:6px;align-items:center;">' +
        '<span class="badge ok" style="font-size:11px;padding:3px 8px;"><i data-lucide="check-circle-2"></i> Analisis AI Aktif</span>' +
        '<span class="muted" style="font-size:12px;">Didukung Data Resmi, YouTube Profil & Instagram @sdanaksalehofficial</span>' +
        "</div>" +
        "</div>";
    } else {
      h +=
        '<div style="padding:14px;background:var(--bg-subtle,#f8fafc);border-radius:var(--radius-sm,6px);border:1px dashed var(--border-subtle,#cbd5e1);font-size:13px;color:var(--muted);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">' +
        '<span>Klik tombol <b>"Buat Analisis AI"</b> di atas untuk menghasilkan rangkuman keselarasan nilai, catatan wali kelas, dan draf pesan WhatsApp apresiasi.</span>' +
        "</div>";
    }

    h += "</div>";
    return h;
  }

  function resultView() {
    var r = buildResult(),
      p = state.profile,
      s = state.school;
    var pct = r.total ? Math.round((r.covered / r.total) * 100) : 0;
    var unv = usedUnverified(r);
    var h =
      '<div class="stack" style="gap:24px">' +
      '<div class="result-head" data-anim="r"><span class="eyebrow">Ringkasan wawancara · ' +
      esc(
        new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      ) +
      "</span>" +
      '<h1 class="display result-title">Ringkasan untuk ' +
      esc(computeOrtu(p)) +
      "</h1>" +
      '<p class="muted">Calon murid: ' +
      esc(p.anak) +
      (p.alamat ? " · Alamat: " + esc(p.alamat) : "") +
      (p.pewawancara ? " · Pewawancara: " + esc(p.pewawancara) : "") +
      "</p></div>";
    h +=
      '<div class="grid"><div class="card meter" data-anim="r"><span class="eyebrow">Harapan yang terjawab data sekolah</span>' +
      '<div class="row" style="align-items:baseline;gap:10px"><span class="display meter-num" id="meter-num" data-to="' +
      r.covered +
      '">' +
      r.covered +
      '</span><span class="muted">dari ' +
      r.total +
      " hal yang disampaikan</span></div>" +
      '<div class="bar"><i id="meter-bar" style="width:' +
      pct +
      '%"></i></div>' +
      '<p class="muted">' +
      (r.total === 0
        ? "Jawaban belum menyebut tema yang dikenali. Kembali ke wawancara dan gali dengan contoh yang lebih konkret."
        : "Setiap hal yang disampaikan " +
          esc(sap()) +
          " dicocokkan dengan data di tab Data sekolah. Hal yang belum ada datanya perlu dijawab langsung oleh pewawancara.") +
      "</p></div>";
    h +=
      '<div class="card flat" data-anim="r"><span class="card-title">Kalimat penutup untuk pewawancara</span><p class="close-quote">' +
      esc(closing(r)) +
      "</p></div></div>";

    h += renderAiAnalysisSection();
    if (unv > 0)
      h +=
        '<div class="notice" data-anim="r">Ringkasan ini memakai ' +
        unv +
        " data contoh yang belum diverifikasi. Periksa dan ganti di tab Data sekolah sebelum dibagikan ke orang tua.</div>";

    h +=
      '<div class="stack"><h2 class="card-title" style="font-size:18px">Yang ' +
      esc(sap()) +
      " cari, dan jawaban sekolah</h2>";
    if (!r.order.length)
      h +=
        '<div class="empty">Belum ada tema yang dikenali dari jawaban.</div>';
    r.order.forEach(function (id) {
      h += themeCard(id, r.hits[id], false);
    });
    h += "</div>";

    var cids = Object.keys(r.concerns);
    if (cids.length) {
      h +=
        '<div class="stack"><h2 class="card-title" style="font-size:18px">Pertimbangan yang perlu dijawab</h2>';
      cids.forEach(function (id) {
        h += themeCard(id, r.concerns[id], true);
      });
      h += "</div>";
    }

    h +=
      '<details data-anim="r"><summary>Jawaban lengkap orang tua</summary>' +
      QUESTIONS.map(function (q, i) {
        return (
          '<div class="qa"><span class="eyebrow">' +
          (i + 1) +
          ". " +
          esc(fill(q.q)) +
          "</span><span>" +
          (state.answers[i] && state.answers[i].trim()
            ? esc(state.answers[i])
            : '<span class="muted">Tidak diisi</span>') +
          "</span></div>"
        );
      }).join("") +
      "</details>";

    h +=
      '<details data-anim="r"><summary>Teks siap salin</summary><div class="stack" style="padding-top:12px">' +
      '<textarea class="textarea plain" id="plain" readonly>' +
      esc(plainText(r)) +
      "</textarea>" +
      '<div class="row"><button class="btn btn-primary" data-action="copy" id="copy-btn"><i data-lucide="copy"></i> Salin ringkasan</button><span class="muted" id="copy-msg"></span></div></div></details>';

    h +=
      '<div class="row" data-anim="r">' +
      '<button class="btn btn-primary" data-action="print"><i data-lucide="printer"></i> Cetak / PDF</button>' +
      '<button class="btn btn-outline" data-action="tab" data-tab="history"><i data-lucide="clipboard-list"></i> Ke Daftar Riwayat</button>' +
      '<button class="btn btn-outline" data-action="edit-answers"><i data-lucide="edit-3"></i> Ubah jawaban</button>' +
      '<button class="btn btn-ghost" data-action="restart"><i data-lucide="rotate-ccw"></i> Wawancara baru</button>' +
      '</div></div>';
    return h;
  }

  function themeCard(id, snippets, isConcern) {
    var t = themeById(id),
      items = itemsFor(id);
    return (
      '<div class="card" data-anim="r"><div class="row between"><span class="card-title">' +
      esc(t.label) +
      "</span>" +
      '<span class="badge' +
      (isConcern ? " warn" : "") +
      '">' +
      (isConcern ? "Pertimbangan" : "Harapan") +
      "</span></div>" +
      '<div class="pair"><div class="stack" style="gap:8px"><span class="eyebrow">Kata ' +
      esc(sap()) +
      "</span>" +
      snippets
        .slice(0, 2)
        .map(function (s) {
          return '<p class="said">“' + esc(s) + "”</p>";
        })
        .join("") +
      "</div>" +
      '<div class="stack" style="gap:8px"><span class="eyebrow">Di ' +
      esc(state.school.name) +
      "</span>" +
      (items.length
        ? items.map(itemCard).join("")
        : '<div class="empty">Belum ada data sekolah untuk tema ini. Tambahkan di tab Data sekolah, atau jawab langsung saat wawancara.</div>') +
      "</div></div></div>"
    );
  }

  function closing(r) {
    var p = state.profile;
    var ortuName = computeOrtu(p);
    if (!r.total)
      return (
        "Terima kasih sudah berbagi, " +
        ortuName +
        ". Kami ingin mengenal harapan untuk " +
        p.anak +
        " lebih jauh."
      );
    var names = r.order.slice(0, 3).map(function (id) {
      return themeById(id).label.toLowerCase();
    });
    if (!names.length)
      names = Object.keys(r.concerns)
        .slice(0, 3)
        .map(function (id) {
          return themeById(id).label.toLowerCase();
        });
    var list =
      names.length > 1
        ? names.slice(0, -1).join(", ") +
          " dan " +
          names[names.length - 1]
        : names[0];
    return (
      "Dari obrolan ini, " +
      ortuName +
      " mencari " +
      list +
      " untuk " +
      p.anak +
      ". " +
      state.school.name +
      " punya jawaban untuk " +
      r.covered +
      " dari " +
      r.total +
      " hal yang disampaikan, dan kami siap menjawab sisanya bersama-sama."
    );
  }

  function plainText(r) {
    var p = state.profile,
      L = [];
    L.push("RINGKASAN WAWANCARA – " + state.school.name.toUpperCase());
    L.push(
      "Orang tua: " +
        computeOrtu(p) +
        " | Calon murid: " +
        p.anak +
        (p.alamat ? " | Alamat: " + p.alamat : "") +
        (p.pewawancara ? " | Pewawancara: " + p.pewawancara : ""),
    );
    L.push("");
    function block(id, snips, tag) {
      var t = themeById(id);
      L.push(tag + " " + t.label);
      snips.slice(0, 2).forEach(function (s) {
        L.push("  " + sap() + ' menyampaikan: "' + s + '"');
      });
      var items = itemsFor(id);
      if (!items.length)
        L.push("  Data sekolah: belum tersedia, dijawab langsung.");
      items.forEach(function (it) {
        L.push(
          "  Sekolah: " +
            it.title +
            ". " +
            it.detail +
            (it.verified ? "" : " (data contoh, belum diverifikasi)"),
        );
      });
      L.push("");
    }
    r.order.forEach(function (id) {
      block(id, r.hits[id], "[Harapan]");
    });
    Object.keys(r.concerns).forEach(function (id) {
      block(id, r.concerns[id], "[Pertimbangan]");
    });
    L.push(closing(r));
    return L.join("\n");
  }

  function dataView() {
    var s = state.school;
    var ver = s.items.filter(function (i) {
      return i.verified;
    }).length;
    function f(id, label, key) {
      return (
        '<div class="field"><label for="' +
        id +
        '">' +
        label +
        '</label><input class="input" id="' +
        id +
        '" data-sf="' +
        key +
        '" value="' +
        esc(s[key]) +
        '"></div>'
      );
    }
    var h =
      '<div class="stack" style="gap:24px"><div class="stack" data-anim="in"><span class="eyebrow">Sumber jawaban penguat</span>' +
      '<h1 class="display result-title">Data sekolah</h1>' +
      '<p class="muted" style="max-width:64ch">Semua penguat di hasil wawancara berasal dari data ini. Perubahan tersimpan otomatis di browser ini saja. Data yang ditandai contoh belum diverifikasi, jadi ganti dengan data resmi sekolah.</p></div>' +
      '<div class="card" data-anim="in">' +
      '<div class="row between" style="margin-bottom:12px">' +
      '<span class="card-title" style="display:flex;align-items:center;gap:6px;"><i data-lucide="sparkles" style="color:var(--accent,#0f766e);"></i> Pengaturan Gemini AI & Model</span>' +
      (state.geminiStatus === "ok"
        ? '<span class="badge ok"><i data-lucide="check-circle-2"></i> Terhubung (' + esc(state.selectedModel) + ')</span>'
        : state.geminiStatus === "error"
        ? '<span class="badge warn"><i data-lucide="alert-triangle"></i> Gagal</span>'
        : state.geminiStatus === "testing"
        ? '<span class="badge"><i data-lucide="loader" class="spin"></i> Menguji…</span>'
        : '<span class="badge"><i data-lucide="minus"></i> Belum diuji</span>') +
      '</div>' +
      '<div class="two" style="margin-bottom:12px;">' +
      '<div class="field"><label for="ai-model-select"><b>Pilih Model AI</b> (Google Gemini)</label>' +
      '<select class="select" id="ai-model-select" data-action="change-model">' +
      [
        { id: "gemini-1.5-flash", name: "⚡ Gemini 1.5 Flash (Rekomendasi Utama - Paling Stabil & Cepat)" },
        { id: "gemini-3.5-flash-lite", name: "🪶 Gemini 3.5 Flash Lite (Generasi Baru Super Ringan - Rekomendasi Resmi Google)" },
        { id: "gemini-2.5-flash", name: "🚀 Gemini 2.5 Flash (Generasi Baru - Cepat & Cerdas)" },
        { id: "gemini-1.5-pro", name: "🧠 Gemini 1.5 Pro (Penalaran Mendalam / Deep Thinking)" }
      ].map(function (m) {
        return '<option value="' + m.id + '"' + (state.selectedModel === m.id ? " selected" : "") + '>' + m.name + '</option>';
      }).join("") +
      '</select>' +
      '<p class="muted" style="font-size:11.5px;margin-top:2px;">Semua model di atas tersedia gratis di Google AI Studio (Free Tier).</p></div>' +
      '<div class="field"><label>Status Kuota & Biaya</label>' +
      '<div style="padding:8px 12px;background:var(--soft,#f0fdf4);border:1px solid var(--border,#bbf7d0);border-radius:var(--radius-sm,6px);font-size:12px;color:var(--primary);">' +
      '✅ <b>100% Gratis Tanpa Kartu Kredit</b><br><span style="opacity:0.85;">1.500 request/hari · 1.000.000 token/menit</span>' +
      '</div></div>' +
      '</div>' +
      '<div class="field"><label for="gemini-keys">API Keys Gemini (satu per baris — key teratas = utama, otomatis ganti jika kuota habis)</label>' +
      '<textarea class="textarea" id="gemini-keys" style="min-height:76px;font-family:monospace;font-size:12px;letter-spacing:0.02em;" placeholder="AIzaSyXXXXXXXXXXXXXXXXXXXX&#10;AIzaSyYYYYYYYYYYYYYYYYYYYY">' +
      esc(state.geminiKeys.join("\n")) +
      '</textarea></div>' +
      (state.geminiMsg
        ? '<div style="font-size:13px;margin:6px 0 10px;line-height:1.45;color:' +
          (state.geminiStatus === "ok" ? "var(--muted)" : "var(--danger)") +
          '">' + state.geminiMsg + '</div>'
        : '') +
      '<div class="row">' +
      '<button class="btn btn-primary btn-sm" data-action="save-gemini-keys"><i data-lucide="save"></i> Simpan Pengaturan AI</button>' +
      '<button class="btn btn-outline btn-sm" data-action="test-gemini"><i data-lucide="zap"></i> Tes Koneksi Model</button>' +
      (state.geminiKeys.length > 1
        ? '<span class="muted" style="font-size:12px;align-self:center;">Key aktif: #' +
          (state.geminiKeyIdx + 1) + ' dari ' + state.geminiKeys.length + '</span>'
        : '') +
      '</div></div>' +
      '<div class="card" data-anim="in" style="border-left:4px solid var(--accent, #0f766e);">' +
      '<div class="row between" style="margin-bottom:8px;align-items:flex-start;">' +
      '<div>' +
      '<span class="card-title" style="display:flex;align-items:center;gap:8px;">' +
      '<i data-lucide="book-open-check" style="color:var(--accent, #0f766e);"></i> Sumber Dokumen AI (Grounding ala NotebookLM)</span>' +
      '<p class="muted" style="font-size:13px;margin:4px 0 0;">' +
      'AI akan membaca dokumen ini sebagai <b>sumber rujukan utama</b> saat menganalisis jawaban dan memberikan penguat secara real-time.' +
      '</p></div>' +
      '<div style="text-align:right;">' +
      '<span class="badge ok" id="badge-token-count" style="font-size:11px;padding:3px 8px;">' +
      '📊 Estimasi: ~' + estimateTokens(state.aiKnowledge) + ' tokens' +
      '</span>' +
      '</div></div>' +
      '<div class="field">' +
      '<label for="ai-knowledge-base">Teks Dokumen Sumber (Tata tertib, pedoman komitmen, kurikulum, FAQ):</label>' +
      '<textarea class="textarea" id="ai-knowledge-base" style="min-height:180px;font-family:var(--font-mono, monospace);font-size:12px;line-height:1.5;" placeholder="Tempelkan dokumen sumber rujukan sekolah di sini...">' +
      esc(state.aiKnowledge || DEFAULT_KNOWLEDGE) +
      '</textarea></div>' +
      '<div class="row between" style="gap:8px;flex-wrap:wrap;">' +
      '<div class="row" style="gap:8px;">' +
      '<button class="btn btn-primary btn-sm" data-action="save-ai-knowledge"><i data-lucide="save"></i> Simpan Sumber Dokumen</button>' +
      '<button class="btn btn-outline btn-sm" data-action="reset-ai-knowledge" title="Kembalikan ke isi referensi.md bawaan"><i data-lucide="rotate-ccw"></i> Muat Ulang referensi.md</button>' +
      '</div>' +
      '<div>' +
      '<label class="btn btn-ghost btn-sm" style="cursor:pointer;" title="Unggah dokumen teks (.txt atau .md)">' +
      '<i data-lucide="upload"></i> Unggah File (.txt / .md)' +
      '<input type="file" id="upload-knowledge" accept=".txt,.md" style="display:none;">' +
      '</label>' +
      '</div></div></div>' +
      '<div class="card" data-anim="in"><div class="card-title">Profil sekolah</div>' +
      '<div class="two">' +
      f("sf-name", "Nama sekolah", "name") +
      f("sf-level", "Jenjang", "level") +
      "</div>" +
      '<div class="two">' +
      f("sf-phone", "Telepon", "phone") +
      f("sf-web", "Situs web", "website") +
      "</div>" +
      '<div class="two">' +
      f("sf-addr", "Alamat", "address") +
      f("sf-year", "Tahun berdiri", "founded") +
      "</div></div>" +
      '<div class="card" data-anim="in" style="border-left:4px solid var(--accent, #0f766e);">' +
      '<div class="row between" style="margin-bottom:12px;align-items:center;">' +
      '<div><span class="card-title" style="display:flex;align-items:center;gap:8px;">' +
      '<i data-lucide="shield-check" style="color:var(--accent, #0f766e);"></i> 7 Butir Komitmen Resmi SD Anak Saleh</span>' +
      '<p class="muted" style="font-size:13px;margin:4px 0 0;">Referensi resmi yang otomatis menjadi penguat wawancara komitmen wali murid.</p></div>' +
      '<button class="btn btn-outline btn-sm" data-action="sync-reference" title="Perbarui ulang butir komitmen resmi">' +
      '<i data-lucide="refresh-cw"></i> Sinkronkan Referensi' +
      '</button></div>' +
      '<div class="stack" style="gap:8px;">' +
      [
        { id: "i13", t: "Komitmen Bijak Bersosial Media", tag: "Komitmen", d: "Penyelesaian internal & kekeluargaan, tanpa memviralkan masalah sekolah ke media sosial." },
        { id: "i14", t: "Etika Berpakaian (Dress Code) Antar/Jemput", tag: "Komitmen", d: "Teladan nilai syariat: bapak celana panjang rapi, ibu wajib hijab/jilbab syar'i." },
        { id: "i11", t: "Saluran Resmi Saran dan Kritik", tag: "Kerja Sama Ortu", d: "Masukan santun & produktif melalui humas, dialog resmi, atau janji temu manajemen." },
        { id: "i6", t: "Sinkronisasi Pembiasaan Ibadah Harian", tag: "Pembiasaan Agama", d: "Kawal shalat fardhu, dhuha, dan tadarus Al-Qur'an secara konsisten di rumah." },
        { id: "i7", t: "Penegakan Adab & Anti-Bullying (Berkata Kasar)", tag: "Akhlak & Karakter", d: "Aturan ketat larangan bully & berkata kasar, serta dukungan pembinaan sekolah." },
        { id: "i15", t: "Kedisiplinan Kehadiran dan Waktu Pagi", tag: "Komitmen", d: "Ritme pagi disiplin di rumah agar anak hadir tepat waktu sebelum bel pembiasaan." },
        { id: "i16", t: "Pembatasan Gadget (Gawai) dan Teknologi", tag: "Komitmen", d: "Aturan 'no gadget' magrib–isya di rumah dan larangan bawa gawai ke sekolah." }
      ].map(function (ref, idx) {
        return (
          '<div style="padding:10px 14px;background:var(--bg-subtle, #f8fafc);border:1px solid var(--border-subtle, #e2e8f0);border-radius:var(--radius-sm, 6px);display:flex;align-items:flex-start;gap:10px;">' +
          '<span style="font-weight:600;color:var(--accent, #0f766e);min-width:20px;">' + (idx + 1) + '.</span>' +
          '<div style="flex:1;">' +
          '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">' +
          '<strong style="font-size:13px;color:var(--text-main, #0f172a);">' + esc(ref.t) + '</strong>' +
          '<span class="badge ok" style="font-size:10px;padding:1px 6px;">' + esc(ref.tag) + '</span>' +
          '</div>' +
          '<p class="muted" style="font-size:12px;margin:2px 0 0;line-height:1.4;">' + esc(ref.d) + '</p>' +
          '</div>' +
          '</div>'
        );
      }).join("") +
      '</div></div>' +
      '<div class="row between" data-anim="in"><div class="stat"><span class="badge ok">' +
      ver +
      ' terverifikasi</span><span class="badge warn">' +
      (s.items.length - ver) +
      " contoh</span></div>" +
      '<button class="btn btn-primary btn-sm" data-action="add-item"><i data-lucide="plus"></i> Tambah data</button></div><div class="stack">';
    s.items.forEach(function (it) {
      h +=
        '<div class="item-edit" data-anim="in"><div class="two"><div class="field"><label for="t-' +
        it.id +
        '">Judul</label><input class="input" id="t-' +
        it.id +
        '" data-if="title" data-id="' +
        it.id +
        '" value="' +
        esc(it.title) +
        '"></div>' +
        '<div class="field"><label for="h-' +
        it.id +
        '">Tema</label><select class="select" id="h-' +
        it.id +
        '" data-if="theme" data-id="' +
        it.id +
        '">' +
        THEMES.map(function (t) {
          return (
            '<option value="' +
            t.id +
            '"' +
            (t.id === it.theme ? " selected" : "") +
            ">" +
            esc(t.label) +
            "</option>"
          );
        }).join("") +
        "</select></div></div>" +
        '<div class="field"><label for="d-' +
        it.id +
        '">Keterangan</label><textarea class="textarea" style="min-height:64px" id="d-' +
        it.id +
        '" data-if="detail" data-id="' +
        it.id +
        '">' +
        esc(it.detail) +
        "</textarea></div>" +
        '<div class="two"><div class="field"><label for="s-' +
        it.id +
        '">Sumber</label><input class="input" id="s-' +
        it.id +
        '" data-if="source" data-id="' +
        it.id +
        '" value="' +
        esc(it.source || "") +
        '" placeholder="Contoh: Brosur PPDB 2026"></div>' +
        '<div class="row between" style="align-self:end"><label class="check"><input type="checkbox" id="v-' +
        it.id +
        '" data-if="verified" data-id="' +
        it.id +
        '"' +
        (it.verified ? " checked" : "") +
        ">Sudah diverifikasi</label>" +
        '<button class="btn btn-ghost btn-sm" data-action="del-item" data-id="' +
        it.id +
        '"><i data-lucide="trash-2"></i> Hapus</button></div></div></div>';
    });
    h +=
      '</div><details data-anim="in"><summary>Cadangkan atau pulihkan data (JSON)</summary><div class="stack" style="padding-top:12px">' +
      '<p class="muted">Salin teks ini untuk mencadangkan data. Untuk memulihkan atau memindahkan ke perangkat lain, tempel JSON lalu pilih Terapkan.</p>' +
      '<textarea class="textarea plain" id="json-box">' +
      esc(JSON.stringify(s, null, 2)) +
      "</textarea>" +
      '<div class="err" id="json-err" hidden></div><div class="row"><button class="btn btn-outline btn-sm" data-action="copy-json"><i data-lucide="copy"></i> Salin JSON</button>' +
      '<button class="btn btn-outline btn-sm" data-action="apply-json"><i data-lucide="check"></i> Terapkan JSON</button><button class="btn btn-ghost btn-sm" data-action="reset-school"><i data-lucide="rotate-ccw"></i> Kembalikan data bawaan</button><span class="muted" id="json-msg"></span></div></div></details></div>';
    return h;
  }

  /* ---------- History View ---------- */
  function historyView() {
    var list = state.interviews || [];
    var q = (state.searchQuery || "").toLowerCase().trim();
    if (q) {
      list = list.filter(function (it) {
        return (
          (it.anak && it.anak.toLowerCase().indexOf(q) >= 0) ||
          (it.ortu && it.ortu.toLowerCase().indexOf(q) >= 0) ||
          (it.ayah && it.ayah.toLowerCase().indexOf(q) >= 0) ||
          (it.ibu && it.ibu.toLowerCase().indexOf(q) >= 0) ||
          (it.alamat && it.alamat.toLowerCase().indexOf(q) >= 0) ||
          (it.pewawancara && it.pewawancara.toLowerCase().indexOf(q) >= 0)
        );
      });
    }

    var fbStatusBadge = "";
    if (state.firebaseStatus === "connected") {
      fbStatusBadge =
        '<span class="badge ok" style="padding:4px 10px;font-size:12px;"><i data-lucide="cloud"></i> Firebase Realtime Aktif</span>';
    } else if (state.firebaseStatus === "error") {
      fbStatusBadge =
        '<span class="badge" style="background:hsl(0 85% 95%);color:var(--danger);border-color:hsl(0 70% 80%);padding:4px 10px;font-size:12px;"><i data-lucide="alert-triangle"></i> Error Firebase</span>';
    } else {
      fbStatusBadge =
        '<span class="badge warn" style="padding:4px 10px;font-size:12px;"><i data-lucide="hard-drive"></i> Mode Lokal (Belum terhubung Firebase)</span>';
    }

    var h =
      '<div class="stack" style="gap:20px">' +
      '<div class="stack" data-anim="in">' +
      '<span class="eyebrow">Daftar & Rekap Calon Murid</span>' +
      '<h1 class="display result-title">Riwayat Wawancara</h1>' +
      '<div class="row between" style="align-items:center;">' +
      '<p class="muted">Tercatat <b>' +
      state.interviews.length +
      "</b> calon murid dari kuota 65 orang tua.</p>" +
      fbStatusBadge +
      "</div></div>";

    if (state.firebaseStatus === "error") {
      h +=
        '<div class="notice" style="background:hsl(0 85% 96%);color:var(--danger);border-color:hsl(0 70% 80%);" data-anim="in"><b>Kendala Firestore:</b> ' +
        esc(state.firebaseError) +
        '<br><small style="margin-top:4px;display:block;">* Jika muncul <i>"Missing or insufficient permissions"</i>, buka Firebase Console > Firestore Database > Rules, lalu ganti rules menjadi:<br><code>rules_version = \'2\'; service cloud.firestore { match /databases/{database}/documents { match /{document=**} { allow read, write: if true; } } }</code></small></div>';
    } else if (state.firebaseStatus !== "connected") {
      h +=
        '<div class="notice" data-anim="in"><b>Tips Kolaborasi 10 Pewawancara:</b> Pastikan file <code>firebase-config.js</code> sudah terisi dengan benar agar hasil wawancara dari semua laptop langsung tersinkron otomatis ke sini secara realtime.</div>';
    }

    h +=
      '<div class="card" data-anim="in">' +
      '<div class="row between">' +
      '<div style="flex:1;min-width:240px;">' +
      '<input type="text" class="input" id="hist-search" placeholder="Ketik untuk memfilter nama anak, orang tua, alamat, atau pewawancara..." value="' +
      esc(state.searchQuery) +
      '">' +
      "</div>" +
      '<div class="row">' +
      '<button class="btn btn-outline btn-sm" data-action="export-csv"><i data-lucide="file-spreadsheet"></i> Unduh Rekap Excel (CSV)</button>' +
      "</div>" +
      "</div></div>";

    if (!list.length) {
      h +=
        '<div class="empty" data-anim="in" style="text-align:center;padding:36px 20px;">' +
        (state.searchQuery
          ? 'Tidak ada calon murid yang cocok dengan kata kunci "' +
            esc(state.searchQuery) +
            '".'
          : "Belum ada riwayat wawancara. Silakan mulai sesi baru di tab Wawancara.") +
        "</div>";
    } else {
      h += '<div class="stack" data-anim="in" id="hist-list">';
      list.forEach(function (it) {
        var labelOrtu = it.ortu || computeOrtu(it);
        h +=
          '<div class="hist-item">' +
          '<div class="stack" style="gap:4px;flex:1;min-width:200px;">' +
          '<div class="row" style="gap:8px;align-items:center;">' +
          '<span style="font-weight:600;font-size:15px;">' +
          esc(it.anak) +
          "</span>" +
          '<span class="badge">' +
          esc(labelOrtu) +
          "</span>" +
          '<span class="badge ok">' +
          (it.percent || 0) +
          "% Selaras</span>" +
          "</div>" +
          '<div class="hist-meta">' +
          "<span><i data-lucide=\"calendar\"></i> " +
          esc(it.displayDate || "-") +
          "</span>" +
          (it.alamat ? "<span><i data-lucide=\"map-pin\"></i> " + esc(it.alamat) + "</span>" : "") +
          "<span><i data-lucide=\"user\"></i> Pewawancara: " +
          esc(it.pewawancara || "Tidak dicatat") +
          "</span>" +
          "<span><i data-lucide=\"target\"></i> " +
          (it.covered || 0) +
          "/" +
          (it.total || 0) +
          " harapan terjawab</span>" +
          "</div></div>" +
          '<div class="row" style="gap:8px;">' +
          '<button class="btn btn-primary btn-sm" data-action="view-history" data-id="' +
          esc(it.id) +
          '"><i data-lucide="external-link"></i> Buka Ringkasan</button>' +
          '<button class="btn btn-ghost btn-sm" style="color:var(--danger);" data-action="del-history" data-id="' +
          esc(it.id) +
          '"><i data-lucide="trash-2"></i> Hapus</button>' +
          "</div></div>";
      });
      h += "</div>";
    }

    h += "</div>";
    return h;
  }

  function updateTabBadge() {
    var el = $("#badge-hist-count");
    if (el) {
      el.textContent =
        "(" + (state.interviews ? state.interviews.length : 0) + ")";
    }
  }

  /* ---------- Render ---------- */
  function render() {
    $("#tab-interview").setAttribute(
      "aria-selected",
      state.tab === "interview",
    );
    var th = $("#tab-history");
    if (th) th.setAttribute("aria-selected", state.tab === "history");
    $("#tab-data").setAttribute("aria-selected", state.tab === "data");
    updateTabBadge();
    $("#brand-sub").textContent = state.school.name;
    var v = $("#view"),
      html;
    if (state.tab === "history") html = historyView();
    else if (state.tab === "data") html = dataView();
    else if (state.done) html = resultView();
    else if (state.step === 0) html = startView();
    else html = questionView();
    v.innerHTML = html;
    lastThemes = {};
    if (state.tab === "interview" && !state.done && state.step > 0) {
      $("#answer").value = state.answers[state.step - 1] || "";
      updatePenguat();
      animFrom($(".step-card"), {
        opacity: 0,
        x: 16,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    animFrom($$("[data-anim=in]", v), {
      opacity: 0,
      y: 14,
      duration: 0.45,
      stagger: 0.07,
      ease: "power2.out",
    });
    if (state.done && state.tab === "interview") {
      animFrom($$("[data-anim=r]", v), {
        opacity: 0,
        y: 18,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
      var G = g(),
        bar = $("#meter-bar"),
        num = $("#meter-num");
      if (G && bar)
        G.from(bar, {
          width: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.2,
        });
      if (G && num) {
        var o = { n: 0 },
          to = +num.getAttribute("data-to");
        G.to(o, {
          n: to,
          duration: 0.9,
          delay: 0.2,
          ease: "power1.out",
          onUpdate: function () {
            num.textContent = Math.round(o.n);
          },
        });
      }
    }
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  var penguatTimer = null;
  function updatePenguat() {
    var box = $("#penguat");
    if (!box) return;
    var text = state.answers[state.step - 1] || "";
    var ms = analyze(text),
      html = "",
      cur = {};
    if (!text.trim()) {
      html =
        '<div class="empty">Mulai mengetik jawaban orang tua. Data sekolah yang relevan muncul di sini, siap dibacakan.</div>';
    } else if (!ms.length) {
      html =
        '<div class="empty">Belum ada kata kunci yang dikenali. Gali lebih dalam: minta contoh kejadian atau kebiasaan yang konkret.</div>';
    } else {
      ms.forEach(function (m) {
        cur[m.theme.id] = 1;
        var items = itemsFor(m.theme.id);
        html +=
          '<div class="group" data-theme="' +
          m.theme.id +
          '"><span class="eyebrow">' +
          esc(m.theme.label) +
          "</span>" +
          '<p class="said">“' +
          esc(m.snippet) +
          "”</p>" +
          (items.length
            ? items.map(itemCard).join("")
            : '<div class="empty">Belum ada data sekolah untuk tema ini. Tambahkan di tab Data sekolah.</div>') +
          "</div>";
      });
    }
    box.innerHTML = html;
    $("#pg-count").textContent = ms.length + " tema";
    var fresh = $$(".group", box).filter(function (el) {
      return !lastThemes[el.getAttribute("data-theme")];
    });
    animFrom(fresh, {
      opacity: 0,
      y: 12,
      duration: 0.4,
      stagger: 0.06,
      ease: "power2.out",
    });
    lastThemes = cur;
  }
  function schedulePenguat() {
    clearTimeout(penguatTimer);
    penguatTimer = setTimeout(updatePenguat, 280);
  }

  function handleCandidateAutocomplete(t) {
    if (!t || !t.id) return;
    var val = (t.value || "").trim().toLowerCase();
    if (t.id === "p-id") {
      state.profile.id = t.value === "manual" ? "" : t.value.trim();
      if (!val || val === "manual") {
        return;
      }
      var found = candidatesData.filter(function (c) {
        return c.id.toLowerCase() === val;
      })[0];
      if (found) {
        state.profile.anak = found.anak || "";
        state.profile.alamat = found.alamat || "";

        if (found.ayah) {
          state.profile.ayah = found.ayah;
        } else if (found.ortu && /^ayah/i.test(found.ortu)) {
          state.profile.ayah = found.ortu.replace(/^ayah\s*/i, "");
        } else {
          state.profile.ayah = "";
        }

        if (found.ibu) {
          state.profile.ibu = found.ibu;
        } else if (found.ortu && /^(bunda|ibu)/i.test(found.ortu)) {
          state.profile.ibu = found.ortu.replace(/^(bunda|ibu)\s*/i, "");
        } else {
          state.profile.ibu = "";
        }

        state.profile.ortu = computeOrtu(state.profile);
        state.profile.sapaan = sap(state.profile);

        var elAnak = $("#p-anak");
        var elAyah = $("#p-ayah");
        var elIbu = $("#p-ibu");
        var elAlamat = $("#p-alamat");
        if (elAnak) elAnak.value = state.profile.anak;
        if (elAyah) elAyah.value = state.profile.ayah;
        if (elIbu) elIbu.value = state.profile.ibu;
        if (elAlamat) elAlamat.value = state.profile.alamat;
      }
    } else if (t.id === "p-anak") {
      state.profile.anak = t.value.trim();
    } else if (t.id === "p-ayah") {
      state.profile.ayah = t.value.trim();
      state.profile.ortu = computeOrtu(state.profile);
      state.profile.sapaan = sap(state.profile);
    } else if (t.id === "p-ibu") {
      state.profile.ibu = t.value.trim();
      state.profile.ortu = computeOrtu(state.profile);
      state.profile.sapaan = sap(state.profile);
    } else if (t.id === "p-alamat") {
      state.profile.alamat = t.value.trim();
    }
  }

  /* ---------- Events ---------- */
  document.addEventListener("input", function (e) {
    var t = e.target;
    if (t.id === "answer") {
      state.answers[state.step - 1] = t.value;
      schedulePenguat();
    } else if (t.id === "ai-knowledge-base") {
      state.aiKnowledge = t.value;
      var badge = $("#badge-token-count");
      if (badge) {
        badge.textContent = "📊 Estimasi: ~" + estimateTokens(t.value) + " tokens";
      }
    } else if (t.id === "hist-search") {
      state.searchQuery = t.value;
      var q = t.value.toLowerCase().trim();
      $$(".hist-item").forEach(function (el) {
        el.style.display =
          el.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
      });
    } else if (t.id === "p-id" || t.id === "p-anak" || t.id === "p-ayah" || t.id === "p-ibu" || t.id === "p-alamat") {
      handleCandidateAutocomplete(t);
    } else if (t.getAttribute && t.getAttribute("data-profile")) {
      state.profile[t.getAttribute("data-profile")] = t.value;
    } else if (t.getAttribute && t.getAttribute("data-sf")) {
      state.school[t.getAttribute("data-sf")] = t.value;
      saveSchool();
    } else if (t.getAttribute && t.getAttribute("data-if")) {
      var id = t.getAttribute("data-id");
      var it = state.school.items.filter(function (x) {
        return x.id === id;
      })[0];
      if (it) {
        it[t.getAttribute("data-if")] =
          t.type === "checkbox" ? t.checked : t.value;
        saveSchool();
      }
    }
  });

  document.addEventListener("change", function (e) {
    var t = e.target;
    if (t && t.id === "ai-model-select") {
      state.selectedModel = t.value;
      saveSelectedModel(t.value);
    } else if (t && t.id === "upload-knowledge" && t.files && t.files[0]) {
      var reader = new FileReader();
      reader.onload = function (evt) {
        state.aiKnowledge = evt.target.result;
        saveKnowledge(state.aiKnowledge);
        render();
        alert("Dokumen sumber AI berhasil dimuat dari file! Estimasi: ~" + estimateTokens(state.aiKnowledge) + " tokens.");
      };
      reader.readAsText(t.files[0]);
    } else if (t && (t.id === "p-id" || t.id === "p-anak" || t.id === "p-ayah" || t.id === "p-ibu" || t.id === "p-alamat")) {
      handleCandidateAutocomplete(t);
    } else if (t && t.getAttribute && t.getAttribute("data-profile")) {
      state.profile[t.getAttribute("data-profile")] = t.value;
    }
  });

  document.addEventListener("submit", function (e) {
    e.preventDefault();
    startInterview();
  });

  function startInterview() {
    var p = state.profile;
    if (!p.anak.trim()) {
      state.startErr =
        "Isi atau pilih nama calon murid terlebih dahulu.";
      var el = $("#start-err");
      if (el) {
        el.textContent = state.startErr;
        el.hidden = false;
      }
      return;
    }
    if (!p.pewawancara.trim()) {
      state.startErr = "Pilih nama pewawancara terlebih dahulu.";
      var el = $("#start-err");
      if (el) {
        el.textContent = state.startErr;
        el.hidden = false;
      }
      return;
    }
    p.ortu = computeOrtu(p);
    p.sapaan = sap(p);
    state.startErr = "";
    state.step = 1;
    render();
  }

  function copyText(text, srcEl, msgEl) {
    function fallback() {
      if (srcEl) {
        srcEl.focus();
        srcEl.select();
      }
      if (msgEl)
        msgEl.textContent =
          "Teks terpilih. Tekan salin di perangkat Anda.";
    }
    try {
      navigator.clipboard.writeText(text).then(function () {
        if (msgEl) msgEl.textContent = "Tersalin.";
      }, fallback);
    } catch (err) {
      fallback();
    }
  }

  function copyViaTextarea(text) {
    var dummy = document.createElement("textarea");
    dummy.value = text;
    document.body.appendChild(dummy);
    dummy.select();
    try {
      document.execCommand("copy");
      alert("Draf pesan WhatsApp berhasil disalin!");
    } catch (_) {}
    document.body.removeChild(dummy);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-action]") : null;
    if (!b) return;
    var a = b.getAttribute("data-action");
    if (a === "tab") {
      state.tab = b.getAttribute("data-tab");
      render();
    } else if (a === "start") {
      e.preventDefault();
      startInterview();
    } else if (a === "next") {
      if (state.step < N) {
        state.step++;
      } else {
        state.done = true;
        saveCurrentInterview();
      }
      render();
      window.scrollTo(0, 0);
    } else if (a === "prev") {
      if (state.step > 0) state.step--;
      render();
    } else if (a === "chip") {
      var ta = $("#answer"),
        txt = QUESTIONS[state.step - 1].chips[+b.getAttribute("data-i")];
      var cur = ta.value.trim();
      ta.value =
        (cur ? cur.replace(/[.!?]*$/, ".") + " " : "") + txt + ".";
      state.answers[state.step - 1] = ta.value;
      ta.focus();
      updatePenguat();
    } else if (a === "print") {
      window.print();
    } else if (a === "export-csv") {
      exportCSV();
    } else if (a === "view-history") {
      var id = b.getAttribute("data-id");
      var target = state.interviews.filter(function (x) {
        return x.id === id;
      })[0];
      if (target) {
        state.profile = {
          id: target.candidateId || target.id || "",
          sapaan: target.sapaan || "Ayah/Bunda",
          ayah: target.ayah || "",
          ibu: target.ibu || "",
          ortu: target.ortu || computeOrtu(target),
          alamat: target.alamat || "",
          anak: target.anak || "",
          pewawancara: target.pewawancara || "",
        };
        state.answers = (target.answers || []).slice();
        state.activeSessionId = target.id;
        state.aiAnalysis = target.aiAnalysis || null;
        state.aiAnalysisStatus = target.aiAnalysis ? "ok" : "idle";
        state.aiAnalysisErr = "";
        state.aiPenguat = {};
        state.done = true;
        state.tab = "interview";
        render();
        window.scrollTo(0, 0);
      }
    } else if (a === "del-history") {
      var id = b.getAttribute("data-id");
      deleteInterview(id);
    } else if (a === "edit-answers") {
      state.done = false;
      state.step = N;
      render();
    } else if (a === "restart") {
      state.answers = [];
      state.done = false;
      state.step = 0;
      state.profile.id = "";
      state.profile.ayah = "";
      state.profile.ibu = "";
      state.profile.ortu = "";
      state.profile.alamat = "";
      state.profile.anak = "";
      state.profile.pewawancara = "";
      state.activeSessionId = null;
      state.aiAnalysis = null;
      state.aiAnalysisStatus = "idle";
      state.aiAnalysisErr = "";
      state.aiPenguat = {};
      render();
      window.scrollTo(0, 0);
    } else if (a === "copy") {
      copyText($("#plain").value, $("#plain"), $("#copy-msg"));
    } else if (a === "add-item") {
      state.school.items.unshift({
        id: "i" + Date.now(),
        theme: "agama",
        title: "Data baru",
        detail: "",
        verified: false,
        source: "",
      });
      saveSchool();
      render();
    } else if (a === "del-item") {
      var id = b.getAttribute("data-id");
      state.school.items = state.school.items.filter(function (x) {
        return x.id !== id;
      });
      saveSchool();
      render();
    } else if (a === "copy-json") {
      var jb = $("#json-box");
      jb.value = JSON.stringify(state.school, null, 2);
      copyText(jb.value, jb, $("#json-msg"));
    } else if (a === "apply-json") {
      var err = $("#json-err");
      try {
        var o = JSON.parse($("#json-box").value);
        if (!o || !Array.isArray(o.items)) throw new Error("bentuk");
        o.items.forEach(function (it, i) {
          it.id = it.id || "x" + i;
          it.theme = themeById(it.theme) ? it.theme : "agama";
          it.title = it.title || "";
          it.detail = it.detail || "";
          it.verified = !!it.verified;
          it.source = it.source || "";
        });
        state.school = o;
        saveSchool();
        render();
      } catch (x) {
        err.textContent =
          'JSON tidak valid. Pastikan ada daftar "items" dan formatnya utuh.';
        err.hidden = false;
      }
    } else if (a === "reset-school") {
      state.school = JSON.parse(JSON.stringify(DEFAULT_SCHOOL));
      saveSchool();
      render();
    } else if (a === "sync-reference") {
      var map = {};
      state.school.items.forEach(function (it) {
        map[it.id] = it;
      });
      DEFAULT_SCHOOL.items.forEach(function (defIt) {
        if (!map[defIt.id]) {
          state.school.items.push(JSON.parse(JSON.stringify(defIt)));
        } else if (defIt.verified) {
          map[defIt.id].title = defIt.title;
          map[defIt.id].detail = defIt.detail;
          map[defIt.id].theme = defIt.theme;
          map[defIt.id].verified = true;
          map[defIt.id].source = defIt.source;
          map[defIt.id].url = defIt.url || "";
        }
      });
      state.school.youtube = DEFAULT_SCHOOL.youtube;
      state.school.instagram = DEFAULT_SCHOOL.instagram;
      state.school.instagramHandle = DEFAULT_SCHOOL.instagramHandle;
      state.school.v = 3;
      saveSchool();
      render();
    } else if (a === "save-gemini-keys" || a === "save-ai-settings") {
      var ta = $("#gemini-keys");
      var selModel = $("#ai-model-select");
      if (selModel) {
        state.selectedModel = selModel.value;
        saveSelectedModel(selModel.value);
      }
      var keys = ta
        ? ta.value
            .split("\n")
            .map(function (k) {
              return k.trim()
                .replace(/^['"]+|['",;]+$/g, "")
                .replace(/^(?:api[_\s-]?key\s*[:=]\s*)/i, "")
                .trim();
            })
            .filter(Boolean)
        : [];
      state.geminiKeys = keys;
      state.geminiKeyIdx = 0;
      state.geminiStatus = "idle";
      state.geminiMsg = keys.length
        ? keys.length + " key tersimpan (Model: " + (state.selectedModel || "gemini-1.5-flash") + ")."
        : "Belum ada key.";
      saveGeminiKeys(keys);
      render();
    } else if (a === "save-ai-knowledge") {
      var taK = $("#ai-knowledge-base");
      if (taK) {
        state.aiKnowledge = taK.value;
        saveKnowledge(taK.value);
        alert("Sumber Dokumen AI (Knowledge Base) berhasil disimpan! AI akan menggunakannya sebagai acuan rujukan.");
        render();
      }
    } else if (a === "reset-ai-knowledge") {
      if (confirm("Kembalikan dokumen sumber AI ke teks referensi standar (7 Butir Komitmen)?")) {
        state.aiKnowledge = DEFAULT_KNOWLEDGE;
        saveKnowledge(DEFAULT_KNOWLEDGE);
        render();
      }
    } else if (a === "test-gemini") {
      var ta = $("#gemini-keys");
      var selModel = $("#ai-model-select");
      if (selModel) {
        state.selectedModel = selModel.value;
        saveSelectedModel(selModel.value);
      }
      if (ta) {
        var inputKeys = ta.value
          .split("\n")
          .map(function (k) {
            return k.trim()
              .replace(/^['"]+|['",;]+$/g, "")
              .replace(/^(?:api[_\s-]?key\s*[:=]\s*)/i, "")
              .trim();
          })
          .filter(Boolean);
        if (inputKeys.length) {
          state.geminiKeys = inputKeys;
          saveGeminiKeys(inputKeys);
        }
      }
      if (!state.geminiKeys.length) {
        state.geminiStatus = "error";
        state.geminiMsg = "Silakan masukkan API Key di kolom teks terlebih dahulu.";
        render();
        return;
      }
      var testModel = state.selectedModel || "gemini-1.5-flash";
      state.geminiStatus = "testing";
      state.geminiMsg = "Menguji koneksi model " + testModel + "…";
      render();
      callGemini(
        "Balas dengan satu kalimat singkat dalam bahasa Indonesia bahwa koneksi model " + testModel + " berhasil.",
        "Kamu adalah asisten AI yang membalas singkat.",
        true // strictly test selected model
      )
        .then(function (result) {
          state.geminiStatus = "ok";
          state.geminiMsg =
            "Berhasil terhubung! (" + testModel + ") Balasan AI: \"" + result.trim().slice(0, 160) + "\"";
          render();
        })
        .catch(function (err) {
          state.geminiStatus = "error";
          var rawMsg = err.message || String(err);
          var friendlyTip = "";
          if (/no longer available|not found|unsupported/i.test(rawMsg)) {
            friendlyTip = "<br><small><b>Penyebab:</b> Model [" + esc(testModel) + "] sudah tidak didukung/tersedia oleh Google. Silakan pilih <b>Gemini 1.5 Flash</b> atau <b>Gemini 3.5 Flash Lite</b> pada dropdown di atas lalu klik Tes lagi.</small>";
          } else if (/API key not valid/i.test(rawMsg)) {
            friendlyTip = "<br><small><b>Penyebab:</b> API Key tidak valid. Pastikan Anda menyalin API Key dari <a href='https://aistudio.google.com/' target='_blank' style='color:inherit;text-decoration:underline;'>Google AI Studio (aistudio.google.com)</a>, <u>BUKAN</u> Web API Key dari Firebase.</small>";
          } else if (/Generative Language API has not been used/i.test(rawMsg) || /disabled/i.test(rawMsg)) {
            friendlyTip = "<br><small><b>Penyebab:</b> Layanan AI belum aktif di project Google tersebut. Buka <a href='https://aistudio.google.com/' target='_blank' style='color:inherit;text-decoration:underline;'>Google AI Studio</a>, klik <b>Get API key</b> lalu pilih <b>Create API key in new project</b>.</small>";
          } else if (/location|region|not supported/i.test(rawMsg)) {
            friendlyTip = "<br><small><b>Penyebab:</b> Lokasi IP internet tidak didukung. Pastikan tidak memakai VPN ke negara yang diblokir.</small>";
          } else if (/429|quota|rate limit/i.test(rawMsg)) {
            friendlyTip = "<br><small><b>Penyebab:</b> Batas kuota per menit sedang penuh. Tunggu 30 detik lalu klik tes lagi.</small>";
          }
          state.geminiMsg = "Gagal: " + rawMsg + friendlyTip;
          render();
          render();
        });
    } else if (a === "generate-ai-penguat") {
      var currentStep = state.step;
      var ta = $("#answer");
      if (ta) {
        state.answers[currentStep - 1] = ta.value;
      }
      var answer = (state.answers[currentStep - 1] || "").trim();
      var q = QUESTIONS[currentStep - 1];
      if (!answer) {
        alert("Silakan ketik atau pilih jawaban " + sap() + " terlebih dahulu.");
        return;
      }
      var cb = $("#ai-penguat-content");
      if (cb) {
        cb.innerHTML =
          '<span class="muted" style="display:inline-flex;align-items:center;gap:6px;"><i data-lucide="loader" class="spin"></i> Meramu respon penguat dari Dokumen Sekolah, YouTube & Instagram…</span>';
        if (window.lucide) lucide.createIcons();
      }
      var prompt =
        "Kamu adalah asisten pewawancara PPDB SD Anak Saleh Malang.\n" +
        "Pewawancara sedang mewawancarai " + sap() + " dari calon murid bernama " + (state.profile.anak || "ananda") + ".\n" +
        "Pertanyaan: \"" + fill(q.q) + "\"\n" +
        "Jawaban orang tua: \"" + answer + "\"\n\n" +
        "Tugas (Grounding ala NotebookLM): Buatkan 1-2 kalimat respon lisan (talking point) penguat yang hangat, empatik, dan meyakinkan untuk langsung diucapkan pewawancara.\n" +
        "Ketentuan:\n" +
        "1. Kuatkan keputusan orang tua dengan mengaitkan butir komitmen atau keunggulan SD Anak Saleh dari Sumber Dokumen Sekolah.\n" +
        "2. Sebutkan secara natural bahwa orang tua juga dapat melihat bukti dokumentasinya di video profil YouTube SD Anak Saleh atau Instagram resmi @sdanaksalehofficial jika relevan.\n" +
        "3. Berikan HANYA kalimat siap ucap (tanpa tanda petik, tanpa kata pengantar).";

      callGemini(prompt)
        .then(function (res) {
          state.aiPenguat[currentStep] = res.trim();
          var box = $("#ai-penguat-content");
          if (box) {
            box.innerHTML =
              '<div style="font-weight:500;margin-bottom:4px;color:var(--text-main,#0f172a);">“' +
              esc(res.trim()) +
              '”</div><div style="font-size:10px;color:var(--muted);display:flex;align-items:center;gap:4px;"><span class="badge ok" style="font-size:9px;padding:1px 4px;"><i data-lucide="check"></i> Siap Diucapkan</span> Berbasis Sumber Dokumen Sekolah (' + esc(state.selectedModel) + ')</div>';
            if (window.lucide) lucide.createIcons();
          }
        })
        .catch(function (err) {
          var box = $("#ai-penguat-content");
          if (box) {
            box.innerHTML =
              '<span style="color:var(--danger);font-size:12px;">Gagal memuat respon AI: ' +
              esc(err.message || String(err)) +
              '</span>';
          }
        });
    } else if (a === "run-full-ai-analysis") {
      state.aiAnalysisStatus = "loading";
      state.aiAnalysisErr = "";
      render();

      var summaryAll = QUESTIONS.map(function (q, idx) {
        return (
          (idx + 1) +
          ". Pertanyaan: " +
          fill(q.q) +
          "\n   Jawaban " +
          sap() +
          ": " +
          (state.answers[idx] || "(Belum dijawab)")
        );
      }).join("\n\n");

      var promptFull =
        "Kamu adalah konsultan ahli PPDB SD Anak Saleh Malang dengan kemampuan grounding seperti Google NotebookLM.\n" +
        "Lakukan analisis mendalam atas hasil wawancara calon orang tua murid dengan MEMBANDINGKAN DAN MENCOCOKKAN JAWABAN ORANG TUA TERHADAP SUMBER DOKUMEN SEKOLAH.\n\n" +
        "Calon Murid: " +
        (state.profile.anak || "-") +
        "\n" +
        "Orang Tua: " +
        computeOrtu(state.profile) +
        " (" +
        sap() +
        ")\n" +
        "Alamat: " +
        (state.profile.alamat || "-") +
        "\n" +
        "Pewawancara: " +
        (state.profile.pewawancara || "-") +
        "\n\n" +
        "Tanya Jawab Wawancara:\n" +
        summaryAll +
        "\n\n" +
        "Media Resmi Sekolah:\n" +
        "- Video Profil YouTube: " + (state.school.youtube || "https://youtu.be/Wttuw8v2-ME") + "\n" +
        "- Akun Instagram Resmi: " + (state.school.instagram || "https://www.instagram.com/sdanaksalehofficial/") + "\n\n" +
        "Format Output (Wajib ikuti persis 3 bagian di bawah dengan heading markdown ###):\n\n" +
        "### 1. Narasi Profil & Keselarasan dengan Dokumen Sekolah (NotebookLM Grounding)\n" +
        "(1-2 paragraf hangat tentang keselarasan harapan orang tua dengan iklim belajar di SD Anak Saleh. Sebutkan secara eksplisit butir komitmen atau aturan sekolah yang sangat selaras dari Dokumen Sumber, misal [Butir 1: Bijak Medsos], [Butir 4: Ibadah Harian], dll.)\n\n" +
        "### 2. Catatan Khusus & Rekomendasi untuk Wali Kelas / Tim PPDB\n" +
        "(3-4 poin rekomendasi konkret mengenai potensi anak, hal yang perlu ditegaskan bersama orang tua sesuai aturan sekolah, serta pendampingan awal masuk sekolah)\n\n" +
        "### 3. Draf Pesan WhatsApp Apresiasi untuk Orang Tua\n" +
        "(Draf pesan WhatsApp ramah dan islami untuk dikirimkan pewawancara kepada orang tua. Ucapkan terima kasih, tegaskan komitmen sinergi, serta sertakan link video profil YouTube " + (state.school.youtube || "https://youtu.be/Wttuw8v2-ME") + " dan Instagram " + (state.school.instagram || "https://www.instagram.com/sdanaksalehofficial/") + " agar keluarga bisa melihat dokumentasi pembiasaan sekolah bersama di rumah)";

      callGemini(promptFull)
        .then(function (text) {
          state.aiAnalysis = text.trim();
          state.aiAnalysisStatus = "ok";
          saveCurrentInterview();
          render();
        })
        .catch(function (err) {
          state.aiAnalysisStatus = "error";
          state.aiAnalysisErr = err.message || String(err);
          render();
        });
    } else if (a === "copy-wa-draft") {
      var full = state.aiAnalysis || "";
      var waMatch = full.match(/###\s*3[^\n]*\n([\s\S]*)$/i);
      var waText = waMatch ? waMatch[1].trim() : full;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(waText).then(function () {
          alert("Draf pesan WhatsApp berhasil disalin ke clipboard!");
        }).catch(function () {
          copyViaTextarea(waText);
        });
      } else {
        copyViaTextarea(waText);
      }
    }
  });

  /* ---------- Mulai ---------- */
  initFirebase();
  loadCandidates();
  render();
  if (window.lucide) {
    lucide.createIcons();
  }
  animFrom($("#topbar"), {
    opacity: 0,
    y: -10,
    duration: 0.5,
    ease: "power2.out",
  });
})();
