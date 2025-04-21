const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// 데이터 초기화
let gameData = require('./data.json');
let dataVersion = 1;

// 미들웨어 설정
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client'))); // 클라이언트 파일 서빙

// API 엔드포인트
app.get('/api/data-version', (req, res) => {
    res.json({ version: dataVersion });
});

app.get('/api/get-data', (req, res) => {
    res.json(gameData);
});

app.post('/api/save-data', authenticate, (req, res) => {
    gameData = req.body;
    dataVersion++;
    
    fs.writeFile('./data.json', JSON.stringify(gameData), (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: '파일 저장 실패' });
        }
        res.json({ success: true, newVersion: dataVersion });
    });
});

// 간단한 인증 미들웨어 (실제로는 더 강력한 구현 필요)
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer admin_token') {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    next();
}

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});