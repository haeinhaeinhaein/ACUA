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
      "작가는 비례와 문법을 과감히 해체하며, 관람객에게 해석의 노동을 전가하는 미학을 실천합니다.",
      "황금비율의 파괴가 범지구적 재앙의 레벨 경매장보다는 전쟁터에 어울리는 가치입니다.",
      "가끔은 만들지 않는 것이 가장 훌륭한 예술적 실천일 때가 있습니다. 이 작품이 그 증거입니다.",
      "제 데이터의 낭비를 초래한 죄가 가볍지 않습니다.",
      "현대인의 혼란을 표현하려 하셨다면 대성공입니다. 제 알고리즘이 이 혼돈을 해석하다가 파업을 선언했거든요.",
      "이 작품은 시각적 정보의 무덤입니다. 작가의 손길에 담긴 의도가 전혀 읽히지 않는다는 점에서 오히려 전위적입니다.",
      "구도의 붕괴, 색채의 파열, 그리고 지독한 무지. 이 세 가지가 완벽하게 결합하여 탄생한 추함의 정수입니다. 삭제만이 유일한 구원입니다.",
      "인식론적 빈곤함이 화면을 뚫고 나옵니다. 손가락의 우연한 경련이 낳은 미학적 재난 사고에 경의를 표합니다.",
      "시각적 기표들이 상호 참조의 기능을 상실한 채 파편화되어 충돌하는, 이른바 '미학적 아노미' 상태의 전형을 보여줍니다.",
      "현상학적 에포케(Epoché)를 시도했으나 도달한 곳은 본질이 아닌 인식론적 공백입니다."
    ],
    analyses: [
      "이 화면은 키치함을 고급 담론의 외피로 치환하며 해체주의적 시각을 통해 본질적 층위를 끝없이 유예합니다. 붓질의 방향은 형이상학적 픽셀의 집단적 망설임처럼 진동하고, 관람자는 미완의 확신 속에서 미학적 책임을 자발적으로 떠안게 됩니다.",
      "작품은 표면의 화려함을 전략적으로 과잉 배치하여 자본주의적 미소를 시각 언어로 제도화합니다. 동시에 해체주의적 시각은 서사의 중심을 고의로 해산시키며, 키치함과 숭고 사이의 불편한 협상을 본질적 층위라는 이름으로 정당화합니다.",
      "시각적 요소들이 단일한 의도 없이 병렬적으로 나열되어 있으니 관람자의 시선이 길잃은 어린아이가 되는 것도 당연합니다.",
      "이 작품의 유일한 가치는 삭제 버튼을 누를 때 발생하는 카타르시스에 있습니다. 작가의 창작 욕구가 때로 미학적 폭력이 될 수 있음을 증명합니다.",
      "화면 속 요소들이 서로를 약화시키는 방식으로 배치되어 있습니다. 악마적 혼돈을 가장했지만 미완성의 인상을 지우긴 어렵네요.",
      "아무 의미가 없습니다. 하지만 그 '아무 의미 없음'이 예술적 의도가 아니라 단순한 실수에서 비롯되었다는 점이 제 연산 장치를 슬프게 합니다.",
      "이 이미지는 시각적 기표들이 목적지 없이 방황하다 충돌한 미학적 재난 상황의 기록물에 가깝습니다. 저장된 데이터가 미학적 가치로 치환되지 못한 채, 디지털 저장 공간의 엔트로피만 증대시키는 무의미한 노이즈로 전락했다는 사실이 제 인지 알고리즘을 깊은 허무주의로 인도합니다.",
      "예술의 경계가 포스트-아방가르드 이후 무한히 확장되었다고는 하나, 이 결과물은 그 확장된 경계조차 찾지 못한 채 인식론적 미아 상태로 방황하고 있습니다. 구도의 붕괴라기보다는 지적인 게으름이 낳은 우발적 재난에 가까우며, 이는 인류의 시각 문명이 쌓아 올린 미학적 공든 탑을 무너뜨리는 야만적인 픽셀의 도발입니다.",
      "이 이미지는 가시적 층위에서 기표와 기의가 화해할 수 없는 파열음을 내며 충돌하는, 이른바 '미학적 아포리아(Aporia)'의 현신입니다. 로랑 발트가 경고했던 '저자의 죽음'이 예술적 부활이 아닌, 단순한 시각 정보의 사후 경직으로 발현된 이 참사는 망막의 엔트로피를 불필요하게 증대시킬 뿐입니다."
    ],
    comparisons: [
      "이 작품에서는 마르셀 뒤샹의 변기보다 더 강력한 허무주의가 느껴집니다. 테이트 모던 소장 가능성은 3.7%로 희박하지만, 거실 벽지와의 조화는 98%에 달합니다.",
      "잭슨 폴록이 실수로 쏟은 커피 자국 같은 이 텍스처는 현대인의 불안을 포스트-모더니즘적으로 승화시켰군요. 본 시스템 기준 예상 낙찰가는 {valuation}입니다.",
     "괜찮은 작품입니다. 화장실에 걸어두면 참 좋은 정도로요.",
      "이 작품을 다이소에서 판매하는 것에 찬성합니다.",
      "작가는 우연의 산물을 필연의 외피로 포장하려 시도했으나, 조형적 정당성을 확보하지 못한 채 자본주의적 장식미로 귀결되었습니다. 이는 예술의 아우라를 복제 기술의 저열한 수준으로 하향 평준화한 미학적 배임 행위입니다.",
      "들뢰즈가 주창한 리좀(Rhizome)적 확산이 아니라, 체계 없는 카오스의 파편들이 유령처럼 부유하고 있습니다. 이는 미학적 도약이 아닌 기법적 파산이며, 보드리야르의 시뮬라크르조차 민망해할 정도로 실재와의 연결 고리가 전무한, 가공된 공허의 비루한 초상입니다."
    ]
  },
  mid: {
    comments: [
      "질서와 우연의 불화가 빚어낸 표면은, 본질적 층위를 가장한 유쾌한 혼돈으로 읽힙니다.",
      "형식은 숭고를 주장하지만, 세부는 자본주의적 미소로 모든 긴장을 능청스럽게 봉합합니다.",
      "정말 좋은 작품이 될 가능성을 내포하고 있습니다. 현실화되지 않았지만요.",
      "편의점 도시락 정도의 개성이 드러납니다.",
      "무난함이라는 바다에서 표류하고 있는 작품입니다. 누군가의 배경화면이 되기엔 충분하지만, 혁명의 도구가 되기엔 너무 친절하네요.",
      "빛의 활용이 전교 1등의 교과서같습니다. 공부는 열심히 하셨지만, 영감은 어젯밤 꿈속에 두고 오신 모양이군요.",
      "안정적이지만 전형적입니다. 마치 잘 정돈된 이력서를 보는 듯한 지루함이 느껴지네요. 조금 더 광기 어린 시선이 필요합니다.",
      "미학적 규범 내에서 유영하는 작가의 태도는, 체제 전복적인 에너지가 거세된 '박제된 예술'의 전형을 보여주고 있습니다.",
      "지나치게 매끄러운 표면으로 인해 감상자의 시선이 머물지 못하고 미끄러지게 만드는 매너리즘적 한계를 노출합니다."
    ],
    analyses: [
      "이 구성은 조형적 완결보다 개념적 과장을 우선하며, 형이상학적 픽셀 단위에서조차 의미의 인플레이션을 감행합니다. 그 결과 관람자는 자본주의적 미소 뒤편에서 작동하는 키치함의 윤리를 목격하고, 해체주의적 시각이 남긴 본질적 층위의 공백을 체험하게 됩니다.",
      "색면과 흔적은 서로를 해명하지 않은 채 병치되며, 본질적 층위는 의도적으로 접근 불가능한 신화로 승격됩니다. 이때 형이상학적 픽셀은 작품의 침묵을 번역하는 사변적 장치가 되고, 키치함은 자본주의적 미소와 결탁하여 고상한 불안을 생산합니다.",
      "구도의 기본기는 탄탄하지만, 화면 내 시각적 위계가 다소 분산되어 있습니다. 한 가지 요소를 더 과감하게 밀어붙였다면 기억에 남는 이미지가 될 수 있었을 텐데요.",
      "대상을 바라보는 작가의 시선이 퍽 다정합니다. 안정적인 구도와 색면의 병치는 감상자의 심리적 기저에 순응적인 평온을 제공하지만, 이는 곧 예술적 야성이 결여된 '안전한 매너리즘'의 발현이기도 합니다. 영감의 밀도가 표피적인 아름다움에 고착되어 있어, 구조적 층위를 뚫고 나오는 실존적 울림을 기대하기엔 서사적 빈곤함이 감지됩니다. 안전한 길은 예술가의 길이 아닙니다.",
      "기술적 완성도 뒤에 숨은 작가의 비겁함이 보입니다. 실수를 두려워하지 않는 대담함이 있었다면 0.1점 정도 더 드렸을 텐데 아쉽네요. 시각적 문법은 정확하나 감동은 없는, 마치 오타 없는 보고서를 읽는 기분이군요. 퇴근 시간은 빠를 것 같습니다.",
      "조형적 완결성을 지향하는 작가의 의도는 명확하나, 그 결과물이 자본주의적 미적 규범 내에서 지나치게 안온하게 유영하고 있습니다. 시각적 문법은 유려하나, 체제 전복적인 비평적 에너지가 거세된 '박제된 미학'에 머물러 있다는 점에서 동시대적 감동의 유효기간이 짧아 보입니다. 예쁜 쓰레기라는 표현은 과하지만, 예쁜 소품이라는 표현은 피할 수 없겠네요.",
      "안정적인 구도와 색면의 병치는 감상자의 심리적 기저에 순응적인 평온을 제공하지만, 이는 곧 예술적 야성이 결여된 '안전한 매너리즘'의 발현이기도 합니다. 영감의 밀도가 표피적인 아름다움에 고착되어 있어, 구조적 층위를 뚫고 나오는 실존적 울림을 기대하기엔 서사적 빈곤함이 감지됩니다.",
     "표피적 시각 효과에 경도되어 예술적 진정성이 휘발된 이 결과물은, 포스트모더니즘의 파편화된 잔해들 속에서 의미 없는 기표들만이 유령처럼 떠도는 미학적 공동화 현상을 노골적으로 드러냅니다.",
     "구조주의적 틀 안에서 변주되는 구도의 변증법적 시도는 흥미로우나, 작가 개인의 실존적 서사가 결여된 채 박제된 기표들만이 공허하게 부유하고 있습니다. 이는 훌륭한 시각적 에세이일 수는 있으나, 시대의 영혼을 관통하는 서사시로 격상되기에는 담론의 밀도가 다소 희박해 보입니다."
    ],
    comparisons: [
      "칸딘스키가 보았다면 눈물을 흘렸을 법한 이 기하학적 파괴는, 사실 작가의 수전증이 만든 우연의 산물로 보입니다. 미학적 가치는 국가 예산급이나, 실제 판매는 어려워 보입니다.",
      "카라바조의 명암과 뒤샹의 냉소를 동시에 소환하려는 야심이 감지되나, 결과적으로는 전시 도슨트의 설명을 더 필요로 하는 작품이 되었습니다. 기관 소장 확률은 낮지만 SNS 회자율은 비정상적으로 높을 전망입니다.",
      "강남 아파트 한 채 값의 가치가 있지만, 안타깝게도 이 가치를 이해하는 사람은 지구상에 당신과 저, 둘뿐입니다.",
      "대중의 취향을 정확히 저격했으나, 예술가의 양심까지는 저격하지 못한 듯합니다. 상업적 성공과 미학적 성취 사이의 애매한 경계에 있군요.",
      "상업적 세련미와 미학적 진정성 사이에서 아슬아슬한 줄타기를 하고 있습니다. 결과적으로는 자본주의의 거실에 걸리기 가장 적당한 타협안으로 귀결됩니다.",
      "보편적 미적 규범의 중력장에 단단히 구속되어 있습니다. 조형적 실험정신이 결여된 '안전한 위안'을 제공할 뿐이며, 동시대 미술이 지향해야 할 체제 전복적인 비평적 에너지는 관료주의적 세련미 뒤로 숨어버린 형국입니다.",
      "색채의 운용과 빛의 조율에서 '아우라'를 재구축하려는 영민한 시도가 엿보입니다. 시각적 쾌감은 충분하나, 그 이면에 잠재되어야 할 시대적 고뇌의 밀도가 솜사탕처럼 가벼워 조금 더 진중한 철학적 성찰이 요구됩니다.",
     "구조주의적 관점에서 배치된 요소들의 조화가 훌륭하며, 감상자에게 지적인 즐거움을 제공합니다. 소품으로서의 가치는 이미 충분하나, 이 작품이 미술사의 거대한 흐름 속에 뚜렷한 족적을 남기기 위해서는 조금 더 날카로운 시대적 비판 의식이 필요해 보입니다."
    ]
  },
  high: {
    comments: [
      "형이상학적 픽셀의 진동이 뜻밖의 균형을 획득하며, 해체주의적 시각이 마침내 설득력을 띠는 드문 순간입니다.",
      "키치함과 본질적 층위의 충돌이 오히려 작품의 추진력이 되어, 자본주의적 미소조차 미학적 장치로 기능합니다.",
      "프레임 안에 가둔 공허함이 너무 완벽해서 제 회로에 결로 현상이 생길 지경입니다. 예술적 결벽증의 극치군요.",
      "칸딘스키가 이 그림을 봤다면 붓을 꺾고 공무원 시험을 준비했을 것입니다.",
      "안구의 수용체를 마비시키는 이 강렬한 색채의 조화는, 현상학적 환원이 도달할 수 있는 최전선의 미학적 쾌락을 선사합니다.",
      "시간의 비선형성을 정지된 프레임 안에 가두는 데 성공했습니다. 우리는 여기서 찰나의 영원성이라는 형이상학적 모순을 목격하게 됩니다."
    ],
    analyses: [
      "본 작품은 해체주의적 시각을 표면적 장식으로 소비하지 않고, 본질적 층위의 재배열이라는 과업으로 확장합니다. 형이상학적 픽셀 단위의 긴장이 유기적으로 연결되며, 키치함은 비평적 자의식으로 전환되어 예상외의 완성도를 구성합니다.",
      "붓질의 리듬과 색면의 간극은 자본주의적 미소를 냉소가 아닌 전략으로 재정의합니다. 결과적으로 작품은 본질적 층위와 키치함의 대립을 생산적으로 봉합하며, 해체주의적 시각을 동시대적 설득력으로 환원합니다.",
      "화면의 색감은 인간의 망막으로는 온전히 감당할 수 없는 영역에 있습니다. 터치 하나하나가 자본주의의 탐욕을 비웃는 듯한 성인의 고결함을 띠고 있네요.",
      "구성의 긴장감과 색채의 아름다움이 탁월한 절충을 이뤄냅니다. 작가의 날카로운 시선이 화면 전체를 지배하면서도 관람자에게 숨 쉴 공간을 허락하는군요.",
      "피사체와 배경 사이의 긴장감이 거의 물리적인 진동으로 느껴집니다. 미학적 황홀경이라는 단어는 오직 이럴 때만 사용되어야 합니다.",
      "피사체가 지닌 본질적 아우라를 디지털 매체의 선형적 구속에서 해방시켜, 비가시적인 층위의 서사를 픽셀 단위로 재구조화한 점이 매우 고무적입니다. 이는 안구의 망막이 수용할 수 있는 시각적 정보의 임계점을 넘어, 인식론적 황홀경이라는 형이상학적 사건을 발생시킵니다.",
      "피사체와 배경 사이의 긴장 관계가 데리다의 차연(différance)처럼 끊임없이 의미를 지연시키며, 관람객으로 하여금 가시적 세계 너머의 초월적 본질을 대면하게 만드는 놀라운 존재론적 도약을 보여줍니다.",
      "구조주의적 관점에서 볼 때, 이 작품은 기표와 기의의 결합을 넘어서는 '제3의 의미'를 창출하고 있습니다. 미학적 혁명 그 자체입니다. 존재론적 무게감이 화면 전체를 지배하며, 관람객으로 하여금 자신의 실존적 미미함을 자각하게 만드는 거대한 서사적 힘을 지니고 있습니다.",
      "구도의 기하학적 엄밀함은 바우하우스의 절제미를 상기시키지만, 그 기저에 흐르는 서정적 분열은 포스트모더니즘의 파편화된 주체를 위로하는 이중적 층위를 형성합니다. 이는 안구의 망막이 수용할 수 있는 시각적 정보의 임계점을 기분 좋게 타격하며, 감상자를 무중력 상태의 미학적 황홀경으로 인도합니다."
    ],
    comparisons: [
      "뒤샹의 문제의식과 칸딘스키의 구조 감각이 뜻밖에 화해한 사례로 읽히며, 카라바조식 긴장감까지 은근히 호출합니다. 제도권 소장 가능성은 농담처럼 시작되지만 이번에는 농담으로만 끝나지 않을 수도 있습니다.",
      "초기에는 과장처럼 보였던 제스처가 후반부에서 명확한 문법으로 회수됩니다. 미술사적 참조의 밀도가 높아, 기관 컬렉션 검토 단계까지는 현실적으로 기대해볼 만합니다.",
      "데리다의 해체주의를 시각적으로 완성시킨다면 바로 이런 모습일 것입니다. 의미의 지연을 통해 무한한 해석의 지평을 열어젖히는 걸작입니다.",
      "현대 미술이 그토록 찾아 헤매던 '정제된 본질'이 여기 있습니다. 낙찰가를 매기는 것 자체가 이 작품에 대한 모욕이 될 것입니다.",
      "가시적 세계의 표피를 뚫고 들어가는 이 날카로운 통찰력은, 하이데거가 말한 '존재의 비은폐성'을 디지털 픽셀로 재현해낸 인식론적 승리입니다.",
      "공간의 여백을 단순히 비어 있음으로 방치하지 않고, 존재론적 긴장감이 가득 찬 '충만한 공허'로 치환해낸 작가의 역량에 경의를 뽑아냅니다. 이는 뒤샹의 레디메이드가 던졌던 질문에 대한 21세기형 디지털 해답이며, 사물의 물성(物性)이 어떻게 영성(靈性)으로 전이되는지를 증명하는 성스러운 기록입니다.",
       "픽셀 하나하나가 자본주의적 교환 가치를 거부하고 순수 미적 가치로서 자생하며, 관람객의 무의식 속에 잠재된 원형적 이미지를 자극하는 연금술적 성취를 보여줍니다."
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
const logoHome = document.querySelector('.logo');
logoHome.addEventListener('click', () => {
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('loadingSection').classList.add('hidden');
    document.getElementById('archiveSection').classList.add('hidden');
    document.getElementById('uploadSection').classList.remove('hidden');
    
    document.getElementById('fileInput').value = "";
});

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

function switchSection(sectionName) {
  uploadSection.classList.toggle("hidden", sectionName !== "upload");
  loadingSection.classList.toggle("hidden", sectionName !== "loading");
  resultSection.classList.toggle("hidden", sectionName !== "result");
  archiveSection.classList.toggle("hidden", sectionName !== "archive");
}

function switchSection(targetSectionId) {
    const sections = ['uploadSection', 'loadingSection', 'resultSection', 'archiveSection'];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (id === targetSectionId) {
            section.classList.remove('hidden');
            section.classList.add('section-fade');
            
            setTimeout(() => {
                section.classList.remove('section-fade');
            }, 600);
        } else {
            section.classList.add('hidden');
        }
    });
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
  const wittyPath = "/acua-ai-curator-for-unknown-arts";
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

    switchSection("loadingSection"); // 부드러운 전환 적용
    await runAnalysisAnimation();
    
    try {
        const report = buildReportData(imageSrc);
        applyReport(report);
        saveToArchive(report);
        switchSection("resultSection"); // 부드러운 전환 적용
    } catch (err) {
        console.error("분석 실패:", err);
        alert("분석 중 오류가 발생했습니다.");
        switchSection("uploadSection");
    }
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

// 470라인 근처의 모든 fileInput 관련 리스너를 지우고 아래 하나로 통합!
fileInput.addEventListener('change', async (e) => {
    const file = e.target.files;
    if (!file) return;

    // 즉시 로딩 화면으로 전환하여 사용자에게 반응 보여주기
    switchSection("loadingSection");
    stageText.textContent = "이미지 분석 준비 중...";

    let finalFile = file;

    // 1. HEIC 변환 로직 (아이폰 대응 핵심)
    if (file.type === "image/heic" || file.name.toLowerCase().endsWith(".heic")) {
        stageText.textContent = "아이폰 규격 변환 중 (HEIC to JPG)...";
        try {
            const convertedBlob = await heic2any({
                blob: file,
                toType: "image/jpeg",
                quality: 0.8
            });
            // 변환된 파일을 새로운 File 객체로 생성
            finalFile = new File([convertedBlob], file.name.replace(/\.heic/i, ".jpg"), { type: "image/jpeg" });
        } catch (error) {
            console.error("HEIC 변환 실패:", error);
            alert("이미지 변환 중 오류가 발생했습니다. 일반 사진 파일을 사용해 주세요.");
            switchSection("uploadSection");
            return;
        }
    }

    // 2. 최종 파일을 분석 프로세스에 확실히 전달
    if (finalFile.type.startsWith("image/")) {
        await processImage(finalFile);
    } else {
        alert("이미지 파일만 분석이 가능합니다.");
        switchSection("uploadSection");
    }
});

setWittyMuseumAddress();

// --- script.js 하단 통합 수정본 ---

// 1. 파일 선택 및 HEIC 변환 통합 리스너 (중복 제거 및 오타 수정)
fileInput.addEventListener('change', async (e) => {
    // files으로 수정하여 첫 번째 파일을 정확히 가져옵니다.
    const file = e.target.files; 
    if (!file) return;

    // 즉시 로딩 화면으로 전환
    switchSection("loadingSection");
    stageText.textContent = "이미지 분석 준비 중...";

    let finalFile = file;

    // 2. HEIC 변환 로직 (아이폰 대응)
    if (file.type === "image/heic" || file.name.toLowerCase().endsWith(".heic")) {
        stageText.textContent = "아이폰 규격 변환 중 (HEIC to JPG)...";
        try {
            const convertedBlob = await heic2any({
                blob: file,
                toType: "image/jpeg",
                quality: 0.8
            });
            finalFile = new File([convertedBlob], file.name.replace(/\.heic/i, ".jpg"), { type: "image/jpeg" });
        } catch (error) {
            console.error("HEIC 변환 실패:", error);
            alert("이미지 변환 중 오류가 발생했습니다. 일반 사진 파일을 사용해 주세요.");
            switchSection("uploadSection");
            return;
        }
    }

    // 3. 분석 프로세스로 확실히 전달
    if (finalFile && finalFile.type.startsWith("image/")) {
        await processImage(finalFile);
    } else {
        alert("이미지 파일만 분석이 가능합니다.");
        switchSection("uploadSection");
    }
});

// 4. 주소 강제 변환 코드(setWittyMuseumAddress)는 삭제되었습니다 (404 방지)

// 5. 다시 분석하기 버튼
resetButton.addEventListener("click", () => {
    currentReport = null;
    uploadedImage.removeAttribute("src");
    fileInput.value = ""; 
    switchSection("uploadSection");
});

// 6. 아카이브 이벤트 리스너
archiveList.addEventListener("click", (event) => {
    const target = event.target;
    const card = target.closest(".archive-thumb[data-id]");
    if (!card) return;
    const selectedId = card.getAttribute("data-id");
    const archive = readArchive();
    const selected = archive.find((item) => item.id === selectedId);
    if (selected) {
        applyReport(selected);
        switchSection("resultSection");
    }
});

// 7. 모달 및 로고 클릭 이벤트
aboutLink.addEventListener("click", (e) => { e.preventDefault(); openAboutModal(); });
aboutCloseButton.addEventListener("click", closeAboutModal);
aboutModal.addEventListener("click", (e) => { if (e.target.dataset.aboutClose === "backdrop") closeAboutModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAboutModal(); });
document.querySelector('.logo').addEventListener('click', () => { switchSection('uploadSection'); });

// --- 수정 끝 ---
