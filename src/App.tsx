import { BackgroundLayers } from '@/components/BackgroundLayers';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Levels } from '@/components/Levels';
import { Invest } from '@/components/Invest';
import { Security } from '@/components/Security';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayers />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Levels />
          <Invest />
          <Security />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
