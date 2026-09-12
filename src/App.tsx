import { useEffect } from 'react';
import { trackViewContent } from '@/config';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DeliverablePreview } from '@/components/DeliverablePreview';
import { PainSection } from '@/components/PainSection';
import { Transformation } from '@/components/Transformation';
import { Recipes } from '@/components/Recipes';
import { WhatYouLearn } from '@/components/WhatYouLearn';
import { CompleteBenefits } from '@/components/CompleteBenefits';
import { OfferComparison } from '@/components/OfferComparison';
import { Testimonials } from '@/components/Testimonials';
import { Guarantee } from '@/components/Guarantee';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { Footer } from '@/components/Footer';

function App() {
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <DeliverablePreview />
        <Testimonials />
        <PainSection />
        <Transformation />
        <Recipes />
        <WhatYouLearn />
        <CompleteBenefits />
        <OfferComparison />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
