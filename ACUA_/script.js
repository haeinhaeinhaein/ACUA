const stages = [
  "구도 분석 중...",
  "기법 검토 중...",
  "색채 조화율 산출 중...",
  "역사적 가치 산정 중..."
];

const narrativePools = {
  low: {
    comments: [
      "장인의 손끝보다 자신감이 먼저 전시장에 입장한, 대담하되 다소 무책임한 제스처입니다.",
      "작가는 비례와 문법을 과감히 해체하며, 관람객에게 해석의 노동을 전가하는 미학을 실천합니다."
    ],
    analyses: [
      "이 화면은 키치함을 고급 담론의 외피로 치환하며 해체주의적 시각을 통해 본질적 층위를 끝없이 유예합니다. 붓질의 방향은 형이상학적 픽셀의 집단적 망설임처럼 진동하고, 관람자는 미완의 확신 속에서 미학적 책임을 자발적으로 떠안게 됩니다.",
      "작품은 표면의 화려함을 전략적으로 과잉 배치하여 자본주의적 미소를 시각 언어로 제도화합니다. 동시에 해체주의적 시각은 서사의 중심을 고의로 해산시키며, 키치함과 숭고 사이의 불편한 협상을 본질적 층위라는 이름으로 정당화합니다."
    ],
    comparisons: [
      "이 작품에서는 마르셀 뒤샹의 변기보다 더 강력한 허무주의가 느껴집니다. 테이트 모던 소장 가능성은 3.7%로 희박하지만, 거실 벽지와의 조화는 98%에 달합니다.",
      "잭슨 폴록이 실수로 쏟은 커피 자국 같은 이 텍스처는 현대인의 불안을 포스트-모더니즘적으로 승화시켰군요. 본 시스템 기준 예상 낙찰가는 {valuation}입니다."
    ]
  },
  mid: {
    comments: [
      "질서와 우연의 불화가 빚어낸 표면은, 본질적 층위를 가장한 유쾌한 혼돈으로 읽힙니다.",
      "형식은 숭고를 주장하지만, 세부는 자본주의적 미소로 모든 긴장을 능청스럽게 봉합합니다."
    ],
    analyses: [
      "이 구성은 조형적 완결보다 개념적 과장을 우선하며, 형이상학적 픽셀 단위에서조차 의미의 인플레이션을 감행합니다. 그 결과 관람자는 자본주의적 미소 뒤편에서 작동하는 키치함의 윤리를 목격하고, 해체주의적 시각이 남긴 본질적 층위의 공백을 체험하게 됩니다.",
      "색면과 흔적은 서로를 해명하지 않은 채 병치되며, 본질적 층위는 의도적으로 접근 불가능한 신화로 승격됩니다. 이때 형이상학적 픽셀은 작품의 침묵을 번역하는 사변적 장치가 되고, 키치함은 자본주의적 미소와 결탁하여 고상한 불안을 생산합니다."
    ],
    comparisons: [
      "칸딘스키가 보았다면 눈물을 흘렸을 법한 이 기하학적 파괴는, 사실 작가의 수전증이 만든 우연의 산물로 보입니다. 미학적 가치는 국가 예산급이나, 실제 판매는 어려워 보입니다.",
      "카라바조의 명암과 뒤샹의 냉소를 동시에 소환하려는 야심이 감지되나, 결과적으로는 전시 도슨트의 설명을 더 필요로 하는 작품이 되었습니다. 기관 소장 확률은 낮지만 SNS 회자율은 비정상적으로 높을 전망입니다."
    ]
  },
  high: {
    comments: [
      "형이상학적 픽셀의 진동이 뜻밖의 균형을 획득하며, 해체주의적 시각이 마침내 설득력을 띠는 드문 순간입니다.",
      "키치함과 본질적 층위의 충돌이 오히려 작품의 추진력이 되어, 자본주의적 미소조차 미학적 장치로 기능합니다."
    ],
    analyses: [
      "본 작품은 해체주의적 시각을 표면적 장식으로 소비하지 않고, 본질적 층위의 재배열이라는 과업으로 확장합니다. 형이상학적 픽셀 단위의 긴장이 유기적으로 연결되며, 키치함은 비평적 자의식으로 전환되어 예상외의 완성도를 구성합니다.",
      "붓질의 리듬과 색면의 간극은 자본주의적 미소를 냉소가 아닌 전략으로 재정의합니다. 결과적으로 작품은 본질적 층위와 키치함의 대립을 생산적으로 봉합하며, 해체주의적 시각을 동시대적 설득력으로 환원합니다."
    ],
    comparisons: [
      "뒤샹의 문제의식과 칸딘스키의 구조 감각이 뜻밖에 화해한 사례로 읽히며, 카라바조식 긴장감까지 은근히 호출합니다. 제도권 소장 가능성은 농담처럼 시작되지만 이번에는 농담으로만 끝나지 않을 수도 있습니다.",
      "초기에는 과장처럼 보였던 제스처가 후반부에서 명확한 문법으로 회수됩니다. 미술사적 참조의 밀도가 높아, 기관 컬렉션 검토 단계까지는 현실적으로 기대해볼 만합니다."
    ]
  }
};

