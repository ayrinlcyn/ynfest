import React from 'react';

export default function Stats() {
  return (
    <section className="py-6 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-3"><h3 className="text-xl font-bold text-blue-900">600+</h3><p className="text-xs text-slate-500">Mahasiswa</p></div>
        <div className="p-3"><h3 className="text-xl font-bold text-blue-900">BCA</h3><p className="text-xs text-slate-500">Ecosystem Partner</p></div>
        <div className="p-3"><h3 className="text-xl font-bold text-blue-900">10+</h3><p className="text-xs text-slate-500">Event</p></div>
        <div className="p-3"><h3 className="text-xl font-bold text-blue-900">98%</h3><p className="text-xs text-slate-500">Offering</p></div>
      </div>
    </section>
  );
}