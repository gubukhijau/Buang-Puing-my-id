/**
 * Site configuration and business data for BUANGPUING.MY.ID
 */

export interface ServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  shortDesc: string;
  category: 'puing' | 'lahan' | 'proyek';
  icon: string;
  badge?: string;
  details: string[];
  recommendedFleet: string;
  defaultMessage: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AreaItem {
  name: string;
  tag: string;
  coverage: string;
}

export const SITE_CONFIG = {
  domain: 'https://buangpuing.my.id',
  brandName: 'BUANGPUING.MY.ID',
  logoUrl: '/assets/aistudio/Logo_Buang_Puing_My_Id_copy_aba09cc7.png',
  tagline: 'Solusi Praktis Buang Puing & Sampah Proyek',
  description: 'Melayani jasa angkut puing bangunan, sampah renovasi, pembersihan lahan, hingga kebutuhan pekerjaan proyek.',
  phoneDisplay: '0856-0252-0987',
  phoneRaw: '6285602520987', // WhatsApp 085602520987 in international format
  email: 'info@buangpuing.my.id',
  operationalHours: 'Buka Setiap Hari (24 Jam Fast Response)',
  address: 'Melayani Seluruh Wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)',
  badges: ['Profesional', 'Cepat', 'Terpercaya'],
};

/**
 * Generate a valid WhatsApp direct message link
 */
