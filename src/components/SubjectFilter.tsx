import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const SubjectFilter = () => {
  const [selectedSubject, setSelectedSubject] = useState("all");

  const subjects = [
    { id: "all", name: "Tất cả môn", color: "bg-primary" },
    { id: "pro192", name: "PRO192 - Java", color: "bg-orange-500" },
    { id: "csd201", name: "CSD201 - Cấu trúc dữ liệu", color: "bg-purple-500" },
    { id: "nwc204", name: "NWC204 - Mạng máy tính", color: "bg-blue-500" },
    { id: "prj301", name: "PRJ301 - Java Web", color: "bg-green-500" },
    { id: "dbi202", name: "DBI202 - Cơ sở dữ liệu", color: "bg-red-500" },
    { id: "maw211", name: "MAW211 - Mobile App", color: "bg-indigo-500" },
    { id: "swp391", name: "SWP391 - Software Project", color: "bg-yellow-600" },
    { id: "iot102", name: "IOT102 - Internet of Things", color: "bg-cyan-500" }
  ];

  const servicesBySubject = {
    "pro192": ["Tài liệu Java cơ bản", "Source code bài tập", "Hỗ trợ project OOP"],
    "csd201": ["Giải thuật & cấu trúc dữ liệu", "Code mẫu Stack/Queue", "Ôn thi cấp tốc"],
    "nwc204": ["Lab thực hành mạng", "Tài liệu Cisco", "Troubleshooting"],
    "prj301": ["Project Java Web", "Source MVC Pattern", "Database design"],
    "dbi202": ["Thiết kế CSDL", "SQL queries", "Tối ưu hiệu năng"],
    "maw211": ["Phát triển Mobile App", "UI/UX design", "Testing & Deploy"],
    "swp391": ["Quản lý dự án", "Documentation", "Presentation skills"],
    "iot102": ["Hardware setup", "Lập trình Arduino", "Kết nối sensors"]
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tìm dịch vụ theo môn học
            </span>
          </h2>
          <p className="text-muted-foreground">
            Chọn môn học để xem các dịch vụ hỗ trợ cụ thể
          </p>
        </div>

        {/* Subject Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(subject.id)}
              className={`
                ${selectedSubject === subject.id 
                  ? `${subject.color} text-white hover:opacity-90` 
                  : 'hover:bg-primary/10'
                }
                transition-all duration-300
              `}
            >
              {subject.name}
            </Button>
          ))}
        </div>

        {/* Services for Selected Subject */}
        {selectedSubject !== "all" && servicesBySubject[selectedSubject] && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Dịch vụ hỗ trợ cho môn {subjects.find(s => s.id === selectedSubject)?.name}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {servicesBySubject[selectedSubject].map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-sm">{service}</h4>
                    <Badge variant="secondary" className="text-xs">
                      Có sẵn
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    Xem chi tiết
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSubject === "all" && (
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {Object.keys(servicesBySubject).map((subjectId) => {
                const subject = subjects.find(s => s.id === subjectId);
                return (
                  <div 
                    key={subjectId}
                    className="bg-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedSubject(subjectId)}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${subject?.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {subject?.name.split(' ')[0]}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm mb-2">{subject?.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {servicesBySubject[subjectId].length} dịch vụ
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubjectFilter;