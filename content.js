/* =============================================================================
   IPAG HANDBOOK — CONTENT FILE (v8.1 — Sổ tay hội nhập v7, 03/11/2026)
   =============================================================================

   File chứa TOÀN BỘ NỘI DUNG hiển thị trong handbook.
   Mọi text, link, ảnh, file đính kèm — đều cập nhật ở đây.

   --- MỤC LỤC ---
   PHẦN 1: CẤU HÌNH TỔNG       (Danh sách SBU, Menu, Text giao diện, Welcome)
   PHẦN 2: NỘI DUNG MODULE CHUNG (Áp dụng cho mọi SBU) — gồm Sổ tay hội nhập (Dẫn nhập + Phần I/II/III)
   PHẦN 3: NỘI DUNG MODULE THEO SBU (Đào tạo — khác giữa các SBU)
   PHẦN 4: TIPS / MẸO THEO MODULE

   --- QUY TẮC SỬA ---
   - Text trong dấu nháy kép "..."
   - Mỗi dòng kết thúc bằng dấu phẩy , (trừ dòng cuối khối {} hoặc [])
   - Ảnh: "images/[sbu]/ten-anh.png"
   - File: "files/[sbu]/ten-file.pdf"
   - HTML cơ bản dùng được trong text: <strong>, <em>, <br>, <a>
   ============================================================================= */


/* =============================================================================
   PHẦN 1: CẤU HÌNH TỔNG
   ============================================================================= */

// --- 1.1. DANH SÁCH SBU ---
// Hiện tại chỉ kích hoạt IPAG. Các SBU khác tạm ẩn (comment //).
// Khi sẵn sàng, xoá // ở đầu dòng để bật lại.
const sbus = {
  IPAG:  { tenDayDu: "IPAG", khoiMacDinh: "backOffice",  khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "." } },
  VNDS:  { tenDayDu: "VNDIRECT",       khoi: { kinhDoanh: "Đội ngũ Kinh doanh", backOffice: "Đội ngũ chuyên môn, nghiệp vụ, share service" } },
  PTI:   { tenDayDu: "PTI",            khoi: { kinhDoanh: "Đội ngũ Kinh doanh", backOffice: "Đội ngũ chuyên môn, nghiệp vụ, share service" } },
  //IPAM:  { tenDayDu: "IPAM",           khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  IPAS: { tenDayDu: "IPAS", khoiMacDinh: "backOffice", khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "." } },
  ANVIE: { tenDayDu: "ANVIE", khoiMacDinh: "vanHanh", khoi: { kinhDoanh: "Đơn vị Kinh doanh", sanXuat: "Khối Sản xuất", vanHanh: "." } }
};

// --- 1.2. CẤU TRÚC MENU SIDEBAR ---
// Đổi thứ tự / đổi tên / thêm module mới ngay tại đây.
const menuConfig = [
  {
    // Sổ tay hội nhập — theo docx v7 (03/11/2026). Đọc theo thứ tự từ trên xuống.
    // Tên menu để ngắn cho vừa 1 dòng; tiêu đề đầy đủ "Phần I: ..." nằm trong content từng phần.
    nhom: "Sổ tay hội nhập",
    cacMuc: [
      { id: "dan-nhap",       ten: "Dẫn nhập",                     icon: "book-marked" },
      { id: "phan-1",         ten: "IPA Group là ai?",             icon: "tree-deciduous" },
      { id: "phan-2",         ten: "Dựng & vận hành",              icon: "blocks" },
      { id: "phan-3",         ten: "Bạn trưởng thành",             icon: "trending-up" }
    ]
  },
  {
    nhom: "Hành trình hội nhập",
    cacMuc: [
      { id: "lo-trinh",       ten: "Lộ trình 60 ngày",     icon: "map" },
      { id: "dao-tao",        ten: "Chương trình đào tạo", icon: "graduation-cap" },
      { id: "quy-dinh",       ten: "Quy định nhân sự",     icon: "shield-check" }
    ]
  },
  {
    nhom: "Hỗ trợ & Tham khảo",
    cacMuc: [
      { id: "nguon-luc",      ten: "Mạng lưới đồng hành",  icon: "users" },
      { id: "glossary",       ten: "Từ điển thuật ngữ",    icon: "book-open" },
      { id: "faq",            ten: "FAQ - Hỏi đáp",        icon: "help-circle" }
    ]
  }
];

// --- 1.3. TEXT GIAO DIỆN (UI Text) ---
// Mọi nhãn nút, chữ phụ trên giao diện — tách hết khỏi index.html.
const uiText = {
  appName:           "IPAG Handbook",
  appLogo:           "layout-dashboard",
  appLogoImg:        "images/chung/logo-ipa-group.png",   // Logo dùng ở welcome + sidebar (fallback: icon appLogo khi ảnh không tải được)
  sidebarToggleAria: "Đóng/mở menu",
  sidebarToggleClose:  "Đóng menu",
  sidebarToggleOpen:   "Mở menu",
  // Welcome screen
  obStep1Title:      "Bạn thuộc SBU nào?",
  obStep2Title:      "Bạn thuộc đội ngũ nào trong",
  obBackButton:      "Quay lại chọn đơn vị",
  // Header
  headerContextLabel:"Bạn đang xem:",
  headerChangeBtn:   "Quay lại trang chủ",
  // Module common
  tipButton:         "Tip / Mẹo",
  emptyTitle:        "Module đang phát triển",
  emptyDesc:         "Nội dung cho phần này đang được hoàn thiện và sẽ sớm ra mắt.",
  // Modal
  modalCloseBtn:     "Đóng",
  zoomCloseBtn:      "Đóng",
  zoomInBtn:         "Phóng to",
  zoomOutBtn:        "Thu nhỏ",
  zoomResetBtn:      "Khôi phục",
  // Module: Đào tạo
  daoTaoCompanyHeader: "Company Onboarding",
  daoTaoJobHeader:     "Job Onboarding",
  daoTaoEmptyJob:      "Nội dung Job Onboarding đang được cập nhật cho vị trí của bạn.",
  daoTaoCourseBtn:     "Tới lớp học LMS",
  daoTaoTagRequired:   "Bắt buộc",
  daoTaoTagOptional:   "Tham khảo",
  // Module: Sổ tay (Dẫn nhập · Phần I/II/III)
  soTayGiupBan:      "Giúp bạn",
  soTayVoiBan:       "Với bạn",
  soTayMoTatCa:      "Mở tất cả mục",
  soTayThuGon:       "Thu gọn tất cả",
  // Module: Glossary
  glossaryTieuDe:    "Từ điển thuật ngữ (Glossary)",
  glossaryMoTa:      "Bộ thuật ngữ dành cho CBNV, chia theo 5 bộ công cụ: IPA · IPAC · IPAG · EPIC · iLead.",
  glossarySearchPlaceholder: "Nhập từ viết tắt để tra cứu (vd: SOA, HWG, 5PoA...)",
  glossaryNoResult:  "Không tìm thấy thuật ngữ phù hợp.",
  // Module: FAQ
  faqSearchPlaceholder: "Nhập từ khoá để tìm câu hỏi...",
  faqNoResult:          "Không tìm thấy câu hỏi nào phù hợp."
};

// --- 1.4. NỘI DUNG WELCOME SCREEN ---
const welcomeContent = {
  brand: "IPAG GROUP",
  tieuDe: "Chào mừng đến với<br><span>IPA Group!</span>",
  // Đoạn lời chào (đoạn đầu)
  loiChao: "Chào bạn — người bạn mới của IPA Group.<br><br>Có những nơi người ta đến để làm việc, rồi rời đi khi hết giờ. Nhưng cũng có những nơi người ta đến để tìm thấy niềm vui, cảm hứng và được sống trọn vẹn hơn mỗi ngày. Chúng tôi mong IPA Group sẽ là nơi thứ hai ấy với bạn — một ngôi nhà được kiến tạo qua gần 30 năm, không chỉ để trở thành một tập đoàn lớn mạnh hơn, mà để trở thành một tổ chức làm nghề chuẩn mực, vượt trội và được gìn giữ qua nhiều thế hệ.<br><br>Từ hôm nay, bạn được trao truyền một gia tài trí tuệ — kết tinh từ kinh nghiệm, tri thức và tâm huyết mà nhiều thế hệ người đi trước đã dành cả hành trình của mình để gây dựng.<br><br>Trong ngôi nhà IPAG có Tam Bảo để nuôi dưỡng bạn, có Nền để bạn tựa vào, có Nếp để bạn sống mỗi ngày. Tất cả là để giúp bạn sống trọn tinh thần Sống nghề · Phụng sự — và từng bước tìm ra con đường sự nghiệp của riêng mình.",
  // Đoạn mô tả handbook — gộp đoạn 2 và 3 từ spec
  moTa: "Cuốn sổ tay hội nhập này sẽ kể cho bạn nghe câu chuyện về ngôi nhà IPAG, về sứ mệnh mà chúng ta cùng nhau thực hiện — và về gia tài mà từ hôm nay, bạn vừa là người được thừa hưởng, vừa là người tiếp tục gửi trao.<br><br>Hãy đọc thật thong thả. Bởi những điều quan trọng nhất ở IPAG không chỉ nằm trong quy trình, mà còn ở cách IPA Group nhìn về con người, về giá trị và về hành trình dài phía trước.",
  // Câu footer
  huongDan: "Hệ sinh thái Wellbeing Việt Nam · Vận hành theo mô hình Ngân hàng Năng lực",
  // Box Thư Chủ tịch trên welcome screen.
  // Thay thư mới: export ảnh mới vào images/chung/, cập nhật đường dẫn trong `anh`.
  // Muốn ẩn box: đổi hienThi thành false.
  thuChuTich: {
    hienThi: true,
    tieuDe: "Thư từ Chủ tịch gửi người bạn mới của IPA Group",
    moTa: "Trước khi bắt đầu, hãy dành ít phút đọc bức thư Chủ tịch Vũ Hiền gửi người bạn mới.",
    nutMo: "Đọc thư",
    ghiChu: "Bấm vào ảnh để mở bản đầy đủ (phóng to / thu nhỏ trực tiếp).",
    // Thư "IPA Group – Gia tài của chúng ta": 4 trang ngang 1920×1080 (03/11/2026)
    anh: [
      "images/chung/thu-chu-tich-1.png",
      "images/chung/thu-chu-tich-2.png",
      "images/chung/thu-chu-tich-3.png",
      "images/chung/thu-chu-tich-4.png"
    ]
  }
};


/* =============================================================================
   PHẦN 2: NỘI DUNG MODULE CHUNG
   ============================================================================= */

// =============================================================================
// SỔ TAY HỘI NHẬP — theo file "03_11_2026_SoTayHoiNhap_IPAGroup_v7.docx"
// =============================================================================
// 4 module: Dẫn nhập · Phần I · Phần II · Phần III.
// NGUYÊN TẮC: giữ nguyên câu chữ của docx. Muốn sửa chữ → sửa trong "noiDung".
//
// Mỗi module có:
//   nhan       : nhãn nhỏ phía trên tiêu đề (vd "Phần I")
//   tieuDe     : tiêu đề lớn
//   moTa       : câu dẫn ngay dưới tiêu đề
//   conSo      : (tuỳ chọn) các con số nổi bật
//   moDau      : (tuỳ chọn) các KHỐI hiển thị trước danh sách mục
//   cacMuc     : các mục dạng accordion (bấm để mở) — mỗi mục có danh sách KHỐI
//   ketThuc    : (tuỳ chọn) các KHỐI hiển thị sau danh sách mục
//   chuyenTiep : (tuỳ chọn) nút sang phần tiếp theo
//
// CÁC LOẠI KHỐI (trường "loai"):
//   "doan"      : 1 đoạn văn                         { loai, noiDung }
//   "tieuDe"    : tiêu đề nhỏ trong mục              { loai, noiDung }
//   "danhSach"  : danh sách gạch đầu dòng            { loai, muc: ["...", "..."] }
//   "bang"      : bảng (mobile tự xếp dọc)           { loai, cot: [...], dong: [[...], ...], [rong], [khongXuongDong] }
//                 rong = độ rộng từng cột trên desktop (vd ["30%","70%"]);
//                 khongXuongDong = số thứ tự cột (đếm từ 0) giữ trên 1 dòng (vd [1])
//   "the"       : lưới thẻ                           { loai, the: [{ ten, phuDe, noiDung, voiBan, toi }] }
//                 (toi = id module → bấm thẻ để chuyển sang module đó)
//   "giupBan"   : khung "Giúp bạn"                   { loai, noiDung }
//   "voiBan"    : khung "Với bạn"                    { loai, noiDung, [dong], [ghiChu] }
//                 (dong = các dòng mẫu để tự điền, "___" là chỗ trống)
//   "trichDan"  : câu trích nổi bật                  { loai, noiDung }
//   "ghiNho"    : khung nền xanh đậm (chốt ý)        { loai, [tieuDe], noiDung, [icon] }
//   "chuThich"  : câu nghiêng, chữ nhỏ               { loai, noiDung }
// =============================================================================


// --- 2.1. MODULE: DẪN NHẬP (đầu menu) ---
const danNhapContent = {
  bia: {
    tieuDe: "SỔ TAY HỘI NHẬP",
    tenTapDoan: "IPA GROUP",
    dongPhu: ["Hệ sinh thái Wellbeing Việt Nam", "Vận hành theo mô hình Ngân hàng Năng lực"],
    loiChao: "Chào mừng bạn đến với IPA Group.",
    camKet: "Hành trình của bạn bắt đầu từ hôm nay."
  },
  tieuDe: "Dẫn nhập",
  khoi: [
    { loai: "doan", noiDung: "Có lẽ lúc này trong bạn đang có đủ thứ cảm xúc: một chút háo hức, một chút hồi hộp, và vài câu hỏi chưa biết hỏi ai. Không sao cả. Ai ở đây cũng từng có một ngày đầu tiên như bạn hôm nay." },
    { loai: "doan", noiDung: "Mấy chuyện như ngồi ở đâu, báo cáo cho ai, cài phần mềm nào… chỉ vài hôm là bạn quen. Điều chúng tôi muốn kể với bạn trước lại là những chuyện khác: <strong>bạn vừa bước vào một tổ chức như thế nào, nơi này tin vào điều gì, và bạn sẽ lớn lên cùng nó ra sao.</strong>" },
    { loai: "doan", noiDung: "Hãy xem cuốn sổ tay nhỏ này như một buổi trò chuyện đầu tiên. Nó không bắt bạn học thuộc. Nó giúp bạn thấy bức tranh lớn và biết mình nên bắt đầu từ đâu. Chúng ta sẽ đi cùng nhau qua ba chặng:" },
    { loai: "the", kieu: "chang", the: [
      { ten: "Phần I – IPA Group là ai?", noiDung: "Chúng tôi làm gì, tin vào điều gì, và mong điều gì cho người Việt.", toi: "phan-1" },
      { ten: "Phần II – IPA Group được dựng và vận hành ra sao?", noiDung: "Tổ chức được xây theo cách nào, và chỗ đứng của bạn ở đâu trong đó.", toi: "phan-2" },
      { ten: "Phần III – Bạn trưởng thành ở IPAG như thế nào?", noiDung: "Con đường làm nghề và lớn lên của mỗi người.", toi: "phan-3" }
    ] },
    { loai: "doan", noiDung: "Có thể bạn sẽ gặp vài cách gọi còn lạ như “Tam Bảo”, “dựng nền”, “xây nếp”. Bạn chưa cần nhớ hết ngay. Hãy xem đó là những điểm tựa giúp chúng ta hiểu nhau và cùng làm việc. Cuối mỗi mục có một dòng <strong>Với bạn</strong>, là lời nhắn nhỏ về một việc bạn có thể làm ngay." },
    { loai: "trichDan", noiDung: "<em>Bạn cứ đọc thong thả, như đang ngồi trò chuyện với một người đi trước. Chỗ nào chưa rõ thì cứ hỏi, mọi người ở đây luôn sẵn lòng. Và trên hết: rất vui vì bạn đã đến.</em>" }
  ],
  chuyenTiep: { toi: "phan-1", nut: "Bắt đầu Phần I" }
};


