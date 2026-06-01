"use client";
import { useState } from "react";

const categories = ["Semua", "Pementasan", "Latihan", "Festival", "Backstage"];

const photos = [
  { id: 1, cat: "Pementasan", title: "Monolog Nasional 2023", year: "2023", aspect: "tall" },
  { id: 2, cat: "Festival", title: "Festival Teater Pelajar", year: "2019", aspect: "wide" },
  { id: 3, cat: "Latihan", title: "Sesi Latihan Rutin", year: "2022", aspect: "square" },
  { id: 4, cat: "Backstage", title: "Persiapan Sebelum Pentas", year: "2021", aspect: "square" },
  { id: 5, cat: "Pementasan", title: "Kompetisi Nasional 2021", year: "2021", aspect: "wide" },
  { id: 6, cat: "Festival", title: "Penghargaan Sutradara Terbaik", year: "2022", aspect: "tall" },
  { id: 7, cat: "Latihan", title: "Workshop Karakter", year: "2023", aspect: "square" },
  { id: 8, cat: "Backstage", title: "Momen Setelah Pentas", year: "2020", aspect: "wide" },
  { id: 9, cat: "Pementasan", title: "Pertunjukan Emosional", year: "2021", aspect: "square" },
];

const aspectMap: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export default function GalleryPage() {
  const [active, setActive] = useState("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Semua" ? photos : photos.filter(p => p.cat === active);

  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-[#e0ddd6] pb-10">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4">Dokumentasi</p>
        <h1 className="font-serif text-5xl font-bold leading-tight">Galeri Foto</h1>
        <p className="mt-4 text-[#666] text-sm max-w-lg">
          Momen-momen di balik dan di atas panggung — dari latihan harian hingga malam pentas.
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-[10px] tracking-[0.16em] uppercase px-4 py-2 border transition-colors ${
              active === c
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "border-[#e0ddd6] text-[#888] hover:border-[#888]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
        {filtered.map(photo => (
          <div
            key={photo.id}
            className={`relative group cursor-pointer overflow-hidden bg-[#0a0a0a] border border-[#e0ddd6] ${aspectMap[photo.aspect]}`}
            onClick={() => setLightbox(photo.id)}
          >
            {/* Placeholder bg with pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px)`,
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-sm font-serif">{photo.title}</p>
              <p className="text-white/50 text-[11px] tracking-widest mt-0.5">{photo.year}</p>
            </div>
            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="text-[9px] tracking-[0.16em] uppercase bg-black/50 text-white/60 px-2 py-1">
                {photo.cat}
              </span>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 bg-white/10 flex items-center justify-center text-white/70 text-xs">+</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          {(() => {
            const p = photos.find(x => x.id === lightbox);
            if (!p) return null;
            return (
              <div className="max-w-2xl w-full" onClick={e => e.stopPropagation()}>
                <div
                  className="w-full aspect-[4/3] bg-[#1a1a1a] border border-white/10 mb-4"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 13px)`,
                  }}
                />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-serif text-white text-xl">{p.title}</p>
                    <p className="text-white/40 text-[12px] tracking-widest mt-1">{p.cat} · {p.year}</p>
                  </div>
                  <button onClick={() => setLightbox(null)} className="text-white/40 hover:text-white text-[11px] tracking-widest uppercase">
                    Tutup ×
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Upload note */}
      <div className="mt-12 border border-dashed border-[#e0ddd6] p-8 text-center">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#bbb] mb-2">Tambah Foto</p>
        <p className="text-sm text-[#888]">
          Letakkan foto di folder <code className="bg-[#e0ddd6] px-2 py-0.5 text-xs">/public/images/gallery/</code> dan update data di <code className="bg-[#e0ddd6] px-2 py-0.5 text-xs">app/gallery/page.tsx</code>
        </p>
      </div>
    </div>
  );
}
