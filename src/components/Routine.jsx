import React from 'react';

export default function Routine() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-extrabold tracking-widest uppercase rounded-full">
            ROUTINE & LIFESTYLE
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight">
            POV: Sehari Jadi Mahasiswa PPBP/PPTI
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Intip rutinitas sehari-hari yang seimbang antara belajar, istirahat,
            dan menikmati waktu bersama teman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 06:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 06:00 Morning
              </span>
              <span className="text-xl">🌅</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Siap-Siap Memulai Hari
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bangun, bersiap, sarapan, dan menyiapkan segala kebutuhan sebelum berangkat ke BLI.
              </p>
            </div>
          </div>

          {/* 07:10 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 07:10 Go to BLI
              </span>
              <span className="text-xl">🚶</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Jalan Kaki ke BLI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Berangkat jalan kaki menuju BLI dan menikmati suasana pagi sebelum memulai aktivitas belajar.
              </p>
            </div>
          </div>

          {/* 07:30 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 07:30 Breakfast
              </span>
              <span className="text-xl">🍽️</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Beli Makan di Kantin
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sampai di BLI, mampir ke kantin untuk membeli makanan sebelum kelas dimulai.
              </p>
            </div>
          </div>

          {/* 08:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 08:00 Study
              </span>
              <span className="text-xl">📚</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Mulai Belajar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Memulai kegiatan belajar dan mengikuti materi sesuai jadwal pembelajaran hari itu.
              </p>
            </div>
          </div>

          {/* 09:30 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 09:30 Coffee Break
              </span>
              <span className="text-xl">☕</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Coffee Break
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Istirahat sebentar, ngopi, ngobrol, dan recharge energi sebelum kembali fokus belajar.
              </p>
            </div>
          </div>

          {/* 10:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 10:00 Study
              </span>
              <span className="text-xl">💻</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Lanjut Belajar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kembali fokus mengikuti pembelajaran, mengerjakan tugas, dan berdiskusi bersama teman.
              </p>
            </div>
          </div>

          {/* 11:30 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 11:30 Lunch
              </span>
              <span className="text-xl">🍜</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Makan & Istirahat
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Waktunya makan siang, istirahat, dan menikmati waktu santai sebelum aktivitas belajar dimulai lagi.
              </p>
            </div>
          </div>

          {/* 13:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 13:00 Study
              </span>
              <span className="text-xl">📖</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Kembali Belajar
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Melanjutkan pembelajaran dan menyelesaikan berbagai tugas atau aktivitas akademik.
              </p>
            </div>
          </div>

          {/* 14:30 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 14:30 Coffee Break
              </span>
              <span className="text-xl">☕</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Coffee Break Lagi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rehat sejenak untuk mengembalikan energi sebelum melanjutkan sesi belajar berikutnya.
              </p>
            </div>
          </div>

          {/* 15:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 15:00 Study
              </span>
              <span className="text-xl">📝</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Sesi Belajar Terakhir
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Melanjutkan materi dan menyelesaikan aktivitas pembelajaran sampai waktu kegiatan selesai.
              </p>
            </div>
          </div>

          {/* 16:30 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 16:30 Free Time
              </span>
              <span className="text-xl">🎧</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Free Time
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Waktu bebas untuk santai, ngobrol, atau menikmati waktu bersama teman sebelum pulang.
              </p>
            </div>
          </div>

          {/* 17:00 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 17:00 Go Home
              </span>
              <span className="text-xl">🏠</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Waktunya Pulang
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Setelah seharian beraktivitas, saatnya kembali dan beristirahat untuk mempersiapkan hari berikutnya.
              </p>
            </div>
          </div>

          {/* 18:00 - Night */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                ⏰ 18:00 - Night
              </span>
              <span className="text-xl">🌙</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-blue-950">
                Istirahat, Belajar & Santai
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Setelah sampai, waktunya istirahat, belajar mandiri, mengerjakan tugas, atau sekadar santai sampai malam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}