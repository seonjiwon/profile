export default function PhilosophySection() {
  return (
    <section className="border-b border-border bg-background-warm/30">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border p-8" style={{ borderRadius: "3px" }}>
            <div className="space-y-5">
              <p className="text-[15px] text-muted-light leading-[1.8]">
                당장 돌아가는 코드보다, 다음 사람이 읽고 이어갈 수 있는 코드를 먼저 생각합니다. 
                반복되는 비효율을 발견하면 넘기지 않고, 개선 방안을 제안하고 직접 적용하는 편입니다.
              </p>
              <p className="text-[15px] text-muted-light leading-[1.8]">
                학습할 때 "왜 이렇게 동작하는가"를 끝까지 추적합니다. 
                답을 아는 것보다 원리를 설명할 수 있는 상태를 기준으로 삼습니다.
              </p>
              <p className="text-[15px] text-muted-light leading-[1.8]">
                협업에서 가장 중요한 건 서로의 생각을 이해하는 것이라고 믿습니다. 
                코드 리뷰를 오류 검수가 아닌 설계 의도를 공유하는 과정으로 활용하며, 
                팀의 기술적 판단을 함께 다듬어가는 데 힘을 기울여 왔습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
