
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="technical-grid relative overflow-hidden">
        <div className="container-width relative py-24 sm:py-32 lg:py-40">
          <p className="mb-8 font-mono text-sm text-cyan-400">
            <span className="mr-2 text-zinc-600">&gt;</span>
            SYSTEMS / SECURITY / RESEARCH
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Understanding systems.
            <br />
            <span className="text-zinc-500">Investigating their limits.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I explore systems security, network protocols, and privacy-preserving
            communication. This portfolio documents my research, technical
            experiments, and engineering work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-md bg-cyan-400 px-5 py-3 font-medium text-zinc-950 transition-colors hover:bg-cyan-300"
            >
              Explore my work
              <span aria-hidden="true">↘</span>
            </a>

            <a
              href="/research"
              className="rounded-md border border-zinc-700 px-5 py-3 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Research
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-800 pt-6 font-mono text-xs text-zinc-500">
            <span>01 / NETWORKS</span>
            <span>02 / SECURITY</span>
            <span>03 / SYSTEMS</span>
            <span>04 / PRIVACY</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl"
        />
      </section>

      {/* Projects */}
      <section id="projects" className="container-width py-24 sm:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Selected work</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects & explorations
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Research, technical experiments, and engineering projects.
              This collection will grow as I document and publish my work.
            </p>
          </div>

          <span className="font-mono text-xs text-zinc-600">
            / WORK_INDEX
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card surface flex min-h-72 flex-col rounded-lg p-6"
            >
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
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-y border-zinc-800 bg-[#0d0d10]">
        <div className="container-width grid gap-10 py-20 md:grid-cols-[1fr_1.3fr] md:gap-16 md:py-24">
          <div>
            <p className="section-label">About</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Curious about
              <br />
              what happens underneath.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-400">
              My interests span low-level systems, network architecture,
              cybersecurity, and privacy. I enjoy understanding how systems
              work, investigating their limitations, and evaluating potential
              improvements through technical experimentation.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              This portfolio is a living record of that process: the questions
              I investigate, the tools I build, and the knowledge I develop
              along the way.
            </p>

            <a
              href="/writing"
              className="mt-7 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              Read technical notes
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-width py-20 sm:py-24">
        <p className="section-label">Contact</p>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have an interesting problem?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              I'm interested in research, technical collaboration, and
              opportunities to work on challenging systems and security problems.
            </p>
          </div>

          <p className="font-mono text-sm text-zinc-500">
            CONTACT_LINKS_COMING_SOON
          </p>
        </div>
      </section>
    </>
  );
}
