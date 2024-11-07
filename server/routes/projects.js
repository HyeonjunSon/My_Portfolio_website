// server/routes/projects.js
const express = require('express');
const router = express.Router();
const pool = require('../db/db'); // 데이터베이스 연결

// 프로젝트 목록을 가져오는 API 엔드포인트
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
