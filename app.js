(function () {
  "use strict";

  /* ---------- Data sekolah bawaan ---------- */
  var KEY = "sas-school-v1";
  var DEFAULT_SCHOOL = {
    name: "Sekolah Anak Saleh",
    level: "Sekolah Dasar",
    address: "Jl. Arumba No. 31, Tunggulwulung, Lowokwaru, Malang",
    phone: "(0341) 487088",
    website: "www.sekolahanaksaleh.sch.id",
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
        title: "Pembiasaan ibadah harian",
        detail:
          "Salat berjamaah, doa harian, dan hafalan surat pendek bersama guru.",
        verified: false,
        source: "",
      },
      {
        id: "i7",
        theme: "karakter",
        title: "Penguatan adab sehari-hari",
        detail:
          "Adab salam, antre, dan merapikan barang dibiasakan di setiap kelas.",
        verified: false,
        source: "",
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
        title: "Lingkungan yang aman",
        detail:
          "Aturan sekolah ramah anak dan penanganan perundungan yang jelas.",
        verified: false,
        source: "",
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
        title: "Komunikasi dengan orang tua",
        detail: "Laporan perkembangan berkala dan pertemuan parenting.",
        verified: false,
        source: "",
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
        title: "Kemitraan dan Tata Tertib Sekolah",
        detail:
          "SD Anak Saleh mengutamakan sinergi positif dengan orang tua untuk mendidik anak bersama, mematuhi tata tertib, serta saling menjaga nama baik sekolah baik di lingkungan nyata maupun media sosial.",
        verified: true,
        source: "Pedoman Kemitraan SD Anak Saleh",
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
      ],
    },
  ];
  var N = QUESTIONS.length;

  /* ---------- Data Pewawancara & Calon Murid ---------- */
  var INTERVIEWERS = [
    "Ustadzah Fatimah",
    "Ustadzah Nurul",
    "Ustadz Ahmad",
    "Ustadzah Aisyah",
    "Ustadz Ridwan",
    "Ustadzah Khadijah",
    "Ustadz Fauzi",
    "Ustadzah Maryam",
    "Ustadz Hasan",
    "Ustadzah Salma",
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

  /* ---------- State ---------- */
  var KEY_INTERVIEWS = "sas-interviews-v1";
  var KEY_GEMINI = "sas-gemini-keys-v1";

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
  function getActiveGeminiKey() {
    return state.geminiKeys[state.geminiKeyIdx] || "";
  }
  async function callGemini(prompt) {
    var keys = state.geminiKeys.filter(function (k) { return k.trim(); });
    if (!keys.length) throw new Error("Belum ada API Key yang tersimpan.");
    var startIdx = state.geminiKeyIdx % keys.length;
    for (var i = 0; i < keys.length; i++) {
      var idx = (startIdx + i) % keys.length;
      var key = keys[idx].trim();
      var url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        key;
      try {
        var resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
          }),
        });
        if (resp.status === 429) {
          state.geminiKeyIdx = (idx + 1) % keys.length;
          continue;
        }
        if (!resp.ok) {
          var errData = await resp.json();
          throw new Error(
            (errData.error && errData.error.message) || "Gagal: " + resp.status
          );
        }
        var data = await resp.json();
        state.geminiKeyIdx = idx;
        return data.candidates[0].content.parts[0].text;
      } catch (e) {
        if (e.message && e.message.indexOf("Gagal") === 0) throw e;
        // network error – try next key
      }
    }
    throw new Error("Semua API Key sudah mencapai batas kuota. Coba lagi nanti.");
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
    geminiStatus: "idle",
    geminiMsg: "",
  };
  var lastThemes = {};

  function loadSchool() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && Array.isArray(o.items)) {
          o.items.forEach(function (it) {
            if (it.theme === "biaya") {
              it.theme = "komitmen";
              if (it.title === "Rincian biaya dijelaskan di awal") {
                it.title = "Kemitraan dan Tata Tertib Sekolah";
                it.detail =
                  "SD Anak Saleh mengutamakan sinergi positif dengan orang tua untuk mendidik anak bersama, mematuhi tata tertib, serta saling menjaga nama baik sekolah baik di lingkungan nyata maupun media sosial.";
                it.verified = true;
                it.source = "Pedoman Kemitraan SD Anak Saleh";
              }
            }
          });
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
      (it.source
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
      '<aside class="panel"><div class="panel-head"><span class="card-title"><i class="live-dot"></i>Penguat dari data sekolah</span><span class="badge" id="pg-count">0 tema</span></div>' +
      '<div class="stack" id="penguat"></div></aside></div>'
    );
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
      '<span class="card-title"><i data-lucide="sparkles"></i> Gemini AI – API Keys</span>' +
      (state.geminiStatus === "ok"
        ? '<span class="badge ok"><i data-lucide="check-circle-2"></i> Terhubung</span>'
        : state.geminiStatus === "error"
        ? '<span class="badge warn"><i data-lucide="alert-triangle"></i> Gagal</span>'
        : state.geminiStatus === "testing"
        ? '<span class="badge"><i data-lucide="loader"></i> Menguji…</span>'
        : '<span class="badge"><i data-lucide="minus"></i> Belum diuji</span>') +
      '</div>' +
      '<div class="field"><label for="gemini-keys">API Keys (satu per baris — key teratas = utama, otomatis ganti jika kuota habis)</label>' +
      '<textarea class="textarea" id="gemini-keys" style="min-height:96px;font-family:monospace;font-size:12px;letter-spacing:0.02em;" placeholder="AIzaSyXXXXXXXXXXXXXXXXXXXX&#10;AIzaSyYYYYYYYYYYYYYYYYYYYY">' +
      esc(state.geminiKeys.join("\n")) +
      '</textarea></div>' +
      (state.geminiMsg
        ? '<p style="font-size:13px;margin:4px 0 8px;color:' +
          (state.geminiStatus === "ok" ? "var(--muted)" : "var(--danger)") +
          '">' + esc(state.geminiMsg) + '</p>'
        : '') +
      '<div class="row">' +
      '<button class="btn btn-primary btn-sm" data-action="save-gemini-keys"><i data-lucide="save"></i> Simpan Keys</button>' +
      '<button class="btn btn-outline btn-sm" data-action="test-gemini"><i data-lucide="zap"></i> Tes Koneksi</button>' +
      (state.geminiKeys.length > 1
        ? '<span class="muted" style="font-size:12px;align-self:center;">Key aktif: #' +
          (state.geminiKeyIdx + 1) + ' dari ' + state.geminiKeys.length + '</span>'
        : '') +
      '</div></div>' +
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
    if (t && (t.id === "p-id" || t.id === "p-anak" || t.id === "p-ayah" || t.id === "p-ibu" || t.id === "p-alamat")) {
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
    } else if (a === "save-gemini-keys") {
      var ta = $("#gemini-keys");
      var keys = ta
        ? ta.value
            .split("\n")
            .map(function (k) { return k.trim(); })
            .filter(Boolean)
        : [];
      state.geminiKeys = keys;
      state.geminiKeyIdx = 0;
      state.geminiStatus = "idle";
      state.geminiMsg = keys.length
        ? keys.length + " key tersimpan."
        : "Belum ada key.";
      saveGeminiKeys(keys);
      render();
    } else if (a === "test-gemini") {
      state.geminiStatus = "testing";
      state.geminiMsg = "Menguji koneksi…";
      render();
      callGemini(
        "Balas dengan satu kalimat singkat dalam bahasa Indonesia bahwa koneksi berhasil."
      )
        .then(function (result) {
          state.geminiStatus = "ok";
          state.geminiMsg =
            "Berhasil! Balasan AI: " + result.trim().slice(0, 160);
          render();
        })
        .catch(function (err) {
          state.geminiStatus = "error";
          state.geminiMsg = "Gagal: " + (err.message || String(err));
          render();
        });
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
