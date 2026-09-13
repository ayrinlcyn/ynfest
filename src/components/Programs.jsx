import React from 'react';
import { FiBookOpen, FiUsers, FiShield, FiAward, FiBriefcase } from 'react-icons/fi';

export default function Programs() {
  return (
    <section id="program" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            DUA JURUSAN
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            PPBP atau PPTI?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Sama-sama punya kesempatan berkembang luar biasa. Bedanya, fokus keahliannya ada di sini.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blue-900 text-white font-black text-sm items-center justify-center shadow-lg border-4 border-white">
            VS
          </div>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-8 relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                  💻 JALUR TEKNIK INFORMATIKA
                </span>
                <span className="text-xs font-bold text-slate-400">30 Bulan</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-blue-950">PPTI BCA</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Program Pendidikan Teknik Informatika ditujukan untuk kamu yang antusias membangun arsitektur digital, coding, dan infrastruktur sistem teknologi modern.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 mt-0.5"><FiBookOpen size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Software Engineering & Development</h4>
                    <p className="text-xs text-slate-500">Kuasai bahasa pemrograman mutakhir, microservices, dan app delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 mt-0.5"><FiUsers size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Algoritma & Problem Solving</h4>
                    <p className="text-xs text-slate-500">Latihan berpikir komputasional analitis untuk memecahkan problem kompleks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 mt-0.5"><FiShield size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Cyber Security & Cloud Infrastructure</h4>
                    <p className="text-xs text-slate-500">Fondasi keamanan data level perbankan berstandar global.</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#syarat" className="block text-center w-full py-3.5 bg-blue-950 hover:bg-blue-900 text-white font-semibold rounded-2xl text-sm shadow-md transition">
              Lihat PPTI Lebih Dekat
            </a>
          </div>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-8 relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">
                  📊 JALUR BISNIS & PERBANKAN
                </span>
                <span className="text-xs font-bold text-slate-400">30 Bulan</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-blue-950">PPBP BCA</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Program Pendidikan Bisnis dan Perbankan dipersiapkan bagi calon leader masa depan yang tertarik mendalami operasional finansial, strategi bisnis, dan komunikasi.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700 mt-0.5"><FiAward size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Manajemen & Analisis Finansial</h4>
                    <p className="text-xs text-slate-500">Pahami alur perputaran ekonomi, neraca perbankan, dan kelayakan kredit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700 mt-0.5"><FiUsers size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Service Excellence & Relasi Klien</h4>
                    <p className="text-xs text-slate-500">Teknik pelayanan perbankan premium, diplomasi bisnis, dan leadership.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700 mt-0.5"><FiBriefcase size={16} /></div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Operasional Perbankan Terintegrasi</h4>
                    <p className="text-xs text-slate-500">Pelajari mekanisme transaksi kliring, compliance, valuta asing, treasury.</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#syarat" className="block text-center w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-2xl text-sm shadow-md transition">
              Lihat PPBP Lebih Dekat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}