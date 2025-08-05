import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Send,
  CreditCard,
  QrCode,
  Check,
  Copy
} from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [bookingData, setBookingData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    serviceType: "",
    serviceDetails: "",
    notes: ""
  });

  const services = [
    { value: "rush-coursera", label: "Rush Coursera (120-150k)", price: "120-150k" },
    { value: "tai-lieu", label: "Tài liệu & Source Code (50-70k)", price: "50-70k" },
    { value: "khoa-hoc", label: "Khóa học cấp tốc online (100k)", price: "100k" },
    { value: "support-luk", label: "Support Luk (10-90k)", price: "10-90k" },
    { value: "lab-project", label: "Hỗ trợ Lab & Project (100-500k)", price: "100-500k" }
  ];

  const supportLukOptions = [
    { value: "lam-project", label: "Làm project (Liên hệ)" },
    { value: "check2-full", label: "Check 2 - Full combo (90k)" },
    { value: "check2-script", label: "Check 2 - Chỉ kịch bản (40k)" },
    { value: "check2-edit", label: "Check 2 - Chỉ edit (70k)" },
    { value: "check2-transcript", label: "Check 2 - Làm transcript (10k)" },
    { value: "debate", label: "Debate (Liên hệ)" }
  ];

  const bankInfo = {
    bankName: "BIDV",
    accountNumber: "8816861222",
    accountName: "CAO THANH TUAN",
    qrCode: "/lovable-uploads/6dd5aa62-ddcd-45d0-b569-4c355915595f.png"
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedService = services.find(s => s.value === bookingData.serviceType);
      const { error } = await supabase
        .from('service_bookings')
        .insert({
          customer_name: bookingData.customerName,
          customer_email: bookingData.customerEmail,
          customer_phone: bookingData.customerPhone,
          service_type: bookingData.serviceType,
          service_details: bookingData.serviceDetails,
          price_range: selectedService?.price || "",
          notes: bookingData.notes
        });

      if (error) throw error;

      setShowPaymentInfo(true);
      toast({
        title: "Đặt dịch vụ thành công!",
        description: "Thông tin chuyển khoản đã được hiển thị. Vui lòng chuyển khoản để hoàn tất đặt dịch vụ.",
      });
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Đã sao chép!",
      description: "Thông tin đã được sao chép vào clipboard."
    });
  };

  if (showPaymentInfo) {
    return (
      <section id="booking-form" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-0 shadow-xl bg-gradient-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Đặt dịch vụ thành công!</CardTitle>
              <p className="text-muted-foreground">
                Vui lòng chuyển khoản theo thông tin bên dưới để hoàn tất đặt dịch vụ
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code */}
              <div className="text-center">
                <img 
                  src={bankInfo.qrCode} 
                  alt="QR Code chuyển khoản" 
                  className="w-64 h-64 mx-auto rounded-lg border"
                />
              </div>

              {/* Bank Information */}
              <div className="space-y-4 bg-muted/20 rounded-lg p-4">
                <h3 className="font-semibold text-center">Thông tin chuyển khoản</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ngân hàng:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankInfo.bankName}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(bankInfo.bankName)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Số tài khoản:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankInfo.accountNumber}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(bankInfo.accountNumber)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Chủ tài khoản:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{bankInfo.accountName}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(bankInfo.accountName)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Lưu ý:</strong> Sau khi chuyển khoản, vui lòng chụp ảnh bill và gửi cho chúng mình qua các kênh liên hệ để được hỗ trợ nhanh nhất!
                </p>
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowPaymentInfo(false)}
              >
                Đặt dịch vụ khác
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking-form" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Đặt dịch vụ
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Điền thông tin để đặt dịch vụ. Chúng mình sẽ liên hệ xác nhận trong vòng 30 phút!
          </p>
        </div>

        <Card className="border-0 shadow-xl bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Thông tin đặt dịch vụ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Thông tin khách hàng</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input 
                      id="name"
                      placeholder="Nhập họ tên của bạn"
                      value={bookingData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input 
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      value={bookingData.customerPhone}
                      onChange={(e) => handleInputChange("customerPhone", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Nhập email (tùy chọn)"
                    value={bookingData.customerEmail}
                    onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                  />
                </div>
              </div>

              {/* Service Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Thông tin dịch vụ</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Chọn dịch vụ *</Label>
                  <Select 
                    value={bookingData.serviceType} 
                    onValueChange={(value) => handleInputChange("serviceType", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn dịch vụ cần hỗ trợ" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Support Luk sub-options */}
                {bookingData.serviceType === "support-luk" && (
                  <div className="space-y-2">
                    <Label htmlFor="subService">Chi tiết Support Luk</Label>
                    <Select 
                      value={bookingData.serviceDetails} 
                      onValueChange={(value) => handleInputChange("serviceDetails", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại Support Luk" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportLukOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="notes">Mô tả chi tiết yêu cầu</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Mô tả chi tiết về yêu cầu của bạn, môn học cụ thể, deadline..."
                    rows={4}
                    value={bookingData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Đang gửi..." : "Xác nhận đặt dịch vụ"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Thông tin bắt buộc. Sau khi xác nhận, bạn sẽ nhận được thông tin chuyển khoản.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;