import { courses } from "../data";
import type { CourseCategory } from "../types";
import { PageTitle, Tag } from "./ui";

export function Learning({
  filter,
  onFilterChange,
}: {
  filter: CourseCategory;
  onFilterChange: (filter: CourseCategory) => void;
}) {
  const visibleCourses = filter === "all" ? courses : courses.filter((item) => item.category === filter);

  return (
    <section>
      <PageTitle eyebrow="Learning OS" title="Courses, labs, certificates, and progress." />
      <div className="mb-4 flex flex-wrap gap-2">
        {(["all", "data", "ai", "career"] as CourseCategory[]).map((item) => (
          <button
            key={item}
            className={`h-10 rounded-xl border px-4 font-extrabold ${
              filter === item ? "border-kra8t-night bg-kra8t-night text-white" : "border-slate-200 bg-white"
            }`}
            type="button"
            onClick={() => onFilterChange(item)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {visibleCourses.map((item) => (
          <article key={item.title} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Tag>{item.category.toUpperCase()}</Tag>
            <h2 className="font-heading text-xl font-extrabold">{item.title}</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-500">
              {item.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
            <progress value={item.progress} max={100} />
            <footer className="flex items-center justify-between gap-3 text-sm text-slate-500">
              <span>{item.progress}% complete</span>
              <strong>{item.certificate}</strong>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
