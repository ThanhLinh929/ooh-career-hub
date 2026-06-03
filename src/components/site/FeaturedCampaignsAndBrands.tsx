import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type EmployerCategory =
  | "all"
  | "ooh-media"
  | "led-pano"
  | "production"
  | "agency"
  | "activation";

type Employer = {
  id: number;
  companyName: string;
  shortName: string;
  initial: string;
  industry: string;
  location: string;
  activeJobs: number;
  category: Exclude<EmployerCategory, "all">;
  isVerified?: boolean;
  isPremium?: boolean;
};

const tabs: { label: string; value: EmployerCategory }[] = [
  { label: "Tất cả", value: "all" },
  { label: "OOH Media", value: "ooh-media" },
  { label: "LED/Pano", value: "led-pano" },
  { label: "Production", value: "production" },
  { label: "Agency", value: "agency" },
  { label: "Activation", value: "activation" },
];

const employers: Employer[] = [
  {
    id: 1,
    companyName: "Goldsun Media",
    shortName: "Goldsun",
    initial: "G",
    industry: "OOH Media",
    location: "Hà Nội / TP.HCM",
    activeJobs: 14,
    category: "ooh-media",
    isVerified: true,
    isPremium: true,
  },
  {
    id: 2,
    companyName: "Shojiki Ads Corp",
    shortName: "Shojiki",
    initial: "S",
    industry: "OOH Network",
    location: "TP.HCM",
    activeJobs: 8,
    category: "ooh-media",
    isVerified: true,
  },
  {
    id: 3,
    companyName: "DatVietVAC",
    shortName: "DatVietVAC",
    initial: "D",
    industry: "Media Agency",
    location: "TP.HCM",
    activeJobs: 22,
    category: "agency",
    isVerified: true,
  },
  {
    id: 4,
    companyName: "LED Billboard Vietnam",
    shortName: "LED Billboard",
    initial: "L",
    industry: "LED Display",
    location: "Toàn quốc",
    activeJobs: 11,
    category: "led-pano",
    isVerified: true,
  },
  {
    id: 5,
    companyName: "Pano Group",
    shortName: "Pano Group",
    initial: "P",
    industry: "Thi công Pano",
    location: "Hà Nội",
    activeJobs: 6,
    category: "production",
  },
  {
    id: 6,
    companyName: "Outdoor Media Network",
    shortName: "Outdoor",
    initial: "O",
    industry: "OOH Network",
    location: "TP.HCM",
    activeJobs: 10,
    category: "ooh-media",
    isVerified: true,
  },
  {
    id: 7,
    companyName: "Activation Pro",
    shortName: "Activation",
    initial: "A",
    industry: "Activation",
    location: "Toàn quốc",
    activeJobs: 9,
    category: "activation",
  },
  {
    id: 8,
    companyName: "Media Planning Hub",
    shortName: "Media Hub",
    initial: "M",
    industry: "Media Planning",
    location: "Hà Nội",
    activeJobs: 7,
    category: "agency",
  },
  {
    id: 9,
    companyName: "Lightbox Outdoor",
    shortName: "Lightbox",
    initial: "L",
    industry: "Billboard",
    location: "Đà Nẵng",
    activeJobs: 5,
    category: "led-pano",
  },
  {
    id: 10,
    companyName: "Brand Activation House",
    shortName: "BA House",
    initial: "B",
    industry: "Activation",
    location: "TP.HCM",
    activeJobs: 12,
    category: "activation",
    isVerified: true,
  },
  {
    id: 11,
    companyName: "OOH Production Studio",
    shortName: "Production",
    initial: "O",
    industry: "Production",
    location: "Hà Nội",
    activeJobs: 4,
    category: "production",
  },
  {
    id: 12,
    companyName: "Skyline Media",
    shortName: "Skyline",
    initial: "S",
    industry: "OOH Media",
    location: "Toàn quốc",
    activeJobs: 15,
    category: "ooh-media",
    isVerified: true,
  },
];

const ITEMS_PER_SLIDE = 6;

