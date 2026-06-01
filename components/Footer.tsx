import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e0ddd6] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-serif text-lg italic text-[#888]">— Ilham Majedi</p>
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#bbb] mt-1">
            Teater memanusiakan manusia
          </p>
        </div>
        <div className="flex gap-6">
          {["/about", "/portfolio", "/gallery", "/blog", "/confess"].map((href) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] tracking-[0.14em] uppercase text-[#bbb] hover:text-[#888] transition-colors"
            >
              {href.replace("/", "")}
            </Link>
          ))}
        </div>
        <p className="text-[11px] text-[#ccc] tracking-widest">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
