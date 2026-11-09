import React, { useState, useEffect } from 'react';
import { Users, Eye, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getGenuineHistatsData, sendSessionHeartbeat, initOfficialHistats } from '../utils/analytics';
import { SITE_CONFIG } from '../config/siteConfig';

export const HistatsCounter: React.FC = () => {
  const [stats, setStats] = useState(() => getGenuineHistatsData());
  const [isClickPulsing, setIsClickPulsing] = useState(false);
  const [histatsIdInput, setHistatsIdInput] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bp_custom_histats_id') || SITE_CONFIG.histatsSiteId || '';
    }
    return '';
  });
  const [showIdForm, setShowIdForm] = useState(false);
  const [isHistatsLoaded, setIsHistatsLoaded] = useState(false);

  useEffect(() => {
    // 1. Initialize official Histats if ID is present
    const activeHistatsId = histatsIdInput.trim() || SITE_CONFIG.histatsSiteId;
    if (activeHistatsId) {
      initOfficialHistats(activeHistatsId);
      setIsHistatsLoaded(true);
    }

    // 2. Real periodic heartbeat (checks active browser connections without fake numbers)
    const interval = setInterval(() => {
      const liveOnline = sendSessionHeartbeat();
      setStats((prev) => ({
        ...prev,
        online: liveOnline,
      }));
    }, 4000);

    // 3. Real WhatsApp click update listener
    const handleWaClickUpdate = (event: any) => {
      if (typeof event?.detail?.count === 'number') {
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
  }, [histatsIdInput]);

  const handleSaveHistatsId = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('bp_custom_histats_id', histatsIdInput.trim());
      if (histatsIdInput.trim()) {
        initOfficialHistats(histatsIdInput.trim());
        setIsHistatsLoaded(true);
      }
    }
    setShowIdForm(false);
  };

  return (
    <div className="w-full my-4 bg-[#05284D] rounded-2xl p-3.5 border border-blue-400/25 shadow-inner">
      {/* Histats Header Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#FFC928] text-[#083B70] flex items-center justify-center font-black text-[10px] shadow-sm">
            H
          </div>
          <div>
            <span className="text-[11px] font-extrabold tracking-wider text-blue-100 uppercase block">
              Histats Realtime Tracker
            </span>
          </div>
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>DATA ASLI (RIIL)</span>
        </div>
      </div>

      {/* 3 Metric Grid: Real Online, Real Visitors Today, Real WhatsApp Clicks */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Metric 1: Online Users (Real client heartbeat) */}
        <div className="bg-[#083B70]/80 rounded-xl p-2 border border-blue-400/20 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 text-[10px] text-blue-200 font-semibold mb-0.5">
            <Users className="w-3 h-3 text-emerald-400" />
            <span>Online</span>
          </div>
          <div className="text-base font-black text-emerald-400 tabular-nums flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{stats.online}</span>
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">Sesi Aktif</span>
        </div>

        {/* Metric 2: Real Visitors Today */}
        <div className="bg-[#083B70]/80 rounded-xl p-2 border border-blue-400/20 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 text-[10px] text-blue-200 font-semibold mb-0.5">
            <Eye className="w-3 h-3 text-[#FFC928]" />
            <span>Hari Ini</span>
          </div>
          <div className="text-base font-black text-[#FFC928] tabular-nums">
            {stats.visitorsToday.toLocaleString('id-ID')}
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">Pengunjung</span>
        </div>

        {/* Metric 3: Real WhatsApp Clicks */}
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
          <div className="text-base font-black text-[#25D366] tabular-nums">
            {stats.waClicksToday.toLocaleString('id-ID')}
          </div>
          <span className="text-[9px] text-blue-300/70 mt-0.5">Riil Hari Ini</span>
        </div>
      </div>

      {/* Official Histats script embed container if loaded */}
      {isHistatsLoaded && (
        <div className="mt-2 py-1 px-2 rounded-lg bg-blue-950/60 border border-emerald-400/20 flex items-center justify-between text-[10px] text-emerald-300">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Histats.com Resmi Aktif (ID: {histatsIdInput || SITE_CONFIG.histatsSiteId})</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400">Connected</span>
        </div>
      )}

      {/* Verification & Google Ads Safety Notice */}
      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-blue-200/75">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>100% Data Riil · Patuh Kebijakan Google Ads</span>
        </div>

        <button
          onClick={() => setShowIdForm(!showIdForm)}
          className="text-[9px] font-semibold text-[#FFC928] hover:underline cursor-pointer"
        >
          {showIdForm ? 'Tutup' : 'ID Histats'}
        </button>
      </div>

      {/* Optional Form to connect specific official Histats.com ID */}
      {showIdForm && (
        <form onSubmit={handleSaveHistatsId} className="mt-2 pt-2 border-t border-white/10 text-xs">
          <label className="block text-[10px] text-blue-200 mb-1">
            Masukkan ID Situs Histats Anda (dari histats.com):
          </label>
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={histatsIdInput}
              onChange={(e) => setHistatsIdInput(e.target.value)}
              placeholder="Contoh: 4928192"
              className="flex-1 px-2.5 py-1 text-xs rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#FFC928] text-[#083B70] hover:bg-amber-300 transition-colors"
            >
              Simpan
            </button>
          </div>
          <p className="text-[9px] text-blue-300/60 mt-1">
            Jika kosong, sistem mencatat data riil pengunjung dan klik WA tanpa angka palsu.
          </p>
        </form>
      )}
    </div>
  );
};
