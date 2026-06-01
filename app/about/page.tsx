export default function AboutPage() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 border-b border-[#e0ddd6] pb-10">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4">Profil Diri</p>
        <h1 className="font-serif text-5xl font-bold leading-tight">
          Ilham<br /><em className="font-normal text-[#555]">Majedi</em>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Main bio */}
        <div className="md:col-span-2 space-y-8">
          {/* Avatar placeholder */}
          <div className="w-32 h-32 bg-[#0a0a0a] flex items-center justify-center mb-8">
            <span className="font-serif text-3xl text-white/60 italic">IM</span>
          </div>

          <div className="prose-theater">
            <p>
              Ilham Majedi pertama kali menginjakkan kaki di atas panggung teater pada tahun 2014, saat masih duduk di bangku SMA. Apa yang awalnya hanya sebuah ekstrakurikuler biasa, perlahan berubah menjadi cara hidup — sebuah lensa untuk memahami manusia dan dunia di sekitarnya.
            </p>
            <blockquote>
              "Teater adalah belajar untuk hidup supaya tidak salah langkah di kehidupan."
            </blockquote>
            <p>
              Selama lebih dari satu dekade berteater, Ilham tidak hanya membentuk dirinya sebagai aktor, tetapi juga sebagai sutradara, pengajar, dan pemerhati karakter manusia. Setiap peran yang dimainkan adalah sebuah riset mendalam tentang kemanusiaan — tentang bagaimana seseorang berpikir, merasakan, dan bertindak dalam berbagai situasi kehidupan.
            </p>
            <p>
              Di luar panggung, Ilham juga aktif sebagai MC profesional, Trainer, dan Owner Wedding Organizer — semua profesi yang berakar dari satu kemampuan yang sama: memahami dan terhubung dengan manusia lain.
            </p>
          </div>
        </div>

        {/* Sidebar info */}
        <div className="space-y-10">
          {/* Identitas */}
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4 border-b border-[#e0ddd6] pb-2">Identitas</p>
            <dl className="space-y-3 text-sm">
              {[
                ["Mulai Berteater", "2014"],
                ["Profesi Utama", "Employee / Karyawan"],
                ["Aktivitas Lain", "Aktor, Sutradara, MC, Trainer, WO Owner"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[#888] text-[11px] tracking-wide">{k}</dt>
                  <dd className="font-medium mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Nilai */}
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4 border-b border-[#e0ddd6] pb-2">Nilai yang Dipegang</p>
            <div className="space-y-3">
              {["Kejujuran Emosi", "Kepekaan Sosial", "Kemampuan Analisis", "Empati Mendalam"].map(v => (
                <div key={v} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#0a0a0a] rounded-full flex-shrink-0" />
                  <span className="text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pesan */}
          <div className="bg-[#0a0a0a] p-6">
            <p className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-3">Pesan untuk Anak Muda</p>
            <p className="font-serif italic text-white/70 text-sm leading-relaxed">
              "Ikutlah teater karena teater memanusiakan manusia."
            </p>
          </div>
        </div>
      </div>

      {/* Pengaruh teater */}
      <div className="mt-20 border-t border-[#e0ddd6] pt-16">
        <div className="flex items-center gap-6 mb-10">
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#888]">Pengaruh Teater dalam Hidup</p>
          <div className="flex-1 h-px bg-[#e0ddd6]" />
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-[#e0ddd6] border border-[#e0ddd6]">
          {[
            { title: "Memahami Orang Lain", desc: "Teater melatih kemampuan membaca karakter dan motivasi orang di balik tindakan mereka." },
            { title: "Komunikasi Lebih Mudah", desc: "Latihan panggung mengasah cara menyampaikan pesan dengan tepat dan tulus." },
            { title: "Empati yang Lebih Dalam", desc: "Dengan menjadi orang lain, Ilham belajar merasakan pengalaman dari sudut pandang yang berbeda." },
            { title: "Siap Menghadapi Situasi", desc: "Teater melatih improvisi dan ketenangan dalam menghadapi hal-hal yang tidak terduga." },
          ].map(item => (
            <div key={item.title} className="bg-[#f7f5f0] p-8">
              <h3 className="font-serif text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
