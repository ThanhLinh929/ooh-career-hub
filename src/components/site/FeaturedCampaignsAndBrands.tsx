import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { featuredCampaigns, featuredEmployers } from "@/lib/mockData";

export function FeaturedCampaignsAndBrands() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % featuredCampaigns.length),
      6000,
    );
    return () => clearInterval(id);
  }, [paused]);

  const c = featuredCampaigns[idx];
  const topEmployers = featuredEmployers.slice(0, 5);
  const stripEmployers = featuredEmployers;

  return (
    <section id="campaigns" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <Sparkles size={12} /> Premium Employer
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Thương Hiệu Tuyển Dụng Nổi Bật
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Các doanh nghiệp đang triển khai chiến dịch tuyển dụng quy mô lớn trong ngành OOH.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Large Campaign Card */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-8 text-white shadow-xl lg:col-span-3 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  <Sparkles size={12} /> {c.badge}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Đang tuyển
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-black text-white backdrop-blur">
                  {c.companyName.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
                    {c.companyName}
                  </div>
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                {c.campaignTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {c.campaignDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={15} className="text-primary" /> {c.activeJobs} vị trí
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-primary" /> {c.location}
                </span>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-7">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-hover active:scale-95"
                >
                  Xem Chiến Dịch <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-1.5">
                  {featuredCampaigns.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Chiến dịch ${i + 1}`}
                      onClick={() => {
                        setPaused(true);
                        setIdx(i);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === idx ? "w-7 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Employer List */}
          <div className="rounded-3xl border border-border bg-white p-3 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                Nhà Tuyển Dụng Premium
              </h3>
              <a href="#" className="text-xs font-bold text-primary hover:underline">
                Xem tất cả →
              </a>
            </div>
            <ul className="divide-y divide-border/60">
              {topEmployers.map((e) => (
                <li key={e.id}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base font-black text-primary">
                      {e.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <h4 className="truncate text-sm font-bold text-foreground group-hover:text-primary">
                          {e.companyName}
                        </h4>
                        {e.isVerified && (
                          <ShieldCheck size={13} className="shrink-0 text-primary" />
                        )}
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{e.industry}</span>
                        <span className="text-border">•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={10} /> {e.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-primary">{e.activeJobs}</div>
                      <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        vị trí
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo Strip */}
        <div className="mt-8 rounded-2xl border border-border bg-white px-6 py-5">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Đối tác đồng hành
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {stripEmployers.map((e) => (
                <a
                  key={e.id}
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground/60 transition-colors hover:text-primary"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-black text-foreground/70">
                    {e.initial}
                  </span>
                  {e.companyName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
