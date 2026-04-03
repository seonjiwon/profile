export default function HeroSection() {
  return (
    <section className="relative hero-gradient border-b border-border">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 flex items-start gap-16">
        {/* Left: Text */}
        <div className="flex-1 stagger-children">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-6 font-medium">
            Computer Science Student
          </div>
          <h1 className="text-5xl font-light tracking-tight leading-[1.15] mb-5">
            <span className="text-muted">Hello, I&apos;m</span>
            <br />
            <span className="text-foreground font-semibold">
              선지원
            </span>
          </h1>
          <p className="text-[15px] text-muted-light max-w-lg leading-relaxed">
            조용하지만 흔들리지 않는 시스템,
            <br/>
            그 안정성을 설계하고 싶은 백엔드 개발자 선지원입니다.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <a
              href="#projects"
              className="px-4 py-2 bg-foreground text-surface font-mono text-[11px] tracking-wider uppercase hover:bg-accent transition-colors"
              style={{ borderRadius: "4px" }}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-border text-muted-light font-mono text-[11px] tracking-wider uppercase hover:border-foreground hover:text-foreground transition-all"
              style={{ borderRadius: "4px" }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hidden md:block flex-shrink-0">
          <div className="profile-image-wrapper w-56 h-72 bg-background-warm relative overflow-hidden" style={{ borderRadius: "2px" }}>
            <img 
              src="/profile.jpg" 
              alt="선지원"
              className="w-full h-full object-cover"
            />
            {/* Corner marks */}
            <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/25" />
            <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/25" />
            <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-accent/25" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/25" />
          </div>
        </div>
      </div>

      {/* Philosophy Cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="border border-border/60 bg-surface/30 px-6 py-6" style={{ borderRadius: "3px" }}>
            <div className="font-mono text-[9px] tracking-[0.2em] text-accent/60 uppercase mb-3">Readable Code</div>
            <p className="text-[13px] text-muted-light leading-[1.9]">
              당장 돌아가는 코드보다, 다음 사람이 읽고 이어갈 수 있는 코드를 먼저 생각합니다.
              반복되는 비효율을 발견하면 넘기지 않고, 개선 방안을 제안하고 직접 적용하는 편입니다.
            </p>
          </div>
          <div className="border border-border/60 bg-surface/30 px-6 py-6" style={{ borderRadius: "3px" }}>
            <div className="font-mono text-[9px] tracking-[0.2em] text-accent/60 uppercase mb-3">Deep Learning</div>
            <p className="text-[13px] text-muted-light leading-[1.9]">
              학습할 때 &quot;왜 이렇게 동작하는가&quot;를 끝까지 추적합니다.
              답을 아는 것보다 원리를 설명할 수 있는 상태를 기준으로 삼습니다.
            </p>
          </div>
          <div className="border border-border/60 bg-surface/30 px-6 py-6" style={{ borderRadius: "3px" }}>
            <div className="font-mono text-[9px] tracking-[0.2em] text-accent/60 uppercase mb-3">Collaboration</div>
            <p className="text-[13px] text-muted-light leading-[1.9]">
              협업에서 가장 중요한 건 서로의 생각을 이해하는 것이라고 믿습니다.
              코드 리뷰를 설계 의도를 공유하는 과정으로 활용하며,
              팀의 기술적 판단을 함께 다듬어갑니다.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-border opacity-40" />
      <div className="absolute top-0 right-[14%] w-[1px] h-full bg-border opacity-15" />
    </section>
  );
}
