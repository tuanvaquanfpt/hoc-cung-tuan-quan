import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SubjectFilter from "@/components/SubjectFilter";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <SubjectFilter />
      <TestimonialsSection />
      <ReviewsSection />
      <BookingForm />
      <ContactSection />
      <FloatingChat />
      </div>
    </div>
  );
};

export default Index;
