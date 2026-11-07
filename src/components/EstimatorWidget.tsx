import React, { useState } from 'react';
import { Calculator, Truck, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../config/siteConfig';

export const EstimatorWidget: React.FC = () => {
  const [material, setMaterial] = useState('Puing Beton & Semen');
  const [volume, setVolume] = useState('Pick Up (±1.5 - 2 m³ / 30-40 karung)');
  const [location, setLocation] = useState('Jakarta');
  const [includeWorkers, setIncludeWorkers] = useState(true);

  const materials = [
    'Puing Beton & Semen',
    'Sampah Renovasi Campur',
    'Sampah Pohon & Kebun',
    'Tanah Galian / Urug',
  ];

  const volumes = [
    { label: 'Pick Up (±1.5 - 2 m³ / 30-40 karung)', type: 'Mobil Pick Up' },
    { label: 'Truk Engkel 4 Roda (±3.5 - 4 m³ / 80-100 karung)', type: 'Truk Engkel' },
    { label: 'Dump Truck Colt Diesel (±7 - 8 m³ / Proyek Besar)', type: 'Dump Truck' },
    { label: 'Hitung Berdasarkan Karung (< 20 karung)', type: 'Satuan Karung' },
  ];

  const locations = [
    'Jakarta (Pusat, Barat, Selatan, Timur, Utara)',
    'Depok & Sekitarnya',
    'Tangerang & Tangsel (BSD, Bintaro)',
    'Bekasi (Kota & Kabupaten)',
    'Bogor (Kota & Cibinong)',
  ];

  const handleSendEstimate = () => {
    const message = `Halo BuangPuing.my.id, saya ingin konsultasi estimasi buang puing/proyek:
- Material: ${material}
- Estimasi Armada/Volume: ${volume}
- Lokasi: ${location}
- Butuh Tenaga Angkut: ${includeWorkers ? 'Ya (Butuh Kenek/Kuli)' : 'Tidak (Hanya Armada)'}

Mohon informasi rincian biaya dan jadwal pengangkutan tercepat. Terima kasih.`;

    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="w-full px-4 py-3">
      <div className="bg-gradient-to-br from-[#083B70] to-[#1261B5] rounded-2xl p-4 text-white shadow-lg border border-blue-400/20 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFC928]/15 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#FFC928] text-[#083B70] flex items-center justify-center font-bold">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>Kalkulator Estimasi Cepat</span>
              <span className="text-[10px] bg-[#FF851B] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                Mudah
              </span>
            </h3>
            <p className="text-[11px] text-blue-100">Dapatkan rekomendasi armada & penawaran harga terbaik</p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-2.5 text-xs">
          {/* Material */}
          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              Jenis Material:
            </label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white/95 text-slate-800 font-medium border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
            >
              {materials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Volume / Armada */}
          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1 flex items-center gap-1">
              <Truck className="w-3 h-3 text-[#FFC928]" />
              <span>Estimasi Kebutuhan Armada:</span>
            </label>
            <select
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white/95 text-slate-800 font-medium border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
            >
              {volumes.map((v) => (
                <option key={v.label} value={v.label}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FFC928]" />
              <span>Wilayah Penjemputan:</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white/95 text-slate-800 font-medium border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Include Workers Toggle */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-blue-100">Termasuk Tenaga Kuli Angkut?</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeWorkers}
                onChange={(e) => setIncludeWorkers(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-blue-950 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FFC928]"></div>
              <span className="ml-2 text-[11px] font-semibold text-white">
                {includeWorkers ? 'Ya' : 'Tidak'}
              </span>
            </label>
          </div>
        </div>

        {/* CTA Button to WhatsApp */}
        <button
          onClick={handleSendEstimate}
          className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF851B] to-[#FFC928] hover:opacity-95 active:scale-[0.98] text-[#083B70] text-xs font-black tracking-wide flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>KIRIM RINCIAN ESTIMASI KE WHATSAPP</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
