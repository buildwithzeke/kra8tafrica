"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Advisor } from "@/components/Advisor";
import { AppShell } from "@/components/AppShell";
import { Community } from "@/components/Community";
import { Dashboard } from "@/components/Dashboard";
import { initialPosts } from "@/data";
import { Learning } from "@/components/Learning";
import { Opportunities } from "@/components/Opportunities";
import { Portfolio } from "@/components/Portfolio";
import { Roadmap } from "@/components/Roadmap";
import { StartupHub } from "@/components/StartupHub";
import type { CourseCategory, Interest, OpportunityType, Pitch, Post, ViewId, WorkMode } from "@/types";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewId>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [score, setScore] = useState(78);
  const [course, setCourse] = useState("Medical Laboratory Science");
  const [level, setLevel] = useState("300 Level");
  const [interest, setInterest] = useState<Interest>("HealthTech");
  const [courseFilter, setCourseFilter] = useState<CourseCategory>("all");
  const [typeFilter, setTypeFilter] = useState<OpportunityType>("all");
  const [modeFilter, setModeFilter] = useState<WorkMode>("all");
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [postText, setPostText] = useState("");
  const [idea, setIdea] = useState("LabFlow AI");
  const [problem, setProblem] = useState(
    "Small clinics struggle to organize lab results and detect abnormal trends early.",
  );
  const [solution, setSolution] = useState(
    "A lightweight EMR add-on that summarizes lab results, flags risks, and recommends follow-up actions.",
  );
  const [pitch, setPitch] = useState<Pitch>({ idea, problem, solution });

  function openView(view: ViewId) {
    setActiveView(view);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleTaskChange(checked: boolean) {
    setScore((current) => Math.max(0, Math.min(100, current + (checked ? 2 : -2))));
  }

  function createPost() {
    const body = postText.trim();
    if (!body) return;

    setPosts([{ author: "Ezekiel Okafor", group: "KRA8T Africa", body, stats: "Just now - 0 comments" }, ...posts]);
    setPostText("");
  }

  function createPitch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPitch({
      idea: idea.trim() || "Untitled idea",
      problem,
      solution,
    });
  }

  return (
    <AppShell
      activeView={activeView}
      menuOpen={menuOpen}
      score={score}
      onMenuClose={() => setMenuOpen(false)}
      onMenuOpen={() => setMenuOpen(true)}
      onViewChange={openView}
    >
      {activeView === "dashboard" ? (
        <Dashboard score={score} onTaskChange={handleTaskChange} onViewChange={openView} />
      ) : null}

      {activeView === "advisor" ? (
        <Advisor
          course={course}
          interest={interest}
          level={level}
          onCourseChange={setCourse}
          onInterestChange={setInterest}
          onLevelChange={setLevel}
        />
      ) : null}

      {activeView === "roadmap" ? <Roadmap /> : null}

      {activeView === "learning" ? <Learning filter={courseFilter} onFilterChange={setCourseFilter} /> : null}

      {activeView === "opportunities" ? (
        <Opportunities
          modeFilter={modeFilter}
          typeFilter={typeFilter}
          onModeChange={setModeFilter}
          onTypeChange={setTypeFilter}
        />
      ) : null}

      {activeView === "community" ? (
        <Community
          posts={posts}
          postText={postText}
          onCreatePost={createPost}
          onPostTextChange={setPostText}
        />
      ) : null}

      {activeView === "portfolio" ? <Portfolio /> : null}

      {activeView === "startup" ? (
        <StartupHub
          idea={idea}
          pitch={pitch}
          problem={problem}
          solution={solution}
          onCreatePitch={createPitch}
          onIdeaChange={setIdea}
          onProblemChange={setProblem}
          onSolutionChange={setSolution}
        />
      ) : null}
    </AppShell>
  );
}
