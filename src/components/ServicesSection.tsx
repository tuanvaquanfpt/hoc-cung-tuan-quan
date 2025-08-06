import { useState } from "react";
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
  Presentation,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Rush Coursera",
      description: "Hướng dẫn chọn khóa học, theo dõi tiến độ, hỗ trợ làm bài và lấy chứng chỉ nhanh chóng.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "50-130k",
      features: ["Hỗ trợ 4 môn học cụ thể", "Đảm bảo có chứng chỉ", "Tư vấn khóa học phù hợp"],
      subServices: [
        { icon: Code, name: "WED201", price: "130k" },
        { icon: Code, name: "SSL101", price: "130k" },
        { icon: Code, name: "CSI106", price: "50k" },
        { icon: Code, name: "OBE102", price: "70k" }
      ]
    },
    {
      id: 2,
      icon: BookOpen,
      title: "SRC ôn FE",
      description: "Cung cấp đề thi cũ, bài giải mẫu, tài liệu PDF, và mã nguồn tất cả các môn học.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Đặt dịch vụ",
      price: "60k",
      features: ["Tất cả các môn học", "Đề thi các năm trước", "Source code đầy đủ"]
    },
    {
      id: 3,
      icon: Zap,
      title: "Khóa học cấp tốc online",
      description: "Các khóa học rút gọn (2–5 buổi) giúp ôn thi hiệu quả, đều được tặng tài liệu.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "120k/môn",
      features: ["MAD101, MAE101, MAS291", "PRO192, PRF192, WED201", "Tặng kèm tài liệu đầy đủ"],
      subServices: [
        { icon: Code, name: "MAD101", price: "120k" },
        { icon: Code, name: "MAE101", price: "120k" },
        { icon: Code, name: "MAS291", price: "120k" },
        { icon: Code, name: "PRO192", price: "120k" },
        { icon: Code, name: "PRF192", price: "120k" },
        { icon: Code, name: "WED201", price: "120k" }
      ]
    },
    {
      id: 4,
      icon: Video,
      title: "Support Luk - Làm Project",
      description: "Hỗ trợ làm project các môn học theo yêu cầu cụ thể.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Đặt dịch vụ",
      price: "Liên hệ",
      features: ["Hỗ trợ tất cả môn học", "Code chất lượng cao", "Hỗ trợ 1-1"],
      isProject: true
    },
    {
      id: 5,
      icon: Edit3,
      title: "Support Luk - Check 2",
      description: "Dịch vụ Check 2 với 4 gói lựa chọn phù hợp với nhu cầu.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đặt dịch vụ",
      price: "10-90k",
      features: ["4 gói lựa chọn", "Chất lượng đảm bảo", "Giao hàng đúng hạn"],
      subServices: [
        { icon: FileText, name: "Full combo", price: "90k" },
        { icon: FileText, name: "Chỉ kịch bản", price: "40k" },
        { icon: FileText, name: "Chỉ edit", price: "70k" },
        { icon: FileText, name: "Làm transcript", price: "10k" }
      ]
    },
    {
      id: 6,
      icon: Presentation,
      title: "Support Luk - Debate",
      description: "Hỗ trợ chuẩn bị và thực hiện các buổi debate một cách chuyên nghiệp.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Đặt dịch vụ",
      price: "Liên hệ",
      features: ["Chuẩn bị nội dung", "Hướng dẫn kỹ thuật", "Hỗ trợ thực hành"],
      isProject: true
    },
    {
      id: 7,
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

                  {/* Expandable Sub-services */}
                  {service.subServices && (
                    <div className="border-t pt-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full justify-between mb-2"
                        onClick={() => toggleService(service.id)}
                      >
                        <span className="text-sm font-medium">Xem chi tiết các môn</span>
                        {expandedService === service.id ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </Button>
                      
                      {expandedService === service.id && (
                        <div className="space-y-3 animate-fade-in">
                          {service.subServices.map((sub, idx) => {
                            const SubIcon = sub.icon;
                            return (
                              <div key={idx} className="text-xs bg-muted/30 p-3 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <SubIcon className="w-4 h-4 text-primary" />
                                  <span className="font-medium">{sub.name}</span>
                                  {sub.price && <span className="text-primary font-bold ml-auto">{sub.price}</span>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
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