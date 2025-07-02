
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import MenuSection from '@/components/MenuSection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParkingPopup from '@/components/ParkingPopup';
import { EditableProvider } from '@/contexts/EditableContext';

const Index = () => {
  return (
    <EditableProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Gallery />
          <MenuSection />
          <About />
          <Contact />
        </main>
        <Footer />
        <ParkingPopup />
      </div>
    </EditableProvider>
  );
};

export default Index;
