// 데이터 저장 함수
function saveDataToServer() {
    fetch('http://localhost:3000/api/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getAuthToken()
        },
        body: JSON.stringify(gameData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('데이터가 성공적으로 저장되었습니다.');
            currentDataVersion = data.newVersion;
        } else {
            alert('데이터 저장 실패: ' + data.message);
        }
    });
}

// 모든 저장 동작에서 saveDataToServer() 호출
function savePatchNote() {
    // 기존 코드...
    saveDataToServer();
}

// 관리자 패널 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // 로그인 페이지인 경우
    if (document.getElementById('admin-login-form')) {
        setupAdminLogin();
    }
    
    // 관리자 패널 페이지인 경우
    if (document.getElementById('patch-notes-panel')) {
        setupAdminPanel();
    }
});

// 관리자 로그인 설정
function setupAdminLogin() {
    const loginForm = document.getElementById('admin-login-form');
    const loginError = document.getElementById('login-error');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const adminId = document.getElementById('admin-id').value;
        const adminPw = document.getElementById('admin-pw').value;
        
        // 간단한 인증 (실제로는 서버와의 통신이 필요)
        if (adminId === 'admin' && adminPw === 'admin123') {
            // 로그인 성공 - 세션 스토리지에 로그인 상태 저장
            sessionStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin-panel.html';
        } else {
            loginError.textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
        }
    });
}

// 관리자 패널 설정
function setupAdminPanel() {
    // 로그인 확인
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // 로그아웃 버튼
    document.getElementById('logout-btn').addEventListener('click', function() {
        sessionStorage.removeItem('adminLoggedIn');
        window.location.href = 'login.html';
    });
    
    // 메뉴 버튼 클릭 이벤트
    document.querySelectorAll('.admin-menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const panelId = this.dataset.panel;
            
            // 모든 버튼 비활성화
            document.querySelectorAll('.admin-menu-btn').forEach(b => {
                b.classList.remove('active');
            });
            // 현재 버튼 활성화
            this.classList.add('active');
            
            // 모든 패널 숨기기
            document.querySelectorAll('.admin-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            // 현재 패널 보이기
            document.getElementById(panelId).classList.add('active');
        });
    });
    
    // 데이터 로드
    loadAdminData();
    
    // 패치노트 관리 이벤트 설정
    setupPatchNotesAdmin();
    
    // 캐릭터 관리 이벤트 설정
    setupCharactersAdmin();
    
    // 강화 계산기 관리 이벤트 설정
    setupCalculatorAdmin();
    
    // 새 기능 추가 이벤트 설정
    setupNewFeatureAdmin();
    
    // 데이터 저장/내보내기 이벤트 설정
    setupDataActions();
}

// 관리자 데이터 로드
function loadAdminData() {
    // 실제로는 서버에서 데이터를 가져와야 하지만, 여기서는 예시 데이터 사용
    // 패치노트 로드
    loadAdminPatchNotes();
    
    // 캐릭터 로드
    loadAdminCharacters();
    
    // 강화 계산기 데이터 로드
    loadAdminCalculatorData();
}

// 관리자 패치노트 로드
function loadAdminPatchNotes() {
    const patchList = document.getElementById('admin-patch-list');
    patchList.innerHTML = '';
    
    gameData.patchNotes.forEach(patch => {
        const patchCard = document.createElement('div');
        patchCard.className = 'admin-patch-card';
        patchCard.innerHTML = `
            <h3>${patch.title}</h3>
            <p>${patch.summary}</p>
            <div class="patch-meta">
                <span>${patch.date}</span>
                <span>${getPatchTypeName(patch.type)}</span>
            </div>
            <div class="patch-actions">
                <button class="btn edit-patch" data-id="${patch.id}">편집</button>
                <button class="btn secondary delete-patch" data-id="${patch.id}">삭제</button>
            </div>
        `;
        
        patchList.appendChild(patchCard);
    });
}

// 패치노트 유형 이름 가져오기
function getPatchTypeName(type) {
    const typeNames = {
        'character': '캐릭터 업데이트',
        'balance': '밸런스 조정',
        'resource': '리소스 패치'
    };
    return typeNames[type] || type;
}

