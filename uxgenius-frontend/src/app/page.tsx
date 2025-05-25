import Header from 'app/components/common/Navbar';
import HeroSection from '@/app/components/landing/HeroSection';
import Features from '@/app/components/landing/Features';
import Solutions from '@/app/components/landing/Solutions';
import Pricing from '@/app/components/landing/Pricing';
import ImpactStats from '@/app/components/landing/ImpactStats';
import FAQ from '@/app/components/landing/FAQs';
import FreeTrial from '@/app/components/landing/FreeTrial';
import Footer from '@/app/components/common/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <Solutions />
      <ImpactStats />
      <Pricing />
      <FAQ />
      <FreeTrial />
      <Footer />
    </div>
  );
}