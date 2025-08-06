import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, BookOpen, MessageCircle, Phone, Star } from "lucide-react";
import avatarImage from "@/assets/avatar-tuan-quan.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Trang chủ", href: "#" },
    { icon: BookOpen, label: "Khóa học", href: "#services" },
    { icon: Star, label: "Đánh giá", href: "#testimonials" },
    { icon: MessageCircle, label: "Đặt dịch vụ", href: "#booking-form" },
    { icon: Phone, label: "Liên hệ", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={avatarImage} 
              alt="Tuấn và Quân" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tuấn & Quân
              </h1>
              <p className="text-xs text-muted-foreground">Thuần Lại Lập Trình</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 story-link"
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </a>
              );
            })}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
            >
              🚀 Đăng ký kênh & Tham gia ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="p-4 space-y-4">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                );
              })}
              <Button 
                variant="hero" 
                className="w-full mt-4"
                onClick={() => {
                  window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank');
                  setIsOpen(false);
                }}
              >
                🚀 Đăng ký kênh & Tham gia ngay
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;