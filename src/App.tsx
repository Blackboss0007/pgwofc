import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogosAndHowItWorks } from './components/LogosAndHowItWorks';
import { AthenaSection } from './components/AthenaSection';
import { DashboardPreview } from './components/DashboardPreview';
import { GalaxyMap } from './components/GalaxyMap';
import { GamificationAndSocial } from './components/GamificationAndSocial';
import { PricingFaqCta } from './components/PricingFaqCta';

export default function App() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <LogosAndHowItWorks />
      <AthenaSection />
      <DashboardPreview />
      <GalaxyMap />
      <GamificationAndSocial />
      <PricingFaqCta />
    </div>
  );
}
