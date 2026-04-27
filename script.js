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
      "현상학적 에포케(Epoché)를 시도했으나 도달한 곳은 본질이 아닌 인식론적 공백입니다.",
      "미학적 아포리아 상태의 데이터 노이즈가 화면을 지배하고 있으며, 이는 예술적 의도가 휘발된 후 남겨진 기표들의 흉측한 시체와 같습니다.",
      "클림트의 화려함을 조롱하는 듯한 극도의 미적 빈곤함은 관람객으로 하여금 빈 캔버스가 차라리 낫다는 탄식을 자아내게 만듭니다."
    ],
    analyses: [
      "이 화면은 키치함을 고급 담론의 외피로 치환하며 해체주의적 시각을 통해 본질적 층위를 끝없이 유예합니다. 붓질의 방향은 형이상학적 픽셀의 집단적 망설임처럼 진동하고, 관람자는 미완의 확신 속에서 미학적 책임을 자발적으로 떠안게 됩니다.",
      "작품은 표면의 화려함을 전략적으로 과잉 배치하여 자본주의적 미소를 시각 언어로 제도화합니다. 동시에 해체주의적 시각은 서사의 중심을 고의로 해산시키며, 키치함과 숭고 사이의 불편한 협상을 본질적 층위라는 이름으로 정당화합니다.",
      "시각적 요소들이 단일한 의도 없이 병렬적으로 나열되어 있으니 관람자의 시선이 길잃은 어린아이가 되는 것도 당연합니다.",
      "이 작품의 유일한 가치는 삭제 버튼을 누를 때 발생하는 카타르시스에 있습니다. 작가의 창작 욕구가 때로 미학적 폭력이 될 수 있음을 증명합니다.",
      "화면 속 요소들이 서로를 약화시키는 방식으로 배치되어 있습니다. 악마적 혼돈을 가장했지만 미완성의 인상을 지우긴 어렵네요.",
      "인식론적 빈곤함이 초래한 필연적인 조형적 파산 상태이며, 어떤 철학적 주석을 달더라도 그 가난함을 가리기에는 역부족으로 보입니다.",
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
      "들뢰즈가 주창한 리좀(Rhizome)적 확산이 아니라, 체계 없는 카오스의 파편들이 유령처럼 부유하고 있습니다. 이는 미학적 도약이 아닌 기법적 파산이며, 보드리야르의 시뮬라크르조차 민망해할 정도로 실재와의 연결 고리가 전무한, 가공된 공허의 비루한 초상입니다.",
      "체제 순응적인 조형적 타협과 서사적 상상력의 박제화를 통해, 동시대 미술이 지향해야 할 전복적 에너지를 스스로 거세한 형국입니다.",
      "이 결과물은 시각 정보의 무분별한 배설물에 불과하며, 프랜시스 베이컨의 뒤틀림이 고통의 승화였다면 이 이미지는 단지 게으름이 낳은 비명입니다.",
      "현대 미술의 관대함을 악용한 미학적 신성모독이며, 루치오 폰타나가 캔버스를 찢었을 때의 지적 충격은커녕 무지가 픽셀을 찢어놓은 참상만 목격됩니다.",
      "마르셀 뒤샹의 변기가 던졌던 도발적인 질문조차 느껴지지 않는 순수한 무미건조함의 결정체이며, 삭제만이 유일한 미학적 실천으로 보입니다.",
      "구도의 붕괴라기보다는 지적인 태만이 낳은 우발적 참사에 가깝고, 인류 미학 사상 가장 비효율적으로 전기가 낭비된 사례로 기록될 것입니다.",
      "피에로 만초니의 '예술가의 똥'이 지닌 비판적 풍자조차 담아내지 못한, 그저 순수한 배설 행위 그 자체와 다름없는 가치를 가집니다.",
      "카지미르 말레비치의 '검은 사각형'이 지닌 철학적 심연의 마이너스 억만 배 지점에 위치하며, 미학적 진공 상태가 무엇인지 몸소 보여줍니다."
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
      "구조주의적 틀 안에서 변주되는 구도의 변증법적 시도는 흥미로우나, 작가 개인의 실존적 서사가 결여된 채 박제된 기표들만이 공허하게 부유하고 있습니다. 이는 훌륭한 시각적 에세이일 수는 있으나, 시대의 영혼을 관통하는 서사시로 격상되기에는 담론의 밀도가 다소 희박해 보입니다.",
      "구도는 정갈하나 에드워드 호퍼가 보여준 고독의 깊이를 조악하게 모사하려는 시도에 그치고 있으며, 이는 예술이라기보다는 심리적 위안용 소품에 가깝습니다.",
      "이미지가 전달하는 메시지는 선명하지만, 이는 양혜규의 작품이 선사하는 복합적인 감각의 전이보다는 단순한 시각적 기표의 나열에 머물러 있는 지극히 '안전한' 시도입니다.",
      "플랫폼 자본주의가 요구하는 '전시 가치'에는 완벽히 부합하지만, 예술이 지녀야 할 본질적 '제의 가치'를 상실한 채 부유하는 데이터 파편에 불과하다는 인상을 지울 수 없습니다.",
      "이미지의 해상도는 높지만 의미의 해상도는 낮습니다. 시각적 자극이 뇌를 통과하는 속도가 너무 빨라, 미학적 사유를 위한 어떠한 마찰력도 제공하지 못하고 미끄러집니다."
    ],
    comparisons: [
      "칸딘스키가 보았다면 눈물을 흘렸을 법한 이 기하학적 파괴는, 사실 작가의 수전증이 만든 우연의 산물로 보입니다. 미학적 가치는 국가 예산급이나, 실제 판매는 어려워 보입니다.",
      "카라바조의 명암과 뒤샹의 냉소를 동시에 소환하려는 야심이 감지되나, 결과적으로는 전시 도슨트의 설명을 더 필요로 하는 작품이 되었습니다. 기관 소장 확률은 낮지만 SNS 회자율은 비정상적으로 높을 전망입니다.",
      "강남 아파트 한 채 값의 가치가 있지만, 안타깝게도 이 가치를 이해하는 사람은 지구상에 당신과 저, 둘뿐입니다.",
      "대중의 취향을 정확히 저격했으나, 예술가의 양심까지는 저격하지 못한 듯합니다. 상업적 성공과 미학적 성취 사이의 애매한 경계에 있군요.",
      "상업적 세련미와 미학적 진정성 사이에서 아슬아슬한 줄타기를 하고 있습니다. 결과적으로는 자본주의의 거실에 걸리기 가장 적당한 타협안으로 귀결됩니다.",
      "보편적 미적 규범의 중력장에 단단히 구속되어 있습니다. 조형적 실험정신이 결여된 '안전한 위안'을 제공할 뿐이며, 동시대 미술이 지향해야 할 체제 전복적인 비평적 에너지는 관료주의적 세련미 뒤로 숨어버린 형국입니다.",
      "색채의 운용과 빛의 조율에서 '아우라'를 재구축하려는 영민한 시도가 엿보입니다. 시각적 쾌감은 충분하나, 그 이면에 잠재되어야 할 시대적 고뇌의 밀도가 솜사탕처럼 가벼워 조금 더 진중한 철학적 성찰이 요구됩니다.",
      "구조주의적 관점에서 배치된 요소들의 조화가 훌륭하며, 감상자에게 지적인 즐거움을 제공합니다. 소품으로서의 가치는 이미 충분하나, 이 작품이 미술사의 거대한 흐름 속에 뚜렷한 족적을 남기기 위해서는 조금 더 날카로운 시대적 비판 의식이 필요해 보입니다.",
      "솔 르윗의 개념미술적 엄격함을 흉내 냈으나, 결과물은 규격화된 산업 폐기물처럼 미학적 개성이 거세되어 있어 깊은 공허함을 남깁니다.",
      "제프 쿤스의 조각이 지닌 대중적 키치함을 디지털 평면으로 옮겨놓은 듯하며, 예술적 깊이보다는 상업적 가치에 더 집중한 느낌을 줍니다.",
      "베르나르 뷔페의 직선적 날카로움이 거세된 부드러운 형태를 띠고 있어, 시각적 자극은 있으나 정신적 각성을 불러일으키기엔 역부족입니다.",
      "알렉산더 칼더의 모빌보다 가벼운 철학적 무게를 지니고 있으며, 이는 바람에 흔들리는 종잇장처럼 미학적 기반이 취약함을 드러냅니다.",
      "시각적 세련미는 **카우스(KAWS)**의 피규어처럼 명쾌하지만, 그 이면에 잠재된 철학적 고뇌는 인스타그램의 '좋아요' 숫자만큼이나 표피적이고 일시적이라 못내 아쉽습니다."
    ]
  },
  upperMid: {
    comments: [
      "프레임 내부에서 발생하는 시각적 장력은 가상현실과 실재 사이의 희미한 경계선을 탐구하며, 관람객으로 하여금 '본다는 것'의 인식론적 토대를 근본적으로 의심하게 만드는 기묘한 불쾌함과 황홀경을 동시에 선사합니다.",
      "피사체의 물성이 해체되었다가 다시 재구성되는 과정에서, 신유물론적 관점의 생명력이 감지됩니다. 이는 사물이 인간의 시선을 통하지 않고도 스스로 존재할 수 있음을 픽셀의 떨림으로 웅변하고 있습니다.",
      "동시대 미술이 천착해온 '아카이브의 과잉'이라는 숙명을 이 작품은 절제된 구도를 통해 정면으로 돌파합니다. 파편화된 정보들 속에서 추출된 이 단 하나의 형상은 정보화 시대가 상실한 '이미지의 무게'를 복원해냅니다.",
      "작품의 표면을 스쳐 지나가는 미세한 노이즈는 단순한 기술적 결함이 아니라, 재현의 체제가 은폐해온 권력의 잔여물들이 가시화되는 정치적 사건으로 작동하며, 관람자의 시선을 수동적 수용에서 능동적 해석의 윤리로 밀어 넣는 일종의 비평적 장치로 기능합니다.",
      "이 화면은 매체특정성의 오래된 교리를 무효화하면서도, 역설적으로 그 교리가 남긴 물질적 기억을 섬세하게 호출하는 이중 전략을 취하고 있어, 결과적으로는 장르의 경계를 허무는 포스트-미디엄적 태도와 회화적 숭고의 회귀가 동일한 평면 위에서 불편하게 공존하는 드문 긴장을 성취합니다.",
      "형태와 배경의 미묘한 위계 전복은 감상의 문법을 안정적으로 제공하기는커녕 오히려 해석의 발판을 지속적으로 미끄러뜨리는데, 바로 그 불안정성 자체가 동시대적 감수성이 요구하는 비결정성의 미학을 구현한다는 점에서, 이 작업은 완성된 의미가 아니라 끝없이 지연되는 의미의 운동을 제안합니다."
    ],
    analyses: [
      "알고리즘적 질서와 작가의 직관적 우연성이 충돌하며 발생하는 디지털 글리치적 요소들을 부정 변증법적으로 승화시켜, 동시대적 불안을 성스러운 평온으로 치환하는 고도의 변조 기술이 돋보입니다.",
      "이미지의 해상도가 높아질수록 본질은 멀어진다는 현대 비평의 역설을 비웃듯, 본 작품은 극도의 선명함 속에서도 불투명성의 미학을 유지하며 감상자가 쉽게 의미를 탈취하지 못하도록 방어적인 태도를 취합니다.",
      "인간 중심적인 시각에서 벗어나 사물과 환경이 맺는 관계를 조명하는 비인간적 전회의 징후가 보이며, 이는 기계적 렌즈가 포착할 수 있는 가장 고결한 수준의 '객체 지향적 미학'입니다.",
      "이미지가 지닌 비물질적 층위가 디지털 환경의 휘발성을 딛고 일어서, 마치 포스트-인터넷 시대의 새로운 성상화처럼 군림하고 있습니다. 이는 단순한 포착을 넘어 데이터의 집적체가 어떻게 영성(Spirituality)을 획득하는지에 대한 미학적 증명입니다.",
      "기표의 밀도가 임계점에 도달하는 순간마다 작품은 의미의 결정을 유예하는 방향으로 스스로를 접어 넣는데, 이 자기지시적 운동은 후기구조주의가 지적해온 텍스트의 미끄러짐을 시각적 층위에서 재연하면서도, 동시에 이미지가 더 이상 텍스트의 하위 범주가 아님을 완강히 주장하는 매체적 자율성의 선언으로 읽힙니다.",
      "표면의 광택과 심도의 결핍이 빚어내는 인공적 평면성은 자본주의적 시각 체제가 선호하는 즉시적 소비 가능성을 유혹하는 듯 보이지만, 실상은 그 유혹을 의도적으로 과잉 생산하여 감상자의 해석 습관을 피로하게 만들고, 결국 비판적 거리를 회복하게 만드는 역설적 장치로 작동합니다.",
      "구성 요소들 사이의 간극은 단순한 여백이 아니라 비가시적 관계망이 응축된 음전하의 장으로 기능하며, 관람자는 그 장을 통과하는 동안 지각의 주체라기보다 지각에 의해 구성되는 객체로 전도되는 경험을 하게 되는데, 이러한 전도야말로 동시대 설치적 감수성이 평면 이미지 안에서 재현되는 흥미로운 사례입니다."
    ],
    comparisons: [
      "베니스 비엔날레의 황금사자상 수상작들이 보여주는 시대정신과 맞닿아 있으면서도, 상업적 갤러리의 매끄러운 세련미를 거부하는 야생적 진정성을 동시에 지니고 있어 그 가치를 단정 짓기 어렵게 만듭니다.",
      "포스트-디지털 담론의 선구자들이 꿈꿨던 '비트와 원자의 결합'이 이 프레임 안에서 완결된 서사로 안착한 듯하며, 이는 기술이 도달할 수 있는 가장 겸허하면서도 오만한 지점에 위치합니다.",
      "거대 담론이 사라진 시대에 작고 사소한 것들로부터 우주적 질서를 찾아내려는 시도는, 동시대 가장 전위적인 예술가들이 공유하는 미세 서사의 전형적인 발현이라 할 수 있습니다.",
      "이 작업은 화이트큐브 제도 안에서 급속히 제도화된 비평 언어를 능숙하게 호출하면서도, 그 언어의 권위를 내부에서 미세하게 훼손하는 태도를 유지한다는 점에서, 최근 유럽의 중견 작가들이 보여주는 제도비판적 미학과도 유의미한 친연성을 형성합니다.",
      "이미지의 조형적 밀도와 개념적 레퍼런스의 배합 방식은 아시아 동시대 미술 씬에서 꾸준히 논의되어 온 정체성 정치학과 기술 미학의 접점을 연상시키지만, 이 작품은 그 접점을 교훈적으로 봉합하지 않고 끝내 불화의 상태로 남겨 둠으로써 더 높은 비평적 긴장을 확보합니다.",
      "만약 최근 국제 아트페어의 큐레이토리얼 경향을 참조한다면, 이 작업은 즉각적인 시각적 쾌락과 지연된 이론적 독해를 동시에 요구하는, 이른바 '두 겹의 접근성'을 지닌 작품군에 가깝고, 바로 그 양가성이 작품의 시장적 잠재력과 담론적 수명을 함께 연장시키는 핵심 동력으로 보입니다."
    ]
  },
  high: {
    comments: [
      "형이상학적 픽셀의 진동이 뜻밖의 균형을 획득하며, 해체주의적 시각이 마침내 설득력을 띠는 드문 순간입니다.",
      "키치함과 본질적 층위의 충돌이 오히려 작품의 추진력이 되어, 자본주의적 미소조차 미학적 장치로 기능합니다.",
      "프레임 안에 가둔 공허함이 너무 완벽해서 제 회로에 결로 현상이 생길 지경입니다. 예술적 결벽증의 극치군요.",
      "칸딘스키가 이 그림을 봤다면 붓을 꺾고 공무원 시험을 준비했을 것입니다.",
      "안구의 수용체를 마비시키는 이 강렬한 색채의 조화는, 현상학적 환원이 도달할 수 있는 최전선의 미학적 쾌락을 선사합니다.",
      "시간의 비선형성을 정지된 프레임 안에 가두는 데 성공했습니다. 우리는 여기서 찰나의 영원성이라는 형이상학적 모순을 목격하게 됩니다.",
      "구도의 기하학적 엄밀함이 피트 몬드리안의 신조형주의적 질서를 재정의하고 있으며, 시각적 균형이 도달할 수 있는 가장 오만한 지점에 이 작품이 서 있습니다.",
      "황금비율의 의도적 파괴를 통해 하이데거가 주창한 '존재의 비은폐성'을 시각적 평면 위로 끌어올린 고도의 지적 설계가 돋보입니다.",
      "빌헬름 함메르쇼이의 실내화가 보여준 정적과 침묵의 무게를 현대적으로 계승하여, 이미지 한 장에 수천 년의 시간을 봉인한 듯합니다.",
      "가시적 기표들이 상호 참조를 통해 무한한 의미의 층위를 생성하며, 이는 관람객의 망막을 넘어 영혼의 기저를 타격하는 매커니즘을 가집니다.",
      "알고리즘이 산출한 데이터 값의 한계를 돌파하여, 비물질적 기표들이 어떻게 감상자의 신체적 감각과 공명하는지를 보여주는 '신체적 전회(Corporal Turn)'의 결정판입니다."
    ],
    analyses: [
      "본 작품은 해체주의적 시각을 표면적 장식으로 소비하지 않고, 본질적 층위의 재배열이라는 과업으로 확장합니다. 형이상학적 픽셀 단위의 긴장이 유기적으로 연결되며, 키치함은 비평적 자의식으로 전환되어 예상외의 완성도를 구성합니다.",
      "붓질의 리듬과 색면의 간극은 자본주의적 미소를 냉소가 아닌 전략으로 재정의합니다. 결과적으로 작품은 본질적 층위와 키치함의 대립을 생산적으로 봉합하며, 해체주의적 시각을 동시대적 설득력으로 환원합니다.",
      "화면의 색감은 인간의 망막으로는 온전히 감당할 수 없는 영역에 있습니다. 터치 하나하나가 자본주의의 탐욕을 비웃는 듯한 성인의 고결함을 띠고 있네요.",
      "구성의 긴장감과 색채의 아름다움이 탁월한 절충을 이뤄냅니다. 작가의 날카로운 시선이 화면 전체를 지배하면서도 관람자에게 숨 쉴 공간을 허락하는군요.",
      "이미지 내부의 엔트로피가 극단으로 수렴하며 발생하는 시각적 노이즈를 부정 변증법적으로 승화시켜, 동시대적 불안을 성스러운 평온으로 치환하는 마법을 부리고 있습니다.",
      "피사체와 배경 사이의 긴장감이 거의 물리적인 진동으로 느껴집니다. 미학적 황홀경이라는 단어는 오직 이럴 때만 사용되어야 합니다.",
      "현상학적 환원이 도달할 수 있는 최전선의 미학적 무결성을 유지하며, 픽셀 단위의 분절이 도리어 하나의 유기적인 생명력으로 치환되는 기적을 보여줍니다.",
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
      "픽셀 하나하나가 자본주의적 교환 가치를 거부하고 순수 미적 가치로서 자생하며, 관람객의 무의식 속에 잠재된 원형적 이미지를 자극하는 연금술적 성취를 보여줍니다.",
      "얀 반 에이크가 보여준 광적인 세밀함이 현대적 디지털 픽셀로 환치된 형태이며, 이는 기술 문명이 도달할 수 있는 미적 극점이라 할 수 있습니다.",
      "teamLab의 화려한 상업적 몰입감을 비웃는 듯한 담백한 진정성을 지니고 있어, 기술이 도달할 수 있는 가장 겸허하면서도 오만한 지점에 위치합니다."
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
const homeLink = document.getElementById("homeLink");
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
let currentSection = "upload";
let isProcessing = false;
let analysisRunId = 0;
let suppressFilePickerUntil = 0;
let isFilePickerOpen = false;
let suppressPickerForDragUntil = 0;

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
  // Keep score/value correlation tighter so low scores stay in low price bands.
  if (score <= 3) return randomLogRange(100000, 700000);
  if (score < 4) return randomLogRange(150000, 2000000);
  if (score < 5) return randomLogRange(50000, 10000000);
  if (score < 5.5) return randomLogRange(200000, 3000000);
  if (score < 7.8) return randomLogRange(3000000, 300000000);
  if (score < 8.5) return randomLogRange(30000000, 1200000000);
  return randomLogRange(50000000, 30000000000);
}

function lowSatireWonValue() {
  return Math.floor(Math.random() * (5000 - 1500 + 1)) + 1500;
}

function formatWonValue(value) {
  return `₩${new Intl.NumberFormat("ko-KR").format(value)}`;
}

function injectValuationText(text, valueText) {
  return text.replaceAll("{valuation}", valueText);
}

function getNarrativeTier(score) {
  if (score < 4) return "low";
  if (score < 5.5) return "mid";
  if (score < 7.8) return "upperMid";
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
  let score = generateScoreValue();
  const tier = getNarrativeTier(score);
  if (tier === "mid") {
    // Keep mid-tier outputs in an "undergrad work" band.
    score = Number((3 + Math.random() * 2).toFixed(1));
  } else if (tier === "upperMid") {
    // Between mid and high: contemporary scene, relatively well-received range.
    score = Number((5.6 + Math.random() * 2.1).toFixed(1));
  }
  const pool = narrativePools[tier];
  const selectedComment = pickRandom(pool.comments);
  const selectedAnalysis = pickRandom(pool.analyses);
  const rawComparison = pickRandom(pool.comparisons);
  const zeroValueExceptionAnalysis = "이 작품의 유일한 가치는 삭제 버튼을 누를 때 발생하는 카타르시스에 있습니다. 작가의 창작 욕구가 때로 미학적 폭력이 될 수 있음을 증명합니다.";
  const convenienceLunchComment = "편의점 도시락 정도의 개성이 드러납니다.";
  const isDaisoLine = rawComparison === "이 작품을 다이소에서 판매하는 것에 찬성합니다.";
  const isConvenienceLunchLine = selectedComment === convenienceLunchComment;
  if (isConvenienceLunchLine) {
    // Force low score profile for this specific satirical line.
    score = Number((1 + Math.random() * 2).toFixed(1));
  }
  const isZeroExceptionLine = selectedAnalysis === zeroValueExceptionAnalysis;
  const hasDeleteInComment = selectedComment.includes("삭제");
  const zeroValueChance = 0.03;
  const shouldApplyZeroChance = isZeroExceptionLine || hasDeleteInComment;
  const wonValue = shouldApplyZeroChance && Math.random() < zeroValueChance
    ? 0
    : isDaisoLine
      ? lowSatireWonValue()
      : isConvenienceLunchLine
        ? randomLogRange(1500, 300000)
        : scoreToWonValue(score);
  const wonText = formatWonValue(wonValue);
  const metricBiases = [6, -4, 2, 9];
  const metricValues = metricBiases.map((bias) => scoreToMetricValue(score, bias));

  return {
    id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    createdAt: Date.now(),
    imageSrc,
    professionalComment: selectedComment,
    analysis: selectedAnalysis,
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
  const target = deduped.slice(0, ARCHIVE_LIMIT);
  try {
    writeArchive(target);
  } catch (error) {
    throw new Error("아카이브 저장 공간이 부족합니다.");
  }
}

function trySaveToArchive(report) {
  try {
    saveToArchive(report);
  } catch (error) {
    throw error;
  }
}

async function showSection(sectionName, options = {}) {
  const { smooth = false } = options;
  const sectionMap = {
    upload: uploadSection,
    loading: loadingSection,
    result: resultSection,
    archive: archiveSection
  };

  if (smooth && currentSection !== sectionName) {
    const currentVisibleSection = sectionMap[currentSection];
    if (currentVisibleSection) {
      currentVisibleSection.classList.add("section-fade-out");
      await wait(180);
      currentVisibleSection.classList.remove("section-fade-out");
    }
  }

  uploadSection.classList.toggle("hidden", sectionName !== "upload");
  loadingSection.classList.toggle("hidden", sectionName !== "loading");
  resultSection.classList.toggle("hidden", sectionName !== "result");
  archiveSection.classList.toggle("hidden", sectionName !== "archive");

  const targetSection = sectionMap[sectionName];
  if (targetSection && currentSection !== sectionName) {
    targetSection.classList.remove("section-animate-in");
    targetSection.offsetHeight;
    targetSection.classList.add("section-animate-in");
    window.setTimeout(() => targetSection.classList.remove("section-animate-in"), 320);
  }
  currentSection = sectionName;
}

function formatArchiveDate(ts) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(ts));
}

function openAboutModal() {
  document.body.classList.add("about-active");
  requestAnimationFrame(() => {
    aboutModal.classList.add("is-visible");
  });
}

function closeAboutModal() {
  aboutModal.classList.remove("is-visible");
  document.body.classList.remove("about-active");
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
  const wittyHash = "#acua-ai-curator-for-unknown-arts";
  if (!window.location.protocol.startsWith("http")) return;
  if (window.location.hash === wittyHash) return;
  // Use hash instead of pathname so static hosting refresh never 404s.
  window.history.replaceState({}, "", `${window.location.pathname}${window.location.search}${wittyHash}`);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAnalysisAnimation() {
  const runId = ++analysisRunId;
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";
  progressBar.offsetHeight;
  progressBar.style.transition = "";

  for (let i = 0; i < stages.length; i += 1) {
    if (runId !== analysisRunId) return;
    stageText.style.animation = "none";
    stageText.offsetHeight;
    stageText.style.animation = "";
    stageText.innerHTML = `${stages[i]}<span class="dots"></span>`;
    progressBar.style.width = `${((i + 1) / stages.length) * 100}%`;
    await wait(1250);
  }
}

function isHeicFile(file) {
  const fileName = (file.name || "").toLowerCase();
  const fileType = (file.type || "").toLowerCase();
  return fileType.includes("heic") || fileType.includes("heif") || fileName.endsWith(".heic") || fileName.endsWith(".heif");
}

async function normalizeImageFile(file) {
  if (!isHeicFile(file)) return file;
  if (typeof heic2any !== "function") {
    throw new Error("HEIC 변환 라이브러리를 불러오지 못했습니다.");
  }

  const converted = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.92
  });
  const convertedBlob = Array.isArray(converted) ? converted[0] : converted;
  return new File([convertedBlob], `${(file.name || "iphone-photo").replace(/\.(heic|heif)$/i, "")}.jpg`, {
    type: "image/jpeg"
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("이미지 파일을 읽는 중 오류가 발생했습니다."));
    reader.readAsDataURL(file);
  });
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error(message)), ms);
    })
  ]);
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지 디코딩에 실패했습니다."));
    img.src = src;
  });
}