// --- 2.2. MODULE: PHẦN I — IPA GROUP LÀ AI? ---
const phan1Content = {
  nhan: "Phần I",
  tieuDe: "IPA Group là ai?",
  moTa: "<em>IPA Group (HNX: IPA) là hệ sinh thái Wellbeing của Việt Nam – gần 30 năm kiến tạo trên ba dòng chảy: tài chính, bảo hiểm và đời sống.</em>",
  conSo: [
    { soLieu: "Gần 30", nhan: "Năm kiến tạo",       icon: "calendar-clock" },
    { soLieu: "35+",    nhan: "Công ty thành viên", icon: "building" },
    { soLieu: "7.000+", nhan: "Con người",          icon: "users" }
  ],
  cacMuc: [
    {
      tieuDe: "Một hệ sinh thái và hơn 7.000 người đồng hành",
      khoi: [
        { loai: "doan", noiDung: "Hơn 35 công ty thành viên, hơn 7.000 con người. Mỗi người một nghề, một nơi làm việc, nhưng cùng chung một môi trường nuôi dưỡng, cùng nhìn về một hướng và cùng gánh một sứ mệnh. <strong>Kể từ hôm nay, con số ấy có thêm bạn.</strong>" },
        { loai: "tieuDe", noiDung: "Tầm nhìn" },
        { loai: "trichDan", noiDung: "<strong>“Một Việt Nam Wellbeing – nơi sống tỉnh thức là nền, sống trọn vẹn là nếp: người người sống khỏe, nhà nhà sống giàu, cộng đồng sống vui, đều được bắt đầu từ lựa chọn nhỏ mỗi ngày.”</strong>" },
        { loai: "tieuDe", noiDung: "Sứ mệnh" },
        { loai: "trichDan", noiDung: "<strong>Kết nối, gìn giữ và trao truyền gia tài trí tuệ Việt.</strong>" },
        { loai: "doan", noiDung: "Chúng tôi mong một Việt Nam đáng sống hơn: nơi mỗi người Việt đều có cơ hội tiếp cận những giải pháp giúp mình sống tốt hơn, và những giá trị truyền thống quý giá được giữ gìn, trao lại cho thế hệ mai sau." },
        { loai: "doan", noiDung: "<strong>“Making Vietnam a better place to live – for generations to come.”</strong>" }
      ]
    },
    {
      tieuDe: "Hai nền tảng vận hành",
      khoi: [
        { loai: "doan", noiDung: "<strong>Hãy hình dung IPA Group như một cái cây. Bộ rễ nuôi dưỡng năng lực; trái ngọt mang giá trị đến với người dùng. Hai phần ấy là IPA Capability và IPA Living.</strong>" },
        { loai: "tieuDe", noiDung: "IPA Capability – Ngân hàng Năng lực (bộ rễ)" },
        { loai: "doan", noiDung: "Giống như một ngân hàng giữ và làm lớn đồng tiền, Ngân hàng Năng lực (IPA Capability) giữ và làm lớn năng lực. Ba năng lực nền gồm:" },
        { loai: "danhSach", muc: [
          "<strong>IPA Solution:</strong> công nghệ, dữ liệu và chuyển đổi số.",
          "<strong>IPA Management:</strong> con người, quản trị và vận hành.",
          "<strong>IPA Partners:</strong> kết nối đối tác, khai thông dòng vốn Việt cho doanh nghiệp Việt."
        ] },
        { loai: "tieuDe", noiDung: "IPA Living – Đưa Wellbeing vào đời sống (trái ngọt)" },
        { loai: "doan", noiDung: "Đây là nơi năng lực trở thành sản phẩm, dịch vụ và trải nghiệm cụ thể qua <strong>AnVie</strong> trong đời sống và sức khỏe, <strong>VNDIRECT</strong> trong tài chính và đầu tư, <strong>PTI</strong> trong bảo hiểm và bảo vệ. Tất cả các thương hiệu cùng hướng tới một điều: chăm lo tốt hơn cho sức khỏe, tài chính và sự an toàn của người Việt." },
        { loai: "tieuDe", noiDung: "Wellbeing là một cách sống" },
        { loai: "doan", noiDung: "<strong>Wellbeing không phải là một đích đến xa xôi. Đó là cách sống tỉnh thức theo I·P·A và trọn vẹn theo HWG, bắt đầu từ lựa chọn nhỏ mỗi ngày.</strong>" },
        { loai: "bang",
          cot: ["Hai tầng", "Nghĩa là"],
          rong: ["30%", "70%"],
          dong: [
            ["SỐNG TỈNH THỨC<br>I·P·A (tầng nền)", "<strong>Intention</strong> – Chủ tâm · <strong>Presence</strong> – Hiện diện · <strong>Awareness</strong> – Tỉnh thức.<br>Biết mình làm vì điều gì, có mặt trọn vẹn với việc đang làm, và luôn tỉnh táo nhìn lại mình."],
            ["SỐNG TRỌN VẸN<br>HWG (tầng nếp)", "<strong>H</strong> · Sống Khỏe (Health) · <strong>W</strong> · Sống Giàu (Wealth) · <strong>G</strong> · Sống Vui (Grow)."]
          ] },
        { loai: "voiBan", noiDung: "Wellbeing bắt đầu từ chính bạn. Một bữa ăn đúng giờ, một khoản tiết kiệm nhỏ, một lời cảm ơn gửi đồng nghiệp – tất cả đều là Wellbeing." }
      ]
    },
    {
      tieuDe: "Bốn giá trị cốt lõi I·P·A·G",
      khoi: [
        { loai: "doan", noiDung: "Bốn chữ I.P.A.G là bộ lọc để chúng ta cùng suy nghĩ, hành động và cùng làm việc." },
        { loai: "bang",
          cot: ["Giá trị", "Trong công việc hằng ngày"],
          rong: ["34%", "66%"],
          dong: [
            ["I – Insight & Integration<br>(Thấu hiểu & Tích hợp)", "Thấu hiểu sâu trước khi hành động; tích hợp Con người · Công nghệ · Chuỗi giá trị để kết quả lớn hơn tổng các phần."],
            ["P – Pathway & Partnership<br>(Lộ trình & Đồng hành)", "Vạch lộ trình rõ và đồng hành thực sự – chia sẻ cả rủi ro lẫn thành công."],
            ["A – Action & Accountability<br>(Hành động & Trách nhiệm)", "Hành động dứt khoát, đo bằng kết quả thực chất, chịu trách nhiệm đến cùng."],
            ["G – Greatness & Generation<br>(Vượt trội & Trao truyền)", "Hướng tới vượt trội mỗi ngày và trao truyền giá trị xuyên thế hệ."]
          ] },
        { loai: "voiBan", noiDung: "Khi phân vân trước một quyết định, hãy thử đặt nó qua bốn chữ này." }
      ]
    },
    {
      tieuDe: "Những nơi giúp bạn hiểu hệ sinh thái",
      khoi: [
        { loai: "bang",
          cot: ["Kênh", "Bạn sẽ thấy gì"],
          rong: ["34%", "66%"],
          dong: [
            ["Website IPA Group<br><a href='https://www.ipa.com.vn/' target='_blank' rel='noopener'>ipa.com.vn</a>", "Toàn cảnh hệ sinh thái theo mô hình Ngân hàng Năng lực (Capability Bank)."],
            ["Website IPA Living<br><a href='https://ipaliving.vn/' target='_blank' rel='noopener'>ipaliving.vn</a>", "Cách IPA Group biến triết lý Wellbeing thành những giải pháp cụ thể."],
            ["Kênh YouTube chính thức<br><a href='https://www.youtube.com/@ipa-group.official' target='_blank' rel='noopener'>@ipa-group.official</a>", "Những thước phim về sự kiện văn hóa và nếp sống của người IPAG."],
            ["Group nội bộ<br><a href='https://www.facebook.com/groups/nepsongipaliving' target='_blank' rel='noopener'>Nếp sống IPA Living</a>", "Không gian riêng của CBNV: thông báo quan trọng, chính sách và sinh hoạt văn hóa nội bộ."]
          ] },
        { loai: "tieuDe", noiDung: "Các thương hiệu tiêu biểu" },
        { loai: "doan", noiDung: "Muốn hiểu IPA Group mang Wellbeing vào đời sống ra sao, cách nhanh nhất là ghé thăm những thương hiệu đang ngày ngày phục vụ khách hàng:" },
        { loai: "bang",
          cot: ["Thương hiệu", "Lĩnh vực trọng tâm", "Website chính thức"],
          rong: ["24%", "40%", "36%"],
          dong: [
            ["VNDIRECT", "Đầu tư & Quản lý tài sản", "<a href='https://www.vndirect.com.vn/' target='_blank' rel='noopener'>vndirect.com.vn</a>"],
            ["PTI", "Bảo hiểm Phi nhân thọ", "<a href='https://www.pti.com.vn/' target='_blank' rel='noopener'>pti.com.vn</a>"],
            ["AnVie", "Sức khỏe & Đời sống", "Đang cập nhật"]
          ] },
        { loai: "voiBan", noiDung: "Hãy tham gia group nội bộ ngay trong tuần đầu – đó là nơi bạn không bỏ lỡ điều gì. Khi rảnh, ghé qua website của các thương hiệu để thấy công việc của mình chạm tới khách hàng như thế nào." }
      ]
    }
  ],
  ketThuc: [
    { loai: "doan", noiDung: "IPA Group không chỉ là nơi bạn bắt đầu một công việc mới. Ở đây, mỗi người được kỳ vọng nhiều hơn việc hoàn thành nhiệm vụ – đó là <strong>rèn năng lực, tích lũy giá trị, lớn lên cùng đồng đội</strong>, và góp một phần vào điều lớn hơn chính mình." },
    { loai: "trichDan", noiDung: "<strong>“MAKING VIETNAM A BETTER PLACE TO LIVE – FOR GENERATIONS TO COME.”</strong>" }
  ],
  chuyenTiep: { cauDan: "<em>Một mong muốn lớn cần một cách tổ chức đủ vững để nâng đỡ con người. Cách tổ chức ấy ra sao? Mời bạn sang Phần II.</em>", toi: "phan-2", nut: "Sang Phần II" }
};


