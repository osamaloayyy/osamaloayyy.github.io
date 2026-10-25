const navigation = [
  { label: "Research", href: "/research" },
  { label: "Security", href: "/security" },
  { label: "Writing", href: "/writing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-width flex min-h-16 items-center justify-between gap-6"
      >
        <a href="/" className="flex items-center gap-3">
          <span className="font-mono text-lg font-bold text-cyan-400">
            OSAMA MANSOUR
          </span>

          <span className="hidden text-sm font-medium text-zinc-200 sm:block">
            Personal Portfolio
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="#contact"
            className="hidden rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-400 sm:inline-flex"
          >
            Contact
          </a>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <a href="https://github.com/osamaloayyy" className="text-sm text-zinc-400 transition-colors hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/osama-loay-b086b9336" className="text-sm text-zinc-400 transition-colors hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/osamaloayy" className="text-sm text-zinc-400 transition-colors hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </nav>
    </header>
  );
}

