const securityAreas = [
  {
    id: "01",
    title: "Malware Analysis",
    description:
      "Studying program behavior, executable formats, debugging techniques, and methods for understanding potentially malicious software.",
    tags: ["Static Analysis", "Dynamic Analysis", "Linux"],
  },
  {
    id: "02",
    title: "Exploit Development",
    description:
      "Learning how memory corruption vulnerabilities work, how execution flow can be influenced, and how mitigations affect exploitability in controlled environments.",
    tags: ["C/C++", "Assembly", "Debugging"],
  },
  {
    id: "03",
    title: "Systems Security",
    description:
      "Investigating low-level system behavior, operating system interfaces, memory management, and security boundaries.",
    tags: ["Operating Systems", "Memory", "Internals"],
  },
  {
    id: "04",
    title: "Network Security",
    description:
      "Exploring network architectures, protocol behavior, adversary models, and the security and privacy properties of communication systems.",
    tags: ["Networking", "Protocols", "Privacy"],
  },
];

const workCollections: {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  items: { title: string; description: string }[];
}[] = [
  {
    id: "ethical-hacking",
    label: "COURSEWORK / 09 REPORTS",
    title: "Ethical Hacking Lab Reports",
    description:
      "Nine assignment reports from controlled coursework and vulnerable lab environments. Topics include reconnaissance and scanning, exploitation fundamentals, Linux privilege escalation, and post-exploitation analysis.",
    details:
      "Machine-focused reports cover Kioptrix, Kevgir, BlackPearl, and an EternalBlue exercise.",
    tags: ["Reconnaissance", "Exploitation", "Privilege Escalation", "Lab Machines"],
    items: [
      {
        title: "Assignment 2 — Scanning",
        description: "Host discovery, manual checks, and Nmap service enumeration.",
      },
      {
        title: "Assignment 3 — Basic Exploits",
        description: "BlackPearl lab: service enumeration and vulnerability analysis.",
      },
      {
        title: "Assignment 3 — Blue (EternalBlue)",
        description: "Reconnaissance with automated and manual exploitation approaches.",
      },
      {
        title: "Exploitation Basics",
        description: "Exploit concepts, payload types, and Metasploit practice.",
      },
      {
        title: "Kioptrix Walkthrough",
        description: "Host discovery, port scanning, and vulnerability research.",
      },
      {
        title: "Kevgir Machine",
        description: "Reconnaissance with FTP and NFS service investigation.",
      },
      {
        title: "Buffer Overflow",
        description: "Enumeration, fuzzing, and confirming EIP control in a lab.",
      },
      {
        title: "Linux Privilege Escalation",
        description: "Service enumeration and privilege escalation in a lab.",
      },
      {
        title: "Covering Tracks",
        description: "A lab exercise on service enumeration and post-exploitation traces.",
      },
    ],
  },
  {
    id: "buffer-overflow",
    label: "EXPLOIT DEVELOPMENT / 2 BUFFER OVERFLOW NOTES",
    title: "Buffer Overflow Write-ups",
    description:
      "Two focused notes document buffer-overflow analysis in controlled lab targets, including a coursework exercise and a separate vulnerable-software study.",
    details:
      "One follows enumeration, fuzzing, and EIP control; the other studies a stack-based overflow in Sync Breeze 10.0.28.",
    tags: ["Fuzzing", "EIP Control", "Debugging", "Windows"],
    items: [
      {
        title: "Assignment 5 — Buffer Overflow",
        description: "Enumeration, fuzzing, and confirming EIP control in a lab.",
      },
      {
        title: "Sync Breeze 10.0.28 — Buffer Overflow",
        description: "A separate stack-based exploit-development study note.",
      },
    ],
  },
  {
    id: "oscp-course",
    label: "OSCP STUDY / COURSE + SUPPLEMENTAL NOTES",
    title: "OSCP Course Notes",
    description:
      "A study collection covering Nmap, ports and protocols, SMB, SNMP, vulnerability scanning, Active Directory lab setup, web attacks and XSS, path traversal and LFI, and password cracking.",
    details:
      "The course vault has 20 Markdown files, 13 with content. A separate OSCP Obsidian vault adds notes on privilege escalation, Active Directory, password cracking, and exploit development.",
    tags: ["Nmap", "Active Directory", "Web Security", "Linux"],
    items: [
      {
        title: "Network discovery",
        description: "Nmap, ports and protocols, and service enumeration.",
      },
      {
        title: "Core services",
        description: "SMB and SNMP notes with service-focused study material.",
      },
      {
        title: "Active Directory labs",
        description: "Lab setup notes and introductory vulnerability scanning.",
      },
      {
        title: "Web security",
        description: "Web attack notes, XSS review, and path traversal/LFI.",
      },
      {
        title: "Password cracking",
        description: "Course study notes on password-cracking techniques.",
      },
      {
        title: "Supplemental OSCP study notes",
        description:
          "Additional notes cover Linux and Windows privilege escalation, Active Directory, and public exploit analysis.",
      },
    ],
  },
  {
    id: "oscp-machines",
    label: "OSCP LABS / WRITE-UPS TO ADD",
    title: "Machine Walkthroughs",
    description:
      "The course folder includes lab machine archives, but I did not find authored machine walkthroughs alongside them yet. This collection will grow as reports are prepared.",
    details:
      "No machine-specific OSCP write-up is linked here at this stage.",
    tags: ["OSCP", "Lab Practice", "Coming Soon"],
    items: [],
  },
];

export default function SecurityPage() {
  return (
    <div className="container-width py-20 sm:py-28">
      <header className="max-w-3xl">
        <p className="section-label">Security / 002</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Systems Security
          <br />
          <span className="text-zinc-500">& Technical Exploration</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Exploring software behavior, operating systems, memory safety,
          malware analysis, and network security through hands-on technical
          investigation.
        </p>
      </header>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <div className="mb-8">
          <p className="section-label">Areas of interest</p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Technical focus
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {securityAreas.map((area) => (
            <article
              key={area.id}
              className="project-card surface rounded-lg p-6 sm:p-8"
            >
              <span className="font-mono text-sm text-cyan-400">
                {area.id}
              </span>

              <h3 className="mt-5 text-xl font-medium">
                {area.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {area.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-800 pt-10">
        <p className="section-label">Selected work</p>

        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          Write-ups & study notes
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
          A catalog of coursework reports, exploit-development practice, and
          OSCP study materials. The notes are based on controlled labs and
          intentionally vulnerable targets.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {workCollections.map((work) => (
            <article
              key={work.id}
              id={work.id}
              className="project-card surface scroll-mt-24 rounded-lg p-6 sm:p-7"
            >
              <p className="font-mono text-xs text-cyan-400">{work.label}</p>
              <h3 className="mt-4 text-xl font-medium">{work.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                {work.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {work.details}
              </p>
              {work.items.length > 0 && (
                <ul className="mt-5 space-y-3 border-t border-zinc-800 pt-5">
                  {work.items.map((item) => (
                    <li key={item.title}>
                      <h4 className="text-sm font-medium text-zinc-200">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