// --- 2.3. MODULE: PHẦN II — IPA GROUP ĐƯỢC DỰNG VÀ VẬN HÀNH RA SAO? ---
const phan2Content = {
  nhan: "Phần II",
  tieuDe: "IPA Group được dựng và vận hành ra sao?",
  moTa: "<em>Phần I là bức tranh bên ngoài. Phần II mở ra bản vẽ bên trong – và chỉ cho bạn chỗ đứng của mình.</em>",
  moDau: [
    { loai: "doan", noiDung: "Chỉ cần nhớ một điều: <strong>mọi thứ ở IPA Group – từ tập đoàn, các công ty thành viên, cho tới từng BU/CU – đều xây dựng năng lực theo 5 bộ công cụ thống nhất, đi đúng thứ tự dưới đây:</strong>" },
    { loai: "bang",
      cot: ["Bộ công cụ", "Kiến tạo nên", "Trả lời câu hỏi"],
          rong: ["20%", "28%", "52%"],
      dong: [
        ["① IPA",   "CHIẾN LƯỢC",        "Chúng ta làm vì điều gì, đi về đâu?"],
        ["② IPAC",  "KIẾN TRÚC TỔ CHỨC", "Một đơn vị được xây dựng và vận hành ra sao?"],
        ["③ IPAG",  "GIA TÀI",           "Làm xong, tổ chức giữ lại được gì?"],
        ["④ EPIC",  "CỘNG SỰ",           "Chúng ta cùng làm với nhau thế nào?"],
        ["⑤ iLead", "CHỦ NHIỆM",         "Mỗi người làm chủ công việc ra sao?"]
      ] },
    { loai: "chuThich", noiDung: "Năm phần đi theo một mạch: có hướng đi → dựng tổ chức → giữ lại gia tài → kết nối cộng sự → trao việc cho người làm chủ." },
    { loai: "giupBan", noiDung: "năm phần này là năm câu hỏi bạn sẽ gặp lại ở mọi đơn vị, mọi cuộc họp, mọi tài liệu nội bộ. Nắm được chúng, bạn đọc hiểu tài liệu nhanh hơn và biết một vướng mắc đang nằm ở phần nào để hỏi đúng người. Mỗi mục dưới đây đều có hai dòng dành riêng cho bạn: “Giúp bạn” cho biết phần đó có ích gì, “Với bạn” gợi ý một việc làm được ngay." }
  ],
  cacMuc: [
    {
      tieuDe: "IPA – Direction: Dựng chiến lược",
      tagline: "Giá trị trao đi và lựa chọn hướng đi.",
      khoi: [
        { loai: "doan", noiDung: "IPA là ba chữ <strong>Intention · Presence · Awareness</strong>, gói lại trong một chữ <strong>TÂM</strong>: làm việc gì cũng bắt đầu từ việc hiểu rõ mình làm vì điều gì." },
        { loai: "giupBan", noiDung: "biết mỗi việc mình làm đang phục vụ điều gì, và khi bối rối thì có ba điểm tựa để quay về." },
        { loai: "tieuDe", noiDung: "Bộ chiến lược 5P – năm câu hỏi định hướng" },
        { loai: "doan", noiDung: "Từ tập đoàn tới mỗi BU/CU, chiến lược đều được dựng từ năm câu hỏi dưới đây. Bạn không cần tự viết chiến lược – nhưng khi đọc kế hoạch của đơn vị mình, hãy tìm câu trả lời cho năm câu này để hiểu vì sao đơn vị đang làm những việc đang làm:" },
        { loai: "bang",
          cot: ["5P", "Câu hỏi"],
          rong: ["40%", "60%"],
          dong: [
            ["① Position – Định vị",                "Chúng ta mang lại giá trị gì cho người mình phục vụ?"],
            ["② Perspective – Góc nhìn",             "Chúng ta muốn được mọi người nhìn nhận thế nào?"],
            ["③ Pattern of Action – Nếp hành động",  "Chúng ta làm việc theo những nếp nào?"],
            ["④ Principle – Nguyên tắc",             "Chúng ta tự cam kết giữ điều gì?"],
            ["⑤ Plan – Kế hoạch",                    "Cần làm gì, ai làm, khi nào xong – để bốn điều trên khớp với nhau?"]
          ] },
        { loai: "tieuDe", noiDung: "Tam Bảo – môi trường nuôi dưỡng bạn" },
        { loai: "doan", noiDung: "Ở IPA Group, bạn không phải tự mình tìm mọi câu trả lời. Tam Bảo là ba điểm tựa luôn có đó để bạn quay về:" },
        { loai: "the", the: [
          { ten: "COL – Center of Leadership", phuDe: "Đội ngũ lãnh đạo · giữ HƯỚNG", noiDung: "Khi băn khoăn về định hướng, hãy tìm đến đội ngũ lãnh đạo của bạn." },
          { ten: "COP – Center of Practice", phuDe: "Bộ chuẩn mực của tổ chức · giữ CHUẨN", noiDung: "Khi chưa biết làm theo chuẩn mực nào là đúng, hãy tra cứu COP – hỏi quản lý trực tiếp xem bộ chuẩn mực của đơn vị bạn nằm ở đâu." },
          { ten: "COE – Center of Excellence", phuDe: "Đồng nghiệp cùng nghề · giữ NHỊP NGHỀ", noiDung: "Khi cần người đồng hành, hỗ trợ trong chuyên môn, hãy tìm đến những người làm cùng nghề với bạn – ở đơn vị mình hoặc ở đơn vị khác trong tập đoàn." }
        ] },
        { loai: "voiBan", noiDung: "Trước mỗi việc, tự hỏi: “Việc này để làm gì, mang lại điều tốt cho ai?”. Và ngay trong tuần đầu, hãy hỏi quản lý trực tiếp để ghi lại ba điểm tựa của riêng bạn: ai là người giữ <strong>Hướng</strong> cho đơn vị, bộ <strong>Chuẩn</strong> bạn cần theo nằm ở đâu, và ai là người cùng <strong>Nghề</strong> bạn có thể hỏi khi vướng." }
      ]
    },
    {
      tieuDe: "IPAC – Organization: Dựng kiến trúc tổ chức",
      tagline: "Tổ chức có nền để thực hiện chiến lược đã xây từ IPA",
      khoi: [
        { loai: "giupBan", noiDung: "hiểu vì sao việc của bạn tồn tại, bạn nhận đầu vào từ ai và giao kết quả cho ai, và ai là người quyết định cuối cùng – thay vì chỉ thấy một đầu việc riêng lẻ." },
        { loai: "doan", noiDung: "Dù lớn như cả tập đoàn hay nhỏ như một BU/CU, đơn vị nào cũng được dựng theo năm tầng, đi từ móng lên nóc. Bạn không cần nhớ các mã viết tắt – chỉ cần biết mỗi tầng trả lời câu hỏi gì và nó liên quan tới bạn ra sao:" },
        { loai: "bang",
          cot: ["Tầng", "Là gì", "Câu hỏi", "Hiểu đơn giản"],
          rong: ["21%", "17%", "23%", "39%"], khongXuongDong: [1],
          dong: [
            ["MÓNG<br>Mục tiêu", "5P", "Đơn vị sinh ra để làm gì, cho ai, đi tới đâu?", "Một kế hoạch rõ ràng, bám theo chiến lược chung của tập đoàn. Việc bạn được giao là một phần của kế hoạch ấy."],
            ["NỀN<br>Năng lực & chuỗi việc", "CB · FC · OC", "Đơn vị có năng lực gì, việc chạy theo những chuỗi nào?", "<strong>Ngân hàng Năng lực (CB):</strong> mọi năng lực cần có theo chuẩn ngành. Có năng lực chúng ta tự xây, có năng lực chúng ta thuê ngoài.<br>Trên nền ấy có hai loại chuỗi: <strong>chuỗi vận hành (FC)</strong> chạy việc hằng ngày, và <strong>chuỗi cơ hội (OC)</strong> mở ra việc mới. Việc của bạn nằm trên một trong hai loại chuỗi này."],
            ["CỘI<br>Sự phát triển", "HWG", "Đơn vị lớn lên bằng cách nào, đo ra sao?", "Đơn vị tự hỏi ba câu: đang <strong>nuôi dưỡng</strong> điều gì (Khỏe – Health), đang <strong>tích lũy</strong> được gì (Giàu – Wealth), và năng lực, trí tuệ đang <strong>lớn lên</strong> ra sao (Grow). Phần đóng góp của bạn cũng được nhìn qua ba câu này."],
            ["CỘT<br>Bốn trụ chuỗi giá trị", "GTM · VCO · BIS · CG", "Những ai cùng gánh việc?", "Bốn chuỗi giá trị cùng gánh mọi việc của đơn vị:<br><strong>GTM:</strong> hướng ra thị trường<br><strong>VCO:</strong> vận hành<br><strong>BIS:</strong> dữ liệu và công nghệ<br><strong>CG:</strong> giữ gìn năng lực tổ chức<br>Việc của bạn thuộc ít nhất một trong bốn trụ."],
            ["NÓC<br>Nơi ra quyết định", "BC", "Ai quyết định và chịu trách nhiệm cuối cùng?", "Hội đồng điều hành của công ty thành viên (SBU). Phần lớn quyết định đến với bạn qua quản lý trực tiếp."]
          ] },
        { loai: "doan", noiDung: "<strong>Đọc liền một mạch:</strong> có mục tiêu → dựng năng lực và chuỗi việc → biết mình lớn lên thế nào → có đủ trụ cùng gánh → có nơi ra quyết định. Thiếu bước nào, đơn vị yếu ở bước đó." },
        { loai: "voiBan", noiDung: "Trong hai tuần đầu, hãy xác định rõ ràng: (1) Đơn vị mình phục vụ ai? (2) Việc của mình nhận đầu vào từ ai, giao kết quả cho ai – nằm trên chuỗi nào, thuộc trụ nào? (3) Ai quyết định cuối cùng với việc của mình? Điền những gì bạn đoán được, để trống chỗ chưa biết, rồi mang trang đó trao đổi 15 phút với quản lý trực tiếp hoặc HRBP." }
      ]
    },
    {
      tieuDe: "IPAG – Intelligence: Dựng gia tài dùng lại",
      tagline: "Năng lực số liệu, tài chính, tri thức",
      khoi: [
        { loai: "chuThich", noiDung: "Lưu ý: IPAG cũng là tên gọi tắt của IPA Group" },
        { loai: "doan", noiDung: "Gia tài là <strong>những gì tổ chức giữ lại sau khi một việc hoàn thành, để người đi sau không phải bắt đầu lại từ số 0</strong>. Gia tài được cất ở năm nơi:" },
        { loai: "giupBan", noiDung: "không phải bắt đầu từ số 0. Phần lớn việc bạn sắp làm đã có người làm trước và để lại mẫu biểu, quy trình hoặc bài học – tìm thấy chúng là tiết kiệm được nhiều ngày công." },
        { loai: "danhSach", muc: [
          "<strong>CB – Ngân hàng Năng lực:</strong> những năng lực tổ chức đang có, và năng lực cần thuê ngoài.",
          "<strong>KMS – Kho tri thức:</strong> tài liệu, quy trình, bộ chuẩn mực… đã được chuẩn hóa để dùng chung.",
          "<strong>LMS – Kho đào tạo:</strong> bài học, khóa học để mọi người cùng phát triển.",
          "<strong>DPS – Kho công cụ số:</strong> các công cụ số dùng riêng cho từng đơn vị/phòng ban như các phần mềm chuyên môn nghiệp vụ, hệ thống dữ liệu, báo cáo…",
          "<strong>PACK – Kho công cụ hành nghề:</strong> các mẫu biểu, sale kit, bộ tài liệu bán hàng…"
        ] },
        { loai: "doan", noiDung: "Một đơn vị tốt không chỉ “tiêu” mà còn “tích”: càng làm, kho gia tài chung càng dày lên. Mỗi điều bạn để lại hôm nay có thể là điểm tựa cho một đồng nghiệp mới ngày mai – cũng như cuốn sổ tay bạn đang cầm trên tay." },
        { loai: "voiBan", noiDung: "Trước khi bắt đầu một việc mới, dành 10 phút tra KMS, LMS, PACK hoặc hỏi một đồng nghiệp: “Việc này đã có ai làm chưa?”. Ngay tuần đầu, hãy hỏi đồng nghiệp đường dẫn và quyền truy cập các kho này. Làm xong, ghi lại ít nhất một điều cho người sau – mẫu biểu đã dùng, lỗi đã gặp hoặc mẹo đã rút ra – và gửi vào kho chung của đơn vị." }
      ]
    },
    {
      tieuDe: "EPIC – Collaboration: Dựng Cộng sự",
      tagline: "Đội ngũ cộng sự quanh phạm vi trách nhiệm của 1 cá nhân",
      khoi: [
        { loai: "doan", noiDung: "EPIC là viết tắt của <strong>Empowering People to create Impact through Collaboration</strong> – trao quyền cho con người để họ tạo ra tác động thật, bằng cách cùng làm." },
        { loai: "doan", noiDung: "EPIC là cách chúng ta làm việc cùng nhau trong một đội, gói gọn trong 4 chữ “cùng”:" },
        { loai: "the", the: [
          { ten: "E - Empowering", phuDe: "Cùng trao quyền", noiDung: "Ai được giao việc thì được tin tưởng để tự quyết trong phạm vi của mình, và được cấp đủ điều kiện để làm.",
            voiBan: "khi được giao việc, bạn được quyền quyết trong phần việc của mình. Không phải chuyện gì cũng cần xin ý kiến cấp trên." },
          { ten: "P - People", phuDe: "Cùng tiếp sức", noiDung: "Trong đội, không ai phải gồng một mình. Ai đang gặp khó thì nói ra, và sẽ có người cụ thể đứng cạnh hỗ trợ.",
            voiBan: "gặp khó khăn, cứ lên tiếng. Nói ra sớm là cách làm đúng, không phải dấu hiệu yếu kém." },
          { ten: "C – Collaboration", phuDe: "Cùng cộng tác", noiDung: "Mọi người nhìn chung một bức tranh: ai làm gì, ai cần gì từ ai. Khi chuyển việc cho người khác, phải chuyển đủ để họ làm tiếp được ngay.",
            voiBan: "khi nhận việc từ đồng nghiệp mà thấy còn thiếu thông tin, bạn có quyền hỏi lại cho đủ trước khi làm tiếp." },
          { ten: "I - Impact", phuDe: "Cùng tạo giá trị", noiDung: "Việc làm ra phải mang lại điều tốt thật cho đồng nghiệp, khách hàng, tổ chức và xã hội. Xong mỗi việc, đội rút ra một bài học để lần sau làm tốt hơn.",
            voiBan: "sau mỗi việc, hãy tự hỏi: việc này giúp được ai, và lần sau mình làm tốt hơn ở điểm nào?" }
        ] },
        { loai: "tieuDe", noiDung: "Năm phạm vi của một người trong đội – 5S" },
        { loai: "giupBan", noiDung: "biết rõ việc nào là của mình, mình được quyết tới đâu, và khi cần thì tìm ai – để không ôm việc, cũng không để việc bị treo." },
        { loai: "doan", noiDung: "Để mỗi người biết rõ vị trí của mình, EPIC xác định năm phạm vi:" },
        { loai: "bang",
          cot: ["Mã", "Phạm vi", "Trả lời câu hỏi"],
          rong: ["10%", "40%", "50%"],
          dong: [
            ["SOA",  "Scope of Ownership & Accountability – Phạm vi sở hữu và chịu trách nhiệm", "Nhiệm vụ của tôi là gì, tôi chịu trách nhiệm kết quả đến đâu? Đây là cam kết hai chiều, không chỉ là bản mô tả công việc."],
            ["SOC",  "Scope of Control – Phạm vi kiểm soát", "Những gì tôi được trực tiếp quyết định và điều phối?"],
            ["SOI",  "Scope of Influence – Phạm vi ảnh hưởng", "Những ai, những việc tôi tác động tới dù không trực tiếp quản lý?"],
            ["SOS",  "Scope of Support – Phạm vi hỗ trợ", "Ai đứng phía sau hỗ trợ để tôi làm tốt việc của mình?"],
            ["SOBC", "Scope of BC – Phạm vi của Hội đồng điều hành", "Ai phê chuẩn, trao, điều chỉnh phạm vi của tôi và nhận báo cáo từ tôi?"]
          ] },
        { loai: "chuThich", noiDung: "SOA là trung tâm. Bốn phạm vi còn lại giúp bạn biết mình được quyết đến đâu, tác động tới ai, được ai đỡ, và báo cáo lên đâu." },
        { loai: "voiBan", noiDung: "hãy xác định bản đồ chỗ đứng của bạn trong 2 tháng hội nhập:",
          dong: [
            "Việc của tôi là ___, và tôi chịu trách nhiệm kết quả ___. <b>(SOA)</b>",
            "Tôi được tự quyết ___. <b>(SOC)</b>",
            "Việc của tôi ảnh hưởng tới ___. <b>(SOI)</b>",
            "Khi cần, tôi được ___ hỗ trợ. <b>(SOS)</b>",
            "Tôi báo cáo và xin phê duyệt ở ___. <b>(SOBC)</b>"
          ],
          ghiChu: "Chỗ nào chưa điền được, hãy hỏi quản lý trực tiếp – đó chính là chỗ cần làm rõ sớm nhất." }
      ]
    },
    {
      tieuDe: "iLEAD – Leadership – Dựng chủ nhiệm",
      tagline: "Phát triển người làm chủ và người tiếp nối",
      khoi: [
        { loai: "doan", noiDung: "iLead nói về <strong>một con người – chính bạn</strong>. Chữ <strong>“i”</strong> viết thường và đứng đầu là có chủ ý: tự chủ được mình trước, rồi mới dẫn dắt được ai." },
        { loai: "giupBan", noiDung: "có sẵn một bộ câu tự hỏi để tự kiểm tra mình mỗi ngày, không cần đợi người khác nhắc." },
        { loai: "tieuDe", noiDung: "Bộ chữ iLEAD – năm tinh thần tự lực" },
        { loai: "bang",
          cot: ["Chữ", "Tinh thần", "Nghĩa là – và câu tự hỏi"],
          rong: ["7%", "24%", "69%"],
          dong: [
            ["i", "Tôi là chủ – tự chủ", "Tôi ý thức mình là chủ. Thấy một việc phù hợp năng lực và tạo giá trị, tôi chủ động đề xuất, làm rõ phạm vi rồi hành động.<br><em>Tôi đã bắt đầu, hay vẫn đang chờ?</em>"],
            ["L", "Lead – tự giác", "Tôi quan sát điều tổ chức cần, chủ động nhận việc cần thiết và tiếp sức đồng đội.<br><em>Tôi có nhìn thấy việc gì cần làm không?</em>"],
            ["E", "Empower – tự trao quyền", "Tôi tự tin nhận thẩm quyền đi kèm trách nhiệm, và trao tiếp phần quyền phù hợp cho cộng sự thay vì ôm việc.<br><em>Tôi đã trao đúng việc, đúng quyền chưa?</em><br><em>Với người mới: Tôi đã hỏi rõ mình được quyết đến đâu chưa?</em>"],
            ["A", "Accountable – tự chịu trách nhiệm", "Tôi chịu trách nhiệm đến cùng về đầu ra thực tế, không dùng nỗ lực để thay cho kết quả.<br><em>Tôi đang nói về kết quả, hay chỉ kể quá trình?</em>"],
            ["D", "Develop – tự phát triển", "Tôi liên tục nâng chuyên môn, tư duy quản trị và tạo điều kiện để cộng sự cùng trưởng thành.<br><em>Sau việc này, tôi và đồng đội tiến bộ điều gì?</em>"]
          ] },
        { loai: "tieuDe", noiDung: "5POA - Năm nếp nghề của người IPAG – rèn tinh thần iLead mỗi ngày" },
        { loai: "doan", noiDung: "Tinh thần không tự nhiên mà có. Nó được rèn qua <strong>nếp</strong> – những việc nhỏ làm đi làm lại mỗi ngày cho thành thói quen. Bạn sẽ dần hiểu và thực hành năm nếp này qua cách làm việc, phối hợp và học hỏi mỗi ngày:" },
        { loai: "danhSach", muc: [
          "<strong>① Trà Việt – giữ Tâm:</strong> quay về Tam Bảo (Hướng – Chuẩn – Nghề); bắt đầu mỗi việc từ chủ đích đúng; sống gắn kết, tôn trọng chuẩn mực, đội ngũ và sự sắp xếp của tổ chức.",
          "<strong>② La Bàn – giữ hướng:</strong> mỗi ngày tự soi bốn câu hỏi: <strong>iGo</strong> – tôi là ai, cần đi theo hướng nào? · <strong>iWork</strong> – tôi nhận trách nhiệm gì, góp giá trị vào chuỗi nào? · <strong>iLink</strong> – tôi cần kết nối với ai, được ai hỗ trợ? · <strong>iPerform</strong> – tôi tạo ra giá trị gì cho mình và cho công ty?",
          "<strong>③ Soi Sáng – nhìn lại để học:</strong> sau mỗi việc, dừng lại xem điều gì đã xảy ra, việc có đang đi đúng hướng không, và mình rút ra được gì.",
          "<strong>④ Cộng Sự – làm cùng nhau:</strong> thấy nhau, thông việc, cộng lực với đồng đội.",
          "<strong>⑤ Chủ Nhiệm – làm chủ đến cùng:</strong> một việc – một người chủ; đã nhận việc là làm tới nơi tới chốn."
        ] },
        { loai: "doan", noiDung: "Rèn đều năm nếp, bạn sẽ dần có <strong>Ngũ lực Tín · Tấn · Niệm · Định · Tuệ</strong> – điều bạn sẽ hiểu rõ hơn ở Phần III." },
        { loai: "voiBan", noiDung: "Chọn một nếp để bắt đầu ngay tuần đầu tiên. Ví dụ: đặt một lời nhắc cuối ngày, dành 5 phút trả lời bốn câu La Bàn vào một cuốn sổ nhỏ. Sau hai tuần, đọc lại – bạn sẽ thấy mình đã rõ hướng hơn thế nào." }
      ]
    }
  ],
  ketThuc: [
    { loai: "ghiNho", tieuDe: "Ghi nhớ nhanh", noiDung: "<strong>IPA cho ta CHIẾN LƯỢC – IPAC cho ta KIẾN TRÚC – IPAG giữ GIA TÀI – EPIC cho ta CỘNG SỰ – iLead cho ta NGƯỜI LÀM CHỦ.</strong>" }
  ],
  chuyenTiep: { toi: "phan-3", nut: "Sang Phần III" }
};


