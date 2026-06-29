import { Icon } from "@iconify/react";
import { courses, recommendations } from "../data";
import { IconTile, Panel, StatCard, Tag } from "./ui";
import type { ViewId } from "../types";

const heroBackground = {
  backgroundImage:
    "linear-gradient(115deg, rgba(14,92,255,0.92), rgba(15,23,42,0.94)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
};

export function Dashboard({
  score,
  onTaskChange,
  onViewChange,
}: {
  score: number;
  onTaskChange: (checked: boolean) => void;
  onViewChange: (view: ViewId) => void;
}) {
  return (
    <section>
      <div
        className="flex flex-col gap-6 rounded-3xl bg-cover bg-center p-5 text-white shadow-soft sm:p-7 lg:flex-row lg:items-center lg:justify-between"
        style={heroBackground}
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-teal">Monday, 29 June</p>
          <h1 className="mt-1 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl">
            Good morning, Ezekiel.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
            Your operating system for skills, community, experience, and graduate-ready opportunities.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-kra8t-teal px-4 font-extrabold text-slate-950"
            type="button"
            onClick={() => onViewChange("advisor")}
          >
            <Icon className="h-5 w-5" icon="solar:magic-stick-3-bold-duotone" />
            Ask AI Advisor
          </button>
          <button
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 font-extrabold text-kra8t-blue"
            type="button"
            onClick={() => onViewChange("portfolio")}
          >
            <Icon className="h-5 w-5" icon="solar:download-minimalistic-bold-duotone" />
            Export Profile
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon="solar:target-bold-duotone" label="Career Readiness" value={`${score}%`} progress={score} />
        <StatCard icon="solar:clock-circle-bold-duotone" label="Learning Hours" value="42h" progress={64} />
        <StatCard icon="solar:plain-2-bold-duotone" label="Applications" value="9" progress={45} />
        <StatCard icon="solar:verified-check-bold-duotone" label="Verified Skills" value="14" progress={70} />
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-2">
        <Panel>
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Continue Learning</p>
              <h2 className="font-heading text-xl font-extrabold">HealthTech Data Path</h2>
            </div>
            <button className="font-extrabold text-kra8t-blue" type="button" onClick={() => onViewChange("learning")}>
              View all
            </button>
          </div>
          {courses.slice(0, 2).map((item) => (
            <div key={item.title} className="flex items-center gap-3 border-t border-slate-200 py-3">
              <IconTile icon="solar:database-bold-duotone" />
              <div className="min-w-0 flex-1">
                <strong className="block truncate">{item.title}</strong>
                <small className="text-slate-500">{item.progress}% complete</small>
              </div>
              <progress className="hidden max-w-36 sm:block" value={item.progress} max={100} />
            </div>
          ))}
        </Panel>

        <Panel>
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Today&apos;s Tasks</p>
              <h2 className="font-heading text-xl font-extrabold">Score Builders</h2>
            </div>
            <Tag>+8 pts</Tag>
          </div>
          {["Complete SQL quiz", "Upload one project screenshot", "Apply to HealthTech internship"].map((task) => (
            <label key={task} className="flex items-center justify-between gap-3 border-b border-slate-200 py-3 font-bold">
              <span className="flex items-center gap-2">
                <input type="checkbox" onChange={(event) => onTaskChange(event.target.checked)} />
                {task}
              </span>
              <span className="font-mono text-green-600">+2</span>
            </label>
          ))}
        </Panel>

        <Panel className="xl:col-span-2">
          <div className="mb-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Recommendations</p>
            <h2 className="font-heading text-xl font-extrabold">Next best actions</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {recommendations.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-3">
                <Icon className="mb-2 h-6 w-6 text-kra8t-blue" icon={item.icon} />
                <strong className="block">{item.title}</strong>
                <p className="mt-1 text-sm leading-6 text-slate-500">{item.body}</p>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