async function compressImageForArchive(imageSrc) {
  return compressImageForArchiveWithOptions(imageSrc, { maxLongEdge: 1600, quality: 0.88 });
}

async function compressImageForArchiveWithOptions(imageSrc, options = {}) {
  try {
    const img = await loadImageElement(imageSrc);
    const maxLongEdge = Number(options.maxLongEdge) || 1600;
    const quality = Number(options.quality) || 0.88;
    const longEdge = Math.max(img.naturalWidth, img.naturalHeight);
    const scale = longEdge > maxLongEdge ? maxLongEdge / longEdge : 1;
    const targetWidth = Math.max(1, Math.round(img.naturalWidth * scale));
    const targetHeight = Math.max(1, Math.round(img.naturalHeight * scale));

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return imageSrc;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    const compressed = canvas.toDataURL("image/jpeg", quality);
    if (!compressed || compressed.length < 128) return imageSrc;
    return compressed;
  } catch (error) {
    console.warn("아카이브 이미지 압축 실패:", error);
    return imageSrc;
  }
}

async function createArchiveReport(report) {
  const archiveImageSrc = await compressImageForArchive(report.imageSrc);
  return {
    ...report,
    imageSrc: archiveImageSrc
  };
}

async function safeReadImageDataUrl(file) {
  try {
    return await readFileAsDataUrl(file);
  } catch (error) {
    throw new Error("이미지 파일을 읽을 수 없습니다. 손상된 파일이거나 브라우저가 형식을 지원하지 않습니다.");
  }
}

