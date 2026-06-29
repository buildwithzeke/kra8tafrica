import { roadmap } from "../data";
import { PageTitle } from "./ui";

export function Roadmap() {
  return (
    <section>
      <PageTitle eyebrow="AI Roadmap Generator" title="Graduate-ready timeline" />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {roadmap.map(([year, items]) => (
          <article key={year} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-1 bg-kra8t-teal" />
            <div className="p-4">
              <h2 className="font-heading text-xl font-extrabold">{year}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-500">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
