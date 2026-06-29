import { advisorTemplates, interests } from "../data";
import type { Interest } from "../types";
import { PageTitle, Panel, PrimaryButton, Tag } from "./ui";

export function Advisor({
  course,
  level,
  interest,
  onCourseChange,
  onLevelChange,
  onInterestChange,
}: {
  course: string;
  level: string;
  interest: Interest;
  onCourseChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onInterestChange: (value: Interest) => void;
}) {
  const advisor = advisorTemplates[interest];

  return (
    <section>
      <PageTitle eyebrow="AI Career Advisor" title="Turn any course into a digital-economy pathway." />
      <div className="grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
        <Panel>
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <label className="grid gap-2 font-extrabold">
              Course of study
              <input
                className="rounded-xl border border-slate-200 px-3 py-3 outline-kra8t-blue"
                value={course}
                onChange={(event) => onCourseChange(event.target.value)}
              />
            </label>
            <label className="grid gap-2 font-extrabold">
              Current level
              <select
                className="rounded-xl border border-slate-200 px-3 py-3 outline-kra8t-blue"
                value={level}
                onChange={(event) => onLevelChange(event.target.value)}
              >
                {["100 Level", "200 Level", "300 Level", "400 Level", "Final Year"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 font-extrabold">
              Interest
              <select
                className="rounded-xl border border-slate-200 px-3 py-3 outline-kra8t-blue"
                value={interest}
                onChange={(event) => onInterestChange(event.target.value as Interest)}
              >
                {interests.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <PrimaryButton icon="solar:magic-stick-3-bold-duotone" type="submit">
              Generate Plan
            </PrimaryButton>
          </form>
        </Panel>

        <div className="grid gap-3">
          <Panel>
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Recommended Path</p>
            <h2 className="font-heading text-2xl font-extrabold">{course || "Your course"} to {interest}</h2>
            <p className="mt-2 leading-7 text-slate-500">
              Your {level} profile is best positioned around practical projects, verified data skills, and one mentor-reviewed
              portfolio case study.
            </p>
          </Panel>
          {[
            ["Recommended Skills", advisor.skills],
            ["Career Paths", advisor.careers],
            ["Project Ideas", advisor.projects],
            ["Certifications", advisor.certifications],
          ].map(([title, items]) => (
            <Panel key={String(title)}>
              <h3 className="mb-3 font-heading text-xl font-extrabold">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
