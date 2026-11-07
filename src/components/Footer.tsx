import React from 'react';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
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
        <p className="text-xs text-blue-200/90 font-medium max-w-[320px] mb-4">
          Solusi Jasa Buang Puing, Kebersihan, dan Pekerjaan Proyek.
        </p>

        {/* Quick Contact Info */}
        <div className="w-full py-3 my-2 border-y border-white/10 flex flex-col gap-2 text-[11px] text-blue-200/80">
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFC928] shrink-0" />
            <span>Melayani Seluruh Jabodetabek</span>
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

        {/* Copyright */}
        <p className="text-[11px] text-blue-300/60 mt-3">
          Copyright © 2026 BuangPuing.my.id. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