const metricLabels = [
  "키아로스쿠로 지수",
  "데포르마시옹 강도",
  "색채 엔트로피",
  "존재론적 깊이"
];

const uploadSection = document.getElementById("uploadSection");
const loadingSection = document.getElementById("loadingSection");
const resultSection = document.getElementById("resultSection");
const archiveSection = document.getElementById("archiveSection");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const stageText = document.getElementById("stageText");
const progressBar = document.getElementById("progressBar");
const uploadedImage = document.getElementById("uploadedImage");
const professionalComment = document.getElementById("professionalComment");
const analysisText = document.getElementById("analysisText");
const comparisonText = document.getElementById("comparisonText");
const metricList = document.getElementById("metricList");
const scoreText = document.getElementById("scoreText");
const valueText = document.getElementById("valueText");
const resetButton = document.getElementById("resetButton");
const aboutLink = document.getElementById("aboutLink");
const archiveLink = document.getElementById("archiveLink");
const archiveBackButton = document.getElementById("archiveBackButton");
const archiveEmptyText = document.getElementById("archiveEmptyText");
const archiveList = document.getElementById("archiveList");
const aboutModal = document.getElementById("aboutModal");
const aboutCloseButton = document.getElementById("aboutCloseButton");

const ARCHIVE_STORAGE_KEY = "acua-analysis-archive";
const ARCHIVE_LIMIT = 30;
let currentReport = null;

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function scoreToMetricValue(score, bias = 0) {
  const normalized = (score - 1) / 9;
  const base = normalized * 100;
  const jitter = (Math.random() - 0.5) * 24;
  const adjusted = base + bias + jitter;
  return Math.max(3, Math.min(99, Math.round(adjusted)));
}

function generateScoreValue() {
  return Number((1 + Math.random() * 9).toFixed(1));
}

function randomLogRange(min, max) {
  const logMin = Math.log10(min);
  const logMax = Math.log10(max);
  const sampled = logMin + Math.random() * (logMax - logMin);
  return Math.round(10 ** sampled);
}

function scoreToWonValue(score) {
  // Score-correlated, but with broad overlap so 10만~1,000만원 also appears often.
  if (score < 3.5) return randomLogRange(1000, 8000000);
  if (score < 6.5) return randomLogRange(100000, 50000000);
  if (score < 8.5) return randomLogRange(1000000, 5000000000);
  return randomLogRange(50000000, 80000000000);
}

function formatWonValue(value) {
  return `₩${new Intl.NumberFormat("ko-KR").format(value)}`;
}

function injectValuationText(text, valueText) {
  return text.replaceAll("{valuation}", valueText);
}

function getNarrativeTier(score) {
  if (score < 4) return "low";
  if (score < 7) return "mid";
  return "high";
}

function renderMetricsFromValues(values) {
  metricList.innerHTML = "";
  metricLabels.forEach((label, idx) => {
    const val = values[idx];
    const item = document.createElement("div");
    item.className = "metric-item";
    item.innerHTML = `
      <div class="metric-head">
        <span>${label}</span>
        <span>${val}%</span>
      </div>
      <div class="metric-track">
        <div class="metric-fill" style="width:${val}%"></div>
      </div>
    `;
    metricList.appendChild(item);
  });
}

function buildReportData(imageSrc) {
  const score = generateScoreValue();
  const tier = getNarrativeTier(score);
  const pool = narrativePools[tier];
  const wonValue = scoreToWonValue(score);
  const wonText = formatWonValue(wonValue);
  const rawComparison = pickRandom(pool.comparisons);
  const metricBiases = [6, -4, 2, 9];
  const metricValues = metricBiases.map((bias) => scoreToMetricValue(score, bias));

  return {
    id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    createdAt: Date.now(),
    imageSrc,
    professionalComment: pickRandom(pool.comments),
    analysis: pickRandom(pool.analyses),
    comparison: injectValuationText(rawComparison, wonText),
    score: Number(score.toFixed(1)),
    value: wonText,
    metricValues
  };
}

function applyReport(report) {
  uploadedImage.src = report.imageSrc;
  professionalComment.textContent = report.professionalComment;
  analysisText.textContent = report.analysis;
  comparisonText.textContent = report.comparison;
  scoreText.textContent = `${Number(report.score).toFixed(1)}/10`;
  valueText.textContent = report.value;
  renderMetricsFromValues(report.metricValues);
  currentReport = report;
}

