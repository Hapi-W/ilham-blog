import Link from "next/link";

const posts = [
  { slug: "mengapa-tidak-bisa-berhenti", title: "Mengapa Saya Tidak Bisa Berhenti Bermain Teater", date: "12 Mei 2025", tag: "Refleksi", excerpt: "Lebih dari satu dekade berlalu sejak pertama kali saya naik panggung. Dan sampai hari ini, saya masih belum menemukan alasan yang cukup kuat untuk berhenti." },
  { slug: "monolog-nasional", title: "Monolog Nasional: Ketika Emosi Menolak Berhenti", date: "3 Maret 2025", tag: "Pengalaman", excerpt: "Ada momen dalam hidup seorang aktor di mana batas antara diri sendiri dan karakter menjadi kabur. Monolog nasional adalah salah satu momen itu bagi saya." },
  { slug: "tiga-nilai-teater", title: "Tiga Nilai yang Teater Ajarkan Tentang Manusia", date: "14 Januari 2025", tag: "Filosofi", excerpt: "Kejujuran, kepekaan, dan kemampuan analisis — tiga hal yang tidak hanya berguna di atas panggung, tetapi menjadi fondasi cara saya memandang dunia." },
  { slug: "festival-teater-pelajar", title: "Festival Teater Pelajar: Pelajaran yang Tidak Tertulis", date: "2 Oktober 2024", tag: "Cerita", excerpt: "Menjadi aktor sekaligus sutradara dalam satu festival adalah pengalaman yang mengajarkan saya tentang kepemimpinan, kepercayaan, dan kerendahan hati." },
  { slug: "teater-memanusiakan-manusia", title: "Teater Memanusiakan Manusia: Bukan Sekadar Slogan", date: "5 Agustus 2024", tag: "Filosofi", excerpt: "Kalimat itu sering saya ucapkan, tapi apa artinya sebenarnya? Ini adalah upaya saya untuk menjelaskannya — kepada diri sendiri dan kepada siapa pun yang mau mendengar." },
];

export default function BlogPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16 border-b border-[#e0ddd6] pb-10">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4">Tulisan & Refleksi</p>
        <h1 className="font-serif text-5xl font-bold leading-tight">Jurnal</h1>
        <p className="mt-4 text-[#666] text-sm max-w-lg">
          Catatan perjalanan dari dalam dan luar panggung — tentang teater, manusia, dan kehidupan.
        </p>
      </div>

      <div className="divide-y divide-[#e0ddd6] border-t border-[#e0ddd6]">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block py-10 group hover:bg-[#f0ede6] px-4 -mx-4 transition-colors"
          >
            <div className="grid md:grid-cols-[60px_1fr_auto] gap-6 items-start">
              <span className="font-serif text-[11px] text-[#bbb] pt-1">{String(i + 1).padStart(3, "0")}</span>
              <div>
                <h2 className="font-serif text-2xl leading-snug group-hover:italic transition-all mb-3">
                  {p.title}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed mb-4 max-w-xl">{p.excerpt}</p>
                <p className="text-[12px] text-[#888] tracking-wide">{p.date}</p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className="text-[10px] tracking-[0.14em] uppercase border border-[#e0ddd6] px-3 py-1 text-[#888]">
                  {p.tag}
                </span>
                <span className="text-[11px] text-[#888] group-hover:text-[#0a0a0a] transition-colors">
                  Baca →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
