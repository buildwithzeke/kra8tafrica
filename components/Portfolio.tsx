import { projects, scoreBreakdown } from "../data";
import { PageTitle, Panel, SecondaryButton, Tag } from "./ui";

export function Portfolio() {
  return (
    <section>
      <PageTitle eyebrow="Portfolio Builder" title="One profile for resumes, portfolios, QR cards, and employers." />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-kra8t-night text-2xl font-black text-white">EO</span>
            <div>
              <h2 className="font-heading text-2xl font-extrabold">Ezekiel Okafor</h2>
              <p className="mt-1 leading-7 text-slate-500">
                Medical Laboratory Science student building HealthTech data products.
              </p>
            </div>
          </div>

          <div className="my-4 flex flex-wrap gap-2">
            {["Python", "SQL", "Power BI", "FHIR", "Data Analytics"].map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>

          <div className="grid gap-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-200 p-3">
                <strong>{project.title}</strong>
                <p className="mt-1 leading-7 text-slate-500">{project.body}</p>
              </article>
            ))}
          </div>
        </article>

        <Panel>
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Score Breakdown</p>
          <h2 className="mb-4 font-heading text-xl font-extrabold">What improves readiness</h2>
          <div className="grid gap-4">
            {scoreBreakdown.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[120px_auto] items-center gap-2 sm:grid-cols-[120px_1fr_42px]">
                <span className="font-bold text-slate-500">{label}</span>
                <progress className="col-span-2 sm:col-span-1" value={value} max={100} />
                <strong className="row-start-1 text-right font-mono sm:row-auto">{value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <SecondaryButton icon="solar:document-text-bold-duotone">Generate ATS Resume</SecondaryButton>
          </div>
        </Panel>
      </div>
    </section>
  );
}
