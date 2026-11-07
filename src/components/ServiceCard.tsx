import React, { useState } from 'react';
import {
  Truck,
  Trash2,
  Trees,
  Layers,
  Sparkles,
  Pickaxe,
  Tractor,
  HardHat,
  Home,
  ArrowRight,
  MessageCircle,
  Info,
  Link as LinkIcon,
  Check
} from 'lucide-react';
import { ServiceItem, createWhatsAppUrl, SITE_CONFIG } from '../config/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  isHighlighted?: boolean;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isHighlighted = false,
  onOpenDetails,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Map icon name to Lucide Icon component
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-white' };
    switch (iconName) {
      case 'Truck':
        return <Truck {...props} />;
      case 'Trash2':
        return <Trash2 {...props} />;
      case 'Trees':
        return <Trees {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Pickaxe':
        return <Pickaxe {...props} />;
      case 'Tractor':
        return <Tractor {...props} />;
      case 'HardHat':
        return <HardHat {...props} />;
      case 'Home':
        return <Home {...props} />;
      default:
        return <Truck {...props} />;
    }
  };

  const handleOrderWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(createWhatsAppUrl(service.defaultMessage), '_blank');
  };

  const handleCardClick = () => {
    // Update hash smoothly without page jump
    window.history.replaceState(null, '', `#${service.slug}`);
    window.open(createWhatsAppUrl(service.defaultMessage), '_blank');
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const serviceUrl = `${window.location.origin}${window.location.pathname}#${service.slug}`;
    navigator.clipboard.writeText(serviceUrl);
    window.history.replaceState(null, '', `#${service.slug}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="relative">
      {/* Anchor targets for ID and aliases so direct links like #buang-puing or #buang-puing-bangunan jump accurately */}
      <span id={service.id} className="scroll-mt-24 block absolute -top-24" />
      {service.aliases?.map((alias) => (
        <span key={alias} id={alias} className="scroll-mt-24 block absolute -top-24" />
      ))}

      <div
        id={service.slug}
        onClick={handleCardClick}
        className={`group relative w-full rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden scroll-mt-24 ${
          isHighlighted
            ? 'bg-amber-50/40 border-2 border-[#FFC928] shadow-lg shadow-amber-500/15 ring-2 ring-[#FFC928]/40 scale-[1.01]'
            : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md active:scale-[0.99]'
        }`}
      >
        {/* Top right badges: Custom tag or Highlight indicator */}
        <div className="absolute top-0 right-0 flex items-center">
          {isHighlighted && (
            <div className="bg-[#FF851B] text-white text-[10px] font-black px-2.5 py-0.5 rounded-bl-xl tracking-tight flex items-center gap-1 shadow-sm animate-pulse">
              <span>★ Dipilih</span>
            </div>
          )}
          {service.badge && !isHighlighted && (
            <div className="bg-[#FFC928] text-[#083B70] text-[10px] font-bold px-2.5 py-0.5 rounded-bl-xl tracking-tight">
              {service.badge}
            </div>
          )}
        </div>

        <div className="flex items-start gap-3.5">
          {/* Left Icon Container: Blue background with Yellow ring accent */}
          <div className="relative shrink-0 mt-0.5">
            <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#1261B5] to-[#083B70] flex items-center justify-center shadow-md shadow-blue-900/15 border-2 border-[#FFC928]/40 group-hover:scale-105 group-hover:border-[#FFC928] transition-all">
              {getIcon(service.icon)}
            </div>
            {/* Index number */}
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#083B70] border border-white text-[10px] font-bold text-[#FFC928] flex items-center justify-center">
              {index + 1}
            </span>
          </div>

          {/* Center Content: Title & Short Desc */}
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="text-[15px] font-bold text-[#1D2939] leading-snug group-hover:text-[#1261B5] transition-colors line-clamp-1">
                {service.name}
              </h3>
            </div>

            {/* Service Slug anchor tag indicator */}
            <div className="flex items-center gap-1 mt-0.5 text-[10px] font-mono font-semibold text-[#1261B5]/80">
              <span>#{service.slug}</span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
              {service.shortDesc}
            </p>

            {/* Action Row: Pesan Sekarang Button + Info + Copy Link */}
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <button
                onClick={handleOrderWhatsApp}
                className="px-3 py-1.5 rounded-lg bg-[#FF851B] hover:bg-[#e06f0e] active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Quick Details trigger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetails(service);
                }}
                title="Lihat rincian layanan"
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#1261B5] hover:bg-blue-50 active:scale-95 transition-all text-xs flex items-center gap-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden sm:inline">Rincian</span>
              </button>

              {/* Copy Anchor Link Button */}
              <button
                onClick={handleCopyLink}
                title={`Salin link https://buangpuing.my.id/#${service.slug}`}
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#1261B5] hover:bg-blue-50 active:scale-95 transition-all text-xs flex items-center gap-1"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-600">Disalin!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] text-slate-400 font-medium">Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Arrow indicator */}
          <div className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#1261B5] flex items-center justify-center transition-colors text-slate-400 group-hover:text-white">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