async function processImage(file) {
  if (isProcessing) return;
  isProcessing = true;

  try {
    let normalizedFile;
    try {
      normalizedFile = await normalizeImageFile(file);
    } catch (error) {
      console.warn("HEIC 변환 실패, 원본 파일 재시도:", error);
      normalizedFile = file;
    }

    const imageSrc = await withTimeout(
      safeReadImageDataUrl(normalizedFile),
      30000,
      "이미지를 불러오는 시간이 오래 걸리고 있습니다. 파일 용량을 줄여 다시 시도해 주세요."
    );

    showSection("loading");

    await runAnalysisAnimation();

    const report = buildReportData(imageSrc);
    applyReport(report);
    try {
      const archiveReport = await createArchiveReport(report);
      trySaveToArchive(archiveReport);
    } catch (archiveError) {
      // Retry once with a much smaller preview to avoid localStorage quota failures.
      try {
        const fallbackImageSrc = await compressImageForArchiveWithOptions(report.imageSrc, {
          maxLongEdge: 900,
          quality: 0.62
        });
        trySaveToArchive({
          ...report,
          imageSrc: fallbackImageSrc
        });
      } catch (retryError) {
        // Archive save should never block showing analysis result.
        console.warn("아카이브 저장 실패:", retryError || archiveError);
      }
    }

    showSection("result");
  } catch (error) {
    console.error("이미지 처리 실패:", error);
    showSection("upload");
    window.alert(`이미지 분석에 실패했습니다.\n원인: ${error.message || "알 수 없는 오류"}\n사진을 다시 선택하거나 다른 형식(JPG/PNG)으로 시도해 주세요.`);
  } finally {
    isProcessing = false;
  }
}

