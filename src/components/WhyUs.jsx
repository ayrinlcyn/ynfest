import React from 'react';
import { FiBookOpen, FiShield, FiMapPin, FiAward } from 'react-icons/fi';

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 bg-blue-50 text-blue-700 text-xs font-extrabold tracking-widest uppercase rounded-full">
              Kenapa Kami?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
              Kenapa PPBP/PPTI layak kamu pertimbangkan?
            </h2>
          </div>
          <div>
            <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
              Dirancang untuk membentuk lulusan yang bukan hanya berpengetahuan tinggi, namun siap kerja dan berintegritas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-blue-700/50 tracking-tighter">01</span>
              <div className="w-10 h-10 rounded-xl bg-blue-800/80 flex items-center justify-center text-blue-200">
                <FiBookOpen size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Pendidikan Intensif</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">
                Fokus pada akselerasi pembelajaran teoritis dan praktis yang dirancang bersama pakar industri untuk mencetak lulusan berdaya saing global.
              </p>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-blue-700/50 tracking-tighter">02</span>
              <div className="w-10 h-10 rounded-xl bg-blue-800/80 flex items-center justify-center text-blue-200">
                <FiShield size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Dukungan Pendidikan Penuh</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">
                Bebas biaya pendidikan, fasilitas laptop kerja terkini, modul dan buku panduan resmi, serta tunjangan uang saku bulanan terjamin.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 text-slate-900 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-200 tracking-tighter">03</span>
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-700">
                <FiMapPin size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-blue-950">Asrama & Komunitas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fasilitas hunian mahasiswa modern dan asri di kawasan Sentul, Bogor. Didukung fasilitas olahraga, kantin higienis, dan ruang belajar bersama.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 text-slate-900 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-black text-slate-200 tracking-tighter">04</span>
              <div className="w-10 h-10 rounded-xl bg-slate-200/60 flex items-center justify-center text-slate-700">
                <FiAward size={20} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-blue-950">Pengalaman Nyata</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kesempatan mengembangkan portofolio dan soft skill melalui problem-solving kasus perbankan dan pembuatan sistem teknologi berskala enterprise.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-50 border border-slate-200/80 text-slate-900 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">05 • KARIER MASA DEPAN</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950">Career Pathway Terbuka Lebar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Membuka jalan berharga untuk berkontribusi langsung di kantor pusat BCA, berinteraksi dengan mentor senior perbankan, dan menapaki jenjang karier impian.
              </p>
            </div>
            <div className="w-full md:w-56 h-36 flex-shrink-0">
              <img 
                src="/images/ynfest.jpg" 
                alt="Career Pathway" 
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}