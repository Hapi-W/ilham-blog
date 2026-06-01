import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ilham Majedi — Aktor Teater",
  description: "Personal blog Ilham Majedi — Aktor Teater, Sutradara, dan pemerhati kehidupan manusia.",
  openGraph: {
    title: "Ilham Majedi — Aktor Teater",
    description: "Teater adalah belajar untuk hidup supaya tidak salah langkah di kehidupan.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="grain min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
