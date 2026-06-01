# Ilham Majedi — Personal Blog

Blog personal aktor teater Ilham Majedi. Dibangun dengan Next.js 15 + Tailwind CSS.

## Halaman
- `/` — Beranda dengan hero, jurnal terbaru, dan nilai teater
- `/about` — Profil diri lengkap
- `/portfolio` — Timeline karya & pementasan
- `/gallery` — Dokumentasi foto kegiatan (dengan filter & lightbox)
- `/blog` — Daftar jurnal/artikel
- `/blog/[slug]` — Isi artikel
- `/confess` — Ruang curhat anonim

## Cara Menjalankan Lokal

```bash
npm install
npm run dev
# Buka http://localhost:3000
```

## Deploy ke Vercel (Gratis)

1. Push kode ke GitHub
2. Buka https://vercel.com → New Project
3. Import repo GitHub kamu
4. Klik Deploy — selesai!

## Cara Menambah Konten

### Tambah artikel baru
Edit `app/blog/[slug]/page.tsx`, tambahkan entry baru di objek `posts`:
```ts
"slug-artikel-baru": {
  title: "Judul Artikel",
  date: "1 Juni 2025",
  tag: "Refleksi",
  readTime: "5 menit",
  content: `Isi artikel di sini...`
}
```
Tambahkan juga ke array di `app/blog/page.tsx`.

### Tambah foto galeri
1. Letakkan foto di `/public/images/gallery/`
2. Edit array `photos` di `app/gallery/page.tsx`
3. Gunakan tag `<Image>` dari Next.js:
```tsx
import Image from "next/image";
<Image src="/images/gallery/nama-foto.jpg" alt="..." fill className="object-cover" />
```

### Ubah warna/font
Edit `app/globals.css` dan variabel CSS di bagian `:root`.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Google Fonts: Playfair Display + DM Sans

