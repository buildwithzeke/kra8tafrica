import { Icon } from "@iconify/react";
import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-7 items-center rounded-full bg-kra8t-soft px-3 text-xs font-extrabold text-kra8t-blue">
      {children}
    </span>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>{children}</section>;
}

export function PageTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 max-w-4xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">{eyebrow}</p>
      <h1 className="mt-1 font-heading text-3xl font-extrabold leading-tight tracking-normal text-kra8t-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
    </div>
  );
}

export function IconTile({ icon }: { icon: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-kra8t-soft text-kra8t-blue">
      <Icon className="h-5 w-5" icon={icon} />
    </span>
  );
}

export function PrimaryButton({
  children,
  icon,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  icon?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-kra8t-blue px-4 font-extrabold text-white shadow-sm transition hover:bg-blue-700"
      type={type}
      onClick={onClick}
    >
      {icon ? <Icon className="h-5 w-5" icon={icon} /> : null}
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  icon,
  onClick,
}: {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 font-extrabold text-kra8t-blue shadow-sm transition hover:bg-kra8t-soft"
      type="button"
      onClick={onClick}
    >
      {icon ? <Icon className="h-5 w-5" icon={icon} /> : null}
      {children}
    </button>
  );
}

export function StatCard({
  icon,
  label,
  value,
  progress,
}: {
  icon: string;
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <article className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Icon className="h-5 w-5 text-kra8t-blue" icon={icon} />
      <small className="font-semibold text-slate-500">{label}</small>
      <strong className="font-mono text-3xl">{value}</strong>
      <progress value={progress} max={100} />
    </article>
  );
}
