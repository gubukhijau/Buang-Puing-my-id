/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ServicesList } from './components/ServicesList';
import { AboutUs } from './components/AboutUs';
import { BenefitsSection } from './components/BenefitsSection';
import { FleetSection } from './components/FleetSection';
import { AreaSection } from './components/AreaSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal, LegalTabType } from './components/LegalModal';
import { ServiceItem } from './config/siteConfig';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabType | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#F4F8FC] py-0 md:py-8 flex flex-col items-center justify-start antialiased text-[#1D2939]">
      {/* Desktop Device Framing Container (Strict Max-Width 430px) */}
      <main className="w-full max-w-[430px] min-h-screen bg-white shadow-2xl relative flex flex-col md:rounded-[36px] md:border md:border-slate-300/80 md:overflow-hidden md:my-auto">
        {/* Subtle top speaker notch on desktop preview */}
        <div className="hidden md:flex items-center justify-center pt-2 pb-1 bg-[#083B70] w-full">
          <div className="w-16 h-1 rounded-full bg-slate-600/50" />
        </div>

        {/* 1. Profile / Header */}
        <Header />

        {/* 2. Tentang Kami Section */}
        <AboutUs />

        {/* 3. Section Layanan (9 Vertical Cards) */}
        <ServicesList onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Section Keunggulan (Kenapa Memilih Kami) */}
        <BenefitsSection />

        {/* 5. Cara Pesan & Pilihan Armada Standby */}
        <FleetSection />

        {/* 6. Section Area Layanan */}
        <AreaSection />

        {/* 7. Section Call to Action */}
        <CtaSection />

        {/* 8. Footer */}
        <Footer onOpenLegal={(tab) => setLegalModalTab(tab)} />

        {/* 9. Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* 10. Service Detail Bottom Sheet Modal */}
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

        {/* 11. Google Ads Compliance Legal Modal (Privacy, Terms, Disclaimer) */}
        <LegalModal
          isOpen={legalModalTab !== null}
          initialTab={legalModalTab || 'privacy'}
          onClose={() => setLegalModalTab(null)}
        />
      </main>
    </div>
  );
}
