import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Cta() {
  return (
    <section className="py-24 bg-[#1E3A8A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#1E40AF]/80 text-[#93C5FD] text-xs font-extrabold tracking-widest uppercase rounded-full">
            Mulai Langkah Pertama
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight !text-white leading-tight">
            Masih cari pilihan kuliah?<br />
            Kenapa nggak kenalan dulu sama PPBP/PPTI?
          </h2>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Cari tahu programnya, bayangkan kehidupan mahasiswa di Sentul, dan persiapkan dirimu menjadi bagian dari talenta muda perbankan dan IT kebanggaan bangsa.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="#syarat" className="px-7 py-4 bg-white text-[#0F172A] font-bold rounded-2xl text-base shadow-xl hover:bg-[#F8FAFC] transition flex items-center space-x-2">
            <span>Cek Persyaratan & Daftar Sekarang</span>
            <FiArrowRight />
          </a>
          <a href="#program" className="px-7 py-4 bg-[#1E40AF]/60 hover:bg-[#1E40AF] text-white font-bold rounded-2xl text-base border border-[#3B82F6]/60 transition text-center">
            Pelajari Program Detail
          </a>
        </div>
      </div>
    </section>
  );
}