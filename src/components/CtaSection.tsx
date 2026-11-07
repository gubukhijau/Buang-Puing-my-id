import React from 'react';
import { MessageCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

export const CtaSection: React.FC = () => {
  const handleWhatsAppConsultation = () => {
    const msg = 'Halo BuangPuing.my.id, saya butuh jasa buang puing / layanan proyek. Mohon bantu konsultasi dan estimasi biaya.';
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="w-full px-4 py-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#083B70] via-[#0D4B8C] to-[#1261B5] p-5 text-white shadow-xl border border-blue-400/30 text-center">
        {/* Glow & Pattern Accents */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FFC928]/25 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#FF851B]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Headline */}
          <h2 className="text-base sm:text-lg font-black tracking-tight text-[#FFC928] leading-snug mb-2">
            BUTUH JASA BUANG PUING ATAU LAYANAN PROYEK?
          </h2>

          {/* Description */}
          <p className="text-xs text-blue-100/90 leading-relaxed max-w-[320px] mx-auto mb-4">
            Konsultasikan kebutuhan Anda sekarang. Tim kami siap membantu memberikan solusi yang tepat.
          </p>

          {/* Big CTA Button in Orange/Yellow */}
          <button
            onClick={handleWhatsAppConsultation}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#FF851B] hover:bg-[#e6730f] active:scale-[0.98] text-white font-black text-sm tracking-wider shadow-lg shadow-orange-950/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer group border-2 border-[#FFC928]/40 animate-pulse-cta"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 fill-white text-[#FF851B]" />
            </div>
            <span>KONSULTASI VIA WHATSAPP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Direct Call Option */}
          <div className="mt-3 flex items-center justify-center gap-3 text-xs text-blue-100">
            <span>Atau telepon kami di:</span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="font-bold text-[#FFC928] hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
