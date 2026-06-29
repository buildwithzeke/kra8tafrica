import { opportunities } from "../data";
import type { OpportunityType, WorkMode } from "../types";
import { PageTitle, Tag } from "./ui";

export function Opportunities({
  typeFilter,
  modeFilter,
  onTypeChange,
  onModeChange,
}: {
  typeFilter: OpportunityType;
  modeFilter: WorkMode;
  onTypeChange: (type: OpportunityType) => void;
  onModeChange: (mode: WorkMode) => void;
}) {
  const visibleOpportunities = opportunities.filter((item) => {
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const modeMatch = modeFilter === "all" || item.mode === modeFilter;
    return typeMatch && modeMatch;
  });

  return (
    <section>
      <PageTitle eyebrow="Opportunity OS" title="Internships, jobs, scholarships, and events." />
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:max-w-xl">
        <label className="grid gap-2 font-extrabold">
          Type
          <select
            className="rounded-xl border border-slate-200 bg-white px-3 py-3 outline-kra8t-blue"
            value={typeFilter}
            onChange={(event) => onTypeChange(event.target.value as OpportunityType)}
          >
            {["all", "Internship", "Scholarship", "Event", "Job"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 font-extrabold">
          Work mode
          <select
            className="rounded-xl border border-slate-200 bg-white px-3 py-3 outline-kra8t-blue"
            value={modeFilter}
            onChange={(event) => onModeChange(event.target.value as WorkMode)}
          >
            {["all", "Remote", "Hybrid", "On-site"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-3">
        {visibleOpportunities.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h2 className="font-heading text-xl font-extrabold">{item.title}</h2>
              <p className="mt-1 text-slate-500">
                {item.company} - {item.location}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>{item.type}</Tag>
                <Tag>{item.mode}</Tag>
                <Tag>{item.match}% match</Tag>
              </div>
            </div>
            <footer className="flex items-center justify-between gap-3 lg:min-w-56">
              <span className="text-sm font-bold text-slate-500">Deadline {item.deadline}</span>
              <button className="h-10 rounded-xl bg-kra8t-blue px-4 font-extrabold text-white" type="button">
                Apply
              </button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