export function FeaturedCampaignsAndBrands() {
  const [activeTab, setActiveTab] = useState<EmployerCategory>("all");
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const filteredEmployers = useMemo(() => {
    if (activeTab === "all") return employers;
    return employers.filter((employer) => employer.category === activeTab);
  }, [activeTab]);

  const slides = useMemo(() => {
    const chunks: Employer[][] = [];

    for (let i = 0; i < filteredEmployers.length; i += ITEMS_PER_SLIDE) {
      chunks.push(filteredEmployers.slice(i, i + ITEMS_PER_SLIDE));
    }

    return chunks.length ? chunks : [[]];
  }, [filteredEmployers]);

  const currentEmployers = slides[slide] || [];
  const spotlightEmployer =
    filteredEmployers.find((item) => item.isPremium) || filteredEmployers[0];

  useEffect(() => {
    setSlide(0);
  }, [activeTab]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const handlePrev = () => {
    setPaused(true);
    setSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setPaused(true);
    setSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="employers"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-white p-4 shadow-sm sm:p-6 lg:p-7">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
            <div className="relative min-h-[170px] px-6 py-7 text-white sm:px-8 lg:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.32),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,0.95))]" />
              <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08))] lg:block" />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-black uppercase tracking-wide text-primary-foreground">
                    <Sparkles size={13} />
                    Thương hiệu tuyển dụng
                  </div>

                  <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                    Nhà tuyển dụng OOH nổi bật
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72 sm:text-base">
                    Khám phá các agency, media owner, production house và đơn vị
                    thi công đang tuyển dụng trong ngành quảng cáo ngoài trời.
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-primary hover:text-primary-foreground"
                >
                  Xem tất cả công ty
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-slate-50 text-muted-foreground hover:border-primary/30 hover:bg-white hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="Slide trước"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                aria-label="Slide sau"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {spotlightEmployer && (
              <EmployerSpotlightCard employer={spotlightEmployer} />
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {currentEmployers.map((employer) => (
                <EmployerMiniCard key={employer.id} employer={employer} />
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    setSlide(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    slide === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-slate-300 hover:bg-primary/50"
                  }`}
                  aria-label={`Chuyển đến slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function EmployerSpotlightCard({ employer }: { employer: Employer }) {
  return (
    <a
      href="#"
      className="group relative min-h-[390px] overflow-hidden rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl lg:col-span-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(249,115,22,0.32),transparent_32%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-6 top-8 h-28 w-36 rounded-2xl border border-white/25" />
        <div className="absolute bottom-16 right-5 h-36 w-48 rounded-2xl border border-primary/30" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-primary/25 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-black text-primary-foreground">
          <Sparkles size={12} />
          Đang tuyển mạnh
        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-4xl font-black text-primary shadow-2xl">
          {employer.initial}
        </div>

        <h3 className="mt-6 max-w-xs text-2xl font-black leading-tight">
          {employer.companyName}
        </h3>

        <p className="mt-2 text-sm font-semibold text-white/70">
          {employer.industry}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black backdrop-blur">
          <Briefcase size={15} className="text-primary" />
          {employer.activeJobs} việc đang tuyển
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950">
            Nhà tuyển dụng nổi bật
          </span>

          <span className="rounded-full bg-primary px-4 py-2 text-xs font-black text-primary-foreground">
            Theo dõi
          </span>
        </div>
      </div>
    </a>
  );
}

function EmployerMiniCard({ employer }: { employer: Employer }) {
  return (
    <a
      href="#"
      className="group flex min-h-[126px] items-center gap-4 rounded-[1.25rem] border border-border bg-white p-4 transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-slate-50 text-xl font-black text-primary transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
        {employer.initial}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="line-clamp-2 text-sm font-black leading-5 text-foreground transition group-hover:text-primary sm:text-base">
                {employer.companyName}
              </h3>

              {employer.isVerified && (
                <ShieldCheck size={15} className="shrink-0 text-primary" />
              )}
            </div>

            <p className="mt-1 line-clamp-1 text-sm font-medium text-muted-foreground">
              {employer.industry}
            </p>
          </div>

          <ChevronRight
            size={17}
            className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1.5 text-muted-foreground">
            <MapPin size={12} />
            {employer.location}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-primary">
            <Briefcase size={12} />
            {employer.activeJobs} việc
          </span>
        </div>
      </div>
    </a>
  );
}
