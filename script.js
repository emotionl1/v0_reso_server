// 데이터 정의
const enhancementData = {
    UR: {
        weapon: {
            exp: [100,200,300,400,500,600,700,800,900,1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000,3400,3800,4200,4600,5000,5400,5800,6200,6600,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,19000,21000,23000,25000,27000,29000,31000,33000,35000,37000,41000,45000,49000,53000,57000,61000,65000,69000,73000,77000,81000,85000,89000,93000,97000,101000,105000,109000,113000],
            gold: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,12000,14000,16000,18000,20000,22000,24000,26000,28000,30000,34000,38000,42000,46000,50000,54000,58000,62000,66000,70000,80000,90000,100000,110000,120000,130000,140000,150000,160000,170000,190000,210000,230000,250000,270000,290000,310000,330000,350000,370000,410000,450000,490000,530000,570000,610000,650000,690000,730000,770000,810000,850000,890000,930000,970000,1010000,1050000,1090000,1130000]
        },
        accessory: {
            exp: [150,300,450,600,750,900,1050,1200,1350,1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,5100,5700,6300,6900,7500,8100,8700,9300,9900,10500,12000,13500,15000,16500,18000,19500,21000,22500,24000,25500,28500,31500,34500,37500,40500,43500,46500,49500,52500,55500,61500,67500,73500,79500,85500,91500,97500,103500,109500,115500,121500,127500,133500,139500,145500,151500,157500,163500,169500],
            gold: [1500,3000,4500,6000,7500,9000,10500,12000,13500,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,51000,57000,63000,69000,75000,81000,87000,93000,99000,105000,120000,135000,150000,165000,180000,195000,210000,225000,240000,255000,285000,315000,345000,375000,405000,435000,465000,495000,525000,555000,615000,675000,735000,795000,855000,915000,975000,1035000,1095000,1155000,1215000,1275000,1335000,1395000,1455000,1515000,1575000,1635000,1695000]
        }
    },
    SSR: {
        weapon: {
            exp: [65,110,165,220,275,330,385,440,495,550,660,770,880,990,1100,1210,1320,1430,1540,1650,1870,2090,2310,2530,2750,2970,3190,3410,3630,3850,4400,4950,5500,6050,6600,7150,7700,8250,8800,9350,10450,11550,12650,13750,14850,15950,17050,18150,19250,20350,22550,24750,26950,29150,31350,33550,35750,37950,40150,42350,44550,46750,48950,51150,53350,55550,57750,59950,62150],
            gold: [650,1100,1650,2200,2750,3300,3850,4400,4950,5500,6600,7700,8800,9900,11000,12100,13200,14300,15400,16500,18700,20900,23100,25300,27500,29700,31900,34100,36300,38500,44000,49500,55000,60500,66000,71500,77000,82500,88000,93500,104500,115500,126500,137500,148500,159500,170500,181500,192500,203500,225500,247500,269500,291500,313500,335500,357500,379500,401500,423500,445500,467500,489500,511500,533500,555500,577500,599500,621500]
        },
        accessory: {
            exp: [97,165,247,330,412,495,577,660,742,825,990,1155,1320,1485,1650,1815,1980,2145,2310,2475,2805,3135,3465,3795,4125,4455,4785,5115,5445,5775,6600,7425,8250,9075,9900,10725,11550,12375,13200,14025,15675,17325,18975,20625,22275,23925,25575,27225,28875,30525,33825,37125,40425,43725,47025,50325,53625,56925,60225,63525,66825,70125,73425,76725,80025,83325,86625,89925,93225],
            gold: [975,1650,2475,3300,4125,4950,5775,6600,7425,8250,9900,11550,13200,14850,16500,18150,19800,21450,23100,24750,28050,31350,34650,37950,41250,44550,47850,51150,54450,57750,66000,74250,82500,90750,99000,107250,115500,123750,132000,140250,156750,173250,189750,206250,222750,239250,255750,272250,288750,305250,338250,371250,404250,437250,470250,503250,536250,569250,602250,635250,668250,701250,734250,767250,800250,833250,866250,899250,932250]
        }
    },
    SR: {
        weapon: {
            exp: [40,70,105,140,175,210,245,280,315,350,420,490,560,630,700,770,840,910,980,1050,1190,1330,1470,1610,1750,1890,2030,2170,2310,2450,2800,3150,3500,3850,4200,4550,4900,5250,5600,5950,6650,7350,8050,8750,9450,10150,10850,11550,12250,12950,14350,15750,17150,18550,19950,21350,22750,24150,25550,26950,28350,29750,31150,32550,33950,35350,36750,38150,39550],
            gold: [400,700,1050,1400,1750,2100,2450,2800,3150,3500,4200,4900,5600,6300,7000,7700,8400,9100,9800,10500,11900,13300,14700,16100,17500,18900,20300,21700,23100,24500,28000,31500,35000,38500,42000,45500,49000,52500,56000,59500,66500,73500,80500,87500,94500,101500,108500,115500,122500,129500,143500,157500,171500,185500,199500,213500,227500,241500,255500,269500,283500,297500,311500,325500,339500,353500,367500,381500,395500]
        },
        accessory: {
            exp: [60,105,157,210,262,315,367,420,472,525,630,735,840,945,1050,1155,1260,1365,1470,1575,1785,1995,2205,2415,2625,2835,3045,3255,3465,3675,4200,4725,5250,5775,6300,6825,7350,7875,8400,8925,9975,11025,12075,13125,14175,15225,16275,17325,18375,19425,21525,23625,25725,27825,29925,32025,34125,36225,38325,40425,42525,44625,46725,48825,50925,53025,55125,57225,59325],
            gold: [600,1050,1575,2100,2625,3150,3675,4200,4725,5250,6300,7350,8400,9450,10500,11550,12600,13650,14700,15750,17850,19950,22050,24150,26250,28350,30450,32550,34650,36750,42000,47250,52500,57750,63000,68250,73500,78750,84000,89250,99750,110250,120750,131250,141750,152250,162750,173250,183750,194250,215250,236250,257250,278250,299250,320250,341250,362250,383250,404250,425250,446250,467250,488250,509250,530250,551250,572250,593250]
        }
    },
    R: {
        weapon: {
            exp: [25,50,75,100,125,150,175,200,225,250,300,350,400,450,500,550,600,650,700,750,850,950,1050,1150,1250,1350,1450,1550,1650,1750,2000,2250,2500,2750,3000,3250,3500,3750,4000,4250,4750,5250,5750,6250,6750,7250,7750,8250,8750,9250,10250,11250,12250,13250,14250,15250,16250,17250,18250,19250,20250,21250,22250,23250,24250,25250,26250,27250,28250],
            gold: [250,500,750,1000,1250,1500,1750,2000,2250,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8500,9500,10500,11500,12500,13500,14500,15500,16500,17500,20000,22500,25000,27500,30000,32500,35000,37500,40000,42500,47500,52500,57500,62500,67500,72500,77500,82500,87500,92500,102500,112500,122500,132500,142500,152500,162500,172500,182500,192500,202500,212500,222500,232500,242500,252500,262500,272500,282500]
        },
        accessory: {
            exp: [37,75,112,150,187,225,262,300,337,375,450,525,600,675,750,825,900,975,1050,1125,1275,1425,1575,1725,1875,2025,2175,2325,2475,2625,3000,3375,3750,4125,4500,4875,5250,5625,6000,6375,7125,7875,8625,9375,10125,10875,11625,12375,13125,13875,15375,16875,18375,19875,21375,22875,24375,25875,27375,28875,30375,31875,33375,34875,36375,37875,39375,40875,42375],
            gold: [375,750,1125,1500,1875,2250,2625,3000,3375,3750,4500,5250,6000,6750,7500,8250,9000,9750,10500,11250,12750,14250,15750,17250,18750,20250,21750,23250,24750,26250,30000,33750,37500,41250,45000,48750,52500,56250,60000,63750,71250,78750,86250,93750,101250,108750,116250,123750,131250,138750,153750,168750,183750,198750,213750,228750,243750,258750,273750,288750,303750,318750,333750,348750,363750,378750,393750,408750,423750]
        }
    }
};

