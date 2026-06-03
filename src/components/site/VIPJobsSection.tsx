import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { vipJobs } from "@/lib/mockData";
import { VipJobCard } from "./VipJobCard";

const tabs = [
  { id: "all", label: "Tất cả" },
  { id: "top", label: "Top VIP" },
  { id: "urgent", label: "Tuyển gấp" },
  { id: "high_salary", label: "Lương cao" },
  { id: "expiring", label: "Sắp hết hạn" },
] as const;

const PAGE_SIZE = 8;

export function VIPJobsSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const list = [...vipJobs];
    switch (tab) {
      case "top":
        return list.filter((j) => j.packageType === "top_vip");
      case "urgent":
        return list.filter((j) => j.isUrgent);
      case "high_salary":
        return list.filter((j) => j.isHighSalary);
      case "expiring":
        return [...list].sort((a, b) => a.daysLeft - b.daysLeft);
      default:
        return list.sort((a, b) => b.priorityLevel - a.priorityLevel);
    }
  }, [tab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  useEffect(() => {
    setPage(0);
  }, [tab]);

  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 7000);
    return () => clearInterval(id);
  }, [paused, totalPages]);

  return (
    <section id="vip-jobs" className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              <Crown size={12} /> Premium
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Việc Làm VIP - Nổi Bật
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Các vị trí được ưu tiên hiển thị, thời gian có hạn.
            </p>
          </div>
          <a href="#" className="hidden text-sm font-bold text-primary hover:underline sm:inline">
            Xem Tất Cả Việc VIP →
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-white text-foreground/70 hover:bg-muted border border-border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {current.map((j) => (
            <VipJobCard key={j.id} job={j} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Trang trước"
              onClick={() => {
                setPaused(true);
                setPage((p) => (p - 1 + totalPages) % totalPages);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-foreground hover:bg-muted"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Trang ${i + 1}`}
                  onClick={() => {
                    setPaused(true);
                    setPage(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === page ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Trang sau"
              onClick={() => {
                setPaused(true);
                setPage((p) => (p + 1) % totalPages);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-foreground hover:bg-muted"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-primary bg-white px-6 py-3 text-sm font-bold text-primary"
          >
            Xem Tất Cả Việc VIP
          </a>
        </div>
      </div>
    </section>
  );
}
