import React, { useState } from 'react';
import { X, ShieldCheck, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export type LegalTabType = 'privacy' | 'terms' | 'disclaimer';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);

  // Sync initial tab when opened
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Informasi Legal & Kebijakan"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[430px] bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Grab Handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 shrink-0" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 mb-3 shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1261B5] uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kepatuhan &amp; Transparansi Layanan</span>
          </div>
          <h3 className="text-base font-extrabold text-[#083B70]">
            Legalitas &amp; Kebijakan Privasi
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Sesuai standar Pedoman Periklanan Google Ads &amp; Perlindungan Konsumen
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl mb-3 shrink-0 text-xs">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-center transition-all ${
              activeTab === 'privacy'
                ? 'bg-white text-[#1261B5] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privasi
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-center transition-all ${
              activeTab === 'terms'
                ? 'bg-white text-[#1261B5] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ketentuan
          </button>
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-center transition-all ${
              activeTab === 'disclaimer'
                ? 'bg-white text-[#1261B5] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Penafian
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto pr-1 text-xs text-slate-600 space-y-3 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 text-[11px] text-emerald-800 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Komitmen Privasi:</strong> Kami melindungi data pribadi Anda dan tidak pernah memperjualbelikan data kontak kepada pihak ketiga mana pun.
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">1. Informasi yang Dikumpulkan</h4>
                <p>
                  Saat Anda menghubungi kami melalui WhatsApp atau formulir, kami hanya mengumpulkan informasi yang Anda berikan secara sukarela untuk keperluan penawaran jasa:
                </p>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px]">
                  <li>Nomor WhatsApp / Telepon untuk komunikasi pemesanan.</li>
                  <li>Foto tumpukan puing atau lokasi proyek untuk estimasi muatan armada.</li>
                  <li>Alamat atau wilayah penjemputan di area Jabodetabek.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">2. Penggunaan Informasi</h4>
                <p>
                  Data Anda digunakan secara eksklusif untuk:
                </p>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px]">
                  <li>Menghitung estimasi biaya angkut dan rekomendasi armada yang sesuai.</li>
                  <li>Penjadwalan supir, kenek (kuli angkut), dan kedatangan armada ke lokasi.</li>
                  <li>Konfirmasi penyelesaian pekerjaan dan evaluasi kepuasan pelanggan.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">3. Penggunaan Cookie &amp; Google Tag Manager</h4>
                <p className="text-[11px]">
                  Situs ini menggunakan cookie analitik dan Google Tag Manager (GTM) semata-mata untuk mengukur kinerja kampanye iklan Google Ads dan menghitung efektivitas konversi tombol WhatsApp. Tidak ada data pribadi sensitif yang dikirim ke jaringan periklanan.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">4. Hak Pengguna</h4>
                <p className="text-[11px]">
                  Anda berhak sewaktu-waktu meminta penghapusan riwayat percakapan atau data lokasi dengan menghubungi kontak resmi kami di <span className="font-bold text-[#1261B5]">{SITE_CONFIG.phoneDisplay}</span>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5 text-[11px] text-blue-900 flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#1261B5] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparansi Layanan:</strong> Semua harga disepakati bersama sebelum armada diberangkatkan, tanpa ada biaya siluman atau pungli.
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">1. Ruang Lingkup Pekerjaan</h4>
                <p className="text-[11px]">
                  BUANGPUING.MY.ID melayani jasa pengangkutan sisa pembongkaran bangunan, sampah renovasi (kayu, gypsum, kaleng cat kering, kardus), sampah hasil pemangkasan pohon/kebun, pengurugan tanah/puing, galian tanah, dan penyewaan alat berat.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">2. Larangan Material Tertentu</h4>
                <p className="text-[11px]">
                  Demi keselamatan kerja dan kepatuhan hukum lingkungan, kami <strong>tidak menerima</strong> limbah Bahan Berbahaya dan Beracun (B3), bahan kimia industri cair, limbah medis, atau zat mudah meledak tanpa dokumen izin resmi pemerintah.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">3. Lokasi Pembuangan Resmi</h4>
                <p className="text-[11px]">
                  Seluruh puing dan material yang diangkut dibawa dan dibuang secara bertanggung jawab ke Tempat Pembuangan Akhir (TPA) resmi atau lokasi penampungan pengurugan yang berizin, bukan ke tempat pembuangan liar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">4. Pembayaran &amp; Pembatalan</h4>
                <p className="text-[11px]">
                  Pembayaran dilakukan secara tunai atau transfer setelah pekerjaan selesai dimuat dan disetujui pelanggan di lokasi. Pembatalan sepihak sebelum armada jalan tidak dikenakan biaya.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#FF851B] shrink-0 mt-0.5" />
                <span>
                  <strong>Penafian Google Ads:</strong> Halaman ini dioperasikan oleh penyedia jasa resmi BUANGPUING.MY.ID dan tunduk pada kebijakan transparansi periklanan Google.
                </span>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">1. Penafian Estimasi Biaya</h4>
                <p className="text-[11px]">
                  Perhitungan estimasi biaya melalui WhatsApp atau kalkulator merupakan perkiraan awal berdasarkan informasi yang disampaikan pelanggan. Biaya final disepakati bersama berdasarkan volume riil material dan kemudahan akses jalan kendaraan sebelum pekerjaan dimulai.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">2. Kontak &amp; Badan Usaha</h4>
                <p className="text-[11px]">
                  Situs ini dimiliki dan dikelola secara mandiri oleh tim operasional BUANGPUING.MY.ID yang berpusat melayani wilayah Jabodetabek.
                </p>
                <div className="mt-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px] space-y-0.5">
                  <div><strong>Brand:</strong> BUANGPUING.MY.ID</div>
                  <div><strong>WhatsApp Resmi:</strong> {SITE_CONFIG.phoneDisplay}</div>
                  <div><strong>Email Dukungan:</strong> {SITE_CONFIG.email}</div>
                  <div><strong>Wilayah Layanan:</strong> Jakarta, Bogor, Depok, Tangerang, Bekasi</div>
                  <div><strong>Jam Operasional:</strong> {SITE_CONFIG.operationalHours}</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#1D2939] text-xs mb-1">3. Kepatuhan Bebas Klaim Menyesatkan</h4>
                <p className="text-[11px]">
                  Seluruh testimoni, cakupan layanan, dan statistik yang ditampilkan adalah laporan aktivitas riil pelanggan jasa kami tanpa manipulasi buatan.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-slate-100 shrink-0 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">
            Terakhir diperbarui: 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#083B70] hover:bg-[#1261B5] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Mengerti &amp; Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
