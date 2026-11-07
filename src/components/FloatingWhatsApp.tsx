import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl } from '../config/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackWhatsAppClick('btn-wa-floating', 'Floating WhatsApp Button', 'Umum', 'Floating Widget');
    const defaultMsg = 'Halo, saya ingin bertanya mengenai layanan BuangPuing.my.id.';
    window.open(createWhatsAppUrl(defaultMsg), '_blank');
  };

  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Small Chat Bubble Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Butuh bantuan? Chat kami!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Tutup notifikasi chat"
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <button
        id="btn-wa-floating"
        data-gtm="btn-wa-floating"
        data-gtm-action="whatsapp_inquiry"
        data-gtm-category="conversion"
        data-gtm-location="floating"
        onClick={handleClick}
        aria-label="Hubungi BuangPuing via WhatsApp"
        className="gtm-track-wa group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] active:scale-95 transition-all cursor-pointer border-2 border-white"
      >
        {/* Soft Radar Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping-soft pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
      </button>
    </aside>
  );
};