// 관리자 캐릭터 로드
function loadAdminCharacters() {
    const characterList = document.getElementById('admin-character-list');
    characterList.innerHTML = '';
    
    gameData.characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'admin-character-card';
        characterCard.innerHTML = `
            <div class="admin-character-thumbnail">
                <img src="${character.thumbnail}" alt="${character.name}">
            </div>
            <div class="admin-character-info">
                <h3>${character.name}</h3>
                <div class="admin-character-meta">
                    <span class="grade-${character.grade.toLowerCase()}">${character.grade}</span>
                    <span class="element-${character.element}">${character.element}</span>
                    <span class="position-${character.position}">${character.position}</span>
                </div>
                <div class="admin-character-actions">
                    <button class="btn edit-character" data-id="${character.id}">편집</button>
                    <button class="btn secondary delete-character" data-id="${character.id}">삭제</button>
                </div>
            </div>
        `;
        
        characterList.appendChild(characterCard);
    });
}

// 관리자 강화 계산기 데이터 로드
function loadAdminCalculatorData() {
    const gradeSelect = document.getElementById('calc-grade-select');
    const typeSelect = document.getElementById('calc-type-select');
    
    gradeSelect.addEventListener('change', updateCalculatorTable);
    typeSelect.addEventListener('change', updateCalculatorTable);
    
    // 초기 테이블 로드
    updateCalculatorTable();
}

