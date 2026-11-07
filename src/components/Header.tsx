import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Zap, Award, Share2, Check, Phone } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';
import { trackWhatsAppClick, trackPhoneClick, pushGtmEvent } from '../utils/analytics';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    pushGtmEvent('click_share', { action: 'share_website', location: 'Header' });
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'BUANGPUING.MY.ID',
          text: 'Jasa Buang Puing, Sampah Renovasi & Layanan Proyek Jabodetabek',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrimaryWhatsApp = () => {
    trackWhatsAppClick('btn-wa-header', 'HUBUNGI KAMI SEKARANG', 'Umum', 'Header');
    const defaultMsg = 'Halo BuangPuing.my.id, saya ingin konsultasi jasa buang puing / layanan proyek. Mohon info harga dan ketersediaan armada.';
    window.open(createWhatsAppUrl(defaultMsg), '_blank');
  };

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#083B70] via-[#0B4D94] to-[#1261B5] text-white">
      {/* Decorative Blueprint / Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Radiant Yellow / Orange Glow Blobs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFC928]/25 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-36 -left-16 w-44 h-44 bg-[#FF851B]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Mobile Bar */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-4 pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <img
            src={SITE_CONFIG.logoUrl}
            alt="Logo"
            className="h-5 w-auto object-contain"
          />
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-100">
            Official Biolink
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Share Button */}
          <button
            id="btn-share-header"
            data-gtm="btn-share-header"
            onClick={handleShare}
            aria-label="Bagikan link website"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all backdrop-blur-sm border border-white/20 text-white"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#FFC928]" />
                <span className="text-[11px]">Tersalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="text-[11px]">Bagikan</span>
              </>
            )}
          </button>

          {/* Quick Call Button */}
          <a
            id="btn-call-header"
            data-gtm="btn-call-header"
            data-gtm-category="contact"
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            onClick={() => trackPhoneClick('Header Top Bar')}
            aria-label="Telepon langsung"
            className="gtm-track-call p-1.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-white border border-white/20"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Profile & Main Content Area */}
      <div className="relative z-10 px-5 pt-6 pb-7 flex flex-col items-center text-center">
        {/* Official Brand Logo */}
        <div className="relative mb-3 group cursor-pointer w-full flex items-center justify-center px-4" onClick={handlePrimaryWhatsApp}>
          <img
            src={SITE_CONFIG.logoUrl}
            alt="BUANGPUING.MY.ID - Solusi Praktis Buang Puing & Sampah Proyek"
            className="w-[200px] h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Headline */}
        <h2 className="text-base sm:text-lg font-bold text-[#FFC928] leading-snug max-w-[340px] mb-2">
          Solusi Praktis Buang Puing &amp; Sampah Proyek
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed max-w-[350px] mb-4">
          Melayani jasa angkut puing bangunan, sampah renovasi, pembersihan lahan, hingga kebutuhan pekerjaan proyek.
        </p>

        {/* Trust Badges: Profesional | Cepat | Terpercaya */}
        <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>Profesional</span>
          </div>
          <span className="text-white/40 font-bold">|</span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>Cepat</span>
          </div>
          <span className="text-white/40 font-bold">|</span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>Terpercaya</span>
          </div>
        </div>

        {/* Main CTA Button: HUBUNGI KAMI SEKARANG */}
        <button
          id="btn-wa-header"
          data-gtm="btn-wa-header"
          data-gtm-action="whatsapp_inquiry"
          data-gtm-category="conversion"
          data-gtm-location="header"
          onClick={handlePrimaryWhatsApp}
          className="gtm-track-wa w-full max-w-[360px] py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#FF851B] to-[#FFC928] text-[#083B70] font-black text-sm tracking-wide shadow-lg shadow-black/20 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group cursor-pointer border border-amber-300/40"
        >
          <div className="w-8 h-8 rounded-full bg-[#083B70] text-white flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
            <MessageCircle className="w-4 h-4 fill-current text-white" />
          </div>
          <span className="text-sm font-extrabold tracking-wider">HUBUNGI KAMI SEKARANG</span>
          <span className="text-lg leading-none font-black text-[#083B70] transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Micro Subtext / Guarantee */}
        <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-blue-100/80">
          <span>✓ Respon WhatsApp &lt; 5 Menit</span>
          <span>·</span>
          <span>✓ Armada Siap Hari Ini</span>
        </div>
      </div>
    </header>
  );
};
