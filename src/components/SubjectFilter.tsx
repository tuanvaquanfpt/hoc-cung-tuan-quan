import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const SubjectFilter = () => {
  const [selectedSubject, setSelectedSubject] = useState("all");

  const semesterSubjects = {
    "semester1": ["SSL101c", "PRF192", "PFP191", "CSI106", "CEA201", "MAE101"],
    "semester2": ["PRO192", "MAD101", "OSG202", "NWC204", "WED201c", "SSG104", "OBE102c"],
    "semester3": ["CSD201", "DBI202", "JPD113", "WED201c"],
    "semester4": ["PRJ301", "PRJ302", "JPD123", "IOT102", "MAS291", "SWE201c"],
    "semester5": ["SWR302", "SWT301", "PRN212", "ITE302c"],
    "semester6": ["SWD392", "SYB302c", "PMG201c", "PRU212"],
    "semester7": ["MLN111", "MLN121", "WDU203c"]
  };

  const semesterFilters = [
    { id: "all", name: "Tất cả học kỳ", color: "bg-primary" },
    { id: "semester1", name: "Học kỳ 1", color: "bg-blue-500" },
    { id: "semester2", name: "Học kỳ 2", color: "bg-green-500" },
    { id: "semester3", name: "Học kỳ 3", color: "bg-purple-500" },
    { id: "semester4", name: "Học kỳ 4", color: "bg-orange-500" },
    { id: "semester5", name: "Học kỳ 5", color: "bg-red-500" },
    { id: "semester6", name: "Học kỳ 6", color: "bg-indigo-500" },
    { id: "semester7", name: "Học kỳ 7", color: "bg-cyan-500" }
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

        {/* Semester Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {semesterFilters.map((semester) => (
            <Button
              key={semester.id}
              variant={selectedSubject === semester.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(semester.id)}
              className={`
                ${selectedSubject === semester.id 
                  ? `${semester.color} text-white hover:opacity-90` 
                  : 'hover:bg-primary/10'
                }
                transition-all duration-300
              `}
            >
              {semester.name}
            </Button>
          ))}
        </div>

        {/* Subjects for Selected Semester */}
        {selectedSubject !== "all" && semesterSubjects[selectedSubject] && (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Các môn học trong {semesterFilters.find(s => s.id === selectedSubject)?.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {semesterSubjects[selectedSubject].map((subject, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="font-semibold text-primary mb-2">{subject}</div>
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    Xem dịch vụ
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSubject === "all" && (
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {semesterFilters.slice(1).map((semester) => (
                <div 
                  key={semester.id}
                  className="bg-white rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedSubject(semester.id)}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${semester.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {semester.name.replace('Học kỳ ', 'K')}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm mb-2">{semester.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {semesterSubjects[semester.id]?.length || 0} môn học
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubjectFilter;