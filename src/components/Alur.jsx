import React from 'react';

export default function Alur() {
  return (
    <section id="alur" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50/50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold tracking-widest text-blue-800 uppercase bg-blue-100/80 px-3.5 py-1.5 rounded-full">
            Alur Perjalanan Siswa
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 pt-2">
            Langkah Menuju Masa Depan Gemilang
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-base shadow-inner">01</div>
            <div className="space-y-1"><h3 className="font-bold text-blue-950 text-base">Daftar</h3><p className="text-xs text-slate-500 leading-relaxed">Registrasi online & submit berkas</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-base shadow-inner">02</div>
            <div className="space-y-1"><h3 className="font-bold text-blue-950 text-base">Seleksi</h3><p className="text-xs text-slate-500 leading-relaxed">Tes logika, psikotes & interview</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-base shadow-inner">03</div>
            <div className="space-y-1"><h3 className="font-bold text-blue-950 text-base">Pendidikan</h3><p className="text-xs text-slate-500 leading-relaxed">Kuliah intensif di Sentul</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-base shadow-inner">04</div>
            <div className="space-y-1"><h3 className="font-bold text-blue-950 text-base">OJT / Experience</h3><p className="text-xs text-slate-500 leading-relaxed">Praktik magang divisi industri</p></div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-base shadow-inner">05</div>
            <div className="space-y-1"><h3 className="font-bold text-blue-950 text-base">Career Pathway</h3><p className="text-xs text-slate-500 leading-relaxed">Peluang bergabung tim BCA</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}