import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Clock,
  Users,
  Shield
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Messenger",
      description: "Chat trực tiếp với team",
      value: "m.me/tuanquan.study",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MessageCircle,
      title: "Zalo",
      description: "Liên hệ qua Zalo",
      value: "0123.456.789",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Gmail",
      description: "Gửi email cho chúng mình",
      value: "contact@tuanquan.study",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Phone,
      title: "Hotline",
      description: "Gọi điện tư vấn miễn phí",
      value: "0123.456.789",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Hỗ trợ 24/7",
      description: "Luôn sẵn sàng hỗ trợ bạn"
    },
    {
      icon: Users,
      title: "Team chuyên nghiệp",
      description: "Đội ngũ giàu kinh nghiệm"
    },
    {
      icon: Shield,
      title: "Đảm bảo chất lượng",
      description: "Cam kết kết quả tốt nhất"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Liên hệ & Hỗ trợ
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ với chúng mình qua các kênh dưới đây!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Kênh liên hệ</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-gradient-card"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{method.title}</h4>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-center bg-muted/50 rounded-md py-2">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Tại sao chọn chúng mình?</h4>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">{feature.title}</h5>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-medium bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl">Gửi yêu cầu hỗ trợ</CardTitle>
              <p className="text-sm text-muted-foreground">
                Điền thông tin bên dưới, chúng mình sẽ liên hệ trong vòng 30 phút!
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Họ và tên *</label>
                  <Input placeholder="Nhập họ tên của bạn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Số điện thoại *</label>
                  <Input placeholder="Nhập số điện thoại" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Nhập email (tùy chọn)" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Dịch vụ cần hỗ trợ *</label>
                <select className="w-full p-3 border rounded-md text-sm">
                  <option>Chọn dịch vụ</option>
                  <option>Hỗ trợ chứng chỉ Coursera</option>
                  <option>Tài liệu & Source Code</option>
                  <option>Khóa học cấp tốc</option>
                  <option>Media & Trình bày</option>
                  <option>Hỗ trợ Project/Lab</option>
                  <option>Tư vấn chung</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mô tả chi tiết</label>
                <Textarea 
                  placeholder="Mô tả chi tiết về yêu cầu của bạn..." 
                  rows={4}
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Gửi yêu cầu ngay
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Thông tin bắt buộc. Chúng mình cam kết bảo mật thông tin cá nhân của bạn.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;