import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Zap, 
  Video, 
  Code,
  FileText,
  Edit3,
  Presentation
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Rush Coursera",
      description: "Hướng dẫn chọn khóa học, theo dõi tiến độ, hỗ trợ làm bài và lấy chứng chỉ nhanh chóng.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "120-150k",
      features: ["Tư vấn khóa học phù hợp", "Hỗ trợ làm bài tập", "Đảm bảo có chứng chỉ"]
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Tài liệu & Source Code",
      description: "Cung cấp đề thi cũ, bài giải mẫu, tài liệu PDF, và mã nguồn các môn lập trình, cơ sở dữ liệu, mạng,...",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Đặt dịch vụ",
      price: "50-70k",
      features: ["Đề thi các năm trước", "Source code mẫu", "Tài liệu chất lượng cao"]
    },
    {
      id: 3,
      icon: Zap,
      title: "Khóa học cấp tốc online",
      description: "Các khóa học rút gọn (2–5 buổi) giúp ôn thi hiệu quả, luyện đề và hiểu bài nhanh.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "100k",
      features: ["Lộ trình ôn tập tối ưu", "Luyện đề thi thực tế", "Giải đáp thắc mắc 24/7"]
    },
    {
      id: 4,
      icon: Video,
      title: "Support Luk",
      description: "Dịch vụ toàn diện: làm project, check 2, debate với nhiều gói lựa chọn.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Đặt dịch vụ",
      price: "10-90k",
      features: ["Làm project", "Check 2 (4 gói)", "Dịch vụ debate"],
      subServices: [
        { icon: Code, name: "Làm project", price: "Liên hệ" },
        { icon: FileText, name: "Check 2", 
          options: [
            { name: "Full combo", price: "90k" },
            { name: "Chỉ kịch bản", price: "40k" },
            { name: "Chỉ edit", price: "70k" },
            { name: "Làm transcript", price: "10k" }
          ]
        },
        { icon: Presentation, name: "Debate", price: "Liên hệ" }
      ]
    },
    {
      id: 5,
      icon: Code,
      title: "Hỗ trợ Lab & Project",
      description: "Hỗ trợ làm project, viết báo cáo, hoàn thiện bài lab theo môn học cụ thể (Java, Python, Web, DB,...).",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "100-500k",
      features: ["Hỗ trợ code project", "Viết báo cáo chi tiết", "Debug và tối ưu hóa"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dịch vụ hỗ trợ học tập
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng mình cung cấp đầy đủ các dịch vụ để hỗ trợ bạn thành công trong học tập
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="text-center bg-accent/20 rounded-lg p-3">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Sub-services with pricing */}
                  {service.subServices && (
                    <div className="space-y-3 border-t pt-3">
                      {service.subServices.map((sub, idx) => {
                        const SubIcon = sub.icon;
                        return (
                          <div key={idx} className="text-xs">
                            <div className="flex items-center gap-2 mb-1">
                              <SubIcon className="w-4 h-4" />
                              <span className="font-medium">{sub.name}</span>
                              {sub.price && <span className="text-primary font-bold ml-auto">{sub.price}</span>}
                            </div>
                            {sub.options && (
                              <div className="ml-6 space-y-1">
                                {sub.options.map((option, optIdx) => (
                                  <div key={optIdx} className="flex justify-between text-muted-foreground">
                                    <span>• {option.name}</span>
                                    <span className="text-primary font-medium">{option.price}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Button 
                    variant={service.id % 2 === 1 ? "default" : "secondary"} 
                    className="w-full"
                    onClick={() => {
                      // Open booking form
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;