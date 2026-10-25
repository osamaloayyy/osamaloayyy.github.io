const workIndex = [
  {
    id: "01",
    category: "ETHICAL HACKING",
    title: "Ethical Hacking Assignment Reports",
    description:
      "Nine reports covering reconnaissance, exploitation, vulnerable-machine exercises, Linux privilege escalation, and post-exploitation topics.",
    tags: ["Lab Reports", "Reconnaissance", "Exploitation"],
    status: "9 REPORTS LOCATED",
    href: "/security#ethical-hacking",
  },
  {
    id: "02",
    category: "EXPLOIT DEVELOPMENT",
    title: "Buffer Overflow Write-ups",
    description:
      "Two source notes: a coursework report on fuzzing and EIP control, and a separate Sync Breeze 10.0.28 exploit-development study.",
    tags: ["Fuzzing", "EIP", "Debugging"],
    status: "2 SOURCE NOTES LOCATED",
    href: "/security#buffer-overflow",
  },
  {
    id: "03",
    category: "OSCP STUDY",
    title: "OSCP Course Notes",
    description:
      "Course and supplemental notes on scanning, common services, Active Directory, web vulnerabilities, privilege escalation, and exploit development.",
    tags: ["Nmap", "Active Directory", "Web Security"],
    status: "COURSE + SUPPLEMENTAL NOTES",
    href: "/security#oscp-course",
  },
  {
    id: "04",
    category: "OSCP LABS",
    title: "Machine Walkthroughs",
    description:
      "Machine archives are present in the local course folder, but authored machine-specific walkthroughs have not been located yet.",
    tags: ["OSCP", "Lab Practice"],
    status: "TO BE ADDED",
    href: "/security#oscp-machines",
  },
];

export default function WritingPage() {
  return (
    <div className="container-width py-20 sm:py-28">
      <header className="max-w-3xl">
        <p className="section-label">Writing / 003</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Technical Writing
          <br />
          <span className="text-zinc-500">& Security Reports</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Security reports and technical study notes from my coursework and
          independent practice. My thesis write-up and protocol literature
          review are published in the Research section.
        </p>
      </header>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Other work / Index</p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Security reports & study notes
            </h2>
          </div>

          <span className="font-mono text-xs text-zinc-500">
            {workIndex.length.toString().padStart(2, "0")} ENTRIES
          </span>
        </div>

        <div className="space-y-4">
          {workIndex.map((article) => (
            <article
              key={article.id}
              className="project-card surface rounded-lg p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-cyan-400">
                  {article.category}
                </span>

                <span className="font-mono text-xs text-zinc-500">
                  {article.status}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-medium sm:text-2xl">
                {article.title}
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                {article.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={article.href}
                className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
              >
                View work overview
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <p className="section-label">Publishing status</p>

        <h2 className="mt-3 text-2xl font-semibold">
          Security write-ups in progress
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
          The Research section contains the expanded thesis and protocol
          write-up. Detailed ethical hacking, buffer overflow, and OSCP machine
          write-ups will be added here as they are prepared from my source
          notes.
        </p>
      </section>
    </div>
  );
}
