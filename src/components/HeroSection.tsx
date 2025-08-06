import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";
import avatarImage from "@/assets/avatar-tuan-quan.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
                <img 
                  src={avatarImage} 
                  alt="Tuấn và Quân Avatar" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Tuấn & Quân
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Thuần Lại Lập Trình
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">
                🚀 Cộng đồng Tự học Lập trình 1000+ thành viên
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Chia sẻ kiến thức lập trình từ cơ bản đến nâng cao. 
                Tham gia miễn phí, nhận tài liệu độc quyền & hỗ trợ học tập 1-1. Tham gia sau khi đăng ký kênh YouTube!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                className="shadow-strong"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🎯 Đặt dịch vụ ngay
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
              >
                🚀 Đăng ký kênh & Tham gia ngay
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Thành viên cộng đồng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Tỷ lệ hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Hỗ trợ online</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Sinh viên học tập cùng Tuấn & Quân"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;