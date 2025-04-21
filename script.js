// 데이터 (실제로는 서버에서 가져오거나 data.json 파일을 로드해야 함)
const gameData = {
    patchNotes: [
        {
            id: 1,
            title: "v1.4 업데이트",
            date: "2023-06-15",
            type: "character",
            summary: "새로운 캐릭터 '레이븐' 추가 및 밸런스 조정",
            details: "1. 새로운 캐릭터 '레이븐' 추가\n- 어둠 속성 원거리 딜러\n- 독특한 도트 데미지 메커니즘\n\n2. 밸런스 조정\n- '아리아' 스킬 데미지 8% 상향\n- '마크' 궁극기 쿨타임 5초 감소\n\n3. 버그 수정\n- 특정 상황에서 게임이 멈추는 문제 해결\n- UI 일부 텍스트 오류 수정"
        },
        {
            id: 2,
            title: "v1.3.2 패치",
            date: "2023-05-28",
            type: "balance",
            summary: "주요 캐릭터 밸런스 조정 및 버그 수정",
            details: "1. 밸런스 조정\n- '제로' 기본 공격 데미지 12% 하향\n- '루나' 스킬 2 효과 범위 15% 증가\n- '벤' 궁극기 재사용 대기시간 3초 감소\n\n2. 버그 수정\n- 강화 성공률 UI 표시 오류 수정\n- 특정 스킬이 벽을 관통하는 문제 해결\n- 친구 목록 로딩 문제 해결"
        },
        {
            id: 3,
            title: "v1.3.1 핫픽스",
            date: "2023-05-20",
            type: "resource",
            summary: "긴급 버그 수정 및 서버 안정화",
            details: "1. 버그 수정\n- 로그인 시 간헐적으로 발생하는 오류 해결\n- 인벤토리 아이템 중복 표시 문제 수정\n- 강화 애니메이션 지연 문제 해결\n\n2. 서버 안정화\n- 서버 불안정으로 인한 접속 문제 개선\n- 데이터 동기화 로직 최적화"
        },
        {
            id: 4,
            title: "v1.3 대규모 업데이트",
            date: "2023-05-10",
            type: "character",
            summary: "신규 캐릭터 2종 추가 및 새로운 컨텐츠",
            details: "1. 신규 캐릭터 추가\n- '엘리스': 빛 속성 힐러\n- '카인': 불 속성 근접 딜러\n\n2. 새로운 컨텐츠\n- 레이드 '고대 신의 유적' 추가\n- 새로운 장비 세트 3종 추가\n\n3. 시스템 개선\n- 길드 시스템 추가\n- 친구 시스템 개선\n- UI 전면 개편"
        }
    ],
    characters: [
        {
            id: 1,
            name: "레이븐",
            grade: "UR",
            element: "어둠",
            position: "딜러",
            thumbnail: "https://via.placeholder.com/300x400/333333/FFFFFF?text=Raven",
            story: "어둠의 권능을 다루는 비밀 결사 출신의 암살자. 과거의 죄악을 씻기 위해 여행 중이다.",
            combat: "원거리에서 강력한 도트 데미지를 주는 스타일. 스킬 연계를 통해 중독 스택을 쌓아 큰 피해를 입힐 수 있다.",
            equipment: "어둠 속성 증폭 장비 추천. 치명타 확률과 치명타 데미지를 올리는 것이 효과적이다.",
            skills: [
                {
                    name: "그림자 표식",
                    description: "적에게 표식을 남겨 5초 동안 지속 피해를 입힙니다. 표식이 있는 적에게 스킬 사용 시 추가 효과가 발동합니다."
                },
                {
                    name: "암흑의 발톱",
                    description: "전방으로 암흑의 발톱을 날려 피해를 입히고 적을 밀어냅니다. 표식이 있는 적에게는 추가 피해를 입힙니다."
                },
                {
                    name: "어둠의 권능",
                    description: "자신의 공격력을 15% 증가시키고 모든 스킬의 치명타 확률을 20% 증가시킵니다. 지속시간 10초."
                },
                {
                    name: "종말의 낙인 (궁극기)",
                    description: "대상 지역에 강력한 어둠의 낙인을 찍어 광범위 피해를 입힙니다. 표식이 있는 적은 추가 피해를 받고 기절합니다."
                }
            ]
        },
        {
            id: 2,
            name: "아리아",
            grade: "SSR",
            element: "빛",
            position: "힐러",
            thumbnail: "https://via.placeholder.com/300x400/F8F8F8/333333?text=Aria",
            story: "빛의 사제단에서 자라난 순수한 성녀. 모든 생명을 소중히 여기며 아픈 이를 치유하는 것을 사명으로 삼는다.",
            combat: "파티원을 치유하고 보호하는데 특화된 스타일. 다양한 버프와 힐 스킬로 파티의 생존률을 크게 높인다.",
            equipment: "치유량 증가 옵션이 있는 장비 추천. 스킬 재사용 대기시간 감소도 중요하다.",
            skills: [
                {
                    name: "빛의 정화",
                    description: "아군 한 명을 치유하고 해로운 효과를 제거합니다. 치유량은 아리아의 마법 공격력에 비례합니다."
                },
                {
                    name: "신성한 보호막",
                    description: "아군 한 명에게 보호막을 부여합니다. 보호막은 일정량의 피해를 흡수하며 지속시간 동안 상태 이상에 면역됩니다."
                },
                {
                    name: "축복의 빛",
                    description: "주변 모든 아군을 치유하고 10초 동안 공격력과 방어력을 10% 증가시킵니다."
                },
                {
                    name: "부활의 기원 (궁극기)",
                    description: "사망한 아군 한 명을 부활시키고 최대 체력의 50%로 소생시킵니다. 전투 중 한 번만 사용 가능합니다."
                }
            ]
        },
        {
            id: 3,
            name: "제로",
            grade: "UR",
            element: "바람",
            position: "딜러",
            thumbnail: "https://via.placeholder.com/300x400/E8F5E9/333333?text=Zero",
            story: "바람을 타고 다니는 신비로운 검객. 자신의 과거를 잊어버린 채 강함만을 추구한다.",
            combat: "빠른 이동과 연속 공격이 특징인 근접 딜러. 스킬 연계를 통해 순간적으로 큰 피해를 입힐 수 있다.",
            equipment: "공격 속도와 이동 속도 옵션이 있는 장비 추천. 치명타 확률도 중요하다.",
            skills: [
                {
                    name: "질풍참",
                    description: "전방으로 빠르게 돌진하며 적을 베어 피해를 입힙니다. 적중 시 스킬 재사용 대기시간이 1초 감소합니다."
                },
                {
                    name: "선풍각",
                    description: "주변의 적을 강력한 발차기로 공격하여 피해를 입히고 공중에 띄웁니다."
                },
                {
                    name: "바람의 길",
                    description: "이동 속도가 30% 증가하고 기본 공격이 바람의 칼날을 발사합니다. 지속시간 8초."
                },
                {
                    name: "천공의 검 (궁극기)",
                    description: "공중으로 점프한 후 강력한 검기를 발사하여 광범위 피해를 입힙니다. 낮은 체력의 적은 즉시 처형됩니다."
                }
            ]
        },
        {
            id: 4,
            name: "마크",
            grade: "SSR",
            element: "불",
            position: "탱커",
            thumbnail: "https://via.placeholder.com/300x400/FFEBEE/333333?text=Mark",
            story: "불의 전사 일족의 후예. 거대한 방패로 동료를 지키는 것을 영광으로 여긴다.",
            combat: "강력한 방어력과 생명력으로 파티의 방패 역할을 수행. 적의 공격을 흡수하고 위협 수준을 관리한다.",
            equipment: "방어력과 생명력 옵션이 있는 장비 추천. 위협 수준 증가 옵션도 유용하다.",
            skills: [
                {
                    name: "방패 강타",
                    description: "적에게 방패로 강타하여 피해를 입히고 위협 수준을 크게 증가시킵니다."
                },
                {
                    name: "불꽃의 결의",
                    description: "자신의 방어력을 20% 증가시키고 주변 적에게 초당 피해를 입힙니다. 지속시간 10초."
                },
                {
                    name: "희생의 방패",
                    description: "아군 한 명을 대상으로 하여 그 아군이 받는 피해의 50%를 대신 받습니다. 지속시간 5초."
                },
                {
                    name: "불사조의 의지 (궁극기)",
                    description: "8초 동안 무적 상태가 되며 주변 적들에게 지속적으로 피해를 입힙니다. 효과 종료 시 받은 피해의 30%를 주변 적들에게 반사합니다."
                }
            ]
        },
        {
            id: 5,
            name: "루나",
            grade: "SR",
            element: "물",
            position: "서포터",
            thumbnail: "https://via.placeholder.com/300x400/E3F2FD/333333?text=Luna",
            story: "달의 힘을 다루는 신비로운 무녀. 조용한 성격이지만 전장에서는 강력한 지원 능력을 발휘한다.",
            combat: "다양한 군중 제어 스킬과 버프로 파티를 지원. 적을 제압하고 아군의 전투력을 향상시킨다.",
            equipment: "효과 적중률과 스킬 재사용 대기시간 감소 옵션이 있는 장비 추천.",
            skills: [
                {
                    name: "달빛 속박",
                    description: "적 한 명을 달빛으로 속박하여 3초 동안 이동하지 못하게 합니다."
                },
                {
                    name: "달의 축복",
                    description: "아군 한 명의 공격력과 마법 공격력을 15% 증가시킵니다. 지속시간 12초."
                },
                {
                    name: "물의 보호막",
                    description: "아군 한 명에게 보호막을 부여합니다. 보호막은 피해를 흡수하며 피해를 입히는 적을 2초 동안 둔화시킵니다."
                },
                {
                    name: "월광의 합창 (궁극기)",
                    description: "주변 모든 아군의 체력을 20% 회복시키고 10초 동안 모든 능력치를 10% 증가시킵니다."
                }
            ]
        },
        {
            id: 6,
            name: "벤",
            grade: "R",
            element: "땅",
            position: "탱커",
            thumbnail: "https://via.placeholder.com/300x400/EFEBE9/333333?text=Ben",
            story: "평범한 농부 출신의 전사. 우연히 각성한 대지의 힘으로 동료들을 지키기로 결심했다.",
            combat: "땅의 힘을 이용해 적을 제압하고 아군을 보호. 단단한 방어력과 안정적인 위협 수준 관리가 특징.",
            equipment: "생명력과 방어력 옵션이 있는 장비 추천. 위협 수준 증가 옵션도 유용하다.",
            skills: [
                {
                    name: "대지 충돌",
                    description: "지면을 강타하여 주변 적들에게 피해를 입히고 2초 동안 기절시킵니다."
                },
                {
                    name: "돌의 갑옷",
                    description: "자신의 방어력을 30% 증가시키고 받는 피해를 15% 감소시킵니다. 지속시간 10초."
                },
                {
                    name: "대지의 분노",
                    description: "전방으로 대지의 파동을 일으켜 피해를 입히고 적들을 밀어냅니다."
                },
                {
                    name: "거인의 결의 (궁극기)",
                    description: "10초 동안 최대 생명력이 50% 증가하고 모든 받는 피해가 20% 감소합니다. 효과 종료 시 증가한 생명력이 제거됩니다."
                }
            ]
        }
    ],
    enhancementData: {
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
    }
};

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 패치노트 로드
    loadPatchNotes();
    
    // 캐릭터 정보 로드
    loadCharacters();
    
    // 강화 계산기 이벤트 리스너 설정
    setupCalculator();
    
    // 경험치 표 로드
    loadExpTables();
});

// 패치노트 로드 함수
function loadPatchNotes(filter = 'all') {
    const patchContainer = document.getElementById('patch-container');
    patchContainer.innerHTML = '';
    
    let filteredPatches = gameData.patchNotes;
    if (filter !== 'all') {
        filteredPatches = gameData.patchNotes.filter(patch => patch.type === filter);
    }
    
    filteredPatches.forEach(patch => {
        const patchCard = document.createElement('div');
        patchCard.className = 'patch-card';
        patchCard.innerHTML = `
            <div class="patch-card-header">
                <h3>${patch.title}</h3>
                <p class="patch-date">${patch.date}</p>
            </div>
            <div class="patch-summary">
                <p>${patch.summary}</p>
            </div>
            <div class="patch-more">자세히 보기</div>
            <div class="patch-details">
                <p>${patch.details.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        patchContainer.appendChild(patchCard);
        
        // 자세히 보기 버튼 이벤트
        const moreBtn = patchCard.querySelector('.patch-more');
        const details = patchCard.querySelector('.patch-details');
        
        moreBtn.addEventListener('click', function() {
            details.classList.toggle('active');
            moreBtn.textContent = details.classList.contains('active') ? '간략히 보기' : '자세히 보기';
        });
    });
    
    // 필터 버튼 활성화
    document.querySelectorAll('.patch-filter .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
}

// 캐릭터 정보 로드 함수
function loadCharacters(filter = 'all') {
    const characterContainer = document.getElementById('character-container');
    characterContainer.innerHTML = '';
    
    let filteredCharacters = gameData.characters;
    if (filter !== 'all') {
        filteredCharacters = gameData.characters.filter(char => char.position === filter);
    }
    
    filteredCharacters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        characterCard.innerHTML = `
            <div class="character-thumbnail">
                <img src="${character.thumbnail}" alt="${character.name}">
            </div>
            <div class="character-info">
                <h3>${character.name}</h3>
                <div class="character-meta">
                    <span class="grade-${character.grade.toLowerCase()}">${character.grade}</span>
                    <span class="element-${character.element}">${character.element}</span>
                    <span class="position-${character.position}">${character.position}</span>
                </div>
                <div class="character-actions">
                    <button class="btn view-story" data-id="${character.id}">스토리 보기</button>
                    <button class="btn secondary view-details" data-id="${character.id}">상세 정보</button>
                </div>
            </div>
        `;
        
        characterContainer.appendChild(characterCard);
    });
    
    // 필터 버튼 활성화
    document.querySelectorAll('.character-filter .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    // 캐릭터 상세보기 이벤트 설정
    setupCharacterModals();
}

// 캐릭터 모달 설정 함수
function setupCharacterModals() {
    const modal = document.getElementById('character-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    // 모달 닫기
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 탭 전환
    const tabs = modal.querySelectorAll('.character-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            // 현재 탭 활성화
            this.classList.add('active');
            
            // 모든 콘텐츠 숨기기
            document.querySelectorAll('.character-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            // 현재 콘텐츠 보이기
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // 캐릭터 카드 클릭 이벤트
    document.querySelectorAll('.view-story, .view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const characterId = parseInt(this.dataset.id);
            const character = gameData.characters.find(c => c.id === characterId);
            
            if (character) {
                // 모달 내용 채우기
                document.getElementById('modal-character-name').textContent = character.name;
                document.getElementById('modal-character-img').src = character.thumbnail;
                document.getElementById('modal-character-img').alt = character.name;
                document.getElementById('modal-character-grade').textContent = character.grade;
                document.getElementById('modal-character-element').textContent = character.element;
                document.getElementById('modal-character-position').textContent = character.position;
                document.getElementById('modal-character-story').textContent = character.story;
                document.getElementById('modal-character-combat').textContent = character.combat;
                document.getElementById('modal-character-equipment').textContent = character.equipment;
                
                // 스킬 정보 채우기
                const skillsContainer = document.getElementById('modal-character-skills');
                skillsContainer.innerHTML = '';
                character.skills.forEach(skill => {
                    const skillItem = document.createElement('div');
                    skillItem.className = 'skill-item';
                    skillItem.innerHTML = `
                        <h5>${skill.name}</h5>
                        <p>${skill.description}</p>
                    `;
                    skillsContainer.appendChild(skillItem);
                });
                
                // 스토리 보기 버튼이면 스토리 탭으로, 상세 정보 버튼이면 전투 스타일 탭으로
                if (this.classList.contains('view-story')) {
                    document.querySelector('.character-tab[data-tab="story"]').click();
                } else {
                    document.querySelector('.character-tab[data-tab="combat"]').click();
                }
                
                // 모달 보이기
                modal.style.display = 'block';
            }
        });
    });
}

// 강화 계산기 설정 함수
function setupCalculator() {
    const calculateBtn = document.getElementById('calculate-btn');
    const showExpTableBtn = document.getElementById('show-exp-table');
    const expTableModal = document.getElementById('exp-table-modal');
    const closeModalBtn = expTableModal.querySelector('.close-modal');
    
    // 계산 버튼 클릭 이벤트
    calculateBtn.addEventListener('click', calculateEnhancement);
    
    // 경험치 표 보기 버튼 클릭 이벤트
    showExpTableBtn.addEventListener('click', function() {
        expTableModal.style.display = 'block';
    });
    
    // 모달 닫기 버튼 클릭 이벤트
    closeModalBtn.addEventListener('click', function() {
        expTableModal.style.display = 'none';
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === expTableModal) {
            expTableModal.style.display = 'none';
        }
    });
    
    // 경험치 표 탭 전환
    const tabs = expTableModal.querySelectorAll('.modal-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            // 현재 탭 활성화
            this.classList.add('active');
            
            // 모든 콘텐츠 숨기기
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            // 현재 콘텐츠 보이기
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // 입력값 변경 시 자동 계산
    document.querySelectorAll('#equipment-grade, #equipment-type, #current-level, #target-level').forEach(input => {
        input.addEventListener('change', calculateEnhancement);
    });
}

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
    
    // 경험치 및 골드 계산
    const expData = gameData.enhancementData[grade][type].exp;
    const goldData = gameData.enhancementData[grade][type].gold;
    
    let totalExp = 0;
    let totalGold = 0;
    
    // 1->2부터 계산하므로 currentLevel부터 targetLevel-1까지
    for (let i = currentLevel; i < targetLevel; i++) {
        totalExp += expData[i];
        totalGold += goldData[i];
    }
    
    // 재료 계산 (8Ti=4000, 4Ti=2000, 2Ti=1000, 1Ti=500)
    const materials = {
        '8ti': Math.floor(totalExp / 4000),
        remaining: totalExp % 4000,
        '4ti': 0,
        '2ti': 0,
        '1ti': 0
    };
    
    materials.remaining = totalExp - (materials['8ti'] * 4000);
    materials['4ti'] = Math.floor(materials.remaining / 2000);
    materials.remaining = materials.remaining - (materials['4ti'] * 2000);
    materials['2ti'] = Math.floor(materials.remaining / 1000);
    materials.remaining = materials.remaining - (materials['2ti'] * 1000);
    materials['1ti'] = Math.ceil(materials.remaining / 500);
    
    // 결과 표시
    document.getElementById('total-exp').textContent = totalExp.toLocaleString();
    document.getElementById('total-gold').textContent = totalGold.toLocaleString();
    document.getElementById('material-8ti').textContent = materials['8ti'];
    document.getElementById('material-4ti').textContent = materials['4ti'];
    document.getElementById('material-2ti').textContent = materials['2ti'];
    document.getElementById('material-1ti').textContent = materials['1ti'];
}

// 경험치 표 로드 함수
function loadExpTables() {
    // UR 테이블
    const urTableBody = document.getElementById('ur-table-body');
    for (let i = 0; i < 70; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${gameData.enhancementData.UR.weapon.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.UR.weapon.gold[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.UR.accessory.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.UR.accessory.gold[i].toLocaleString()}</td>
        `;
        urTableBody.appendChild(row);
    }
    
    // SSR 테이블
    const ssrTableBody = document.getElementById('ssr-table-body');
    for (let i = 0; i < 70; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${gameData.enhancementData.SSR.weapon.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SSR.weapon.gold[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SSR.accessory.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SSR.accessory.gold[i].toLocaleString()}</td>
        `;
        ssrTableBody.appendChild(row);
    }
    
    // SR 테이블
    const srTableBody = document.getElementById('sr-table-body');
    for (let i = 0; i < 70; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${gameData.enhancementData.SR.weapon.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SR.weapon.gold[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SR.accessory.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.SR.accessory.gold[i].toLocaleString()}</td>
        `;
        srTableBody.appendChild(row);
    }
    
    // R 테이블
    const rTableBody = document.getElementById('r-table-body');
    for (let i = 0; i < 70; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${gameData.enhancementData.R.weapon.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.R.weapon.gold[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.R.accessory.exp[i].toLocaleString()}</td>
            <td>${gameData.enhancementData.R.accessory.gold[i].toLocaleString()}</td>
        `;
        rTableBody.appendChild(row);
    }
}

// 필터 버튼 이벤트 설정
document.querySelectorAll('.patch-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        loadPatchNotes(this.dataset.filter);
    });
});

document.querySelectorAll('.character-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        loadCharacters(this.dataset.filter);
    });
});