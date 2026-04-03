const CONTACT_INFO = [
  { 
    label: "Email", 
    value: "tommys915@gmail.com", 
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
  },
  { 
    label: "GitHub", 
    value: "github.com/seonjiwon", 
    icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 17.97 6.14 17.97c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.7.114 2.5.336 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z" 
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-medium">04</span>
          <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Contact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              className="group bg-surface border border-border hover:border-accent/40 transition-all p-5 flex items-start gap-4 cursor-pointer"
              style={{ borderRadius: "3px" }}
            >
              <span
                className="w-8 h-8 bg-background-warm border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors"
                style={{ borderRadius: "4px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d={item.icon} />
                </svg>
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-1">
                  {item.label}
                </div>
                <div className="text-[13px] text-muted-light group-hover:text-foreground transition-colors truncate">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