// 캐릭터 데이터
const characterData = {
    ignis: {
        name: "이그니스",
        grade: "UR",
        element: "fire",
        position: "front",
        img: "https://via.placeholder.com/300/ff6b6b/ffffff?text=Ignis",
        desc: "불의 정령과 교감하는 전사. 강력한 화염 공격으로 전장을 장악합니다.",
        stats: {
            "HP": "12,450",
            "공격력": "1,850",
            "방어력": "1,200",
            "치명타 확률": "25%",
            "치명타 피해": "180%",
            "효과 적중": "15%",
            "효과 저항": "20%"
        },
        skills: [
            {
                name: "화염 베기",
                desc: "적에게 공격력 120%의 피해를 주고 50% 확률로 2턴간 화상 상태이상을 부여합니다."
            },
            {
                name: "불꽃의 갑옷",
                desc: "2턴간 자신에게 공격력 30% 증가 버프를 부여하고, 피격 시 공격자에게 공격력 50%의 반사 피해를 줍니다."
            },
            {
                name: "용암 분출 (궁극기)",
                desc: "적 전체에게 공격력 180%의 피해를 주고 2턴간 방어력 감소 디버프를 부여합니다. 화상 상태의 적은 추가 피해를 받습니다."
            }
        ],
        equipment: [
            {
                name: "추천 장비 세트",
                desc: "화염의 분노 4세트 + 치명타 2세트"
            },
            {
                name: "주 옵션",
                desc: "공격력 % - 치명타 확률 - 치명타 피해 - 효과 적중"
            },
            {
                name: "부 옵션",
                desc: "치명타 확률/피해 > 공격력 % > 효과 적중 > 공격력"
            }
        ]
    },
    aquarius: {
        name: "아쿠아리우스",
        grade: "SSR",
        element: "water",
        position: "middle",
        img: "https://via.placeholder.com/300/74b9ff/ffffff?text=Aquarius",
        desc: "물의 힘을 다루는 치유사. 아군을 보호하고 적을 억제하는 다양한 기술을 보유하고 있습니다.",
        stats: {
            "HP": "10,800",
            "공격력": "1,200",
            "방어력": "1,350",
            "치명타 확률": "15%",
            "치명타 피해": "150%",
            "효과 적중": "25%",
            "효과 저항": "30%"
        },
        skills: [
            {
                name: "물방울 사격",
                desc: "적에게 공격력 100%의 피해를 주고 30% 확률로 행동 게이지 15% 감소시킵니다."
            },
            {
                name: "치유의 물결",
                desc: "아군 전체의 HP를 25% 회복시키고 2턴간 지속 회복 버프를 부여합니다."
            },
            {
                name: "빙결 감옥 (궁극기)",
                desc: "적 전체에게 공격력 120%의 피해를 주고 50% 확률로 1턴간 빙결 상태이상을 부여합니다."
            }
        ],
        equipment: [
            {
                name: "추천 장비 세트",
                desc: "속도의 끝 4세트 + 효과 저항 2세트"
            },
            {
                name: "주 옵션",
                desc: "HP % - 효과 저항 - 효과 적중 - 방어력 %"
            },
            {
                name: "부 옵션",
                desc: "효과 저항 > HP % > 효과 적중 > 속도"
            }
        ]
    },
    zephyros: {
        name: "제피로스",
        grade: "SSR",
        element: "wind",
        position: "back",
        img: "https://via.placeholder.com/300/a29bfe/ffffff?text=Zephyros",
        desc: "바람의 신속함을 구현한 원거리 딜러. 빠른 행동과 연속 공격이 특징입니다.",
        stats: {
            "HP": "9,500",
            "공격력": "1,650",
            "방어력": "950",
            "치명타 확률": "30%",
            "치명타 피해": "200%",
            "효과 적중": "10%",
            "효과 저항": "15%"
        },
        skills: [
            {
                name: "바람의 화살",
                desc: "적에게 공격력 110%의 피해를 주고 자신의 행동 게이지 15% 증가시킵니다."
            },
            {
                name: "질풍의 포효",
                desc: "적 전체에게 공격력 90%의 피해를 주고 2턴간 공격력 감소 디버프를 부여합니다."
            },
            {
                name: "회오리 난사 (궁극기)",
                desc: "무작위 적에게 4회 공격력 80%의 피해를 줍니다. 동일 대상에게 연속 타격 시 피해량이 20%씩 증가합니다."
            }
        ],
        equipment: [
            {
                name: "추천 장비 세트",
                desc: "치명타 4세트 + 공격력 2세트"
            },
            {
                name: "주 옵션",
                desc: "공격력 % - 치명타 확률 - 치명타 피해 - 속도"
            },
            {
                name: "부 옵션",
                desc: "치명타 확률/피해 > 공격력 % > 속도 > 공격력"
            }
        ]
    },
    terra: {
        name: "테라",
        grade: "SR",
        element: "earth",
        position: "front",
        img: "https://via.placeholder.com/300/55efc4/ffffff?text=Terra",
        desc: "대지의 힘으로 아군을 보호하는 탱커. 높은 생존력과 도발 기술로 전장을 통제합니다.",
        stats: {
            "HP": "14,200",
            "공격력": "950",
            "방어력": "1,800",
            "치명타 확률": "10%",
            "치명타 피해": "130%",
            "효과 적중": "20%",
            "효과 저항": "25%"
        },
        skills: [
            {
                name: "대지 강타",
                desc: "적에게 공격력 100%의 피해를 주고 30% 확률로 1턴간 스턴 상태이상을 부여합니다."
            },
            {
                name: "석화 방패",
                desc: "자신에게 2턴간 방어력 50% 증가 버프를 부여하고 피해 흡수 보호막을 생성합니다."
            },
            {
                name: "대지의 분노 (궁극기)",
                desc: "적 전체에게 공격력 120%의 피해를 주고 70% 확률로 2턴간 도발 상태이상을 부여합니다."
            }
        ],
        equipment: [
            {
                name: "추천 장비 세트",
                desc: "수호자의 의지 4세트 + HP 2세트"
            },
            {
                name: "주 옵션",
                desc: "HP % - 방어력 % - 효과 저항 - 효과 적중"
            },
            {
                name: "부 옵션",
                desc: "HP % > 방어력 % > 효과 저항 > 효과 적중"
            }
        ]
    }
};

// 패치노트 데이터
const patchNotes = [
    {
        title: "v1.4 업데이트",
        date: "2023-11-15",
        summary: "새로운 캐릭터 2종 추가 및 기존 캐릭터 밸런스 조정",
        category: "character",
        details: [
            "신규 캐릭터 '라비린스' 추가 (UR 등급, 얼음 속성)",
            "신규 캐릭터 '제피로스' 추가 (SSR 등급, 바람 속성)",
            "캐릭터 '이그니스' 스킬 효과 상향 조정",
            "캐릭터 '아쿠아리우스' 궁극기 쿨타임 5초 증가",
            "일부 UI 개선 및 버그 수정"
        ]
    },
    {
        title: "v1.3.5 핫픽스",
        date: "2023-10-28",
        summary: "PVP 밸런스 조정 및 버그 수정",
        category: "balance",
        details: [
            "PVP에서 특정 스킬 연계가 지나치게 강력한 문제 수정",
            "일부 캐릭터의 스킬 계수 조정",
            "아이템 드롭률 버그 수정",
            "서버 안정성 개선"
        ]
    },
    {
        title: "v1.3 업데이트",
        date: "2023-10-10",
        summary: "신규 지역 추가 및 이벤트 업데이트",
        category: "resource",
        details: [
            "신규 지역 '폭풍의 협곡' 추가",
            "할로윈 이벤트 '유령들의 축제' 시작",
            "새로운 장비 세트 3종 추가",
            "도시 발전도 시스템 개선",
            "그래픽 리소스 최적화"
        ]
    }
];

// 도시 발전도 데이터
const cityData = [
    {
        name: "수도 크로노스",
        progress: 85,
        subCities: [
            {
                name: "상업 지구",
                items: [
                    { name: "고급 장비 상점", req: 20, unlocked: true },
                    { name: "희귀 재료 상점", req: 45, unlocked: true },
                    { name: "전설 무기 상점", req: 75, unlocked: false }
                ]
            },
            {
                name: "항구 지구",
                items: [
                    { name: "어선 장비 상점", req: 15, unlocked: true },
                    { name: "해양 탐험 상점", req: 40, unlocked: true },
                    { name: "해적의 보물 상점", req: 65, unlocked: true }
                ]
            }
        ]
    },
    {
        name: "무역 도시 헤르메시아",
        progress: 60,
        subCities: [
            {
                name: "중앙 시장",
                items: [
                    { name: "일반 재료 상점", req: 10, unlocked: true },
                    { name: "희귀 재료 상점", req: 30, unlocked: true },
                    { name: "고급 재료 상점", req: 50, unlocked: true }
                ]
            },
            {
                name: "동부 상가",
                items: [
                    { name: "장인 공방", req: 20, unlocked: true },
                    { name: "대장간", req: 55, unlocked: false }
                ]
            }
        ]
    },
    {
        name: "학술 도시 아테네움",
        progress: 45,
        subCities: [
            {
                name: "마법 학원",
                items: [
                    { name: "초급 마법서 상점", req: 15, unlocked: true },
                    { name: "중급 마법서 상점", req: 35, unlocked: true },
                    { name: "고급 마법서 상점", req: 60, unlocked: false }
                ]
            },
            {
                name: "연금술 연구소",
                items: [
                    { name: "기초 연금술 재료", req: 20, unlocked: true },
                    { name: "고급 연금술 재료", req: 50, unlocked: false }
                ]
            }
        ]
    }
];

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 강화 계산기 로직
    const calculateBtn = document.getElementById('calculate-btn');
    const showTableBtn = document.getElementById('show-table-btn');
    const expTableContainer = document.getElementById('exp-table-container');
    
    calculateBtn.addEventListener('click', calculateEnhancement);
    showTableBtn.addEventListener('click', toggleExpTable);
    
    // 경험치 표 생성
    generateExpTables();
    
    // 패치노트 필터링
    setupPatchNoteFilters();
    
    // 캐릭터 필터링
    setupCharacterFilters();
    
    // 캐릭터 모달 이벤트
    setupCharacterModals();
    
    // 도시 발전도 필터링
    setupCityFilters();
    
    // 도시 아코디언
    setupCityAccordion();
});

// 강화 계산 함수
function calculateEnhancement() {
    const grade = document.getElementById('equipment-grade').value;
    const type = document.getElementById('equipment-type').value;
    const currentLevel = parseInt(document.getElementById('current-level').value);
    const targetLevel = parseInt(document.getElementById('target-level').value);
    
    // 유효성 검사
    if (currentLevel >= targetLevel) {
        alert('목표 레벨은 현재 레벨보다 높아야 합니다.');
        return;
    }
    
    if (currentLevel < 1 || targetLevel > 70) {
        alert('레벨은 1에서 70 사이여야 합니다.');
        return;
    }
    
    // 데이터 가져오기
    const expData = enhancementData[grade][type].exp;
    const goldData = enhancementData[grade][type].gold;
    
    // 총 경험치 및 골드 계산
    let totalExp = 0;
    let totalGold = 0;
    
    for (let i = currentLevel; i < targetLevel; i++) {
        totalExp += expData[i];
        totalGold += goldData[i];
    }
    
    // 재료 계산 (8Ti:4000, 4Ti:2000, 2Ti:1000, 1Ti:500)
    const material8Ti = Math.floor(totalExp / 4000);
    const remainingExp1 = totalExp % 4000;
    
    const material4Ti = Math.floor(remainingExp1 / 2000);
    const remainingExp2 = remainingExp1 % 2000;
    
    const material2Ti = Math.floor(remainingExp2 / 1000);
    const remainingExp3 = remainingExp2 % 1000;
    
    const material1Ti = Math.ceil(remainingExp3 / 500);
    
    // 결과 표시
    document.getElementById('total-exp').textContent = totalExp.toLocaleString();
    document.getElementById('total-gold').textContent = totalGold.toLocaleString();
    document.getElementById('material-8ti').textContent = material8Ti;
    document.getElementById('material-4ti').textContent = material4Ti;
    document.getElementById('material-2ti').textContent = material2Ti;
    document.getElementById('material-1ti').textContent = material1Ti;
}

// 경험치 표 토글
function toggleExpTable() {
    expTableContainer.classList.toggle('hidden');
}

// 경험치 표 생성
function generateExpTables() {
    for (const grade in enhancementData) {
        // 무기/방어구 테이블 생성
        const weaponBody = document.getElementById(`${grade}-weapon-body`);
        const accessoryBody = document.getElementById(`${grade}-accessory-body`);
        
        for (let i = 0; i < enhancementData[grade].weapon.exp.length; i++) {
            // 무기/방어구 행 추가
            const weaponRow = document.createElement('tr');
            weaponRow.innerHTML = `
                <td>${i+1}</td>
                <td>${enhancementData[grade].weapon.exp[i].toLocaleString()}</td>
                <td>${enhancementData[grade].weapon.gold[i].toLocaleString()}</td>
            `;
            weaponBody.appendChild(weaponRow);
            
            // 악세서리 행 추가
            const accessoryRow = document.createElement('tr');
            accessoryRow.innerHTML = `
                <td>${i+1}</td>
                <td>${enhancementData[grade].accessory.exp[i].toLocaleString()}</td>
                <td>${enhancementData[grade].accessory.gold[i].toLocaleString()}</td>
            `;
            accessoryBody.appendChild(accessoryRow);
        }
    }
    
    // 테이블 전환 이벤트
    document.querySelectorAll('.table-controls .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tableType = this.getAttribute('data-table');
            
            // 버튼 활성화
            document.querySelectorAll('.table-controls .btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 테이블 표시 전환
            document.querySelectorAll('.exp-table').forEach(table => table.classList.add('hidden'));
            document.getElementById(`${tableType}-table`).classList.remove('hidden');
        });
    });
}

// 패치노트 필터 설정
function setupPatchNoteFilters() {
    document.querySelectorAll('#patch-notes .tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 버튼 활성화
            document.querySelectorAll('#patch-notes .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 카드 필터링
            document.querySelectorAll('.patch-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // 패치노트 상세 보기 토글
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.classList.toggle('hidden');
            
            if (details.classList.contains('hidden')) {
                this.textContent = '자세히 보기';
            } else {
                this.textContent = '간략히 보기';
            }
        });
    });
}

// 캐릭터 필터 설정
function setupCharacterFilters() {
    document.querySelectorAll('#character-info .tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 버튼 활성화
            document.querySelectorAll('#character-info .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 카드 필터링
            document.querySelectorAll('.character-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-position') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 캐릭터 모달 설정
function setupCharacterModals() {
    const modal = document.getElementById('character-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    // 모달 닫기
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    // 캐릭터 정보 버튼 이벤트
    document.querySelectorAll('.info-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const characterId = this.getAttribute('data-character');
            showCharacterModal(characterId, 'basic');
        });
    });
    
    // 캐릭터 상세 버튼 이벤트
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const characterId = this.getAttribute('data-character');
            showCharacterModal(characterId, 'skills');
        });
    });
    
    // 모달 탭 전환
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // 버튼 활성화
            document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 탭 내용 전환
            document.querySelectorAll('.modal-tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-tab') === tab) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// 캐릭터 모달 표시
function showCharacterModal(characterId, defaultTab) {
    const character = characterData[characterId];
    if (!character) return;
    
    const modal = document.getElementById('character-modal');
    
    // 기본 정보 설정
    document.getElementById('modal-character-name').textContent = character.name;
    document.getElementById('modal-character-img').src = character.img;
    document.getElementById('modal-character-img').alt = character.name;
    
    // 등급, 속성, 포지션 설정
    const gradeSpan = document.getElementById('modal-character-grade');
    gradeSpan.textContent = character.grade;
    gradeSpan.className = 'grade ' + character.grade;
    
    const elementSpan = document.getElementById('modal-character-element');
    elementSpan.textContent = character.element === 'fire' ? '불' : 
                             character.element === 'water' ? '물' :
                             character.element === 'wind' ? '바람' : '땅';
    elementSpan.className = 'element ' + character.element;
    
    const positionSpan = document.getElementById('modal-character-position');
    positionSpan.textContent = character.position === 'front' ? '앞열' :
                              character.position === 'middle' ? '중간열' : '뒷열';
    
    // 설명 설정
    document.getElementById('modal-character-desc').textContent = character.desc;
    
    // 스탯 설정
    const statsContainer = document.getElementById('modal-character-stats');
    statsContainer.innerHTML = '';
    
    for (const stat in character.stats) {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <span>${stat}:</span>
            <span>${character.stats[stat]}</span>
        `;
        statsContainer.appendChild(statItem);
    }
    
    // 스킬 설정
    const skillsContainer = document.getElementById('modal-character-skills');
    skillsContainer.innerHTML = '';
    
    character.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-desc">${skill.desc}</div>
        `;
        skillsContainer.appendChild(skillItem);
    });
    
    // 장비 설정
    const equipmentContainer = document.getElementById('modal-character-equipment');
    equipmentContainer.innerHTML = '';
    
    character.equipment.forEach(item => {
        const equipmentItem = document.createElement('div');
        equipmentItem.className = 'equipment-item';
        equipmentItem.innerHTML = `
            <div class="equipment-name">${item.name}</div>
            <div class="equipment-desc">${item.desc}</div>
        `;
        equipmentContainer.appendChild(equipmentItem);
    });
    
    // 기본 탭 설정
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === defaultTab) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.modal-tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-tab') === defaultTab) {
            content.classList.add('active');
        }
    });
    
    // 모달 표시
    modal.classList.remove('hidden');
}

// 도시 발전도 필터 설정
function setupCityFilters() {
    document.querySelectorAll('#urban-dev .tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 버튼 활성화
            document.querySelectorAll('#urban-dev .tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 아이템 필터링
            document.querySelectorAll('.item').forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else if (filter === 'major') {
                    // 대도시 기준은 아코디언으로 처리되므로 특별한 필터링 없음
                    item.style.display = 'flex';
                } else if (filter === 'unlocked' && item.classList.contains('unlocked')) {
                    item.style.display = 'flex';
                } else if (filter === 'locked' && item.classList.contains('locked')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 도시 아코디언 설정
function setupCityAccordion() {
    document.querySelectorAll('.city-header').forEach(header => {
        header.addEventListener('click', function() {
            const cityCard = this.parentElement;
            cityCard.classList.toggle('active');
            
            // 아이콘 변경 (옵션)
            const icon = this.querySelector('.toggle-icon');
            if (icon) {
                if (cityCard.classList.contains('active')) {
                    icon.textContent = '-';
                } else {
                    icon.textContent = '+';
                }
            }
        });
    });
}