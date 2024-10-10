const db = require('./db');

// Thêm người dùng mới
const createUser = (username, password, fullname, address, sex, email, callback) => {
  const sql = `INSERT INTO users (username, password, fullname, address, sex, email) 
               VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [username, password, fullname, address, sex, email], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// Lấy thông tin người dùng theo username
const getUserByUsername = (username, callback) => {
  const sql = `SELECT * FROM users WHERE username = ?`;
  db.query(sql, [username], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result[0]);
  });
};

// Cập nhật thông tin người dùng
const updateUser = (username, fullname, address, email, callback) => {
  const sql = `UPDATE users SET fullname = ?, address = ?, email = ? WHERE username = ?`;
  db.query(sql, [fullname, address, email, username], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = {
  createUser,
  getUserByUsername,
  updateUser
};