// --- 2.4. MODULE: PHẦN III — BẠN TRƯỞNG THÀNH Ở IPAG NHƯ THẾ NÀO? ---
const phan3Content = {
  nhan: "Phần III",
  tieuDe: "Bạn trưởng thành ở IPAG như thế nào?",
  moTa: "<em>Phần I cho bạn thấy IPA Group là ai. Phần II cho bạn thấy tổ chức được dựng ra sao. Phần III nói về điều quan trọng nhất: chính bạn sẽ lớn lên thế nào ở đây.</em>",
  cacMuc: [
    {
      tieuDe: "Làm nghề qua năm bước",
      tagline: "Khởi → Hành → Tinh → Thông → Chuyên",
      khoi: [
        { loai: "doan", noiDung: "Tại IPAG, hành trình làm nghề đi qua <strong>Khởi → Hành → Tinh → Thông → Chuyên</strong>:" },
        { loai: "the", kieu: "buoc", the: [
          { ten: "Khởi",   noiDung: "bắt đầu từ đúng tâm – hiểu vì sao mình làm và công việc mang lại giá trị gì." },
          { ten: "Hành",   noiDung: "biến điều đã hiểu thành hành động, làm tới nơi và có trách nhiệm với việc mình nhận." },
          { ten: "Tinh",   noiDung: "nhìn lại, tinh lọc và giữ lại những kinh nghiệm có giá trị." },
          { ten: "Thông",  noiDung: "chia sẻ, kết nối và phối hợp cùng cộng sự." },
          { ten: "Chuyên", noiDung: "từng bước làm chủ công việc, làm nghề vững vàng và có chiều sâu." }
        ] },
        { loai: "doan", noiDung: "<strong>Khởi đi trước Hành</strong> – hiểu đúng rồi mới bắt tay làm. Năm bước này lặp lại qua từng công việc, từng dự án. Mỗi vòng là một lần bạn tiến bộ hơn." },
        { loai: "giupBan", noiDung: "có một cách chia bất kỳ việc nào thành năm bước, để biết mình đang ở bước nào và bước tiếp theo là gì." },
        { loai: "voiBan", noiDung: "Lấy việc đầu tiên bạn được giao và đi đủ năm bước. <strong>Khởi</strong> – viết một câu về mục đích, người được phục vụ, kết quả cần đạt, rồi xác nhận với quản lý. <strong>Hành</strong> – làm và báo tiến độ đúng hẹn. <strong>Tinh</strong> – làm xong, ghi ba điều làm tốt và một điều sẽ làm khác. <strong>Thông</strong> – chia sẻ điều đó với Buddy hoặc đội. <strong>Chuyên</strong> – lần sau gặp việc tương tự, làm nhanh và chắc hơn." }
      ]
    },
    {
      tieuDe: "Gốc → Luyện → Quả",
      khoi: [
        { loai: "doan", noiDung: "Hành trình trưởng thành ở IPAG được diễn đạt bằng ba chặng." },
        { loai: "giupBan", noiDung: "biết mình đang rèn điều gì bên trong (Gốc), rèn bằng cách nào (Luyện), và tiến bộ sẽ hiện ra thế nào (Quả) – thay vì chỉ đo mình bằng số việc đã làm." },
        { loai: "tieuDe", noiDung: "Gốc – xây nền tảng cho mình" },
        { loai: "danhSach", muc: [
          "<strong>Tâm:</strong> chân thành, quan tâm đến người khác và mong muốn làm điều đúng.",
          "<strong>Tầm:</strong> nhìn rộng hơn phần việc trước mắt, hiểu việc của mình trong mục tiêu chung.",
          "<strong>Trí:</strong> học hỏi, suy nghĩ thấu đáo và tìm cách giải quyết vấn đề.",
          "<strong>Hạnh:</strong> thể hiện điều mình tin qua cách ứng xử và hành động.",
          "<strong>Nguyện:</strong> có điều tốt đẹp muốn theo đuổi và bền bỉ cam kết với điều đó."
        ] },
        { loai: "tieuDe", noiDung: "Luyện – rèn qua công việc hằng ngày" },
        { loai: "doan", noiDung: "Bạn không cần một lớp học riêng để rèn: chính công việc hằng ngày là nơi luyện. Cụ thể: đi đủ năm bước làm nghề với mỗi việc, giữ đều ít nhất một nếp (như La Bàn 5 phút cuối ngày), hỏi người cùng nghề khi vướng, và nhìn lại sau mỗi việc để điều chỉnh." },
        { loai: "tieuDe", noiDung: "Quả – Ngũ lực, sự vững vàng" },
        { loai: "doan", noiDung: "Quá trình rèn luyện bồi đắp cho bạn năm năng lực, gọi là <strong>Ngũ lực</strong>:" },
        { loai: "danhSach", muc: [
          "<strong>Tín:</strong> niềm tin vào những giá trị đúng đắn mình theo đuổi.",
          "<strong>Tấn:</strong> bền bỉ nỗ lực, không dễ bỏ cuộc khi gặp khó.",
          "<strong>Niệm:</strong> chú tâm vào việc đang làm, nhớ điều quan trọng để không lệch hướng.",
          "<strong>Định:</strong> giữ tập trung và bình tĩnh trước khó khăn, xao nhãng.",
          "<strong>Tuệ:</strong> hiểu vấn đề sâu hơn, biết phân biệt và chọn cách làm phù hợp."
        ] },
        { loai: "doan", noiDung: "Trưởng thành không chỉ là làm được nhiều việc hơn, mà là <strong>hiểu rõ hơn, hành động có trách nhiệm hơn và vững vàng hơn</strong> trong công việc." },
        { loai: "voiBan", noiDung: "Cuối mỗi tuần, chọn một trong năm Gốc (Tâm, Tầm, Trí, Hạnh, Nguyện) và tự hỏi: “Tuần này mình đã thể hiện điều đó ở việc cụ thể nào?”. Ghi lại một ví dụ. Sau vài tuần, những ví dụ ấy cho bạn thấy mình đang vững lên ở đâu – và là chất liệu tốt cho những buổi trao đổi với quản lý hay iCare." }
      ]
    }
  ],
  ketThuc: [
    { loai: "doan", noiDung: "Tại IPAG, mỗi người, mỗi đơn vị như một tế bào trong một cơ thể sống. Mỗi tế bào khỏe thì cả cơ thể khỏe: cùng bồi đắp nền tảng, cùng thực hành những nếp chung, cùng phát triển Ngũ lực." },
    { loai: "doan", noiDung: "Vì thế, công việc của bạn không đứng riêng lẻ. Cách bạn làm việc, phối hợp và giữ cam kết đều góp phần tạo nên chất lượng của tổ chức. <strong>Khi mỗi người vững vàng hơn, cả tổ chức cũng vững vàng hơn.</strong>" },
    { loai: "voiBan", noiDung: "Mỗi ngày, giữ trọn một lời hứa nhỏ: trả lời đúng hẹn, giao việc đúng giờ, báo sớm khi có vướng mắc. Giữ chữ tín trong việc nhỏ là cách nhanh nhất để một tế bào khỏe – và để đồng đội tin bạn." },
    { loai: "ghiNho", icon: "lightbulb", noiDung: "<strong>Sổ tay này chỉ là tấm bản đồ tổng quan.</strong> Từng phần sẽ được giới thiệu kỹ hơn trong hành trình Be-on. Bạn không cần nhớ hết hôm nay – chỉ cần nắm được bức tranh lớn." }
  ]
};


// --- 2.4. MODULE: LỘ TRÌNH 60 NGÀY ---
const loTrinhContent = {
  tieuDe: "Lộ trình 60 ngày hội nhập",
  moTa: "Ở IPAG, hội nhập không phải là quá trình làm quen với quy trình — mà là hành trình định vị bản sắc, xây dựng kết nối và tạo ra tác động thực. Mỗi người được nhìn nhận là một nguồn lực có trí tuệ, có năng lực tự thân — và lộ trình 60 ngày là không gian để bạn chứng minh điều đó.",
  // Nội dung theo file "Tuần 1 (1).txt" (03/11/2026)
  giaiDoan: [
    {
      mocThoiGian: "Tuần 1",
      tieuDe: "Đón nhận",
      icon: "compass",
      mauNhan: "navy",
      moTaNgan: "Đặt nền móng: hiểu IPAG, hiểu vai trò, gặp đội ngũ.",
      hoatDong: [
        "Làm quen đội ngũ đồng hành qua Nếp Trà Việt",
        "Đọc Thư Gia tài và Sổ tay hội nhập: hệ sinh thái IPAG và bức tranh giai đoạn hội nhập",
        "Làm rõ vai trò, phạm vi trách nhiệm (SOA) cùng quản lý trực tiếp",
        "Hội nhập trực tiếp về văn hóa và thiết kế tổ chức cùng IP",
        "Xây dựng kế hoạch làm việc (Onboarding Plan) (mốc 30 – 60 ngày)"
      ]
    },
    {
      mocThoiGian: "Tuần 2 đến 4",
      tieuDe: "Thấu hiểu",
      icon: "users-round",
      mauNhan: "orange",
      moTaNgan: "Hiểu sâu, kết nối, tạo output đầu tiên.",
      hoatDong: [
        "Tham gia Company Onboarding và Job Onboarding trên hệ thống Elearning",
        "On-job training, mentor và coaching 1-1 cùng quản lý trực tiếp, Buddy: hệ thống, quy trình, sản phẩm, năng lực vị trí",
        "Gặp gỡ, hòa nhập cùng cộng sự làm việc",
        "Thực hiện những nhiệm vụ đầu tiên theo kế hoạch, tạo output đầu tiên",
        "Thực hành năm nếp nghề (5PoA), nhận diện điều đã rõ và điều cần hỗ trợ"
      ]
    },
    {
      mocThoiGian: "Tháng 2",
      tieuDe: "Thực hành",
      icon: "rocket",
      mauNhan: "steel",
      moTaNgan: "Tìm nhịp riêng: tối ưu hiệu suất, ghi dấu giá trị.",
      hoatDong: [
        "Tiếp tục thực hiện nhiệm vụ theo kế hoạch đã thống nhất",
        "Trải nghiệm 3 nếp sống của IPAG, bắt đầu bằng chạm Anvie",
        "Tham gia dự án OC",
        "Thực hiện báo cáo hội nhập (Onboarding report) và xây dựng IDP (kế hoạch phát triển cá nhân) cho giai đoạn tiếp theo"
      ]
    }
  ]
};

// --- 2.5. MODULE: QUY ĐỊNH NHÂN SỰ ---
// Schema mới: theoKhoi (optional, ở TRÊN) + chung (bắt buộc, ở DƯỚI).
// Hiện tại chưa có nội dung riêng theo SBU/Khối — chỉ dùng phần `chung`.
// Khi cần customize: thêm nội dung vào theoKhoi[SBU][khoi] = { tieuDe, dienGiai, cacMuc: [...] }
const quyDinhContent = {
  tieuDe: "Quy định nhân sự",
  moTa: "Để đảm bảo quyền lợi tối đa cho cá nhân và cùng nhau xây dựng một môi trường làm việc chuyên nghiệp, mọi thành viên mới cần đọc kỹ, nắm vững và tuân thủ các quy định nền tảng dưới đây:",

  // --- PHẦN RIÊNG THEO SBU × KHỐI ---
  // Chuẩn bị cho customize sau. Ví dụ pattern (chưa kích hoạt):
  // theoKhoi: {
  //   IPAG: {
  //     kinhDoanh: {
  //       tieuDe: "Quy định riêng Khối Kinh doanh IPAG",
  //       dienGiai: "Các quy định bổ sung dành riêng cho khối kinh doanh...",
  //       cacMuc: [ { icon, tieuDe, noiDung, linkNgoai } ]
  //     }
  //   }
  // }
  theoKhoi: {},

  // --- PHẦN CHUNG — áp dụng cho mọi SBU ---
  chung: {
    cacMuc: [
      {
        icon: "scroll-text",
        tieuDe: "Nội quy lao động",
        noiDung: "Văn bản pháp lý nền tảng quy định rõ ràng về quyền lợi, nghĩa vụ, kỷ luật lao động cũng như các hình thức khen thưởng tại công ty.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/noi-quy-lao-dong.5b654a75-9a9b-4ac1-a670-ea2143f0b6c2",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "building-2",
        tieuDe: "Quy định làm việc tại văn phòng",
        noiDung: "Hướng dẫn chi tiết về thời gian biểu, tác phong làm việc, văn hóa ứng xử nội bộ và trách nhiệm giữ gìn không gian làm việc chung.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/quy-dinh-lam-viec-tai-van-phong.a19e8b85-db16-443b-aaed-4eee50af6d02",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "gift",
        tieuDe: "Chính sách Đãi ngộ & Phúc lợi",
        noiDung: "Cẩm nang toàn diện về cơ chế tính lương – thưởng, lịch chi trả, các gói bảo hiểm sức khỏe, phụ cấp và các chế độ phúc lợi khác mà bạn được hưởng.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/folder/luong-thuong-va-phuc-loi",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "laptop",
        tieuDe: "Hướng dẫn sử dụng Phần mềm Nhân sự",
        noiDung: "Hệ thống quản lý thông tin nhân sự cốt lõi của mỗi Cán bộ Nhân viên (CBNV). Bạn cần truy cập vào hệ thống này để:<ul><li>Tra cứu, cập nhật thông tin cá nhân và thông tin gia đình.</li><li>Theo dõi thông tin hợp đồng lao động, quá trình công tác và lương.</li><li>Kiểm tra thời gian làm việc, quản lý ngày phép và thực hiện các thao tác đăng ký nghỉ phép, báo cáo công tác hoặc đăng ký làm thêm giờ (OT).</li></ul>",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/phan-mem-bizzone_-he-thong-quan-ly-thong-tin-ca-nhan-cua-cbnv.3120bfff-49dc-474c-981f-ccd85ac14699",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "lock-keyhole",
        tieuDe: "Nguyên tắc bảo mật thông tin",
        noiDung: "Bộ nguyên tắc bắt buộc nhằm bảo mật thông tin nội bộ, dữ liệu khách hàng và tài sản số của doanh nghiệp, giúp CBNV nâng cao ý thức bảo an trong quá trình làm việc.",
        linkNgoai: {
          url: "https://dpolicy.ipam.vn/#/tim-kiem?referenceId=641c18879178057c673e7c4d&activeTab=1",
          tieuDeNut: "Truy cập tại đây"
        }
      }
    ]
  }
};

