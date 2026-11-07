import React from 'react';
import { ShieldCheck, Truck, Clock, CheckCircle2, MessageCircle, Phone, Award } from 'lucide-react';
import { SITE_CONFIG, createWhatsAppUrl } from '../config/siteConfig';

export const AboutUs: React.FC = () => {
  const handleChatWA = () => {
    const msg = 'Halo BuangPuing.my.id, saya ingin mengetahui lebih lanjut mengenai profil dan layanan jasa Anda.';
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section className="w-full px-4 py-3" aria-label="Tentang Kami">
      <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1261B5] text-[11px] font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#FF851B]" />
            <span>Tentang Kami</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Layanan Siap 24 Jam</span>
          </div>
        </div>

        {/* Official Brand Logo */}
        <div className="w-full bg-gradient-to-r from-[#083B70] to-[#1261B5] rounded-xl p-2 mb-3 flex items-center justify-center shadow-xs">
          <img
            src={SITE_CONFIG.logoUrl}
            alt={SITE_CONFIG.brandName}
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* Brand Headline */}
        <h3 className="text-base font-extrabold text-[#083B70] leading-snug mb-2">
          BUANGPUING.MY.ID – Solusi Andal Angkut Puing &amp; Proyek
        </h3>

        {/* Narrative Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          Kami adalah penyedia jasa profesional yang bergerak di bidang pengangkutan buang puing sisa pembongkaran bangunan, pembersihan sampah sisa renovasi, pembersihan lahan, galian tanah, hingga sewa alat berat di wilayah Jabodetabek.
        </p>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Dengan dukungan armada beragam serta tenaga kerja (kuli angkut) yang berpengalaman, kami berkomitmen memberikan pelayanan cepat, bersih, transparan, dan bertanggung jawab ke tempat pembuangan akhir resmi.
        </p>

        {/* 4 Key Values / Pillars */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2">
            <Truck className="w-4 h-4 text-[#1261B5] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-[#1D2939]">Armada Lengkap</h4>
              <p className="text-[10px] text-slate-500">Pick Up, Truk Engkel, hingga Dump Truck</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#FF851B] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-[#1D2939]">Respon Cepat</h4>
              <p className="text-[10px] text-slate-500">Siap meluncur hari ini juga</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1261B5] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-[#1D2939]">Pekerja Terlatih</h4>
              <p className="text-[10px] text-slate-500">Kerja rapi, bersih, dan amanah</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[11px] font-bold text-[#1D2939]">Harga Pasti</h4>
              <p className="text-[10px] text-slate-500">Tanpa biaya tak terduga</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="bg-gradient-to-r from-[#083B70] to-[#1261B5] rounded-xl p-3 text-white flex items-center justify-around text-center mb-3.5">
          <div>
            <div className="text-base font-extrabold text-[#FFC928]">5+ Thn</div>
            <div className="text-[10px] text-blue-100 font-medium">Pengalaman</div>
          </div>
          <div className="w-px h-7 bg-white/20" />
          <div>
            <div className="text-base font-extrabold text-[#FFC928]">2.800+</div>
            <div className="text-[10px] text-blue-100 font-medium">Ritase Selesai</div>
          </div>
          <div className="w-px h-7 bg-white/20" />
          <div>
            <div className="text-base font-extrabold text-[#FFC928]">100%</div>
            <div className="text-[10px] text-blue-100 font-medium">Jabodetabek</div>
          </div>
        </div>

        {/* WhatsApp & Contact Direct Action */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleChatWA}
            className="w-full py-2.5 px-4 rounded-xl bg-[#FF851B] hover:bg-[#e6730f] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
          </button>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#1261B5]" />
            <span>Telepon: {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
