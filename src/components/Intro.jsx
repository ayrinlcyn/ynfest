import React from 'react';

import { FiBookOpen, FiAward, FiGlobe, FiBriefcase } from 'react-icons/fi';

export default function Intro() {
  return (
    <section id="tentang" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-3">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
              KENALAN DULU
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Sebenarnya, PPBP/PPTI itu apa?
          </h2>

          <p className="mt-3 max-w-2xl text-center text-slate-600 text-base md:text-lg leading-relaxed">
            Kenalan lebih dekat sebelum kamu menentukan pilihan terbaik untuk menyongsong masa depanmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {/* CARD 01 */}
          <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">
                01 • BELAJAR
              </span>
              <FiBookOpen className="text-blue-700 text-lg" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">
                Kurikulum Berstandar Nasional
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                Mengikuti standar kurikulum nasional dengan gaya belajar yang disesuaikan dengan kebutuhan dan lingkungan corporate.
              </p>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-md">
                02 • BERKEMBANG
              </span>
              <FiAward className="text-cyan-600 text-lg" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">
                Soft Skill & Karakter
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                Mengembangkan karakter, etika kerja, komunikasi, teamwork, dan kemampuan berpikir kritis sebagai bekal di dunia kerja.
              </p>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-md">
                03 • BERKEGIATAN
              </span>
              <FiGlobe className="text-indigo-600 text-lg" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">
                Aktivitas Mahasiswa
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                Ikuti berbagai ekskul dan kegiatan mahasiswa, mulai dari sports dan cabor, art, hingga berbagai kegiatan kebersamaan dan party.
              </p>
            </div>
          </div>

          {/* CARD 04 */}
          <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">
                04 • BERSIAP KARIER
              </span>
              <FiBriefcase className="text-blue-700 text-lg" />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">
                Persiapan Menuju OJT
              </h4>
              <p className="text-sm leading-relaxed text-slate-500">
                Mendapat pembekalan dan persiapan sebelum menjalani OJT, sehingga kamu lebih siap menghadapi lingkungan dan budaya kerja di BCA.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}