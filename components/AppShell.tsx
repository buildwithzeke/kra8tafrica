import { Icon } from "@iconify/react";
import type { ReactNode } from "react";
import { navItems } from "./data";
import type { ViewId } from "./types";

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex h-11 items-center gap-3 rounded-xl px-3 text-left text-sm font-bold transition ${
        active ? "bg-kra8t-soft text-kra8t-blue" : "text-slate-700 hover:bg-kra8t-soft hover:text-kra8t-blue"
      }`}
      type="button"
      onClick={onClick}
    >
      <Icon className="h-5 w-5 shrink-0" icon={icon} />
      <span>{label}</span>
    </button>
  );
}

export function AppShell({
  children,
  activeView,
  menuOpen,
  score,
  onViewChange,
  onMenuOpen,
  onMenuClose,
}: {
  children: ReactNode;
  activeView: ViewId;
  menuOpen: boolean;
  score: number;
  onViewChange: (view: ViewId) => void;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}) {
  const scoreStyle = {
    background: `conic-gradient(#20E0B0 ${score * 3.6}deg, #d9e6f2 0)`,
  };

  return (
    <div className="min-h-screen bg-kra8t-bg text-kra8t-ink lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[min(84vw,310px)] flex-col gap-6 border-r border-slate-200 bg-white p-5 transition-transform lg:sticky lg:top-0 lg:h-screen lg:w-auto lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="flex items-center gap-3 text-left" type="button" onClick={() => onViewChange("dashboard")}>
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-kra8t-blue font-mono text-lg font-black text-white">
            K8
          </span>
          <span>
            <strong className="block font-heading text-base">KRA8T Africa</strong>
            <small className="text-sm text-slate-500">Career OS</small>
          </span>
        </button>

        <nav className="grid gap-1">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              active={activeView === item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => onViewChange(item.id)}
            />
          ))}
        </nav>

        <section className="mt-auto flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full font-mono font-black" style={scoreStyle}>
            <span className="absolute h-12 w-12 rounded-full bg-white" />
            <span className="relative">{score}</span>
          </div>
          <div>
            <strong className="block">Career Readiness</strong>
            <small className="text-slate-500">+12 this semester</small>
          </div>
        </section>
      </aside>

      {menuOpen ? (
        <button
          className="fixed inset-0 z-20 bg-slate-950/30 lg:hidden"
          type="button"
          aria-label="Close navigation"
          onClick={onMenuClose}
        />
      ) : null}

      <main className="min-w-0">
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-slate-200 bg-kra8t-bg/90 px-4 py-3 backdrop-blur lg:px-7 lg:py-4">
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"
            type="button"
            aria-label="Open navigation"
            onClick={onMenuOpen}
          >
            <Icon className="h-5 w-5" icon="solar:hamburger-menu-bold" />
          </button>

          <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
            <Icon className="h-5 w-5 shrink-0 text-slate-500" icon="solar:magnifer-bold-duotone" />
            <input
              className="min-w-0 flex-1 border-0 bg-transparent text-sm outline-none"
              placeholder="Search courses, jobs, mentors, communities"
              type="search"
              onChange={(event) => {
                const term = event.target.value.trim().toLowerCase();
                const target = navItems.find((item) => item.label.toLowerCase().includes(term) || item.id.includes(term));
                if (target) onViewChange(target.id);
              }}
            />
          </label>

          <button className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white" type="button">
            <Icon className="h-5 w-5" icon="solar:bell-bold-duotone" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 sm:px-3" type="button">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-kra8t-night text-sm font-black text-white">EO</span>
            <span className="hidden text-sm font-extrabold text-slate-600 sm:inline">Ezekiel</span>
          </button>
        </header>

        <div className="p-4 lg:p-7">{children}</div>
      </main>
    </div>
  );
}
