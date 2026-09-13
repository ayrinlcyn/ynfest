import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "Apakah program beasiswa PPTI dan PPBP BCA dipungut biaya?",
      a: "Tidak sama sekali. Program ini bebas biaya pendidikan, bahkan peserta mendapatkan fasilitas laptop bagi peserta PPTI, asrama, makan siang, coffe break 2 kali, serta uang saku bulanan."
    },
    {
      q: "Apakah setelah lulus dijamin langsung bekerja di BCA?",
      a: "Lulusan memiliki kesempatan luas dan prioritas penempatan kerja untuk berkarier di PT Bank Central Asia Tbk sesuai dengan jalur keahlian masing-masing."
    },
    {
      q: "Di mana lokasi perkuliahan dan asrama diselenggarakan?",
      a: "Kegiatan belajar mengajar dan fasilitas asrama terpusat di kawasan Rumah Talenta BCA (RTB) serta BCA Learning Institute (BLI) yang berlokasi di Sentul, Bogor."
    },
    {
      q: "Apakah siswa dari jurusan IPS atau SMK non-IT bisa mendaftar PPTI?",
      a: "PPTI terbuka bagi siswa/i lulusan SMA/SMK dari berbagai jurusan asalkan memenuhi standar nilai rapor dan lulus melalui rangkaian tahapan tes seleksi logika."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm">
            Temukan jawaban cepat seputar pendaftaran, fasilitas, dan ketentuan beasiswa BCA.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <span className="text-sm">{item.q}</span>
                {openFaq === index ? <FiChevronUp className="text-blue-700 flex-shrink-0" /> : <FiChevronDown className="text-slate-400 flex-shrink-0" />}
              </button>
              {openFaq === index && (
                <div className="p-5 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}