import type { FormEvent } from "react";
import type { Pitch } from "../types";
import { PageTitle, Panel, PrimaryButton } from "./ui";

export function StartupHub({
  idea,
  problem,
  solution,
  pitch,
  onIdeaChange,
  onProblemChange,
  onSolutionChange,
  onCreatePitch,
}: {
  idea: string;
  problem: string;
  solution: string;
  pitch: Pitch;
  onIdeaChange: (value: string) => void;
  onProblemChange: (value: string) => void;
  onSolutionChange: (value: string) => void;
  onCreatePitch: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section>
      <PageTitle eyebrow="Innovation & Startup Ecosystem" title="Move from idea to mentor, incubator, and investor." />
      <div className="grid gap-4 lg:grid-cols-[380px_minmax(0,1fr)]">
        <Panel>
          <form className="grid gap-4" onSubmit={onCreatePitch}>
            <label className="grid gap-2 font-extrabold">
              Startup idea
              <input
                className="rounded-xl border border-slate-200 px-3 py-3 outline-kra8t-blue"
                value={idea}
                onChange={(event) => onIdeaChange(event.target.value)}
              />
            </label>
            <label className="grid gap-2 font-extrabold">
              Problem
              <textarea
                className="min-h-28 resize-y rounded-xl border border-slate-200 p-3 outline-kra8t-blue"
                value={problem}
                onChange={(event) => onProblemChange(event.target.value)}
              />
            </label>
            <label className="grid gap-2 font-extrabold">
              Solution
              <textarea
                className="min-h-28 resize-y rounded-xl border border-slate-200 p-3 outline-kra8t-blue"
                value={solution}
                onChange={(event) => onSolutionChange(event.target.value)}
              />
            </label>
            <PrimaryButton icon="solar:rocket-2-bold-duotone" type="submit">
              Create Pitch Snapshot
            </PrimaryButton>
          </form>
        </Panel>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">Pitch Snapshot</p>
          <h2 className="font-heading text-3xl font-extrabold">{pitch.idea}</h2>
          <p className="mt-2 leading-7 text-slate-500">{pitch.solution}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              ["Problem", pitch.problem],
              ["Solution", pitch.solution],
              ["Mentor Match", "Clinical informatics, health product, and data privacy mentors."],
              ["Investor Signal", "Strong if you add prototype usage data and one clinic pilot letter."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-slate-50 p-4">
                <strong>{title}</strong>
                <p className="mt-1 leading-7 text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
