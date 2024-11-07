// server/api/projects.js
const express = require('express');
const path = require('path');
const projectsRoute = require('../routes/projects'); // 상대 경로 수정
require('dotenv').config();

const app = express();

// API Route 설정
app.use('/api/projects', projectsRoute);

// 프론트엔드 빌드 파일 제공
app.use(express.static(path.join(__dirname, '../../client/build')));

// 모든 기타 요청에 대해 React의 index.html 반환 (클라이언트 측 라우팅 지원)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// app.listen() 생략: Vercel에서 서버리스 함수로 실행
module.exports = app;
