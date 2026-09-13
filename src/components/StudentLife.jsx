import React from 'react';

export default function StudentLife() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            STUDENT LIFE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            Kuliah nggak cuma duduk di kelas.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Ada banyak hal yang bisa kamu lakukan, pelajari, dan rayakan bersama teman-teman seperjuangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-md h-[420px] bg-slate-900 group">
            <img src="/images/ynfest.jpg" alt="Hackathon" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-blue-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full w-fit">
                <span>💻</span><span>Hackathon & Project</span>
              </span>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">Kompetisi Inovasi Digital</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Mengasah kapabilitas membangun solusi perbankan modern dan prototipe aplikasi.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-md h-[420px] bg-slate-900 group">
            <img src="/images/ynfest.jpg" alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-orange-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full w-fit">
                <span>⚽</span><span>Sports & Club</span>
              </span>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">Olahraga & Keakraban</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Turnamen futsal, basket, badminton, serta sesi e-sports seru tiap akhir pekan.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-md h-[420px] bg-slate-900 group">
            <img src="/images/ynfest.jpg" alt="Arts" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-purple-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full w-fit">
                <span>🎸</span><span>Seni & Malam Keakraban</span>
              </span>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">Pentas Ekspresi & Seni</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Wadah menyalurkan talenta musik, fotografi, tari kontemporer, dan teater panggung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}