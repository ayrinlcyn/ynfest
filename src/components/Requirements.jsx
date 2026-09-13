import React from 'react';
import { FiCheckCircle, FiAward } from 'react-icons/fi';

export default function Requirements() {
  return (
    <section id="syarat" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            SYARAT & PROSEDUR
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            Sebelum daftar, cek dulu persyaratannya.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Pastikan kamu memenuhi kualifikasi dasar sebelum melangkah ke proses seleksi resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                <FiCheckCircle size={20} />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Persyaratan Umum Pendaftaran</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-blue-700 mt-0.5"><FiCheckCircle size={18} /></div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Warga Negara Indonesia (WNI)</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Memiliki identitas kependudukan resmi dan berstatus belum menikah.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-blue-700 mt-0.5"><FiCheckCircle size={18} /></div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Siswa/i SMA/SMK Kelas 12 atau Lulusan Baru</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Berusia maksimal 19 tahun pada saat periode pendaftaran dibuka.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-blue-700 mt-0.5"><FiCheckCircle size={18} /></div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Nilai Rapor Rata-Rata Memuaskan</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Rata-rata nilai rapor semester 1–4 minimal 7.50 (terutama Matematika/Bahasa).</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-blue-700 mt-0.5"><FiCheckCircle size={18} /></div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Bebas Narkoba & Berkelakuan Baik</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Memiliki integritas pribadi dan bersedia mengikuti seluruh peraturan asrama.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                <FiAward size={20} />
              </div>
              <h3 className="text-xl font-bold text-blue-950">Tahapan Proses Seleksi</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Pendaftaran Online</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Mengisi biodata dan mengunggah pindaian rapor di portal resmi karir BCA.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Seleksi Administrasi</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Pemeriksaan kelengkapan dokumen berkas pendaftaran oleh tim rekrutmen.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Tes Online & Kemampuan Logika</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Ujian kemampuan analitis, verbal, dan dasar logika komputasional/numerik.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">4</div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Wawancara & Psikotes Mendalam</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Penggalian motivasi belajar, tes kepribadian, serta wawancara panelis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">5</div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">Medical Check Up & Pengumuman Final</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Pemeriksaan kesehatan menyeluruh sebelum penandatanganan komitmen beasiswa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}