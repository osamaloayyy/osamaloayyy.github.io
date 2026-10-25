import { researchArticles } from "@/content/research-articles";

function renderInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-zinc-800/70 px-1.5 py-0.5 font-mono text-sm text-cyan-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function ResearchPage() {
  return (
    <div className="container-width py-20 sm:py-28">
      <header className="max-w-3xl">
        <p className="section-label">Research / 001</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Research & Development
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Exploring network protocols, systems security, and privacy-preserving
          communication through research and technical experimentation.
        </p>
      </header>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="section-label">Bachelor thesis · in progress</p>
          <span className="rounded border border-amber-400/30 bg-amber-400/5 px-2 py-1 font-mono text-xs text-amber-200">
            WORK IN PROGRESS
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Light-weight Anonymous Communication Protocol in Internet Like Environment
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
          This thesis studies information exposure during the PHI back-off
          path-establishment procedure. The work will characterize what can be
          observed at different positions in a controlled LAN, then assess
          possible helper-node or path-selection mitigations if exposure is
          identified. The investigation is ongoing; no findings are presented
          as established results.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Network Security",
            "Anonymous Communication",
            "Routing",
            "Privacy",
            "Simulation",
            "PHI",
          ].map((topic) => (
            <span
              key={topic}
              className="rounded border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-400"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <div className="mb-8">
          <p className="section-label">Thesis reading notes / Expanded write-up</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Protocol write-ups
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            These expanded write-ups develop the notes from my thesis reading
            into a continuous research article: how each protocol works, what
            its threat model covers, and where its design has limits. Published
            paper results are identified as such; they are not thesis results.
          </p>
        </div>

        <div className="max-w-4xl">
          {researchArticles.map((article, index) => (
            <article
              key={article.slug}
              id={article.slug}
              className="scroll-mt-24 border-t border-zinc-800 py-10 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <p className="font-mono text-sm text-cyan-400">
                  {index.toString().padStart(2, "0")} / {article.acronym}
                </p>
                <p className="font-mono text-xs text-zinc-500">
                  {article.year} · {article.authors}
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {article.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                {article.summary}
              </p>

              <div className="mt-8 space-y-8">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h4 className="text-lg font-medium text-zinc-100">
                      {section.heading}
                    </h4>
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-3 leading-7 text-zinc-400"
                      >
                        {renderInlineCode(paragraph)}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <p className="mt-8 border-l-2 border-cyan-400/50 pl-4 leading-7 text-zinc-300">
                <span className="mr-2 font-mono text-xs text-cyan-300">
                  THESIS CONNECTION
                </span>
                {article.thesisRelevance}
              </p>

              <a
                href={article.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
              >
                Original paper: {article.paperLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 border-t border-zinc-800 pt-10 md:grid-cols-2">
        <article className="surface rounded-lg p-6">
          <p className="font-mono text-xs text-cyan-400">
            RESEARCH INTEREST / 01
          </p>

          <h3 className="mt-5 text-xl font-medium">
            Privacy-Preserving Networks
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            Understanding anonymity properties, routing architectures,
            adversary models, and information leakage in network protocols.
          </p>
        </article>

        <article className="surface rounded-lg p-6">
          <p className="font-mono text-xs text-cyan-400">
            RESEARCH INTEREST / 02
          </p>

          <h3 className="mt-5 text-xl font-medium">
            Network Simulation & Evaluation
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            Studying network behavior through simulation, controlled
            experiments, and quantitative performance and security evaluation.
          </p>
        </article>
      </section>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <p className="section-label">Research artifacts</p>

        <h2 className="mt-4 text-2xl font-semibold">
          Documentation & results
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
          This page contains on-site explanations of LAP, Dovetail, PHI, dPHI,
          gPHI, HORNET, and P⁵HI (P4-PHI), with references to their original
          papers. Experimental results will be added after the thesis
          evaluation is complete.
        </p>
      </section>
    </div>
  );
}
