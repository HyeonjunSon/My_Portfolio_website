// server/routes/projects.js
const express = require('express');
const projectsRoute = require('../routes/projects'); // 상대 경로 주의
require('dotenv').config();

const app = express();
app.use(express.json());

// "/routes/projects" 경로로 들어오는 요청 처리
app.use('/routes/projects', projectsRoute);

// Vercel의 서버리스 함수로 내보내기
module.exports = app;
