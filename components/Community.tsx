import { Icon } from "@iconify/react";
import type { Post } from "../types";
import { PageTitle, Panel, PrimaryButton } from "./ui";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Community({
  posts,
  postText,
  onPostTextChange,
  onCreatePost,
}: {
  posts: Post[];
  postText: string;
  onPostTextChange: (value: string) => void;
  onCreatePost: () => void;
}) {
  return (
    <section>
      <PageTitle eyebrow="Community OS" title="Campus, department, country, tech, and startup groups." />
      <div className="grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
        <Panel className="self-start">
          <textarea
            className="min-h-32 w-full resize-y rounded-xl border border-slate-200 p-3 outline-kra8t-blue"
            placeholder="Share progress, ask a question, or find a project teammate"
            value={postText}
            onChange={(event) => onPostTextChange(event.target.value)}
          />
          <div className="mt-3">
            <PrimaryButton icon="solar:plain-2-bold-duotone" onClick={onCreatePost}>
              Post
            </PrimaryButton>
          </div>
        </Panel>

        <div className="grid gap-3">
          {posts.map((post) => (
            <article key={`${post.author}-${post.body}`} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-kra8t-night text-sm font-black text-white">
                {initials(post.author)}
              </span>
              <div>
                <h2 className="font-heading text-lg font-extrabold">{post.author}</h2>
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-kra8t-blue">{post.group}</p>
                <p className="mt-2 leading-7 text-slate-500">{post.body}</p>
                <footer className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-slate-500">
                  <span>{post.stats}</span>
                  <span className="inline-flex items-center gap-1">
                    <Icon className="h-4 w-4" icon="solar:bookmark-bold-duotone" />
                    Save
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Icon className="h-4 w-4" icon="solar:chat-round-bold-duotone" />
                    Reply
                  </span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
