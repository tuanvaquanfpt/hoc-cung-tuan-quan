import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Minh Anh",
      subject: "PRO192",
      avatar: "MA",
      rating: 5,
      feedback: "Mình học FE mà không biết bắt đầu từ đâu. Nhờ dịch vụ của Tuấn & Quân mà pass luôn kỳ này! Anh Tuấn và anh Quân hỗ trợ rất tận tình, giải thích dễ hiểu.",
      service: "Hỗ trợ Project Java"
    },
    {
      id: 2,
      name: "Thanh Tùng",
      subject: "CSD201",
      avatar: "TT",
      rating: 5,
      feedback: "Khóa ôn cấp tốc CSD201 rất chất lượng! Chỉ 3 buổi mà mình hiểu được hết các thuật toán khó. Đề thi dự đoán chuẩn 100%!",
      service: "Khóa học cấp tốc"
    },
    {
      id: 3,
      name: "Hoàng Linh",
      subject: "DBI202",
      avatar: "HL",
      rating: 5,
      feedback: "Tài liệu database rất đầy đủ, có cả code mẫu và giải thích chi tiết. Team support 24/7 nên hỏi bài lúc nào cũng được trả lời nhanh.",
      service: "Tài liệu & Source Code"
    },
    {
      id: 4,
      name: "Văn Nam",
      subject: "SWP391",
      avatar: "VN",
      rating: 5,
      feedback: "Dịch vụ edit video và làm slide thuyết trình cực kỳ chuyên nghiệp. Presentation cuối kỳ của nhóm mình được điểm cao nhất lớp!",
      service: "Media & Trình bày"
    },
    {
      id: 5,
      name: "Thu Hà",
      subject: "Coursera",
      avatar: "TH",
      rating: 5,
      feedback: "Được hướng dẫn làm các course Coursera rất chi tiết. Mình đã có 5 chứng chỉ Google và IBM nhờ sự hỗ trợ của team!",
      service: "Chứng chỉ Coursera"
    },
    {
      id: 6,
      name: "Đức Minh",
      subject: "PRJ301",
      avatar: "DM",
      rating: 5,
      feedback: "Lab Java Web được hỗ trợ từ A-Z, từ setup môi trường đến deploy project. Thầy khen code sạch và logic tốt!",
      service: "Hỗ trợ Lab"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Câu chuyện thành công
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hàng trăm sinh viên đã tin tưởng và đạt được kết quả tốt cùng chúng mình
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.subject}</p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Sinh viên đã hỗ trợ</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">150+</div>
              <div className="text-sm text-muted-foreground">Project hoàn thành</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Tỷ lệ đỗ môn</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Hỗ trợ liên tục</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;