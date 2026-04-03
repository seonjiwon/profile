export default function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="section-label">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-medium">01</span>
          <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bio */}
          <div className="md:col-span-7">
            <div className="bg-surface border border-border p-6" style={{ borderRadius: "3px" }}>
              <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4 font-medium">Bio</div>
              <p className="text-[14px] text-muted-light leading-[1.8] mb-4">
                안녕하세요, 컴퓨터공학과에 재학 중인 선지원입니다. 소프트웨어 개발의 전 과정에
                관심이 많으며, 특히 백엔드 시스템 설계와 AI 응용 분야에 집중하고 있습니다.
              </p>
              <p className="text-[14px] text-muted-light leading-[1.8] mb-4">
                대학에서 알고리즘, 데이터베이스, 운영체제 등 CS 기초를 탄탄히 다졌으며,
                다수의 팀 프로젝트와 해커톤을 통해 실전 개발 경험을 쌓아왔습니다.
                최근에는 LLM과 RAG 기술을 활용한 프로젝트에 몰두하고 있습니다.
              </p>
              <p className="text-[14px] text-muted-light leading-[1.8]">
                코드 품질과 아키텍처에 대한 고민을 즐기며,
                기술로 실질적인 가치를 만들어내는 것을 목표로 합니다.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Education */}
            <div className="bg-surface border border-border p-5" style={{ borderRadius: "3px" }}>
              <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4 font-medium">Education</div>
              <div className="space-y-3">
                <div>
                  <div className="text-[14px] text-foreground font-medium">OO대학교 컴퓨터공학과</div>
                  <div className="font-mono text-[11px] text-muted mt-0.5">2021.03 - 현재 (4학년)</div>
                  <div className="font-mono text-[11px] text-muted-light mt-1 flex gap-3">
                    <span>평균평점 3.97 / 4.5</span>
                    <span className="text-border">|</span>
                    <span>전공평점 4.0 / 4.5</span>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-border" />
                <div>
                  <div className="text-[14px] text-foreground font-medium">우리FISA AI 엔지니어링</div>
                  <div className="font-mono text-[11px] text-muted mt-0.5">2025.07 - 2026.01</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-surface border border-border p-5" style={{ borderRadius: "3px" }}>
              <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4 font-medium">Skills</div>
              <div className="space-y-3">
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1.5">Language</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Java"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                        style={{ borderRadius: "3px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1.5">Framework</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Spring MVC", "JPA"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                        style={{ borderRadius: "3px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1.5">DBMS</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["MySQL", "Redis"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                        style={{ borderRadius: "3px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1.5">Infra</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["AWS EC2", "RDS", "Github Actions", "Docker"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                        style={{ borderRadius: "3px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-wider mb-1.5">Monitoring</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Prometheus", "Grafana"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-mono text-tag-text bg-tag-bg border border-tag-border"
                        style={{ borderRadius: "3px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
