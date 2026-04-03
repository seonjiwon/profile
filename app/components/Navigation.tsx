export default function Navigation() {
  return (
    <nav className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 bg-accent"
            style={{ borderRadius: "50%" }}
          />
          <span className="font-mono text-[11px] tracking-[0.2em] text-foreground uppercase font-medium">
            JW.DEV
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] tracking-wide text-muted hover:text-foreground transition-colors duration-200 uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