// --- 2.6. MODULE: MẠNG LƯỚI ĐỒNG HÀNH ---
const nguonLucContent = {
  tieuDe: "Mạng lưới đồng hành",
  moTa: "Ở IPA Group, bạn không phải tự mình tìm mọi câu trả lời. Tam Bảo là ba điểm tựa luôn có đó để bạn quay về: COL giữ HƯỚNG, COP giữ CHUẨN, COE giữ NHỊP NGHỀ. Mạng lưới đồng hành là những người cụ thể quanh bạn — một bên đồng hành cùng bạn lớn lên, một bên đồng hành cùng bạn làm việc mỗi ngày.",
  // Những người đồng hành — 2 nhóm × 2 vai trò (theo slide "Những người đồng hành cùng bạn", 03/11/2026)
  // nhom.kieu: "nen" = thẻ nền màu (nhóm có mặt từ ngày đầu) · "vien" = thẻ viền (nhóm đồng hành trong công việc)
  dongHanh: {
    tieuDe: "Những người đồng hành cùng bạn",
    phuDe: "Bạn không đi một mình",
    nhom: [
      {
        nhan: "Có mặt từ ngày đầu",
        kieu: "nen",
        vaiTro: [
          { icon: "heart-handshake", tieuDe: "IP (iLead Partner)", noiDung: "iCare là người đi cùng bạn suốt hành trình nhà, giúp bạn hòa nhập được vào văn hóa, lắng nghe, nâng đỡ và mở cơ hội để bạn phát triển." },
          { icon: "route",           tieuDe: "HRBP (TAM)",         noiDung: "Đồng hành về luồng việc, đảm bảo bạn tìm được chỗ đứng đúng trong tổ chức, và giữ cho mọi quyền lợi của bạn được đảm bảo." }
        ]
      },
      {
        nhan: "Đồng hành cùng bạn trong công việc",
        kieu: "vien",
        vaiTro: [
          { icon: "user-round-plus", tieuDe: "Người bạn đồng hành", noiDung: "Hỗ trợ bạn làm quen với môi trường làm việc và cách vận hành công việc hằng ngày." },
          { icon: "briefcase",       tieuDe: "Quản lý trực tiếp",   noiDung: "Xây dựng mục tiêu, nhiệm vụ công việc quản lý trực tiếp công việc của bạn." }
        ]
      }
    ]
  },
  // Đầu mối khác — dạng accordion
  dauMoiKhac: {
    tieuDe: "Đầu mối hỗ trợ khác",
    danhSach: [
      {
        ma: "CnB",
        tenDayDu: "CnB (Compensation & Benefits)",
        moTa: "Phụ trách chế độ đãi ngộ, lương thưởng, bảo hiểm, phúc lợi cho nhân viên IPAG.",
        email: "(Đầu mối liên hệ theo SBU — vui lòng tham khảo Quản lý trực tiếp)",
        mauNhan: "navy"
      },
      {
        ma: "IP",
        tenDayDu: "IP (iLead Partner)",
        moTa: "Phụ trách Đào tạo và Phát triển năng lực.",
        // Đầu mối riêng theo SBU — engine tự lọc theo SBU đã chọn ở màn welcome.
        // Cách thêm/sửa: mỗi SBU là 1 mảng, mỗi người là 1 dòng { ten, email }.
        dauMoiTheoSBU: {
          IPAG:  [ { ten: "Ms Hoàn Trần",       email: "hoan.tranthu@ipam.vn" } ],
          VNDS:  [ { ten: "Ms Mai Hoàng",      email: "mai.vuhoang@ipam.vn" },
                   { ten: "Ms Thu Hương",      email: "huong.nguyenthu13@ipam.vn" } ],
          PTI:   [ { ten: "Ms Trần Thu Hằng",  email: "hang.tranthu@ipam.vn" },
                   { ten: "Ms Phạm Hiếu Ngân", email: "ngan.phamhieu@ipam.vn" } ],
          IPAS:  [ { ten: "Ms Phạm Hiếu Ngân", email: "ngan.phamhieu@ipam.vn" } ],
          ANVIE: [ { ten: "Ms Hoàn Trần",      email: "hoan.tranthu@ipam.vn" } ]
        },
        // Dự phòng: hiện khi SBU chưa được khai báo ở trên
        email: "huong.nguyenthu13@ipam.vn",
        mauNhan: "orange"
      }
    ]
  },
  // Nền tảng — giữ như cũ
  nenTang: {
    tieuDe: "Hệ sinh thái Nền tảng (Platforms)",
    danhSach: [
      { icon: "monitor-play", tieuDe: "Elearning (LMS)", moTa: "Nền tảng học tập trực tuyến. Nơi bạn tham gia các khoá học theo lộ trình, theo dõi tiến độ và hoàn thành các bài đánh giá năng lực. <br><em>Lưu ý: LMS hiện chưa hỗ trợ trên điện thoại — vui lòng truy cập bằng máy tính.</em>",
        linkNgoai: { url: "https://id.ipas.com.vn/login?redirect-app=elearning-web", tieuDeNut: "Truy cập tại đây" },
        tieuDeDauMoi: "Đầu mối hỗ trợ kỹ thuật &amp; hệ thống LMS",
        dauMoiHoTro: [
          { ten: "Mr Nguyễn Sỹ Đắc",    email: "dac.nguyensy@ipam.vn" },
          { ten: "Mr Trương Minh Đức",  email: "duc.truongminh@ipam.vn" }
        ] },
      { icon: "database",      tieuDe: "KMS",             moTa: "Kho tri thức tập đoàn (Knowledge Management System). Nơi lưu trữ, chia sẻ các tài liệu nghiệp vụ, thư viện số và bài viết chuyên môn từ chuyên gia IPAG.",
        linkNgoai: { url: "https://kms.ivnd.com.vn/", tieuDeNut: "Truy cập tại đây" } },
      { icon: "file-text",     tieuDe: "Dpolicy",         moTa: "Cổng tra cứu chính sách, quy trình, quy định nội bộ. Đảm bảo mọi hoạt động vận hành luôn tuân thủ đúng quy chuẩn của tập đoàn.",
        linkNgoai: { url: "https://dpolicy.ipam.vn/#/dang-nhap?targetUrl=%2F", tieuDeNut: "Truy cập tại đây" } },
      { icon: "check-square",  tieuDe: "iLead Platform",           moTa: "Hệ thống trình duyệt điện tử. Nơi bạn khởi tạo, đề xuất và phê duyệt các yêu cầu, tờ trình, hợp đồng thay cho giấy tờ truyền thống.",
        linkNgoai: { url: "https://ilead.ipam.vn/", tieuDeNut: "Truy cập tại đây" } }
    ]
  }
};