export function createWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = customPhone || SITE_CONFIG.phoneRaw;
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'buang-puing-bangunan',
    slug: 'buang-puing',
    aliases: ['buang-puing-bangunan', 'jasa-buang-puing', 'jasa-buang-puing-bangunan'],
    name: 'Jasa Buang Puing Bangunan',
    shortDesc: 'Angkut dan buang puing sisa pembongkaran bangunan dengan praktis.',
    category: 'puing',
    icon: 'Truck',
    badge: 'Paling Populer',
    details: [
      'Puing pecahan tembok, semen, bata merah, hebel, cor beton',
      'Pecahan keramik, genteng, plesteran, dan asbes',
      'Tersedia tenaga kuli angkut (kenek) sampai bersih',
      'Pilihan armada: Pick Up, Truk Engkel, Dump Truck'
    ],
    recommendedFleet: 'Pick Up / Dump Truck Engkel',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Buang Puing Bangunan. Mohon informasi harga dan layanan.'
  },
  {
    id: 'buang-sampah-renovasi',
    slug: 'buang-sampah-renovasi',
    aliases: ['sampah-renovasi', 'jasa-buang-sampah-renovasi'],
    name: 'Jasa Buang Sampah Renovasi',
    shortDesc: 'Pembersihan dan pengangkutan sampah sisa renovasi rumah maupun gedung.',
    category: 'puing',
    icon: 'Trash2',
    badge: 'Cepat & Rapi',
    details: [
      'Kayu bekas plafon, kusen, triplek, partisi gypsum',
      'Kardus material, plastik semen, sisa pipa PVC, kaleng cat',
      'Pembersihan area kerja hingga siap ditempati',
      'Bisa dijadwalkan siang maupun malam hari'
    ],
    recommendedFleet: 'Truk Engkel 4 Roda / Pick Up Box',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Buang Sampah Renovasi. Mohon informasi harga dan layanan.'
  },
  {
    id: 'buang-sampah-pohon',
    slug: 'buang-sampah-pohon',
    aliases: ['sampah-pohon', 'jasa-buang-sampah-pohon'],
    name: 'Jasa Buang Sampah Pohon',
    shortDesc: 'Angkut ranting, batang pohon, daun, dan sampah hasil pemangkasan.',
    category: 'lahan',
    icon: 'Trees',
    details: [
      'Potongan batang pohon besar & sedang',
      'Ranting, dahan, dedaunan hasil tebang pohon',
      'Sampah taman, rumput liar, dan tanaman rambat',
      'Pembuangan ke TPA resmi / pengolahan kompos'
    ],
    recommendedFleet: 'Pick Up Bak Terbuka / Truk Engkel',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Buang Sampah Pohon. Mohon informasi harga dan layanan.'
  },
  {
    id: 'pengurugan-puing-tanah',
    slug: 'pengurugan-puing-tanah',
    aliases: ['pengurugan-tanah', 'urug-puing', 'jasa-pengurugan-puing-tanah'],
    name: 'Jasa Pengurugan Puing/Tanah',
    shortDesc: 'Melayani kebutuhan pengurugan tanah dan material puing untuk proyek.',
    category: 'proyek',
    icon: 'Layers',
    details: [
      'Urug puing padat untuk peninggian lantai dasar bangunan',
      'Pengurugan tanah merah subur / tanah liat urug',
      'Pengurugan makadam, sirtu, dan batu split pondasi',
      'Jasa pemadatan tanah / stamper mesin'
    ],
    recommendedFleet: 'Dump Truck Colt Diesel (7-8 m³)',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Pengurugan Puing/Tanah. Mohon informasi harga dan layanan.'
  },
  {
    id: 'pembersihan-lahan',
    slug: 'pembersihan-lahan',
    aliases: ['jasa-pembersihan-lahan'],
    name: 'Jasa Pembersihan Lahan',
    shortDesc: 'Membersihkan lahan kosong dari rumput, semak, dan material sisa bangunan.',
    category: 'lahan',
    icon: 'Sparkles',
    badge: 'Siap Bangun',
    details: [
      'Pembersihan ilalang, semak belukar, dan pohon liar',
      'Pembersihan sampah liar dan puing di kavling tanah',
      'Perataan permukaan tanah siap bangun',
      'Bisa manual kuli atau menggunakan excavator mini'
    ],
    recommendedFleet: 'Tim Borongan + Dump Truck Fleet',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Pembersihan Lahan. Mohon informasi harga dan layanan.'
  },
  {
    id: 'galian-tanah',
    slug: 'galian-tanah',
    aliases: ['jasa-galian-tanah'],
    name: 'Jasa Galian Tanah',
    shortDesc: 'Layanan pekerjaan galian tanah untuk kebutuhan konstruksi dan proyek.',
    category: 'proyek',
    icon: 'Pickaxe',
    details: [
      'Galian pondasi batu kali, cakar ayam, sloof',
      'Galian septic tank, saluran got / gorong-gorong, biofilter',
      'Galian basement, kolam renang, dan resapan air hujan',
      'Termasuk pengangkutan tanah galian keluar lokasi'
    ],
    recommendedFleet: 'Manual Kuli / Excavator Mini + Dump Truck',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Galian Tanah. Mohon informasi harga dan layanan.'
  },
  {
    id: 'sewa-alat-berat',
    slug: 'sewa-alat-berat',
    aliases: ['alat-berat'],
    name: 'Sewa Alat Berat',
    shortDesc: 'Solusi kebutuhan alat berat untuk pekerjaan konstruksi dan pembersihan lahan.',
    category: 'proyek',
    icon: 'Tractor',
    badge: 'Armada Siap',
    details: [
      'Excavator Mini PC 50, PC 75, PC 200',
      'Breaker hidrolik untuk bobok beton tebal',
      'Sewa Dump Truck harian / ritase / borongan',
      'Operator handal & bersertifikat berpengalaman'
    ],
    recommendedFleet: 'Excavator PC50/PC75 + Dump Truck',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Sewa Alat Berat. Mohon informasi harga dan layanan.'
  },
  {
    id: 'proyek-borongan',
    slug: 'proyek-borongan',
    aliases: ['jasa-proyek-borongan'],
    name: 'Jasa Proyek Borongan',
    shortDesc: 'Melayani berbagai pekerjaan proyek dengan sistem borongan sesuai kebutuhan.',
    category: 'proyek',
    icon: 'HardHat',
    details: [
      'Bongkar rumah tua, ruko, gedung, dinding sekat',
      'Pekerjaan pagar keliling kavling / seng proyek',
      'Pengerjaan cut and fill lahan tanah',
      'Sistem borongan transparan dengan SPK jelas'
    ],
    recommendedFleet: 'Tim Mandor & Pekerja Lengkap',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Proyek Borongan. Mohon informasi harga dan layanan.'
  },
  {
    id: 'renovasi-rumah',
    slug: 'renovasi-rumah',
    aliases: ['jasa-renovasi-rumah'],
    name: 'Jasa Renovasi Rumah',
    shortDesc: 'Layanan renovasi dan perbaikan rumah untuk berbagai kebutuhan bangunan.',
    category: 'proyek',
    icon: 'Home',
    details: [
      'Perbaikan atap bocor, ganti genteng, baja ringan',
      'Pengecatan interior & eksterior, pasang keramik / granit',
      'Renovasi kamar mandi, dapur, penambahan lantai 2',
      'Gratis survei lokasi dan estimasi Rencana Anggaran Biaya (RAB)'
    ],
    recommendedFleet: 'Tim Tukang Bangunan Berpengalaman',
    defaultMessage: 'Halo, saya ingin bertanya mengenai Jasa Renovasi Rumah. Mohon informasi harga dan layanan.'
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'profesional',
    title: 'Pelayanan Profesional',
    desc: 'Tim kuli & supir terlatih, ramah, dan berpengalaman menangani berbagai jenis puing proyek.',
    icon: 'ShieldCheck'
  },
  {
    id: 'cepat',
    title: 'Proses Cepat dan Praktis',
    desc: 'Respon cepat melalui WhatsApp, armada langsung meluncur ke lokasi tanpa ribet.',
    icon: 'Zap'
  },
  {
    id: 'berbagai-layanan',
    title: 'Berbagai Pilihan Layanan',
    desc: 'Solusi lengkap 1 pintu dari angkut puing, tebang pohon, urug tanah hingga alat berat.',
    icon: 'CheckCircle2'
  },
  {
    id: 'siap-proyek',
    title: 'Siap Melayani Kebutuhan Proyek',
    desc: 'Menerima skala kecil rumah tinggal hingga proyek besar gedung dan kontraktor.',
    icon: 'Building2'
  }
];

