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
    // HƯỚNG DẪN: Ở phần 'link', bạn hãy copy toàn bộ đường dẫn Internet dán vào. Nếu bạn dùng link, nút sẽ ghi "Đọc bài viết trên Web".
    // 💥 ĐẶC BIỆT: Nếu bài viết của bạn để thẳng trên Website này mà không có link nào cả, hãy DÙNG cú pháp `fullContent` ở bên dưới!
    news: [
        {
            date: "Bài viết chia sẻ",
            title: "Tự động hóa toàn diện: Các bước triển khai SCADA",
            summary: "Đây là tóm tắt. Ấn nút bên dưới để nó sẽ tự động XỔ XUỐNG toàn bộ nội dung mà không văng ra trang mới. Hướng dẫn này có kèm cả ảnh minh họa bên trong!",
            link: "", // Bỏ trống link
            fullContent: "Nội dung phần 1: Thiết kế giao diện (HMI) theo chuẩn ISA 101.\\nViệc sử dụng quá nhiều màu sắc trên HMI gây ức chế và làm giảm khả năng nhận diện.\\n\\n<img src='assets/ab-panelview.png' style='width:100%; border-radius:8px; margin: 15px 0;'>\\n\\nNội dung phần 2: Chuyển dữ liệu lên Cloud.\\nNhư bức ảnh minh họa phía trên, bạn có thể chèn bất kỳ thẻ HTML nào vào trong bài viết." // Bạn có thể copy thẻ <img ...> để chèn ảnh!
        },
        {
            date: "Cập nhật mới",
            title: "Tại sao nên chuyển từ DeviceNet sang EtherNet/IP?",
            summary: "DeviceNet đang dần bị loại bỏ. Bài viết này chia sẻ lộ trình nâng cấp thiết bị và phần mềm để chuyển đổi sang EtherNet/IP (CIP) mà không làm gián đoạn dây chuyền...",
            link: "https://www.linkedin.com/in/ngo-van-cuong-3a8275b7"
        },
        {
            date: "Tháng 2, 2026",
            title: "Kinh nghiệm thực tiễn: Lỗi chết máy khi tải file .ACD vào ControlLogix",
            summary: "AOI (Add-On Instructions) rất uy lực, nhưng nếu quản lý các Data Type (UDT) không chuẩn khi Online Edit, bạn sẽ đau đầu. Đọc thêm về cách tôi quy chuẩn hóa code...",
            link: "https://www.rockwellautomation.com/en-us/company/news/blogs.html"
        }
    ],

    // 4. THƯ VIỆN HÌNH ẢNH (GALLERY)
    // CÁCH DÙNG: Copy ảnh của bạn vào thư mục assets. Thêm 1 block mới bên dưới và đổi tên file ảnh.
    gallery: [
        { src: "assets/ab-controllogix.png", alt: "Tủ điện ControlLogix 1756 lắp ráp hoàn thiện tại xưởng" },
        { src: "assets/ab-panelview.png", alt: "Giao diện SCADA trên màn PanelView Plus 7" },
        { src: "assets/project-migration.png", alt: "Nâng cấp hệ thống SLC-500 cũ" },
        { src: "assets/project-scada.png", alt: "Phòng điều khiển trung tâm nhà máy" },
        { src: "assets/PLC5.png", alt: "Dòng PLC5 đời củ" },
        { src: "assets/SLC500.png", alt: "Dòng SLC500 đời củ" },
        { src: "assets/Micro850PLC.png", alt: "Dòng PLC mini cho các small project" },
        { src: "assets/ControllogixPLC.png", alt: "Dòng PLC cho các dự án lớn" },
        { src: "assets/CompaclogixPLC.png", alt: "Dòng PLC cho các dự án vừa và nhỏ" },
        { src: "assets/Compact5000plc.png", alt: "Dòng PLC cho các dự án lớn" }

    ]
};
