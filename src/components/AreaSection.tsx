import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { SERVICE_AREAS, createWhatsAppUrl } from '../config/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';

export const AreaSection: React.FC = () => {
  const handleAreaClick = (areaName: string) => {
    trackWhatsAppClick(`btn-area-${areaName.toLowerCase().replace(/\s+/g, '-')}`, `Pilih Area: ${areaName}`, areaName, 'Area Section');
    const msg = `Halo BuangPuing.my.id, apakah melayani jasa buang puing / proyek untuk wilayah ${areaName}? Mohon info ketersediaan armada.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="w-full px-4 py-5 bg-gradient-to-b from-transparent to-blue-50/50">
      {/* Section Title */}
      <div className="text-center mb-3.5">
        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1261B5] uppercase tracking-wider mb-1">
          <Navigation className="w-3.5 h-3.5 text-[#FF851B]" />
          <span>Jangkauan Luas</span>
        </div>
        <h2 className="text-lg font-extrabold text-[#083B70] tracking-tight">
          AREA LAYANAN KAMI
        </h2>
        <p className="text-xs text-slate-500 max-w-[340px] mx-auto mt-1 leading-relaxed">
          Siap melayani kebutuhan jasa buang puing dan pekerjaan proyek di berbagai wilayah.
        </p>
      </div>

      {/* Chips / Tags Grid */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {SERVICE_AREAS.map((area) => (
          <button
            key={area.name}
            id={`btn-area-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
            data-gtm={`btn-area-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
            data-gtm-action="whatsapp_inquiry"
            data-gtm-area={area.name}
            data-gtm-category="conversion"
            onClick={() => handleAreaClick(area.name)}
            title={`Klik untuk order di ${area.name}`}
            className="gtm-track-wa group px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 hover:border-[#1261B5] hover:bg-blue-50/60 shadow-xs active:scale-95 transition-all text-xs flex items-center gap-2 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-md bg-[#1261B5]/10 group-hover:bg-[#1261B5] text-[#1261B5] group-hover:text-white flex items-center justify-center transition-colors">
              <MapPin className="w-3 h-3 text-current" />
            </div>
            <span className="font-bold text-[#1D2939] group-hover:text-[#1261B5] transition-colors">
              {area.name}
            </span>
            <span className="text-[10px] text-slate-400 font-normal">→</span>
          </button>
        ))}
      </div>

      {/* Availability Note */}
      <div className="mt-3 bg-white rounded-xl p-2.5 border border-blue-100 flex items-center justify-center gap-2 text-[11px] text-[#083B70]">
        <Clock className="w-3.5 h-3.5 text-[#FF851B]" />
        <span className="font-medium">
          Armada standby 24 jam &amp; siap survey gratis ke lokasi Anda
        </span>
      </div>
    </section>
  );
};
