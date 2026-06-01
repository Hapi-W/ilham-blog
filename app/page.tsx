import Link from "next/link";

const awards = [
  "Aktor Terbaik","Sutradara Terbaik","Juara 3 Monolog Nasional","Juara 1 Festival Teater","Mewakili Kampus di Kompetisi Nasional",
];

const posts = [
  { slug: "mengapa-tidak-bisa-berhenti", title: "Mengapa Saya Tidak Bisa Berhenti Bermain Teater", date: "12 Mei 2025", tag: "Refleksi" },
  { slug: "monolog-nasional", title: "Monolog Nasional: Ketika Emosi Menolak Berhenti", date: "3 Maret 2025", tag: "Pengalaman" },
  { slug: "tiga-nilai-teater", title: "Tiga Nilai yang Teater Ajarkan Tentang Manusia", date: "14 Januari 2025", tag: "Filosofi" },
];

export default function Home() {
  return (
    <div className="page-enter">
      <section className="max-w-5xl mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-2 gap-0 border border-[#e0ddd6]">
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#e0ddd6] flex flex-col justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-6">Personal Blog — Aktor Teater</p>
              <h1 className="font-serif text-5xl md:text-6xl leading-[1.04] font-bold mb-8">
                Teater<br />adalah<br /><em className="font-normal text-[#555]">belajar<br />untuk hidup.</em>
              </h1>
            </div>
            <blockquote className="border-l-2 border-[#0a0a0a] pl-4 font-serif italic text-[#555] text-sm leading-relaxed">
              "Kalau ingin menjadi manusia yang lebih memahami manusia lainnya, ikutlah teater — karena teater memanusiakan manusia."
            </blockquote>
          </div>
          <div className="bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-end">
            <p className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2">Ilham Majedi</p>
            <h2 className="font-serif text-4xl text-white leading-tight mb-6">
              Aktor.<br /><em className="text-white/50 font-normal">Sutradara.<br />Manusia.</em>
            </h2>
            <p className="text-[11px] tracking-[0.14em] uppercase text-white/25">Aktif sejak 2014 · SMA → Panggung Nasional</p>
            <div className="mt-8 flex gap-4">
              <Link href="/about" className="text-[11px] tracking-[0.14em] uppercase text-white/60 border border-white/20 px-5 py-2.5 hover:bg-white/10 transition-colors">Profil Saya</Link>
              <Link href="/portfolio" className="text-[11px] tracking-[0.14em] uppercase text-white/60 hover:text-white/90 transition-colors flex items-center gap-2">Portofolio →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] mt-0 py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap" style={{animation:"marquee 22s linear infinite"}}>
          {[...awards,...awards,...awards].map((a,i)=>(
            <span key={i} className="text-[11px] tracking-[0.18em] uppercase text-white/50 flex-shrink-0">{a} <span className="text-white/20 mx-3">·</span></span>
          ))}
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="flex items-center gap-6 mb-10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#888]">Jurnal Terbaru</p>
          <div className="flex-1 h-px bg-[#e0ddd6]" />
          <Link href="/blog" className="text-[10px] tracking-[0.16em] uppercase text-[#888] hover:text-[#0a0a0a] transition-colors">Semua →</Link>
        </div>
        <div className="divide-y divide-[#e0ddd6] border-t border-b border-[#e0ddd6]">
          {posts.map((p,i)=>(
            <Link key={p.slug} href={`/blog/${p.slug}`} className="flex items-start justify-between gap-6 py-7 group hover:bg-[#f0ede6] px-4 -mx-4 transition-colors">
              <div className="flex gap-6 items-start">
                <span className="font-serif text-[11px] text-[#bbb] mt-1 flex-shrink-0">{String(i+1).padStart(3,"0")}</span>
                <div>
                  <h3 className="font-serif text-lg leading-snug group-hover:italic transition-all">{p.title}</h3>
                  <p className="text-[12px] text-[#888] mt-1 tracking-wide">{p.date}</p>
                </div>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase border border-[#e0ddd6] px-3 py-1 text-[#888] flex-shrink-0 mt-1">{p.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="flex items-center gap-6 mb-10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#888]">Nilai dari Teater</p>
          <div className="flex-1 h-px bg-[#e0ddd6]" />
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#e0ddd6] border border-[#e0ddd6]">
          {[
            {num:"01",title:"Kejujuran",desc:"Aktor harus benar-benar merasakan emosi yang dimainkan agar penonton percaya."},
            {num:"02",title:"Kepekaan",desc:"Peka terhadap manusia, lingkungan, emosi, dan situasi sosial di sekitar kita."},
            {num:"03",title:"Analisis",desc:"Memahami dan menganalisis karakter secara mendalam sebelum memerankannya."},
          ].map(v=>(
            <div key={v.num} className="bg-[#f7f5f0] p-10 group">
              <p className="font-serif text-4xl text-[#e0ddd6] mb-6 group-hover:text-[#ccc] transition-colors">{v.num}</p>
              <h3 className="font-serif text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-20 mb-4">
        <div className="bg-[#0a0a0a] p-12 text-center">
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/30 mb-4">Ruang Aman</p>
          <h2 className="font-serif text-3xl text-white mb-4">Setiap orang punya cerita<br /><em className="text-white/50 font-normal">yang layak didengar.</em></h2>
          <p className="text-sm text-white/40 mb-8 max-w-md mx-auto">Bagikan ceritamu secara anonim. Cerita orang lain adalah cermin untuk memahami diri sendiri.</p>
          <Link href="/confess" className="inline-block text-[11px] tracking-[0.18em] uppercase text-white border border-white/30 px-8 py-3 hover:bg-white/10 transition-colors">Mulai Berbagi</Link>
        </div>
      </section>

      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
