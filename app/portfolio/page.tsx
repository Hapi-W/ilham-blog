const works = [
  { year: "2023", title: "Monolog Nasional", role: "Aktor Monolog", award: "Juara 3 Nasional", desc: "Membawakan monolog solo di tingkat nasional dengan eksplorasi emosi karakter yang mendalam dan raw. Emosi karakter terbawa bahkan setelah pentas selesai." },
  { year: "2022", title: "Festival Teater Kampus", role: "Sutradara", award: "Sutradara Terbaik", desc: "Memimpin produksi teater kampus dari tahap latihan hingga pentas. Mengarahkan seluruh tim dengan visi artistik yang kohesif." },
  { year: "2021", title: "Kompetisi Teater Nasional", role: "Aktor Utama", award: "Mewakili Kampus", desc: "Memerankan tokoh utama dalam pertunjukan yang sangat emosional, mewakili kampus di ajang kompetisi nasional." },
  { year: "2020", title: "Kompetisi Teater Regional", role: "Aktor", award: "Juara 1", desc: "Meraih juara pertama bersama tim dalam kompetisi teater tingkat regional dengan pertunjukan yang mendapatkan pujian dari para juri." },
  { year: "2019", title: "Festival Teater Pelajar", role: "Aktor & Sutradara", award: "Aktor Terbaik + Sutradara Terbaik", desc: "Merangkap peran sebagai aktor sekaligus sutradara. Tim meraih banyak penghargaan sekaligus dalam festival ini." },
  { year: "2018", title: "Kompetisi Teater Antar Sekolah", role: "Aktor", award: "Juara 3", desc: "Tampil dalam kompetisi antar sekolah dengan karakter yang menantang, memperoleh pengalaman berharga dari para juri berpengalaman." },
  { year: "2014", title: "Debut Teater SMA", role: "Aktor Pemula", award: "Awal Perjalanan", desc: "Pertama kali naik panggung teater. Titik awal dari perjalanan panjang memahami manusia melalui seni peran." },
];

export default function PortfolioPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16 border-b border-[#e0ddd6] pb-10">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4">Karya & Pementasan</p>
        <h1 className="font-serif text-5xl font-bold leading-tight">
          Portofolio
        </h1>
        <p className="mt-4 text-[#666] text-sm max-w-lg">
          Perjalanan lebih dari satu dekade di atas panggung — dari debut pertama hingga kompetisi nasional.
        </p>
      </div>

      {/* Awards summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e0ddd6] border border-[#e0ddd6] mb-16">
        {[
          { num: "10+", label: "Tahun Berteater" },
          { num: "5+", label: "Penghargaan" },
          { num: "2×", label: "Sutradara Terbaik" },
          { num: "1×", label: "Juara Nasional" },
        ].map(s => (
          <div key={s.label} className="bg-[#f7f5f0] p-8 text-center">
            <p className="font-serif text-4xl font-bold mb-2">{s.num}</p>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#888]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[68px] top-0 bottom-0 w-px bg-[#e0ddd6] hidden md:block" />
        <div className="space-y-0 divide-y divide-[#e0ddd6] border-t border-b border-[#e0ddd6]">
          {works.map((w, i) => (
            <div key={i} className="grid md:grid-cols-[80px_1fr] gap-0 group hover:bg-[#f0ede6] transition-colors">
              <div className="p-6 md:p-8 flex md:block items-center gap-3">
                <span className="font-serif text-2xl font-bold text-[#e0ddd6] group-hover:text-[#ccc] transition-colors">{w.year}</span>
              </div>
              <div className="p-6 md:p-8 md:border-l border-[#e0ddd6]">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h2 className="font-serif text-xl font-semibold">{w.title}</h2>
                    <p className="text-[12px] text-[#888] mt-0.5 tracking-wide">{w.role}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.14em] uppercase border border-[#e0ddd6] px-3 py-1.5 text-[#888]">
                    {w.award}
                  </span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Harapan */}
      <div className="mt-16 bg-[#0a0a0a] p-10">
        <p className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-3">Harapan ke Depan</p>
        <p className="font-serif italic text-white/60 text-lg leading-relaxed max-w-xl">
          "Teater bisa berkembang menjadi industri yang lebih besar, di mana aktor teater memiliki peluang kerja yang lebih luas dan profesi yang lebih menjanjikan."
        </p>
      </div>
    </div>
  );
}
