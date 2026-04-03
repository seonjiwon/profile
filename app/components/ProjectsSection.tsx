const PROJECTS = [
  {
    title: "Code Combine",
    desc: "알고리즘 스터디 협업 플랫폼",
    tags: ["Java", "Docker", "AWS"],
    year: "2026.02 - ",
  },
  // {
  //   title: "실시간 협업 에디터",
  //   desc: "CRDT 기반의 실시간 문서 편집기. WebSocket을 통한 동시 편집과 충돌 해결을 지원합니다.",
  //   tags: ["TypeScript", "React", "WebSocket", "Yjs"],
  //   year: "2025",
  // },
  // {
  //   title: "분산 데이터 처리 엔진",
  //   desc: "대용량 로그 데이터를 실시간으로 수집, 변환, 적재하는 ETL 파이프라인 구축 프로젝트.",
  //   tags: ["Java", "Kafka", "Spark", "AWS"],
  //   year: "2024",
  // },
  // {
  //   title: "개인 포트폴리오 + RAG 챗봇",
  //   desc: "이 사이트입니다. RAG 기반 챗봇을 통해 방문자가 저에 대해 자연어로 질문할 수 있습니다.",
  //   tags: ["Next.js", "TypeScript", "RAG", "Tailwind"],
  //   year: "2026",
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border bg-background-warm/50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-medium">02</span>
          <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="project-card group bg-surface border border-border p-5 flex flex-col gap-3 cursor-pointer"
              style={{ borderRadius: "3px" }}
            >
              {/* Thumbnail */}
              <div
                className="w-full aspect-[16/9] bg-background-warm border border-border-light relative overflow-hidden"
                style={{ borderRadius: "2px" }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                  <svg width="100%" height="100%" viewBox="0 0 320 180" fill="none">
                    <rect x="40" y="30" width="240" height="8" rx="1" fill="#333" />
                    <rect x="40" y="50" width="180" height="6" rx="1" fill="#333" opacity="0.6" />
                    <rect x="40" y="66" width="200" height="6" rx="1" fill="#333" opacity="0.4" />
                    <rect x="40" y="82" width="140" height="6" rx="1" fill="#333" opacity="0.3" />
                    <rect x="40" y="102" width="60" height="20" rx="1" fill="#333" opacity="0.15" />
                    <rect x="110" y="102" width="60" height="20" rx="1" fill="#333" opacity="0.15" />
                  </svg>
                </div>
                <div className="absolute top-3 right-3 font-mono text-[9px] text-muted tracking-wider">{project.year}</div>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-[14px] font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed mt-1.5 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
                <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors mt-0.5 flex-shrink-0">
                  &rarr;
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                    style={{ borderRadius: "3px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
