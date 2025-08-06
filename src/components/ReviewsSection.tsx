import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      rating: 5,
      comment: "Dịch vụ tuyệt vời! Hỗ trợ rất nhiệt tình và hiệu quả.",
      date: "2024-01-15"
    },
    {
      id: 2, 
      name: "Trần Thị B",
      rating: 4,
      comment: "Rất hài lòng với chất lượng dịch vụ. Sẽ tiếp tục sử dụng.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Lê Văn C", 
      rating: 5,
      comment: "Hỗ trợ học tập rất tốt, giúp mình đạt điểm cao trong kỳ thi.",
      date: "2024-01-05"
    }
  ]);
  const { toast } = useToast();

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const comment = formData.get("comment") as string;

    if (!name || !comment || rating === 0) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin và chọn số sao đánh giá.",
        variant: "destructive"
      });
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    (e.target as HTMLFormElement).reset();
    
    toast({
      title: "Thành công!",
      description: "Cảm ơn bạn đã đánh giá dịch vụ của chúng mình.",
    });
  };

  const renderStars = (currentRating: number, isInteractive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer transition-colors ${
          i < (isInteractive ? (hoverRating || rating) : currentRating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
        onClick={isInteractive ? () => setRating(i + 1) : undefined}
        onMouseEnter={isInteractive ? () => setHoverRating(i + 1) : undefined}
        onMouseLeave={isInteractive ? () => setHoverRating(0) : undefined}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Đánh giá từ khách hàng
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chia sẻ trải nghiệm của bạn với dịch vụ của chúng mình
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <Card className="bg-gradient-card border-0">
            <CardHeader>
              <CardTitle>Để lại đánh giá</CardTitle>
              <CardDescription>
                Chia sẻ trải nghiệm của bạn để giúp chúng mình cải thiện dịch vụ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Nhập họ và tên của bạn" 
                    required 
                  />
                </div>

                <div>
                  <Label>Đánh giá sao</Label>
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(rating, true)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({rating > 0 ? `${rating}/5 sao` : "Chưa đánh giá"})
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment">Nhận xét</Label>
                  <Textarea 
                    id="comment" 
                    name="comment" 
                    placeholder="Chia sẻ trải nghiệm của bạn..." 
                    rows={4}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full">
                  Gửi đánh giá
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Đánh giá gần đây</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-background/50">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.name}</h4>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(review.rating)}
                          <span className="text-sm text-muted-foreground ml-1">
                            ({review.rating}/5)
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;