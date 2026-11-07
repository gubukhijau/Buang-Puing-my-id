import React from 'react';
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
  Info
} from 'lucide-react';
import { ServiceItem, createWhatsAppUrl } from '../config/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onOpenDetails }) => {
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
    // Direct WhatsApp booking on card click
    window.open(createWhatsAppUrl(service.defaultMessage), '_blank');
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative w-full bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Top right subtle badge if available */}
      {service.badge && (
        <div className="absolute top-0 right-0 bg-[#FFC928] text-[#083B70] text-[10px] font-bold px-2.5 py-0.5 rounded-bl-xl tracking-tight">
          {service.badge}
        </div>
      )}

      <div className="flex items-start gap-3.5">
        {/* Left Icon Container: Blue background with Yellow ring accent */}
        <div className="relative shrink-0 mt-0.5">
          <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#1261B5] to-[#083B70] flex items-center justify-center shadow-md shadow-blue-900/15 border-2 border-[#FFC928]/40 group-hover:scale-105 group-hover:border-[#FFC928] transition-all">
            {getIcon(service.icon)}
          </div>
          {/* Subtle index number pill */}
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#083B70] border border-white text-[10px] font-bold text-[#FFC928] flex items-center justify-center">
            {index + 1}
          </span>
        </div>

        {/* Center Content: Title & Short Desc */}
        <div className="flex-1 min-w-0 pr-6">
          <h3 className="text-[15px] font-bold text-[#1D2939] leading-snug group-hover:text-[#1261B5] transition-colors line-clamp-1">
            {service.name}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
            {service.shortDesc}
          </p>

          {/* Action Row: Pesan Sekarang Button + Info button */}
          <div className="mt-3 flex items-center gap-2">
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
          </div>
        </div>

        {/* Right Arrow indicator */}
        <div className="absolute top-1/2 right-3 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#1261B5] flex items-center justify-center transition-colors text-slate-400 group-hover:text-white">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
