// db.js
const mysql = require('mysql2');

// Create connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       // your mysql username
    password: 'Qwert90!.',       // your mysql password (empty if none)
    database: 'shopleft_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();  // ← Add .promise() here for async/await support

module.exports = pool;