function updateCalculatorTable() {
    const grade = document.getElementById('calc-grade-select').value;
    const type = document.getElementById('calc-type-select').value;
    const dataContainer = document.getElementById('admin-calculator-data');
    
    const expData = gameData.enhancementData[grade][type].exp;
    const goldData = gameData.enhancementData[grade][type].gold;
    
    let tableHTML = `
        <table class="admin-calculator-table">
            <thead>
                <tr>
                    <th>레벨</th>
                    <th>필요 경험치</th>
                    <th>필요 골드</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    for (let i = 0; i < expData.length; i++) {
        tableHTML += `
            <tr>
                <td>${i+1}</td>
                <td><input type="number" value="${expData[i]}" data-level="${i}" data-type="exp"></td>
                <td><input type="number" value="${goldData[i]}" data-level="${i}" data-type="gold"></td>
            </tr>
        `;
    }
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    dataContainer.innerHTML = tableHTML;
}

// 패치노트 관리 이벤트 설정
function setupPatchNotesAdmin() {
    const addPatchBtn = document.getElementById('add-patch-btn');
    const patchEditModal = document.getElementById('patch-edit-modal');
    const closeModalBtn = patchEditModal.querySelector('.close-admin-modal');
    const patchEditForm = document.getElementById('patch-edit-form');
    const deletePatchBtn = document.getElementById('delete-patch-btn');
    
    // 새 패치노트 추가 버튼
    addPatchBtn.addEventListener('click', function() {
        openPatchEditModal(null);
    });
    
    // 패치노트 편집 버튼
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-patch')) {
            const patchId = parseInt(e.target.dataset.id);
            const patch = gameData.patchNotes.find(p => p.id === patchId);
            if (patch) {
                openPatchEditModal(patch);
            }
        }
        
        // 패치노트 삭제 버튼
        if (e.target.classList.contains('delete-patch')) {
            const patchId = parseInt(e.target.dataset.id);
            if (confirm('정말 이 패치노트를 삭제하시겠습니까?')) {
                deletePatchNote(patchId);
            }
        }
    });
    
    // 모달 닫기 버튼
    closeModalBtn.addEventListener('click', function() {
        patchEditModal.style.display = 'none';
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === patchEditModal) {
            patchEditModal.style.display = 'none';
        }
    });
    
    // 패치노트 저장 폼
    patchEditForm.addEventListener('submit', function(e) {
        e.preventDefault();
        savePatchNote();
    });
    
    // 패치노트 삭제 버튼
    deletePatchBtn.addEventListener('click', function() {
        const patchId = parseInt(document.getElementById('edit-patch-id').value);
        if (patchId && confirm('정말 이 패치노트를 삭제하시겠습니까?')) {
            deletePatchNote(patchId);
            patchEditModal.style.display = 'none';
        }
    });
}

// 패치노트 편집 모달 열기
function openPatchEditModal(patch) {
    const modal = document.getElementById('patch-edit-modal');
    const form = document.getElementById('patch-edit-form');
    
    if (patch) {
        // 기존 패치노트 편집
        document.getElementById('edit-patch-id').value = patch.id;
        document.getElementById('edit-patch-title').value = patch.title;
        document.getElementById('edit-patch-date').value = patch.date;
        document.getElementById('edit-patch-type').value = patch.type;
        document.getElementById('edit-patch-summary').value = patch.summary;
        document.getElementById('edit-patch-details').value = patch.details;
        
        // 삭제 버튼 보이기
        document.getElementById('delete-patch-btn').style.display = 'block';
    } else {
        // 새 패치노트 추가
        form.reset();
        document.getElementById('edit-patch-id').value = '';
        document.getElementById('edit-patch-date').value = new Date().toISOString().split('T')[0];
        
        // 삭제 버튼 숨기기
        document.getElementById('delete-patch-btn').style.display = 'none';
    }
    
    modal.style.display = 'block';
}

// 패치노트 저장
function savePatchNote() {
    const modal = document.getElementById('patch-edit-modal');
    const form = document.getElementById('patch-edit-form');
    
    const patchData = {
        id: parseInt(document.getElementById('edit-patch-id').value) || getNextPatchId(),
        title: document.getElementById('edit-patch-title').value,
        date: document.getElementById('edit-patch-date').value,
        type: document.getElementById('edit-patch-type').value,
        summary: document.getElementById('edit-patch-summary').value,
        details: document.getElementById('edit-patch-details').value
    };
    
    // 기존 패치노트인지 확인
    const existingIndex = gameData.patchNotes.findIndex(p => p.id === patchData.id);
    
    if (existingIndex >= 0) {
        // 기존 패치노트 업데이트
        gameData.patchNotes[existingIndex] = patchData;
    } else {
        // 새 패치노트 추가
        gameData.patchNotes.unshift(patchData);
    }
    
    // 패치노트 목록 새로고침
    loadAdminPatchNotes();
    
    // 모달 닫기
    modal.style.display = 'none';
}

// 다음 패치노트 ID 가져오기
function getNextPatchId() {
    if (gameData.patchNotes.length === 0) return 1;
    return Math.max(...gameData.patchNotes.map(p => p.id)) + 1;
}

// 패치노트 삭제
function deletePatchNote(id) {
    gameData.patchNotes = gameData.patchNotes.filter(p => p.id !== id);
    loadAdminPatchNotes();
}

// 캐릭터 관리 이벤트 설정
function setupCharactersAdmin() {
    const addCharacterBtn = document.getElementById('add-character-btn');
    const characterEditModal = document.getElementById('character-edit-modal');
    const closeModalBtn = characterEditModal.querySelector('.close-admin-modal');
    const characterEditForm = document.getElementById('character-edit-form');
    const deleteCharacterBtn = document.getElementById('delete-character-btn');
    const addSkillBtn = document.getElementById('add-skill-btn');
    
    // 새 캐릭터 추가 버튼
    addCharacterBtn.addEventListener('click', function() {
        openCharacterEditModal(null);
    });
    
    // 캐릭터 편집 버튼
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-character')) {
            const characterId = parseInt(e.target.dataset.id);
            const character = gameData.characters.find(c => c.id === characterId);
            if (character) {
                openCharacterEditModal(character);
            }
        }
        
        // 캐릭터 삭제 버튼
        if (e.target.classList.contains('delete-character')) {
            const characterId = parseInt(e.target.dataset.id);
            if (confirm('정말 이 캐릭터를 삭제하시겠습니까?')) {
                deleteCharacter(characterId);
            }
        }
    });
    
    // 모달 닫기 버튼
    closeModalBtn.addEventListener('click', function() {
        characterEditModal.style.display = 'none';
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(e) {
        if (e.target === characterEditModal) {
            characterEditModal.style.display = 'none';
        }
    });
    
    // 캐릭터 저장 폼
    characterEditForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveCharacter();
    });
    
    // 캐릭터 삭제 버튼
    deleteCharacterBtn.addEventListener('click', function() {
        const characterId = parseInt(document.getElementById('edit-character-id').value);
        if (characterId && confirm('정말 이 캐릭터를 삭제하시겠습니까?')) {
            deleteCharacter(characterId);
            characterEditModal.style.display = 'none';
        }
    });
    
    // 스킬 추가 버튼
    addSkillBtn.addEventListener('click', function() {
        addSkillInput();
    });
    
    // 스킬 삭제 버튼
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-skill-btn')) {
            e.target.closest('.skill-input-group').remove();
        }
    });
}

// 캐릭터 편집 모달 열기
function openCharacterEditModal(character) {
    const modal = document.getElementById('character-edit-modal');
    const form = document.getElementById('character-edit-form');
    const skillsContainer = document.getElementById('character-skills-container');
    
    if (character) {
        // 기존 캐릭터 편집
        document.getElementById('edit-character-id').value = character.id;
        document.getElementById('edit-character-name').value = character.name;
        document.getElementById('edit-character-grade').value = character.grade;
        document.getElementById('edit-character-element').value = character.element;
        document.getElementById('edit-character-position').value = character.position;
        document.getElementById('edit-character-thumbnail').value = character.thumbnail;
        document.getElementById('edit-character-story').value = character.story;
        document.getElementById('edit-character-combat').value = character.combat;
        document.getElementById('edit-character-equipment').value = character.equipment;
        
        // 스킬 입력 필드 추가
        skillsContainer.innerHTML = '';
        character.skills.forEach(skill => {
            addSkillInput(skill.name, skill.description);
        });
        
        // 삭제 버튼 보이기
        document.getElementById('delete-character-btn').style.display = 'block';
    } else {
        // 새 캐릭터 추가
        form.reset();
        document.getElementById('edit-character-id').value = '';
        skillsContainer.innerHTML = '';
        
        // 기본 스킬 4개 추가
        for (let i = 0; i < 4; i++) {
            addSkillInput();
        }
        
        // 삭제 버튼 숨기기
        document.getElementById('delete-character-btn').style.display = 'none';
    }
    
    modal.style.display = 'block';
}

// 스킬 입력 필드 추가
function addSkillInput(name = '', description = '') {
    const skillsContainer = document.getElementById('character-skills-container');
    const skillGroup = document.createElement('div');
    skillGroup.className = 'skill-input-group';
    
    skillGroup.innerHTML = `
        <input type="text" placeholder="스킬 이름" value="${name}" required>
        <input type="text" placeholder="스킬 설명" value="${description}" required>
        <span class="remove-skill-btn">&times;</span>
    `;
    
    skillsContainer.appendChild(skillGroup);
}

// 캐릭터 저장
function saveCharacter() {
    const modal = document.getElementById('character-edit-modal');
    const form = document.getElementById('character-edit-form');
    const skillsContainer = document.getElementById('character-skills-container');
    
    // 스킬 정보 수집
    const skills = [];
    skillsContainer.querySelectorAll('.skill-input-group').forEach(group => {
        const inputs = group.querySelectorAll('input');
        if (inputs[0].value && inputs[1].value) {
            skills.push({
                name: inputs[0].value,
                description: inputs[1].value
            });
        }
    });
    
    const characterData = {
        id: parseInt(document.getElementById('edit-character-id').value) || getNextCharacterId(),
        name: document.getElementById('edit-character-name').value,
        grade: document.getElementById('edit-character-grade').value,
        element: document.getElementById('edit-character-element').value,
        position: document.getElementById('edit-character-position').value,
        thumbnail: document.getElementById('edit-character-thumbnail').value,
        story: document.getElementById('edit-character-story').value,
        combat: document.getElementById('edit-character-combat').value,
        equipment: document.getElementById('edit-character-equipment').value,
        skills: skills
    };
    
    // 기존 캐릭터인지 확인
    const existingIndex = gameData.characters.findIndex(c => c.id === characterData.id);
    
    if (existingIndex >= 0) {
        // 기존 캐릭터 업데이트
        gameData.characters[existingIndex] = characterData;
    } else {
        // 새 캐릭터 추가
        gameData.characters.push(characterData);
    }
    
    // 캐릭터 목록 새로고침
    loadAdminCharacters();
    
    // 모달 닫기
    modal.style.display = 'none';
}

// 다음 캐릭터 ID 가져오기
function getNextCharacterId() {
    if (gameData.characters.length === 0) return 1;
    return Math.max(...gameData.characters.map(c => c.id)) + 1;
}

// 캐릭터 삭제
function deleteCharacter(id) {
    gameData.characters = gameData.characters.filter(c => c.id !== id);
    loadAdminCharacters();
}

// 강화 계산기 관리 이벤트 설정
function setupCalculatorAdmin() {
    const updateBtn = document.getElementById('update-calc-data-btn');
    
    updateBtn.addEventListener('click', function() {
        const grade = document.getElementById('calc-grade-select').value;
        const type = document.getElementById('calc-type-select').value;
        
        // 테이블에서 데이터 수집
        const expInputs = document.querySelectorAll('#admin-calculator-data input[data-type="exp"]');
        const goldInputs = document.querySelectorAll('#admin-calculator-data input[data-type="gold"]');
        
        expInputs.forEach(input => {
            const level = parseInt(input.dataset.level);
            const value = parseInt(input.value) || 0;
            gameData.enhancementData[grade][type].exp[level] = value;
        });
        
        goldInputs.forEach(input => {
            const level = parseInt(input.dataset.level);
            const value = parseInt(input.value) || 0;
            gameData.enhancementData[grade][type].gold[level] = value;
        });
        
        alert('강화 데이터가 업데이트되었습니다.');
    });
}

// 새 기능 추가 이벤트 설정
function setupNewFeatureAdmin() {
    const addFeatureBtn = document.getElementById('add-feature-btn');
    
    addFeatureBtn.addEventListener('click', function() {
        const name = document.getElementById('new-feature-name').value;
        const desc = document.getElementById('new-feature-desc').value;
        const icon = document.getElementById('new-feature-icon').value;
        
        if (!name || !desc) {
            alert('기능 이름과 설명을 입력해주세요.');
            return;
        }
        
        // 여기서는 간단히 알림만 표시 (실제로는 기능 추가 구현 필요)
        alert(`새 기능 "${name}"이(가) 추가되었습니다!\n설명: ${desc}\n아이콘: ${icon}`);
        
        // 입력 필드 초기화
        document.getElementById('new-feature-name').value = '';
        document.getElementById('new-feature-desc').value = '';
        document.getElementById('new-feature-icon').value = '';
    });
}

// 데이터 저장/내보내기 이벤트 설정
function setupDataActions() {
    const saveBtn = document.getElementById('save-data-btn');
    const exportBtn = document.getElementById('export-data-btn');
    const importBtn = document.getElementById('import-data-btn');
    const importFile = document.getElementById('import-data-file');
    
    // 데이터 저장 (실제로는 서버에 저장해야 함)
    saveBtn.addEventListener('click', function() {
        // 여기서는 로컬 스토리지에 저장 (실제로는 서버 API 호출 필요)
        localStorage.setItem('resonanceGameData', JSON.stringify(gameData));
        alert('데이터가 저장되었습니다.');
    });
    
    // 데이터 내보내기
    exportBtn.addEventListener('click', function() {
        const dataStr = JSON.stringify(gameData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportName = 'resonance-data-' + new Date().toISOString().slice(0, 10) + '.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportName);
        linkElement.click();
    });
    
    // 데이터 가져오기
    importBtn.addEventListener('click', function() {
        importFile.click();
    });
    
    importFile.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // 간단한 데이터 유효성 검사
                if (importedData.patchNotes && importedData.characters && importedData.enhancementData) {
                    if (confirm('가져온 데이터로 현재 데이터를 덮어쓰시겠습니까?')) {
                        // 데이터 업데이트
                        gameData.patchNotes = importedData.patchNotes;
                        gameData.characters = importedData.characters;
                        gameData.enhancementData = importedData.enhancementData;
                        
                        // UI 새로고침
                        loadAdminPatchNotes();
                        loadAdminCharacters();
                        updateCalculatorTable();
                        
                        alert('데이터가 성공적으로 가져와졌습니다.');
                    }
                } else {
                    alert('유효하지 않은 데이터 파일입니다.');
                }
            } catch (error) {
                alert('파일을 읽는 중 오류가 발생했습니다: ' + error.message);
            }
        };
        reader.readAsText(file);
    });
    // 기존 코드에 다음 기능 추가

// 로그아웃 버튼 클릭 이벤트
document.getElementById('logout-btn').addEventListener('click', function() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = '../index.html'; // 메인 화면으로 이동
});

// 메인으로 버튼 클릭 이벤트
document.getElementById('back-to-main-btn').addEventListener('click', function() {
    window.location.href = '../index.html'; // 메인 화면으로 이동
});

// 비밀번호 변경 버튼 클릭 이벤트
document.getElementById('change-pw-btn').addEventListener('click', function() {
    document.getElementById('change-pw-modal').style.display = 'block';
});

// 비밀번호 변경 모달 닫기
document.querySelector('#change-pw-modal .close-admin-modal').addEventListener('click', function() {
    document.getElementById('change-pw-modal').style.display = 'none';
});

// 비밀번호 변경 폼 제출
document.getElementById('change-pw-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const currentPw = document.getElementById('current-pw').value;
    const newPw = document.getElementById('new-pw').value;
    const confirmPw = document.getElementById('confirm-pw').value;
    const errorElement = document.getElementById('pw-change-error');
    
    // 간단한 유효성 검사 (실제로는 서버와의 통신 필요)
    if (currentPw !== 'admin123') {
        errorElement.textContent = '현재 비밀번호가 일치하지 않습니다.';
        return;
    }
    
    if (newPw !== confirmPw) {
        errorElement.textContent = '새 비밀번호가 일치하지 않습니다.';
        return;
    }
    
    if (newPw.length < 6) {
        errorElement.textContent = '비밀번호는 6자리 이상이어야 합니다.';
        return;
    }
    
    // 비밀번호 변경 성공 (실제로는 서버에 변경 요청 필요)
    errorElement.textContent = '';
    alert('비밀번호가 성공적으로 변경되었습니다.');
    document.getElementById('change-pw-modal').style.display = 'none';
    this.reset();
});

// 뒤로 가기 기능 (브라우저 히스토리)
function setupBackButton() {
    // 패널 전환 시 히스토리 추가
    document.querySelectorAll('.admin-menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const panelId = this.dataset.panel;
            history.pushState({ panel: panelId }, '', `#${panelId}`);
        });
    });
    
    // 히스토리 변경 감지
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.panel) {
            // 모든 버튼 비활성화
            document.querySelectorAll('.admin-menu-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // 해당 패널 버튼 활성화
            const activeBtn = document.querySelector(`.admin-menu-btn[data-panel="${e.state.panel}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
            
            // 모든 패널 숨기기
            document.querySelectorAll('.admin-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            
            // 해당 패널 보이기
            document.getElementById(e.state.panel).classList.add('active');
        }
    });
    
    // 초기 상태 설정
    if (window.location.hash) {
        const panelId = window.location.hash.substring(1);
        const panel = document.getElementById(panelId);
        if (panel) {
            // 모든 패널 숨기기
            document.querySelectorAll('.admin-panel').forEach(p => {
                p.classList.remove('active');
            });
            
            // 해당 패널 보이기
            panel.classList.add('active');
            
            // 모든 버튼 비활성화
            document.querySelectorAll('.admin-menu-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // 해당 버튼 활성화
            const btn = document.querySelector(`.admin-menu-btn[data-panel="${panelId}"]`);
            if (btn) {
                btn.classList.add('active');
            }
        }
    }
}

// DOM 로드 시 setupBackButton() 호출 추가
document.addEventListener('DOMContentLoaded', function() {
    // 기존 코드...
    setupBackButton();
});

}