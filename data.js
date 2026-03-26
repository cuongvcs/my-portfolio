// DỮ LIỆU CÁ NHÂN & DỰ ÁN (Chỉnh sửa tại đây)
// Cách thêm mới: Chỉ cần copy một khối { ... } và dán xuống dưới, sau đó đổi chữ bên trong.

const portfolioData = {
    // 1. KINH NGHIỆM / KỸ NĂNG (SKILLS)
    skills: [
        {
            icon: "🧠",
            title: "Rockwell PLC Programming",
            description: "Chuyên sâu Studio 5000 Logix Designer cho ControlLogix & CompactLogix (1756, 5069). Code Ladder Logic (LD), Structured Text (ST), Add-On Instructions (AOI).",
            details: [
                "Lập trình AOI, UDT chuẩn hóa",
                "Xử lý hệ thống Redundancy (Dự phòng nóng)",
                "Bảo trì, xử lý lỗi (Troubleshooting) nhanh chóng"
            ],
            percent: 95
        },
        {
            icon: "🖥️",
            title: "HMI & SCADA FactoryTalk",
            description: "Phát triển giao diện HMI (PanelView) và SCADA chuẩn High-Performance bằng FactoryTalk View ME/SE, Ignition.",
            details: [
                "Thiết kế Graphic tối ưu trải nghiệm (UX)",
                "Cấu hình Alarms & Events",
                "Lưu trữ dữ liệu (Historian/SQL)"
            ],
            percent: 90
        },
        {
            icon: "🌐",
            title: "Industrial Networks (CIP)",
            description: "Thiết kế kiến trúc mạng tầng OT: EtherNet/IP, DeviceNet, ControlNet. Cấu hình switch công nghiệp Stratix.",
            details: [
                "Phân chia VLAN, cấu hình NAT",
                "Tích hợp ProfiNet / Modbus qua Gateway",
                "CIP Safety cho hệ thống an toàn"
            ],
            percent: 85
        },
        {
            icon: "⚙️",
            title: "Drives & Motion",
            description: "Cài đặt, tuning biến tần PowerFlex (525, 755) và Kinetix Servo Drives qua mạng EtherNet/IP.",
            details: [
                "Điều khiển CIP Motion nhiều trục",
                "Tích hợp Safe Torque Off (STO)",
                "Đọc/Ghi thông số cấu hình tự động (ADC)"
            ],
            percent: 85
        }
    ],

    // 2. DỰ ÁN ĐÃ LÀM (PROJECTS)
    projects: [
        {
            id: 1,
            image: "assets/ab-controllogix.png",
            tags: ["SLC-500", "ControlLogix", "Migration"],
            title: "Nâng cấp (Migration) SLC-500 lên ControlLogix",
            description: "Dự án chuyển đổi toàn bộ chương trình và phần cứng từ hệ thống SLC-500 đã lỗi thời sang ControlLogix 1756. Giảm thời gian chu kỳ (cycle time) máy xuống 12% và loại bỏ hoàn toàn downtime do thiết bị cũ."
        },
        {
            id: 2,
            image: "assets/ab-panelview.png",
            tags: ["FactoryTalk View", "Historian", "F&B"],
            title: "Thiết kế SCADA nhà máy Nước giải khát",
            description: "Xây dựng hệ thống thu thập dữ liệu tập trung SCADA từ 8 trạm PLC CompactLogix. Tích hợp báo cáo tự động KPI và lưu trữ dữ liệu SQL Server."
        },
        {
            id: 3,
            image: "assets/project-iot.png",
            tags: ["IoT Gateway", "MQTT", "ESP32", "OEE"],
            title: "Hệ thống giám sát OEE lên Cloud/Web",
            description: "Sử dụng ESP32 làm Edge Gateway đọc dữ liệu từ PLC qua Modbus TCP/IP, sau đó đẩy lên Broker MQTT để hiển thị trên Dashboard Web thời gian thực cho Ban giám đốc."
        }
    ],

    // 3. TIN TỨC / CHIA SẺ (NEWS/BLOG)
    news: [
        {
            date: "Tháng 3, 2026",
            title: "Tại sao nên chuyển từ DeviceNet sang EtherNet/IP?",
            summary: "DeviceNet đang dần bị loại bỏ. Bài viết này tôi chia sẻ kinh nghiệm thực tế về lộ trình nâng cấp phần cứng và phần mềm để chuyển đổi sang EtherNet/IP mà không làm gián đoạn sản xuất kéo dài...",
            link: "#" // Điền link Facebook/LinkedIn của bạn vào đây
        },
        {
            date: "Tháng 2, 2026",
            title: "Lưu ý sống còn khi dùng Add-On Instructions (AOI) trong Studio 5000",
            summary: "AOI rất mạnh nhưng nếu không cẩn thận khi online edit, bạn sẽ gặp rắc rối lớn. Dưới đây là 3 nguyên tắc tôi luôn áp dụng khi đóng gói logic...",
            link: "#"
        }
    ]
};
