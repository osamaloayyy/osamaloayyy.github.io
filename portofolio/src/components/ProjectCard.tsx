import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card surface flex min-h-72 flex-col rounded-lg p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-cyan-400">
          {project.id}
        </span>

        <span className="font-mono text-xs text-zinc-500">
          {project.category}
        </span>
      </div>

      <h3 className="mt-8 text-xl font-medium text-zinc-100">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
      >
        Explore section
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}