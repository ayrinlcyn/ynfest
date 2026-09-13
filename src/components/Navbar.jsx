import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-black text-blue-900 tracking-wider">TriJawi</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <a href="#beranda" className="hover:text-blue-600 transition">Beranda</a>
          <a href="#tentang" className="hover:text-blue-600 transition">Tentang</a>
          <a href="#program" className="hover:text-blue-600 transition">Program</a>
          <a href="#alur" className="hover:text-blue-600 transition">Alur</a>
          <a href="#kampus" className="hover:text-blue-600 transition">Kampus</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <a href="#syarat" className="px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-slate-100 rounded-lg transition">Masuk</a>
          <a href="#syarat" className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow transition">Daftar</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 focus:outline-none">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Beranda</a>
          <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Tentang</a>
          <a href="#program" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Program</a>
          <a href="#alur" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Alur</a>
          <a href="#kampus" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Kampus</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium">FAQ</a>
          <div className="pt-2 flex flex-col space-y-2">
            <a href="#syarat" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-lg">Masuk</a>
            <a href="#syarat" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg">Daftar</a>
          </div>
        </div>
      )}
    </header>
  );
}