// --- 2.7. MODULE: TỪ ĐIỂN THUẬT NGỮ ---
// Nguồn: "Glossary_IPAG_15102026_ban_chinh_sua_v4_1.docx" — thay hoàn toàn bản cũ (03/11/2026).
// Chia 5 nhóm theo 5 bộ công cụ (IPA · IPAC · IPAG · EPIC · iLead), giữ đúng thứ tự trong file gốc.
// Thêm thuật ngữ: thêm 1 dòng { term, tenDayDu, def } vào đúng nhóm. "def" cho phép HTML (<strong>, <em>, <ul><li>).
// Lưu ý: tên bộ "IPAM" trong file gốc đã đổi thành "IPAC" theo quyết định 03/11/2026 (riêng "IPAM Session" giữ nguyên).
const glossaryData = {
  nguon: "Glossary IPAG — bản chỉnh sửa ngày 18/10/2026 (v4.1)",
  nhom: [
    {
      ten: "PHẦN I: IPA",
      muc: [
        { term: "IPA", tenDayDu: "Chiến lược & Tam bảo", def: "Là bộ khung thiết kế để dựng chiến lược cho tổ chức và dựng Tam bảo cho đội ngũ CBNV" },
        { term: "IPAway", tenDayDu: "", def: "Phương pháp nhìn rõ một sự việc bao gồm 3 chữ, ba câu hỏi cần trả lời trước mỗi việc:<ul><li><strong>Intention – Chủ đích</strong>: Ý nghĩa/mục đích thực sự của sự việc/hành động</li><li class=\"sub\"><em>Trả lời câu hỏi: Việc này để làm gì? Cho ai? Động cơ cốt lõi là gì?</em></li><li><strong>Presence – Hiện diện:</strong> Hiện diện trọn vẹn trong công việc và quan sát hiện trạng như nó đang là</li><li class=\"sub\"><em>Trả lời câu hỏi: Hiện trạng thực sự của sự việc đang như thế nào? Tôi có đang hiện diện, toàn tâm toàn ý cho công việc này không?</em></li><li><strong>Awareness – Tỉnh thức:</strong> Nhận biết được cơ hội và thách thức, các bước công việc mình cần thực hiện</li><li class=\"sub\"><em>Trả lời câu hỏi: Việc này có cơ hội gì? Thách thức như thế nào? Bước tiếp theo cần làm gì</em></li></ul>" },
        { term: "Tam bảo", tenDayDu: "", def: "Ba “điểm tựa” để mỗi người quay về khi gặp vướng mắc trong công việc bao gồm COL (Center of Leadership) - COP (Center of Practice) - COE (Center of Excellence)" },
        { term: "COL", tenDayDu: "Center of Leadership", def: "Đội ngũ lãnh đạo, đóng vai trò GIỮ HƯỚNG. CBNV tìm đến COL khi chưa rõ về định hướng của việc, ai là người quyết định.<ul><li><em>Câu tự hỏi: Việc này theo hướng nào? Ai đang dẫn tôi?</em></li></ul>" },
        { term: "COP", tenDayDu: "Center of Practice", def: "Bao gồm bộ Tứ quy, bộ chuẩn mực quản trị, bộ chuẩn mực thiết kế tổ chức và bộ chiến lược 5P, đóng vai trò GIỮ CHUẨN. CBNV tìm đến khi chưa rõ làm thế nào là đúng? Chuẩn mực nào cần tuân thủ?<ul><li><em>Câu tự hỏi: Công việc này cần tuân theo quy định, chuẩn mực nào? Tôi đã tìm hiểu trước khi thực hiện chưa?</em></li></ul>" },
        { term: "COE", tenDayDu: "Center of Excellence", def: "Đồng nghiệp, đóng vai trò GIỮ NHỊP NGHỀ. CBNV tìm đến khi chưa rõ cách làm, cần người cùng nghề hỗ trợ.<ul><li><em>Câu tự hỏi: Ai trong nghề đã làm việc này? Tôi có thể hỏi ai?</em></li></ul>" },
        { term: "5P", tenDayDu: "", def: "Là khung dựng chiến lược phát triển bao gồm (khung của bộ IPA, thuộc PCKSA):<ul><li><strong>Strategy as Position – Định vị</strong>: Mình tạo ra giá trị gì và người nhận là ai?</li><li><strong>Strategy as Perspective – Thương hiệu</strong>: Mình muốn được nhìn nhận như thế nào?</li><li><strong>Strategy as Pattern of Action - Nếp làm việc</strong>: Mình xây dựng thói quen, nếp làm việc nào?</li><li><strong>Strategy as Principle – Nguyên tắc:</strong> Các nguyên tắc mình bắt buộc cần giữ khi thực hiện công việc</li><li><strong>Strategy as Plan – Kế hoạch:</strong> Kế hoạch hành động cụ thể để kéo được 4P phía trên khớp nhau</li></ul>" },
        { term: "5A", tenDayDu: "", def: "Trong Strategy as Principle, 5A là bộ chuẩn mực nguyên tắc ứng xử khi người IPAG chạm tới khách hàng. Bao gồm:<ul><li><strong>Accessible - Dễ tiếp cận:</strong> Điểm chạm dịch vụ/sản phẩm dễ tìm, dễ vào, và dễ hiểu</li><li><strong>Advocacy - Bảo vệ lợi ích khách hàng:</strong> Đặt lợi ích thực của khách hàng lên đầu tiên</li><li><strong>Authentic - Chân thật:</strong> Giữ đúng lời hứa, đúng chất lượng và giá trị đã tuyên bố</li><li><strong>Accommodative – Toàn diện:</strong> Giải pháp toàn diện, lắng nghe và linh hoạt điều chỉnh để đáp ứng đúng nhu cầu của khách hàng</li><li><strong>Affordable - Hợp lý:</strong> Đem lại giá trị vượt trội tương xứng với chi phí khách hàng bỏ ra</li></ul>" },
        { term: "PCKSA", tenDayDu: "Năm khung thiết kế của năm bộ", def: "PCKSA là tên gọi tắt của năm khung thiết kế, mỗi bộ một khung: 5P (IPA), 5C (IPAC), 5K (IPAG), 5S (EPIC) và 5PoA (iLead). Năm bộ nối nhau thành một vòng đi từ Khởi (IPA dựng chiến lược) → Hành (IPAC dựng nhà) → Tinh (IPAG dựng gia tài) → Thông (EPIC dựng cộng sự) → Chuyên (iLead dựng chủ nhiệm). Mỗi khung có năm phần, và phần thứ n của khung nào cũng giữ nhịp thứ n của vòng ấy." }
      ]
    },
    {
      ten: "PHẦN II: IPAC",
      muc: [
        { term: "IPAC", tenDayDu: "Dựng nhà và vận hành", def: "Là bộ khung thiết kế để dựng ngôi nhà năng lực cho tổ chức/từng đơn vị/cá nhân bao gồm 5 đốt:<ul><li>Đốt 1 - Móng: Plan – Định hướng kế hoạch hành động</li><li>Đốt 2 - Nền: Capability – living – xây năng lực và xây chuỗi việc</li><li>Đốt 3 - Cội: HWG – Dựng cội nguồn phát triển theo 3 tầng</li><li>Đốt 4 - Cột: 4 trục vận hành GTM – VCO – BIS – CG</li><li>Đốt 5 - Nóc: BC – thấy toàn cảnh để ra quyết định</li></ul>" },
        { term: "5C", tenDayDu: "Five Conducts of Action", def: "Khung của bộ IPAC: năm đốt Móng – Nền – Cội – Cột – Nóc nối nhau thành một ngôi nhà năng lực (xem 5 đốt ở trên). Mỗi đốt được giữ bằng một lực: Móng – Tín, Nền – Tấn, Cội – Niệm, Cột – Định, Nóc – Tuệ." },
        { term: "FC", tenDayDu: "Functional chain", def: "Luồng nhiệm vụ vận hành thường xuyên, ổn định và diễn ra hàng ngày (business as usual)" },
        { term: "OC", tenDayDu: "Opportunity chain", def: "Luồng nhiệm vụ thực hiện các dự án cải tiến, đổi mới, phát triển mang tính chiến lược và có thời hạn nhất định. OC là nơi nhân sự vượt ra khỏi phạm vi FC của mình để tạo ra các giá trị mới." },
        { term: "HWG", tenDayDu: "", def: "Tháp 3 tầng Health – Wealth – Grow là kiến trúc được áp dụng cho mọi chủ thể từ người làm nghề (CBNV), đến các SBU, BU, CU trong tập đoàn, đến khách hàng. Tháp HWG là 3 tầng nuôi dưỡng sự phát triển bền vững của tổ chức, sản phẩm và con người.<ul><li><strong>H (Health - NUÔI / Sống Khỏe):</strong> Trí tuệ sống: độ ổn định, sức khỏe vận hành và chất lượng đội ngũ (đo bằng chỉ số GMI).</li><li><strong>W (Wealth - TÍCH / Sống Giàu):</strong> Trí tuệ làm nghề: tính năng sản phẩm, dữ liệu, tài sản hữu hình &amp; vô hình tích lũy được (đo bằng chỉ số BMI).</li><li><strong>G (Grow - TUỆ / Sống Vui):</strong> Sự trưởng thành về trí tuệ, khả năng tạo tác động và truyền lại cho thế hệ sau (đo bằng KPI/CMI).</li></ul>" },
        { term: "GTM", tenDayDu: "Go to market", def: "GTM là trục hướng ra thị trường, chịu trách nhiệm cho tăng trưởng, tiếp cận khách hàng mới và mở rộng cơ hội kinh doanh" },
        { term: "VCO", tenDayDu: "Value Chain Operation", def: "VCO là trục phụ trách vận hành và đồng hành cùng khách hàng. Nếu GTM giúp có được khách hàng, thì VCO đảm bảo phục vụ khách hàng tốt" },
        { term: "BIS", tenDayDu: "Business Intelligence Solution", def: "Trục hỗ trợ quản trị và ra quyết định thông qua hệ thống dữ liệu, thông tin." },
        { term: "CG", tenDayDu: "Capability Guardian", def: "Trục bảo vệ năng lực của tổ chức, xuyên suốt toàn bộ SBU trong IPAG Group — hiện gồm EPIC, FINCON, CGC, SAS, CCS" },
        { term: "SBU", tenDayDu: "Strategic Business Unit", def: "Công ty thành viên (một pháp nhân) trong IPAG Group. Bên trong mỗi SBU gồm các BU (đơn vị kinh doanh) và CU (đơn vị năng lực)." },
        { term: "BC", tenDayDu: "Business Committee", def: "Hội đồng điều hành, cơ quan ở cấp một công ty thành viên (SBU), nơi ra quyết định, ký duyệt và giữ nhịp tháng, quý, năm cho các SBU" },
        { term: "BU", tenDayDu: "Business Unit", def: "Đơn vị kinh doanh trực tiếp ra thị trường, có tự chủ kinh tế và tự chịu trách nhiệm Lãi / Lỗ (P&amp;L)" },
        { term: "CU", tenDayDu: "Capability Unit", def: "Đơn vị chuyên trách năng lực (như Nhân sự, Tài chính, IT, Pháp chế...), không giữ P&amp;L, tạo ra năng lực để cho các BU “mượn”:" },
        { term: "GMI", tenDayDu: "Grow Maturity Indicators", def: "Bộ chỉ số đo trí tuệ sống: mức độ một cá nhân thực sự sống ba nếp sống ANVIE – VNDGO – PTICARE, tức là người đó có thực sự trải nghiệm dịch vụ/sản phẩm và hiểu được trí tuệ của ba nếp sống này không?" },
        { term: "AMI", tenDayDu: "Awareness Maturity Indicators", def: "Chỉ số thuộc bộ chỉ số GMI, đo mức độ một cá nhân thực sự sống nếp sống ANVIE" },
        { term: "VMI", tenDayDu: "Value Maturity Indicators", def: "Chỉ số thuộc bộ chỉ số GMI, đo mức độ một cá nhân thực sự sống nếp sống VNDGO" },
        { term: "PMI", tenDayDu: "Protection Maturity Indicators", def: "Chỉ số thuộc bộ chỉ số GMI, đo mức độ một cá nhân thực sự sống nếp sống PTICARE" },
        { term: "BMI", tenDayDu: "Business Maturity Indicators", def: "Là bộ chỉ số đo trí tuệ làm nghề, tức độ trưởng thành nghề nghiệp của một cá nhân, người ấy làm nghề tới đâu, có đủ năng lực để được trao phạm vi lớn hơn chưa." },
        { term: "KPI", tenDayDu: "Key Performance Indicators", def: "Là thước đo kết quả thực thi công việc thực tế trong một kỳ, được giao trong FC và đo theo 4 mặt FCPL:<ul><li><strong>F (Financial):</strong> Chỉ tiêu Tài chính / Thu nhập thuần</li><li><strong>C (Client):</strong> Chỉ tiêu Khách hàng</li><li><strong>P (Product):</strong> Chỉ tiêu Sản phẩm / Dịch vụ</li><li><strong>L (Lead):</strong> Chỉ tiêu Dẫn dắt / Tự quản bản thân &amp; đội ngũ</li></ul>" },
        { term: "OKR", tenDayDu: "Objective and Key results", def: "Chỉ số đánh giá kết quả thực thi OC" },
        { term: "TDSCP", tenDayDu: "", def: "Là 5 chiều đo (5 chỉ số) trong BMI bao gồm:<ul><li><strong>T – Trust:</strong> Niềm tin vào tổ chức</li><li><strong>D – Depth:</strong> Độ sâu của chuyên môn bao gồm Kỹ năng (Skill) và năng lực tạo ra sản phẩm có giá trị thực tế (Delivery)</li><li><strong>S – Scope of Accountability</strong>: Phạm vi chịu trách nhiệm thực tế của 1 cá nhân</li><li><strong>C – Connection reach</strong>: Tầm kết nối của một cá nhân gồm SOC – SOI – SOS</li><li><strong>P – Performance</strong>: Độ chín, hiệu suất làm việc qua KPI</li></ul>" },
        { term: "ERC", tenDayDu: "Engage – Respect – Collaboration", def: "Là bộ thước đo niềm tin (chỉ số T trong TDSCP) của nhân sự đối với tổ chức. Bộ ba này được cấu thành từ 3 họ hành vi có thể quan sát và đo lường được:<ul><li><strong>E – Engage (Dấn thân):</strong> Sự chủ động bước vào công việc, tự nhận nhiệm vụ chưa ai nhận mà không đợi được giao.</li><li><strong>R – Respect (Tôn trọng kỷ luật):</strong> Sự tuân thủ nếp làm việc, giữ đúng chuẩn mực và cam kết với tổ chức ngay cả khi không có người giám sát.</li><li><strong>C – Collaboration (Cộng tác):</strong> Thói quen chủ động hợp tác, hỗ trợ đồng nghiệp để công việc chung nhẹ đi.</li></ul>" }
      ]
    },
    {
      ten: "PHẦN III: IPAG",
      muc: [
        { term: "IPAG", tenDayDu: "Gia tài và Tri thức", def: "IPAG là bộ khung thiết kế phục vụ việc đóng gói và lưu giữ kho tri thức, tài sản vô hình để sử dụng, lưu chuyển &amp; kế thừa trong tập đoàn." },
        { term: "5K (IPAG_5K)", tenDayDu: "khung gia tài của IPAG", def: "Khung của bộ IPAG, nơi nhà giữ lại những gì đã làm xong để người đến sau mượn lại dùng: KMS (tài liệu chuẩn để phát hành), LMS (đào tạo), RUN (tài liệu chạy việc hằng ngày), CB (ngân hàng năng lực) và SP (nền tảng dùng chung)." },
        { term: "KMS", tenDayDu: "Knowledge Management System", def: "Hệ thống lưu trữ toàn bộ văn bản, quy trình, tài liệu đã được chuẩn hóa để phát hành dùng chung trong tổ chức" },
        { term: "LMS", tenDayDu: "Learning Management System", def: "Hệ thống tổ chức, quản lý và theo dõi hoạt động học tập và đào tạo" },
        { term: "CB", tenDayDu: "Capability Bank", def: "Ngân hàng năng lực - bộ chuẩn năng lực Tập đoàn, các công ty thành viên (SBU), các BU, CU cần. Ngân hàng năng lực sẽ bao gồm các năng lực mà tổ chức chúng ta tự có và các năng lực mà chúng ta cần đi thuê hoặc mượn từ bên ngoài" },
        { term: "SP", tenDayDu: "Shared Platform", def: "Nền tảng Dùng chung bao gồm các công cụ, hạ tầng dùng chung cho nhiều công ty/đơn vị trong tập đoàn." },
        { term: "IPAG Way", tenDayDu: "", def: "Là phương pháp tạo dòng chảy tri thức trong tập đoàn, để tri thức không bị \"thất thoát\" khi nhân sự chuyển giao hay nghỉ việc, IPAG Way vận hành theo đúng 5 động tác:<ul><li><strong>Tích (Gom kinh nghiệm):</strong> Thu thập dữ liệu, cách làm hay từ thực tế công việc.</li><li><strong>Đãi (Lọc vàng bỏ rác):</strong> Sàng lọc lấy những bài học tinh túy nhất.</li><li><strong>Chuẩn (Đóng gói):</strong> Biên soạn thành mẫu biểu, quy trình chuẩn mực.</li><li><strong>Trao (Truyền nghề):</strong> Đào tạo, chuyển giao lại cho đồng nghiệp.</li><li><strong>Mở (Lan tỏa):</strong> Chia sẻ giá trị ra toàn hệ thống và cộng đồng.</li></ul>" }
      ]
    },
    {
      ten: "PHẦN IV: EPIC",
      muc: [
        { term: "EPIC", tenDayDu: "Cộng sự và đội ngũ", def: "<strong>EPIC</strong> là viết tắt của câu tiếng Anh: <em>Empowering People to Create Impact through Collaboration</em> (Trao quyền cho mọi người để tạo ra tác động thông qua cộng tác)<br>EPIC là văn hóa và nếp làm việc cộng sự thông qua 4 cùng:<ul><li><strong>E (Empowering – CÙNG TRAO QUYỀN):</strong> Giao việc đi kèm với quyền quyết định tương ứng — <em>không giao việc rồi giữ lại quyền quyết</em></li><li><strong>P (People – CÙNG TIẾP SỨC):</strong> Đưa thêm lực và đội ngũ vào hỗ trợ khi đồng nghiệp thiếu — <em>tiếp sức là đỡ vào, không phải làm hộ</em></li><li><strong>I (Impact – CÙNG TẠO GIÁ TRỊ):</strong> Đo lường thành công bằng tác động thực tế để lại cho người nhận/khách hàng</li><li><strong>C (Collaboration – CÙNG CỘNG TÁC):</strong> Làm việc cùng nhau là mặc định — <em>làm một mình là ngoại lệ cần có lý do</em></li></ul>" },
        { term: "5S", tenDayDu: "bản đồ cộng sự", def: "5S bản đồ cộng sự của một cá nhân. Khi một cá nhân được giao SOA, cần bắt buộc phải dựng kèm một đội cộng sự (working team) bao gồm: SOA – SOC – SOI – SOS – SOBC. 5S là khung của bộ EPIC, thuộc PCKSA." },
        { term: "SOA", tenDayDu: "Scope of Ownership and Accountability", def: "Phạm vi nhiệm vụ cụ thể mà một cá nhân làm chủ và chịu trách nhiệm đầu ra" },
        { term: "SOI", tenDayDu: "Scope of Influence", def: "Nhóm liên quan trực tiếp đến luồng nhiệm vụ của bạn — có thể là bên phối hợp cộng tác hoặc chịu ảnh hưởng trực tiếp từ kết quả; thường là các bên trong cùng một chuỗi nhiệm vụ hoặc đầu mối liên quan." },
        { term: "SOC", tenDayDu: "Scope of Control", def: "Nguồn lực mà tổ chức cung cấp cho bạn để đảm nhiệm nhiệm vụ cụ thể" },
        { term: "SOS", tenDayDu: "Scope of Support", def: "Nguồn lực mà tổ chức cung cấp để hỗ trợ bạn khi thực hiện nhiệm vụ — nhóm này bao gồm COL của bạn" },
        { term: "SOBC", tenDayDu: "Scope of BC", def: "Line báo cáo lên Hội đồng điều hành (BC) khi công việc bị tắc hoặc vượt quá thẩm quyền tự quyết" },
        { term: "FV", tenDayDu: "Functional Value", def: "Năng lực chuyên môn cốt lõi mà một đơn vị (tập đoàn, SBU, BU, CU) cần" },
        { term: "FVH", tenDayDu: "Functional Value House", def: "“Ngôi nhà sự nghiệp” chứa nhiều FV để chăm sóc và nuôi dưỡng của một CBNV đạt tiêu chuẩn iLead" },
        { term: "COE Lead", tenDayDu: "", def: "COE Lead là người giữ nhịp trưởng thành, hòa nhập vào văn hóa, và thấu hiểu thiết kế tổ chức của các cá nhân trong cùng một COE. Mỗi COE giữ một Job Family (họ nghề theo giá trị) của một trục: DC (Direct Client) ở GTM, PS (Product Specialist) ở VCO, BE (Business Engineering) ở BIS, CG (Capability Guardian) ở CG. COE Lead dẫn Job Family đó: giữ BMI của từng người, đường nghề và nền ERC; không quyết công việc hằng ngày của người đó." },
        { term: "FD", tenDayDu: "Functional Domain", def: "Miền nghề - nhóm các chức năng và nhiệm vụ chuyên môn có liên quan, cùng tuân theo một chuẩn để thực hiện một mục tiêu cụ thể trong tổ chức" },
        { term: "FD Lead", tenDayDu: "", def: "Người giữ chuẩn nghề cho đội ngũ, là người chịu trách nhiệm về chuẩn chuyên môn cho một miền nghề trong IPAG." },
        { term: "FSC", tenDayDu: "Functional Standard of Capability", def: "Bộ tiêu chuẩn năng lực chuyên môn của một nghề, thể hiện những kiến thức và năng lực mà một nghề cần biết dựa trên các thực hành tốt nhất (best practice)" },
        { term: "FCH", tenDayDu: "FC Head", def: "Là người đứng đầu trọn một chuỗi vận hành (FC), chăm luồng việc trong FC và chịu trách nhiệm về Outcomes &amp; Business Impact (OB) của FC." },
        { term: "OCH", tenDayDu: "OC Head", def: "Là người đứng đầu trọn một OC, chăm luồng việc trong OC từ lúc mở đến lúc đóng và chịu trách nhiệm về OKR của OC" },
        { term: "FCO", tenDayDu: "FC Owner", def: "Người chủ nhiệm một ô việc (FVC) trong một chuỗi vận hành FC. FCO chịu trách nhiệm làm ra Output Making (OM)" },
        { term: "FVC", tenDayDu: "Functional Value Cell", def: "Là một “ô việc” trong một chuỗi công việc thuộc FC. Mỗi ô cần một năng lực cụ thể để làm ra một kết quả rõ ràng." },
        { term: "OPD", tenDayDu: "One Person Delegation", def: "Nguyên tắc “mỗi việc, một người chịu trách nhiệm chính.” Nhận phạm vi trách nhiệm (SOA) nào, bạn là người duy nhất chịu trách nhiệm chính về kết quả của phạm vi ấy, và tự lo nguồn lực để làm cho được: kết nối đúng người, nhờ bên ngoài, giao lại một phần việc. Muốn mở thêm nhiệm vụ ngoài phạm vi đã nhận thì phải xin và giải trình" }
      ]
    },
    {
      ten: "PHẦN V: iLEAD",
      muc: [
        { term: "iLead", tenDayDu: "Chủ nhiệm và tự chủ", def: "iLead là Người làm nghề tự chủ, hình mẫu mà mỗi CBNV làm việc tại IPAG hướng tới để trở thành, bao gồm:<ul><li><strong>I - TỰ CHỦ:</strong> Tự giác làm chủ công việc, không thụ động đợi ai giao mới làm.</li><li><strong>L - LEAD – Tự dẫn dắt :</strong> Lãnh đạo bản thân trước khi dẫn dắt người khác</li><li><strong>E - EMPOWER – Tự trao quyền:</strong> Biết nhận quyền tự quyết và sẵn sàng chia sẻ/trao lại quyền cho đồng nghiệp.</li><li><strong>A - ACCOUNTABLE – Tự chịu trách nhiệm:</strong> Chịu trách nhiệm tới cùng về kết quả thực tế, không chỉ báo cáo nỗ lực.</li><li><strong>D - DEVELOP – Tự phát triển:</strong> Bản thân tự lớn lên và giúp những người xung quanh cùng trưởng thành.</li></ul>" },
        { term: "5PoA", tenDayDu: "Five Patterns of Action", def: "Năm nếp làm nghề của người IPAG bao gồm (khung 5PoA của bộ iLead, thuộc PCKSA). Mỗi nếp là một việc làm đi làm lại, đếm được; mỗi nếp luyện một gốc (Tâm, Tầm, Trí, Hạnh, Nguyện) và cho ra một lực (Tín, Tấn, Niệm, Định, Tuệ):<ul><li>Nếp Trà Việt (PoA ① IPA): nếp khởi đầu đúng tâm (nhịp Khởi) — gốc Tâm, luyện lực Tín. Công cụ: Tam bảo (COL – COP – COE) để biết tìm ai, tra gì khi vướng; đo bằng ERC.</li><li>Nếp La Bàn (PoA ② Compass): nếp tự định vị công việc hằng ngày (nhịp Hành) — gốc Tầm, luyện lực Tấn. Công cụ: bộ La Bàn 4 kim iGo – iWork – iLink – iPerform; đo bằng TDSCP.</li><li>Nếp Soi sáng (PoA ③ IPAX): nếp nhìn lại để học và giữ lại tinh hoa (nhịp Tinh) — gốc Trí, luyện lực Niệm. Công cụ: SBI (soi một sự việc), TAC (soi một luồng việc trong FC), CAT (soi một người làm việc trong OC); đo bằng BMI và GMI.</li><li>Nếp Cộng sự (PoA ④ EPIC): nếp cùng làm, cùng gánh (nhịp Thông) — gốc Hạnh, luyện lực Định. Công cụ: 4 cùng của EPIC (trao quyền – tiếp sức – tạo giá trị – cộng tác) và đội cộng sự 5S.</li><li>Nếp Chủ nhiệm (PoA ⑤ iLead): nếp làm chủ một việc từ đầu đến kết quả (nhịp Chuyên) — gốc Nguyện, luyện lực Tuệ. Công cụ: iLead (Tự chủ – Lead – Empower – Accountable – Develop) và nguyên tắc OPD; đo bằng BMI/IMI, KPI, OKR.</li></ul>" },
        { term: "iLead Compass (La Bàn)", tenDayDu: "", def: "Bộ La Bàn 4 kim giúp mỗi cá nhân tự định vị công việc hằng ngày. Bốn kim là công cụ của nếp La Bàn (nếp thứ hai trong 5PoA ở mục trên): mỗi người tự đọc đủ bốn kim mỗi ngày, kim nào chưa đọc được thì khai ra. Mỗi kim được đọc ở hai mặt, người tự soi và hệ thống đọc ra, và hai mặt phải cho cùng một câu trả lời. Bốn kim gồm:<ul><li><em>iGo:</em> Tôi là ai và đi về hướng nào? Đủ khi: nói được mình là ai trong nhà này, không chỉ bằng chức danh.</li><li><em>iWork:</em> Tôi nhận trách nhiệm gì và đóng góp giá trị ra sao? Đủ khi: chỉ ra được chuỗi (FC/OC) mình đóng góp vào và kết quả mình chịu, không chỉ kể một danh sách việc.</li><li><em>iLink:</em> Tôi kết nối với ai và ai là người đồng hành/hỗ trợ tôi? Đủ khi: gọi tên được ai đỡ mình và mình đỡ ai, cả theo chiều ngang giữa các đồng nghiệp.</li><li><em>iPerform:</em> Tôi tạo ra giá trị gì cho bản thân và tổ chức? Đủ khi: nói được giá trị mình tạo ra cho cả mình lẫn công ty, thiếu một vế là chưa đủ. iPerform đọc cùng lúc trí tuệ (BMI, GMI), KPI và OKR nhưng không gộp thành một con số.</li></ul>" },
        { term: "SBI", tenDayDu: "", def: "Khuôn mẫu dùng để quan sát và ghi nhận trọn vẹn một sự việc (vấn đề) đã xảy ra:<ul><li><strong>Situation</strong>: Tình huống cụ thể xảy ra</li><li><strong>Behavior:</strong> Hành vi cụ thể đã thực hiện</li><li><strong>Impact:</strong> Tác động thực tế của hành vi</li></ul>" },
        { term: "TAC", tenDayDu: "Transform – Amplify – Continue", def: "Khuôn mẫu nhận diện một luồng việc trong FC, giúp FC team nhìn lại chu kỳ công việc qua 3 chiều:<ul><li><strong>T — Transform</strong>: chỉ ra điểm tắc nghẽn hoặc cách làm cũ đang cản trở hiệu quả, đề xuất hướng thay đổi.</li><li><strong>A — Amplify</strong>: nhận diện điểm tích cực, điểm mạnh chưa được củng cố; tổng hợp các SBI đủ điều kiện mở IPAM Session.</li><li><strong>C — Continue:</strong> ghi nhận nếp làm việc hiệu quả cần phát huy, đảm bảo tri thức được đóng gói và hệ thống hoá.</li></ul>" },
        { term: "CAT", tenDayDu: "Connect with Heart - Added Value - Transfer with Excellence", def: "Khuôn mẫu nhận diện một người làm việc trong OC<ul><li><strong>C – Connect with Heart:</strong> Người này có dốc lòng làm việc/kết nối bằng trái tim không?</li><li><strong>A – Added Value:</strong> Người này có tạo ra thêm giá trị không?</li><li><strong>T – Transfer with Excellence:</strong> Người này đã để lại được gia tài gì?</li></ul>" }
      ]
    }
  ]
};


