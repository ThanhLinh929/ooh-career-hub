import { Mail, Phone, MapPin } from "lucide-react";

const cols = [
  {
    title: "Ứng viên",
    links: ["Tìm việc làm", "Việc làm VIP", "Tải CV lên", "Hướng dẫn ứng tuyển"],
  },
  {
    title: "Nhà tuyển dụng",
    links: ["Đăng tin tuyển dụng", "Gói VIP & Chiến dịch", "Tra cứu CV", "Bảng giá dịch vụ"],
  },
  {
    title: "Pháp lý",
    links: ["Điều khoản sử dụng", "Chính sách bảo mật", "Quy chế hoạt động", "Liên hệ hỗ trợ"],
  },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-black text-primary-foreground">
                V
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Vieclam<span className="text-primary">OOH</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Sàn việc làm chuyên biệt cho ngành Quảng Cáo Ngoài Trời, OOH Media, LED Billboard, Production và Activation tại Việt Nam.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="font-bold text-white">Công Ty Cổ Phần Quảng Cáo Shojiki</div>
              <div>Mã số thuế: 0XXXXXXXXX</div>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>Tầng X, Toà nhà ABC, Quận 1, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-primary" />
                <span>Hotline: 1900 XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-primary" />
                <span>contact@vieclamooh.vn</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">{c.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-primary">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} VieclamOOH. Vận hành bởi Công Ty Cổ Phần Quảng Cáo Shojiki. Bảo lưu mọi quyền.</div>
          <div>Đồng hành cùng ngành Quảng Cáo Ngoài Trời Việt Nam.</div>
        </div>
      </div>
    </footer>
  );
}
