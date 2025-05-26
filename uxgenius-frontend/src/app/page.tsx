import HeroSection from '@/components/landing/HeroSection';
import ValueProps from '@/components/landing/ValueProps';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import Solutions from '@/components/landing/Solutions';
import ImpactfulStats from '@/components/landing/ImpactfulStats';
import Pricing from '@/components/landing/Pricing';
import FreeTrial from '@/components/landing/FreeTrial';
import BadUXAnalogies from '@/components/landing/BadUXAnalogies';
import FAQ from '@/components/common/FAQs';
import FreeAuditCTA from '@/components/landing/FreeAuditCTA';
import NewsletterSubscription from '@/components/common/NewsletterSubscription';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Navbar';

export default function Home() {
  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <Header />

      <HeroSection />
      
      <HowItWorks />

      <Features />

      <Solutions />

      <ImpactfulStats />

      <Pricing />

      <FreeTrial />

      <BadUXAnalogies />

      <FAQ />

      <FreeAuditCTA />

      <NewsletterSubscription />

      <Footer />
    </div>
  );
}