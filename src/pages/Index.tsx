import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="gold-line" />
      <AboutSection />
      <div className="gold-line" />
      <SkillsSection />
      <div className="gold-line" />
      <ServicesSection />
      <div className="gold-line" />
      <PortfolioSection />
      <div className="gold-line" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
