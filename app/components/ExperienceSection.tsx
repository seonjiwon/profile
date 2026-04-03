const EXPERIENCES = [
  {
    period: "2026.01 - Current",
    title: "우리FIS Academy 클라우드 서비스 개발",
  },
  {
    period: "2019.03 - 2026.08",
    title: "상명대학교 컴퓨터 과학 전공",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-medium">03</span>
          <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Experience</span>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-border" />

          <div className="space-y-8">
            {EXPERIENCES.map((item, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="w-[14px] flex-shrink-0 flex justify-center pt-1.5 relative z-10">
                  <span
                    className={`w-3 h-3 border-2 bg-background ${
                      i === 0 ? "border-accent" : "border-border"
                    }`}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="flex-1 pb-1">
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1">{item.period}</div>
                  <div className="text-[14px] font-medium text-foreground">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
