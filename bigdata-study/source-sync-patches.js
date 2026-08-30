(() => {
  const q33 = DATA.QUESTIONS.find((question) => question.id === 33);
  if (q33) {
    q33.type = 'choice';
    q33.choices = ['25/12', '35/12', '35/6', '49/12'];
    q33.answer = 1;
    q33.explanation = '1부터 6까지의 이산균등분포 분산은 (6²-1)/12=35/12이므로 정답은 ②입니다.';
    delete q33.accepted;
    delete q33.sourceNote;
  }

  const originalRenderHome = renderHome;
  renderHome = function renderHomeWithLatestNotionSource() {
    originalRenderHome();
    const footer = document.querySelector('.footer-note');
    if (footer) {
      footer.innerHTML = 'Notion의 최신 제12회 기출문제 페이지에 정리된 80문항, 33번의 보강 선택지, 21번·63번의 보강 상자그림을 기준으로 구성했습니다.<br />문제와 정답 페이지가 충돌한 항목만 근거를 표시하고 교정했습니다.';
    }
  };

  renderDiagram = function renderLatestNotionDiagram(type) {
    if (type === 'boxplot-treatment') {
      return `
        <div class="diagram-card" role="img" aria-label="Notion에 보강된 치료제 A와 B의 상자그림 관계">
          <svg viewBox="0 0 330 160" xmlns="http://www.w3.org/2000/svg">
            <line x1="42" y1="136" x2="312" y2="136" stroke="#8b95a8" stroke-width="1" />
            <text x="18" y="50" font-size="14" fill="#253653">A</text>
            <text x="18" y="108" font-size="14" fill="#253653">B</text>
            <line x1="62" y1="45" x2="242" y2="45" stroke="#3457d5" stroke-width="2" />
            <line x1="62" y1="35" x2="62" y2="55" stroke="#3457d5" stroke-width="2" />
            <line x1="242" y1="35" x2="242" y2="55" stroke="#3457d5" stroke-width="2" />
            <rect x="92" y="27" width="112" height="36" fill="#e9edff" stroke="#3457d5" stroke-width="2" rx="3" />
            <line x1="136" y1="27" x2="136" y2="63" stroke="#3457d5" stroke-width="3" />
            <line x1="142" y1="101" x2="250" y2="101" stroke="#117864" stroke-width="2" />
            <line x1="142" y1="91" x2="142" y2="111" stroke="#117864" stroke-width="2" />
            <line x1="250" y1="91" x2="250" y2="111" stroke="#117864" stroke-width="2" />
            <rect x="166" y="83" width="60" height="36" fill="#e4f5ef" stroke="#117864" stroke-width="2" rx="3" />
            <line x1="199" y1="83" x2="199" y2="119" stroke="#117864" stroke-width="3" />
            <circle cx="281" cy="101" r="5" fill="#b32832" />
            <circle cx="301" cy="101" r="5" fill="#b32832" />
            <text x="58" y="151" font-size="10" fill="#727d90">짧음</text>
            <text x="278" y="151" font-size="10" fill="#727d90">긺</text>
          </svg>
          <p class="diagram-caption">Notion에 보강된 SVG와 같은 판단 관계를 사용합니다. A의 중앙값은 B보다 작고, A의 IQR은 B보다 크며, B에 이상치 2개가 있습니다.</p>
        </div>`;
    }
    if (type === 'boxplot-groups') {
      return `
        <div class="diagram-card" role="img" aria-label="Notion에 보강된 그룹 A와 B의 상자그림 관계">
          <svg viewBox="0 0 330 150" xmlns="http://www.w3.org/2000/svg">
            <line x1="38" y1="128" x2="312" y2="128" stroke="#8b95a8" stroke-width="1" />
            <text x="18" y="50" font-size="14" fill="#253653">A</text>
            <text x="18" y="105" font-size="14" fill="#253653">B</text>
            <line x1="135" y1="45" x2="265" y2="45" stroke="#3457d5" stroke-width="2" />
            <line x1="135" y1="35" x2="135" y2="55" stroke="#3457d5" stroke-width="2" />
            <line x1="265" y1="35" x2="265" y2="55" stroke="#3457d5" stroke-width="2" />
            <rect x="170" y="27" width="60" height="36" fill="#e9edff" stroke="#3457d5" stroke-width="2" rx="3" />
            <line x1="208" y1="27" x2="208" y2="63" stroke="#3457d5" stroke-width="3" />
            <line x1="55" y1="100" x2="265" y2="100" stroke="#117864" stroke-width="2" />
            <line x1="55" y1="90" x2="55" y2="110" stroke="#117864" stroke-width="2" />
            <line x1="265" y1="90" x2="265" y2="110" stroke="#117864" stroke-width="2" />
            <rect x="95" y="82" width="125" height="36" fill="#e4f5ef" stroke="#117864" stroke-width="2" rx="3" />
            <line x1="150" y1="82" x2="150" y2="118" stroke="#117864" stroke-width="3" />
            <circle cx="292" cy="100" r="5" fill="#b32832" />
            <text x="51" y="143" font-size="10" fill="#727d90">작음</text>
            <text x="274" y="143" font-size="10" fill="#727d90">큼</text>
          </svg>
          <p class="diagram-caption">Notion에 보강된 SVG와 같은 판단 관계를 사용합니다. A의 중앙값은 B보다 크고, B의 IQR이 더 크며, 이상치는 B에만 있습니다.</p>
        </div>`;
    }
    return '';
  };
})();
