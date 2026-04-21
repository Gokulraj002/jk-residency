import { cn } from "@/lib/utils";

export function SectionHeader({ badge, title, subtitle, align = "center", className = "" }) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      {badge && (
        <div className={cn("mb-3 flex items-center gap-3", centered ? "justify-center" : "")}>
          <span className="h-px w-8 rounded-full bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">{badge}</span>
          <span className="h-px w-8 rounded-full bg-gold" />
        </div>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      <div className={cn("mt-3 flex", centered ? "justify-center" : "")}>
        <span
          className="h-[3px] w-16 rounded-full"
          style={{ background: "var(--gradient-warm)" }}
        />
      </div>
      {subtitle && (
        <p className={cn("mt-4 text-muted-foreground", centered ? "mx-auto max-w-2xl" : "max-w-xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