// --- 2.8. MODULE: FAQ ---
// Bộ FAQ tổng hợp (07/2026) — 6 nhóm, mỗi câu có q (câu hỏi) + a (câu trả lời).
const faqData = [
  {
    nhom: "Phần 1 — Tổng quan & Lộ trình đào tạo hội nhập",
    cacCau: [
      { q: "LMS là gì và vì sao tôi cần học trên LMS?", a: "LMS (Learning Management System) là hệ thống học tập trực tuyến chính thức của tổ chức, giúp CBNV học tập thuận tiện, được ghi nhận kết quả và gắn với lộ trình phát triển năng lực." },
      { q: "Khi nào tôi nhận được thông báo hướng dẫn về việc tham gia đào tạo Hội nhập?", a: "Trong ngày thứ 2 khi gia nhập, thông báo về hướng dẫn tham gia đào tạo Hội nhập sẽ được bộ phận Đào tạo gửi đến email nội bộ của bạn." },
      { q: "Việc học trên LMS có bắt buộc không?", a: "Có. Với các khóa học được phân công, CBNV cần hoàn thành đúng hạn theo yêu cầu đào tạo của đơn vị." },
      { q: "LMS có thay thế hoàn toàn lớp học truyền thống không?", a: "Không. LMS được sử dụng song song với đào tạo tập trung hoặc online, tùy từng chương trình." },
      { q: "Khóa học trên LMS được phân như thế nào và tôi cần tham gia bao nhiêu khóa trong thời gian hội nhập?", a: "Các khóa học được phân theo vị trí công việc, chương trình bắt buộc, lộ trình phát triển hoặc đăng ký tự chọn. Trong thời gian hội nhập, bạn cần hoàn thành các khóa học theo lộ trình sau:<ul><li><strong>Toàn bộ nhân viên mới:</strong> bắt buộc hoàn thành các khóa học trong lộ trình <em>Company Onboarding</em>.</li><li><strong>Nếu bạn thuộc khối Kinh doanh:</strong> bắt buộc hoàn thành thêm các khóa học trong lộ trình <em>Job Onboarding</em>.</li><li>Ngoài ra, sẽ có các khóa học phát sinh theo thời điểm và sẽ có thông báo gửi tới email của bạn.</li></ul>" },
      { q: "Tôi có thể tự chọn thêm khóa học để học không?", a: "Có. Ngoài khóa bắt buộc, bạn có thể đăng ký các khóa tự chọn trong thư viện học tập." },
      { q: "Kết quả học trên LMS được sử dụng để làm gì?", a: "Để ghi nhận kết quả quá trình đào tạo hội nhập, đánh giá năng lực và phục vụ phát triển nghề nghiệp cho CBNV." }
    ]
  },
  {
    nhom: "Phần 2 — Đăng nhập và quản lý tài khoản",
    cacCau: [
      { q: "Tôi đăng nhập hệ thống bằng cách nào và thông tin tài khoản là gì?", a: "<strong>Cách truy cập:</strong> vào đường link hệ thống E-learning (LMS): <a href='https://lms.ipam.vn/' target='_blank' rel='noopener'>https://lms.ipam.vn/</a><ul><li><strong>Tên đăng nhập:</strong> là user do công ty cấp. Quy tắc: luôn bắt đầu bằng <strong>pti\\</strong> (nếu CBNV thuộc Tổng Công ty Cổ phần Bảo hiểm Bưu điện) hoặc <strong>ipa\\</strong> (đối với CBNV thuộc các công ty khác). <em>Ví dụ: pti\\hoan.tran hoặc ipa\\huong.nguyenthu13</em>.</li><li><strong>Mật khẩu:</strong> là mật khẩu đăng nhập Email/Dlink công ty.</li></ul>" },
      { q: "Tôi quên mật khẩu hoặc không đăng nhập được thì làm sao?", a: "Bạn vui lòng chọn chức năng <strong>«Quên mật khẩu»</strong> tại màn hình đăng nhập hoặc liên hệ trực tiếp với bộ phận đào tạo/đầu mối quản trị hệ thống để được hỗ trợ cấp lại quyền truy cập." },
      { q: "Tôi có bắt buộc học bằng máy tính và mạng nội bộ tại công ty không? Có học bằng điện thoại được không?", a: "Không bắt buộc học tại công ty. Bạn hoàn toàn có thể học trên máy tính cá nhân/laptop và mạng wifi/3G/4G tại bất kỳ đâu. Bạn cũng có thể học bằng điện thoại di động, tuy nhiên học bằng máy tính/laptop sẽ ổn định và dễ thao tác hơn." },
      { q: "Tôi có thể dùng chung tài khoản với người khác không?", a: "Không. Mỗi tài khoản gắn liền với một CBNV duy nhất để ghi nhận kết quả học tập theo cá nhân đó." }
    ]
  },
  {
    nhom: "Phần 3 — Phương pháp học và tiến độ học tập",
    cacCau: [
      { q: "Tôi có cần học theo đúng thứ tự bài không?", a: "Tùy thuộc vào từng khóa học. Một số khóa học sẽ có yêu cầu bắt buộc học tuần tự từng bài thì mới được ghi nhận hoàn thành." },
      { q: "Tôi có thể học ngắt quãng hay phải học liên tục? Hệ thống có tự động lưu tiến độ không?", a: "Bạn hoàn toàn có thể học ngắt quãng, tạm dừng và quay lại học tiếp vào thời điểm khác. Hệ thống sẽ tự động lưu lại tiến độ học tập trước đó của bạn." },
      { q: "Làm thế nào để được tính là «Hoàn thành» một khóa học cụ thể?", a: "Bạn cần đảm bảo đồng thời <strong>02 điều kiện</strong> sau:<ul><li><strong>Xem hết/đủ nội dung bắt buộc:</strong> xem toàn bộ nội dung, không tua nhanh và không chuyển tab trong quá trình học. Hệ thống sẽ kiểm tra bất kỳ bằng câu hỏi <em>«Bạn có đang học không?»</em>. Nếu học viên không tương tác kịp trong <strong>5 giây</strong>, tiến độ học vừa rồi sẽ tự động bị hủy và hệ thống quay trở lại màn hình chính.</li><li><strong>Hoàn thành bài kiểm tra:</strong> làm các bài quiz và bài kiểm tra cuối khóa đạt từ <strong>80 điểm trở lên</strong>.</li></ul>" },
      { q: "Làm thế nào để được tính là tôi đã «Hoàn thành» các lộ trình đào tạo hội nhập?", a: "Bạn cần đảm bảo <strong>hoàn thành toàn bộ</strong> các khóa học thuộc lộ trình đã được gửi (ví dụ: hoàn thành hết các khóa trong Company Onboarding hoặc Job Onboarding)." },
      { q: "Tôi có được cấp chứng nhận sau khóa học không?", a: "Có. Đối với các khóa học đủ điều kiện và có thiết lập chứng nhận, bạn sẽ được nhận chứng nhận và lưu trữ trực tiếp trên hệ thống." },
      { q: "Tôi có thể xem lại bài học đã hoàn thành không?", a: "Có. Bạn có thể chủ động xem lại video và tài liệu học tập bất cứ lúc nào cần." }
    ]
  },
  {
    nhom: "Phần 4 — Xử lý lỗi và các trường hợp thường gặp",
    cacCau: [
      { q: "Nếu tôi đã làm hết số lần thi cho phép nhưng chưa đạt điểm tối thiểu để hoàn thành thì phải làm sao?", a: "Tùy thuộc vào quy định của từng khóa học, bạn có thể thực hiện xin mở thêm lượt thi nếu có giải trình lí do hợp lý.<br>Hướng dẫn thao tác tại link: <a href='https://kms.ipas.com.vn/document/NmFmYWQ0MWYtZjhlYi00NTU4LWFlM2EtMTJhOTgyYWE5YTI5?tmp=dHJ1ZQ==&tmp2=cGRm' target='_blank' rel='noopener'>Hướng dẫn xin mở thêm lượt thi</a><br>Tuy nhiên, bạn lưu ý nên học thật kỹ lại nội dung kiến thức trước khi làm lại bài thi." },
      { q: "Tôi thao tác sai trên hệ thống thì có ảnh hưởng đến kết quả không?", a: "Không. Bạn hoàn toàn có thể học lại và thực hiện thao tác lại theo đúng hướng dẫn." },
      { q: "Tôi gặp lỗi video không chạy hoặc bị giật/lag thì xử lý thế nào?", a: "Bạn hãy kiểm tra lại kết nối Internet, tiến hành tải lại trang (F5) hoặc thử đổi sang trình duyệt khác (hệ thống ưu tiên tối ưu trên Google Chrome)." },
      { q: "Tôi đã học xong rồi nhưng hệ thống không ghi nhận trạng thái hoàn thành?", a: "Bạn cần kiểm tra lại các yếu tố sau:<ul><li>Đã xem hết nội dung, không tua nhanh, không chuyển tab và đã phản hồi kịp thời (trong 5 giây) các câu hỏi kiểm tra bất ngờ của hệ thống trong lúc học.</li><li>Đã hoàn thành đầy đủ bài kiểm tra/quiz theo đúng điểm số yêu cầu (từ 80 điểm trở lên).</li></ul>" }
    ]
  },
  {
    nhom: "Phần 5 — Đầu mối liên hệ & hỗ trợ",
    cacCau: [
      { q: "Tôi có thể liên hệ đầu mối nào để được hỗ trợ vấn đề liên quan đến kỹ thuật và hệ thống LMS?", a: "Bạn có thể liên hệ bộ phận đào tạo, kênh hỗ trợ LMS được công bố trên hệ thống hoặc liên hệ trực tiếp các đầu mối quản trị hệ thống sau:<ul><li><strong>Mr Nguyễn Sỹ Đắc</strong> — dac.nguyensy@ipam.vn</li><li><strong>Mr Trương Minh Đức</strong> — duc.truongminh@ipam.vn</li></ul>" },
      { q: "Tôi có thể liên hệ đầu mối nào để hỏi thông tin về lộ trình và chuyên môn đào tạo hội nhập?", a: "Bạn vui lòng liên hệ đầu mối phụ trách theo SBU tương ứng:<ul><li><strong>Đơn vị PTI:</strong> Ms Phạm Hiếu Ngân — ngan.phamhieu@ipam.vn — 0963 278 246</li><li><strong>Các SBU còn lại:</strong> Ms Nguyễn Thu Hương — huong.nguyenthu13@ipam.vn — 0366 737 557</li></ul>" }
    ]
  },
  {
    nhom: "Phần 6 — Câu hỏi liên quan CnB (Chế độ & Phúc lợi)",
    cacCau: [
      { q: "Tôi có thắc mắc về hợp đồng lao động, bảo hiểm và lương thưởng thì liên hệ ai?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được hỗ trợ các nội dung liên quan đến Hợp đồng lao động, tiền lương, thưởng, BHXH, BHYT, BHTN, thuế TNCN và các chế độ phúc lợi.<br><br>Ngoài ra, tham khảo các bộ phận khác tại <a href='https://kms.ipas.com.vn/post/danh-ba-dau-moi-ho-tro-doi-ngu.a02852dd-15de-4ef4-bfc9-8c5c11cdbe8f' target='_blank' rel='noopener'>Danh bạ đầu mối hỗ trợ đội ngũ</a>." },
      { q: "Thời gian làm việc chính thức tại công ty là từ mấy giờ?", a: "Thời gian làm việc thông thường:<ul><li><strong>Thứ Hai đến Thứ Sáu:</strong> từ 08h30 đến 17h30.</li><li><strong>Nghỉ giữa ca:</strong> từ 12h00 đến 13h00, không tính vào thời giờ làm việc.</li><li><strong>Sáng Thứ Bảy:</strong> làm việc khi có phát sinh và theo thông báo của Công ty/Đơn vị.</li></ul>Tùy theo tính chất công việc, một số vị trí hoặc đơn vị có thể áp dụng thời gian làm việc khác. Tuy nhiên, thời gian làm việc được bố trí theo quy định của Công ty, không quá 10 giờ/ngày và 44 giờ/tuần." },
      { q: "Trong thời gian thử việc tôi có được nghỉ phép không?", a: "Trong thời gian thử việc, Anh/Chị chưa được sử dụng ngày phép năm. Sau khi hoàn thành thử việc và ký Hợp đồng lao động chính thức với Công ty, Anh/Chị được sử dụng phép năm theo quy định; số ngày phép tương ứng với thời gian thử việc sẽ được ghi nhận bổ sung vào quỹ phép." },
      { q: "Quy trình đánh giá thử việc thực hiện trên hệ thống nào?", a: "Anh/Chị thực hiện quy trình đánh giá thử việc trên hệ thống <strong>iLead</strong> theo thông báo và hướng dẫn của Công ty.<br><br>Khi đến kỳ đánh giá, Anh/Chị cần chủ động hoàn thành nội dung tự đánh giá và phối hợp với Quản lý trực tiếp để hoàn tất quy trình đúng thời hạn." },
      { q: "Máy nhận diện khuôn mặt không nhận ra tôi, tôi phải báo cho ai?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được kiểm tra và hỗ trợ cập nhật thông tin nhận diện khuôn mặt.<br><br>Ngoài ra, tham khảo các bộ phận khác tại <a href='https://kms.ipas.com.vn/post/danh-ba-dau-moi-ho-tro-doi-ngu.a02852dd-15de-4ef4-bfc9-8c5c11cdbe8f' target='_blank' rel='noopener'>Danh bạ đầu mối hỗ trợ đội ngũ</a>." },
      { q: "Ngày chi trả lương của công ty?", a: "Thực hiện chi trả lương theo kỳ thanh toán áp dụng với từng công ty, cụ thể:<ul><li>Ngày cuối cùng của tháng; hoặc</li><li>Ngày đầu tiên của tháng kế tiếp; hoặc</li><li>Ngày mùng 05 hằng tháng.</li></ul>Trong một số trường hợp, thời điểm chi trả có thể được điều chỉnh sớm hoặc muộn hơn theo kế hoạch thực tế của Công ty, nhưng không quá 07 ngày làm việc so với thời điểm chi trả theo quy định." },
      { q: "Nếu ngày đầu tiên đi làm tôi chưa kịp chuẩn bị hồ sơ nhân sự thì thời gian chậm nhất để nộp hồ sơ là khi nào?", a: "Trong trường hợp chưa có/chưa đầy đủ hồ sơ, Anh/Chị vui lòng hoàn thành trong vòng <strong>1 tuần làm việc</strong>.<br><br><strong>Đầu mối tiếp nhận hồ sơ:</strong> Bộ phận C&amp;B, VP 95 Trần Thái Tông, Cầu Giấy, Hà Nội." },
      { q: "Khi nào tôi được tham gia BHXH, BHYT, BHTN tại công ty?", a: "Sau khi hoàn thành thử việc và ký Hợp đồng lao động chính thức với Công ty, Anh/Chị được báo tăng tham gia BHXH, BHYT, BHTN theo quy định.<br><br>Ngoài ra, các chế độ phúc lợi khác Anh/Chị tham khảo tại: <a href='https://id.ipas.com.vn/login?redirect-app=kms' target='_blank' rel='noopener'>KMS — Kho tri thức tập đoàn</a>." },
      { q: "Nếu thông tin trên hợp đồng lao động bị sai, tôi cần liên hệ ai để điều chỉnh?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được kiểm tra và hỗ trợ cập nhật thông tin." }
    ]
  }
];