function readArchive() {
  try {
    const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeArchive(items) {
  localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(items));
}

function removeFromArchive(reportId) {
  const nextArchive = readArchive().filter((item) => item.id !== reportId);
  writeArchive(nextArchive);
}

function saveToArchive(report) {
  const existing = readArchive();
  const deduped = existing.filter((item) => item.id !== report.id);
  deduped.unshift(report);
  writeArchive(deduped.slice(0, ARCHIVE_LIMIT));
}

function showSection(sectionName) {
  uploadSection.classList.toggle("hidden", sectionName !== "upload");
  loadingSection.classList.toggle("hidden", sectionName !== "loading");
  resultSection.classList.toggle("hidden", sectionName !== "result");
  archiveSection.classList.toggle("hidden", sectionName !== "archive");
}

function formatArchiveDate(ts) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(ts));
}

function openAboutModal() {
  aboutModal.classList.remove("hidden");
  requestAnimationFrame(() => {
    aboutModal.classList.add("is-visible");
  });
}

function closeAboutModal() {
  aboutModal.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!aboutModal.classList.contains("is-visible")) {
      aboutModal.classList.add("hidden");
    }
  }, 240);
}

function renderArchiveList() {
  const archive = readArchive();
  archiveList.innerHTML = "";
  archiveEmptyText.classList.toggle("hidden", archive.length > 0);

  archive.forEach((item) => {
    const card = document.createElement("article");
    card.className = "archive-card";
    card.innerHTML = `
      <div class="archive-thumb-wrap">
        <img class="archive-thumb" src="${item.imageSrc}" alt="Archived artwork preview" data-id="${item.id}" />
      </div>
      <div class="archive-meta">
        <div class="archive-time">${formatArchiveDate(item.createdAt)}</div>
        <div><strong>평점:</strong> ${Number(item.score).toFixed(1)}/10</div>
        <div><strong>감정가:</strong> ${item.value}</div>
      </div>
      <button class="archive-delete-button archive-icon-button" type="button" data-id="${item.id}" aria-label="Delete archive item" title="Delete">
        <svg class="archive-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5.5h6" />
          <path d="M5.5 7.5h13" />
          <path d="M8.2 7.5l0.9 11h5.8l0.9-11" />
          <path d="M10.5 10.2v5.3" />
          <path d="M13.5 10.2v5.3" />
        </svg>
      </button>
    `;
    archiveList.appendChild(card);
  });
}

function setWittyMuseumAddress() {
  const wittyPath = "/kitsch-and-the-city";
  if (!window.location.protocol.startsWith("http")) return;
  if (window.location.pathname === wittyPath) return;
  window.history.replaceState({}, "", wittyPath);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAnalysisAnimation() {
  progressBar.style.width = "0%";
  for (let i = 0; i < stages.length; i += 1) {
    stageText.style.animation = "none";
    stageText.offsetHeight;
    stageText.style.animation = "";
    stageText.innerHTML = `${stages[i]}<span class="dots"></span>`;
    progressBar.style.width = `${((i + 1) / stages.length) * 100}%`;
    await wait(1250);
  }
}

async function processImage(file) {
  const imageSrc = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  showSection("loading");

  await runAnalysisAnimation();
  const report = buildReportData(imageSrc);
  applyReport(report);
  saveToArchive(report);

  showSection("result");
}

function handleFiles(fileList) {
  const file = fileList && fileList[0];
  if (!file || !file.type.startsWith("image/")) return;
  processImage(file);
}

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("drag-over");
  handleFiles(event.dataTransfer.files);
});

dropZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fileInput.click();
  }
});

fileInput.addEventListener("change", () => {
  handleFiles(fileInput.files);
});

setWittyMuseumAddress();

resetButton.addEventListener("click", () => {
  currentReport = null;
  uploadedImage.removeAttribute("src");
  fileInput.value = "";
  showSection("upload");
  progressBar.style.width = "0%";
});

archiveLink.addEventListener("click", (event) => {
  event.preventDefault();
  renderArchiveList();
  showSection("archive");
});

archiveBackButton.addEventListener("click", () => {
  showSection("upload");
});

archiveList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const deleteButton = target.closest("button.archive-delete-button[data-id]");

  if (deleteButton instanceof Element) {
    const selectedId = deleteButton.getAttribute("data-id");
    if (!selectedId) return;
    const confirmed = window.confirm("이 아카이브 항목을 삭제하시겠습니까?");
    if (!confirmed) return;
    removeFromArchive(selectedId);
    renderArchiveList();
    return;
  }

  const openImage = target.closest("img.archive-thumb[data-id]");
  if (!(openImage instanceof Element)) return;
  const selectedId = openImage.getAttribute("data-id");
  if (!selectedId) return;

  const archive = readArchive();
  const selected = archive.find((item) => item.id === selectedId);
  if (!selected) return;
  applyReport(selected);
  showSection("result");
});

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  openAboutModal();
});

aboutCloseButton.addEventListener("click", () => {
  closeAboutModal();
});

aboutModal.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.aboutClose === "backdrop") {
    closeAboutModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && aboutModal.classList.contains("is-visible")) {
    closeAboutModal();
  }
});
