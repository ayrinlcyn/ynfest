import React from 'react';
import { FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function Campus() {
  return (
    <section id="kampus" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            KAMPUS & ASRAMA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            Belajar di mana, sih?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Kenalan dengan pusat pembelajaran terintegrasi: Rumah Talenta BCA (RTB) Sentul dan BCA Learning Institute (BLI).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-56 w-full relative">
                <img src="/images/ynfest.jpg" alt="RTB" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">Kawasan Asrama Mahasiswa</span>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center text-xs font-semibold text-slate-500 space-x-1">
                    <FiMapPin className="text-blue-600" />
                    <span>Sentul City, Bogor, Jawa Barat</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950">Rumah Talenta BCA (RTB)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Kawasan terintegrasi asri yang menampung asrama mahasiswa, ruang rekreasi, sarana olahraga, serta ruang komunal.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Kamar Asrama Ber-AC</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Lapangan Olahraga</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Kios Talenta</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Security & Medis 24 Jam</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-56 w-full relative">
                <img src="/images/ynfest.jpg" alt="BLI" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">Pusat Pembelajaran & Riset</span>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center text-xs font-semibold text-slate-500 space-x-1">
                    <FiMapPin className="text-blue-600" />
                    <span>Sentul Selatan, Bogor</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950">BCA Learning Institute (BLI)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Pusat pelatihan korporat tempat diselenggarakannya perkuliahan harian dan lab praktikum.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Modern Classrooms</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Stall & Buffe</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Perpustakaan</span></div>
                  <div className="flex items-center space-x-2 text-xs font-medium text-slate-700"><FiCheckCircle className="text-blue-600" size={14} /><span>Canteen</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}