export const SERVICE_AREAS: AreaItem[] = [
  { name: 'Jakarta', tag: 'Pusat, Barat, Selatan, Timur, Utara', coverage: 'Semua Kecamatan' },
  { name: 'Depok', tag: 'Margonda, Cimanggis, Sawangan, Cinere', coverage: 'Semua Kecamatan' },
  { name: 'Tangerang', tag: 'Kota Tangerang, Tangsel, BSD, Bintaro', coverage: 'Semua Kecamatan' },
  { name: 'Bekasi', tag: 'Bekasi Barat, Timur, Tambun, Cikarang', coverage: 'Semua Kecamatan' },
  { name: 'Bogor', tag: 'Kota Bogor, Cibinong, Sentul, Bojonggede', coverage: 'Semua Kecamatan' },
  { name: 'Dan Sekitarnya', tag: 'Jabodetabek & Sekitarnya', coverage: 'Siap Jemput Lokasi' }
];

export const FLEET_OPTIONS = [
  {
    id: 'pickup',
    name: 'Mobil Pick Up',
    capacity: 'Kapasitas ±1.5 - 2 m³ (30-40 karung)',
    desc: 'Cocok untuk sisa renovasi kamar mandi, ruko kecil, jalan sempit/gang perumahan.',
    tag: 'Jalan Sempit / Gang'
  },
  {
    id: 'engkel',
    name: 'Truk Engkel (4 Roda)',
    capacity: 'Kapasitas ±3.5 - 4 m³ (80-100 karung)',
    desc: 'Pilihan favorit renovasi rumah 1 lantai, angkut sampah kayu, dan puing campuran.',
    tag: 'Favorit Rumah Tinggal'
  },
  {
    id: 'colt-diesel',
    name: 'Dump Truck Colt Diesel (6 Roda)',
    capacity: 'Kapasitas ±7 - 8 m³ (Dump Hidrolik)',
    desc: 'Paling efisien untuk pembongkaran gedung, galian tanah, dan urugan proyek besar.',
    tag: 'Proyek Besar & Cepat'
  }
];