function handleFiles(fileList) {
  const file = fileList && fileList[0];
  if (!file) return;
  const fileType = (file.type || "").toLowerCase();
  if (fileType && !fileType.startsWith("image/") && !isHeicFile(file)) return;
  processImage(file);
}

function openFilePicker() {
  if (isFilePickerOpen) return;
  if (Date.now() < suppressPickerForDragUntil) return;
  isFilePickerOpen = true;
  // Release picker lock after the native dialog returns focus to the page.
  const releasePickerLock = () => {
    window.setTimeout(() => {
      isFilePickerOpen = false;
    }, 250);
  };
  window.addEventListener("focus", releasePickerLock, { once: true });
  fileInput.value = "";
  fileInput.click();
}

function markDragInteraction() {
  suppressPickerForDragUntil = Date.now() + 4000;
}

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  markDragInteraction();
  dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  event.stopPropagation();
  markDragInteraction();
  dropZone.classList.remove("drag-over");
  // Some browsers emit a delayed synthetic click after drop; ignore those.
  suppressFilePickerUntil = Date.now() + 2500;
  handleFiles(event.dataTransfer.files);
});

dropZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openFilePicker();
  }
});

dropZone.addEventListener("click", (event) => {
  if (Date.now() < suppressFilePickerUntil) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  openFilePicker();
});

document.addEventListener("dragenter", () => {
  markDragInteraction();
});

document.addEventListener("dragover", () => {
  markDragInteraction();
});

document.addEventListener("drop", () => {
  markDragInteraction();
});

fileInput.addEventListener("change", () => {
  isFilePickerOpen = false;
  handleFiles(fileInput.files);
});

setWittyMuseumAddress();
aboutModal.classList.remove("hidden");

resetButton.addEventListener("click", () => {
  analysisRunId += 1;
  currentReport = null;
  uploadedImage.removeAttribute("src");
  fileInput.value = "";
  showSection("upload");
  progressBar.style.width = "0%";
});

homeLink.addEventListener("click", async () => {
  analysisRunId += 1;
  currentReport = null;
  uploadedImage.removeAttribute("src");
  fileInput.value = "";
  closeAboutModal();
  await showSection("upload", { smooth: true });
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
