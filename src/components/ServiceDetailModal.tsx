import React from 'react';
import { X, CheckCircle2, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { ServiceItem, createWhatsAppUrl } from '../config/siteConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleBookNow = () => {
    window.open(createWhatsAppUrl(service.defaultMessage), '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[430px] bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab Handle for mobile feel */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal rincian layanan"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Category */}
        <div className="pr-8 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1261B5] bg-blue-50 px-2 py-0.5 rounded-md">
            Layanan Resmi
          </span>
          <h3 className="text-lg font-extrabold text-[#083B70] mt-1 leading-snug">
            {service.name}
          </h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Recommended Fleet */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 mb-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1261B5] text-white flex items-center justify-center shrink-0">
            <Truck className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#083B70] uppercase">
              Rekomendasi Armada
            </span>
            <p className="text-xs font-bold text-[#1261B5]">
              {service.recommendedFleet}
            </p>
          </div>
        </div>

        {/* Tagger Anchor Link */}
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2 mb-4">
          <div className="flex items-center gap-1.5 text-slate-600 font-mono text-[11px] truncate">
            <span className="text-[#1261B5] font-bold">Tag:</span>
            <span className="text-slate-800 font-semibold truncate">buangpuing.my.id/#{service.slug}</span>
          </div>
          <button
            onClick={() => {
              const url = `${window.location.origin}${window.location.pathname}#${service.slug}`;
              navigator.clipboard.writeText(url);
              window.history.replaceState(null, '', `#${service.slug}`);
            }}
            className="shrink-0 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-blue-50 text-[#1261B5] hover:bg-blue-100 transition-colors"
          >
            Salin Link
          </button>
        </div>

        {/* Scope Checklist */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-[#1D2939] uppercase tracking-wider mb-2">
            Cakupan Layanan:
          </h4>
          <div className="space-y-2">
            {service.details.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF851B] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 leading-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Pesan via WhatsApp */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={handleBookNow}
            className="w-full py-3.5 px-4 rounded-xl bg-[#FF851B] hover:bg-[#e6730f] active:scale-[0.98] text-white font-extrabold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>PESAN LAYANAN INI VIA WHATSAPP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            Konsultasi gratis &amp; penawaran harga tanpa komitmen
          </p>
        </div>
      </div>
    </div>
  );
};
