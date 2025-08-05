import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-strong border animate-fade-in">
          <div className="bg-gradient-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Tuấn & Quân Support</h4>
                  <p className="text-xs opacity-90">🟢 Online - Phản hồi ngay</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-6 w-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm">
                  👋 Chào bạn! Mình là support team của Tuấn & Quân.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm">
                  Bạn cần hỗ trợ gì về học tập hôm nay? 😊
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                💡 Tư vấn chọn dịch vụ phù hợp
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                📚 Hỏi về tài liệu môn học
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                ⚡ Đăng ký khóa ôn cấp tốc
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                🎯 Hỗ trợ project/bài tập
              </Button>
            </div>

            <div className="border-t pt-3">
              <p className="text-xs text-muted-foreground mb-2">Hoặc liên hệ trực tiếp:</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1 text-xs">
                  📱 Zalo
                </Button>
                <Button variant="secondary" size="sm" className="flex-1 text-xs">
                  💬 Messenger
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        variant="hero"
        size="icon"
        className={`h-14 w-14 rounded-full shadow-strong animate-float ${isOpen ? 'scale-90' : ''} transition-transform duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-ping">
          1
        </div>
      )}
    </div>
  );
};

export default FloatingChat;