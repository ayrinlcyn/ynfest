import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-700 text-white font-black flex items-center justify-center text-sm">B</div>
            <div>
              <h3 className="text-slate-900 text-sm font-bold tracking-wide">PPBP - PPTI</h3>
              <p className="text-[11px] text-slate-400">BCA SCHOLARSHIP PROGRAM</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            Program Pendidikan Bisnis & Perbankan (PPBP) dan Program Pendidikan Teknik Informatika (PPTI) merupakan wujud komitmen Corporate Social Responsibility BCA untuk mencetak talenta unggul Indonesia yang siap kerja.
          </p>
          <div className="flex items-center space-x-3 text-slate-400">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition">IG</div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition">LI</div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition">YT</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-bold text-sm tracking-wide">NAVIGASI PROGRAM</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#tentang" className="hover:text-blue-700 transition">Tentang Beasiswa</a></li>
            <li><a href="#program" className="hover:text-blue-700 transition">Fasilitas & Uang Saku</a></li>
            <li><a href="#kampus" className="hover:text-blue-700 transition">Sentul Learning Center</a></li>
            <li><a href="#galeri" className="hover:text-blue-700 transition">Agenda & Kegiatan Siswa</a></li>
            <li><a href="#alur" className="hover:text-blue-700 transition">Pilihan Trek PPBP & PPTI</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-bold text-sm tracking-wide">PUSAT BANTUAN & FAQ</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Memiliki pertanyaan seputar syarat kelulusan, tahapan seleksi psikotes, atau masa ikatan dinas?
          </p>
          <div className="space-y-1.5 pt-1">
            <a href="#faq" className="inline-flex items-center space-x-1 text-blue-700 font-semibold hover:underline">
              <span>Kunjungi Pertanyaan Umum</span>
              <span>&rarr;</span>
            </a>
            <p className="text-slate-500">📧 beasiswa@bca.co.id</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
        <p>&copy; {new Date().getFullYear()} PT Bank Central Asia Tbk. Seluruh hak cipta dilindungi undang-undang. Program PPBP & PPTI adalah program beasiswa non-gelar resmi BCA.</p>
        <p className="text-right">Pendaftaran resmi hanya dilakukan melalui portal resmi beasiswa BCA. BCA tidak memungut biaya apapun selama proses seleksi berlangsung.</p>
      </div>
    </footer>
  );
}