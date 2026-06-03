import { useState } from "react";
import { ArrowRight, Briefcase, Megaphone, Monitor, Palette, Target, Wrench } from "lucide-react";
import { industries } from "@/lib/mockData";

const icons = {
  briefcase: Briefcase,
  wrench: Wrench,
  palette: Palette,
  target: Target,
  monitor: Monitor,
  megaphone: Megaphone,
} as const;

export function TopIndustriesGrid() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="industries" className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Top Ngành Nghề Nổi Bật
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Khám phá các nhóm việc làm cốt lõi trong ngành Quảng Cáo Ngoài Trời.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = icons[ind.icon];
            const isActive = active === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`group flex flex-col items-start rounded-2xl border-2 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isActive ? "border-primary shadow-lg" : "border-border hover:border-primary/40"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{ind.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{ind.jobs} việc làm</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-primary">
                  Xem ngành
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
