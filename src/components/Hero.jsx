import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="beranda" className="py-12 md:py-16 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Kuliah, berkembang, dan siapkan masa depanmu bersama{' '}
            <span className="text-blue-700">PPBP/PPTI</span>.
          </h1>
          <p className="text-slate-500 text-base">
            Bukan cuma tentang belajar di kelas. Kenali pengalaman, kegiatan komprehensif, fasilitas modern, dan career pathway terarah bersama ekosistem BCA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a href="#tentang" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg transition flex items-center justify-center gap-2">
              <span>Kenalan dengan PPBP/PPTI</span>
              <FiArrowRight />
            </a>
            <a href="#program" className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition text-center">
              Lihat Benefit Lengkap
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/ynfest.jpg"
            alt="Hero Banner"
            className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}