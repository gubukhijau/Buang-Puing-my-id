import React from 'react';
import { Truck, CheckCircle2, MessageSquare, CalendarClock, ShieldCheck } from 'lucide-react';
import { FLEET_OPTIONS, createWhatsAppUrl } from '../config/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';

export const FleetSection: React.FC = () => {
  const handleFleetInquiry = (fleetName: string, fleetId: string) => {
    trackWhatsAppClick(`btn-fleet-${fleetId}`, `Pilih Armada: ${fleetName}`, fleetName, 'Fleet Section');
    const msg = `Halo BuangPuing.my.id, saya ingin menanyakan ketersediaan armada ${fleetName} untuk angkut puing/sampah proyek. Mohon info tarifnya.`;
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const steps = [
    {
      num: '1',
      title: 'Kirim Foto via WA',
      desc: 'Foto tumpukan puing atau lokasi proyek Anda dan kirimkan ke WhatsApp kami.',
      icon: MessageSquare,
    },
    {
      num: '2',
      title: 'Estimasi & Kesepakatan',
      desc: 'Kami rekomendasikan armada terbaik beserta rincian biaya yang transparan.',
      icon: CalendarClock,
    },
    {
      num: '3',
      title: 'Armada Datang & Bersih',
      desc: 'Tim supir & kuli tiba di lokasi, memuat puing hingga bersih tuntas.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full px-4 py-5">
      {/* 3 Cara Mudah Pesan */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm mb-5">
        <div className="text-center mb-3.5">
          <span className="text-[10px] font-bold text-[#FF851B] uppercase tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
            Praktis &amp; Cepat
          </span>
          <h3 className="text-sm font-extrabold text-[#083B70] mt-1.5">
            3 Langkah Mudah Memesan Jasa
          </h3>
        </div>

        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1261B5] text-[#FFC928] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#1D2939]">{step.title}</h4>
                    <Icon className="w-3.5 h-3.5 text-[#1261B5]" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pilihan Armada Standby */}
      <div className="text-center mb-3">
        <h3 className="text-sm font-extrabold text-[#083B70]">
          PILIHAN ARMADA KAMI
        </h3>
        <p className="text-[11px] text-slate-500">
          Disesuaikan dengan volume material dan akses jalan ke lokasi Anda
        </p>
      </div>

      <div className="space-y-2.5">
        {FLEET_OPTIONS.map((fleet) => (
          <div
            key={fleet.id}
            id={`btn-fleet-${fleet.id}`}
            data-gtm={`btn-fleet-${fleet.id}`}
            data-gtm-action="whatsapp_inquiry"
            data-gtm-category="conversion"
            data-gtm-fleet={fleet.name}
            onClick={() => handleFleetInquiry(fleet.name, fleet.id)}
            className="gtm-track-wa group bg-white rounded-2xl p-3.5 border border-slate-200/90 hover:border-[#1261B5] transition-all cursor-pointer shadow-xs flex items-center justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1261B5] flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#1261B5] group-hover:text-white transition-colors">
                <Truck className="w-5 h-5 text-current" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-[#1D2939] group-hover:text-[#1261B5] transition-colors">
                    {fleet.name}
                  </h4>
                  <span className="text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-md border border-amber-200">
                    {fleet.tag}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#083B70] mt-0.5">
                  {fleet.capacity}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {fleet.desc}
                </p>
              </div>
            </div>

            <div className="shrink-0 pl-2">
              <span className="text-xs font-bold text-[#FF851B] group-hover:underline flex items-center gap-0.5">
                Pilih →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
