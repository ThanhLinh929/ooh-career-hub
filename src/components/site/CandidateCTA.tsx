import { Briefcase, Search } from "lucide-react";

export function CandidateCTA() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white to-muted/60 p-8 text-center shadow-sm sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Bắt đầu hành trình sự nghiệp <span className="text-primary">Quảng Cáo Ngoài Trời</span> của bạn
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Tạo hồ sơ chuyên nghiệp và kết nối với những nhà tuyển dụng OOH hàng đầu Việt Nam.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover active:scale-95 sm:w-auto"
              >
                <Search size={17} /> Tìm việc ngay
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-foreground/15 bg-white px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                <Briefcase size={17} /> Dành cho nhà tuyển dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
