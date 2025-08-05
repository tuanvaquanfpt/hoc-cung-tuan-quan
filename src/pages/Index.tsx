import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SubjectFilter from "@/components/SubjectFilter";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SubjectFilter />
      <TestimonialsSection />
      <BookingForm />
      <ContactSection />
      <FloatingChat />
    </div>
  );
};

export default Index;
