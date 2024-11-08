// server/api/projects.js
const pool = require('../db/db'); // 데이터베이스 연결 파일을 불러옵니다.

module.exports = async (req, res) => {
  try {
    // 데이터베이스에서 프로젝트 데이터를 조회
    const [rows] = await pool.query('SELECT * FROM projects');
    // 조회된 데이터를 JSON 형식으로 반환
    res.json(rows);
  } catch (err) {
    // 에러가 발생하면 콘솔에 로그를 출력하고 500 상태로 응답
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
