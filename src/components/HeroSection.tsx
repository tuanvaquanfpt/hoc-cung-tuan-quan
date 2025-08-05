import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Tuấn & Quân
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  Người đồng hành học tập đáng tin cậy
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Hỗ trợ sinh viên đại học trong học tập, ôn thi và kỹ năng mềm – từ A đến Z.
                Chúng mình luôn sẵn sàng đồng hành cùng bạn trên con đường học tập!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="shadow-strong">
                🎯 Đặt dịch vụ ngay
              </Button>
              <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary hover:text-white">
                📞 Tư vấn miễn phí
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Sinh viên đã hỗ trợ</div>
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