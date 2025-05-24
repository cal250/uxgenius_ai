import Navbar from './components/common/Navbar';
import Hero from './components/landing/HeroSection';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import Solutions from './components/landing/Solutions';
import ValueProps from './components/landing/ValueProps';
import Pricing from './components/landing/Pricing';
import FreeAuditCTA from './components/landing/FreeAuditCTA';
import FAQs from './components/landing/FAQs';
import Footer from './components/common/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Solutions />
      <ValueProps />
      <Pricing />
      <FreeAuditCTA />
      <FAQs />
      <Footer />
    </>
  );
}
