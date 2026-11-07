import React from 'react';
import { ShieldCheck, Zap, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { BENEFITS_DATA } from '../config/siteConfig';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="w-5 h-5 text-[#1261B5]" />;
      case 'Zap':
        return <Zap {...props} className="w-5 h-5 text-[#FF851B]" />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} className="w-5 h-5 text-[#083B70]" />;
      case 'Building2':
        return <Building2 {...props} className="w-5 h-5 text-[#FF851B]" />;
      default:
        return <Layers {...props} className="w-5 h-5 text-[#1261B5]" />;
    }
  };

  return (
    <section className="w-full px-4 py-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-extrabold text-[#083B70] tracking-tight">
          KENAPA MEMILIH KAMI?
        </h2>
        <p className="text-xs text-slate-500 max-w-[320px] mx-auto mt-1 leading-relaxed">
          Kepercayaan dan kepuasan pelanggan adalah prioritas utama setiap pekerjaan kami.
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        {BENEFITS_DATA.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm flex flex-col items-start hover:border-[#1261B5]/40 transition-colors"
          >
            {/* Icon container with yellow ring accent */}
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-[#FFC928]/60 flex items-center justify-center mb-2.5 shadow-xs">
              {getIcon(benefit.icon)}
            </div>

            <h3 className="text-xs font-bold text-[#1D2939] leading-snug mb-1">
              {benefit.title}
            </h3>

            <p className="text-[11px] text-slate-500 leading-normal line-clamp-3">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
