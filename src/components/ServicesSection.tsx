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
      title: "Hỗ trợ chứng chỉ Coursera",
      description: "Hướng dẫn chọn khóa học, theo dõi tiến độ, hỗ trợ làm bài và lấy chứng chỉ nhanh chóng.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Tư vấn Coursera miễn phí",
      features: ["Tư vấn khóa học phù hợp", "Hỗ trợ làm bài tập", "Đảm bảo có chứng chỉ"]
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Tài liệu & Source Code",
      description: "Cung cấp đề thi cũ, bài giải mẫu, tài liệu PDF, và mã nguồn các môn lập trình, cơ sở dữ liệu, mạng,...",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Xem tài liệu ngay",
      features: ["Đề thi các năm trước", "Source code mẫu", "Tài liệu chất lượng cao"]
    },
    {
      id: 3,
      icon: Zap,
      title: "Khóa học cấp tốc online",
      description: "Các khóa học rút gọn (2–5 buổi) giúp ôn thi hiệu quả, luyện đề và hiểu bài nhanh.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Đăng ký ôn cấp tốc",
      features: ["Lộ trình ôn tập tối ưu", "Luyện đề thi thực tế", "Giải đáp thắc mắc 24/7"]
    },
    {
      id: 4,
      icon: Video,
      title: "Media & Trình bày",
      description: "Dịch vụ toàn diện về media: edit video, viết kịch bản, thiết kế slide chuyên nghiệp.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      cta: "Liên hệ team Media",
      features: ["Edit video chuyên nghiệp", "Viết kịch bản sáng tạo", "Thiết kế slide đẹp mắt"],
      subServices: [
        { icon: Video, name: "Edit video" },
        { icon: FileText, name: "Viết kịch bản" },
        { icon: Presentation, name: "Thiết kế slide" }
      ]
    },
    {
      id: 5,
      icon: Code,
      title: "Hỗ trợ Project, Lab, bài tập lớn",
      description: "Hỗ trợ làm project, viết báo cáo, hoàn thiện bài lab theo môn học cụ thể (Java, Python, Web, DB,...).",
      color: "text-primary",
      bgColor: "bg-primary/10",
      cta: "Yêu cầu hỗ trợ",
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
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Sub-services for Media */}
                  {service.subServices && (
                    <div className="flex justify-center gap-4 py-2">
                      {service.subServices.map((sub, idx) => {
                        const SubIcon = sub.icon;
                        return (
                          <div key={idx} className="flex flex-col items-center text-xs text-muted-foreground">
                            <SubIcon className="w-5 h-5 mb-1" />
                            <span>{sub.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Button 
                    variant={service.id % 2 === 1 ? "default" : "secondary"} 
                    className="w-full"
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