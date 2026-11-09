import React from 'react';
import { Truck, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { HistatsCounter } from './HistatsCounter';
import { LegalTabType } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (tab: LegalTabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full bg-[#083B70] text-white px-5 pt-7 pb-20 border-t border-blue-900/50 mt-4">
      <div className="flex flex-col items-center text-center">
        {/* Brand Lockup */}
        <div className="flex items-center justify-center mb-2.5">
          <img
            src={SITE_CONFIG.logoUrl}
            alt={SITE_CONFIG.brandName}
            className="w-[156px] h-[59px] object-contain drop-shadow-sm"
          />
        </div>

        {/* Tagline */}
        <p className="text-xs text-blue-200/90 font-medium max-w-[320px] mb-3">
          Solusi Jasa Buang Puing, Kebersihan, dan Pekerjaan Proyek.
        </p>

        {/* Quick Contact Info & Operating Hours */}
        <div className="w-full py-3 my-2 border-y border-white/10 flex flex-col gap-2 text-[11px] text-blue-200/80">
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFC928] shrink-0" />
            <span>Melayani Seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FFC928] shrink-0" />
            <span>Jam Operasional: {SITE_CONFIG.operationalHours}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#FF851B] shrink-0" />
            <span>Fast Response: {SITE_CONFIG.phoneDisplay}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#FFC928] shrink-0" />
            <span>{SITE_CONFIG.email}</span>
          </div>
        </div>

        {/* Histats Realtime Counter */}
        <HistatsCounter />

        {/* Google Ads Compliance Links: Privacy Policy, Terms, Disclaimer */}
        <div className="w-full mt-2 pt-2 flex items-center justify-center gap-3 text-[11px] text-blue-200/90 flex-wrap">
          <button
            onClick={() => onOpenLegal?.('privacy')}
            className="hover:text-[#FFC928] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Kebijakan Privasi
          </button>
          <span>·</span>
          <button
            onClick={() => onOpenLegal?.('terms')}
            className="hover:text-[#FFC928] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Syarat &amp; Ketentuan
          </button>
          <span>·</span>
          <button
            onClick={() => onOpenLegal?.('disclaimer')}
            className="hover:text-[#FFC928] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Penafian Layanan
          </button>
        </div>

        {/* Google Ads Safety Badge */}
        <div className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-900/40 border border-blue-400/20 text-[10px] text-blue-200">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Situs Resmi Bebas Biaya Tersembunyi · Terverifikasi</span>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-blue-300/60 mt-3">
          Copyright © 2026 BuangPuing.my.id. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
