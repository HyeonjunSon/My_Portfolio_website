// server/db/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("데이터베이스 연결 성공");
    connection.release();
  } catch (error) {
    console.error("데이터베이스 연결 실패:", error);
  }
}

testConnection();

module.exports = pool;
