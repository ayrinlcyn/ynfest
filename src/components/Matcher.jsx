import React, { useState } from 'react';

export default function Matcher() {
  const [selectedAnswers, setSelectedAnswers] = useState({
    q1: null,
    q2: null,
    q3: null
  });

  const handleSelect = (question, type) => {
    setSelectedAnswers(prev => ({ ...prev, [question]: type }));
  };

  const { q1, q2, q3 } = selectedAnswers;
  const totalAnswered = [q1, q2, q3].filter(Boolean).length;
  
  let recommendation = {
    title: "Silakan pilih preferensi di atas!",
    desc: "Jawabanmu akan menunjukkan apakah kamu condong ke teknologi (PPTI) atau perbankan bisnis (PPBP).",
  };

  if (totalAnswered > 0) {
    if (q3 === 'ppti' || (q3 === null && q2 === 'ppti') || (q3 === null && q2 === null && q1 === 'ppti')) {
      recommendation = {
        title: "Rekomendasi Utama: PPTI BCA",
        desc: "Berdasarkan pilihanmu, kamu sangat cocok mendalami arsitektur digital, coding, dan rekayasa teknologi modern!",
      };
    } else if (q3 === 'ppbp' || (q3 === null && q2 === 'ppbp') || (q3 === null && q2 === null && q1 === 'ppbp')) {
      recommendation = {
        title: "Rekomendasi Utama: PPBP BCA",
        desc: "Berdasarkan pilihanmu, kamu memiliki jiwa leadership, analisis finansial, dan strategi bisnis yang kuat untuk perbankan!",
      };
    }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            INTERACTIVE MATCHER
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            PPBP atau PPTI? Coba cek yang lebih cocok buat kamu.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Pilih preferensi di bawah ini untuk melihat kecocokan minatmu dengan jurusan yang tersedia.
          </p>
        </div>

        <div className="bg-white border border-slate-200/80 p-6 md:p-10 rounded-3xl shadow-sm space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">PERTANYAAN 1 DARI 3</span>
            <h3 className="text-base font-bold text-slate-900">Dalam keseharian, kamu paling antusias dengan hal apa?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => handleSelect('q1', 'ppti')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q1 === 'ppti' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">💻</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Teknologi & Coding</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Suka utak-atik software, gadget, dan algoritma logika.</p>
                </div>
              </div>
              <div 
                onClick={() => handleSelect('q1', 'ppbp')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q1 === 'ppbp' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">📊</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Bisnis & Finansial</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tertarik strategi penjualan, ekonomi, dan pasar modal.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-3">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">PERTANYAAN 2 DARI 3</span>
            <h3 className="text-base font-bold text-slate-900">Kekuatan terbesar apa yang ingin kamu asah lebih dalam?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => handleSelect('q2', 'ppti')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q2 === 'ppti' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">🧩</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Problem Solving & Logika</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Senang memecahkan teka-teki teknis rumit langkah demi langkah.</p>
                </div>
              </div>
              <div 
                onClick={() => handleSelect('q2', 'ppbp')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q2 === 'ppbp' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">🤝</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Komunikasi & Negosiasi</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mudah bergaul, meyakinkan orang lain, dan memimpin tim.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-3">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">PERTANYAAN 3 DARI 3</span>
            <h3 className="text-base font-bold text-slate-900">Di masa depan, kamu membayangkan dirimu berperan sebagai apa?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => handleSelect('q3', 'ppti')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q3 === 'ppti' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">👨‍💻</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Arsitek Solusi Digital</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Membangun platform aplikasi yang dipakai jutaan nasabah.</p>
                </div>
              </div>
              <div 
                onClick={() => handleSelect('q3', 'ppbp')}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-start space-x-3 ${q3 === 'ppbp' ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-600/20' : 'bg-slate-50/60 border-slate-200'}`}
              >
                <span className="text-2xl mt-0.5">🏦</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Manajer & Banker Andal</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mengelola portofolio bisnis korporasi dan operasional cabang.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                🎯
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300">
                  REKOMENDASI AWALMU
                </span>
                <h4 className="text-lg font-bold text-white">{recommendation.title}</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed max-w-xl">
                  {recommendation.desc}
                </p>
              </div>
            </div>
            <a href="#syarat" className="px-5 py-3 bg-white text-blue-950 font-semibold text-xs rounded-xl shadow hover:bg-slate-100 transition flex-shrink-0 text-center">
              Cek Syarat Daftar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}