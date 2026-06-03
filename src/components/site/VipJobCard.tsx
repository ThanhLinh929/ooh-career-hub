import { Building2, MapPin, Clock, Flame, Crown, Sparkles } from "lucide-react";
import type { VipJob } from "@/lib/mockData";

const pkgMeta: Record<
  VipJob["packageType"],
  { label: string; icon: typeof Crown; className: string }
> = {
  top_vip: {
    label: "VIP",
    icon: Crown,
    className: "bg-primary text-primary-foreground",
  },
  vip: {
    label: "VIP",
    icon: Crown,
    className: "bg-primary text-primary-foreground",
  },
  sponsored: {
    label: "Nổi bật",
    icon: Sparkles,
    className: "bg-amber-100 text-amber-800",
  },
  highlighted: {
    label: "Nổi bật",
    icon: Sparkles,
    className: "bg-amber-100 text-amber-800",
  },
};

export function VipJobCard({ job }: { job: VipJob }) {
  const Pkg = pkgMeta[job.packageType];
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base font-black text-primary">
          {job.companyName.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${Pkg.className}`}
            >
              <Pkg.icon size={10} /> {Pkg.label}
            </span>
            {job.isUrgent && (
              <span className="inline-flex items-center gap-1 rounded-full bg-urgent-bg px-2 py-0.5 text-[10px] font-bold uppercase text-urgent-text">
                <Flame size={10} /> Tuyển gấp
              </span>
            )}
          </div>
          <h3 className="text-[15px] font-bold leading-snug text-foreground line-clamp-2 group-hover:text-primary">
            {job.jobTitle}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Building2 size={12} />
            <span className="truncate">{job.companyName}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-foreground/70">
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} className="text-urgent-text" /> Còn {job.daysLeft} ngày
        </span>
      </div>

      <div className="mt-3 text-sm font-bold text-success-salary">{job.salary}</div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <span className="text-xs font-medium text-muted-foreground">{job.category}</span>
        <a
          href={job.applyUrl}
          className="text-xs font-bold text-primary hover:underline"
        >
          Ứng tuyển →
        </a>
      </div>
    </article>
  );
}
