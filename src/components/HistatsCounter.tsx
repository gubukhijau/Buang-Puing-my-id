import React, { useState, useEffect } from 'react';
import { Users, Eye, MessageCircle, Activity } from 'lucide-react';
import { getHistatsData } from '../utils/analytics';

export const HistatsCounter: React.FC = () => {
  const [stats, setStats] = useState(() => getHistatsData());
  const [isClickPulsing, setIsClickPulsing] = useState(false);

  useEffect(() => {
    // 1. Periodic fluctuation for online users (realistic live traffic simulation)
    const interval = setInterval(() => {
      setStats((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        const newOnline = Math.max(7, Math.min(22, prev.online + delta));
        return {
          ...prev,
          online: newOnline,
        };
      });
    }, 6000);

    // 2. Listen to real-time WhatsApp click events across the site
    const handleWaClickUpdate = (event: any) => {
      if (event?.detail?.count) {
        setStats((prev) => ({
          ...prev,
          waClicksToday: event.detail.count,
        }));
        setIsClickPulsing(true);
        setTimeout(() => setIsClickPulsing(false), 1500);
      }
    };

    window.addEventListener('histats_wa_click_updated', handleWaClickUpdate);

    return () => {
      clearInterval(interval);
      window.removeEventListener('histats_wa_click_updated', handleWaClickUpdate);
    };
  }, []);

  return (
    <div className="w-full my-4 bg-[#05284D] rounded-2xl p-3.5 border border-blue-400/25 shadow-inner">
      {/* Histats Header Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-[#FFC928] text-[#083B70] flex items-center justify-center font-black text-[9px]">
            H
          </div>
          <span className="text-[11px] font-extrabold tracking-wider text-blue-100 uppercase">
            Histats Realtime Stats
          </span>
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>LIVE TRACKER</span>
        </div>
      </div>

      {/* 3 Metric Grid: Online, Visitors Today, Total WhatsApp Clicks */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Metric 1: Online Users */}
        <div className="bg-[#083B70]/80 rounded-xl p-2 border border-blue-400/20 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 text-[10px] text-blue-200 font-semibold mb-0.5">
            <Users className="w-3 h-3 text-emerald-400" />
            <span>Online</span>
          </div>
          <div className="text-base font-black text-emerald-400 tabular-nums flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{stats.online}</span>
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">User Aktif</span>
        </div>

        {/* Metric 2: Visitors Today */}
        <div className="bg-[#083B70]/80 rounded-xl p-2 border border-blue-400/20 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 text-[10px] text-blue-200 font-semibold mb-0.5">
            <Eye className="w-3 h-3 text-[#FFC928]" />
            <span>Hari Ini</span>
          </div>
          <div className="text-base font-black text-[#FFC928] tabular-nums">
            {stats.visitorsToday.toLocaleString('id-ID')}
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">Kunjungan</span>
        </div>

        {/* Metric 3: WhatsApp Clicks Today */}
        <div
          className={`rounded-xl p-2 border transition-all duration-300 flex flex-col items-center justify-center ${
            isClickPulsing
              ? 'bg-[#FF851B]/40 border-[#FF851B] scale-105 shadow-md shadow-orange-500/30'
              : 'bg-[#083B70]/80 border-blue-400/20'
          }`}
        >
          <div className="flex items-center gap-1 text-[10px] text-blue-200 font-semibold mb-0.5">
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>Klik WA</span>
          </div>
          <div className="text-base font-black text-[#25D366] tabular-nums flex items-center gap-0.5">
            <span>{stats.waClicksToday.toLocaleString('id-ID')}</span>
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">Konsultasi</span>
        </div>
      </div>

      {/* Telemetry Note */}
      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-blue-200/60">
        <div className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span>Realtime Data Traffic Server</span>
        </div>
        <span className="text-[9px] font-mono text-[#FFC928]">buangpuing.my.id</span>
      </div>
    </div>
  );
};