/* =============================================================================
   PHẦN 3: NỘI DUNG MODULE THEO SBU
   ============================================================================= */

// --- 3.1. MODULE ĐÀO TẠO ---
const daoTaoData = {
  intro: {
    tieuDe: "Chương trình đào tạo hội nhập",
    moTa: "<strong style=\"color: var(--orange);\">Lộ trình học tập bên dưới áp dụng cho nhân sự mới. Với nhân sự cũ đã hoàn thành lộ trình Onboarding, khuyến khích học tập để cập nhật kiến thức mới.</strong><br><br>Click vào nút <em>Tới lớp học LMS</em> để hệ thống tự động chuyển hướng sang LMS.",
    luuY: "Hệ thống LMS hiện chưa hỗ trợ học trên điện thoại. Bạn vui lòng mở các khoá học bằng <strong>máy tính / laptop</strong> để đảm bảo quá trình học và kết quả được ghi nhận đầy đủ.",
    mucTieu: "Trang bị cho bạn kiến thức nền tảng về IPAG Group, văn hoá tập đoàn, hệ sinh thái sản phẩm và kỹ năng nghiệp vụ.",
    quyDinh: "Hoàn thành đầy đủ tất cả khoá học trong lộ trình đào tạo là một trong những điều kiện để được xác nhận đạt yêu cầu thử việc."
  },

  // Company Onboarding — schema: chung (mọi SBU) + theoSBU (khoá bổ sung riêng)
  // Cách thêm khoá riêng cho 1 SBU: thêm key SBU vào theoSBU với mảng khoá học.
  companyOnboarding: {
    // Khoá học áp dụng cho MỌI SBU
    chung: [
      { ten: "SAS - An ninh, Tuân thủ & Giám sát", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/0df99e1a-8c1c-428b-9bd2-f464e397dabc", batBuoc: true },
      { ten: "Code of conduct_V2", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/650f453a-589e-4d3a-beba-ba8080392e5a", batBuoc: true },
      { ten: "Nhận thức An ninh thông tin", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/2b1fdadd-f439-4215-afe4-842f955d09e5", batBuoc: true },
      { ten: "IPAG Company profile", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/564d0b72-ce29-4a85-9788-0c4551abb60a", batBuoc: true },
      { ten: "IPAG Compass - La bàn sự nghiệp T6.2026", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/a419ddc9-b38d-4c39-b49a-47d533c71e92", batBuoc: true }
    ],
    // Khoá bổ sung riêng theo SBU — hiển thị NGAY SAU danh sách chung
    theoSBU: {
      VNDS: [
        { ten: "Thông tin chung về VNDS", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/54e6eb9c-241a-4e5f-98a1-f900374cd7f2", batBuoc: true }
      ],
      PTI: [
        { ten: "Thông tin chung về PTI", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/c9b1bdfd-dda5-48de-b506-925aec69cecb", batBuoc: true }
      ]
      // IPAG, IPAS, ANVIE: chưa có khoá bổ sung riêng -> chỉ hiện danh sách chung
    }
  },

  // Job Onboarding — TẠM THỜI ĐỂ TRỐNG cho mọi SBU/khối.
  // Engine tự hiển thị uiText.daoTaoEmptyJob khi không có khoá học.
  // Khi có nội dung: thêm lại theo mẫu theoKhoi[SBU][khoi] = [ { ten, moTa, lmsUrl, batBuoc } ]
  jobOnboarding: {
    theoKhoi: {}
  }
};


/* =============================================================================
   PHẦN 4: TIPS / MẸO THEO MODULE
   ============================================================================= */
const globalTips = {
  // Ba phần của Sổ tay dùng chung 1 tip
  'phan-1': {
    tieuDe: "Không cần nhớ hết hôm nay",
    noiDung: "**Sổ tay này chỉ là tấm bản đồ tổng quan.** Từng phần sẽ được giới thiệu kỹ hơn trong hành trình Be-on. Bạn không cần nhớ hết hôm nay – chỉ cần nắm được bức tranh lớn.\n\nCó thể bạn sẽ gặp vài cách gọi còn lạ như “Tam Bảo”, “dựng nền”, “xây nếp”. Bạn chưa cần nhớ hết ngay. Hãy xem đó là những điểm tựa giúp chúng ta hiểu nhau và cùng làm việc.\n\n- Gặp thuật ngữ lạ → tra ở mục **Từ điển thuật ngữ**.\n- Mỗi mục có dòng **Với bạn** — chọn một việc làm được ngay trong tuần."
  },
  'phan-2': {
    tieuDe: "Không cần nhớ hết hôm nay",
    noiDung: "**Sổ tay này chỉ là tấm bản đồ tổng quan.** Từng phần sẽ được giới thiệu kỹ hơn trong hành trình Be-on. Bạn không cần nhớ hết hôm nay – chỉ cần nắm được bức tranh lớn.\n\nCó thể bạn sẽ gặp vài cách gọi còn lạ như “Tam Bảo”, “dựng nền”, “xây nếp”. Bạn chưa cần nhớ hết ngay. Hãy xem đó là những điểm tựa giúp chúng ta hiểu nhau và cùng làm việc.\n\n- Gặp thuật ngữ lạ → tra ở mục **Từ điển thuật ngữ**.\n- Mỗi mục có dòng **Với bạn** — chọn một việc làm được ngay trong tuần."
  },
  'phan-3': {
    tieuDe: "Không cần nhớ hết hôm nay",
    noiDung: "**Sổ tay này chỉ là tấm bản đồ tổng quan.** Từng phần sẽ được giới thiệu kỹ hơn trong hành trình Be-on. Bạn không cần nhớ hết hôm nay – chỉ cần nắm được bức tranh lớn.\n\nCó thể bạn sẽ gặp vài cách gọi còn lạ như “Tam Bảo”, “dựng nền”, “xây nếp”. Bạn chưa cần nhớ hết ngay. Hãy xem đó là những điểm tựa giúp chúng ta hiểu nhau và cùng làm việc.\n\n- Gặp thuật ngữ lạ → tra ở mục **Từ điển thuật ngữ**.\n- Mỗi mục có dòng **Với bạn** — chọn một việc làm được ngay trong tuần."
  },
  'lo-trinh': {
    tieuDe: "Mẹo vượt qua 60 ngày hội nhập xuất sắc",
    noiDung: "1. **Chủ động:** Đừng đợi Quản lý giao việc. Hãy hỏi 'Em có thể hỗ trợ gì thêm không?'.\n2. **Ghi chép:** Luôn mang theo sổ tay trong các buổi hướng dẫn — áp dụng SBI: ghi lại tình huống (Situation), hành vi (Behavior), tác động (Impact).\n3. **Báo cáo định kỳ:** Tự tóm tắt những gì học được vào cuối mỗi tuần và gửi nhanh cho Buddy / quản lý trực tiếp.\n4. **Thực hành 5PoA:** nhận diện điều gì đã rõ và điều gì còn cần hỗ trợ, rồi trao đổi với IP."
  },
  'dao-tao': {
    tieuDe: "Cách tự kiểm tra tiến độ LMS",
    noiDung: "Sau khi học xong một khoá trên LMS, bạn nên tự kiểm tra xem khoá đã được tính hoàn thành chưa thay vì chờ thông báo.\n\n1. Vào khoá học bất kỳ trên LMS\n2. Chọn tab **Kết quả học tập**\n3. Kiểm tra cột trạng thái của các phần **Bắt buộc**.",
    anh: "images/chung/huong-dan-lms-v2.jpg"
  },
  'quy-dinh': {
    tieuDe: "Lưu ý sống còn về Bảo mật",
    noiDung: "Thói quen nhỏ, lợi ích lớn:\n- Luôn bấm **Windows + L** để khoá màn hình mỗi khi rời khỏi chỗ ngồi (dù chỉ đi lấy nước).\n- Không chụp ảnh màn hình chứa dữ liệu nội bộ gửi qua Zalo / Facebook cá nhân.\n- Không cài phần mềm lạ — mọi yêu cầu cài đặt phải qua IT Service Desk."
  },
  'nguon-luc': {
    tieuDe: "Nguyên tắc 'Hỏi đúng người'",
    noiDung: "- Văn hoá, hoà nhập, cơ hội phát triển → Hỏi **IP (iLead Partner)**.\n- Chỗ đứng trong tổ chức, luồng việc, quyền lợi → Hỏi **HRBP**.\n- Môi trường làm việc, cách vận hành hằng ngày → Hỏi **Người bạn đồng hành**.\n- Mục tiêu, nhiệm vụ công việc → Hỏi **Quản lý trực tiếp**.\n- Hợp đồng, lương, bảo hiểm, chế độ → Hỏi **CnB**.\n- Lỗi kỹ thuật LMS → **Mr Nguyễn Sỹ Đắc** (dac.nguyensy@ipam.vn) hoặc **Mr Trương Minh Đức** (duc.truongminh@ipam.vn).\n- Lộ trình đào tạo hội nhập → PTI: **Ms Phạm Hiếu Ngân** (ngan.phamhieu@ipam.vn); SBU khác: **Ms Nguyễn Thu Hương**."
  },  'glossary': {
    tieuDe: "Cách dùng từ điển hiệu quả",
    noiDung: "Từ điển chia làm 5 nhóm theo 5 bộ công cụ trong Phần II của Sổ tay:\n- **IPA** — chiến lược & Tam bảo (5P, 5A, COL, COP, COE...)\n- **IPAC** — dựng nhà & vận hành (FC, OC, HWG, GTM, BMI, KPI...)\n- **IPAG** — gia tài & tri thức (5K, KMS, LMS, CB...)\n- **EPIC** — cộng sự & đội ngũ (5S, SOA, FD Lead, OPD...)\n- **iLead** — chủ nhiệm & tự chủ (5PoA, La Bàn, SBI, TAC, CAT)\n\nMẹo: gõ vào ô tìm kiếm phần đầu của từ (vd: 'SOA') để nhảy thẳng tới nơi cần. Không cần nhớ chính xác cả từ."
  },
  'faq': {
    tieuDe: "Cách tìm câu trả lời nhanh",
    noiDung: "FAQ chia làm 6 phần theo chủ đề.\n\n- Gõ vào ô tìm kiếm để lọc câu hỏi theo từ khoá (vd: 'LMS', 'mật khẩu', 'nghỉ phép').\n- Kỹ thuật & hệ thống LMS: **Mr Nguyễn Sỹ Đắc** — dac.nguyensy@ipam.vn, hoặc **Mr Trương Minh Đức** — duc.truongminh@ipam.vn.\n- Lộ trình đào tạo hội nhập: PTI — **Ms Phạm Hiếu Ngân**; các SBU còn lại — **Ms Nguyễn Thu Hương**.\n- Chế độ, hợp đồng, lương thưởng → **Bộ phận C&B / EPIC Partner**."
  }
};
