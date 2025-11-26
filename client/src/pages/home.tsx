import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CouplesSection from "@/components/CouplesSection";
import QuoteSection from "@/components/QuoteSection";
import FeaturesSection from "@/components/FeaturesSection";
import BookSeminarSection from "@/components/BookSeminarSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CouplesSection />
        <QuoteSection />
        <FeaturesSection />
        <BookSeminarSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
