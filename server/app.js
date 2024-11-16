// server/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./db/db'); // 데이터베이스 연결
require('dotenv').config();

const app = express();
app.use(express.json());

// CORS 설정 추가
app.use(cors());

// 프로젝트 API 엔드포인트 설정
app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// 정적 파일 제공 (React 클라이언트 빌드 폴더)
app.use(express.static(path.join(__dirname, '../client/build')));

// 클라이언트 측 라우팅 지원 (React 라우팅을 위한 설정)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// 서버 시작 코드 추가
const PORT = process.env.PORT || 3600;
if (process.env.NODE_ENV !== 'vercel') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Vercel 서버리스 함수로 내보내기
module.exports = app;
