import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../config/siteConfig';
import { ServiceCard } from './ServiceCard';
import { Sparkles, Search, X } from 'lucide-react';

interface ServicesListProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'puing' | 'lahan' | 'proyek'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full px-4 pt-6 pb-4">
      {/* Section Title Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1261B5] text-[11px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF851B]" />
          <span>Katalog Layanan Lengkap</span>
        </div>
        <h2 className="text-xl font-extrabold text-[#083B70] tracking-tight">
          PILIH LAYANAN KAMI
        </h2>
        <p className="text-xs text-slate-500 max-w-[340px] mx-auto mt-1 leading-relaxed">
          Berbagai solusi kebutuhan angkut puing, kebersihan, dan pekerjaan proyek dalam satu tempat.
        </p>
      </div>

      {/* Quick Filter Segmented Control & Search */}
      <div className="mb-3 space-y-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#1261B5] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Semua (9)
          </button>
          <button
            onClick={() => setActiveCategory('puing')}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
              activeCategory === 'puing'
                ? 'bg-[#1261B5] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Puing &amp; Sampah
          </button>
          <button
            onClick={() => setActiveCategory('lahan')}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
              activeCategory === 'lahan'
                ? 'bg-[#1261B5] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Pohon &amp; Lahan
          </button>
          <button
            onClick={() => setActiveCategory('proyek')}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
              activeCategory === 'proyek'
                ? 'bg-[#1261B5] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Proyek &amp; Alat
          </button>
        </div>

        {/* Quick Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari layanan (contoh: puing, tanah, alat berat)..."
            className="w-full pl-8 pr-8 py-2 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1261B5]/30 focus:border-[#1261B5] transition-all"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 9 Services List */}
      <div className="space-y-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={onSelectService}
            />
          ))
        ) : (
          <div className="py-8 text-center bg-white rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-600">Layanan tidak ditemukan</p>
            <p className="text-xs text-slate-400 mt-1">Coba kata kunci lain atau hubungi kami langsung via WhatsApp.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-bold text-[#1261B5] bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
