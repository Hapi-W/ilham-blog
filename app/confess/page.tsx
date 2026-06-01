"use client";
import { useState } from "react";

type Story = { id: number; text: string; time: string; likes: number };

const seedStories: Story[] = [
  { id: 1, text: "Saya pernah takut berbicara di depan umum. Sampai akhirnya saya ikut teater dan belajar bahwa ketakutan itu bukan musuh — dia adalah teman yang harus diajak menari.", time: "2 hari lalu", likes: 12 },
  { id: 2, text: "Kadang saya merasa tidak ada yang benar-benar mendengar saya. Tapi di sini, rasanya cerita saya punya tempat.", time: "5 hari lalu", likes: 8 },
  { id: 3, text: "Saya pernah gagal di satu pertunjukan besar dan ingin menyerah. Tapi membaca tulisan Ilham tentang teater memanusiakan manusia membuat saya sadar — gagal itu juga bagian dari menjadi manusia.", time: "1 minggu lalu", likes: 21 },
];

export default function ConfessPage() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [stories, setStories] = useState<Story[]>(seedStories);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  function handleSubmit() {
    if (!text.trim()) return;
    const newStory: Story = {
      id: Date.now(),
      text: text.trim(),
      time: "Baru saja",
      likes: 0,
    };
    setStories([newStory, ...stories]);
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  function handleLike(id: number) {
    if (liked.has(id)) return;
    setLiked(new Set([...liked, id]));
    setStories(stories.map(s => s.id === id ? { ...s, likes: s.likes + 1 } : s));
  }

  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16 border-b border-[#e0ddd6] pb-10">
        <p className="text-[10px] tracking-[0.22em] uppercase text-[#888] mb-4">Ruang Aman</p>
        <h1 className="font-serif text-5xl font-bold leading-tight">Ruang Curhat<br /><em className="font-normal text-[#555]">Anonim</em></h1>
        <p className="mt-4 text-[#666] text-sm max-w-lg">
          Setiap orang memiliki cerita yang layak didengar. Bagikan ceritamu di sini — tanpa nama, tanpa penghakiman.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_360px] gap-12">
        {/* Stories */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#888]">Cerita Terbaru</p>
            <div className="flex-1 h-px bg-[#e0ddd6]" />
            <span className="text-[10px] text-[#bbb]">{stories.length} cerita</span>
          </div>

          <div className="space-y-0 divide-y divide-[#e0ddd6] border-t border-b border-[#e0ddd6]">
            {stories.map((s, i) => (
              <div key={s.id} className="py-8 group">
                <div className="flex gap-4 items-start">
                  <span className="font-serif text-[11px] text-[#ddd] pt-1 flex-shrink-0">{String(i + 1).padStart(3, "0")}</span>
                  <div className="flex-1">
                    <p className="font-serif text-lg leading-relaxed text-[#333] italic">"{s.text}"</p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-[11px] text-[#bbb]">{s.time}</span>
                      <button
                        onClick={() => handleLike(s.id)}
                        className={`text-[11px] tracking-wide flex items-center gap-1.5 transition-colors ${liked.has(s.id) ? "text-[#0a0a0a]" : "text-[#bbb] hover:text-[#888]"}`}
                      >
                        <span>{liked.has(s.id) ? "♥" : "♡"}</span>
                        <span>{s.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="bg-[#0a0a0a] p-8 sticky top-24">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">Bagikan Ceritamu</p>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-serif italic text-white/60 text-lg">Terima kasih sudah berbagi.</p>
                <p className="text-white/30 text-sm mt-2">Setiap cerita berharga. 🖤</p>
              </div>
            ) : (
              <>
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Ceritamu dimulai di sini..."
                  className="w-full bg-transparent border-b border-white/20 text-white/70 text-sm font-serif italic leading-relaxed py-3 resize-none outline-none placeholder:text-white/20 min-h-[140px] focus:border-white/40 transition-colors"
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] text-white/20">{text.length}/500</span>
                  <button
                    onClick={handleSubmit}
                    disabled={!text.trim()}
                    className="text-[10px] tracking-[0.18em] uppercase text-white border border-white/30 px-6 py-2.5 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Kirim Anonim
                  </button>
                </div>
              </>
            )}

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] text-white/20 leading-relaxed">
                Ceritamu disimpan secara anonim. Tidak ada nama, tidak ada data pribadi yang dikumpulkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
